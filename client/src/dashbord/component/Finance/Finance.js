import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
import { ReactComponent as Logo } from '../../images/finance.svg';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
import { useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../store/orderSlice'
import moment from 'moment'
import Nav from '../reusable/Nav';
import Orders from '../Dashbord/Orders';
import Natural from '../Dashbord/Natural';
import Statistics from '../Dashbord/Statistics';
import LineChart from '../Dashbord/LineChart';
import LinewCircle from '../Dashbord/LinewCircle';
import Circle from '../Dashbord/Circle';

const Finance = ({setActiveIndex}) => {
  setActiveIndex()

  const {orderList, isLoading} =useSelector((state)=> state.orders)
  
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getOrders())
  

  },[dispatch])


  
  //get earned this month
  const  thisMonthOrders =orderList.filter(order=>moment(order.created_at).format('YYYY-MM') >= moment(new Date()).format('YYYY-MM') )
   const earnedThisMonth= thisMonthOrders.reduce((accumulator, current) => accumulator + current.total_price, 0);
   
  return (
    <>
       < Nav />
       {isLoading ? 
        <div  className="box loading"> <img src='/images/loading.gif' /></div> 
        :
       <div className="box  dashbord ">  
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text">Finance</span>
        <Row>
            <Col>
              <Orders />
            </Col>
            <Col>
             <LineChart orderList={orderList}/>
             <div className="finance-sta">
             <Statistics orderList={orderList}/>
             </div>
            </Col>
            <Col>
             <LinewCircle orderList={orderList}/>
              <div className="earned">
                  <div >${earnedThisMonth}</div>
                  <p>Earned This Month</p>
                  <span className='arrow'> <BsFillArrowUpRightCircleFill /> </span>
                </div>
                <div className="precentage-div">
                  <div>
                  <Circle />
                  </div>
                  </div>
            </Col>
       
        </Row>
       </div>
      }
    </>
   
  )
}

export default Finance