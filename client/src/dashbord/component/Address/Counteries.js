import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{getCountries} from '../../store/Address/counteriesSlice'
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'

const Counteries = () => {
  
    const {countriesList} =useSelector((state)=>state.countries)
    const dispatch = useDispatch()
  
    useEffect(() =>{
      dispatch(getCountries())
    
  
    },[dispatch])

    const renderedCountries = countriesList.map((country)=>{
          return(
              <div className="category">
                 {country.name}
                  <span className="oposite" >
                    <span className="delet icon"> <RiDeleteBin5Line /> </span>  
                    <span className="edit icon"> <BiEditAlt /> </span> 
                  </span>
            </div>)

    })
  return (
    <div className="category-box">
          Countries:&nbsp;{countriesList.length}
          <span className="oposite add" > <AiFillPlusCircle /> </span>
         {renderedCountries}
         

    </div>

  )
}

export default Counteries