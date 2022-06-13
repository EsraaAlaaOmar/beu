import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{clearstate} from '../../store/Address/counteriesSlice'
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Counteries = ({getActiveCountry, setInfoFlashmsg,setFlashmsg, setDeleted}) => {
  
    const {countriesList,error} =useSelector((state)=>state.countries)
    const dispatch = useDispatch()
    const [activeIndex,setActiveIndex]=useState('')
  
   const deleteCountry=(country)=>{ 
    setDeleted(
     { id:{country_id: country.id},
      name:country.name,
      type:'country'
    })
   // dispatch(deleteCountry({country_id : country.id}));
    setInfoFlashmsg(true);
    setFlashmsg(true)
      
    
   }
    const renderedCountries = countriesList.map((country,index )=>{
      const  className = activeIndex === index ? 'active' : ''; 
          return(
              <div className={`category ${className} `} onClick={()=>{ setActiveIndex(index);getActiveCountry(country.id)}}>
                 {country.name}
                  <span className="oposite" >
                    <span className="delet icon" onClick={()=> {deleteCountry(country)}}><RiDeleteBin5Line /> </span>  
                   <Link to='/dashbord/addresses/editeCountry' state={{country:country}}><span className="edit icon" onClick={()=>dispatch(clearstate())}> <BiEditAlt /> </span> </Link> 
                  </span>
            </div>)

    })
  return (
    <div className="category-box">
      <div className="header">
          Countries:&nbsp;{countriesList.length}
         <Link to='/dashbord/addresses/addCountry'><span className="oposite add" onClick={()=>dispatch(clearstate())} > <AiFillPlusCircle /> </span></Link> 
         </div>
         {renderedCountries}
         

    </div>

  )
}

export default Counteries