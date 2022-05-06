import styled from '@emotion/styled'
import Link from 'next/link'

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <a>
          <img src="/logo-200.png" alt="capsule corporation logo" width="200" height="227" />
        </a>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 1em;
  grid-area: 1 / 2 / 2 / 4;
  > a {
    margin-left: 1em;
    > img {
      width: 100px;
      height: 100%;
    }
  }
`
