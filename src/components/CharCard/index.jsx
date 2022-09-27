
import { TagH2, TagLi } from "./style"


function CharCard({elem}) {
  return (
    <TagLi elem={elem}>

    <img src={elem.image} alt={elem.name} />

      <TagH2 fontSize={"one"} >{elem.name}</TagH2  >  
      <div>
        <p className="title">Specie<span className="text">{elem.species}</span></p>
        <span> gender {elem.gender} </span>
      </div>    
               
    </TagLi>
    
   
  )
}

export default CharCard

