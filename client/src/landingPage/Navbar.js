import React,{useEffect} from 'react'
import {MdSort} from 'react-icons/md'
import{BiSearch}from 'react-icons/bi'
import {AiOutlineUser}from 'react-icons/ai'
import {BsHeart} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { Link,Navigate } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {getCard} from '../dashbord/store/clientSide/cardSlice'
import { useDispatch } from 'react-redux'
const Navbar = ({navigate=true}) => {
    const dispatch= useDispatch()
    const {userInfo,loggedIn} =useSelector((state)=> state.auth)
    const {CardList,CardAdded,CardDeleted} =useSelector((state)=> state.card)

    useEffect(() =>{
        dispatch(getCard())
      },[dispatch,CardAdded,CardDeleted])
    
    return (
        <div className='landnav' >
            <img className='logo' src='/images/Landingpage/navicon.png' />
            <div className='dropdowns'>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                  New In
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Perfumes</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Abayas</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                Sale
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Perfumes</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Abayas</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                Gifts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Perfumes</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Abayas</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                Shop All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Perfumes</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Abayas</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </div>
            
            <div className='right'>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                <img src='../images/Landingpage/En.png' alt='Lang Icon' /> &nbsp;ENG
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"> <img src='/images/Landingpage/en.png' alt='navicon' /> &nbsp; ENG</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">العربية</Dropdown.Item>
                    
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
