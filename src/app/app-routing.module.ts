import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionComponent } from './components/editar-expe/edicion.component';

const routes: Routes =[
  { path: 'editexp/:id', component: EdicionComponent}

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
