import styled from '@emotion/styled'

export default function Hero() {
  return (
    <HeroSection>
      <div>Capsules!<br /> Space!<br /> Time travel!</div>
      <hr />
      <div>We stand on the edge of science</div>
      <div>
        <button>Invest now!</button>
        <img src="/img/zeni.png" alt="" width="48" height="48" />
      </div>
    </HeroSection>   
  )
}

const HeroSection = styled.section`
  grid-area: 1 / 2 / 2 / 3;
  font-weight: 600;
  color: #373737;
  margin-bottom: 1em;
  > :first-child {
    font-size: 6rem;
  }
  > hr {
    border: 0; 
    border-top: 2px solid #373737;
    margin: 1em 0 1em 0;
  }
  > :nth-child(3) {
    font-size: 1.5rem;
    margin-bottom: 1em;
  }
  > :nth-child(4) {
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
        left: 160px;
        bottom: 50px;
      }
    }
    > img {
      transition: left .4s, bottom .4s;
      position: absolute;
      left: 125px;
      bottom: 20px;  
    }
  }
`
