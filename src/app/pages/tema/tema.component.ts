import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from 'src/app/services/tema.service';
import { Tema } from 'src/app/models/tema';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'qz-quiz',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  temaId: number;
  tema: Tema;
  paginaPregunta: number = 0;
  preguntasFiltradas: Pregunta[] = [];
  tiempo: string;
  tiempoHandler: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private temaService: TemaService,
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.temaId = +p['id'];
      this.getTemaById(this.temaId);
      this.getTime();
    });
  }

  getTemaById(id: number) {
    this.tema = this.temaService.getTemaById(id);
    this.preguntasFiltradas = this.getPreguntasFiltradas(0);
  }

  goTo(position: number) {
    if(position > 0) {
      this.paginaPregunta++;
      if(this.paginaPregunta === this.tema.preguntas.length) {
        this.stopTime();
        this.router.navigate(['tema', this.temaId, 'results']);
        return;
      } 
    }
    else {
      this.paginaPregunta--;
    }
    
    this.preguntasFiltradas = this.getPreguntasFiltradas(this.paginaPregunta);
  }

  getTime() {
    let start = Date.now();
    this.tiempoHandler = setInterval(() => {
      this.timerService.setTime(start);
      this.tiempo = this.timerService.getTime();
    }, 1000);
  }

  stopTime() {
    clearInterval(this.tiempoHandler);
  }

  getPreguntasFiltradas(position: number) {
    let pregunta = this.tema.preguntas[position];
    return this.tema.preguntas.filter(q => q.id == pregunta.id);
  }

  selectRespuesta(pregunta: Pregunta, respuesta: Respuesta) {
    pregunta.respuestas.forEach(a => { if (a.id != respuesta.id){ a.selecionada = false }});
  }

}