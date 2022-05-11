import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SelectProduct from '../reusable/SelectProduct'

const AddOrder = () => {
  return (
    <div className='addpage'>
    <div className='opacity'>
        <div className='choose-product'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div className='inputs'>
                    <h4>Add Order</h4>
                        <div className='input-div'>
                            <label>Collection</label>
                            
                            <select className=''>
                                <option value>item 1</option>
                                <option value>item 2</option>
                                <option value>item 3</option>
                                <option value>item 4</option>
                                <option value>item 5</option>
                            </select>
                        
                        </div>
                       <div className='order-details'>
                           <div>Product title</div>
                           <div>Size : S</div>
                           <div>Items : 1 item</div>
                           <div>Total : 100 $</div>
                         
                       </div>
                        <div className='buttons'>
                            <Link to='/dashbord/offers'>
                                <button className='confrim'>Confirm</button>
                            </Link>
                            <Link to='/dashbord/offers'>
                                <button className='discard'>Discard</button>
                            </Link>
                        </div>
                    </div>

                </Col>
                <Col sm={12} md={6} lg={8}>
                    <div className='select'>
                        <span className='black-title'>Products on collection name</span> 
                        <span className='yello-title'>&nbsp;  412  &nbsp; Product</span>
                        <Row>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                            <Col sm={6} lg={4}>
                            <SelectProduct />
                            </Col>
                        </Row>
                    </div>
                
                </Col>

            </Row>
        
        </div>
    </div>
</div>
  )
}

export default AddOrder