import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));
  
const CustomerSignup = () => {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[mobile,setMobile]=useState('')
    const[dob,setDob]=useState('')
     const classes = useStyles();

     const handleClick=(e)=>{
        e.preventDefault()
        // email.current.value=""
        // password.current.value=""
        const customer={name,email,password,mobile,dob}
        console.log(customer)
      if(name&&email&&password&&mobile&&dob){

        fetch("http://localhost:8080/customer/add",{ 
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(customer)
    
      }).then(()=>{
        console.log("Customer added")
        // navigate("/Customerlogin")
      })  
      toast.success("Signup Success")
      // window.location.reload()
    }else{
      toast.error("Fill all details",{position:toast.POSITION.TOP_CENTER})
    }
    }
    
  return (
    <>
    <ToastContainer/>
     <Container style={{paddingLeft:"250px"}}>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>CUSTOMER SIGN-UP</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth required
      value={name}
      onChange={(e)=>setName(e.target.value)} />

      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth type='email' required
      value={email}
      onChange={(e)=>setEmail(e.target.value)} />

      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth type='password' required
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      
      <TextField id="outlined-basic" label="Mobile" variant="outlined" fullWidth required
      value={mobile}
      onChange={(e)=>setMobile(e.target.value)} />

      <TextField id="outlined-basic" type='date' label="DOB" variant="outlined" fullWidth required
      value={dob}
      onChange={(e)=>setDob(e.target.value)} />

      <div style={{textAlign:"center",}}>
      <Button variant="contained" color="primary" style={{marginRight:"20px"}}> Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Submit</Button>
      <br /> <br />
      <Link to="/Customerlogin" style={{fontSize:"20px",color:"green"}}>Click hereto Login</Link>
      <br /> <br />
      <Link to="/CreateAccount" style={{fontSize:"20px",color:"green"}}>Click here to Create Account</Link>
      </div>
    </form>
    </Paper>

 </Container>
    
    </>
  )
}
export default CustomerSignup