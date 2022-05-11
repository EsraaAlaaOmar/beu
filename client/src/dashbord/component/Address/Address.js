import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../images/address.svg';
import Nav from '../reusable/Nav';
import Areas from './Areas';
import Cities from './Cities';
import Counteries from './Counteries';
import Detailed from './Detailed';
const Address = () => {
  return (
    <>
      <Nav />
      <div className="address box"> 
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> Addresses </span>

        <Row>
            <Col  sm={6} md={4} lg={3}>
               <Counteries />
            </Col>
            <Col  sm={6} md={4} lg={3}>
               <Cities />
            </Col>
            <Col  sm={6} md={4} lg={3}>
              <Areas />
            </Col>
            <Col  sm={6} md={4} lg={3}>
             <Detailed />
            </Col>
        </Row>
    </div>
    </>
    
  )
}

export default Address