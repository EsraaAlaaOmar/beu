import React,{useEffect,useState} from 'react'
import {MdSort} from 'react-icons/md'
import{BiSearch}from 'react-icons/bi'
import {AiOutlineUser}from 'react-icons/ai'
import {BsHeart} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { Link,Navigate } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {getCard} from '../dashbord/store/clientSide/cardSlice'
import {getClientBrands} from '../dashbord/store/clientSide/clientbrands'
import { useDispatch } from 'react-redux'
const Navbar = ({navigate=true}) => {
    const dispatch= useDispatch()
    const {userInfo,loggedIn} =useSelector((state)=> state.auth)
    const {CardList,CardAdded,CardDeleted} =useSelector((state)=> state.card)
    const {brands} =useSelector((state)=> state.clientbrands)
    const [lang,setLang] =useState('en')
    useEffect(() =>{
        dispatch(getCard())
      },[dispatch,CardAdded,CardDeleted])
      useEffect(() =>{
        dispatch(getClientBrands())
      },[dispatch])
    const renderedNew =  brands.map(brand=>  <Dropdown.Item  key={brand.id}><Link to={`brandproducts/${brand.id}`}>{brand.title}</Link></Dropdown.Item>)
    const renderedSale =  brands.map(brand=>  <Dropdown.Item  key={brand.id}><Link to={`brandproducts/${brand.id}`}>{brand.title}</Link></Dropdown.Item>)
    const renderedGifts =  brands.map(brand=>  <Dropdown.Item  key={brand.id}><Link to={`brandproducts/${brand.id}`}>{brand.title}</Link></Dropdown.Item>)
    const renderedAll =  brands.map(brand=>  <Dropdown.Item  key={brand.id}><Link to={`brandproducts/${brand.id}`}>{brand.title}</Link></Dropdown.Item>)
    return (
        <div className='landnav' >
           <Link to='/'><img className='logo' src='/images/Landingpage/navicon.png' alt='logo'/></Link> 
            <div className='dropdowns'>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                  New In
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {renderedNew}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                Sale
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {renderedSale}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                Gifts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   {renderedGifts}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                Shop All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {renderedAll}
                </Dropdown.Menu>
            </Dropdown>

            </div>
            
            <div className='right'>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">

                {lang==='en' ?<><img src='../images/Landingpage/En.png' alt='Lang Icon' /> &nbsp; ENG</> :<>العربية</>}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={()=> {document.querySelector('html').setAttribute("lang", "en"); setLang('en')}}>  <img src='../images/Landingpage/En.png' alt='Lang Icon' />  &nbsp; ENG</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"onClick={()=> {document.querySelector('html').setAttribute("lang", "ar");setLang('ar')}}>العربية</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>

                    
             
                <Link to='/profile'>
                    <div className='icon-div'>
                        <AiOutlineUser />
                        <div>My Account</div>
                    </div>
                </Link>
                <Link to='/favourite'>
                    <div className='icon-div'>
                        <BsHeart />
                        <div>Favourite</div>
                        
                    </div>
                </Link>
                <Link to='/search'>
                    <div className='icon-div'>
                        <BiSearch />
                       <div>Search</div>
                        
                        
                        
                    </div>
                </Link>
                <Link to='/cart'>
                    <div className='icon-div'>
                        <FiShoppingCart /><span>{CardList.length}</span>
                        <div>Cart </div>
                        
                    </div>
                </Link>
              
            </div>

            <br/>
            {navigate&&userInfo&&!userInfo.is_customer && <Navigate to='/log/login' />}
            {navigate&&!loggedIn&& <Navigate to='/log/login' />}
        </div>
    )
}

export default Navbar
