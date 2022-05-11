import React,{useEffect} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/staff.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmins } from '../../store/adminSlice';
import useres from '../../data/users.json'
import StuffPagination from './StuffPagination';
import AddStuff from './AddStuff';
import Nav from '../reusable/Nav';
import EditeAdmin from './EditeAdmin';
const Stuff = () => {
  const {adminsList, error} =useSelector((state)=> state.admins)
  const dispatch = useDispatch()
 
  // useEffect(() =>{
  //   dispatch(getAdmins())
  

  // },[dispatch])
    return (
    <>
        <Nav  first_link='Active' second_link='All'   first_link_url='/stuff'   second_link_url='/stuff'/>
        <div className="box">  
        {error&& <div className='error-notify'>{error}</div>}  
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
               <Route path="/edite" element={<EditeAdmin />} exact /> 
          </Routes>

  </div>
</div>
      
    
    </>
    );
};


export default Stuff