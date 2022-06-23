import React,{useEffect,useState} from 'react'
import { ReactComponent as Logo } from '../../images/offers.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getOffers,clearstate } from '../../store/offerSlice';
import {Col, Row} from 'react-bootstrap'
import {Link, Route, Routes} from 'react-router-dom'
import Box from '../reusable/Box'
import AddOffer from './AddOffer';
import Nav from '../reusable/Nav';
import EditeOffer from './EditeOffer';
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
const Offers = ({setActiveIndex}) => {
  setActiveIndex()
  const {offersList,isLoading,updated,created, error } =useSelector((state)=> state.offers)
  const dispatch = useDispatch()
  {console.log(offersList)}
  
  // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)

   //info flashmsg state
   const[infoflashmsg,setInfoFlashmsg] = useState(false)


  useEffect(() =>{
    dispatch(getOffers())
  

  },[dispatch,updated, created])
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
                               <Link to='/dashbord/offerproducts'state={{offer:offer}} > <span>Products</span></Link>
                              <Link to='/dashbord/offers/edite' state={{ offer: offer }}><span onClick={() =>dispatch(clearstate())}> Edit </span></Link>
                                <span onClick={()=>setInfoFlashmsg(true)}>Delete</span>

                            </div>
                      </div>
                </Col>
 )
  return (
    <>
      <Nav   />
      
      {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
      <div className="box"> 
       {flashmsg && updated && <FlashMsg 
                                      title={`An offer has been updated successfully`}
                                      img={'/images/msgIcons/success.svg'}
                                      setFlashmsg={setFlashmsg}
                                      icontype='success-icon'
                                />}
         {flashmsg && created && <FlashMsg 
                    title={`An Offer Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
                 {infoflashmsg && <FlashMsg 
                title="Delete Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}
      {error&& <div className='error-notify'>{error}</div>}
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text"> Offers</span>
          <div className="oposite">
                  <Link to='/dashbord/offers/add'>
                  <button onClick={() =>dispatch(clearstate())} >+ Add New</button>
                  </Link>
              </div>
          <div className="boxs">
              <Row>
                  {renderedOffers}
              </Row>

          </div>
          <Routes>
              <Route path="/add" element={<AddOffer />} exact /> 
              <Route path="/edite" element={<EditeOffer />} exact /> 
          </Routes>
      </div>
      }
    </>
  )
}

export default Offers