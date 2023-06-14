import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField, makeStyles } from '@material-ui/core';
import { Container ,Paper,Button} from '@material-ui/core';
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));

export default function CreateAccount() {
  let navigate=useNavigate()

  const[acno,setAccno]=useState('')
  let [accType, setAccType] = useState("")
  const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const account={acno,accType}
    console.log(account)

    if(acno&&accType){

    fetch(`http://localhost:8080/customer/account/${acno}/${accType}`,{ 
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(account)
      
    }).then(()=>{
      console.log("Account Created")
      // navigate("/")
  })  
  toast.success("Account Created Success")
  // window.location.reload()
  }else{
      toast.error("Fill all details",{position:toast.POSITION.TOP_CENTER})
  }
  }
    
  return (
    <>    
    <ToastContainer/>
        <Container style={{paddingLeft:"250px"}}>
        <Paper elevation={3} >
            <h1 style={{color:"blue",textAlign:"center"}}><u>CREATE-ACCOUNT</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth 
      value={acno}
      onChange={(e)=>setAccno(e.target.value)} />

    <FormControl className={classes.root} noValidate autoComplete="off">
      <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="savings" control={<Radio />} label="savings" onChange={(e)=>{
          setAccType(e.target.value)

        }} />
        <br />
        <FormControlLabel value="current" control={<Radio />} label="current" onChange={(e)=>{
          setAccType(e.target.value)

        }} />
      </RadioGroup>
    </FormControl>
      <div style={{textAlign:"center",}}>
      <Button variant="contained" type='reset' color="primary" style={{marginRight:"20px"}}> Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Submit</Button>
      <br /><br />
      <Link to="/Customerlogin" style={{fontSize:"20px",color:"green"}}>Click here to Login First</Link>
      </div>
    </form>
    </Paper>

 </Container>
    
    </>

  );
}
