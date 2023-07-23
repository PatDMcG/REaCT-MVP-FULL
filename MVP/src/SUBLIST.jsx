import SubR from "./SubR"
function SUBLIST({subList, master}) {

    return (
        <>
        {subList.map((sub) => {
          return (
          <>
            <SubR sub={sub} master={master} key={sub.id}/>
            </>
          )
        })}
            </>
      )

    }
    
    export default SUBLIST