import Image from "next/legacy/image";

import { useState, useEffect } from "react";

import styled from 'styled-components'

const AreaLingagem = styled.div`
    max-height: 24px;
    display: flex; align-items: center; justify-content: space-between;
`

const SelecionaLinguagem = styled.select`
    background: transparent;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
    
    option{
        background: rgba(97, 38, 81, 1);font-weight:700;
    }
`

const Language = () => {
    const [lang, setLang] = useState('ptbr')

    useEffect(()=>{
        ;(()=>{
            try {
                if(localStorage.getItem('dankeLanguage') !== null || localStorage.getItem('dankeLanguage') !== undefined) {
                    setLang(localStorage.getItem('dankeLanguage'))
                  }
            } catch (error) {
                console.warn(error)
            }
        })()
    },[lang])

    function HandleChangeLanguage(l){
        try {
            setLang(l)
            localStorage.setItem('dankeLanguage', l)
        } catch (error) {
            console.warn(error)
        }finally{
            window.location.reload()
        }
    }

    return (
        <AreaLingagem>
            <div style={{width: '46px', height: '24px'}}>
                <Image src={`/Svg/${lang ? lang : 'ptbr'}Flag.svg`} alt="Bandeira" layout="responsive" objectFit="cover" loading="lazy" width={46} height={24}/>
            </div>

            <SelecionaLinguagem value={lang ? lang : 'ptbr'} onChange={({target})=>{HandleChangeLanguage(target.value)}}>
                <option value='ptbr'>pt-br</option>

                <option value="usa">en</option>

                <option value="es">es</option>
            </SelecionaLinguagem>
        </AreaLingagem>
    )
}

export default Language;