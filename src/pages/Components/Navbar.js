import styled from "styled-components";

import {useState, useEffect} from 'react'

import Link from "next/link";
import DankeEventos from "./DankeEventos";
import BotaoAcao from "./BotaoAcao";
import DankeLogo from "./DankeLogo";

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
`
////////

const NavMobile = styled.nav`
    position: fixed;
    top:0;left:0;
    width: 100%;
    z-index:99;
    background: ${({drop}) => drop};
`

const NavDrop = styled.ul`
    height: 75px;
    padding:20px;
    display:flex;align-items:center;justify-content: space-between;
    background: ${({drop}) => drop }); 
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
    const [drop, setDrop] = useState(false)
    
    useEffect(()=>{
        window.addEventListener('resize', ()=> setLargura(window.innerWidth))
        setDrop(false)
    }, [largura])

    return largura > 1150 ? ( 
        <Navegacao >
            <ListaNav> 
                <li>
                    <Link href="/">
                        <DankeEventos/>
                    </Link>
                </li>

                <li style={{display: 'flex', alignItems: 'Center', justifyContent: 'space-between', width: '745px'}}>
                    <ListaLink>
                        <li><Link href="/" style={{textDecoration: 'underline #C09ADD 3px'}}>Home</Link></li>    
                        <li><Link href="/sobre">Sobre</Link></li>    
                        <li><Link href="/portfolio">Portfólio</Link></li>    
                        <li><Link href="/contato">Contato</Link></li>    
                    </ListaLink>

                    <li></li>
                    
                    <li>
                        <BotaoAcao texto={'Contratar Serviço'}/>
                    </li>
                </li>
            </ListaNav>
        </Navegacao>
    ) : (
        <NavMobile drop={drop ? "#612651" : 'transparent'}>
            
            <NavDrop drop={drop ? 'transparent' : 'linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .25)'}>
                <li title="Abrir menu" onClick={() => setDrop(!drop)}>[Abrir Menu]</li>
                <li><DankeLogo/></li>
            </NavDrop>
            
            <NavItens drop={drop === false ? '-100%' : '0'}>
                <li>Mudança de Linguage</li>
                <li>
                    <ListaLinkMobile>
                        <li><Link href="/" style={{textDecoration: 'underline #C09ADD 3px'}} onClick={() => setDrop(false)}>Home</Link></li>    
                        <li><Link href="/sobre" onClick={() => setDrop(false)}>Sobre</Link></li>    
                        <li><Link href="/portfolio" onClick={() => setDrop(false)}>Portfólio</Link></li>    
                        <li><Link href="/contato" onClick={() => setDrop(false)}>Contato</Link></li>  
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