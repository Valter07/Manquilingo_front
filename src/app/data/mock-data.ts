import { Tema } from "../models/tema";
import { TipoPregunta } from '../models/tipo-pregunta';

const TIPOPREGUNTA: TipoPregunta[] = [
    {
        id: 1,
        nombre: 'unique answer'
    }
];

export const TEMA: Tema[] = [
    {
        id: 3,
        nombre: 'HTML',
        descripcion: 'Prueba de conocimiento HTML',
        preguntas: [
            {
                id: 11,
                nombre: '¿Qué significa HTML?',
                temaId: 3,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 33,
                        nombre: 'Hyperlinks and Text Markup Language',
                        IdPregunta: 11,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 34,
                        nombre: 'Hyper Text Markup Language',
                        IdPregunta: 11,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 35,
                        nombre: 'Home Tool Markup Language',
                        IdPregunta: 11,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 12,
                nombre: '¿Quién está haciendo los estándares web?',
                temaId: 3,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 36,
                        nombre: 'Mozilla',
                        IdPregunta: 12,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 37,
                        nombre: 'The World Wide Web Consortium',
                        IdPregunta: 12,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 38,
                        nombre: 'Microsoft',
                        IdPregunta: 12,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 39,
                        nombre: 'Google',
                        IdPregunta: 12,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 13,
                nombre: 'Elija el elemento HTML correcto para el encabezado más grande:',
                temaId: 3,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 40,
                        nombre: '<head>',
                        IdPregunta: 13,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 41,
                        nombre: '<h6>',
                        IdPregunta: 13,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 42,
                        nombre: '<h1>',
                        IdPregunta: 13,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 43,
                        nombre: '<heading>',
                        IdPregunta: 13,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 14,
                nombre: '¿Cuál es el elemento HTML correcto para insertar un salto de línea?',
                temaId: 3,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 44,
                        nombre: '<break>',
                        IdPregunta: 14,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 45,
                        nombre: '<lb>',
                        IdPregunta: 14,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 46,
                        nombre: '<br>',
                        IdPregunta: 14,
                        isRespuesta: true,
                        selecionada: false
                    }
                ]
            },
            {
                id: 15,
                nombre: 'Elija el elemento HTML correcto para definir el texto importante',
                temaId: 3,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 44,
                        nombre: '<i>',
                        IdPregunta: 15,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 45,
                        nombre: '<b>',
                        IdPregunta: 15,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 46,
                        nombre: '<strong>',
                        IdPregunta: 15,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 46,
                        nombre: '<important>',
                        IdPregunta: 15,
                        isRespuesta: false,
                        selecionada: false
                    }
                ]
            }
        ]
    },
   
];