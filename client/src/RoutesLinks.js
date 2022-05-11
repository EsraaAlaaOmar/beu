import React from 'react'
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import Dashbord from './dashbord/App'
const RoutesLinks = () => {
  return (
    <Router>
        <Routes>
                <Route path="/*" element={<App />} exact />
                <Route path="/dashbord/*" element={<Dashbord />} exact />
        </Routes>
    </Router>
  )
}

export default RoutesLinks