import Head from 'next/head'
import styled from '@emotion/styled'
import Hero from '../components/Hero'
import Inventions from '../components/Inventions'
import Team from '../components/Team'
import Invest from '../components/Invest'

export default function Home() {
  return (
    <>
      <Head>
        <title>Capsule Corporation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex" />
      </Head>

      <Main>
        <Hero />
        <Inventions />
        <Team />
        <Invest />
      </Main>
    </>
  )
}

const Main = styled.main`
  margin-top: 1em;
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  position: relative;
  row-gap: 2em;

  @media only screen and (max-width: 1216px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`
