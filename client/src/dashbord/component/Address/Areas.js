import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { Link } from 'react-router-dom';
const Areas = ({cityAreas}) => {
 

  const renderedAreas = cityAreas.map((area)=>{
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
     <div className="header">
        Areas:&nbsp; {cityAreas.length}
        <Link to="/dashbord/addresses/addarea"><span className="oposite add" > <AiFillPlusCircle /> </span></Link> 
    </div>
    {renderedAreas}
  </div>
  )
}

export default Areas