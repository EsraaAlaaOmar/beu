import React ,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Nav from '../reusable/Nav'
import SingleBrand from './SingleBrand'
import {getBrands, clearstate} from'../../store/brandSlice'
import { Col, Row } from 'react-bootstrap'
import AddBrand from './AddBrand'
import EditeBrrand from './EditeBrrand'



const Brands = ({setActiveIndex}) => {
    setActiveIndex()
  const {brandList,isLoading} =useSelector((state)=> state.brand)
  const dispatch = useDispatch()
  let { id }  = useParams();
  useEffect(() =>{
   dispatch(getBrands(id))
 

 },[])
 
 const renderedBrands = brandList.length > 0 ? brandList.map((brand)=> <Col lg={4} md={3}> <SingleBrand brand={brand} /></Col> ) 
                         : <div>This category does not have any Brand</div>

    return (
    <>
       <Nav />
       {isLoading ? 
         <div  className="box loading"> <img src='/images/loading.gif' /></div> 
         :
            <div className='box'>
               <span className="title-text">Brands</span>
               <div className="oposite">
                  <Link to={`/dashbord/brands/${id}/add`}>
                  <button onClick={() =>dispatch(clearstate())} >+ Add New</button>
                  </Link>
              </div>
               <Row>
                  {renderedBrands}
               </Row>
               
               
            </div>
      }
       <Routes>
               <Route path="/add" element={<AddBrand collectionId={id} />} exact /> 
               <Route path="/Edite" element={<EditeBrrand collectionId={id} />} exact /> 
          </Routes>

    </>
    
  )

}

export default Brands