import { Respuesta } from './respuesta';

export class Pregunta {
    id: number;
    temaId: number;
    nombre: string;
    TipoPreguntaId: number;
    respuestas: Respuesta[];
}