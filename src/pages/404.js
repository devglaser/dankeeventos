import { useEffect } from "react";

const Ops = () => {
    
    useEffect(()=>{
        ;(()=>{
            window.location.replace('./')
        })()
    }, [])

    return (
        <div>
            Página não encontrada...
        </div>
    );
}

export default Ops;