import React from 'react'
import {MdSort} from 'react-icons/md'
import{BiSearch}from 'react-icons/bi'
import {AiOutlineUser}from 'react-icons/ai'
import {BsHeart} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

const Navbar = () => {
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
                <Link to='/card'>
                    <div className='icon-div'>
                        <FiShoppingCart /><span>3</span>
                        <div>Cart (3)</div>
                        
                    </div>
                </Link>
              
            </div>

            <br/>
        </div>
    )
}

export default Navbar
