export interface Municipio {
    codigo:number
    nombre:string
}

export interface Region {
    codigo:number;
    nombre:string;
    municipios: Municipio[]
  
  }