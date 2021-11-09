import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import bgImg from './assets/bg.png'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Slider from './components/Slider'
import GlobalStyle from './Style/GlobalStyle'
import {
  greenTheme,
  blueTheme,
  darkBlueTheme,
  orangeTheme,
  magendaTheme,
  yelloTheme
} from './Style/Themes'

const App = () => {

  const [theme, setTheme] = useState({});

  useEffect(() => {

  }, [theme])

  const themeToggle = (theme) => {
    let myTheme = theme
    if (myTheme === 'green') myTheme= greenTheme
    if (myTheme === 'magenda') myTheme= magendaTheme
    if (myTheme === 'lightblue') myTheme= blueTheme
    if (myTheme === 'darkblue') myTheme= darkBlueTheme
    if (myTheme === 'orange') myTheme= orangeTheme
    if (myTheme === 'yello') myTheme= yelloTheme
    setTheme(myTheme)
  }

  const themeSetup = (theme) => {
    const myTheme = theme
    if (myTheme === 'green') return greenTheme
    if (myTheme === 'magenda') return magendaTheme
    if (myTheme === 'lightblue') return blueTheme
    if (myTheme === 'darkblue') return darkBlueTheme
    if (myTheme === 'orange') return orangeTheme
    if (myTheme === 'yello') return yelloTheme
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Slider themeToggle={themeToggle}/>
      <Container>
        <Wrapper>
          <Sidebar />
          <Main />
        </Wrapper>
      </Container>

    </ThemeProvider >
  )
}

const Container = styled.div`
  background-color: var(--bg-primary);

  /* position: absolute;
  top: 0;
  bottom: 0;
  left:0;
  right: 0; */
 

`

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  /* width: 100%;
  height: 100%; */
  background-image:url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
`

export default App
