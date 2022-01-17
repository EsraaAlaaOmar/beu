import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../../landingPage/Navbar'
import SignUp from './SignUp'
import Login from './Login'
import PhoneConfirmation from './PhoneConfirmation'
import MailConfirmation from './MailConfirmation'
const Log = () => {
    return (
        <div className='log'>
            <Navbar />
            <Routes>
            <Route path="/sign" element={<SignUp />} exact />
            <Route path="/" element={<Login />} exact />
            <Route path="/phoneconfirmation" element={<PhoneConfirmation />} exact />
            <Route path="/mailconfirmation" element={<MailConfirmation />} exact />
            </Routes>
        </div>
    )
}

export default Log
