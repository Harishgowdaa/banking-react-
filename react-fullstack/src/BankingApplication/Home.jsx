import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css";

const Home = () => {
  return (
        <>
          <div style={{border:"2px solid ", textAlign:"center",fontSize:"18px",height:"75px", color: "white",
               backgroundColor: "DodgerBlue",padding: "10px",width:"100%",top:"0",}}>
                      <div><h1>ONLINE  BANKING MANAGEMENT</h1></div>
           </div>
{/*            
           <div>
                      <marquee width="60%" direction="left" height="100px" >
            This is a sample scrolling text that has scrolls in the upper direction.
            </marquee>
                      </div>        */}

          <nav>
            <ul><li><NavLink to="/ManagementSignup"> MANAGEMENT SIGN-UP</NavLink></li></ul>
            <ul><li><NavLink to="/CustomerSignup">CUSTOMER SIGN-UP</NavLink></li></ul>
            <ul><li><NavLink to="/VerifyOTP">VERIFY-OTP</NavLink></li></ul>
            <ul><li><NavLink to="/Customerlogin">CUSTOMER-LOGIN</NavLink></li></ul>
            <ul><li><NavLink to="/CreateAccount">CREATE-ACCOUNT</NavLink></li></ul>
            <ul><li><NavLink to="/">MANAGEMENT-LOGIN</NavLink></li></ul>
            <ul><li><NavLink to="/ManagementFetchAccounts">MANAGEMENT-FETCH-ACCOUNTS</NavLink></li></ul>
            <ul><li><NavLink to="/ManagementStatus">MANAGEMENT-STATUS</NavLink></li></ul>
            <ul><li><NavLink to="/CustomerViewAccount">CUSTOMER-VIEW-ACCOUNTS</NavLink></li></ul>
            <ul><li><NavLink to="/CustomerCheckBalance">CUSTOMER-CHECK-BALANCE</NavLink></li></ul>
            <ul><li><NavLink to="/Deposit">DEPOSIT</NavLink></li></ul>
            <ul><li><NavLink to="/Withdraw">WITHDRAW</NavLink></li></ul>
            <ul><li><NavLink to="/ViewTransactions">VIEW-TRANSACTIONS</NavLink></li></ul>
          </nav>
              
</>
  )
}

export default Home