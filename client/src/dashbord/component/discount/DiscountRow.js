import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {editeDiscount} from '../../store/discountslice'
import{useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
const DiscountRow = ({discont}) => {
    const dispatch = useDispatch()
    const [showlist,setShowlist] =useState(false)
    // const [avaliable,setAvaliavle] =useState(discont.avaliabil)

  return (
    <tr>
            <td className='align_dir'>
           
            <span>{discont.start_at}</span>
            </td>
            <td>{discont.end_at}</td>
            <td>{discont.percentage}</td>
            <td>{discont.code}</td>
            {/* <td>{ discont.avaliabil == true ? <span className='green'>available</span> : <span className='red'>unavailable</span>}</td> */}
             <td>{discont.limit}</td>           
            <td>{discont.ARCHIEVE === "Yes" ? 'archived' : 'unarchived'}</td>
            <td></td>
            <td>
            { showlist && <div className='hiddenlist'>
               <Link to='/dashbord/discount/edite' state={{discont:discont}}> <div className='border-inlist'>Update Discount</div></Link>
                <div className='delete-inlist'>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>
            </td>
    </tr>
  )
}

export default DiscountRow