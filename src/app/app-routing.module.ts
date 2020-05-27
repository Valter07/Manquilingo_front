import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemaListComponent } from './pages/tema-list/tema-list.component';
import { TemaComponent } from './pages/quiz/tema.component';
import { TemaResultComponent } from './pages/tema-result/tema-result.component';
import { RespuestaListComponent } from './pages/respuesta-list/respuesta-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: TemaListComponent },
  { path: 'quiz/:id', component: TemaComponent },
  { path: 'tema/:id/results', component: TemaResultComponent },
  { path: 'tema/:id/respuestas', component: RespuestaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
