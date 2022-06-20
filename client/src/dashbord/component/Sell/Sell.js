import React,{useEffect , useMemo} from 'react'
import { useTable, usePagination } from 'react-table'

import { useDispatch,useSelector } from 'react-redux'
import Login from '../Auth/Login'
import Nav from '../reusable/Nav'
import SellRow from './SellRow'

import {getSellList} from'../../store/sellinbowslice'
import { useState } from 'react'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg'


const Sell = ({setActiveIndex}) => {
  setActiveIndex()
  const {isLoading, sellList,error } =useSelector((state)=> state.sell)

  
//   let data=useMemo(()=>  [...sellList],[sellList]) 
//   const tableHooks = (hooks) => {
//     hooks.visibleColumns.push((columns) => [
//       ...columns,
//       {
//         id: "Edit",
//         Header: "Edit",
//         Cell: ({ row }) => (
//           <button onClick={() => alert("Editing: " + row.values.price)}>
//             Edit
//           </button>
//         ),
//       },
//     ]);
//   };
//   console.log(sellList)
  const dispatch = useDispatch()
    useEffect(() =>{
      dispatch(getSellList())
    
  
    },[dispatch])
  //info flashmsg state
  const[infoflashmsg,setInfoFlashmsg] = useState(false)
  

//     //table view
//     // Use the state and functions returned from useTable to build your UI
//     const columns = React.useMemo(
//       () => [
//             {
//               Header: 'USER',
//               accessor: 'full_name',
//             },
//             {
//               Header: 'BUSINESS NAME',
//               accessor: 'brand_name_english',
//             },
//             {
//               Header: 'ADDRESS',
//               accessor:`city.name`,
           
//             },
//             {
//               Header: 'EMAIL',
//               accessor: 'email',
//             },
//             {
//               Header: 'PHONE NUMBER',
//               accessor: 'phone',
//             },
//             {
//               Header: 'LOGO',
//               accessor: 'logo',
//             },
          
        
//       ],
//       []
//     )
  
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page, // Instead of using 'rows', we'll use page,
//     // which has only the rows for the active page

//     // The rest of these things are super handy, too ;)
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
    
//   } = useTable(
//     {
//       columns,
//       data,
//       tableHooks
     
//     },
//     usePagination

    
//   )
// // Render the UI for your table
// return (
//   <>
//   <Nav first_link='All'  first_link_url='/dashbord/sell' />
//   {isLoading ? 
//     <div  className="box loading"> <img src='/images/loading.gif' /></div> 
//     :
//      <>
//   <div  className="box ">

//     <div className="title-text">Sell in Beau Wow</div>
   
//       <div className="table-box no-butons">
//           <table {...getTableProps()}>
//             <thead>
//               {headerGroups.map(headerGroup => (
//                 <tr {...headerGroup.getHeaderGroupProps()}>
//                   {headerGroup.headers.map(column => (
//                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  
//                   ))}
                   
//                 </tr>
//               ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//               {page.map((row, i) => {
//                 prepareRow(row)
//                 return (
//                   <tr {...row.getRowProps()}>
//                     {row.cells.map(cell => {
//                       return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                     })}
                  
//                   </tr>
//                 )
//               })}
//             </tbody>
//           </table>
//       </div>
    
//       {/* 
//         Pagination can be built however you'd like. 
//         This is just a very basic UI implementation:
//       */}
//       <div className="pagination">
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {'<<'}
//         </button>{' '}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {'<'}
//         </button>{' '}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {'>'}
//         </button>{' '}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {'>>'}
//         </button>{' '}
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{' '}
//         </span>
//         <span>
//           | Go to page:{' '}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={e => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0
//               gotoPage(page)
//             }}
//             style={{ width: '100px' }}
//           />
//         </span>{' '}
//         <select
//           value={pageSize}
//           onChange={e => {
//             setPageSize(Number(e.target.value))
//           }}
//         >
//           {[2, 4, 6, 40, 50].map(pageSize => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//       </div>
//       </>}
  
   
//   </>
// )
// }
const renderedSellList = sellList.map(sel=> <SellRow sell={sel} setInfoFlashmsg={setInfoFlashmsg} />
)
  return (
    <>
      <Nav first_link='All'  first_link_url='/dashbord/sell' />
      
    
         { isLoading ? <div  className="box loading">
           <img src='/images/loading.gif' />
         </div>
          : <div className="box">
               {infoflashmsg && <FlashMsg 
                title="Delete Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}
              <div className="title-text">Sell in Beau Wow</div>
              <div className="table-box no-butons">
                    <table className='Table'>
                    <thead>
                    <tr className="head">
                       
                        <th>USER</th>
                        <th>BUSINESS NAME</th>
                    
                    
                        <th>ADDRESS</th>
                        <th>EMAIL</th>
                        <th>PHONE NUMBER</th>
                        
                        
                        <th>LOGO</th>
                        <th>FILES</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                      {renderedSellList}
                    </tbody>
                </table>
                   
             </div>

          </div> }
    </>
  )
}

export default Sell