import React from 'react';
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
import Login from '../Auth/Login'

// const StyledPoint = styled.circle`
//   fill: ${(props) => props.color};
// `;



const Dashbord = ({setActiveIndex}) => {
  const {loggedIn} =useSelector((state)=> state.auth)
  const {name } =useSelector((state)=> state.logedDetails)
  setActiveIndex()
  return (
 <>
      <Nav />
     
   
      <div className="box dashbord">
          <div className="title-text">Dashboard</div>
        
        <Row>
          <Col sm={12} lg={8}>
          <Welcome name={name}/>
          <Row>
            <Col sm={12} md={7}>
              <LineChart />
            </Col>
            <Col sm={12} md={5}>
            <LinewCircle />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={7}>
                <Statistics />
            </Col>
            <Col sm={12} md={5}>
                <div className="earned">
                  <div >$ 223K </div>
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
          <Natural />
          <Orders />
          <MonthlyIncome />
          </Col>
        </Row>

      
  
  <Transaction />
        
          
        
      </div>
    <Login />    
    
     
    </> 
  )
};

export default Dashbord;

