import styled, {css} from "styled-components"


export const TagUl = styled.ul`

display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
margin-top: 1rem;

li{
  
    display: flex;
    width: 23%;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 3px;
    min-width: 130px;
    border: 1px solid var(--color-border);
    padding: 0.5rem;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  
}

li img{
    border-radius: 5px;
}

h2{
    text-align: center;
    font-size: ${(props)=> props.fontSize }px
}

`

export const TagH2 = styled.h2`
${({fontSize})=>  {
    if(fontSize=== "one"){
        return css`
        font-size: 1.2rem;
        font-weight: 700;
        color: blue;
        `
    }else if (fontSize === "two"){
        return css`
        font-size: 1rem;
        
        `
    }

}}


`
