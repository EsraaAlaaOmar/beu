
import React,{useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import DiscountRow from './DiscountRow';
const DiscountPagination = ({maplist}) => {
  const {isLoading ,discountList } =useSelector((state)=> state.discount)
    const [state, setState] =useState({
        list: discountList,
        perPage: 20,
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
       const users = discountList.map((discont)=>{
        return (
        
              
               <DiscountRow discont={discont}  />
         
       
    
        )
    })
    ||  ''

    return (
        <>
          <table className='Table'>
            <thead>
            <tr className="head">
                <th>START DATE</th>
                <th>END DATE</th>
                <th>PERCENTAGE %</th>
                <th>PROMO-CODE</th>
                <th>AVAILABILITY</th>
                <th>ARCHIEVE</th>
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

export default DiscountPagination