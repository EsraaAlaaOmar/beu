import React,{useEffect} from 'react'
import { ReactComponent as Logo } from '../../images/contact.svg';
import MessagePagination from './MessagePagination';
import { useSelector, useDispatch } from 'react-redux';
import{getMessages} from '../../store/messagesSlice'
import useres from '../../data/users.json'
import { Link } from 'react-router-dom';
import Nav from '../reusable/Nav';
const Messages = ({setActiveIndex}) => {
  setActiveIndex()
  const {error,messagesList,isLoading } =useSelector((state)=>state.messages)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getMessages())
  

  },[dispatch])
  return (
    <>
       < Nav />
       {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
     <div className="box"> 
       {error&& <div className='error-notify'>{error}</div>}  
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> User Messages</span>
        <div className="table-box no-butons">
          
           
            <MessagePagination maplist={messagesList} />


    </div>
       
    </div>}
    </>
    
  )
}

export default Messages