import {Fragment} from "react"
import { MARCAS, YEARS, PLANES } from "../constants/index"
import useCotizador from "../hooks/useCotizador"
import { Error } from "./Error"
/*
 Usando el context
    1)Importo: import {useContext} from "react", hook al que una vez que le  doy el contexto puedo acceder a mis variables.
    2)Importo mi context, en este caso CotizadorContext
    3) En mi programa, antes del return uso el useContext indicandole el provider para acceder a mis variables, en este caso variable hola.
    const { hola }=useContext(CotizadorContext)  */ 
const Formulario = () => {
            const{ datos, handleChangeDatos, error, setError, cotizarSeguro  } = useCotizador()
    
    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        cotizarSeguro()
    }
      
return (
    <>
        {error &&  <Error />}
        <form 
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select name="marca" className="w-full p-3 bg-white border border-gray-200"
                onChange={ e => handleChangeDatos(e)
                }
                value={datos.marca}
                >
                    <option value="" className="text-center">--Seleccione Marca--</option>
                    {MARCAS.map( marca => (
                        <option key={marca.id} className="text-center" value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                <select name="year" 
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={ e => handleChangeDatos(e)}
                    value={datos.year}
                >
                    <option value="" className="text-center">--Seleccione Año--</option>
                    {YEARS.map( year => (
                        <option key={year} className="text-center" value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Elige un Plan</label>
               <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={ e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
               </div>
            </div>
            <input
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                value="COTIZAR"
            />
        </form>
    </>
  )
}

export default Formulario