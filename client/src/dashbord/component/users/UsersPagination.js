import React,{useState} from 'react'
import {RiCheckboxBlankCircleLine, RiCheckboxCircleFill} from 'react-icons/ri'

import UserLine from './UserLine'
const UsersPagination =({maplist,multiple, setInfoFlashmsg}) => {
  const[all, setAll]=useState(false)  
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
        <UserLine multiple={multiple} user={user} all={all} setInfoFlashmsg={setInfoFlashmsg} />
         
       
    
        )
    })
    ||  ''

    return (
        <>
          <table className='Table'>
            <thead>
            <tr className="head">
                <th className="nospace">{multiple && <span className="check checked "  onClick={()=> setAll( !all )}> <RiCheckboxCircleFill /> </span>}</th>
                <th>Name</th>
                <th></th>
               
              
                <th>ADDRESS</th>
                <th></th>
                <th>ID</th>
                
                
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
export default UsersPagination