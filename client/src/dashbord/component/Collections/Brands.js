import React ,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Nav from '../reusable/Nav'
import SingleBrand from './SingleBrand'
import {getBrands,deleteBrand, clearstate} from'../../store/brandSlice'
import { Col, Row } from 'react-bootstrap'
import AddBrand from './AddBrand'
import EditeBrrand from './EditeBrrand'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg'



const Brands = ({setActiveIndex}) => {
    setActiveIndex()
  const {brandList,isLoading,error ,added, updated, deleted} =useSelector((state)=> state.brand)
  const dispatch = useDispatch()
  let { id }  = useParams();
  useEffect(() =>{
   dispatch(getBrands(id))
 

 },[])
   //info flashmsg state
   const[infoflashmsg,setInfoFlashmsg] = useState(false)
   
   const[Flashmsg,setFlashmsg] = useState(true)


  const[deletedBrand,setDeletedBrand] = useState(null)
 
//delete func
  const deleteFunc=id=>{
      dispatch(deleteBrand(id))
      setFlashmsg(true)

}

 const renderedBrands = brandList.length > 0 ? brandList.map((brand)=> <Col lg={4} md={3}> <SingleBrand brand={brand} clearstate={clearstate} setDeletedBrand={setDeletedBrand} setInfoFlashmsg={setInfoFlashmsg}/></Col> ) 
                         : <div>This category does not have any Brand</div>


    return (
    <>
       <Nav />
       {isLoading ? 
         <div  className="box loading"> <img src='/images/loading.gif' /></div> 
         :
            <div className='box'>


{Flashmsg && error && <FlashMsg 
                      title={`${ Object.keys(error)}  Error : ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
               {Flashmsg && added && <FlashMsg 
                    title={`Brand Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
             
               {Flashmsg && updated && <FlashMsg 
                     title={`A Brand has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
                   {Flashmsg && deleted && <FlashMsg 
                    title={`brand with name  ${deletedBrand.name}  deleted successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}

             {infoflashmsg&&<FlashMsg 
                            title={`You will delete brand  with name  ${deletedBrand.name} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setInfoFlashmsg}
                            func={deleteFunc}
                            
                            func_val={deletedBrand.id}
                            icontype='info-icon'
                        />}
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
               <Route path="/add" element={<AddBrand collectionId={id} setFlashmsg={setFlashmsg} />} exact /> 
               <Route path="/Edite" element={<EditeBrrand collectionId={id} setFlashmsg={setFlashmsg} />} exact /> 
          </Routes>

    </>
    
  )

}

export default Brands