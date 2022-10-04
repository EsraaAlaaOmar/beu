
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'
import './App.scss';
import Log from './sitePages/Login/Log';
import Land from "./landingPage/Land";
import Search from './sitePages/Search';
import Favourite from './sitePages/Favourite';
import ProductPage from './sitePages/ProductPage';
import Profile from './sitePages/Profile';
import Category from './sitePages/Category';
import Submit from './sitePages/Submit';
import Payment from './sitePages/components/payment/Payment';
import Cart from './sitePages/Cart/Cart';
import BrandProducts from './sitePages/BrandProducts';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';
// import Dashbord from './dashbord/App'
function App() {
  const {userInfo, loggedIn} =useSelector((state)=> state.auth)
  return (
  

   <div className="clientSide">
      <Routes>
          <Route path="/" element={<Land />} exact />
       
          <Route path="/log/*" element={<Log />} exact />
          <Route path="/search" element={<Search />} exact />
        <Route path="/favourite" element={
          <PrivateRoute notUser={(userInfo&&!userInfo.is_customer) || !loggedIn}>
                     <Favourite />
          </PrivateRoute>
          } exact />
          <Route path="/product/*" element={<ProductPage />} exact />
          <Route path="/profile/*" element={ <PrivateRoute notUser={(userInfo&&!userInfo.is_customer) || !loggedIn}>
             <Profile />
          </PrivateRoute>} exact />
        <Route path="/Cart" element={
           <PrivateRoute notUser={(userInfo&&!userInfo.is_customer) || !loggedIn}>
             <Cart />
          </PrivateRoute> } exact />
          <Route path="/category" element={<Category />} exact />
          <Route path="/pay/*" element={<Payment />} exact />
          <Route path="/brandproducts/:id" element={<BrandProducts/>} exact />
          <Route path="/submitsuccess" element={<Submit title='Submitted Successfully' />} exact />
          <Route path="/thanking" element={<Submit 
            title='Thank you for your message'
            p='We always care about you and will contact you as soon as possible'
            />} exact />
            <Route path="/successfulpayment" element={<Submit 
            title='Successful Payment'
            p={<span>Thank You for Shopping with Us</span>}
            />} exact />

          
      </Routes>
      </div>


  );
}

export default App;
