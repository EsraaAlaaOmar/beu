import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{getAreas} from '../../store/Address/areaSlice'
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
const Areas = () => {
  const {AreasList} =useSelector((state)=>state.areas)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getAreas())
  

  },[dispatch])
  const renderedAreas = AreasList.map((area)=>{
    return(
        <div className="category">
           {area.name}
            <span className="oposite" >
              <span className="delet icon"> <RiDeleteBin5Line /> </span>  
              <span className="edit icon"> <BiEditAlt /> </span> 
            </span>
      </div>)

})
  return (
    <div className="category-box">
    Areas:&nbsp; {AreasList.length}
    <span className="oposite add" > <AiFillPlusCircle /> </span>
    {renderedAreas}
  </div>
  )
}

export default Areas