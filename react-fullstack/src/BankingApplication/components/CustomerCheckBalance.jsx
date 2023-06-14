import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function CustomerCheckBalance() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[acno,setAccno]=useState('')
     const classes = useStyles();

  let [data, setData] = useState([]) 

  let [amount , setAmount] = useState("")

  useEffect(()=>{
    window.fetch("http://localhost:8080/customer/account/check/1002121111")
    .then((x)=>x.json())
    .then((y)=>setData(y))
    .catch((err)=>{ console.log(err)})
  },[])

  
  let finaldata=data.data

  const handleClick=(e)=>{
    e.preventDefault()
    console.log(finaldata);
    
    // console.log(finaldata[0].number);

    
   
}

  return (
    <>
    <ToastContainer/>
    <Container style={{paddingLeft:"250px"}}>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>CHECK-ACCOUNT-BALANCE</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth required
      value={acno}
      onChange={(e)=>setAccno(e.target.value)} />
      
      <div style={{textAlign:"center",}}>
      <Button variant="contained" color="primary" style={{marginRight:"20px"}}>Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> View Balance</Button>
      <br /> <br />
      <Link to="/Deposit" style={{fontSize:"20px",color:"green"}}>Click here to Add Amount</Link>
      </div>
    </form>
    </Paper>

 <center><h1>Your Total Balance is : {finaldata}</h1></center>
 </Container>
 </>
  );
}
