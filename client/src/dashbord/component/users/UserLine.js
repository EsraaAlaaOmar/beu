import React,{useState, useRef, useEffect} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {RiCheckboxBlankCircleLine, RiCheckboxCircleFill} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// use ref  function 
function useOutsideAlerter(ref,setShowlist) {
    const dispatch = useDispatch()
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
const UserLine = ({user,multiple,all,setInfoFlashmsg , multipleusers, setMultipleUsers}) => {
    const [selected, setSelected] =useState(all)
    const [showlist,setShowlist] =useState(false)

           // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
useEffect(() =>{
    if(all==false){
        setSelected(false)
    }
    if(all==true){
        setSelected(true)
    }
},[all])
//check multiple button 
   const checkChange= ()=>{
    if(selected==true){
         setMultipleUsers(multipleusers&&multipleusers.filter(u=>u.id !== user.id))
    }
    else{
        multipleusers&& setMultipleUsers([...multipleusers,user])
    }
    setSelected(!selected)

   }
   console.log(all)
   console.log(selected)
   console.log(multipleusers&&multipleusers)

    return (
     
            <tr>
                
          
            <td className='nospace'> {multiple && <div className="check" onClick={()=>checkChange()}> {selected ? <div className="checked"> <RiCheckboxCircleFill /> </div>: <RiCheckboxBlankCircleLine /> }</div>}
               <img 
                    src={user.avatar}
                />
            </td>
            
            <td>
                
                <span>{user.name}</span>
            </td>
           
            <td></td>
            <td>{user.address}</td>
            <td></td>
            <td>{user.id}</td>
            <td></td>
            
            <td>
               { showlist && <div className='hiddenlist' ref={wrapperRef}>
            
                    {/* <Link to='/dashbord/users/addorder'> <div className='border-inlist' >Add Order</div> </Link>
                    <Link to='/dashbord/users/card'> <div className='border-inlist' >View cart</div></Link>
                    <div className='border-inlist' >View favourite</div>
                    <div className='border-inlist' >System rate</div> */}
                    <div className='delete-inlist' onClick={() =>setInfoFlashmsg(true)}>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>
            
            </td>
        </tr>
    )
}

export default UserLine