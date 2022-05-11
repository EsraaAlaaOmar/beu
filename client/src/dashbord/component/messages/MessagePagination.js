import React,{useState, useEffect} from 'react'

import ReactPaginate from 'react-paginate';
import TableRow from './TableRow';
const MessagePagination = ({maplist}) => {
    const [state, setState] =useState({
        list: maplist,
        perPage: 4,
        page: 0,
        pages: 0,
       });
       const {perPage} = state;
  
    const   handlePageClick = (event) => {
        let page = event.selected;
        setState({page})
       }
 
    const {page,  pages} = state;
       let items = state.list.slice(page * perPage, (page + 1) * perPage);
       const users = maplist.map((user)=>{
        return (
        
              
          <TableRow user= {user}/>
         
       
    
        )
    })
    ||  ''

    return (
        <>
          <table className='Table'>
            <thead>
            <tr className="head">
                <th>User</th>
                <th>MESSAAGE</th>
                <th>RESPONSE</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
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
  )
}

export default MessagePagination