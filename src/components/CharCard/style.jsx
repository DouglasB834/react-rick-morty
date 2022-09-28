import styled, { css } from "styled-components";
import 'animate.css';
export const TagLi = styled.li`

gap: 1rem;
width: 30%;
max-width: 318px;
display: flex;
padding: 1rem;
min-width: 130px;
border-radius: 3px;
align-items: center;
flex-direction: column;
border: 1px solid var(--color-border);
background: var(${({elem}) => elem.status === "Dead" ? "--color-dead" :"--color-live" });

img{
    width: 78%;
    border-radius: 5px;
    border-radius: 50%;
}

h2{
    text-align: center;
    width: 124px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

div{
   display: flex;
   flex-direction: column;
   gap: .5rem;

}


div p span{
font-size: 1rem;
color: var(--primary-color2);

}


`

export const TagH2 = styled.h2`
${({fontSize})=>  {
    if(fontSize=== "one"){
        return css`
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary-color2);
        `
    }else if (fontSize === "two"){
        return css`
        font-size: 1rem;
        
        `
    }

}}




`