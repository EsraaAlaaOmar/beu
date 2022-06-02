import React, {useEffect, useState} from 'react'
import { ReactComponent as Logo } from '../../images/sizes.svg';
import {AiFillPlusCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux';
import{getSizes, deleteSize,clearstate} from '../../store/sizesSlice'
import Nav from '../reusable/Nav';
import AddSize from './AddSize';
import { Link, Route, Routes } from 'react-router-dom';
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
import UpdateSize from './UpdateSize';
const Sizes = ({setActiveIndex}) => {
  setActiveIndex()
  const {sizsList,error,added,updated,deleted , isLoading} =useSelector((state)=>state.sizes)
  const dispatch = useDispatch()
  //deteed size state
  const [deletedSize, setDeletedSize] = useState([])
  // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)

  //info flashmsg state
  const[infoflashmsg,setInfoFlashmsg] = useState(false)
  useEffect(() =>{
    dispatch(getSizes())
  

  },[added,updated])
  const deletedASize =(size_id)=>{
    dispatch(deleteSize(size_id))
    setFlashmsg(true)}
  
  const renderedSizes= sizsList.map((size)=>{
    return(
      <div className="category">
      {size.size}
      <span className="oposite" >
        <span className="delet icon" onClick={()=>{ setDeletedSize(size); setInfoFlashmsg(true)}}> <RiDeleteBin5Line /> </span>  
       <Link to='/dashbord/sizes/update' state={{size:size}}><span className="edit icon" onClick={()=>dispatch(clearstate())}> <BiEditAlt /> </span> </Link> 
      </span>
    </div>
    )
  }
  
  )
  return (
    <>
     <Nav />
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
        
               {flashmsg && added && <FlashMsg 
                    title={`Size Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
             
               {flashmsg && updated && <FlashMsg 
                     title={`A Size has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
                    {flashmsg && deleted && <FlashMsg 
                     title={`A Size has been deleted successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
             {infoflashmsg&&<FlashMsg 
                            title={`You will delete size   with name  ${deletedSize.size} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setInfoFlashmsg}
                            func={deletedASize} 
                           
                            func_val={{size_id: deletedSize.id}}
                            icontype='info-icon'
                    />}
        <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
        <span className="title-text"> Sizes </span>
        <div className="category-box">
        <div className="header">
              sizes:&nbsp;{sizsList.length} 
            <Link to='/dashbord/sizes/add'><span className="oposite add" onClick={()=>dispatch(clearstate())}> <AiFillPlusCircle /> </span></Link> 
         </div>
          {renderedSizes}
         

        </div>
      

    </div>}
    <Routes>
        <Route path="/add" element={<AddSize setFlashmsg={setFlashmsg}/>} exact /> 
        <Route path="/update" element={<UpdateSize  setFlashmsg={setFlashmsg} />} exact /> 
    </Routes>
    </>
    
  )
}

export default Sizes