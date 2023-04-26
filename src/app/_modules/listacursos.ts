import { nivel } from "./nivel";

export class listacurso {

id: number = 0;
nombre: string = '';
duracion: number = 0;
nivel: nivel;

constructor(id:number,nombre:string,duracion:number,nivel:nivel) {

this.id= id;
this.nombre= nombre;
this.duracion= duracion;
this.nivel = nivel;

}
}
