import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const ButtonOp = styled.button`
    position:relative;
    width: 35px;height:35px;
    background:transparent;
    display: grid;place-items:center;
    cursor:pointer;

    span{
        position: relative;
        width: 100%;height:2px;
        border-radius: 1px;
        background: ${({op})=> op === 'true' ? 'transparent' : '#e5e1e6'};

        &::before,&::after{
            content: '';
            position: absolute;
            top:0;left:0;
            width: 100%;height:100%;
            background: #E5E1E6;
            transition: .25s all;
        }

        &::before{
            top:-8.75px;
            transform:${({op})=> op === 'true' ? 'rotate(-45deg)' : 'rotate(0deg)'};
        }

        &::after{
            top:8.75px;
            transform:${({op})=> op === 'true' ? 'rotate(45deg)' : 'rotate(0deg)'};
        }

        &::before,&::after{top:${({op}) => op === 'true' && '0'};}
    }
`

const OpenClose = ({w}) => {
    const router = useRouter()

    const [op, setOp] = useState(false)

    useEffect(()=>{;(()=>{setOp(false)})()},[router.asPath])

    useEffect(()=>{;(()=>{setOp(w)})()},[w])

    return (
        <>
            <ButtonOp op={op.toString()} onClick={() => setOp(!op)}><span></span></ButtonOp>
        </>
    )
}

export default OpenClose;