import React,{useEffect, useState} from 'react'
import { ReactComponent as Logo } from '../../images/collections.svg';
import {Col, Row} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import Box from '../reusable/Box'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import AddProduct from './AddProduct';
import Nav from '../reusable/Nav';
import EditeProduct from './EditeProduct';
import {getProducts,deleteProduct, clearstate} from '../../store/productSlice'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
import ProductGalaries from './ProductGalaries';
 
const Products = ({setActiveIndex}) => {
  setActiveIndex()
  const dispatch = useDispatch()
  //get Api data from redux
  const {products,prodectAdded, error,productupdated, deleted, isLoading} =useSelector((state)=>state.product)
  const {brandList} =useSelector((state)=>state.brand)
  //get brand to find its  products
  let { id }  = useParams();
  const brand = brandList.find(x => x.id == id)

  const[Flashmsg,setFlashmsg] = useState(true)

   //info flashmsg state
   const[infoflashmsg,setInfoFlashmsg] = useState(false)


  const[deletedProduct,setDeletedProduct] = useState(null)
  const deleteFunc=id=>dispatch(deleteProduct(id))
console.log(deletedProduct)
  useEffect(() =>{
    dispatch(getProducts(id ))
  

  },[dispatch])
  
  const renderedProducts= products.length>0 ? products.map((product)=>{
    //  let sizes = product.size? product.size.map(s=>{return( <span key={s.id}>   &nbsp; {s.size} </span>)}) : product.sizes.map(s=>{return( <>  &nbsp; {s.size} </>)})
    // console.log(product.size)
    return(
    <Col sm={12} md={6} lg={4} >
      <Box  key={product && product.id} products= {false} product={product}  clearstate={clearstate}editeLink={`/dashbord/products/${id&&id}/edite/${product&&product.id}`} brandId={id} setInfoFlashmsg={setInfoFlashmsg} setDeletedProduct={setDeletedProduct} />
  </Col>
    )

  }): <div>No Products </div>
  
  return (
    <>
      <Nav />
      {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
        <div className="box"> 
            {Flashmsg && error && <FlashMsg 
                      title={`${ Object.keys(error)}  Error : ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
               {Flashmsg && prodectAdded && <FlashMsg 
                    title={`Product Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
             
               {Flashmsg && productupdated && <FlashMsg 
                     title={`A product has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
                   {Flashmsg && deleted && <FlashMsg 
                    title={`Product deleted successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}

             {infoflashmsg&&<FlashMsg 
                            title={`You will delete product  with name  ${deletedProduct.name} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setInfoFlashmsg}
                            func={deleteFunc}
                            
                            func_val={deletedProduct.id}
                            icontype='info-icon'
                        />}
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text"> Products on {brand?brand.title:'this Brand'} <span className="prodcts-num">{products.length} <span>Product</span></span></span> 
          <div className="oposite">
                  
                    <Link to={`/dashbord/products/${id}/add`}>
                      <button onClick={()=>  dispatch(clearstate())}>+ Add New</button>
                    </Link>
          </div>
         
          <div className="boxs">
              <Row>
                {renderedProducts}
              </Row>

          </div>
          <Routes>
              <Route path="/add" element={<AddProduct  setErrorFlashmsg={setFlashmsg} clearstate={clearstate}  brandId={id}/>} exact /> 
              <Route path={`/edite/:id`}  element={<EditeProduct setErrorFlashmsg={setFlashmsg} clearstate={clearstate} brandId={id} />} exact/>
              <Route path={`/galaries/:productId`}  element={<ProductGalaries setErrorFlashmsg={setFlashmsg} brandId={id} />} exact/>
          </Routes>
  </div>
   }
      
    </>
    
)
}

export default Products