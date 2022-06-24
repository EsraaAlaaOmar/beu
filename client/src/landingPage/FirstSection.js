import React from 'react'
import { Row,Col } from 'react-bootstrap'

const FirstSection = () => {
    return (
        <div className='firstsection'>
            <Row>
                <Col lg={6}>
                   <img  src='/images/landingpage/imsection1.png' />
                </Col>
                <Col lg={6}>
                <div className='right_div' >
                    <div>
                        Eget Sit 
                    </div>
                    
                    <p>
                    Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem ex in ligula. Nunc purus est, consequat condimentum faucibus sed, iaculis sit amet massa. Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien ullamcorper at. Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu luctus dolor ex at quam. Fusce a nisi at erat dapibus posuere eget sed nulla. Nam sem odio, hendrerit vel mi ut, pharetra viverra massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc placerat ante vel eros semper bibendum. Donec ultricies vestibulum interdum.

                    </p>
                    <button>
                    50 % Discount, use code <span>KOIEM</span>
                    </button>

                </div>
                
                </Col>
            </Row>
            
        </div>
    )
}

export default FirstSection
