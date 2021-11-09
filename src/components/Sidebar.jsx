import React from 'react'
import styled from 'styled-components'
import logo from '../assets/reactlogo.png'
import Input from './Input'

const Sidebar = () => {
   return (
      <Container>
         <LogoWrapper>
            <img src={logo} alt="Rebel Programming" />
            <h3>React <span>Code</span></h3>
         </LogoWrapper>
         <FormWrapper>
            <form>
               <h3>Sign Up</h3>
               <Input placeholder="Full Name" />
               <Input type="email" placeholder="Email" />
               <Input type="password" placeholder="Password" />
               <Input type="password" placeholder="Confrim Password" />
               <button>Sign Up</button>
            </form>
         </FormWrapper>
         <div>
            <Terms>By signing up, I agree to the Privacy Policy <br /> and Terms of Service</Terms>
            <h4>Already have an account? <span>Sign In</span></h4>
         </div>
      </Container>
   )
}

const Terms = styled.p`
   text-align: center;
   font-size: 11px;
   line-height: 17.58px;
   color: #808080;
   font-weight: 300;

`


const FormWrapper = styled.div`
   form{
      display: flex;
      flex-direction: column;

      h3{
         text-align: center;
         margin-bottom: 1.5rem;
         color: ${(props)=>props.theme.fontPrimary};
      }
      button{
         border-radius: 8px;
         padding: 0.8rem 1.3rem;
         background: ${(props)=>props.theme.primaryColor};
         color: #fff;
         border: none;
         margin-top: 0.7rem;
         font-weight: 600;
         box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
         transition: all 0.2s ease-in;
         cursor: pointer;
         &:hover {
            transform: translateY(-3px);
            background: ${(props)=> props.theme.primaryColorLight};
         }
      }
   }

`
const LogoWrapper = styled.div`
   
   img{
      height: 6rem;
   }
   h3{
      color: ${(props)=>props.theme.primaryColor};
      text-align: center;
      font-size: 22px;
   }
   span{
      color: ${(props)=>props.theme.primaryColorLight};
      font-weight: 300;
      font-size: 17px;
   }
`

const Container = styled.div`
   min-width: 465px;
   background: transparent;
   background-color: var(--bg-signup);
   backdrop-filter: blur(14px);
   height: 100%;
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
   align-items: center;



   h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: ${(props)=>props.theme.primaryColor};
      cursor: pointer;
    }
  }
`



export default Sidebar
