import SubR from "./SubR"
function SUBLIST({subList, master}) {

    return (
        <>
        {subList.map((sub) => {
          return (
          <div className="SUBLIST">
            <SubR sub={sub} master={master} key={sub.id}/>
            </div>
          )
        })}
            </>
      )

    }
    
    export default SUBLIST