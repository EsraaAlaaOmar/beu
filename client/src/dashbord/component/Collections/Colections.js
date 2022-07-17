import React,{useEffect} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/collections.svg';
import { useSelector, useDispatch } from 'react-redux';
import{getCollections, deleteCollection, clearstate} from '../../store/collectionsSlice'
import collections from '../../data/collections.json'

import CollectionPagination from './CollectionPagination'
import Nav from '../reusable/Nav';
import AddCollection from './AddCollection';
import Filter from './Filter';
import { useState } from 'react';
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
import EditeCollection from './EditeCollection';

const Colections = ({setActiveIndex}) => {
  setActiveIndex()
  const {collectionsList, collectionadded,updated,isLoading, error} =useSelector((state)=>state.collections)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getCollections())
  
 
  },[dispatch])
   
  //info flashmsg state
  const[infoflashmsg,setInfoFlashmsg] = useState(false)

  const[Flashmsg,setFlashmsg] = useState(true)

  const deleteClicked = (data)=>{
    setInfoFlashmsg(true)
    setDeleted(data)

  }


  const [deleted,setDeleted]=useState()
  const deleteRequest=(data)=>{
    dispatch(deleteCollection(data))
  }

  //filter data 
  const [filterTime,setFiLterTime]=useState()
  const [filterTitle,setFilterTitle]=useState('')
  const setFilterData=(time, title)=>{
    setFiLterTime(time)
    setFilterTitle(title)
}

const filterWithTitle = collectionsList.filter((el) => {
   
  if (filterTitle === '') {
      return el
  }

  else {        
      return ( el.title.toLowerCase().includes(filterTitle) )           
  }
})

const data=filterTime == 'new'? filterWithTitle.reverse() :filterWithTitle



  return (
  <> 
   <Nav   />
   {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :<div className="box collections">  

     
{Flashmsg && error && <FlashMsg 
                      title={`${ Object.keys(error)}  Error : ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
               {Flashmsg && collectionadded && <FlashMsg 
                    title={`collection Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
             
               {Flashmsg && updated && <FlashMsg 
                     title={`A Collection has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
                   {Flashmsg && deleted && <FlashMsg 
                    title={`Collection with name  ${deleted.title}  deleted successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}

     {infoflashmsg&&<FlashMsg 
                            title={`You will delete collection   with name  ${deleted.title} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setInfoFlashmsg}
                            func={deleteRequest}
                            
                            func_val={deleted}
                            icontype='info-icon'
                    />}
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">Collections</span>
          <div className="table-box">
            <span className="box-title">Collections</span>
              <div className="oposite">
                  <Link to='/dashbord/collections/filter'>
                  <button>Filter</button>
                  </Link>
                  <Link to='/dashbord/collections/add'>
                  <button onClick={() =>dispatch(clearstate())} > + Add New</button>
                  </Link>

              </div>
              <br/>
              
              <CollectionPagination maplist={ data} deleteClicked={deleteClicked} setFlashmsg={setFlashmsg}/>
              <Routes>
               <Route path="/add" element={<AddCollection  setFlashmsg={setFlashmsg}/>} exact /> 
               <Route path="/edite/:id" element={<EditeCollection setFlashmsg={setFlashmsg}/>} exact /> 
               <Route path="/filter" element={<Filter  setFilterData={setFilterData}/>} exact />
          </Routes>

    </div>
  </div>
}
</>
  )
}

export default Colections