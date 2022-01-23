import React from 'react'
import {MdSort} from 'react-icons/md'
import{BiSearch}from 'react-icons/bi'
import {AiOutlineUser}from 'react-icons/ai'
import {BsHeart} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='landnav' >
           <span>
                <span className='landlist'><MdSort /></span>
                <select>
                    <option>ENG</option>
                    <option>عربي</option>
                </select>
            </span>
            <div className='right'>

                <Link to='/search'>
                    <span>
                        <BiSearch />
                        
                    </span>
                </Link>
                <span>
                    <AiOutlineUser />
                    
                </span>
                <Link to='/favourite'>
                    <span>
                        <BsHeart />
                        
                    </span>
                </Link>
                
                <span>
                    <FiShoppingCart />
                    
                </span>

            </div>

            
        </div>
    )
}

export default Navbar
