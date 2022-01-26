import React from 'react';
import ShowMoreText from "react-show-more-text";
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Points = () => {
  return <div className='orders'>

<div className='header'>
                <div className='your_orders ' > <Link to='/profile'> <span className='bag'><FaShoppingBag /></span> Your Orders</Link> </div> 
                <div className='your_points your_active' >  <Link to='/profile/points'><span>$</span> Your Points</Link> </div>
                
          </div>
          <div className='points'>
         <div className='your_points'> Your Total Earned Points : <span className='yellow'>150</span>  <span>points</span> </div>
         <div className='buymore'>
           <div className='title'>Buy More, Earn More ..</div>
           <div className='details'> 
           <ShowMoreText
                /* Default options */
                lines={4}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                expanded={false}
                width={280}
                truncatedEndingComponent={"... "}
            >
                  Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus sed posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit sed fermentum. Nullam sit amet ex enim. Fusce nec suscipit nulla. Maecenas porta mi vestibulum, lobortis est ac, hendrerit dui. Pellentesque auctor id enim sit amet molestie.
           </ShowMoreText>
           
           </div>

         </div>

          </div>

  </div>;
};

export default Points;
