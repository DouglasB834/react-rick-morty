import React, { useContext } from 'react'
import CharCard from '../CharCard';
import { DataContext } from '../Context/dataContext';
import { DivStyle, TagUl } from './style';

function Characters() {
 
  const [, ,characterList] = useContext(DataContext)
  return (
    <DivStyle>
        <TagUl>
          {
            characterList.map((elem) => <CharCard key={elem.id} elem={elem}/>  )
          }
        </TagUl>
      </DivStyle>
  )
}

export default Characters
