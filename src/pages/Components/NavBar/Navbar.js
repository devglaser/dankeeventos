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

    const [currentLanguage, setCurrentLanguage] = useState('')

    const textsLangs = {
        home:{
            headerSection:{
                title:{
                    ptbr: 'Tenha um evento inesquecível com a Danke!',
                    usa: 'Have an unforgettable event with Danke!',
                    es: '¡Tenga un evento inolvidable con Danke!',
                },
                caption:{
                    ptbr: 'Mais de 20 anos de experiência',
                    usa: 'More than 20 years of experience',
                    es: 'Más de 20 años de experiencia',
                },
            },
            aboutSection:{
                title:{
                    ptbr: 'Transforme seu evento em uma experiência única e inesquecível',
                    usa: 'Turn your event into a unique and unforgettable experience',
                    es: 'Convierte tu evento en una experiencia única e inolvidable',
                },
                caption:{
                    ptbr: 'Há 20 anos temos o compromisso de transformar seu evento em um momento inesquecível, com uma equipe experiente e dedicada, oferecendo serviços para atender às necessidades de qualquer evento.',
                    usa: 'For 20 years we have been committed to transforming your event into an unforgettable moment, with an experienced and dedicated team, offering services to meet the needs of any event.',
                    es: 'Desde hace 20 años nos hemos comprometido a transformar su evento en un momento inolvidable, contando con un equipo experimentado y dedicado, ofreciendo servicios para satisfacer las necesidades de cualquier evento.',
                },
            },
            portfolioSection:{
                title:{
                    ptbr: 'Fotos dos nossos eventos',
                    usa: 'Photos of our events',
                    es: 'Fotos de nuestros eventos',
                },
                caption:{
                    ptbr: 'Atendimento personalizado',
                    usa: 'Personalized service',
                    es: 'Atendimiento personalizado',
                },
                texts: {
                    ptbr: {
                        a:'Eventos sociais',
                        b:'Eventos Cerimoniais',
                        c:'Eventos Esportivos',
                        d:'Eventos de Exibição',
                    },
                    usa: {
                        a:'Social events',
                        b:'Ceremonial Events',
                        c:'Sports event',
                        d:'Display Events',
                    },
                    es: {
                        a:'Eventos sociales',
                        b:'Eventos Ceremoniales',
                        c:'Evento deportivo',
                        d:'Mostrar eventos',
                    }
                },
                content:{
                    ptbr: 'Galeria',
                    usa: 'Gallery',
                    es: 'Galería'
                }
            },
            servicesSection:{
                title:{
                    ptbr: 'Soluções integradas de decoração e organização de eventos',
                    usa: 'Integrated decoration and event organization solutions',
                    es: 'Soluciones integrales de decoración y organización de eventos',
                },
                caption:{
                    ptbr: 'Não importa qual seja o seu evento, nós estamos aqui para ajudar',
                    usa: 'No matter what your event is, we are here to help.',
                    es: 'No importa cuál sea tu evento, estamos aquí para ayudarte.',
                },
                texts:{
                    ptbr: 'Profissionais altamente capacitados trabalha para transformar suas ideias em realidade, criando ambientes personalizados e atraentes que impressionarão seus convidados.',
                    usa: 'Highly trained professionals work to turn your ideas into reality, creating personalized and attractive environments that will impress your guests.',
                    es: 'Profesionales altamente capacitados trabajan para convertir sus ideas en realidad, creando ambientes personalizados y atractivos que impresionarán a sus invitados.'
                }
            },
            clientsSection:{
                title:{
                    ptbr: 'Nossos Clientes',
                    usa: 'Our Clients',
                    es: 'Nuestros Clientes',
                },
            },
        },
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
            },
            aboutButton:{
                ptbr: 'Saiba Mais',
                usa: 'Know more',
                es: 'Sepa mas'
            },
            galeryButton: {
                ptbr: 'Ver Fotos',
                usa: 'See Pictures',
                es: 'Ver Fotos'
            }
        }
    }

    useEffect(()=>{
        ;(()=>{
          try {
            if(localStorage.getItem('dankeLanguage') !== null || localStorage.getItem('dankeLanguage') !== undefined) {
              setCurrentLanguage(localStorage.getItem('dankeLanguage'))
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
                        <li style={{textDecoration: router.pathname === '/sobre' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/sobre">{textsLangs.navBar.about[currentLanguage]}</Link></li>    
                        <li style={{textDecoration: router.pathname === '/portfolio' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/portfolio">{textsLangs.navBar.portfolio[currentLanguage]}</Link></li>    
                        <li style={{textDecoration: router.pathname === '/contato' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/contato">{textsLangs.navBar.contact[currentLanguage]}</Link></li>    
                    </ListaLink>
                    <Language/>
                    <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]}/>
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
                        <li style={{textDecoration: router.pathname === '/sobre' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/sobre" onClick={HandleCloseMenu}>{textsLangs.navBar.about[currentLanguage]}</Link></li>    
                        <li style={{textDecoration: router.pathname === '/portfolio' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/portfolio" onClick={HandleCloseMenu}>{textsLangs.navBar.portfolio[currentLanguage]}</Link></li>    
                        <li style={{textDecoration: router.pathname === '/contato' ? 'underline #C09ADD 3px' : 'none'}} ><Link href="/contato" onClick={HandleCloseMenu}>{textsLangs.navBar.contact[currentLanguage]}</Link></li>
                    </ListaLinkMobile>
                </li>
                <li>
                    <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]}></BotaoAcao>
                </li>
            </NavItens>
        </NavMobile>
    );
}

export default Navbar;
