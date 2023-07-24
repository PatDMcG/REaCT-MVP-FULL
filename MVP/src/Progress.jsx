import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Progress({subList}) {

  let total = useRef(0);
  let totalDone = useRef(0);
    if(subList)
    {
      total = 0
      totalDone = 0
        subList.map((sub) => {
        total++
        if(sub.complete == true)
        {
            totalDone++
        }
    })
  }
  console.log(total, totalDone)
      const [percentage, setPercentage] = useState(0);
    
      useEffect(() => {
          if (percentage < 100) {
            setPercentage(Math.floor(totalDone.current/total.current));
          }
      }, [percentage]);
    
      return (
        <div style={{textAlign:"center"}}>
        <h4> Completion Rate </h4>
          <div style={{ width: 150, marginLeft: 550}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>
      );
      }


export default Progress