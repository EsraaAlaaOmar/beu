import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {  VictoryChart, VictoryGroup, VictoryBar } from 'victory';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
const Statistics = () => {
  return (
    <div className='chart'>
      <h5>Statistics</h5>
      <span className='oposite'> <BsThreeDotsVertical /> </span>
        
<VictoryChart
          
          domain={{ y: [0.5, 5.5] }}
        >
            <VictoryGroup horizontal
              offset={10}
              style={{ data: { width: 6 } }}
              colorScale={["#FF007C","#00CCF2" ]}
            >
              <VictoryBar
                data={[
                  { x: 1,   y: 2, y0: 1 },
                  { x: 2, y: 2, y0 : 1 },
                  { x: 3, y: 3 },
                  { x: 4, y: 2 },
                  { x: 5, y: 1 }
                ]}
              />
              <VictoryBar
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 4 },
                  { x: 4, y: 5 },
                  { x: 5, y: 5, y0:3 }
                ]}
              />
           
              
          </VictoryGroup>
        </VictoryChart>
        <span className='arrow'> <BsFillArrowUpRightCircleFill /> </span>
    </div>
  )
}

export default Statistics