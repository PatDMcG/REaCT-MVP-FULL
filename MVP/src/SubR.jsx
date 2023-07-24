//import { useState } from 'react'
import DeleteSub from './DeleteSub'
import UpdateSub from './UpdateSub'
import Completed from './Completed'



function SubR({sub, master}) {
      if(sub.parent == master)  
    return (
      <div className='SUBGOAL' id={sub.id}>
            <p>
            {sub.title}
            </p>
            <Completed id={sub.id} master={master} subTitle={sub.title} complete={sub.complete}/>
            <DeleteSub id={sub.id}/>
            <UpdateSub id={sub.id} master={master} subTitle={sub.title} complete={sub.complete}/>
            </div>
        )
    }

    export default SubR