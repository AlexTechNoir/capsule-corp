import styled from '@emotion/styled'

export default function Invest() {
  return (
    <InvestSection>
      <div>
        <button>Invest now!</button>
        <img src="/img/zeni.png" alt="" width="48" height="48" />
        <img src="/img/tama.png" alt="" width="48" height="48" />
      </div>
      <img src="/img/bulma-jumping.png" alt="bulma jumping" height="250" />
    </InvestSection>
  )
}

const InvestSection = styled.section`
  grid-area: 4 / 2 / 5 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    position: relative;
    > button {
      position: relative;
      margin: 1em 0 1em 0;
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
      &:hover + :nth-child(2) {
        left: 160px;
        bottom: 50px;
      }
      &:hover ~ :nth-child(3) {          
        transform: rotate(5deg);
      }
    }
    > :nth-child(2) {
      transition: left .4s, bottom .4s;
      position: absolute;
      left: 125px;
      bottom: 20px;  
    }
    > :nth-child(3) {
      position: absolute;
      left: 56px;
      top: -14px;
      z-index: 3;
      transition: transform .4s;
      transform: rotate(19deg);
    }
  }
`
