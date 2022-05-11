import React from 'react'
import {  VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from 'victory';

const LineChart = () => {
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
                
                data={[
                { x: 1, y: 0 },
                { x: 2, y: 6 },
                { x: 3, y: 5 },
                { x: 4, y: 6 },
                { x: 5, y: 5 },
                { x: 6, y: 6 },
                { x: 7, y: 5 }
                ]}
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