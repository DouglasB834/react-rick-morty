import React from 'react';
import { TagImg, TagMain } from './style';
import  logo from "../../assets/logo.png";
import Divbtn from '../Divbtn';



function Main({children}) {

  return (
    <>
    <TagMain>
    <TagImg className='animate__animated animate__backInLeft'  src={logo} alt="logo " />
    <Divbtn />
      {children}
    </TagMain>
    </>
  )
}

export default Main
