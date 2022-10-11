import React,{useEffect,useState,useRef} from 'react'
import {MdSort} from 'react-icons/md'
import{BiSearch}from 'react-icons/bi'
import {AiOutlineUser}from 'react-icons/ai'
import {BsHeart} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { Link,Navigate ,useNavigate} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {getCard} from '../dashbord/store/clientSide/cardSlice'
import {getClientBrands} from '../dashbord/store/clientSide/clientbrands'
import {changeLanguage} from '../dashbord/store/clientSide/LanguageSlice'
import { useDispatch } from 'react-redux'
const Navbar = ({navigate=true}) => {
    const dispatch = useDispatch()
    const navigat = useNavigate()
    const {userInfo,loggedIn} =useSelector((state)=> state.auth)
    const {CardList,CardAdded,CardDeleted,error} =useSelector((state)=> state.card)
    const {brands} =useSelector((state)=> state.clientbrands)
    const {enLanguage} =useSelector((state)=> state.lang)
   
    const [lang,setLang] =useState('en')
    useEffect(() =>{
        dispatch(getCard())
      },[dispatch,CardAdded,CardDeleted,loggedIn])
      useEffect(() =>{
        dispatch(getClientBrands())
      }, [dispatch])
      const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) { 
         return   dispatch( changeLanguage())
          }
          didMountRef.current = true;
        
       
    
      }, [lang])
    console.log(lang)
    const renderedNew =  brands.map(brand=>  <Dropdown.Item  key={brand.id} onClick={()=>navigat(`/brandproducts/${brand.id}`)}>{brand.title}</Dropdown.Item>)
    const renderedSale =  brands.map(brand=>   <Dropdown.Item  key={brand.id} onClick={()=>navigat(`/brandproducts/${brand.id}`)}>{brand.title}</Dropdown.Item>)
    const renderedGifts =  brands.map(brand=>   <Dropdown.Item  key={brand.id} onClick={()=>navigat(`/brandproducts/${brand.id}`)}>{brand.title}</Dropdown.Item>)
    const renderedAll =  brands.map(brand=>   <Dropdown.Item  key={brand.id} onClick={()=>navigat(`/brandproducts/${brand.id}`)}>{brand.title}</Dropdown.Item>)
    return (
        <div className='landnav' >
           <Link to='/'><img className='logo' src='/images/Landingpage/navicon.png' alt='logo'/></Link> 
            <div className='dropdowns'>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                 {enLanguage ? 'New In':' الاحدث' }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {renderedNew}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                
                {enLanguage ? 'Sale':'خصومات' }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {renderedSale}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                
                {enLanguage ? 'Gifts':'الهدايا' }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   {renderedGifts}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
               
                {enLanguage ? ' Shop All':'الجميع' }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {renderedAll}
                </Dropdown.Menu>
            </Dropdown>

            </div>
            
            <div className='right'>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">

                {enLanguage ?<><img src='../images/Landingpage/En.png' alt='Lang Icon' /> &nbsp; ENG</> :<>العربية</>}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> { !enLanguage && document.querySelector('html').setAttribute("lang", "en"); !enLanguage && setLang('en')}}>  <img src='../images/Landingpage/En.png' alt='Lang Icon' />  &nbsp; ENG</Dropdown.Item>
                    <Dropdown.Item onClick={()=> {enLanguage && document.querySelector('html').setAttribute("lang", "ar"); enLanguage && setLang('ar')}}>العربية</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>

                    
             
                <Link to='/profile'>
                    <div className='icon-div'>
                        <AiOutlineUser />
                        <div>
                           {enLanguage ? 'My Account':'حسابي' }    
                        </div>
                    </div>
                </Link>
                <Link to='/favourite'>
                    <div className='icon-div'>
                        <BsHeart />
                        <div>
                           {enLanguage ? 'Favourite':'المفضلة' }    
                        </div>
                        
                        
                    </div>
                </Link>
                <Link to='/search'>
                    <div className='icon-div'>
                        <BiSearch />
                        <div>
                           {enLanguage ? 'Search':'بحث' }    
                         </div>
                        
                        
                        
                    </div>
                </Link>
                <Link to='/cart'>
                    <div className='icon-div'>
                        <FiShoppingCart /><span>{!error ? CardList.length : 0}</span>
                        <div>
                           {enLanguage ? 'Cart':'السلة' }    
                         </div>
                        
                    </div>
                </Link>
              
            </div>

            <br/>
            {/* {navigate&&userInfo&&!userInfo.is_customer && <Navigate to='/log/login' />}
            {navigate&&!loggedIn&& <Navigate to='/log/login' />} */}
        </div>
    )
}

export default Navbar
