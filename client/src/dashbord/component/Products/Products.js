import React,{useEffect} from 'react'
import { ReactComponent as Logo } from '../../images/collections.svg';
import {Col, Row} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import Box from '../reusable/Box'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import AddProduct from './AddProduct';
import Nav from '../reusable/Nav';
import EditeProduct from './EditeProduct';
import {getProducts, clearstate} from '../../store/productSlice'
const Products = () => {
  const dispatch = useDispatch()
  const {products,prodectAdded,productupdated, isLoading} =useSelector((state)=>state.product)
  const {collectionsList} =useSelector((state)=>state.collections)
  let { id }  = useParams();
  const collection = collectionsList.find(x => x.id == id)
  useEffect(() =>{
    dispatch(getProducts(id ))
  

  },[prodectAdded, productupdated])
  
  const renderedProducts=  products.map((product)=>{
     let sizes = product.size? product.size.map(s=>{return( <span key={product.id}>   &nbsp; {s.size} </span>)}) : product.sizes.map(s=>{return( <>  &nbsp; {s.size} </>)})
    console.log(product.size)
    return(
    <Col sm={12} md={6} lg={4} >
      <Box  products= {false} product={product}  clearstate={clearstate}editeLink={`/dashbord/products/${id}/edite/${product.id}`} yello={
      <>
        <div>Price : {product.unit_price} $</div>
       <div>Sizes :{sizes}</div>
        <div>Colors :<span className="color"></span></div>
      </>}/>
  </Col>
    )

  })
  
  return (
    <>
      <Nav />
      {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
        <div className="box"> 
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text"> Products on {collection?collection.title:'this collection'} <span className="prodcts-num">{products.length} <span>Product</span></span></span> 
          <div className="oposite">
                  
                    <Link to={`/dashbord/products/${id}/add`}>
                      <button>+ Add New</button>
                    </Link>
          </div>
         
          <div className="boxs">
              <Row>
                {renderedProducts}
              </Row>

          </div>
          <Routes>
              <Route path="/add" element={<AddProduct   collectionId={id}/>} exact /> 
              <Route path={`/edite/:id`}  element={<EditeProduct clearstate={clearstate} collectionId={id} />} exact/>
          </Routes>
  </div>
   }
      
    </>
    
)
}

export default Products