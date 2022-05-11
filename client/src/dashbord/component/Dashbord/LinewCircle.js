import React from 'react'
import {  VictoryChart, VictoryScatter, VictoryLine, VictoryAxis} from 'victory';
import {BsThreeDotsVertical} from 'react-icons/bs'
const LinewCircle = () => {
  return (
    <div className='chart linewcircle'>
      <h5>Analytics</h5>
      <span className='oposite'>
        <BsThreeDotsVertical />
      </span>
            <VictoryChart
                // theme={}
                domain={{ x: [0, 5], y: [0, 7] }}
                >
                <VictoryLine 
                    height={30}
                    size={7}
                    data={[
                    { x: '20/1', y: 2 },
                    { x:' 20/2', y: 3 },
                    { x: '20/3', y: 5 },
                    { x: '20/4', y: 4 },
                    { x: '20/5', y: 7 }
                    ]}
                />
                <VictoryScatter
                    style={{ data: { fill: "#00CCF2" , stroke:'#000', strokeWidth: 3 } }}
                    size={7}
                    
                    bubbleProperty="amount"
                    maxBubbleSize={5}
                    minBubbleSize={1}
                    data={[
                    { x: 1, y: 2, amount:5},
                    { x: 2, y: 3 , amount:5},
                    { x: 3, y: 5 , amount:5},
                    { x: 4, y: 4, amount: 5 },
                    { x: 5, y: 7, amount: 5 },
                    {  amount: 4},
                    ]}
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