import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import { BsFillHeartFill,BsPlusSquare } from 'react-icons/bs'

const ProductPage = () => {
    return (
        <div className='productPage'>
           
            <Container>

                <Row>
                    <Col md={6}>
                    <div className='img'>
                    <div className='heart'><BsFillHeartFill /></div>
                    <Carousel >
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/products/5.png"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/products/5.png"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/products/5.png"
                                alt="First slide"
                                />
                               
                            </Carousel.Item>
                    </Carousel>        
                    </div>
                    </Col>
                    <Col md={6}>
                     
                     <div className='info'>
                     <div className='title'>
                     Product title
                     </div>
                     <div className='price'>
                     Price : 150 $
                     </div>
                     <div className='colors'>
                     Available Colors :
                         <div className='color' style={{backgroundColor:'#7F6A4B'}}></div>
                         <div className='color' style={{backgroundColor:'#010101'}}></div>
                         <div className='color' style={{backgroundColor:'#FFFFFF'}}></div>
                         <div className='color' style={{backgroundColor:'#28A304'}}></div>

                     </div>
                     <p>
                     Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem ex in ligula. Nunc purus est, consequat condimentum faucibus sed, iaculis sit amet massa. Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien ullamcorper at. Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu luctus dolor ex at quam. Fusce a nisi at erat dapibus posuere eget sed nulla. Nam sem odio, hendrerit vel mi ut, pharetra viverra massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc placerat ante vel eros semper bibendum. Donec ultricies vestibulum interdum.
                     </p>
                        
                     </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default ProductPage
