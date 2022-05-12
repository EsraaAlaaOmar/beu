import React,{useState} from 'react';

import { Link } from 'react-router-dom';
import {BsList} from 'react-icons/bs'
const Sidebar = ({showtoggle}) => {
    const [show,setShow]=useState(false);
    const [activeIndex,setActiveIndex]=useState(0)
    const list=[
        {
            icon:'/images/dashbordsidebar/house.svg',
            name:'Home',
            link: '/dashbord/',

         },
         {
            icon:'/images/dashbordsidebar/order.svg',
            name:'Orders',
            link: '/dashbord/orders',

         },
         {
            icon:'/images/dashbordsidebar/collections.svg',
            name:'Collections',
            link: '/dashbord/collections',


         },
         {
            icon:'/images/dashbordsidebar/offers.svg',
            name:'Offers',
            link: '/dashbord/offers',

         },
         {
            icon:'/images/dashbordsidebar/discount.svg',
            name:'Discounts',
            link: '/dashbord/discount',

         },
       
         {
            icon:'/images/dashbordsidebar/useres.svg',
            name:'Users',
            link: '/dashbord/users',
           
         },
         {
            icon:'/images/dashbordsidebar/staff.svg',
            name:'Stuff',
            link: '/dashbord/stuff',

         },
         {
            icon:'/images/dashbordsidebar/contact.svg',
            name:'User Messages',
            link: '/dashbord/messages',

         },
        //  {
        //     icon:'/images/dashbordsidebar/colors.svg',
        //     name:'Colors',
        //     link: '/dashbord/',

        //  },
         {
            icon:'/images/dashbordsidebar/sizes.svg' ,
            name:'Sizes',
            link: '/dashbord/sizes'

         },
         {
            icon:'/images/dashbordsidebar/address.svg',
            name:'Addresses',
            link: '/dashbord/addresses',

         },
         {
            icon:'/',
            name:'Feedback',
            link:'/dashbord/feedback' ,

         },
         {
            icon:'/',
            name:'Sell in Beau',
            link:'/dashbord/sell' ,

         },
         {
            icon:'/',
            name:'Land page',
            link:'/dashbord/landingpage' ,

         },
           {
            icon:'/images/dashbordsidebar/finance.svg',
            name:'Finance',
            link:'/dashbord/finance' ,

         }
         
]
const renderedSide=list.map((link,index)=>{
    const  className = activeIndex === index ? 'active' : '';  
    return(<Link to={link.link}>
    <div className={`link ${className} `} onClick={()=>{ setActiveIndex(index);}}>
        <img src={link.icon} />
         {link.name}
        

    </div>
    </Link>)

})
  return (
  <>
  <div className='show-sidebar'  id='list'  onClick={()=>{setShow(!show)}}>
     <span><BsList /></span> list
  </div >
  {showtoggle&&show && <div className='sidebar-list'>{renderedSide}  </div>}
  <div className="sidebar">
 
    <div className="title">
        <img src='/images/dashbordsidebar/sidelogo.svg' />
        
        
        Algo-Dash
    </div>
  
    <div className="links">
        {renderedSide}
        
        {/* <Link to='/dashbord/'>
        <div className="link active">
            <img src='/images/dashbordsidebar/house.svg' />
             Home

        </div>
        </Link>
        <Link to='/dashbord/orders'>
        <div className="link">
            <img src='/images/dashbordsidebar/order.svg' />
            Orders

        </div>
        </Link>
        <Link to='/dashbord/collections'>
        <div className="link">
            <img src='/images/dashbordsidebar/collections.svg' />
            Collections

        </div>
        </Link>
        <Link to='/dashbord/offers'>
        <div className="link">
            <img src='/images/dashbordsidebar/offers.svg' />
            Offers

        </div>
        </Link>
        <Link to='/dashbord/discount'>
        <div className="link">
            <img src='/images/dashbordsidebar/discount.svg' />
            Discounts

        </div>
        </Link>
        <Link to='/dashbord/users'>
        <div className="link">
            <img src='/images/dashbordsidebar/useres.svg' />
            Users

        </div>
        </Link>
        <Link to='/dashbord/stuff'>
        <div className="link">
            <img src='/images/dashbordsidebar/staff.svg' />
            Stuff

        </div>
        </Link>
        <Link to='/dashbord/messages'>
        <div className="link">
            <img src='/images/dashbordsidebar/contact.svg' />
            User Messages

        </div>
        </Link>
        <Link to='/dashbord/'>
        <div className="link">
            <img src='/images/dashbordsidebar/colors.svg' />
            Colors

        </div>
        </Link>
        <Link to='/dashbord/sizes'>
        <div className="link">
            <img src='/images/dashbordsidebar/sizes.svg' />
            Sizes

        </div>
        </Link>
        <Link to='/dashbord/addresses'>
        <div className="link">
            <img src='/images/dashbordsidebar/address.svg' />
            Addresses

        </div>
        </Link>
        <Link to='/dashbord/finance'>
        <div className="link">
            <img src='/images/dashbordsidebar/finance.svg' />
            Finance

        </div>
        </Link> */}
    </div>
  </div>
  </>
  );
};

export default Sidebar;
