import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Auth/Login'
import Nav from '../reusable/Nav'
import SellRow from './SellRow'
const Sell = ({setActiveIndex}) => {
  setActiveIndex()
    const {loggedIn} =useSelector((state)=> state.auth)
  return (
    <>
      <Nav first_link='All'  first_link_url='/dashbord/sell' />
      
    
           <div className="box">
              <div className="title-text">Sell in Beau Wow</div>
              <div className="table-box no-butons">
                    <table className='Table'>
                    <thead>
                    <tr className="head">
                       
                        <th>USER</th>
                        <th>BUSINESS NAME</th>
                    
                    
                        <th>ADDRESS</th>
                        <th>EMAIL</th>
                        <th>PHONE NUMBER</th>
                        
                        
                        <th>LOGO</th>
                        <th>FILES</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                       <SellRow />
                    </tbody>
                </table>
                   
             </div>

          </div> 
    </>
  )
}

export default Sell