import React, {useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'

import {BsSearch} from 'react-icons/bs'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {MdOutlineChevronLeft,MdOutlineChevronRight} from 'react-icons/md'
import Navbar from '../landingPage/Navbar'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import FilterProducts from './FilterProducts'
import {getClientProducts,getFilteredProducts} from '../dashbord/store/clientSide/clientProducts'
import {getClientBrands} from '../dashbord/store/clientSide/clientbrands'
import { useDispatch, useSelector } from 'react-redux'
import FlashMsg from './Flashmsgs/FlashMsg'
import {getFavourites} from '../dashbord/store/clientSide/favouriteSlice'
const Search = () => {
  const dispatch= useDispatch()
  
  // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)

  const [filterItems, setFilterItems] = useState(false)
  const [pagenum,setPagenum] = useState(1)
  const pageSize =filterItems?11:12
  const [filterData,setFilterData] =useState()
  
  const {products,count, isLoading, error}=useSelector((state)=> state.clientProducts)
  const {favList}=useSelector((state)=> state.favourite)
  const {brands}=useSelector((state)=> state.clientbrands)
 
  useEffect(() =>{

   
    !filterItems&& dispatch(getClientProducts({page_size:pageSize,
      page:pagenum}))
      !filterItems&& dispatch(getClientBrands())
      dispatch(getFavourites())

  },[dispatch, pagenum,pageSize])

  const {favAdded}=useSelector((state)=> state.favourite)
  const maxpagenum =Math.ceil(count/pageSize)
  console.log(maxpagenum)
  //products 
  const renderedProducts = products.length > 0 ?products.map(product=>{
    const favstatus =  favList.findIndex(p=>p.id === product.id)
    return(
      <Col md={4} lg={3} >  
                     <Product img={product.galleries[0]&&product.galleries[0].image} product={product} fav={favstatus!==-1}/>
       </Col>
    )

  }) : 'No products found'

    return (
    <>
        {isLoading ? <div  className="clientloading loading"> <img src='/images/client_loading.gif' /></div>:<>
         <Navbar />
         
         {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
        {console.log(error)}
        
         <div className='search-page'>
         <div className='collections'>  
        <span className='search'>
             <input  placeholder='search any item ..' />   
             <span className='icon'> <BsSearch /> </span>
        </span>   
        </div>
          <Row>
        
          <Col md={4} lg={3} > 
                    <div className='filter'>
                        
                     <span  onClick={()=>setFilterItems(!filterItems)}>  Filter By &nbsp;{filterItems? <MdOutlineChevronRight />:<MdOutlineChevronLeft />  }</span>
                    </div>
                  
                    
              </Col>
           </Row>
          <div className='products'>
          <Row>
          {filterItems && 
            <Col md={4} lg={3} > 
                
                  <FilterProducts setFilterData={setFilterData} getFilteredProducts={getFilteredProducts} brands={brands}  />
                </Col>
                }
           { renderedProducts}
             
            </Row>

          </div>
        {!filterItems &&  <div className='pagination'>
            <div className='ch-page'>
              <div className='button' onClick={() =>pagenum!==1&& setPagenum(pagenum-1)} >
                     
                     <span><GrFormPrevious />  </span>
                      Previous
              </div>
            </div>
            
            <div className='space'> Page {pagenum} of {maxpagenum} </div>
            <div className='ch-page'>
              <div className='button' onClick={() =>pagenum<maxpagenum&& setPagenum(pagenum+1)}>
              Next
              <span> <GrFormNext /> </span>
              </div>
            </div>

          </div>}
        
        </div>
      
      </>}
    </>
    
     
    )
}

export default Search
