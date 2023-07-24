import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Progress({subList}) {

  let total = useRef();
  let totalDone = useRef();
    if(subList)
    {
      let tot = 0
      let totaldone = 0
        subList.map((sub) => {
        tot++
        if(sub.complete)
        {
            totaldone++
        }
    })
    total = tot
    TotalDone= totaldone
  }
  console.log(total, totalDone)
      const [percentage, setPercentage] = useState(0);
    
      useEffect((total, totalDone) => {
          if (percentage < 100) {
            setPercentage(Math.floor(totalDone/total));
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