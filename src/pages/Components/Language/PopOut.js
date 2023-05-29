import Image from "next/legacy/image";

import styled from "styled-components";

import {useState, useEffect} from 'react'

import ptbrFlag from '../../../../public/Svg/ptbrFlag.svg'
import usaFlag from '../../../../public/Svg/usaFlag.svg'
import esFlag from '../../../../public/Svg/esFlag.svg'


const PopOutMain = styled.main`
    position: absolute;
    top: 0;left: 0;
    width: 100vw;height:100vh;
    z-index: 999;
    background: rgba(0,0,0,.75);
    display: grid; place-items: center;
`

const PopOutSection = styled.section`
    position: relative;
    width: 75vw;
    padding: 50px 25px 25px 25px;
    background: #612651;
    display: flex;align-items:center;
    flex-direction:column;
    transform: scale(1);
    animation: anima .25s ease-in-out;

    @media (max-width:500px) {
        padding: 25px;
    }

    @keyframes anima {
        from{
            transform: scale(.1);
        }
        to{
            transform: scale(1);
        }
    }

    header{
        text-align: center;
    }

    > div {
        margin: 50px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

const PopOutBotaoAcao = styled.button`
    &:hover{
        background: rgb(46, 26, 71);
    }
`

const PopOutRadio = styled.input`
    display: none;

    &:nth-child(2):checked ~ div>label:nth-child(1){border: 3px solid #fff;}
    &:nth-child(3):checked ~ div>label:nth-child(2){border: 3px solid #fff;}
    &:nth-child(4):checked ~ div>label:nth-child(3){border: 3px solid #fff;}
`

const PopOutLabel = styled.label`
    margin: 0 15px;
    width: 100%;height:100%;
    max-width: 200px;
    position: relative;
    display: inline;
    cursor: pointer;
    transition: all .1s;

    div{
        position: relative;
        height: 100%;width: 100%;
    }
`

const PopOut = () => {
    const [selecao, setSelecao] = useState(false)
    
    const [idioma, setIdioma] = useState('ptbr')

    const titulos = {
        ptbr: ['Selecione seu idioma', 'Confirmar'],
        usa: ['Select your language', 'Confirm'],
        es: ['Elige tu idioma', 'Confirmar']
    }

    function HanldeLanguage(){
        try {
            localStorage.setItem('dankeLanguage', idioma)
        } catch (error) {
            console.log(error)
        }finally{
            setSelecao(false)
            window.location.reload()
        }
    }

    useEffect(()=>{
        ;(()=>{
            try {
                if(localStorage.getItem('dankeLanguage') === null || localStorage.getItem('dankeLanguage') === undefined){
                    setSelecao(true)
                }
            } catch (error) {
                console.log(error)
            }
        })()
    },[])

    return selecao && (
        <PopOutMain>
            <PopOutSection>

                <header>
                    <h1 className="titulo">{titulos[idioma][0]}</h1>
                </header>

                <PopOutRadio type="radio" name="bandeira" id="bandeira-usa" />
                <PopOutRadio type="radio" name="bandeira" id="bandeira-ptbr" defaultChecked={true}/>
                <PopOutRadio type="radio" name="bandeira" id="bandeira-es" />

                <div>
                    <PopOutLabel htmlFor='bandeira-usa' onClick={()=> setIdioma('usa')}>
                        <div>
                            <Image src={usaFlag} alt="bandeira do brasil" width={46} height={24} layout="responsive" objectFit='cover'/>
                        </div>
                    </PopOutLabel>

                    <PopOutLabel htmlFor='bandeira-ptbr' onClick={()=> setIdioma('ptbr')}>
                        <div>
                            <Image src={ptbrFlag} alt="bandeira do brasil" width={46} height={24} layout="responsive" objectFit='cover'/>
                        </div>
                    </PopOutLabel>

                    <PopOutLabel htmlFor='bandeira-es' onClick={()=> setIdioma('es')}>
                        <div>
                            <Image src={esFlag} alt="bandeira do brasil" width={46} height={24} layout="responsive" objectFit='cover'/>
                        </div>
                    </PopOutLabel>
                </div>

                <PopOutBotaoAcao className="botaoAcao" onClick={HanldeLanguage}>{titulos[idioma][1]}</PopOutBotaoAcao>

            </PopOutSection>
        </PopOutMain>
    );
}

export default PopOut;