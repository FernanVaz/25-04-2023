import { Injectable } from '@angular/core';
import { listacurso } from './_modules/listacursos';
import { nivel } from './_modules/nivel';
@Injectable({
  providedIn: 'root'
})
export class ServiciocursosService {

  micurso:listacurso[]=[

    new listacurso (1, "Matematicas", 120, nivel.medio),
    new listacurso (2, "Lengua", 120, nivel.medio),
    new listacurso (3, "Conocimiento", 120, nivel.medio),
    new listacurso (4, "Administracion", 120, nivel.medio)

  ]


  constructor() { }
  getcurso():listacurso[]{
    return this.micurso
  }
  
  getcursobyid(ids : number){
    return this.micurso.find(curso => curso.id==ids)
  }

  anadircurso(curso:listacurso){
    this.micurso.push(curso)
  }
  buscarfactura(id:number){
    let dato = this.micurso.findIndex((micurso) => micurso.id === id);
    if(dato!==-1){
    alert("esete es el id " + this.micurso[dato].id)
    }

  }
  eliminarfacuta(id:number){
    let dato = this.micurso.findIndex((micurso) => micurso.id=== id)
    if(dato!==-1){
    this.micurso.splice(dato, 1)
    }

  }
  modificarcurso(id:number, nuevafactura:listacurso){

    let dato = this.micurso.findIndex((micurso) => micurso.id==id)
    if(dato!=-1){
    this.micurso[dato]=nuevafactura

  }
}
}
