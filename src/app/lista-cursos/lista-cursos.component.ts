import { Component } from '@angular/core';
import { listacurso } from '../_modules/listacursos';
import { nivel } from '../_modules/nivel';
import { ServiciocursosService } from '../serviciocursos.service';
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  title = 'Ejercicio7-RepasoServiciosyRouting';
  curso : listacurso = new listacurso(0,"",0,nivel.alto)
  cursos : listacurso[]=[]
  ids : number = 0


    constructor(private serviciocursos : ServiciocursosService,
       ){
    this.cursos = this.serviciocursos.getcurso()
  }


  anadir(){
    this.serviciocursos.anadircurso(this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)

}
  eliminar(){
    this.serviciocursos.eliminarfacuta(this.ids)

  }
  buscar(){
    this.serviciocursos.buscarfactura(this.ids)
  }
  modificar(){
    this.serviciocursos.modificarcurso(this.ids, this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)
  }
  update(number:number){
    this.ids=number
    console.log(this.ids)

  }
}
