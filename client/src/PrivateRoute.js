import React from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from './landingPage/Navbar'
import Login from './sitePages/Login/Login'

const PrivateRoute = ({ notUser, redirectPath = '/log/login', children }) => {
    console.log(notUser)
  return (
      <>
          {notUser ?
                <div className='log'>
                  <Navbar navigate={false} />
                  <Login />
                </div>
              :
          children
       }
      </>
  )
}

export default PrivateRoute