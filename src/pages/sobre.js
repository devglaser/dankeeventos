import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

import BotaoAcao from "./Components/BotaoAcao";

import photo from '../../public/Imgs/photo.png'
import foto from '../../public/Imgs/aboutPhoto.png'
import Head from "next/head";

const SobreDanke = styled.section`
    margin-top: 95px;
    display: flex;align-items:center;justify-content: space-between;

    @media (max-width:1080px){
        margin-top:75px;
        flex-direction: column-reverse;
    }
`

const TituloDanke = styled.h1`
    font-size: 4.25rem;
    max-width: 920px;

    @media (max-width: 700px){font-size:2.125rem;max-width:480px}
`

const Servico = styled.section`
    display: flex;align-items:center;justify-content: space-between;

    @media (max-width:1280px){
    flex-direction: column; 
    }
`

const sobre = () => {
    return (
        <>
            <Head>
                <title>Sobre Danke Eventos</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/dankelogo.svg" />
            </Head>
            <main>
                <SobreDanke className="autoPadding fixedWidth">
                    <div>
                        <TituloDanke className="titulo" style={{maxWidth: '650px', width: '100%'}}>
                            Danke Eventos
                        </TituloDanke>

                        <h2 className="subtitulo" style={{margin: '25px 0',maxWidth: '555px'}}>
                        Há 20 anos de experiência
                        </h2>

                        <p style={{maxWidth: '630px'}}>
                        Nossa empresa de eventos tem 20 anos de experiência em transformar celebrações em momentos inesquecíveis. Com uma equipe dedicada e serviços personalizados, cuidamos de todos os detalhes do seu evento, desde o planejamento até a execução. Oferecemos soluções para diversos tipos de eventos, sempre atentos às últimas tendências do mercado. Trabalhamos com os melhores fornecedores para garantir a qualidade dos nossos serviços e o sucesso do seu evento. Conte conosco para tornar sua celebração única e especial.
                        </p>
                    </div>
                    
                    <Image src={foto} className='foto' alt="Foto ilustrativa"/>

                </SobreDanke>

                <Servico className="autoPadding fixedWidth">
                    <Image src={photo} className='photo' alt="Foto ilustrativa"/>
            
                    <div>
                        <h1 className="titulo" style={{maxWidth: '546px'}}>
                        Soluções integradas de decoração e organização de eventos
                        </h1>

                        <h2 className="subtitulo" style={{margin: '25px 0',maxWidth: '447px'}}>
                        Não importa qual seja o seu evento, nós estamos aqui para ajudar
                        </h2>

                        <p style={{maxWidth: '630px'}}>
                        Nossa empresa oferece soluções integradas para a organização e decoração de eventos. Com anos de experiência, nossa equipe de profissionais trabalha para transformar suas ideias em realidade, criando ambientes personalizados e atraentes para impressionar seus convidados. Nossos serviços são flexíveis e customizáveis, adaptados às necessidades específicas de cada cliente. Deixe-nos cuidar de todos os detalhes, para que você possa desfrutar de um evento perfeito e sem preocupações. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de decoração e organização de eventos.
                        </p>
                    </div>       
                </Servico>
            </main>
        </>
    );
}

export default sobre;