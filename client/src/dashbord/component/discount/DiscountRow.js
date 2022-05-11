import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'

const DiscountRow = ({discont}) => {
    const [showlist,setShowlist] =useState(false)
    const [avaliable,setAvaliavle] =useState(discont.avaliabil)

  return (
    <tr>
            <td className='align_dir'>
             {console.log(discont)} 
            <span>{discont.start_at}</span>
            </td>
            <td>{discont.end_at}</td>
            <td>{discont.percentage}</td>
            <td>{discont.code}</td>
            <td>{ avaliable === true ? <span className='green'>available</span> : <span className='red'>unavailable</span>}</td>
            <td>{discont.ARCHIEVE === "Yes" ? 'archived' : 'unarchived'}</td>
            <td></td>
            <td>
            { showlist && <div className='hiddenlist'>
                <div className='border-inlist' onClick={()=>setAvaliavle(!avaliable) }>Change Avaliability</div>
                <div className='delete-inlist'>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>
            </td>
    </tr>
  )
}

export default DiscountRow