import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ModificaccionCursosComponent } from './modificaccion-cursos/modificaccion-cursos.component';
const routes: Routes = [
  {path:"",component:ListaCursosComponent,children:
    [
      {path:"aniadir",component:ModificaccionCursosComponent},
      {path:"modificar/:id", component:ModificaccionCursosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
