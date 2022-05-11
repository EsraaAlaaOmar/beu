import React,{useState} from 'react';
import {MdOutlineLogout} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
const Nav = ({first_link, second_link}) => {
  const [activeIndex,setActiveIndex]=useState(0)
  const handleClick=(index) =>{
    setActiveIndex(index);
  }

 const links= [first_link, second_link]

 const renderedLinks=links.map((link,index)=>{  
  const  className = activeIndex === index ? 'active' : '';  
  return (
   <span className={ `link ${className}`} key={index} onClick={()=>handleClick( index)}>
     {link}
   </span>
)
  })
 
  return (
      
  <div className="navbar">
<div>{renderedLinks}</div>
<div className="oposite">
<div className="search-div">
<span><FiSearch /></span>
<input type="text" placeholder='Search' />
</div>
<div className='admin'>
<span className="nk">NK</span>
<span className='info'>
    <div className='name'>Shawn Brooks</div>
    <div className='position'>Admin</div>
</span>
</div>
<span className="logout">
<MdOutlineLogout />
</span>
</div>
  </div>
    );
};

export default Nav;
