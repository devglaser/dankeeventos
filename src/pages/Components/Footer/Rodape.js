import Link from "next/link";
import styled from "styled-components";
import DankeEventos from "../SvgsComponents/DankeEventos";
import FaceIcon from "../SvgsComponents/FaceIcon";
import InstaIcon from "../SvgsComponents/InstaIcon";

const Footer = styled.footer`
    padding: 50px 0;
    background: linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .25));
    height: 306px;
    text-align:center;
    display:flex; align-items:center; justify-content: space-between;flex-direction:column;
`

const Lista = styled.ul`
    display: flex;align-items:center;justify-content: space-around;flex-direction:column;
    height: 100%; 
`

const Rodape = () => {
    return (
        <Footer>
            <Lista>
                <li title="Danke Eventos">
                    <DankeEventos/>
                </li>
                
                <li title="Contato"> 
                    <Link href="https://wa.me/5521993401594" title="WhatsApp" target="_blank">+ 55 21 9 9340-1594</Link> | <Link href="mailto:contato@dankeventos.com.br" title="E-mail">contato@dankeeventos.com.br</Link>
                </li>

                <li>
                    <ul title="Social" style={{display:'flex', justifyContent: 'center', width: '100%'}}>
                        
                        <li title="Instagram @dankeeventos" style={{marginRight: '25px'}}><Link href="https://instagram.com/dankeeventos" target="_blank"><InstaIcon/></Link></li>
                        <li title="Facebook Danke Eventos"><Link href="https://facebook.com/dankeeventos" target="_blank"><FaceIcon/></Link></li>
                    
                    </ul>
                </li>

                <li title="Direitos e Desenvolvedor">
                    <p>© Todos os direitos reservados 2023</p>
                    <p style={{fontWeight: '300'}}>Desenvolvido por <Link href="https://danielglaser.vercel.app" target="_blank" title="Desenvolvedor e Designer Web Daniel_GLaser">Daniel_GLaser</Link></p>
                </li>
            </Lista>
        </Footer>
    );
}

export default Rodape;