import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemaListComponent } from './pages/tema-list/tema-list.component';
import { TemaComponent } from './pages/tema/tema.component';
import { TemaResultComponent } from './pages/tema-result/tema-result.component';
import { RespuestaListComponent } from './pages/respuesta-list/respuesta-list.component';
import { PartidaComponent } from './pages/partida/partida.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: PartidaComponent },
  { path: 'temalist', component: TemaListComponent },
  { path: 'tema/:id', component: TemaComponent },
  { path: 'tema/:id/results', component: TemaResultComponent },
  { path: 'tema/:id/respuestas', component: RespuestaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
