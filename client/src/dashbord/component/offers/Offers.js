import React,{useEffect} from 'react'
import { ReactComponent as Logo } from '../../images/offers.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getOffers } from '../../store/offerSlice';
import {Col, Row} from 'react-bootstrap'
import {Link, Route, Routes} from 'react-router-dom'
import Box from '../reusable/Box'
import AddOffer from './AddOffer';
import Nav from '../reusable/Nav';
const Offers = () => {
  const {offersList } =useSelector((state)=> state.offers)
  const dispatch = useDispatch()
  {console.log(offersList)}
  useEffect(() =>{
    dispatch(getOffers())
  

  },[dispatch])
 const renderedOffers= offersList.map((offer)=>
               <Col sm={6} md={4} >
                    {/* <Box  title='Offer Title' p='Supporting description for the card goes here like a breeze.' yello='133 product'/> */}
                    <div className='box_component'>
                            <div className='box-title'>
                            {offer.percentage}
                            </div>
                            {/* <p>
                                ppppppppppppp
                            </p> */}
                            <div className={`yello ${offer.status}`}>{offer.status}</div>
                            <div className='actions'>
                                <span>View Products</span>
                                <span>Edit </span>
                                <span>Delete</span>

                            </div>
                      </div>
                </Col>
 )
  return (
    <>
      <Nav  first_link='Active' second_link='All' />
      <div className="box"> 
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text"> Offers</span>
          <div className="oposite">
                  <Link to='/dashbord/offers/add'>
                  <button>+ Add New</button>
                  </Link>
              </div>
          <div className="boxs">
              <Row>
                  {renderedOffers}
              </Row>

          </div>
          <Routes>
              <Route path="/add" element={<AddOffer />} exact /> 
          </Routes>
      </div>
    </>
  )
}

export default Offers