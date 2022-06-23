import React from 'react'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
import TodayOneOrder from './TodayOneOrder'
import { useSelector } from 'react-redux'
import moment from 'moment'
const Orders = () => {
  const {orderList} =useSelector((state)=> state.orders)
  const  orders =orderList.filter(order=>moment(order.created_at).format('YYYY-MM-DD') == moment(new Date()).format('YYYY-MM-DD') )

   const renderedOrders =orders.length > 0 ?orders.map(order=> <TodayOneOrder order={order} />):<div> &nbsp;	&nbsp; No Orders Created todar</div>
  return (
    <div className='orders'>
      <span className='title'>
       Today Orders
      </span>
      <div className='oposite'>
         <div> <MdKeyboardArrowUp /></div>
         <div> <MdKeyboardArrowDown/> </div>
      </div>
     { renderedOrders}
      <span className='arrow'> <BsFillArrowUpRightCircleFill /> </span>
    </div>
  )
}

export default Orders