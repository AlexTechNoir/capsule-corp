import styled from '@emotion/styled'

export default function Header() {
  return (
    <StyledHeader>
      <img src="/logo-200.png" alt="capsule corporation logo" width="200" height="227" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 1em;
  grid-area: 1 / 2 / 2 / 4;
  > img {
    margin-left: 1em;
    width: 100px;
    height: 100%;    
  }
`
