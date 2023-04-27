import { useState } from "react";

const Language = () => {
    const [lang, setLang] = useState('pt-br')

    return [lang,setLang]
}

export default Language;