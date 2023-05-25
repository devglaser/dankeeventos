import Image from "next/legacy/image";
import styled from "styled-components";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

import BotaoAcao from "../ActionButton/BotaoAcao";
import OpenClose from "../ActionButton/OpenClose";
import Language from "../Language/CurrentLanguage";

import DankeLogo from '../../../../public/Imgs/logoDankeAntiga.png'

const Navegacao = styled.nav`
    position: absolute;
    padding: 25px 50px;
    top:0;
    left:0;
    height:95px;
    width: 100%;
    z-index:99;
    display: grid;
    place-items:center;
`;

const ListaNav = styled.ul`
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

const ListaLink = styled.ul`
    width: 317px;
    display:flex;
    align-items:center;
    justify-content: space-between;

    li > a {
        font-weight: 700;
        text-decoration: none;
    }
`;

const NavMobile = styled.nav`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 75px;
    z-index:999;
    background: ${({$drop}) => $drop}; 
`;

const NavDrop = styled.ul`
    height: 75px;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    background: ${({$drop}) => $drop}; 
`;

const NavItens = styled.ul`
    position: relative;
    padding: 25px 20px;
    left: ${({$drop})=> $drop};
    height: calc(100vh - 75px);
    background: rgba(97, 38, 81, 1);
    display:flex;
    align-items:center;
    justify-content: space-around;
    flex-direction:column;
    text-align: center;
`;

const ListaLinkMobile = styled.ul`
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-direction:column;
    height: 160px;
`;

const Navbar = () => {
    
    const [largura, setLargura] = useState('');
    
    const [drop, setDrop] = useState(false);
    
    const router = useRouter();

    useEffect(() => {
        (() => {
            try {
                window.addEventListener('resize', () => {setLargura(window.innerWidth)});
                window.removeEventListener('resize', () => {setLargura(window.innerWidth)});
            } catch (error) {
                console.warn(error);
            } finally {
                setLargura(window.innerWidth);
                setDrop(false);
            }
        })();
    }, [largura]);

    function HandleCloseMenu() {setDrop(false);}


    return largura >= 1100 ? ( 
        <Navegacao>
            <ListaNav> 
                <li style={{width: '100%', maxWidth: '58.58px', height: '35px', overflow: 'hidden', filter: 'brightness(1000%)'}}>
                    <Link href="/">
                        <Image src={DankeLogo} alt="Logo Danke Eventos" layout="responsive" objectFit="cover"/>
                    </Link>
                </li>
                <li style={{display: 'flex', alignItems: 'Center', justifyContent: 'space-between', width: '745px'}}>
                    <ListaLink>
                        <li style={{textDecoration: router.pathname === '/' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/">Home</Link></li>    
                        <li style={{textDecoration: router.pathname === '/sobre' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/sobre">Sobre</Link></li>    
                        <li style={{textDecoration: router.pathname === '/portfolio' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/portfolio">Portfólio</Link></li>    
                        <li style={{textDecoration: router.pathname === '/contato' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/contato">Contato</Link></li>    
                    </ListaLink>
                    <Language/>
                    <BotaoAcao texto={'Contratar Serviço'}/>
                </li>
            </ListaNav>
        </Navegacao>
    ) : (
        <NavMobile $drop={drop ? "#612651" : 'transparent'}>
            <NavDrop $drop={drop ? 'transparent' : 'linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .25))'}>
                <li title={drop ? "Fechar menu" : "Abrir Menu"} onClick={() => setDrop(!drop)}><OpenClose w={drop}/></li>
                <li style={{width: '100%', maxWidth: '58.58px', height: '35px', overflow: 'hidden', filter: 'brightness(1000%)'}}>
                    <Link href="/">
                        <Image src={DankeLogo} alt="Logo Danke Eventos" layout="responsive" objectFit="cover"/>
                    </Link>
                </li>
            </NavDrop>
            <NavItens $drop={drop ? '0' : '-100%'}>
                <li>
                    <Language/>
                </li>
                <li>
                    <ListaLinkMobile>
                    <li style={{textDecoration: router.pathname === '/' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/" onClick={HandleCloseMenu}>Home</Link></li>    
                        <li style={{textDecoration: router.pathname === '/sobre' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/sobre" onClick={HandleCloseMenu}>Sobre</Link></li>    
                        <li style={{textDecoration: router.pathname === '/portfolio' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/portfolio" onClick={HandleCloseMenu}>Portfólio</Link></li>    
                        <li style={{textDecoration: router.pathname === '/contato' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/contato" onClick={HandleCloseMenu}>Contato</Link></li>
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
