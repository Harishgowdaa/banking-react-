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

export default function ManagementSignup() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
     const classes = useStyles();

     const handleClick=(e)=>{
      e.preventDefault()
     
      const management={email,password}
      console.log(management)
      if(email&&password){

      fetch("http://localhost:8080/management/add",{ 
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(management)
        
      }).then(()=>{
        console.log("Management added")
        navigate("/")

          setTimeout(()=>{
            toast.success("Signup Success") 

          },1000  )
    })  
    // window.location.reload()
    }else{
        toast.error("Fill all details",{position:toast.POSITION.TOP_CENTER})
    }
    }

  return (
    <>
    <Container style={{paddingLeft:"250px"}}>
    <ToastContainer/>

        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>MANAGEMENT SIGN-UP</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth type='email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)} />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth type='password '
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      
      <div style={{textAlign:"center",}}>
      <Button variant="contained" color="primary" style={{marginRight:"20px"}}>Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Submit</Button>
      <br /><br />
      <Link to="/" style={{fontSize:"20px",color:"green"}}>Click here to Login</Link>
      </div>
    </form>
    </Paper>

 </Container>
 </>
  );
}


