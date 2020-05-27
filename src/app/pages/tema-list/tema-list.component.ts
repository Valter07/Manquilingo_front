import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/services/tema.service';
import { Tema } from "src/app/models/tema";

@Component({
  selector: 'qz-quiz-list',
  templateUrl: './tema-list.component.html',
  styleUrls: ['./tema-list.component.css']
})
export class TemaListComponent implements OnInit {

  temas: Tema[];

  constructor(
    private temaService: TemaService
  ) { }

  ngOnInit() {
    this.temas = this.temaService.getTema();
  }
}
