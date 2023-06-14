import React, { useEffect, useState } from 'react';
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

export default function ViewTransactions() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[acno,setAccno]=useState('')
     const classes = useStyles();

  let [data, setData] = useState([]) 

let [id , setId] = useState("")
  let [balance , setBalance] = useState("")
  let [dateTime , setDateTime] = useState("")
  let [deposit , setDeposit] = useState("")
  let [withdraw , setWithdraw] = useState("")

let [id1 , setId1] = useState("")
  let [balance1 , setBalance1] = useState("")
  let [dateTime1 , setDateTime1] = useState("")
  let [deposit1 , setDeposit1] = useState("")
  let [withdraw1 , setWithdraw1] = useState("")

 

     useEffect(()=>{
      window.fetch(`http://localhost:8080/customer/account/viewtransaction/${acno}`)
      .then((x)=>x.json())
      .then((y)=>setData(y))
      .catch((err)=>{ console.log(err)})
    },[acno])
  
    let finaldata=data.data
  
    const handleClick=(e)=>{  
      e.preventDefault()
      console.log(finaldata);

    setId(finaldata[0].id)
    setBalance(finaldata[0].balance)
    setDateTime(finaldata[0].dateTime)
    setDeposit(finaldata[0].deposit)
    setWithdraw(finaldata[0].withdraw)

    setId1(finaldata[1].id)
    setBalance1(finaldata[1].balance)
    setDateTime1(finaldata[1].dateTime)
    setDeposit1(finaldata[1].deposit)
    setWithdraw1(finaldata[1].withdraw)

    }
  return (
<>
<ToastContainer/>
    <Container style={{paddingLeft:"250px"}} autoComplete="none">
        <Paper elevation={3} style={paperStyle} >
            <h1 style={{color:"blue",textAlign:"center"}}><u>View Transactions</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth required 
      value={acno}
      onChange={(e)=>setAccno(e.target.value)} />
      
      <div style={{textAlign:"center",}}>
      <Button variant="contained" color="primary" style={{marginRight:"20px"}}>Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> View History</Button>
      <br /><br />
      <Link to="/Withdraw" style={{fontSize:"20px",color:"green"}}>Withdraw Money</Link>
      </div>
    </form>
    </Paper>

                  <center><h1>Transaction History</h1></center>
        
     <div style={{display:"flex"}}>
        <table style={{border:"5px solid white" , display:"flex",flexDirection:"column",width:"400px",marginLeft:"100px"}}>
          <tr>
            <td><h3>Id : {id}</h3></td>
          </tr>
          <tr>
            <td><h3>Balance : {balance}</h3></td>
          </tr>
          <tr>
            <td><h3>Data and Time : {dateTime}</h3></td>
          </tr>
          <tr>
            <td><h3>Deposit : {deposit}</h3></td>
          </tr>
          <tr>
            <td><h3>Withdraw : {withdraw}</h3></td>
          </tr>
        </table>

        <table style={{border:"5px solid white" , display:"flex",flexDirection:"column",width:"400px",marginLeft:"100px"}}>
          <tr>
            <td><h3>Id : {id1}</h3></td>
          </tr>
          <tr>
            <td><h3>Balance : {balance1}</h3></td>
          </tr>
          <tr>
            <td><h3>Data and Time : {dateTime1}</h3></td>
          </tr>
          <tr>
            <td><h3>Deposit : {deposit1}</h3></td>
          </tr>
          <tr>
            <td><h3>Withdraw : {withdraw1}</h3></td>
          </tr>
        </table>

      
        </div>

 </Container>
 </>
  );
}
