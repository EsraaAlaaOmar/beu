import React,{useState,useEffect} from 'react';
import {MdOutlineLogout} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import { useSelector } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {adminDetils} from '../../store/logedDetailsSlice'
import {logOut} from '../../store/authslice'
const Nav = ({first_link,first_link_url='/', second_link, second_link_url='/'}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() =>{
   
  
  
  
 
 
 },[dispatch])
  const {loggedIn} =useSelector((state)=> state.auth)
  const {name, staff, } =useSelector((state)=> state.logedDetails)
  const [activeIndex,setActiveIndex]=useState(0)
  const handleClick=(index) =>{
    setActiveIndex(index);
  }
  var firstletters=''
  if(name){
    var matches = name.toUpperCase().match(/\b(\w)/g);
     firstletters = matches.join(''); 
  }
 
 const links= [{text:first_link, url:first_link_url}, {text:second_link, url:second_link_url}]

 const renderedLinks=links.map((link,index)=>{  
  const  className = activeIndex === index ? 'active' : '';  

  return (
   <Link to={link.url}>
      <span className={ `link ${className}`} key={index} onClick={()=>handleClick( index)}>
      {link.text}
      </span>
   </Link>
)
  })
 
  return (
      
  <div className="navbar">
<div>{renderedLinks}</div>
{ sessionStorage.token && <div className="oposite">
<div className="search-div">
<span><FiSearch /></span>
<input type="text" placeholder='Search' />
</div>
<div className='admin'>
<span className="nk">
   {firstletters}
  </span>
<span className='info'>
    <div className='name'>{name}</div>
    <div className='position'>staff</div>
</span>
</div>
<span className="logout" onClick={()=> {dispatch(logOut());  
                                        sessionStorage.removeItem('token');
                                        sessionStorage.removeItem('loggedName'); 
                                        navigate('/');
                                        }}>
<MdOutlineLogout />
</span>
</div>}
  </div>
    );
};

export default Nav;
