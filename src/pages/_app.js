import '@/styles/globals.css'
import '@/styles/fontes.css'
import Rodape from './Components/Rodape'
import Navbar from './Components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Rodape/>
    </>
  )
}
