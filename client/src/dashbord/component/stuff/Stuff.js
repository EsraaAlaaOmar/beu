import React,{useEffect} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/staff.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmins } from '../../store/adminSlice';
import useres from '../../data/users.json'
import StuffPagination from './StuffPagination';
import AddStuff from './AddStuff';
import Nav from '../reusable/Nav';
const Stuff = () => {
  const {adminsList } =useSelector((state)=> state.admins)
  const dispatch = useDispatch()
 
  useEffect(() =>{
    dispatch(getAdmins())
  

  },[dispatch])
    return (
    <>
        <Nav  first_link='Active' second_link='All' />
        <div className="box">  
    <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
    <span className="title-text">Stuff</span>
    <div className="table-box">
        <div className="oposite">
            <Link to='/dashbord/stuff'>
              <button>Filter</button>
            </Link>
            <Link to='/dashbord/stuff/add'>
              <button>+ Add New</button>
            </Link>

        </div>
        <br/>
         
          <StuffPagination maplist={adminsList} />
          <Routes>
               <Route path="/add" element={<AddStuff />} exact /> 
          </Routes>

  </div>
</div>
      
    
    </>
    );
};


export default Stuff