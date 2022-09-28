import { TagH2, TagLi } from "./style"

function CharCard({elem}) {
  return (
    <TagLi elem={elem} className={ elem.status==="Alive" ? "animate__animated  animate__backInLeft" : "animate__animated  animate__backInRight" } >      
    <img src={elem.image} alt={elem.name} />

      <TagH2 fontSize={"one"} >{elem.name}</TagH2  >  
      <div>
        <p className="title">Specie <span className="text">{elem.species}</span></p>
        <span className="title2"> gender {elem.gender} </span>
      </div>   
               
    </TagLi>
    
   
  )
}

export default CharCard

