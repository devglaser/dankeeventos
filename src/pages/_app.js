import '@/styles/fontes.css'
import '@/styles/globals.css'

import dynamic from 'next/dynamic'

const NavBar = dynamic(()=> import('./Components/NavBar/Navbar'))
const WhtasApp = dynamic(()=> import('./Components/ActionButton/WhtasApp')) 
const PopOut = dynamic(()=> import('./Components/Language/PopOut')) 
const Rodape = dynamic(()=> import('./Components/Footer/Rodape'))

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <PopOut/>
      <Component {...pageProps}/>
      <WhtasApp/>
      <Rodape/>
    </>
  )
}
