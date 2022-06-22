import React from 'react'
import {  VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from 'victory';
import moment from 'moment'
const LineChart = ({orderList}) => {
 const ordersData= orderList.map(order=>{
const  date= moment(order.created_at).format('DD/MM')

return  {x:date , y:order.total_price}
})

const endresult = Object.values(ordersData.reverse().reduce((value, object) => {
  if (value[object.x]) {
    value[object.x].y += object.y; 
    value[object.x].count++;

} else {
    value[object.x] = { ...object , count : 1
    };
  }
  return value;
}, {}));

console.log(endresult)
  return (
    <div className="line chart">
      <h5>Orders Weekly</h5>
      <div className="graph">
        
        <VictoryChart  theme={VictoryTheme.material} >
          
            <VictoryLine            
            style={{
                data: { stroke: "#FF007C", strokeWidth: 5, },
                parent: { border: "1px solid #ccc", backgroundColor:'#fff'}
            }}
                
                data={endresult}
                // {[
                // { x: 1, y: 0 },
                // { x: 2, y: 6 },
                // { x: 3, y: 5 },
                // { x: 4, y: 6 },
                // { x: 5, y: 5 },
                // { x: 6, y: 6 },
                // { x: 7, y: 5 }
                // ]}
            />
            {/* remove herozontal lines */}
             <VictoryAxis
              style={{
                grid: { stroke: "#818e99", strokeWidth: 0.5 },
              }}
            />
      </VictoryChart>
     </div>
    </div>
  )
}

export default LineChart