import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {clearstate} from '../../store/Address/counteriesSlice'
import { Link } from 'react-router-dom';
const Areas = ({cityAreas,countryId, cityId, setDeleted,setInfoFlashmsg }) => {
  const dispatch = useDispatch()
  const {countriesList} =useSelector((state)=>state.countries)
  const selectedCountry=countriesList?countriesList.find((country)=>country.id==countryId):null

  const selectedCity=selectedCountry&&selectedCountry.cities.find((city)=>city.id==cityId)
  const deleteArea=(city)=>{ 
    setDeleted(
     { id:{area_id: city.id},
      name:city.name,
      type:'area'
    })

   setInfoFlashmsg(true);
 
   
 
}
  const renderedAreas = selectedCity&&selectedCity.areas.map((area)=>{
    return(
        <div className="category">
           {area.name}
            <span className="oposite" >
              <span className="delet icon" onClick={()=> {deleteArea(area)}}> <RiDeleteBin5Line /> </span>  
           <Link to='/dashbord/addresses/editearea' state={{area:area, countryId:countryId,cityId:cityId}}>  <span className="edit icon" onClick={()=>dispatch(clearstate())}> <BiEditAlt /> </span> </Link> 
            </span>
      </div>)

})
  return (
    <div className="category-box">
     <div className="header">
        Areas:&nbsp; {selectedCity&&selectedCity.areas.length}
       {selectedCity?
          <Link to="/dashbord/addresses/addarea"><span className="oposite add" onClick={()=>dispatch(clearstate())}> <AiFillPlusCircle /> </span></Link>
          : <span className="oposite add" > <AiFillPlusCircle /> </span>
       }
    </div>
   { console.log(true&& {selectedCity})}
    {cityAreas ? renderedAreas:'You dont select a city'}
  </div>
  )
}

export default Areas