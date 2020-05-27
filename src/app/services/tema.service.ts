import { Injectable } from '@angular/core';
import { TEMA} from '../data/mock-data';
import { Tema } from '../models/tema';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor() { }

  getTema(): Tema[] {
    return TEMA;
  }

  getTemaById(id: number): Tema {
    return this.getTema().filter(q => q.id === id)[0] || null;
  }

  getPuntaje(pregunta: Pregunta[]) {
    let cont = 0;

    pregunta.forEach(q => {
      q.respuestas.forEach(a => {
        if(a.selecionada && a.isRespuesta) {
          cont++;
        }
      });
    });

    return cont;
  }

}