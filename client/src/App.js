
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'
import Log from './sitePages/Login/Log';
import Land from "./landingPage/Land";
import Search from './sitePages/Search';
import Favourite from './sitePages/Favourite';
import ProductPage from './sitePages/ProductPage';
import Profile from './sitePages/Profile';
import Card from './sitePages/Card';
import Category from './sitePages/Category';
import ReturnForm from './sitePages/ReturnForm';
import Submit from './sitePages/Submit';
import Payment from './sitePages/components/staticPages/payment/Payment';
function App() {
  return (
    <Router>

   
    <Routes>
         <Route path="/" element={<Land />} exact />
         <Route path="/log/*" element={<Log />} exact />
         <Route path="/search" element={<Search />} exact />
         <Route path="/favourite" element={<Favourite />} exact />
         <Route path="/product" element={<ProductPage />} exact />
         <Route path="/profile/*" element={<Profile />} exact />
         <Route path="/card" element={<Card />} exact />
         <Route path="/category" element={<Category />} exact />
         <Route path="/return" element={<ReturnForm />} exact />
         <Route path="/payvisa" element={<Payment />} exact />
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

 </Router>
  );
}

export default App;
