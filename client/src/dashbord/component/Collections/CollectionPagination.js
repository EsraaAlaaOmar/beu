import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import CollectionsRow from './CollectionsRow';
const CollectionPagination = ({maplist, deleteClicked}) => {

    const [state, setState] =useState({
        list: maplist,
        perPage: 3,
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
      //  let items = state.list.slice(page * perPage, (page + 1) * perPage);
      {console.log(maplist.results)}
       const Collections =maplist.length>0? maplist.map((collection)=>{
        return (
        
              <>
                 <CollectionsRow collection={collection}  deleteClicked={deleteClicked} />
              </>
        
       
    
        )
       
    }) : <tr> <td>No Collections Found</td></tr>


    return (
        <>
          <table className='Table'>
            <thead>
            <tr className="head">
                <th>ID</th>
                <th>Collection</th>
                <th>
                  {/* Products */}
                  </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>        
                <th></th>
                
            </tr>
            </thead>
            <tbody>
            {Collections}
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

export default CollectionPagination