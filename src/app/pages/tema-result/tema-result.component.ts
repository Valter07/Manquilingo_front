import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TemaService } from 'src/app/services/tema.service';
import { Tema } from 'src/app/models/tema';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'qz-quiz-result',
  templateUrl: './tema-result.component.html',
  styleUrls: ['./tema-result.component.css']
})
export class TemaResultComponent implements OnInit {

  tema: Tema;
  totalPreguntas: number;
  puntaje: number;
  duracion: string;

  constructor(
    private route: ActivatedRoute,
    private temaService: TemaService,
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.tema = this.temaService.getTemaById(+p['id']);
      this.totalPreguntas = this.tema.preguntas.length;
      this.puntaje = this.temaService.getPuntaje(this.tema.preguntas);
      this.duracion = this.timerService.getTime();
    });
  }

}
