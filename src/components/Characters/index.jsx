import React from 'react'
import { TagH2, TagUl } from './style';

function Characters({characterList}) {
  const arr = characterList;
  console.log(arr)
  return (
    <div>
        <TagUl>
          {
            arr.map((elem) => {                
                 return <li key={elem.id}>
                  <img src={elem.image} alt={elem.name} />

                    <TagH2 fontSize={"one"} >nome {elem.name}</TagH2  >  
                    <div>
                      <span>Specie {elem.species}</span>
                      <span> gender{elem.gender} </span>
                    </div>              
                  </li>
              } )
          }
        </TagUl>
      </div>
  )
}

export default Characters
