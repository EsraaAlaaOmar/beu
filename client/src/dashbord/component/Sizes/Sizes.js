import React, {useEffect} from 'react'
import { ReactComponent as Logo } from '../../images/sizes.svg';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux';
import{getSizes} from '../../store/sizesSlice'
import Nav from '../reusable/Nav';
const Sizes = () => {
  const {sizsList} =useSelector((state)=>state.sizes)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getSizes())
  

  },[dispatch])
  const renderedSizes= sizsList.map((size)=>{
    return(
      <div className="category">
      {size.size}
      <span className="oposite" >
        <span className="delet icon"> <RiDeleteBin5Line /> </span>  
        <span className="edit icon"> <BiEditAlt /> </span> 
      </span>
    </div>
    )
  })
  return (
    <>
     <Nav />
     <div className="box"> 
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> Sizes </span>
        <div className="category-box">
          sizes:&nbsp;{sizsList.length} 
          <span className="oposite add" > <AiFillPlusCircle /> </span>
          {renderedSizes}
         

        </div>

    </div>
    </>
    
  )
}

export default Sizes