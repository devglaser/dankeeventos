import '@/styles/globals.css'
import '@/styles/fontes.css'
import { hydrate } from 'styled-components'
import Rodape from './Components/Footer/Rodape'
import Navbar from './Components/NavBar/Navbar'
import WhtasApp from './Components/ActionButton/WhtasApp'
import PopOut from './Components/Language/PopOut'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <PopOut/>
      <Component {...pageProps} />
      <WhtasApp/>
      <Rodape/>
    </>
  )
}
