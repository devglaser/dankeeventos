import Image from "next/legacy/image";
import styled from "styled-components";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

import BotaoAcao from "../ActionButton/BotaoAcao";
import OpenClose from "../ActionButton/OpenClose";
import Language from "../Language/CurrentLanguage";

import DankeLogo from '../../../../public/Imgs/logoDankeAntiga.png'

import navbar from '@/pages/Components/NavBar/style/navbar.module.css'

const NavMobile = styled.nav`background: ${({$drop}) => $drop};`;

const NavDrop = styled.ul`background: ${({$drop}) => $drop}; `;

const NavItens = styled.ul`left: ${({$drop})=> $drop};`;

const Navbar = () => {

    const [currentLanguage, setCurrentLanguage] = useState('ptbr')

    const textsLangs = {
        navBar:{
            about:{
                ptbr: 'Sobre',
                usa: 'About',
                es: 'Acerca de'
            },
            portfolio: {
                ptbr: 'Portfólio',
                usa: 'Portfolio',
                es: 'Portafolio'
            },
            contact: {
                ptbr: 'Contato',
                usa: 'Contact',
                es: 'Contacto'
            }
        },
        buttons:{
            actionButton:{
                ptbr: 'Contratar Serviço',
                usa: 'Hire Service',
                es: 'Contratar Servicio'
            }
        }
    }

    useEffect(()=>{
        ;(()=>{
          try {
            if(localStorage.getItem('dankeLanguage') != null || localStorage.getItem('dankeLanguage') != undefined) {
              setCurrentLanguage(localStorage.getItem('dankeLanguage'))
            }else{
                setCurrentLanguage('ptbr')
            }
          } catch (error) {
            console.log(error)
          }
        })()
      },[])
    
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


    return ( 
        <>
            <nav id={navbar.navegacao}>
            <ul id={navbar.listaNav}> 
                
                <li >
                    <Link href="/">
                        <Image src={DankeLogo} alt="Logo Danke Eventos" layout="responsive" objectFit="cover" quality={25} priority={false}/>
                    </Link>
                </li>

                <li>
                    <ul id={navbar.listaLink}>
                        <li style={{textDecoration: router.pathname === '/' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/">Home</Link></li>    
                        <li style={{textDecoration: router.pathname === '/sobre' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/sobre">{textsLangs.navBar.about[currentLanguage]}</Link></li>    
                        <li style={{textDecoration: router.pathname === '/portfolio' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/portfolio">{textsLangs.navBar.portfolio[currentLanguage]}</Link></li>    
                        <li style={{textDecoration: router.pathname === '/contato' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/contato">{textsLangs.navBar.contact[currentLanguage]}</Link></li>    
                    </ul>
                    <Language/>
                    <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]}/>
                </li>

            </ul>
        </nav>

        <NavMobile id={navbar.navMobile} $drop={drop ? "#612651" : 'transparent'}>
                    
        <NavDrop id={navbar.navDrop} $drop={drop ? 'transparent' : 'linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .25))'}>
            <li title={drop ? "Fechar menu" : "Abrir Menu"} onClick={() => setDrop(!drop)}><OpenClose w={drop}/></li>
            <li style={{width: '100%', maxWidth: '58.58px', height: '35px', overflow: 'hidden', filter: 'brightness(1000%)'}}>
                <Link href="/">
                    <Image src={DankeLogo} alt="Logo Danke Eventos" layout="responsive" objectFit="cover" priority={false}/>
                </Link>
            </li>
        </NavDrop>

        <ul id={navbar.navItens} style={{left: drop ? '0' : '-100%'}}>
            <li>
                <Language/>
            </li>
            <li>
                <ul id={navbar.listaLinkMobile}>
                    <li style={{textDecoration: router.pathname === '/' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/" onClick={HandleCloseMenu}>Home</Link></li>    
                    <li style={{textDecoration: router.pathname === '/sobre' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/sobre" onClick={HandleCloseMenu}>{textsLangs.navBar.about[currentLanguage]}</Link></li>    
                    <li style={{textDecoration: router.pathname === '/portfolio' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/portfolio" onClick={HandleCloseMenu}>{textsLangs.navBar.portfolio[currentLanguage]}</Link></li>    
                    <li style={{textDecoration: router.pathname === '/contato' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/contato" onClick={HandleCloseMenu}>{textsLangs.navBar.contact[currentLanguage]}</Link></li>
                </ul>
            </li>
            <li>
                <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]}></BotaoAcao>
            </li>
        </ul>

        </NavMobile>
        </>
    )
}

export default Navbar;
