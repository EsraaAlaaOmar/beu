import React from 'react'
import {AiOutlineQuestionCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import { Link } from 'react-router-dom'
const ContactSection = () => {
  return (
    <div className="contact-section">

      <Link  to='/log/contactus'>  <span className="way"><span className="icon"><AiOutlineQuestionCircle/></span>Need Help ?</span></Link>
      <Link  to='/product/call'> <span className="way"><span className="icon"><FiPhoneCall/></span>Call</span> </Link>
        <span className="way"><span className="icon"><AiOutlineWhatsApp/></span>WhatApp</span>
        
    </div>
  )
}

export default ContactSection