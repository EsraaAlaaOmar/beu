import React,{useState, useEffect} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/useres.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getUseres } from '../../store/usersSlice';
import useres from '../../data/users.json'
import UsersPagination from './UsersPagination';
import Nav from '../reusable/Nav';
import AddUser from './AddUser';

const Users = ({setActiveIndex}) => {
  setActiveIndex()
  const {usersList,error } =useSelector((state)=> state.users)
  const dispatch = useDispatch()
 
  // useEffect(() =>{
  //   dispatch(getUseres())
  

  // },[dispatch])
  const[multiple,setMultiple] =useState(false)
    return(
      <>
        <Nav  first_link='Active' second_link='All'  first_link_url='/users'   second_link_url='/users' />
        <div className="box">  
        {error&& <div className='error-notify'>{error}</div>}  
            <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
            <span className="title-text">Users</span>
            <div className="table-box">
                <div className="oposite">
                    <Link to='/dashbord/users'>
                      <button onClick={()=>setMultiple(!multiple)}>Multiple</button>
                    </Link>
                    <Link to='/dashbord/users/add'>
                      <button>
                        <span className='big-sizes'> + Add New</span>
                        <span className='small-sizes'> + Add </span>
                       </button>
                    </Link>
                    <Link to='/dashbord/users'>
                      <button>Filter</button>
                    </Link>

                </div>
                <br/>
                
                  <UsersPagination maplist={usersList} multiple={multiple} />

          </div>
          <Routes>
               <Route path="/add" element={<AddUser />} exact /> 
          </Routes>
        </div>
      </>
    ) ;
};

export default Users