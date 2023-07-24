import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Progress({subList, master}) {
 
  const total = useRef(0);
  const totalDone = useRef(0);
    if(subList)
    {
        subList.map((sub) => {
          if(sub.parent == master){
          total.current = total.current + 1
        if(sub.complete == true)
        {
          totalDone.current = totalDone.current + 1
        }
    }})
  }
  console.log(total.current, totalDone.current)
      const [percentage, setPercentage] = useState(0);
    
      useEffect(() => {
         {
            let test = (totalDone.current/total.current)*100
            console.log(test)
            setPercentage((test));
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