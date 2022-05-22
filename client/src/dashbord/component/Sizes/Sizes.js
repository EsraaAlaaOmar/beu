import React, {useEffect} from 'react'
import { ReactComponent as Logo } from '../../images/sizes.svg';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux';
import{getSizes, deleteSize} from '../../store/sizesSlice'
import Nav from '../reusable/Nav';
import AddSize from './AddSize';
import { Link, Route, Routes } from 'react-router-dom';
const Sizes = ({setActiveIndex}) => {
  setActiveIndex()
  const {sizsList,error} =useSelector((state)=>state.sizes)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getSizes())
  

  },[dispatch])
  const renderedSizes= sizsList.map((size)=>{
    return(
      <div className="category">
      {size.size}
      <span className="oposite" >
        <span className="delet icon" onClick={(e)=>dispatch(deleteSize({size_id: size.id}))}> <RiDeleteBin5Line /> </span>  
        <span className="edit icon"> <BiEditAlt /> </span> 
      </span>
    </div>
    )
  })
  return (
    <>
     <Nav />
     <div className="box"> 
     {error&& <div className='error-notify'>{error}</div>}  
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> Sizes </span>
        <div className="category-box">
        <div className="header">
              sizes:&nbsp;{sizsList.length} 
            <Link to='/dashbord/sizes/add'><span className="oposite add" > <AiFillPlusCircle /> </span></Link> 
         </div>
          {renderedSizes}
         

        </div>
      

    </div>
    <Routes>
        <Route path="/add" element={<AddSize />} exact /> 
    </Routes>
    </>
    
  )
}

export default Sizes