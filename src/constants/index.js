export const MARCAS = [
  { id:1, nombre:"EUROPEO"},
  { id:2, nombre:"AMERICANO"},
  { id:3, nombre:"ASIATICO"},

];
const YEARMAX  = new Date().getFullYear()
export const YEARS = Array.from(new Array(20), (valor,index) =>YEARMAX - index )

export const PLANES = [
  { id:1, nombre:"Basico"},
  { id:2, nombre:"Intermedio"},
  { id:3, nombre:"Completo"},

];