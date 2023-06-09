import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";

import whats from '../../../../public/Svg/whats.svg'

const WhatsButton = styled.section`
    position: fixed;
    z-index: 99;
    right: 25px;
    bottom: 25px;
    width: 60px;

    @media (max-width:500px) {
        width: 50px;
        bottom: 100px;
    }

    &:hover{
        transform: scale(1.1);
    }
`

const WhtasApp = () => {
    return (
        <WhatsButton>
            <Link href="https://wa.me/5521993401594" title="Entre em contato pelo WhatsApp" target="_blank">
                <Image 
                    src={whats} 
                    alt="Botão inferio direito de contato via WhatsApp"
                    width={60} height={60}
                    layout="responsive" 
                    objectFit="cover" 
                    quality={75}
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23612651'%3E%3C/rect%3E%3C/svg%3E`}  
                />
            </Link>
        </WhatsButton>
    );
}

export default WhtasApp;