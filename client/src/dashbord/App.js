import React,{useState, useEffect} from 'react'
import './App.scss';

import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'

import Nav from './component/reusable/Nav';
import {adminDetils} from './store/logedDetailsSlice'
import {useDispatch} from 'react-redux';
import Dashbord from "./component/Dashbord/Dashbord";
import Sidebar from './component/Dashbord/Sidebar';
import Orders from './component/Orders/Orders';
import Collections from './component/Collections/Colections'
import Offersproducts from './component/Offers&products/offersproducts';
import Users from './component/users/Users';
import Stuff from './component/stuff/Stuff';
import Discount from './component/discount/Discount';
import Offers from './component/offers/Offers';
import Products from './component/Products/Products';
import Finance from './component/Finance/Finance'
import Messages from './component/messages/Messages';
import Sizes from './component/Sizes/Sizes';
import Address from './component/Address/Address';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import LandingPage from './component/landingPage/LandingPage';
import FeedBack from './component/feedback/FeedBack';
import QuestionswithAnswers from './component/questions and answers/QuestionswithAnswers';
import Sell from './component/Sell/Sell';
import OffersProducts from './component/offers/OffersProducts';
function App() {
const [showSide,setShowSide]=useState(false)
const[activeIndex,setActiveIndex] = useState(0)
const dispatch = useDispatch()
useEffect(() =>{
   
  dispatch(adminDetils())




},[dispatch])
  return (
    <div className="App dashbord-side" 
    onClick={(e)=>
      { if(e.target !== document.getElementById('list')   ){
        setShowSide(false)
     
        }
        if(e.target == document.getElementById('list')   ){
          setShowSide(true)
        }
      }
    }
        >

      <Sidebar showtoggle={showSide} active={activeIndex}/>
<Routes>
     <Route path="/" element={<Dashbord setActiveIndex={()=>setActiveIndex(0)} />} exact /> 
     <Route path="/orders/*" element={<Orders setActiveIndex={()=>setActiveIndex(1)} />} exact />
     <Route path="/collections/*" element={<Collections setActiveIndex={()=>setActiveIndex(2)} />} exact />
     <Route path="/offersproducts" element={<Offersproducts setActiveIndex={()=>setActiveIndex(3)}/>} exact />
     <Route path="/users/*" element={<Users setActiveIndex={()=>setActiveIndex(5)} />} exact />
     <Route path="/stuff/*" element={<Stuff setActiveIndex={()=>setActiveIndex(6)} />} exact />
     <Route path="/discount/*" element={<Discount setActiveIndex={()=>setActiveIndex(4)} />} exact />
     <Route path="/offers/*" element={<Offers setActiveIndex={()=>setActiveIndex(3)} />} exact />
     <Route path="/products/:id/*" element={<Products setActiveIndex={()=>setActiveIndex()} />} exact />
     <Route path="/finance" element={<Finance setActiveIndex={()=>setActiveIndex(13)} />} exact />
     <Route path="/messages" element={<Messages setActiveIndex={()=>setActiveIndex(7)} />} exact />
     <Route path="/sizes" element={<Sizes setActiveIndex={()=>setActiveIndex(8)} />} exact />
     <Route path="/addresses/*" element={<Address setActiveIndex={()=>setActiveIndex(9)} />} exact />
     <Route path="/register" element={<Register setActiveIndex={()=>setActiveIndex()} />} exact />
     <Route path="/login" element={<Login setActiveIndex={()=>setActiveIndex()} />} exact />
     <Route path="/landingpage/*" element={<LandingPage setActiveIndex={()=>setActiveIndex(12)} />} exact />
     <Route path="/feedback/*" element={<FeedBack setActiveIndex={()=>setActiveIndex(10)} />} exact />
     <Route path="/questions/*" element={<QuestionswithAnswers setActiveIndex={()=>setActiveIndex(10)} />} exact />
     <Route path="/sell" element={<Sell setActiveIndex={()=>setActiveIndex(11)} />} exact />
     <Route path="/offerproducts" element={<OffersProducts />} exact />
     




     
 </Routes>


    </div>
  );
}

export default App;
