import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [ areElementsHidden, setAreElementsHidden ] = useState(true)

  useEffect(() => {
    setAreElementsHidden(false)
  },[])

  return (
    <HeroSection>
      {
        !areElementsHidden ? (
          <>
            <div>
              <div>
                Capsules!
              </div>
              <div>
                Space!
              </div> 
              <div>
                Time travel!
              </div>
            </div>
            <hr />
            <div>We stand on the edge of science</div>
          </>
        ) : null
      }
      <div className="buttons">
        <div className="firstButtonWrapper">
          <button>Invest now!</button>
          <img src="/img/zeni.png" alt="" width="48" height="48" />
        </div>
        <div className="secondButtonWrapper">
          <button>Order invention!</button>
          <img src="/img/rocket.png" alt="" width="48" height="48" />
        </div>
      </div>
    </HeroSection>
  )
}

const slideRight = keyframes`
  0% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0);
  }
`

const stretchTo85 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
`

const stretchTo70 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
`

const stretchTo55 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
`

const stretchTo50 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
`

const stretchTo45 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 45%;
  }
`

const stretchTo40 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
`

const stretchTo35 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 35%;
  }
`

const stretchTo30 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 30%;
  }
`

const fadeAndSlideDown = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const HeroSection = styled.section`
  grid-area: 1 / 2 / 2 / 3;
  font-weight: 600;
  > :first-child {
    font-size: 6rem;
    padding-left: 16px;
    > :first-child {
      animation: ${slideRight} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    > :nth-child(2) {
      animation: ${slideRight} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) .5s both;
    }
    > :nth-child(3) {
      animation: ${slideRight} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
    }
  }
  > hr {
    border: 0;
    border-top: 2px solid #373737;
    margin: 1em 0 1em 1em;
    animation: ${stretchTo50} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
  }
  > :nth-child(3) {
    font-size: 1.5rem;
    margin-bottom: 1em;
    animation: ${fadeAndSlideDown} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s both;
    padding-left: 16px;
  }
  > .buttons {
    display: flex;
    column-gap: 1em;
    padding-left: 16px;
    > .firstButtonWrapper, > .secondButtonWrapper {
      position: relative;
      > button {
        position: relative;
        margin: 1em 1em 1em 0;
        padding: 0.8rem 2rem;
        font-weight: 600;
        background-color: #3C9EF4;
        border: none;
        border-radius: 0.3rem;
        font-size: 1.25rem;
        cursor: pointer;
        color: white;
        z-index: 2;
        &:hover {
          background-color: #307ec3;
        }
        &:hover + img {         
          bottom: 50px;
        }
      }
      > img {
        transition: left .4s, bottom .4s;
        position: absolute;
        bottom: 20px;
      }
    }
    > .firstButtonWrapper {
      > button {
        &:hover + img {
          left: 160px;
        }
      }
      > img {
        left: 124px;
      }
    } 
    > .secondButtonWrapper {
      > button {
        &:hover + img {
          left: 200px;
        }
      }
      > img {
        left: 165px;
      } 
    }
  }

  @media only screen and (max-width: 1102px) {
    > :first-child {
      font-size: 5rem;
    }
    > hr {
      animation: ${stretchTo40} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
  }

  @media only screen and (max-width: 1024px) {
    > :first-child {
      font-size: 4rem;
    }
    > hr {
      animation: ${stretchTo35} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
    > :nth-child(3) {
      font-size: 1.25rem;
    }
    > .buttons > div > button {
      font-size: 1rem !important;
    }
    > .buttons {
      > .firstButtonWrapper {
        > button {
          &:hover + img {         
            bottom: 45px !important;
            left: 133px !important;
          }
        }
        > img {
          bottom: 16px !important;
          left: 103px !important;
        }
      }
      > .secondButtonWrapper {
        > button {
          &:hover + img {         
            bottom: 45px !important;
            left: 167px !important;
          }
        }
        > img {
          bottom: 14px !important;
          left: 137px !important;
        }
      }
    }
  }

  @media only screen and (max-width: 938px) {
    > :first-child {
      font-size: 3rem;
    }
    > hr {
      animation: ${stretchTo30} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
    > .buttons > div {
      > button {
        margin: 1em 0 1em 0 !important;
      }
    } 
  }

  @media only screen and (max-width: 768px) {
    > hr {
      animation: ${stretchTo40} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
    > .buttons > div {
      > button {
        padding: 0.8rem 1.3rem !important;
      }
      > img {
        display: none;
      }
    } 
  }

  @media only screen and (max-width: 640px) {
    > hr {
      animation: ${stretchTo45} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
  }

  @media only screen and (max-width: 640px) {
    > hr {
      animation: ${stretchTo55} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
  }

  @media only screen and (max-width: 428px) {
    > hr {
      animation: ${stretchTo70} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
  }

  @media only screen and (max-width: 375px) {
    > .buttons {
      flex-direction: column;
      > .secondButtonWrapper > button {
        margin-top: 0 !important;
      }
    }
  }

  @media only screen and (max-width: 325px) {
    > hr {
      animation: ${stretchTo85} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }
    > :nth-child(3) {
      font-size: 1.2rem;
    }
  }
`
