import React,{useState, useEffect} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/useres.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getUseres,clearstate } from '../../store/usersSlice';
import useres from '../../data/users.json'
import UsersPagination from './UsersPagination';
import Nav from '../reusable/Nav';
import AddUser from './AddUser';
import FilterUseres from './FilterUseres';
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
import UserProducts from './UserProducts';
import AddOrder from '../Orders/AddOrder';
import UserFavourites from './UserFavourites';

const Users = ({setActiveIndex}) => {
  setActiveIndex()
  const {usersList,isLoading,added ,error } =useSelector((state)=> state.users)
  const dispatch = useDispatch()
 
  useEffect(() =>{
    dispatch(getUseres())
  

  },[added])
  const[multiple,setMultiple] =useState(false)

    // error flashmsg state
    const[flashmsg,setFlashmsg] = useState(true)

    //info flashmsg state
    const[infoflashmsg,setInfoFlashmsg] = useState(false)
  
    return(
      <>
        <Nav  first_link='Active' second_link='All'  first_link_url='/dashbord/users'   second_link_url='/dashbord/users' />
        {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
      : <div className="box">  
         {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
        
               {flashmsg && added && <FlashMsg 
                    title={`User Added successfully`}
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
            <span className="title-text">Users</span>
            <div className="table-box">
                <div className="oposite">
                    <Link to='/dashbord/users'>
                      <button onClick={()=>setMultiple(!multiple)}>Multiple</button>
                    </Link>
                    <Link to='/dashbord/users/add'>
                      <button onClick={() =>dispatch(clearstate())}>
                        <span className='big-sizes'> + Add New</span>
                        <span className='small-sizes'> + Add </span>
                       </button>
                    </Link>
                    <Link to='/dashbord/users/filter'>
                      <button>Filter</button>
                    </Link>

                </div>
                <br/>
                
                  <UsersPagination maplist={usersList} multiple={multiple}  setInfoFlashmsg={setInfoFlashmsg} />

          </div>
          <Routes>
               <Route path="/add" element={<AddUser setFlashmsg={setFlashmsg} />} exact /> 
               <Route path="/card" element={<UserProducts />} exact /> 
               <Route path="/filter" element={<FilterUseres />} exact /> 
               <Route path="/addorder" element={<AddOrder />} exact />
               <Route path="/favourite" element={<UserFavourites />} exact />
          </Routes>
        </div>}
      </>
    ) ;
};

export default Users