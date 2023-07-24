//import { useState } from 'react'
import DeleteSub from './DeleteSub'
import UpdateSub from './UpdateSub'



function SubR({sub, master}) {
      if(sub.parent == master)  
    return (
      <div className='SUBGOAL' id={sub.id}>
            <p>
            {sub.title}
            </p>
            <DeleteSub id={sub.id}/>
            <UpdateSub id={sub.id} master={master} sub={sub.title}/>
            </div>
        )
    }

    export default SubR