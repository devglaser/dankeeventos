import Image from "next/legacy/image";

import styled from "styled-components";

import photo from '../../public/Imgs/imgServicos.jpg'
import Head from "next/head";

const SobreDanke = styled.section`
    margin-top: 95px;
    display: flex;align-items:center;justify-content: space-between;

    @media (max-width:1080px){
        margin-top:75px;
        flex-direction: column-reverse;

        div:nth-child(1){
            margin-top: 25px;
        }
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

        div:nth-child(1){
            margin-bottom: 25px;
        }
    }
`

const sobre = () => {
    return (
        <>
            <Head>
                <title>Sobre Danke Eventos</title>
                <meta name="description" content="Danke eventos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Svg/dankelogo.svg" />
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
                    
                    <div style={{position: 'relative', width: '100%', maxWidth: '492px'}}>
                        <Image 
                            src='/Imgs/galeriaC.png'
                            alt="Imagem de jantar realizado pela Danke Eventos"
                            layout="responsive"
                            objectFit='cover'
                            width={492} height={292}
                            quality={75}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
                        />
                    </div>

                </SobreDanke>

                <Servico className="autoPadding fixedWidth">
                    <div style={{position: 'relative', width: '100%', maxWidth: '492px'}}>
                        <Image 
                            src='/Imgs/imgServicos.jpg'
                            alt="Imagem da equipe organizando o evento"
                            layout="responsive"
                            objectFit={'cover'}
                            width={492} height={292}
                            quality={75}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
                        />
                    </div>
            
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