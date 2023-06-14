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

export default function ManagementStatus() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[acno,setAccno]=useState('')
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const status={acno}
    console.log(status)
    if(acno){
    
    fetch(`http://localhost:8080/management/accountchange/${acno}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(status)

  }).then(()=>{
    console.log("Management Status Changed")
  })  
  toast.success("Status Changed Successfully")
  // window.location.reload()
  }else{
      toast.error("Account Number is Mandatory",{position:toast.POSITION.TOP_CENTER})
  }
}

  return (
      <>
      <ToastContainer/>
    <Container style={{paddingLeft:"250px"}}>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>MANAGEMENT-ACCOUNT-STATUS</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth 
      value={acno}
      onChange={(e)=>setAccno(e.target.value)} />
     
     <div style={{textAlign:"center",}}>
     <Button variant="contained" color="primary" style={{marginRight:"20px"}}>Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Change Status</Button>
      <br /> <br />
      <Link to="/ManagementFetchAccounts" style={{fontSize:"20px",color:"green"}}>Click here to See the Accounts</Link>
     </div>
    </form>
    </Paper>

 </Container>
 </>
  );
}
