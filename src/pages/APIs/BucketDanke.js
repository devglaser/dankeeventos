import axios from "axios";
import { useState, useEffect } from "react";

const BucketDanke = () => {
  const URL_API = "https://firebasestorage.googleapis.com/v0/b/danke-eventos.appspot.com/o/"
  const [data,setData] = useState('')

  useEffect(()=>{
    ;( async ()=>{
      try {
        const response = await axios.get(URL_API)
        const result = response.data.items
        setData(result)
      } catch (error) {
        console.log(error)
      }
    })()
  },[])

  return [data]
}

export default BucketDanke;