import React,{useEffect} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/collections.svg';
import { useSelector, useDispatch } from 'react-redux';
//import{getCollections} from '../../store/collectionsSlice'
import collections from '../../data/collections.json'

import CollectionPagination from './CollectionPagination'
import Nav from '../reusable/Nav';
import AddCollection from './AddCollection';
import Filter from './Filter';

const Colections = ({setActiveIndex}) => {
  const {collectionsList, error} =useSelector((state)=>state.collections)
  const dispatch = useDispatch()

  // useEffect(() =>{
  //   dispatch(getCollections())
  

  // },[dispatch])
  setActiveIndex()
  return (
  <> 
   <Nav  first_link='Newest' second_link='All'  first_link_url='/dashbord/collections'   second_link_url='/dashbord/collections' />
    <div className="box collections">  
    {error&& <div className='error-notify'>{error}</div>}
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">Collections</span>
          <div className="table-box">
            <span className="box-title">Collections</span>
              <div className="oposite">
                  <Link to='/dashbord/collections/filter'>
                  <button>Filter</button>
                  </Link>
                  <Link to='/dashbord/collections/add'>
                  <button>+ Add New</button>
                  </Link>

              </div>
              <br/>
              
              <CollectionPagination maplist={collectionsList} />
              <Routes>
               <Route path="/add" element={<AddCollection />} exact /> 
               <Route path="/filter" element={<Filter />} exact />
          </Routes>

    </div>
  </div>
</>
  )
}

export default Colections