import Image from "next/image";

import { useState } from "react";

import styled from 'styled-components'

const AreaLingagem = styled.div`
    max-height: 24px;
    display: flex;
`

const SelecionaLinguagem = styled.select`
    background: transparent;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
`

const Language = () => {
    const [lang, setLang] = useState('ptbr')

    return (
        <AreaLingagem>
            <Image src={`/Svg/${lang}Flag.svg`} alt="Bandeira Brasileira" layout="responsive" objectFit="cover" width={46} height={24}/>

            <SelecionaLinguagem onChange={({target})=>{setLang(target.value)}}>
                <option value='ptbr' selected>pt-br</option>

                <option value="usa">en</option>

                <option value="es">es</option>
            </SelecionaLinguagem>
        </AreaLingagem>
    )
}

export default Language;