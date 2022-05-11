import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/collections.svg';
import { useSelector, useDispatch } from 'react-redux';
import{getCollections} from '../../store/collectionsSlice'
import collections from '../../data/collections.json'

import CollectionPagination from './CollectionPagination'
import Nav from '../reusable/Nav';

const Colections = () => {
  const {collectionsList} =useSelector((state)=>state.collections)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getCollections())
  

  },[dispatch])
  return (
  <>
   <Nav  first_link='Newest' second_link='All' />
    <div className="box collections">  
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">Collections</span>
          <div className="table-box">
            <span className="box-title">Collections</span>
              <div className="oposite">
                  <Link to='/dashbord/collections'>
                  <button>Filter</button>
                  </Link>
                  <Link to='/dashbord/collections'>
                  <button>+ Add New</button>
                  </Link>

              </div>
              <br/>
              
              <CollectionPagination maplist={collectionsList} />

    </div>
  </div>
</>
  )
}

export default Colections