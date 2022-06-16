import React,{useState,useEffect,useRef} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {useDispatch } from 'react-redux';
import {deleteCollection} from '../../store/collectionsSlice'

// use ref  function 
function useOutsideAlerter(ref,setShowlist) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
          setShowlist(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}


const CollectionsRow = ({collection,deleteClicked}) => {
    const [showlist,setShowlist] =useState(false)
    const dispatch = useDispatch()

   // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
  return (
    <tr key={collection.id}>
        <td >
        
        {collection.id}
        </td>
        <td className='align_dir'>
            <img src={collection.image} />
            <br/>
            {collection.title}</td>
        <td>{collection.description}</td>
      
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
        <td>
           { showlist && <div className='hiddenlist' ref={wrapperRef}>
          
                <Link to={`/dashbord/products/${collection.id}`}> <div className='border-inlist' >View Products</div> </Link>
                <div className='delete-inlist' onClick={()=>deleteClicked({category_id:collection.id,title:collection.title})}>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span></td>
</tr>
  )
}

export default CollectionsRow