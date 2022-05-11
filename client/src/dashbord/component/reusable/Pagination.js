import React,{useState, useEffect} from 'react'

import ReactPaginate from 'react-paginate';
import OrderRow from '../Orders/OrderRow';

const Pagination = ({maplist}) => {
    const [state, setState] =useState({
        list: maplist,
        perPage: 4,
        page: 0,
        pages: 0,
       });
       const {perPage} = state;
       
    //    useEffect(() => {
    //    setState({
    //     list:maplist,
    //     pages: Math.floor(list.length / perPage)

    //    });
       
    // })
    const   handlePageClick = (event) => {
        let page = event.selected;
        setState({page})
       }
 
    const {page,  pages} = state;
       let items = state.list.slice(page * perPage, (page + 1) * perPage);
       const users = items.map((user)=>{
        return (
        
              
              
         
       <OrderRow user={user} />
    
        )
    })
    ||  ''

    return (
        <>
          <table className='Table'>
            <thead>
            <tr className="head">
                <th>User</th>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>ITEMS</th>
                <th>SIZE</th>
                <th>COLORS</th>
                <th>SHIPPING STATUS</th>
                <th>PRICE</th>
                <th>PAYMENT METHOD</th>
                <th></th>
                
            </tr>
            </thead>
            <tbody>
            {users}
            </tbody>
          </table>
          {/* <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            pageCount={pages}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
         /> */}
       </>
       );
      
}

export default Pagination