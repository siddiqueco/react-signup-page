import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import darkPic from '../assets/dark-mode.png'
import lightPic from '../assets/light-mode.png'
import logo from '../assets/settings.png'

const Slider = ({themeToggle}) => {
   const [mode, setMode] = useState('')
   const [visible, setVisible] = useState(false)
   const [theme, setTheme] = useState('lightblue')


   useEffect(() => {
      document.documentElement.className = mode;
      themeToggle(theme)
   }, [mode, visible,theme]);

   const toggleButton = () => {
      if (visible) setVisible(false)
      else setVisible(true)
   }

   return (
      <Container>
         <div className={`slider ${visible ? 'open' : 'close'}`} >
            <div className='logo-wrap' onClick={toggleButton}>
               <img src={logo} alt="" />
            </div>
         </div>
         {visible &&
            <div className='theme-mode-wrap'>
               <h2>Live Settings</h2>
               <div className='mode-theme-option'>
                  <div className='theme-selection'>
                     <h6>Theme Color</h6>
                     <div className="theme-color-wrapper">
                        <div className="color-field-wrap">
                           <div className='color-field' onClick={() => setTheme('green')}>
                              <div>
                                 <span className='color1'></span>
                                 <span className='color2'></span>
                              </div>
                           </div>
                        </div>
                        <div className="color-field-wrap">
                           <div className='color-field' onClick={() => setTheme('orange')}>
                              <span className='color3'></span>
                              <span className='color4'></span>
                           </div>
                        </div>
                        <div className="color-field-wrap">
                           <div className='color-field' onClick={() => setTheme('magenda')}>
                              <span className='color5'></span>
                              <span className='color6'></span>
                           </div>
                        </div>
                        <div className="color-field-wrap">
                           <div className='color-field' onClick={() => setTheme('darkblue')}>
                              <span className='color7'></span>
                              <span className='color8'></span>
                           </div>
                        </div>
                        <div className="color-field-wrap">
                           <div className='color-field' onClick={() => setTheme('lightblue')}>
                              <span className='color9'></span>
                              <span className='color10'></span>
                           </div>
                        </div>
                        <div className="color-field-wrap">
                           <div className='color-field' onClick={() => setTheme('yello')}>
                              <span className='color11'></span>
                              <span className='color12'></span>
                           </div>
                        </div>
                     </div>

                  </div>

                  <div className="mode-selection">

                     <h6>Mode</h6>
                     <div className='dark-mode'>
                        <label htmlFor="mode-dark">
                           <input
                              type="radio"
                              id='mode-dark'
                              name='mode_input'
                              onClick={() => setMode('dark-mode')}
                              checked={mode === 'dark-mode' ? true : false}
                           />
                           <span></span>
                           <p>
                              <i className="fas fa-moon"></i>
                              Dark
                           </p>
                        </label>
                     </div>
                     <div className='light-mode'>
                        <label htmlFor="mode-light">
                           <input
                              type="radio"
                              id='mode-light'
                              name='mode_input'
                              onClick={() => setMode('')}
                              checked={mode === '' ? true : false}
                           />
                           <span></span>
                           <p>
                              <i className="far fa-sun"></i>
                              Light
                           </p>
                        </label>
                     </div>
                  </div>
                  <hr />
               </div>
            </div>
         }
      </Container>
   )
}

const Container = styled.div`
   position: relative;
   width: 250px;
   min-height: 200px;
   top: 167px;
   right:50px;
   text-align: left;
   font-size: 14px;
   line-height: 20px;
   
   position: fixed;
   transition: 0.5s ease-in-out 0s;
   border-radius: 4px 0px 4px 4px;

   z-index: 999;
   .theme-mode-wrap{
      background-color: #fff;
      box-shadow: rgb(0 0 0 / 6%) 0px 10px 35px 10px;
      border-radius: 6px 0 4px 4px 4px;
      width:250px;
      padding: 2px 9px 1px 9px;
      float: left;
      animation: traslatexx 0.5s linear;
   }

   @media (max-width: 991px){
      height: 400px!important;
   }
   h2{
      padding: 5px;
      text-align: center;
      text-transform: uppercase;
      line-height: 29px;
      font-weight: 500;
      margin-bottom: 15px;
   }
   h6{
      font-size: 14px;
      margin-top: 8px;
      font-weight: 400;
      color: inherit;
      line-height: 1.1;
   }
   hr{
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 0;
      border-top: 1px solid rgba(0,0,0,.1);
      box-sizing: content-box;
      height: 0;
      overflow: visible;
   }
   .slider{
      width: 100px;
      display: inline-block;
      float: right;
      transition: 0.5s ease-in-out 0s;
      z-index: 999;
      .logo-wrap{
         border-radius: 30px 30px 0 0;
         margin-left: 65px;
         width: 53%;
         cursor: pointer;
         transition: 0.3s ease-in-out 0s;
         z-index:9999;
         box-shadow: 1px 2px 5px rgb(0 0 0 / 10%);
         
      }
         img{
         width: 35px;
         padding: 8px;
         padding-bottom: 4px;
         animation: rotate360 3s infinite linear;
  
          
         &:before{
            color: #fff;
            content: "";
            font-size: 24px;
            line-height: 36px;
            padding: 0 10px;
            width: 36px;
            height: 36px;
            background-size:36px;
            display: block;
         }
      }
      
   }


   .slider.close{
      margin-left: 10px;
      padding-left: 10px;
      .logo-wrap{
         width: 100%;
         border-radius: 30px 0 0 30px;
         margin-left: 79px;
         img{
            animation: rotate360 9s infinite linear;
         }
      }
   }
  
   .theme-selection{
      display: block;
      min-height: 100px;
      margin-bottom: 40px;

      .theme-color-wrapper{
         margin: 0 -5px;
         display: block;
         .color-field-wrap{
            display: block;
            float: left;
            width: 46%;
            padding: 0 5px;
            padding-bottom: 0;
            margin-top: 16px;
            cursor: pointer;
            
            .color-field{
               background: #666;
               width: 100%;
               height: 34px;
               border-radius: 6px;
               border: none;
               text-indent: -9999px;
               display: block;
               &:hover{
                  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.5);
               }

               a{
                  color: #fff;
                  text-transform: uppercase;
                  font-size: 12px;
                  line-height: 36px;
                  width: 100%;
                  height: 100%;
                  display: block;
                  text-align: center;
               }
               span{
                  float: left;
                  width: 50%;
                  height: 36px;
               }
               span.color1{
                  background-color: #42F0A7;
                  border-radius: 5px 0 0 5px;
               }
               span.color2{
                  background-color: #70EDB9;
                  border-radius: 0 5px 5px 0;
               }
               span.color3{
                  background-color: #FF5722;
                  border-radius: 5px 0 0 5px;
               }
               span.color4{
                  background-color: #EDB874;
                  border-radius: 0 5px 5px 0;
               }
               span.color5{
                  background-color: #AD0202;
                  border-radius: 5px 0 0 5px;
               }
               span.color6{
                  background-color: #E07777;
                  border-radius: 0 5px 5px 0;
               }
               span.color7{
                  background-color: #3026A7;
                  border-radius: 5px 0 0 5px;
               }
               span.color8{
                  background-color: #8C83F3;
                  border-radius: 0 5px 5px 0;
               }
               span.color9{
                  background-color: #00B8D4;
                  border-radius: 5px 0 0 5px;
               }
               span.color10{
                  background-color: #96D6DA;
                  border-radius: 0 5px 5px 0;
               }
               span.color11{
                  background-color: #FFA000;
                  border-radius: 5px 0 0 5px;
               }
               span.color12{
                  background-color: #F9CE96;
                  border-radius: 0 5px 5px 0;
               }

            }
            
         }
      }
   }
   .mode-selection{
      text-align: center;
     
      h6{
         text-align: left;
         margin-top: 10px;
      }

      .dark-mode{
         cursor: pointer;
         display: inline-block;
         vertical-align: middle;
         padding: 0 5px;
         label{
            color: #232323;

            font-size: .875rem;
            display: inline-block;

            i{
               margin-right: 3px;
            }
         }
         span{
            background: url(${darkPic});
            width: 104px;
            height: 54px;
            cursor: pointer;
            display: block;
         }
      }
      .light-mode{
         display: inline-block;
         vertical-align: middle;
         padding: 0 5px;
         label{
            i{
               margin-right: 3px;
            }
         }
         span{
            background: url(${lightPic});
            width: 104px;
            height: 54px;
            cursor: pointer;
            display: block;
         }
      }
   }
   @keyframes rotate360{
      from{transform: rotate(0deg);}
      to{transform: rotate(360deg);}
   }
   @keyframes traslatexx{
      from{
        transform: translateX(20px);
      }
      to{
         transform: translateX(0px);
      }
   }
`

export default Slider
