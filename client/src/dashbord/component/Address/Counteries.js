import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{getCountries,deleteCountry} from '../../store/Address/counteriesSlice'
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Counteries = ({getActiveCountry}) => {
  
    const {countriesList} =useSelector((state)=>state.countries)
    const dispatch = useDispatch()
    const [activeIndex,setActiveIndex]=useState('')
  
    useEffect(() =>{
      dispatch(getCountries())
    
  
    },[dispatch])

    const renderedCountries = countriesList.map((country,index )=>{
      const  className = activeIndex === index ? 'active' : ''; 
          return(
              <div className={`category ${className} `} onClick={()=>{ setActiveIndex(index);getActiveCountry(country.id)}}>
                 {country.name}
                  <span className="oposite" >
                    <span className="delet icon" onClick={(e)=> {e.preventDefault(); dispatch(deleteCountry({country_id : country.id}));}}><RiDeleteBin5Line /> </span>  
                    <span className="edit icon"> <BiEditAlt /> </span> 
                  </span>
            </div>)

    })
  return (
    <div className="category-box">
          Countries:&nbsp;{countriesList.length}
         <Link to='/dashbord/addresses/addCountry'><span className="oposite add" > <AiFillPlusCircle /> </span></Link> 
         {renderedCountries}
         

    </div>

  )
}

export default Counteries