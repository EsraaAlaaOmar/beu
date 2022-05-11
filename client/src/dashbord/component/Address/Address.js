import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import{getCountries,deleteCountry} from '../../store/Address/counteriesSlice'
import{getCities} from '../../store/Address/CitiesSlice'
import{getAreas} from '../../store/Address/areaSlice'
import { ReactComponent as Logo } from '../../images/address.svg';
import Nav from '../reusable/Nav';
import Areas from './Areas';
import Cities from './Cities';
import Counteries from './Counteries';
import { Route, Routes } from 'react-router-dom';
import AddCountry from './AddCountry';
import AddCity from './AddCity';
import AddArea from './AddArea';
const Address = () => {
  const dispatch = useDispatch()
  // useEffect(() =>{

  //   dispatch(getCountries())

  

  // },[dispatch])
  // const {citiesList} =useSelector((state)=>state.cities)
  // const {AreasList} =useSelector((state)=>state.areas)
  const {countriesList, citis,error} =useSelector((state)=>state.countries)
  
  const[selectedCountry,setSelectedCountry] = useState('')
  const[countryCities,setCountryCities] = useState('')

  //const[selectedcity,setSelectedCity] = useState('')
  const[cityAreas,setCityAreas] = useState([])

  // get selected id
  const getActiveCountry =(id)=> {
    setSelectedCountry(id);
    setCountryCities(countriesList.find(country=>country.id ===  id).cities)
  
    setCityAreas([])
    
  }
  //getselected city  id
  const getActiveCity =(id)=> {
   
    setCityAreas(countryCities.find(city=>city.id ===  id).areas)
  }
  
  //cities of selected id

  //areas of selected city id selected
  //const cityAreas = selectedcity !== '' ? countryCities.find(country=>country.id ===  selectedcity).areas : []
  //{console.log(countryCities.find(city=>city.id === selectedcity).areas)}
  return (
    <>
      <Nav />
      <div className="address box"> 
      {error&& <div className='error-notify'>{error}</div>}  
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> Addresses </span>

        <Row>
            <Col  sm={6} md={4} lg={3}>
               <Counteries  getActiveCountry={getActiveCountry} />
            </Col>
            <Col  sm={6} md={4} lg={3}>
           
               <Cities  countryCities={countryCities}  getActiveCity={getActiveCity} countryId={selectedCountry}/>
            </Col>
            <Col  sm={6} md={4} lg={3}>
               <Areas  cityAreas={cityAreas}/> 
            </Col>
          
        </Row>
        <Routes>
           <Route path="/addCountry" element={<AddCountry />} exact />
           <Route path="/addCity" element={<AddCity countryId={selectedCountry}/>} exact />
           <Route path="/addarea" element={<AddArea />} exact />
           
           
        </Routes>
    </div>
    </>
    
  )
}

export default Address