//import { useState } from 'react'
import DeleteSub from './DeleteSub'
import UpdateSub from './UpdateSub'



function SubR({sub, master}) {
      if(sub.parent == master)  
    return (
      <div className='SUBGOAL'>
            <p>
            {sub.title}
            </p>
            <DeleteSub/>
            <UpdateSub/>
            </div>
        )
    }

    export default SubR