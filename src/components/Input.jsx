
import React from 'react'
import styled from 'styled-components'

const Input = ({ type = 'text', placeholder }) => {
   return (
      <Container>
         <StyledInput
            placeholder={placeholder && placeholder}
            type={type}
            required
            autocomplete="off"
         />
         <Status />
      </Container>
   )
}


const StyledInput = styled.input`
width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-3px);
  }
  
`

const Status = styled.div`
   height: 10px;
   width: 10px;
   border-radius: 10px;
   margin-left: 1rem;
   background: #9d9d9d;

   ${StyledInput}:focus + & {
      background: ${(props)=>props.theme.inputFocus};
   }
   ${StyledInput}:invalid + & {
      background: ${(props)=>props.theme.inputInvalid};
   }
  ${StyledInput}:valid + & {
      background: ${({theme})=>theme.primaryColor};
   }
`

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export default Input
