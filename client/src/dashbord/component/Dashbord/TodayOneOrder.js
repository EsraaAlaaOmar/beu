import React from 'react'

const TodayOneOrder = ({
    img='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996',
    name='Josh Brolin',
    itemnum=1 , itemprice= 100  , 
    itemimg='https://img.freepik.com/free-vector/realistic-cleaning-products-ad_52683-38716.jpg?w=996'

}) => {
  return (
    <div className='oneorder'>
        <img  className='uerimg'
        src={img}
         />
         <span className='name'> {name} </span> &nbsp; &nbsp;
         <span className='item-info'>{itemnum} items | {itemprice}$  </span>
         <img  className='itemimg oposite'
         src={itemimg}
         />
    </div>
  )
}

export default TodayOneOrder