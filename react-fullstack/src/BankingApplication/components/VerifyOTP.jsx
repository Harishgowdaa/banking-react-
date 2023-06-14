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

export default function VerifyOTP() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[custid,setCustid]=useState('')
    const[otp,setOtp]=useState('')
     const classes = useStyles();

     const handleClick=(e)=>{
        e.preventDefault()
        
        const OTP={custid,otp}
        console.log(OTP)
        if(custid&&otp){
        fetch(`http://localhost:8080/customer/otp/${custid}/${otp}`,{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(OTP)
    
      }).then(()=>{
        console.log("OTP Verified")
        // navigate("/Customerlogin")
      })  
      toast.success("OTP Verified")
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
    <h1 style={{color:"blue",textAlign:"center"}}><u>Verify Your OTP</u></h1>

<form className={classes.root} noValidate autoComplete="off">

<TextField id="outlined-basic" label="Customer Id" variant="outlined" fullWidth 
value={custid}
onChange={(e)=>setCustid(e.target.value)} />
<TextField id="outlined-basic" label="OTP" variant="outlined" fullWidth
value={otp}
onChange={(e)=>setOtp(e.target.value)} />

<div style={{textAlign:"center",}}>
<Button variant="contained" color="primary" style={{marginRight:"20px"}}>Cancel</Button>
<Button variant="contained" color="secondary" onClick={handleClick}> Verify</Button>
<br /><br />
<Link to="/CreateAccount" style={{fontSize:"20px",color:"green"}}>Click here to Create Account</Link>
</div>
</form>
</Paper>

</Container>
 </>
  );
}












