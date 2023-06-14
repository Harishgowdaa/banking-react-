import  React,{useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';

export default function Student() {
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    // const[students,setStudents]=useState([])


    const handleclick=(e)=>{
        e.preventDefault()
        const student={name , address}
        console.log(student);

        fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added")
  })
    }

    // useEffect(()=>{
    //   fetch("http://localhost:8080/student/getAll")
    //   .then(res=>res.json())
    //   .then((result)=>{setStudents(result);
    //   }
    // )  
    // },[])

  return (
    <>
    <h1>Add student</h1>
    <form action="">
    <TextField  label="name" variant="filled" fullWidth
    value={name} onChange={(e)=>setName(e.target.value)}/>

    <TextField  label="address" variant="standard" fullWidth 
    value={address} onChange={(e)=>setAddress(e.target.value)}/>
    <button onClick={handleclick}>Submit</button>
    </form>

    
    {/* {students.map((x,index)=>{
      <>
      <li key={index}>{x.id}</li>
      <li key={index}>{x.name}</li>
      <li key={index}>{x.address}</li>
      </>
    })} */}
    </>
  );
}
