import styled from '@emotion/styled'
import Link from 'next/link'

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <div>Capsule Corporation LLC</div>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>Invest in company</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Order invention</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Buy a trip to outer planets</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Sign up for a time travel</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>Gadgets repair</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Apply for a training with Vegeta</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Sing up for a sparring with Goku</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Report rogue RR androids</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>We are hiring!</a>
              
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
        <div>
          <Link href="https://www.facebook.com/DragonBallZ/" passHref>
            <a>
              <img src="/icons/facebook.svg" alt="facebook" width="32" />
              <span>Facebook</span>
            </a>
          </Link>
          <Link href="https://twitter.com/dragonballz" passHref>
            <a>
              <img src="/icons/twitter.svg" alt="twitter" width="32" />
              <span>Twitter</span>
            </a>
          </Link>
          <Link href="https://www.instagram.com/official.dragonballz/" passHref>
            <a>
              <img src="/icons/instagram.svg" alt="instagram" width="32" />
              <span>Instagram</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <img src="/icons/product-hunt.svg" alt="product hunt" width="32" />
              <span>Product Hunt</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <img src="/icons/discord.svg" alt="discord" width="32" />
              <span>Discord</span>
            </a>
          </Link>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  grid-area: 3 / 1 / 4 / 4;
  background-color: #D68091;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 300px 300px 300px 300px;
    > div {
      font-weight: bold;
      grid-area: 1 / 1 / 2 / 5;
      justify-self: center;
    }
    > ul {
      list-style-type: none;
      padding-left: 0;
      > li {
        margin-bottom: .2em;
        > a {
          color: black;
          &:hover {
            text-decoration: none;
          }
        }
      } 
    }
    > :last-child {
      grid-area: 2 / 4 / 3 / 5;
      padding: 1em;
      justify-self: start;
      > a {
        margin-right: 1em;
        position: relative;
        > span {
          visibility: hidden;
          background-color: #555;
          color: #fff;
          text-align: center;
          padding: .5em 1em .5em 1em;
          border-radius: 5px;
          white-space: nowrap;

          /* Position the tooltip text */
          position: absolute;
          z-index: 1;
          bottom: 42px;
          left: -38px;

          /* Fade in tooltip */
          opacity: 0;
          transition: opacity 0.3s;

          &:after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #555 transparent transparent transparent;
          }
        }
        &:hover span {
          visibility: visible;
          opacity: 1;
        }
      }
      > :nth-child(2) > span {
        left: -25px;
      }
      > :nth-child(4) > span {
        left: -50px;
      }
      > :nth-child(5) > span {
        left: -29px;
      }
    }
  }
`
