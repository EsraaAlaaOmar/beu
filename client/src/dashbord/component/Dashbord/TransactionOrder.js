import React from 'react'
import { ReactComponent as Logo } from '../../images/order.svg';
const TransactionOrder = () => {
  return (
    <div className="order">
        <span className="icon"><Logo  style= {{fill:'#2D62ED'}} /></span>    
        You received a new order from
        <img src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996' />
        Kelly Valdez
        <button>View</button>
    </div>
    )
}

export default TransactionOrder