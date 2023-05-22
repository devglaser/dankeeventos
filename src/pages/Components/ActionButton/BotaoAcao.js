import Link from "next/link";

const BotaoAcao = ({texto}) => {
    return (
        <Link href="https://wa.me/5521993401594" className="botaoAcao" title="Contrate nossos serviços" target="_blank">
            {texto}
        </Link>
    );
}

export default BotaoAcao;