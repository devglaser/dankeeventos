import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Contato = styled.main`
    display: grid; place-items: center;align-content: start;
    margin-top:95px;
    height: calc(100vh - 95px);min-height: calc(100vh - 95px); 
    background: linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .1), rgba(46, 26, 71, 1));

    @media (max-width:700px){
        margin-top:75px;
        height: calc(100vh - 75px);min-height: calc(100vh - 75px);
    }
`

const Formulario = styled.form`
    width:100%;max-width: 490px;
    display: grid; place-items: center;
`

const InputForm = styled.input`
    background: transparent;
    padding: 15px 25px;
    border: 3px solid #E5E1E6;
    width: 100%;max-width: 490px;
    max-height:45px;

    &:nth-child(2){
        margin: 15px 0;
    }
`

const TextArea = styled.textarea`
    background: transparent;
    padding: 13px 25px;
    border: 3px solid #E5E1E6;
    min-width: 100%;max-width: 490px;
    max-height:70px;min-height:70px;
`

const ButtonForm = () => <input type="submit" value="Enviar Mensagem" className="botaoAcao" style={{marginTop: '25px'}}/>

const InputTextEmail= ({place = 'Infome seu nome', type = 'text'}) => <InputForm placeholder={place} type={type} required/>

const contato = () => {

    return (
        <>
            <Head>
                <title>Contate-nos</title>
                <meta name="description" content="Danke eventos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Svg/dankelogo.svg" />
            </Head>
            <Contato className='autoPadding fixedWidth'>
                
                <h1 className='titulo'>Contate-nos</h1> 
                
                <p style={{maxWidth: '375px', textAlign: 'center', margin: '25px 0 50px 0'}}>sinta-se à vontade para entrar em contato conosco e retornaremos o mais breve possível</p>
                
                <Formulario method="post">
                    <InputTextEmail place="Seu nome ou de sua empresa"/>
                    <InputTextEmail place="Seu endereço de e-mail" type={'email'} style={{margin: '15px 0'}}/>
                    <TextArea placeholder="Escreva sua mensagem"/>
                    <ButtonForm/>
                </Formulario>
                
                <p style={{marginTop: '50px',fontWeight: '700', textAlign: 'center', width: '100%',maxWidth: '425px'}}>
                    <Link href="https://wa.me/5521993401594" style={{marginRight: "15px"}}>+55 21 9 9340-1594</Link> <Link href='mailto:contato@dankeeventos.com.br' target="_blank">contanto@dankeeventos.com.br</Link>
                </p>
            </Contato>
        </>
    );
}

export default contato;