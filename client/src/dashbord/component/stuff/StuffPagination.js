import React,{useState} from 'react'
import UserLine from '../users/UserLine';
import {BsThreeDotsVertical} from 'react-icons/bs'
import StuffRow from './StuffRow';
const StuffPagination = ({maplist,setInfoFlashmsg,clearstate}) => {
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
       const users = maplist.map((user)=>{
        return (
        
              
         <StuffRow user={user} setInfoFlashmsg={setInfoFlashmsg} clearstate={clearstate}/>
       
    
        )
    })
    ||  ''

    return (
        <>
          <table className='Table'>
            <thead>
            <tr className="head">
                <th>Employee</th>
                <th>POSITION</th>
                <th>USER NAME</th>
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
       );
      
}

export default StuffPagination