import styled from "styled-components";
import 'animate.css'

export const  TagMain = styled.main`
width: 90%;
margin: auto;
background-color: #22272e;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

svg ,button{
    cursor: pointer;
    font-size: 2rem;
    margin: 16px;
    padding: .5rem 2rem;
}
svg polygon{
    stroke: var(--color-live);
}

svg polygon:hover{
    stroke: var(--primary-color3);   
}
`
export const TagImg = styled.img`
width: 65%;
border-bottom: solid 1px #2ecc71;
animation: backInLeft; 
animation-duration: .2s linear;

`