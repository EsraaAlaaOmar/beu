import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div className="f-box-container">
        <div className="top">
            <span>Paid Orders</span>
            <span className="oposite">last week</span>
            <div className="bold">$ 25,833</div>
        </div>

        <div className="buttom">
          <span className="bold">150</span> order
          <Link to='/dashbord/'><span className="oposite">VIEW TRANSACTION</span></Link>
          <br/>
        </div>

    </div>
  )
}

export default Orders