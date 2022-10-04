import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';

import OneOrder from './OneOrder';
const ReturnedOrders = () => {
    return <div className='satue'>
    <div className='orders_status_header'>
      <Link to='/profile/'>
            <div className='section '>
            <span>1</span> Current
            </div> 
      </Link>
      <Link to='/profile/prev'>
            <div className='section '>
            <span>0</span> Previous
            </div>
      </Link>
      <Link to='/profile/returned'>
            <div className='section active'>
            <span>3</span> Returned
            </div>
      </Link>


   </div>
   <div className='order_details'>
     
      <OneOrder />
      <OneOrder />
      <div className='orderes_info'>
        <div className='payment'>
          <div>Total : 300 $</div>
          <div>Paid by paypal</div>
        </div>
        <div className='status'>
          <div className='pinding'>Status : Pinding</div>
         
        </div>
      </div>
  </div>
  <div className='order_details'>
     
      <OneOrder />
      
      <div className='orderes_info'>
        <div className='payment'>
          <div>Total : 300 $</div>
          <div>Paid by paypal</div>
        </div>
        <div className='status'>
          <div>Status : Returned</div>
          
        </div>
        <div className='made_on'>made on :1/1/2022 returned on 2/2/2022</div>
      </div>
  </div>
  <div className='order_details'>
     
      <OneOrder />
      
      <div className='orderes_info'>
        <div className='payment'>
          <div>Total : 300 $</div>
          
        </div>
        <div className='status'>
          <div className='Refused'>Status : Refused</div>
         
          
        </div>
        <div className='reason'>
            <ShowMoreText
                    /* Default options */
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                   
                    expanded={false}
                  
                    truncatedEndingComponent={"... "}
                >
                       Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem ex in ligula. Nunc purus est, consequat condimentum faucibus sed, iaculis sit amet massa. Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien ullamcorper at. Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu luctus dolor ex at quam. Fusce a nisi at erat dapibus posuere eget sed nulla. Nam sem odio, hendrerit vel mi ut, pharetra viverra massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc placerat ante vel eros semper bibendum. Donec ultricies vestibulum interdum.
            </ShowMoreText>
          </div>
      </div>
  </div>
      
 </div>;
};

export default ReturnedOrders;
