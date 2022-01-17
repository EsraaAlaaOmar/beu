
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'
import Log from './sitePages/Login/Log';
import Land from "./landingPage/Land";
import Search from './sitePages/Search';
function App() {
  return (
    <Router>

   
    <Routes>
         <Route path="/" element={<Land />} exact />
         <Route path="/log/*" element={<Log />} exact />
         <Route path="/search" element={<Search />} exact />

        
     </Routes>

 </Router>
  );
}

export default App;
