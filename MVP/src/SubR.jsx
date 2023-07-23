import { useState } from 'react'
import DeleteSub from './DeleteSub'
import UpdateSub from './UpdateSub'



function SubR({sub, master}) {
      if(sub.Parent == master)  
    return (
      <div className='SUBGOAL'>
            <p>
            {sub.Title}
            </p>
            <DeleteSub/>
            <UpdateSub/>
            </div>
        )
    }

    export default SubR