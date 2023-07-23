import { useState } from 'react'



function SubR({sub, master}) {
      if(sub.Parent == master)  
    return (
      <div className='SUGOAL'>
            <p>
            {sub.Title}
            </p>
            <button>CRUD2</button>
            </div>
        )
    }

    export default SubR