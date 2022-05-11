import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const CollectionsRow = ({collection}) => {
    const [showlist,setShowlist] =useState(false)
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
            { showlist && <div className='hiddenlist'>
          
                <Link to='/dashbord/products'> <div className='border-inlist' >View Products</div> </Link>
                <div className='delete-inlist'>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span></td>
</tr>
  )
}

export default CollectionsRow