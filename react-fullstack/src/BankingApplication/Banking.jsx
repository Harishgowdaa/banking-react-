import React from 'react'
import CreateAccount from './components/CreateAccount'
import Customerlogin from './components/Customerlogin'
import CustomerSignup from './components/CustomerSignup'
import ManagementLogin from './components/ManagementLogin'
import ManagementSignup from './components/ManagementSignup'
import ManagementStatus from './components/ManagementStatus'
import CustomerViewAccount from './components/CustomerViewAccount'
import CustomerCheckBalance from './components/CustomerCheckBalance'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'
import ViewTransactions from './components/ViewTransactions'
import ManagementFetchAccounts from './components/ManagementFetchAccounts'
import VerifyOTP from './components/VerifyOTP'
import PageNotFound from './components/PageNotFound'
import Home from './Home'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"


const Banking = () => {
  return (
    <>
<Router>
        <Home/>
        <Routes>
              <Route path='/ManagementSignup' element={<ManagementSignup/>}/>
              <Route path="/CustomerSignup" element={<CustomerSignup />}/>
              <Route  path="/VerifyOTP" element={<VerifyOTP/>}/>
              <Route path="/Customerlogin" element={<Customerlogin/>} />
              <Route path="/CreateAccount" element={<CreateAccount/>} />
              <Route path="/" element={<ManagementLogin/>} />
              <Route path="/ManagementFetchAccounts" element={<ManagementFetchAccounts/>} />
              <Route path="/ManagementStatus" element={<ManagementStatus/>} />
              <Route path="/CustomerViewAccount" element={<CustomerViewAccount/>} />
              <Route path="/CustomerCheckBalance" element={<CustomerCheckBalance/>} />
              <Route path="/Deposit" element={<Deposit/>} />
              <Route path="/Withdraw" element={<Withdraw/>} />
              <Route path="/ViewTransactions" element={<ViewTransactions/>} />
              <Route path="/*" element={<PageNotFound/>} />
        </Routes>
    </Router>
    </>
  )
}
export default Banking