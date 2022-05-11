import React from 'react'
import { ReactComponent as Logo } from '../../images/offers.svg';

import collections from '../../data/collections.json'

import OfferesProductsPagination from './OfferesProductsPagination'
import { Link } from 'react-router-dom';

const Offersproducts = () => {
  return (
    <div className="box collections">  
    <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
    <span className="title-text">
    Offers | Products
    </span>
    <div className="table-box">
      <span className="box-title">Products</span>
        <div className="oposite">
            <Link to='/dashbord/collections'>
            <button>Filter</button>
            </Link>
            <Link to='/dashbord/collections'>
            <button>+ Add New</button>
            </Link>

        </div>
        <br/>
        
        <OfferesProductsPagination maplist={collections} />

</div>
</div>
)
}


export default Offersproducts