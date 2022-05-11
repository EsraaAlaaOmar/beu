import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{getCities} from '../../store/Address/CitiesSlice'
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
const Cities = () => {
  const {citiesList} =useSelector((state)=>state.cities)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getCities())
  

  },[dispatch])
  const renderedcities = citiesList.map((city)=>{
    return(
        <div className="category">
           {city.name}
            <span className="oposite" >
              <span className="delet icon"> <RiDeleteBin5Line /> </span>  
              <span className="edit icon"> <BiEditAlt /> </span> 
            </span>
      </div>)

})
  return (
    <div className="category-box">
    Cities:&nbsp; {citiesList.length}
    <span className="oposite add" > <AiFillPlusCircle /> </span>
    {renderedcities}
  </div>
  )
}

export default Cities