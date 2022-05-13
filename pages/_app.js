import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={GlobalStyle} />
      <DivGrid>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </DivGrid>
    </>
  ) 
}

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans';
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100%;
    background-image: linear-gradient(#D67F91, #C5C44E);
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
  background-image: url('/img/capsule-corp.png');
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: top 130px right 0;
  background-attachment: local;

  @media only screen and (max-width: 1760px) {
    background-position: top 130px right -150px;
  }

  @media only screen and (max-width: 1480px) {
    background-position: top 130px right -250px;
  }

  @media only screen and (max-width: 1280px) {
    background-position: top 130px right -400px;
  }

  @media only screen and (max-width: 1216px) {
    grid-template-columns: 100%;
  }

  @media only screen and (max-width: 1024px) {
    background-position: top 130px right -500px;
  }

  @media only screen and (max-width: 856px) {
    background-position: top 130px right -600px;
  }

  @media only screen and (max-width: 768px) {
    background-position: top 10px right -600px;
  }

  @media only screen and (max-width: 670px) {
    background-position: top 10px right -655px;
  }

  @media only screen and (max-width: 670px) {
    background-position: top -50px right -655px;
  }

  @media only screen and (max-width: 600px) {
    background-image: 
      url('/img/white-blue-caps.png'), 
      url('/img/white-pur-caps.png'),
      url('/img/white-red-caps.png'),
      url('/img/bronze-blue-caps.png'),
      url('/img/bronze-pur-caps.png'),
      url('/img/bronze-red-caps.png'),
      url('/img/gold-pur-caps.png'),
      url('/img/gold-red-caps.png');
    background-attachment: local, local, local, local, local, local, local, local;
    background-size: 
      100px, 
      107px,
      100px,
      111px,
      51px,
      91px,
      58px,
      107px;
    background-position: 
      305px 60px, 
      460px 345px,
      435px 7px,
      140px 20px,
      334px 331px,
      180px 180px,
      262px 173px,
      390px 185px;
  }

  @media only screen and (max-width: 500px) {
    background-position: 
      305px 60px, 
      460px 345px,
      380px 155px,
      140px 20px,
      334px 331px,
      180px 180px,
      262px 173px,
      390px 0;
  }

  @media only screen and (max-width: 375px) {
    background-position: 
      280px 15px, 
      460px 345px,
      380px 155px,
      140px 20px,
      295px 440px,
      180px 180px,
      262px 173px,
      200px 390px;
  }

  @media only screen and (max-width: 320px) {
    background-position: 
      280px 15px, 
      460px 345px,
      380px 155px,
      140px 20px,
      250px 440px,
      180px 180px,
      262px 173px,
      200px 390px;
  }
`
