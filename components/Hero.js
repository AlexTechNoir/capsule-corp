import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export default function Hero() {
  return (
    <HeroSection>
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
      <div>
        <div>
          <button>Invest now!</button>
          <img src="/img/zeni.png" alt="" width="48" height="48" />
        </div>
        <div>
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

const stretch = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
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
    margin: 1em 0 1em 0;
    animation: ${stretch} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
  }
  > :nth-child(3) {
    font-size: 1.5rem;
    margin-bottom: 1em;
    animation: ${fadeAndSlideDown} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s both;
  }
  > :nth-child(4) {
    display: flex;
    column-gap: 1em;
    > :first-child, > :nth-child(2) {
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
    > :first-child {
      > button {
        &:hover + img {
          left: 160px;
        }
      }
      > img {
        left: 125px;      
      }
    } 
    > :nth-child(2) {
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
`
