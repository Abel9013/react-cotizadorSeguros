import {useState, createContext} from "react"

const CotizadorContext = createContext() //Context creado

const CotizadorProvider = ({children})=>{
    
    const [datos, setDatos] = useState({
        marca:"",
        year:"",
        plan:"",
    })
    const [error, setError] = useState('')
    const handleChangeDatos = e =>  {
        setDatos({
            ...datos,
            [e.target.name]:e.target.value,
        })
    
    }

    return(
        <CotizadorContext.Provider
        value= {{
            handleChangeDatos,
            datos,
            error,
            setError
        }}    
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext

/*
1) Creo en mi carpeta context, el archivo CotizadorProvider
2) En el archivo importo: import {createContext} from "react", createContext: Sirve para crear un context
*Se recomienda que el provider y el context tengan el mismo nombre
3) const CotizadorContext = createContext(), llamo la f. createContext en una variable, ya el cotizadorContext tiene el context creado
4) Creamos el Provider(lugar donde vamos a definir el state, donde podemos tener algunos effects y crear f. ), provider es  de donde nacen los datos, de donde vienen.  <CotizadorContext.Provider>
            {children}
        </CotizadorContext.Provider>
5) Debo poner el value:         
<CotizadorContext.Provider
        value= {{}}    
>
6) Poner los export:
export {
    CotizadorProvider
}
export default CotizadorContext
7) Importo el provider en el app
8) En app, lo ubico de la siguiente manera: 
<Provider>App</Provider>
*/ 