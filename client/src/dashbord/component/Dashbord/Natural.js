import React from 'react'
import {VictoryLine} from'victory';
const Natural = () => {
  return (
    <div className='chart natural'>
        <div className='graph'>
        
        <VictoryLine
        style={{  width: '100%' }}
        
            interpolation="natural"
            Width={90}
            height={10}
            style={{
                data: { stroke: "#fff",width: '800%'},
                parent: { backgroundColor:'#FF007C',},
               
            }}
            data={[
                { x: 1, y: 6},
                { x: 2, y: 0 },
                { x: 3, y: 6 },
                { x: 4, y: 0 },
                { x: 5, y: 6 },
                { x: 6, y: 0 },
                { x: 7, y: 6 },
                { x: 8, y: 0 },
                { x: 9, y: 6 },
                { x: 10, y: 0 },
                { x: 11, y: 6 },
                { x: 12, y: 0 },
                { x: 13, y: 6 },
             
                ]}
        />
        </div>
        <div className='num'>3.4K</div>
        <div className='duration'>Orders || This Month</div>
    </div>
  )
}

export default Natural