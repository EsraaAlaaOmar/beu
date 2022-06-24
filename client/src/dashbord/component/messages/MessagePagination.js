import React,{useState, useEffect} from 'react'
 
import ReactPaginate from 'react-paginate';
import TableRow from './TableRow';
const MessagePagination = ({maplist, setInfoFlashmsg}) => {
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
    //info flashmsg state
 

    const {page,  pages} = state;
       let items = state.list.slice(page * perPage, (page + 1) * perPage);
       const users =maplist.length>0 ? maplist.map((user)=>{
        return (
        
              
          <TableRow user= {user} setInfoFlashmsg={setInfoFlashmsg}/>
         
       
    
        )
    })  : 'No messages found'

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