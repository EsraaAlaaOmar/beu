import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import {BsFillArrowUpRightCircleFill, BsThreeDotsVertical} from 'react-icons/bs'
import { VictoryBar, VictoryChart,VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter,mountNode, VictoryTheme, VictoryGroup, VictoryPie } from 'victory';
import Welcome from './Welcome';
import LineChart from './LineChart';
import LinewCircle from './LinewCircle';
 import {Row, Col} from 'react-bootstrap'
import Statistics from './Statistics';
import Circle from './Circle';
import Natural from './Natural';
import Orders from './Orders';
import Transaction from './Transaction';
import MonthlyIncome from './MonthlyIncome';
import Nav from '../reusable/Nav';
import { useDispatch } from 'react-redux';
import {getOrders} from '../../store/orderSlice'
import moment from 'moment'
import { Route, Routes } from 'react-router-dom';
import OrderProducts from '../reusable/OrderProducts';
// const StyledPoint = styled.circle`
//   fill: ${(props) => props.color};
// `;



const Dashbord = ({setActiveIndex}) => {
  setActiveIndex()

  const {userInfo} =useSelector((state)=> state.auth)
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
      <Nav />
     
     
      {isLoading ? 
      <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
      <div className="box dashbord">

          <div className="title-text">Dashboard</div>
        
        <Row>
          <Col sm={12} lg={8}>
          <Welcome name={userInfo&&userInfo.name}/>
          <Row>
            <Col sm={12} md={7}>
              <LineChart orderList={orderList} />
            </Col>
            <Col sm={12} md={5}>
            <LinewCircle  orderList={orderList}/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={7}>
                <Statistics />
            </Col>
            <Col sm={12} md={5}>
                <div className="earned">
                  <div >$ {earnedThisMonth} </div>
                  <p>Earned This Month</p>
                  <span className='arrow'> <BsFillArrowUpRightCircleFill /> </span>
                </div>
                <div className="precentage-div">
                  <div>
                  <Circle />
                  </div>
                  
                  
                
                <br/>
                
                  
                  
                     
                </div>
            </Col>
          </Row>
      
          </Col>
          <Col sm={12} lg={4}>
          {/* {orderList.length>0 && <Natural orderList={orderList}/>} */}
          <Orders />
          <MonthlyIncome />
          </Col>
        </Row>

      
  
  <Transaction order={orderList[0]} />
        
          
        
      </div>
}
    
<Routes>
                <Route path="/orderproduct" element={<OrderProducts />} exact /> 
                

        </Routes>
     
    </> 
  )
};

export default Dashbord;

