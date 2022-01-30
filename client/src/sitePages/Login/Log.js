import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../../landingPage/Navbar'
import SignUp from './SignUp'
import Login from './Login'
import PhoneConfirmation from './PhoneConfirmation'
import MailConfirmation from './MailConfirmation'
import ForgetPassword from './ForgetPassword'
import ForgetConfirmation from './ForgetConfirmation'
import ResetPassword from './ResetPassword'
import ResetCode from './ResetCode'
const Log = () => {
    return (
        <div className='log'>
            <Navbar />
            <Routes>
            <Route path="/sign" element={<SignUp />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/phoneconfirmation" element={<PhoneConfirmation />} exact />
            <Route path="/mailconfirmation" element={<MailConfirmation />} exact />
            <Route path="/forget" element={<ForgetPassword />} exact />
            <Route path="/forgetconfirmation" element={<ForgetConfirmation />} exact />
            <Route path="/resetpassword" element={<ResetPassword />} exact />
            <Route path="/resetcode" element={<ResetCode />} exact />
            </Routes>
        </div>
    )
}

export default Log
