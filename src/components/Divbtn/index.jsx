import React, { useEffect, useState } from 'react'
import { DivStyle } from './style'
import {GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import instance from '../Axios/instance';


const Divbtn =({setCharacterList})=> {

    const [pages, SetPages] = useState(1)
  
    const trocarPagina =(parametro)=>{

      if(parametro && pages >0){
        console.log(pages)
        instance.get(`/character/?page=${pages}`)
        .then(({data}) => {
            setCharacterList(data.results)
        })
        
      }else{
        console.log(pages)
        instance.get(`/character/?page=${pages}`)
        .then(({data}) => {
            setCharacterList(data.results)
        })
      }


    }



  return (
    <DivStyle>
        <GrCaretPrevious onClick={() =>{
          SetPages((oldPage)=> oldPage >1 ? oldPage-1: oldPage)
          trocarPagina(true)}} />

        <GrCaretNext onClick={()=> {SetPages((oldPage)=> oldPage+1)
          trocarPagina(false)}} />
      
    </DivStyle>
  )
}

export default Divbtn
