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
  padding: 1em;
  grid-area: 2 / 1 / 3 / 4;
  display: grid;
  grid-template-rows: auto auto auto 400px;
  grid-template-columns: 1fr 600px 600px 1fr;
  position: relative;
  row-gap: 2em;
`
