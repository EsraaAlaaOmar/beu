import React,{useState} from 'react'
import './App.scss';

import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'

import Nav from './component/reusable/Nav';


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
function App() {
const [showSide,setShowSide]=useState(false)
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

      <Sidebar showtoggle={showSide}/>
<Routes>
     <Route path="/" element={<Dashbord />} exact /> 
     <Route path="/orders/*" element={<Orders />} exact />
     <Route path="/collections" element={<Collections />} exact />
     <Route path="/offersproducts" element={<Offersproducts />} exact />
     <Route path="/users/*" element={<Users />} exact />
     <Route path="/stuff/*" element={<Stuff />} exact />
     <Route path="/discount/*" element={<Discount />} exact />
     <Route path="/offers/*" element={<Offers />} exact />
     <Route path="/products/*" element={<Products />} exact />
     <Route path="/finance" element={<Finance />} exact />
     <Route path="/messages" element={<Messages />} exact />
     <Route path="/sizes" element={<Sizes />} exact />
     <Route path="/addresses" element={<Address />} exact />
     <Route path="/register" element={<Register />} exact />
     <Route path="/login" element={<Login />} exact />




     
 </Routes>


    </div>
  );
}

export default App;
