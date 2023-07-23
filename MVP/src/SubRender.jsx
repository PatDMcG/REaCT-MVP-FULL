
function SubRender({subList}) {
return (
    <>
    {subList.map((sub) => {
        <p>{sub.Title}</p>
    })}
        </>
  )
}

      
 

export default SubRender