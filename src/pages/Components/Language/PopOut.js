import Image from "next/legacy/image";
import dynamic from "next/dynamic";

import styled from "styled-components";

import {useState, useEffect} from 'react'

import ptbrFlag from '../../../../public/Svg/ptbrFlag.svg'
import usaFlag from '../../../../public/Svg/usaFlag.svg'
import esFlag from '../../../../public/Svg/esFlag.svg'

import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:['latin']})

const PopOutMain = styled.main`
    position: fixed;
    bottom: -100%;
    margin: 0 auto;
    width: 100vw;
    padding: 25px;
    background: transparent;
    z-index: 999;
    display: grid; place-items: center;
    animation: anima 1s ease-in-out forwards;

    @keyframes anima {
        from{
            bottom: -100%;
        }
        to{
            bottom: 10px;
        }
    }

`

const PopOutSection = styled.section`
    position: relative;
    padding: 25px 50px;
    background: #612651;
    width: 80vw;
    margin: auto;

    display: flex; align-items: center; justify-content: space-between;

    @media (max-width: 820px) {
        padding: 25px;
        flex-direction: column;
        align-items: center;
        text-align:center;
    }

    div{
    
        &:nth-child(1){
            div{
                position: relative;
                width: 46px; height: 24px;
                cursor: pointer;

                @media (max-width: 820px){display: inline-block}

                &:nth-child(1){
                    background: red;
                }

                &:nth-child(2){
                    margin: 10px 0;
                    
                    @media (max-width: 820px){margin: 0px 15px}
                }

            }

        }

        &:nth-child(2){
            margin: 0 25px;

            @media (max-width: 820px){margin: 25px 0}
        }
        
        h2{
            font-weight: bolder;
        }

        p{
            margin: 10px 0;

        }
    }

    button{
        border: 1px solid #e5e1e6;
        
        &:hover{
            background: #2e1a47;
        }
    }
`

const PopOut = () => {

    const [popView, setPopView] = useState(false)

    const [textLangPopOut, setTextLangPopOut] = useState('ptbr')

    const texts = {
        ptbr: ['Opções de Idioma', 'Personalize o idioma do site na barra de navegação e aproveite nosso conteúdo em sua língua preferida.'],
        usa: ['Language Options', 'Customize the website language in the navigation bar and enjoy our content in your preferred language.'],
        es: ['Opciones de lenguaje', 'Personaliza el idioma del sitio web en la barra de navegación y disfruta de nuestro contenido en tu idioma preferido.']
    }

    useEffect(()=>{
        ;(()=>{
            try {
                if(localStorage.getItem('dankeLanguage') === null || localStorage.getItem('dankeLanguage') === undefined){
                    setTimeout(()=>{
                        setPopView(true)
                    }, 3000)
                    
                    localStorage.setItem('dankeLanguage', textLangPopOut)
                }
            } catch (error) {
                console.log(error)
            }finally{
            }
        })()
    },[])

    return  popView && (
        <PopOutMain className={montserrat.className}>
            <PopOutSection>
                <div>
                    <div style={{opacity: textLangPopOut === 'usa' ? '1' : '.25'}} onClick={()=> setTextLangPopOut('usa')}>
                        <Image src={usaFlag} alt="USA Flag" width={46} height={24} layout="responsive" objectFit={'cover'} />
                    </div>
                    
                    <div style={{opacity: textLangPopOut === 'ptbr' ? '1' : '.25'}} onClick={()=> setTextLangPopOut('ptbr')}>
                        <Image src={ptbrFlag} alt="Bandeira Brasileira" width={46} height={24} layout="responsive" objectFit={'cover'} />
                    </div>
                    
                    <div style={{opacity: textLangPopOut === 'es' ? '1' : '.25'}} onClick={()=> setTextLangPopOut('es')}>
                        <Image src={esFlag} alt="bandera española" width={46} height={24} layout="responsive" objectFit={'cover'} />
                    </div>
                </div>

                <div>
                    <h1 className="subtitulo">{texts[textLangPopOut][0]}</h1>
                    <p>{texts[textLangPopOut][1]}</p>
                </div>
                
                <button className="botaoAcao" onClick={()=> setPopView(false)}>Ok!</button>
            </PopOutSection>
        </PopOutMain>
    );
}

export default PopOut;