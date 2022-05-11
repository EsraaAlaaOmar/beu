import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
const OfferesProductsPagination = ({maplist}) => {
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
       let items = state.list.slice(page * perPage, (page + 1) * perPage);
       const Collections = items.map((collection)=>{
        return (
        
              
                <tr key={collection.id}>
                <td >
                   
                   {collection.id}
                </td>
                 <td className='align_dir'>
                     <img src={collection.img} />
                     <br/>
                     {collection.name}</td>
                <td></td>
                <td>{collection.stock}</td>
                <td>{collection.price} $</td>
                <td>{collection.sales}</td>
                <td>{collection.views}</td>
               
                
                <td><span><BsThreeDotsVertical /></span></td>
            </tr>
         
       
    
        )
    })
    ||  ''

    return (
        <>
          <table className='Table'>
            <thead>
            <tr className="head">
                <th>ID</th>
                <th>Product</th>
                <th></th>
                <th>In Stock</th>
                <th>Price</th>
                <th>sales</th>
                <th>Views</th>        
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

  

export default OfferesProductsPagination