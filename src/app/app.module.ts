import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RespuestaListComponent } from './pages/respuesta-list/respuesta-list.component';
import { TemaComponent } from './pages/quiz/tema.component';
import { TemaListComponent } from './pages/tema-list/tema-list.component';
import { TemaResultComponent } from './pages/tema-result/tema-result.component';
import { TemaService } from './services/tema.service';
import { TimerService } from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    RespuestaListComponent,
    TemaComponent,
    TemaListComponent,
    TemaResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TemaService,
    TimerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
