import React from 'react'
import {VictoryLine} from'victory';
import moment from 'moment'
const Natural = ({orderList}) => {
  // const {orderList} =useSelector((state)=> state.orders)

   const ordersData = orderList.map((order) =>{
    const  date= moment(order.created_at).format('DD/MM')
    if(moment(order.created_at).format('MM/YYYY') == moment(new Date()).format('MM/YYYY'))
   return {x:date , y:1}
   })

  const reversedOrders=ordersData.reverse()
const endresult = Object.values(reversedOrders.reduce((value, object) => {
  if (value[object.x]) {
    value[object.x].y += object.y; 
    value[object.x].count++;

} else {
    value[object.x] = { ...object , count : 1
    };
  }
  return value;
}, {}));

  return (

    <div className='chart natural'>
      {!endresult?  'Loading':  <div className='graph'>
        
       <VictoryLine
        
        
            interpolation="natural"
            width={2000}
            height={500}
            style={{
              width: '300',
              height: '100',
                data: { stroke: "#fff", strokeWidth: 10},
                parent: { backgroundColor:'#FF007C',},
               
            }}
            data={endresult}
            
            // {[
            //     { x: 1, y: 6},
            //     { x: 2, y: 0 },
            //     { x: 3, y: 6 },
            //     { x: 4, y: 0 },
            //     { x: 5, y: 6 },
            //     { x: 6, y: 0 },
            //     { x: 7, y: 6 },
            //     { x: 8, y: 0 },
            //     { x: 9, y: 6 },
            //     { x: 10, y: 0 },
            //     { x: 11, y: 6 },
            //     { x: 12, y: 0 },
            //     { x: 13, y: 6 },
             
            //     ]}
        />
        </div>}
        <div className='num'>3.4K</div>
        <div className='duration'>Orders || This Month</div>
    </div>
  )
}

export default Natural