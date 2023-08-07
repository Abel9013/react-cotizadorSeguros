import { useContext } from "react"
import CotizadorContext from "../context/CotizadorProvider"

const useCotizador = ()=>{
    useContext(CotizadorContext)

    return useContext(CotizadorContext)
}

export default useCotizador