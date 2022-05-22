import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { Link } from 'react-router-dom';
const Cities = ({countryCities,getActiveCity,countryId }) => {
  const [activeIndex,setActiveIndex]=useState('')

 const renderedcities =  countryCities &&  countryCities.map((city,index)=>{
    const  className = activeIndex === index ? 'active' : ''; 
    return(
        <div className={`category ${className} `} key={index} onClick={()=>{ setActiveIndex(index);getActiveCity(city.id)}}>
           {city.name}
            <span className="oposite" >
              <span className="delet icon"> <RiDeleteBin5Line /> </span>  
              <span className="edit icon"> <BiEditAlt /> </span> 
            </span>
      </div>)

})
  return (
    <div className="category-box">
      <div className="header">
          Cities:&nbsp; {countryCities && countryCities.length}
        <Link to='/dashbord/addresses/addCity' state={{countryId:countryId}}> <span className="oposite add" > <AiFillPlusCircle /> </span></Link>
    </div>
    {renderedcities}
  </div>
  )
}

export default Cities