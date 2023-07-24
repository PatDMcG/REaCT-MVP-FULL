import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Progress({SubList}) {
    let totaldone = 0;
    let total = 0
    for(let i = 0; i < SubList.length; i++)
    {
        total++
        if(sublist[i].complete)
        {
            totaldone++
        }
    }
      const [percentage, setPercentage] = useState(0);
    
      useEffect(() => {
          if (percentage < 100) {
            setPercentage(totaldone/total);
          }
      }, [percentage]);
    
      return (
        <div style={{textAlign:"center"}}>
          <h4>Circular progress bar in React </h4>
          <div style={{ width: 150, marginLeft: 550}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>
      );
    }


export default Progress