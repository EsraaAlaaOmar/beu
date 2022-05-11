import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Circle = () => {
  return (
    <>
     <div className="circle-div">
        <div class="progress lightblue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">50%</div>

        </div>
        <div className="information">
                         <span className="bold ">Status</span>
                         <span className='oposite'><BsThreeDotsVertical /></span>
                         <br/>
                         selling growth
                         <br/>
                         <span className="bold top">4.312</span>
                   </div>
    </div>
  
   </>
  )
}

export default Circle
