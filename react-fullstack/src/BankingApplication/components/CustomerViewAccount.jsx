import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function CustomerViewAccount() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[cust_id,setCust_id]=useState('')
     const classes = useStyles();

  let [data, setData] = useState([]) 
  
  let [accnumber , setAccno] = useState("")
  let [type , setType] = useState("")
  let [banklimit , setBanklimit] = useState("")
  let [amount , setAmount] = useState("")
  let [status , setStatus] = useState("")
  let [bankTransactions , setBankTransactions] = useState("")

  let [accnumber1 , setAccno1] = useState("")
  let [type1 , setType1] = useState("")
  let [banklimit1 , setBanklimit1] = useState("")
  let [amount1 , setAmount1] = useState("")
  let [status1 , setStatus1] = useState("")
  let [bankTransactions1 , setBankTransactions1] = useState("")


     useEffect(()=>{
      window.fetch(`http://localhost:8080/customer/accounts/121401101`)
      .then((x)=>x.json())
      .then((y)=>setData(y))
      .catch((err)=>{ console.log(err)})
    },[])
  
    let finaldata=data.data

    const handleClick=(e)=>{  
      e.preventDefault()
      console.log(finaldata);

    setAccno(finaldata[0].number)
    setType(finaldata[0].type)
    setBanklimit(finaldata[0].banklimit)
    setAmount(finaldata[0].amount)
    setStatus(finaldata[0].status)
    setBankTransactions(finaldata[0].bankTransactions)

    setAccno1(finaldata[1].number)
    setType1(finaldata[1].type)
    setBanklimit1(finaldata[1].banklimit)
    setAmount1(finaldata[1].amount)
    setStatus1(finaldata[1].status)
    setBankTransactions1(finaldata[1].bankTransactions)
      
    console.log(finaldata[0].number);

    }

  return (
    <>
    <ToastContainer/>
    <Container style={{paddingLeft:"250px"}}>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>CUSTOMER-VIEW-ACCOUNTS</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Customer ID" variant="outlined" fullWidth 
      value={cust_id}
      onChange={(e)=>setCust_id(e.target.value)} />
      
    <div style={{textAlign:"center",}}>
    <Button variant="contained" color="primary" style={{marginRight:"20px"}}>cancel</Button>
    <Button variant="contained" color="secondary" onClick={handleClick}> View Accounts</Button>
    <br /><br />
    <Link to="/CreateAccount" style={{fontSize:"20px",color:"green"}}>Click here to Create-Account</Link>
    <br /><br />
    <Link to="/Deposit" style={{fontSize:"20px",color:"green"}}>Deposit Money</Link>
    </div>

    </form>
    </Paper>

      <div style={{display:"flex"}}>
        <table style={{border:"5px solid white" , display:"flex",flexDirection:"column",width:"400px",marginLeft:"100px"}}>
          <tr>
            <td><h3>Account Number : {accnumber}</h3></td>
          </tr>
          <tr>
            <td><h3>Account Type : {type}</h3></td>
          </tr>
          <tr>
            <td><h3>Bank Limit : {banklimit}</h3></td>
          </tr>
          <tr>
            <td><h3>Balance : {amount}</h3></td>
          </tr>
          <tr>
            <td>{status !== null &&( 
            <h3>Status is : {status.toString()}</h3>
            )}</td>
          </tr>
        </table>

        <table style={{border:"5px solid white" , display:"flex",flexDirection:"column",width:"400px",marginLeft:"100px"}}>
          <tr>
            <td><h3>Account Number : {accnumber1}</h3></td>
          </tr>
          <tr>
            <td><h3>Account Type : {type1}</h3></td>
          </tr>
          <tr>
            <td><h3>Bank Limit : {banklimit1}</h3></td>
          </tr>
          <tr>
            <td><h3>Balance : {amount1}</h3></td>
          </tr>
          <tr>
            <td>{status1 !== null &&( 
            <h3>Status is : {status1.toString()}</h3>
            )}</td>
          </tr>
        </table>
        </div>

 </Container>
 </>
  );
}
