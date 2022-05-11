import React from 'react'

const Invoices = () => {
  return (
    <div className="f-box-container">
        <div className="top">
            <span>Your Invoices</span>
           
            <div className="bold">$ 25,833</div>
        </div>

        <div className="buttom">
             6 paid invoices
          <span className="oposite">VIEW TRANSACTION</span>
          <br/>
        </div>

    </div>
  )
}

export default Invoices