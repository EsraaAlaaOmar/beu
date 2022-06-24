import React,{useEffect, useState} from 'react'
import { ReactComponent as Logo } from '../../images/contact.svg';
import MessagePagination from './MessagePagination';
import { useSelector, useDispatch } from 'react-redux';
import{getMessages} from '../../store/messagesSlice'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
import { Link } from 'react-router-dom';
import Nav from '../reusable/Nav';
const Messages = ({setActiveIndex}) => {
  setActiveIndex()
  const {error,messagesList,isLoading } =useSelector((state)=>state.messages)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getMessages())
  

  },[dispatch])
   // error flashmsg state
   const[flashmsg,setFlashmsg] = useState(true)
   //info flashmsg
  const[infoflashmsg,setInfoFlashmsg] = useState(false)
  return (
    <>
       < Nav />
       {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
     <div className="box"> 
        {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
      {infoflashmsg && <FlashMsg 
                title="Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}
       {error&& <div className='error-notify'>{error}</div>}  
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> User Messages</span>
        <div className="table-box no-butons">
          
           
            <MessagePagination maplist={messagesList}  setInfoFlashmsg={setInfoFlashmsg}/>


    </div>
       
    </div>}
    </>
    
  )
}

export default Messages