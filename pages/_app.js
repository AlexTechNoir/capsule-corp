import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={GlobalStyle} />
      <DivGrid>
        <Header />
        <Component {...pageProps} />
      </DivGrid>
    </>
  ) 
}

const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 1rem;
  }
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100%;
    background-image: linear-gradient(#D67F91, #C5C44E);
    font-family: 'Plus Jakarta Sans';
  }
  #__next {
    height: 100%;
  }
  /* plus-jakarta-sans-regular - latin */
  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/plus-jakarta-sans-v2-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/plus-jakarta-sans-v2-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/plus-jakarta-sans-v2-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/plus-jakarta-sans-v2-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/plus-jakarta-sans-v2-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/plus-jakarta-sans-v2-latin-regular.svg#PlusJakartaSans') format('svg'); /* Legacy iOS */
  }
`

const DivGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1200px 1fr;
  height: 100%;
  background-image: url('/img/Layer-1.png');
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: top 90px right 0;
  background-attachment: local;
`
