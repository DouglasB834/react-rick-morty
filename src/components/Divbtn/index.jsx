import { useContext } from 'react'
import { DivStyle } from './style'
import {GrCaretPrevious, GrCaretNext } from "react-icons/gr";

import { DataContext } from '../Context/dataContext';


const Divbtn =()=> {
  const [pages, setPages] = useContext(DataContext)

 
  return (
    <DivStyle>
        <GrCaretPrevious onClick={() =>{
          setPages(()=> pages > 1 ? pages-1: pages+41) }} />
          <span>{pages}</span>
        <GrCaretNext onClick={()=> {setPages(()=> pages <42 ? pages+1 : pages-41)}} />
      
    </DivStyle>
  )
  
}

export default Divbtn
