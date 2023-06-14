import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate,Link} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },    
  },
}));

export default function ManagementLogin() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    // email.current.value=""
    // password.current.value=""
    const management={email,password}
    console.log(management)
    
    if(email&&password){

    fetch("http://localhost:8080/management/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(management)

  }).then((res)=>{
console.log("-------",res)
if(res.status === 200){
  console.log("Management Login Success")
}
else{
  toast.error(res.data)
}
    
    // navigate("/ManagementFetchAccounts")  
  }).catch((e)=>{
console.log("dsdsaacasc",e)

  })
  
    }else{
      toast.error("Fill all details",{position:toast.POSITION.TOP_CENTER})
    }
}

  return (
<>
    <Container style={{paddingLeft:"250px"}}>
    <ToastContainer/>

        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>MANAGEMENT LOGIN-PAGE</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth 
      value={email}
      onChange={(e)=>setEmail(e.target.value)} />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      
    <div style={{textAlign:"center",}}>
    <Button variant="contained" color="primary" style={{marginRight:"20px"}}>Cancel</Button>
    <Button variant="contained" color="secondary" onClick={handleClick}> Submit</Button>
    <br /> <br />
    <Link to="/ManagementSignup" style={{fontSize:"20px",color:"green"}}>Click here to Signup</Link>
    </div>
    </form>
    </Paper>

 </Container>
 </>
  );
}
