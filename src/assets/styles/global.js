import reset from 'react-style-reset/string'
import { createGlobalStyle } from 'styled-components'

import { Colors } from './variables'

import RegularGothamFont from '../fonts/GothamBook.ttf'
import MediumGothamFont from '../fonts/GothamMedium.ttf'
import BoldGothamFont from '../fonts/GothamBold.otf'

const GlobalStyles = createGlobalStyle`
  
  //Reset css
  //https://meyerweb.com/eric/tools/css/reset/
  ${reset};
  
  //Font faces
  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-weight: 500;
    src: url(${RegularGothamFont});
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-weight: 600;
    src: url(${MediumGothamFont});
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-weight: 700;
    src: url(${BoldGothamFont});
  }
  
  //Global styles
  * {
    box-sizing: border-box;
  }
  
  *,
  body {
    color: ${Colors.DARK};
    font-family: 'Gotham', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
  
  body {
    background: ${Colors.BACKGROUND};
    padding-bottom: 35px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
`

export default GlobalStyles