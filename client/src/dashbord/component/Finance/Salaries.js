import React from 'react'
import { Link } from 'react-router-dom'

const Salaries = () => {
  return (
    <div className="f-box-container">
        <div className="top">
            <span>Total Salaries</span>
            <button className="oposite">NEW</button>
            <div className="bold">$ 600</div>
        </div>
        <div className="useres">
            <div className="user">
                <img 
                  src='https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=996'
                   />
                   <span className='name'>Vincent Bradley</span>
                   <span class='oposite'> 
                   200 $
                   </span>
                
            </div>
            <div className="user">
                <img 
                  src='https://as1.ftcdn.net/v2/jpg/02/68/77/20/1000_F_268772018_c4jJBONUHzGqUF6m1lBOy44EMSEMb0e3.jpg'
                   />
                   <span className='name'>Vincent Bradley</span>
                   <span class='oposite'> 
                   200 $
                   </span>
                
            </div>

        </div>

        <div className="buttom">
         <Link to='/dashbord/'><span>OPEN ALL</span></Link>
        </div>

</div>
  )
}

export default Salaries