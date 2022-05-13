import styled from '@emotion/styled'

export default function Invest() {
  return (
    <InvestSection>
      <div>
        <button>Invest now!</button>
        <img src="/img/zeni.png" alt="" width="48" height="48" className="zeniImg" />
        <img src="/img/tama.png" alt="" width="48" height="48" className="tamaImg" />
      </div>
      <img src="/img/bulma-jumping.png" alt="bulma jumping" height="250" loading="lazy" />
    </InvestSection>
  )
}

const InvestSection = styled.section`
  grid-area: 4 / 2 / 5 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
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
      &:hover + .zeniImg {
        left: 160px;
        bottom: 50px;
      }
      &:hover ~ .tamaImg {          
        transform: rotate(5deg);
      }
    }
    > .zeniImg {
      transition: left .4s, bottom .4s;
      position: absolute;
      left: 124px;
      bottom: 20px;  
    }
    > .tamaImg {
      position: absolute;
      left: 56px;
      top: -14px;
      z-index: 3;
      transition: transform .4s;
      transform: rotate(19deg);
    }
  }
  > img {
    margin-left: 5em;
  }
`
