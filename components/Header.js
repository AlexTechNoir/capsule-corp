import styled from '@emotion/styled'
import Link from 'next/link'
import { keyframes } from '@emotion/react'

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <a className="logoLink">
          <img src="/logo.png" alt="capsule corporation logo" />
        </a>
      </Link>
      <nav>
        <Link href="#inventions" passHref>
          <a className="allNavLinks">
            <span>Inventions</span>
            <img src="/img/bronze-capsule.png" alt="" width="150" />
          </a>
        </Link>
        <Link href="#team" passHref>
          <a className="allNavLinks secondNavLink">
            <span>Team</span>
            <img src="/img/silver-capsule.png" alt="" width="150" />
          </a>
        </Link>
      </nav>
    </StyledHeader>
  )
}

const shake = keyframes`
  0% {
    transform: rotate(5deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const StyledHeader = styled.header`
  padding: 1em;
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  > .logoLink {
    margin-left: 1em;
    > img {
      width: 100px;
      height: 100%;
    }
  }
  > nav {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: center;
    column-gap: 10em;
    overflow: hidden;
    width: 446px;
    > .allNavLinks {
      text-decoration: none;
      position: relative;
      color: white;
      font-weight: bold;
      display: block;
      outline-offset: 20px;
      > span {
        position: relative;
        z-index: 2;
      }
      > img {
        transform: rotate(45deg);
        position: absolute;
        top: -63px;
        left: -33px;
        z-index: 1;
      }
      &:hover {
        animation: ${shake} .5s;
      }
    }
    > .secondNavLink > img {
      left: -47px;
    }
  }

  @media only screen and (max-width: 1216px) {
    grid-area: 1 / 1 / 2 / 2;
  }
  
  @media only screen and (max-width: 768px) {
    height: 100px;
    > .logoLink {
      margin-left: 0;
      > img {
        width: 50px;
      }
    }
    > nav {
      display: none;
    }
  }
`
