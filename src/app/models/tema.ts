import { Pregunta } from './pregunta';

export class Tema {
    id: number;
    nombre: string;
    descripcion: string;
    preguntas: Pregunta[];
}