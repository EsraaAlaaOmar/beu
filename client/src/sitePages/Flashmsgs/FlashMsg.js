import React from 'react'

const FlashMsg = ({title, p, icontype,img,setFlashmsg, func, func_val}) => {
  
  return (
  
     <div className='flash-msgs'>
            <div className='close'  onClick={()=>setFlashmsg(false)}><img src='/images/msgIcons/close.svg'/></div>
            <div className={`flash-icon ${icontype}`}>
                    <img src={img}/>
            </div> 
            <div className='title'>
               {title}
            </div>
            <p>{p}</p>
            {func &&
                    <div className='func'>
                      <button className='confirm' onClick={()=>{func(func_val); setFlashmsg(false)}}>
                     { icontype=='sure-icon' ? 'Delete' : 'Confirm'}
                      </button>
                      <button className='cancel'  onClick={()=>setFlashmsg(false)}>
                           Cancel
                      </button>
              
                     </div>}
   
   

</div>
  )
}

export default FlashMsg