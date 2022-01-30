
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
         <Route path="/submitsuccess" element={<Submit />} exact />

        
     </Routes>

 </Router>
  );
}

export default App;
