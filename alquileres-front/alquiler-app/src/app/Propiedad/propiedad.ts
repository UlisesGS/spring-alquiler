import { Usuario } from "../Usuario/usuario";

export class Propiedad {
    id:number;
    usuario:Usuario;
    ubicacion:string;
    foto:string[];
    precio:number;
    clientes:Usuario[];
  
  }