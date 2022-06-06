import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import{getCountries,deleteCountry, deleteCity,deleteArea } from '../../store/Address/counteriesSlice'
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
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
const Address = ({setActiveIndex}) => {
  setActiveIndex()
  const dispatch = useDispatch()
 
  // const {citiesList} =useSelector((state)=>state.cities)
  // const {AreasList} =useSelector((state)=>state.areas)
  const {countriesList,isLoading,cityadded, citis,error} =useSelector((state)=>state.countries)
  
  const[selectedCountry,setSelectedCountry] = useState('')
  const[countryCities,setCountryCities] = useState('')
//selected city 
  const [activeCity, setActiveCity]=useState(null)
  //const[selectedcity,setSelectedCity] = useState('')
  const[cityAreas,setCityAreas] = useState(null)

  //deleted {country -city -area }data 
   const [deleted,setDeleted] = useState(null)

   // dispatch delete request 
    
   const deleteRequest = (deleted)=>
   {deleted.type=='country'?
     dispatch(deleteCountry(deleted.id))
     :deleted.type=='city' 
     ? dispatch(deleteCity(deleted.id))
     :dispatch(deleteArea(deleted.id))} 

 // error flashmsg state
 const[flashmsg,setFlashmsg] = useState(true)

 
  //info flashmsg state
  const[infoflashmsg,setInfoFlashmsg] = useState(false)


  // get selected id
  const getActiveCountry =(id)=> {
    setSelectedCountry(id);
    setCountryCities(countriesList.find(country=>country.id ===  id).cities)
  
    setCityAreas(null)
    
  }
  //getselected city  id
  const getActiveCity =(id)=> {
   
    setCityAreas(countryCities.find(city=>city.id ===  id).areas)
    setActiveCity(id)
  }
  
  useEffect(() =>{
    dispatch(getCountries())
  

  },[dispatch])
  return (
    <>
      <Nav />
    {isLoading ? 
     <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :  <div className="address box"> 
            {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
                {infoflashmsg&&<FlashMsg 
                            title={`You will delete ${deleted.type}   with name  ${deleted.name} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setInfoFlashmsg}
                            func={deleteRequest}
                            
                            func_val={deleted}
                            icontype='info-icon'
                    />}
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> Addresses </span>

        <Row>
            <Col  sm={6} md={4} lg={3}>
               <Counteries  getActiveCountry={getActiveCountry} setFlashmsg={setFlashmsg} setInfoFlashmsg={setInfoFlashmsg} setDeleted={setDeleted}/>
            </Col>
            <Col  sm={6} md={4} lg={3}>
           
               <Cities  countryCities={countryCities}  getActiveCity={getActiveCity} countryId={selectedCountry}  setDeleted={setDeleted} setInfoFlashmsg={setInfoFlashmsg}/>
            </Col>
            <Col  sm={6} md={4} lg={3}>
               <Areas  cityAreas={cityAreas} setInfoFlashmsg={setInfoFlashmsg} setDeleted={setDeleted}/> 
            </Col>
          
        </Row>
        <Routes>
           <Route path="/addCountry" element={<AddCountry  />} exact />
           <Route path="/addCity" element={<AddCity countryId={selectedCountry} />} exact />
           <Route path="/addarea" element={<AddArea countryId={selectedCountry} cityId={activeCity} />} exact />
           
           
        </Routes>
    </div>}
    </>
    
  )
}

export default Address