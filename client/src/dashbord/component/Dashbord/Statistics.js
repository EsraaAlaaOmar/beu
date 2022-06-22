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
                  { x: 'Sat.',   y: 2, y0: 1 },
                  { x: 'Sun.', y: 2, y0 : 1 },
                  { x: 'Mon.', y: 3 },
                  { x: 'Tue.', y: 2 },
                  { x: 'Wed.', y: 1 },
                  { x: 'Thu.', y: 1 },
                  { x: 'Fri.', y: 1 }
                ]}
              />
              <VictoryBar
                data={[
                  { x: 'Sat.', y: 2 },
                  { x: 'Sun.', y: 3 },
                  { x: 'Mon.', y: 4 },
                  { x: 'Tue.', y: 5 },
                  { x: 'Wed.', y: 5, y0:3 },
                  { x: 'Thu.', y: 1 },
                  { x: 'Fri.', y: 1 }
                ]}
              />
           
              
          </VictoryGroup>
        </VictoryChart>
        <span className='arrow'> <BsFillArrowUpRightCircleFill /> </span>
    </div>
  )
}

export default Statistics