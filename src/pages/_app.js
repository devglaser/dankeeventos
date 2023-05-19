import '@/styles/globals.css'
import '@/styles/fontes.css'
import Rodape from './Components/Footer/Rodape'
import Navbar from './Components/NavBar/Navbar'
import WhtasApp from './Components/ActionButton/WhtasApp'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <WhtasApp/>
      <Rodape/>
    </>
  )
}
