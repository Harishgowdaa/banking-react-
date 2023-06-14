import React from 'react';
import { Container ,Paper,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';

export default function ManagementFetchAccounts() {

  let [data, setData] = useState([]) 
  
  let [account , setAccount] = useState(null)


  useEffect(()=>{
    
  },[])

  const handleGetData=()=>{
    fetch("http://localhost:8080/management/accounts")
    .then((x)=>x.json())
    .then((y)=>{
      console.log(y,"resp");
      setAccount(y.data);
    })
    
  
    .catch((err)=>{ console.log(err)})
  }

  let finaldata=data.data

  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}

  const handleClick=(e)=>{  
    e.preventDefault()
    console.log(finaldata);
    
    console.log(finaldata[0].number);

  
}

useEffect(()=>{
console.log("------------------",account)
},[account])

  return (

    <Container style={{paddingLeft:"250px"}}>
        
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue",textAlign:"center"}}><u>FETCH-ALL-ACCOUNTS</u></h1>

      <div style={{textAlign:"center",}}>
      <Button variant="contained" color="primary" style={{marginRight:"20px"}}> Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleGetData}> View Accounts</Button>
      <br /> <br />
      <Link to="/" style={{fontSize:"20px",color:"green"}}>Click here to Login First</Link>
      <br /><br />
      <Link to="/ManagementStatus" style={{fontSize:"20px",color:"green"}}>Click here to Change the Status Of Accounts</Link>
      </div>



      {/* amount

bankTransactions

banklimit

number

status

type */}


      <h1 >"cdvxdvvx</h1>
      {account && account.map(function(x,index){
        return <>
        
          <h1 key={index}>{x.number+" "+ x.amount+ " " + x.banklimit + " " + x.number+ " " + (x.status ? "Active" : "De-active")} </h1>
        </>
      })}
    </Paper>

 </Container>
  );
}
