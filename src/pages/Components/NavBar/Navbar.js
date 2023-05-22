import styled from "styled-components";

import {useState, useEffect} from 'react'

import { useRouter } from 'next/router'
import Link from "next/link";

import DankeEventos from "../SvgsComponents/DankeEventos";
import BotaoAcao from "../ActionButton/BotaoAcao";
import DankeLogo from "../SvgsComponents/DankeLogo";
import OpenClose from "../ActionButton/OpenClose";
//import Language from "../Language/CurrentLanguage";

const Navegacao = styled.nav`
    position: absolute;
    padding: 25px 50px;
    top:0;left:0;
    height:95px;width: 100%;
    z-index:99;
    display: grid;place-items:center;
`
const ListaNav = styled.ul`
    width: 100%;height: 100%;
    display:flex;align-items:center;justify-content: space-between;
`
const ListaLink = styled.ul`
    width: 317px;
    display:flex;align-items:center;justify-content: space-between;

    li > a{font-weight: 700}
`
////////

const NavMobile = styled.nav`
    position: fixed;
    top:0;left:0;
    width: 100%;height: 75px;
    z-index:99;
    background: ${({drop}) => drop}; 
`

const NavDrop = styled.ul`
    height: 75px;
    padding:20px;
    display:flex;align-items:center;justify-content: space-between;
    background: ${({drop}) => drop }; 
` 

const NavItens = styled.ul`
    position: relative;
    padding: 25px 20px;
    left: ${({drop})=> drop};
    height: calc(100vh - 75px);
    background: rgba(97, 38, 81, 1);
    display:flex;align-items:center;justify-content: space-between;flex-direction:column;
    text-align: center;
`

const ListaLinkMobile = styled.ul`
    display:flex;align-items:center;justify-content: space-between;flex-direction:column;
    height: 160px;
`

const Navbar = () => {
    
    const [largura, setLargura] = useState('')

    const [drop, setDrop] = useState(true)

    const router = useRouter()

    useEffect(()=>{
        ;(()=>{
            try {
                window.addEventListener('resize', () => {setLargura(window.innerWidth)})
                window.removeEventListener('resize', () => {setLargura(window.innerWidth)})
            } catch (error) {
                console.warn(error)
            }finally{
                setLargura(window.innerWidth)
                setDrop(false)
            }
        })()
    }, [largura])

    function HandleCloseMenu(){
        setDrop(false)
    }

    return largura >= 1100 ? ( 
        <Navegacao >
            <ListaNav> 
                <li>
                    <Link href="/">
                        <DankeEventos/>
                    </Link>
                </li>

                <li style={{display: 'flex', alignItems: 'Center', justifyContent: 'space-between', width: '745px'}}>
                    <ListaLink>
                        <li><Link href="/" style={{textDecoration: router.asPath === "/" && 'underline #C09ADD 3px'}}>Home</Link></li>    
                        <li><Link href="/sobre" style={{textDecoration: router.asPath === "/sobre" && 'underline #C09ADD 3px'}}>Sobre</Link></li>    
                        <li><Link href="/portfolio" style={{textDecoration: router.asPath === "/portfolio" && 'underline #C09ADD 3px'}}>Portfólio</Link></li>    
                        <li><Link href="/contato" style={{textDecoration: router.asPath === "/contato" && 'underline #C09ADD 3px'}}>Contato</Link></li>    
                    </ListaLink>

                    <li>
                    </li>
                    
                    <li>
                        <BotaoAcao texto={'Contratar Serviço'}/>
                    </li>
                </li>
            </ListaNav>
        </Navegacao>
    ) : (
        <NavMobile drop={drop ? "#612651" : 'transparent'}>
            
            <NavDrop drop={drop ? 'transparent' : 'linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .25)'}>
                <li title={drop ? "Fechar menu" : "Abrir Menu"} onClick={() => setDrop(!drop)}><OpenClose w={drop}/></li>
                <li><Link href="/"><DankeLogo/></Link></li>
            </NavDrop>
            
            <NavItens drop={drop === false ? '-100%' : '0'}>
                <li>
                </li>
                <li>
                    <ListaLinkMobile>
                        <li><Link href="/" style={{textDecoration: router.asPath === "/" && 'underline #C09ADD 3px'}} onClick={HandleCloseMenu}>Home</Link></li>    
                        <li><Link href="/sobre" onClick={HandleCloseMenu} style={{textDecoration: router.asPath === "/sobre" && 'underline #C09ADD 3px'}}>Sobre</Link></li>    
                        <li><Link href="/portfolio" onClick={HandleCloseMenu} style={{textDecoration: router.asPath === "/portfolio" && 'underline #C09ADD 3px'}}>Portfólio</Link></li>    
                        <li><Link href="/contato" onClick={HandleCloseMenu} style={{textDecoration: router.asPath === "/contato" && 'underline #C09ADD 3px'}}>Contato</Link></li>  
                    </ListaLinkMobile>
                </li>
                <li>
                    <BotaoAcao texto={'Contratar Serviço'}></BotaoAcao>
                </li>
            </NavItens>

        </NavMobile>
    );
}

export default Navbar;