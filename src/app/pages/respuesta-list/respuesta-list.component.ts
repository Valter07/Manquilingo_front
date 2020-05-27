import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemaService } from 'src/app/services/tema.service';
import { Tema } from 'src/app/models/tema';

@Component({
  selector: 'qz-answer-list',
  templateUrl: './respuesta-list.component.html',
  styleUrls: ['./respuesta-list.component.css']
})
export class RespuestaListComponent implements OnInit {

  tema: Tema;
  totalPreguntas: number;
  puntaje: number;

  constructor(
    private route: ActivatedRoute,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.getTemaById(+p['id']);
    });
  }

  getTemaById(id: number) {
    this.tema = this.temaService.getTemaById(id);
    this.totalPreguntas = this.tema.preguntas.length;
    this.puntaje = this.temaService.getPuntaje(this.tema.preguntas);
  }
}