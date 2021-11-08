import React from 'react'
import styled from 'styled-components'

const Main = () => {
   return (
      <Container>
         <h1>Practice <br /> Session</h1>
      </Container>
   )
}

const Container=styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   h1{
      font-size: 45px;
      font-weight: 900;
      letter-spacing: 3px;
      color: ${({theme})=>theme.fontPrimary};

      @media (max-width: 900px){
         display: none;
      }
   }
`

export default Main
