import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { Link } from 'react-router-dom';
const Cities = ({countryCities,getActiveCity,countryId }) => {
  const [activeIndex,setActiveIndex]=useState('')
  const {countriesList} =useSelector((state)=>state.countries)
  const selectedCountry=countriesList?countriesList.find((country)=>country.id==countryId):null
 const renderedcities =  selectedCountry &&  selectedCountry.cities.map((city,index)=>{
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

console.log(countriesList)
  return (
    <div className="category-box">
      <div className="header">
          Cities:&nbsp; {countryCities && countryCities.length}
      { selectedCountry?
          <Link to='/dashbord/addresses/addCity' state={{countryId:countryId}}> <span className="oposite add" > <AiFillPlusCircle /> </span></Link>
             :     <span className="oposite add" > <AiFillPlusCircle /> </span>
      
      }
    </div>
    {selectedCountry ? renderedcities:'You dont select a country'}
  </div>
  )
}

export default Cities