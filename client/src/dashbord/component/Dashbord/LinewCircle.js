import React from 'react'
import {  VictoryChart, VictoryScatter, VictoryLine, VictoryAxis} from 'victory';
import {BsThreeDotsVertical} from 'react-icons/bs'
import moment from 'moment'
const LinewCircle = ({orderList}) => {
  const ordersData= orderList.map(order=>{
    const  date= moment(order.created_at).format('MM/YYYY')
    
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
    console.log(moment(new Date()).format('MM/YYYY'))
    console.log(endresult)
  return (
    <div className='chart linewcircle'>
      <h5>Analytics</h5>
      <span className='oposite'>
        <BsThreeDotsVertical />
      </span>
            <VictoryChart
                // theme={}
                domain={{ x: [0, 12], y: [0, 1000] }}
                >
                <VictoryLine 
                    height={30}
                    size={7}
                    data= 
                    {endresult}
                    // {[
                    // { x: '20/1', y: 2 },
                    // { x:' 20/2', y: 3 },
                    // { x: '20/3', y: 5 },
                    // { x: '20/4', y: 4 },
                    // { x: '20/5', y: 7 }
                    // ]}
                />
                <VictoryScatter
                    style={{ data: { fill: "#00CCF2" , stroke:'#000', strokeWidth: 3 } }}
                    size={7}
                    
                    bubbleProperty="amount"
                    maxBubbleSize={5}
                    minBubbleSize={1}
                    data={endresult}
                    // {[
                    // { x: 1, y: 2, amount:5},
                    // { x: 2, y: 3 , amount:5},
                    // { x: 3, y: 5 , amount:5},
                    // { x: 4, y: 4, amount: 5 },
                    // { x: 5, y: 7, amount: 5 },
                    // {  amount: 4},
                    // ]}
                />
                {/* remove tables lines */}
                  <VictoryAxis style={{ 
                    axis: {stroke: "transparent"}, 
                    ticks: {stroke: "transparent"},
                  //  tickLabels: { fill:"transparent"} 
                      }} 
                />
                
            </VictoryChart>
    </div>
  )
}

export default LinewCircle