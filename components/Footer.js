import styled from '@emotion/styled'

export default function Footer() {
  return (
    <StyledFooter>Footer</StyledFooter>
  )
}

const StyledFooter = styled.footer`
  grid-area: 3 / 1 / 4 / 4;
  height: 100px;
  background-color: #D68091;
  padding: 1em;
`
