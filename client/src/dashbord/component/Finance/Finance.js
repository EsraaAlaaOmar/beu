import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
import { ReactComponent as Logo } from '../../images/finance.svg';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
import Invoices from './Invoices';
import Salaries from './Salaries';
import Nav from '../reusable/Nav';
import Orders from '../Dashbord/Orders';
import Natural from '../Dashbord/Natural';
import Statistics from '../Dashbord/Statistics';
import LineChart from '../Dashbord/LineChart';
import LinewCircle from '../Dashbord/LinewCircle';
import Circle from '../Dashbord/Circle';
const Finance = ({setActiveIndex}) => {
  setActiveIndex()
  return (
    <>
       < Nav first_link='finance' second_link='Charts'  first_link_url='/dashbord/finance'   second_link_url='/dashbord/finance'/>
       <div className="box  dashbord ">  
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text">Finance</span>
        <Row>
            <Col>
              <Orders />
            </Col>
            <Col>
             <LineChart />
             <div className="finance-sta">
             <Statistics />
             </div>
            </Col>
            <Col>
             <LinewCircle />
              <div className="earned">
                  <div >$ 223K </div>
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
    </>
   
  )
}

export default Finance