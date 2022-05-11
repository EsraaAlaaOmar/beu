import React from 'react'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
import TodayOneOrder from './TodayOneOrder'
const Orders = () => {
  return (
    <div className='orders'>
      <span className='title'>
       Today Orders
      </span>
      <div className='oposite'>
         <div> <MdKeyboardArrowUp /></div>
         <div> <MdKeyboardArrowDown/> </div>
      </div>
      <TodayOneOrder />
      <TodayOneOrder />
      <TodayOneOrder />
      <TodayOneOrder />
      <TodayOneOrder />
      <TodayOneOrder />
      <span className='arrow'> <BsFillArrowUpRightCircleFill /> </span>
    </div>
  )
}

export default Orders