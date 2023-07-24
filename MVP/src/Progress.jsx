import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Progress({subList, master}) {
 
  const total = useRef(0);
  const totalDone = useRef(0);
  const totalPercent = useRef(0);
        subList.map((sub) => {
          if(sub.parent == master){
          total.current = total.current + 1
        if(sub.complete == true)
        {
          totalDone.current = totalDone.current + 1
        }
    }})
  console.log(total.current, totalDone.current)
      const [percentage, setPercentage] = useState(0);
      let test = totalDone.current
      let test2 = total.current
      let test3= ((test/test2)*100)
      totalPercent.current = Math.floor(test3)
      console.log(test3, test2, test)
    
      return (
        <div style={{textAlign:"center"}}>
        <h4> Completion Rate </h4>
          <div style={{ width: 150, marginLeft: 550}}>
            <CircularProgressbar value={totalPercent.current } text={`${totalPercent.current }%`} />
          </div>
        </div>
      );
      }


export default Progress