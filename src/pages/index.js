import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Danke from './Components/Danke'

const Ola = styled.main`
  height: 100vh;
  background: #612651;
  display:grid;place-items:center;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Danke Eventos</title>
        <meta name="description" content="Danke eventos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dankelogo.svg" />
      </Head>
      <Ola>
        <Danke/>
      </Ola>
    </>
  )
}
