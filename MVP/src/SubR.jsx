import { useState } from 'react'



function SubR({sub, master}) {
      if(sub.Parent == master)  
    return (
            <p>
            {sub.Title}
            </p>
        )
    }

    export default SubR