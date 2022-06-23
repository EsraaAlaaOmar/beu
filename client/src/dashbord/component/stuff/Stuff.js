import React,{useEffect, useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/staff.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmins,clearstate } from '../../store/adminSlice';
import useres from '../../data/users.json'
import StuffPagination from './StuffPagination';
import AddStuff from './AddStuff';
import Nav from '../reusable/Nav';
import EditeAdmin from './EditeAdmin';
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
const Stuff = ({setActiveIndex}) => {
  
  setActiveIndex()
  const {adminsList,isLoading,added,updated, error} =useSelector((state)=> state.admins)
  const dispatch = useDispatch()
 
  useEffect(() =>{
    dispatch(getAdmins())
  

  },[dispatch])
   // error flashmsg state
   const[flashmsg,setFlashmsg] = useState(true)

   //info flashmsg state
   const[infoflashmsg,setInfoFlashmsg] = useState(false)
 
    return (
    <>
        <Nav />
        {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :<div className="box">  
          {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
        
               {flashmsg && added && <FlashMsg 
                    title={`Admin Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
             
               {flashmsg && updated && <FlashMsg 
                     title={`An Admin has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
                {infoflashmsg && <FlashMsg 
                title="Delete Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}
    <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
    <span className="title-text">Stuff</span>
    <div className="table-box">
        <div className="oposite">
            
            <Link to='/dashbord/stuff/add'>
              <button onClick={() =>dispatch(clearstate())}>+ Add New</button>
            </Link>

        </div>
        <br/>
         
          <StuffPagination maplist={adminsList} setInfoFlashmsg={setInfoFlashmsg} clearstate={clearstate} />
          <Routes>
               <Route path="/add" element={<AddStuff setFlashmsg={setFlashmsg} />} exact /> 
               <Route path="/edite" element={<EditeAdmin setFlashmsg={setFlashmsg} />} exact /> 
          </Routes>

  </div>
</div>}
      
    
    </>
    );
};


export default Stuff