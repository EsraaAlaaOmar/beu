import React from 'react'

const DropDownList = ({list ,setSelected}) => {
    const renderedItems= list.length>0 ? list.map(item=><div className='dropdown-item' onClick={()=>setSelected(item)}> {item.name} </div> ): <div className='dropdown-item'>no Items found</div>
  return (
    <div className='dropdown-list'>
        {renderedItems}

    </div>
  )
}

export default DropDownList