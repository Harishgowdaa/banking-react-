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

export default function Withdraw() {
  let navigate=useNavigate()
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[acno,setAcno]=useState('')
    const[amount,setAmount]=useState('')
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const withdraw={acno,amount}
    console.log(withdraw)   
    
    if(acno&&amount){
    fetch(`http://localhost:8080/customer/account/withdraw/${acno}/${amount}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(withdraw)

  }).then(()=>{
    console.log("Withdraw Success")
  })  
  toast.success("Withdraw Success")
    window.location.reload()
    }else{
        toast.error("Fill all details",{position:toast.POSITION.TOP_CENTER})
    }
}

  return (
    <>
    <ToastContainer/>
    <Container style={{paddingLeft:"250px"}}>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>WITHDRAW-MONEY</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth required
      value={acno}
      onChange={(e)=>setAcno(e.target.value)} />
      <TextField id="outlined-basic" label="Amount" variant="outlined" fullWidth
      value={amount}
      onChange={(e)=>setAmount(e.target.value)} />

      <div style={{textAlign:"center",}}>
      <Button variant="contained" color="primary" style={{marginRight:"20px"}}>Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Withdraw</Button>
      <br /><br />
      <Link to="/Deposit" style={{fontSize:"20px",color:"green"}}>Click here to Deposit</Link>
      <br /><br />
      <Link to="/ViewTransactions" style={{fontSize:"20px",color:"green"}}>Click here to View Transactions</Link>
      </div>
    </form>
    </Paper>

 </Container>
 </>
  );
}
