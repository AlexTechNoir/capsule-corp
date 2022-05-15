import styled from '@emotion/styled'
import Link from 'next/link'

export default function Footer() {
  return (
    <StyledFooter>
      <div className="gridWrapper">
        <div className="footerTitle">Capsule Corporation LLC</div>
        <ul className="allLists firstList">
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
        <ul className="allLists secondList">
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
        <ul className="allLists thirdList">
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
        <div className="socialNetworks">
          <Link href="https://www.facebook.com/DragonBallZ/" passHref>
            <a>
              <img src="/icons/facebook.svg" alt="facebook" width="32" />
              <span>Facebook</span>
            </a>
          </Link>
          <Link href="https://twitter.com/dragonballz" passHref>
            <a className="twitter">
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
            <a className="productHunt">
              <img src="/icons/product-hunt.svg" alt="product hunt" width="32" />
              <span>Product Hunt</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="discord">
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
  > .gridWrapper {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 300px 300px 300px 300px;
    > .footerTitle {
      font-weight: bold;
      grid-area: 1 / 1 / 2 / 5;
      justify-self: center;
    }
    > .allLists {
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
    > .socialNetworks {
      grid-area: 2 / 4 / 3 / 5;
      padding: 1em;
      justify-self: start;
      padding-left: 0;
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

          position: absolute;
          z-index: 1;
          bottom: 42px;
          left: -38px;

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
      > .twitter > span {
        left: -25px;
      }
      > .productHunt > span {
        left: -50px;
      }
      > .discord {
        margin-right: 0;
        > span {
          left: -29px;
        }
      }
    }
  }

  @media only screen and (max-width: 1216px) {
    grid-area: 3 / 1 / 4 / 2;
    > .gridWrapper {
      grid-template-rows: auto auto auto;
      grid-template-columns: 300px 300px;
      justify-content: center;
      > .footerTitle {
        grid-area: 1 / 1 / 2 / 3;
      }
      > .firstList {
        grid-area: 2 / 1 / 3 / 2;
      }
      > .secondList {
        grid-area: 2 / 2 / 3 / 3;
      }
      > .thirdList {
        grid-area: 3 / 1 / 4 / 2;
      }
      > .socialNetworks {
        grid-area: 3 / 2 / 4 / 3;
      }
    }
  }
  
  @media only screen and (max-width: 632px) {
    > .gridWrapper {
      grid-template-rows: auto auto auto auto auto;
      grid-template-columns: 100%;
      > .footerTitle {
        grid-area: 1 / 1 / 2 / 2;
      }
      > .allLists {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      > .firstList {
        grid-area: 2 / 1 / 3 / 2;
      }
      > .secondList {
        grid-area: 3 / 1 / 4 / 2;
      }
      > .thirdList {
        grid-area: 4 / 1 / 5 / 2;
      }
      > .socialNetworks {
        grid-area: 5 / 1 / 6 / 2;
        justify-self: center;
        padding-left: 1em;
      }
    }
  }
`
