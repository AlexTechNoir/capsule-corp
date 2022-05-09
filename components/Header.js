import styled from '@emotion/styled'
import Link from 'next/link'
import { keyframes } from '@emotion/react'

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <a>
          <img src="/logo-200.png" alt="capsule corporation logo" width="200" height="227" />
        </a>
      </Link>
      <nav>
        <Link href="#inventions" passHref>
          <a>
            <span>Inventions</span>
            <img src="/img/bronze-capsule.png" alt="" width="150" />
          </a>
        </Link>
        <Link href="#team" passHref>
          <a>
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
  > a {
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
    > a {
      text-decoration: none;
      position: relative;
      color: white;
      font-weight: bold;
      display: block;
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
    > :nth-child(2) > img {
      left: -47px;
    }
  }
`
