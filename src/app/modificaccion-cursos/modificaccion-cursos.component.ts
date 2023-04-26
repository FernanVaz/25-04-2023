import { Component } from '@angular/core';
import { listacurso } from '../_modules/listacursos';
import { nivel } from '../_modules/nivel';
import { ServiciocursosService } from '../serviciocursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificaccion-cursos',
  templateUrl: './modificaccion-cursos.component.html',
  styleUrls: ['./modificaccion-cursos.component.css']
})
export class ModificaccionCursosComponent {
  curso : listacurso = new listacurso(0,"",0,nivel.alto)
  cursos : listacurso[]=[]
  ids : number = 0


  constructor(private serviciocursos: ServiciocursosService,
    private activarrutas : ActivatedRoute,
    private rutes : Router){
      this.cursos=this.serviciocursos.getcurso()
    }


  ngOnInit(): void {

    this.activarrutas.params.subscribe(data => {
    this.ids = data['id'];
    if(this.ids != 0)
    this.curso = this.serviciocursos.getcursobyid(this.ids)!;
  })
  }

  anadir(){
    this.serviciocursos.modificarcurso(this.ids, this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)
    }
  alta(){
    this.serviciocursos.anadircurso(this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)
  }
}
