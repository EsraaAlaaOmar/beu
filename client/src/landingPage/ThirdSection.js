import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const ThirdSection = () => {
    return (
        <div className='third'>
             <Row>
                 <Col md={7}>
                    <div className='img'>
                    <img  src='/images/Landingpage/c2.png' />
                        <div className='box'></div>

                    </div>
                 </Col>
                 <Col md={5}>
                     <div className='text'>
                         <div className='title'>
                         Eget sit
                         </div>
                         <p>
                         Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem ex in ligula. Nunc purus est, consequat condimentum faucibus sed, iaculis sit amet massa. Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien ullamcorper at. Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu luctus dolor ex at quam. Fusce a nisi at erat dapibus posuere eget sed nulla. Nam sem odio, hendrerit vel mi ut, pharetra viverra massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc placerat ante vel eros semper bibendum. Donec ultricies vestibulum interdum.
                         </p>
                         <div className='white'>
                         Shop the collection now
                         <span> <BsFillArrowRightCircleFill /> </span>
                         </div>

                     </div>
                 
                 </Col>
             </Row>
        </div>
    )
}

export default ThirdSection
