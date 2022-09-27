import React from 'react'
import CharCard from '../CharCard';
import { TagUl } from './style';

function Characters({characterList}) {
  const arr = characterList;
  return (
    <div>
        <TagUl>
          {
            arr.map((elem) => <CharCard key={elem.id} elem={elem}/>  )
          }
        </TagUl>
      </div>
  )
}

export default Characters
