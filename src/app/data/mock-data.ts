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
        id: 1,
        nombre: 'CSS',
        descripcion: 'Prueba de conocimiento CSS',
        preguntas: [
            {
                id: 1,
                nombre: '¿Qué significa CSS?',
                temaId: 1,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 1,
                        nombre: 'Creative Style Sheets',
                        IdPregunta: 1,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 2,
                        nombre: 'Colorful Style Sheets',
                        IdPregunta: 1,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 3,
                        nombre: 'Cascading Style Sheets',
                        IdPregunta: 1,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 4,
                        nombre: 'Computer Style Sheets',
                        IdPregunta: 1,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 2,
                nombre: '¿Cuál es el HTML correcto para referenciar a una hoja de estilo externa?',
                temaId: 1,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 5,
                        nombre: '<stylesheet>mystyle.css</stylesheet>',
                        IdPregunta: 2,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 6,
                        nombre: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
                        IdPregunta: 2,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 7,
                        nombre: '<style src="mystyle.css">',
                        IdPregunta: 2,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 3,
                nombre: '¿Cuál es el lugar correcto para colocar la referencia a una hoja de estilo externa dentro de un documento HTML?',
                temaId: 1,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 8,
                        nombre: 'En la sección <head>',
                        IdPregunta: 3,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 9,
                        nombre: 'En la sección <body>',
                        IdPregunta: 3,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 10,
                        nombre: 'Al final del documento',
                        IdPregunta: 3,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 4,
                nombre: '¿Qué etiqueta HTML se utiliza para definir una hoja de estilo interna?',
                temaId: 1,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 11,
                        nombre: '<style>',
                        IdPregunta: 4,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 12,
                        nombre: '<script>',
                        IdPregunta: 4,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 13,
                        nombre: '<css>',
                        IdPregunta: 4,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 5,
                nombre: '¿Qué atributo HTML se usa para definir los estilos de línea?',
                temaId: 1,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 14,
                        nombre: 'styles',
                        IdPregunta: 5,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 15,
                        nombre: 'font',
                        IdPregunta: 5,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 16,
                        nombre: 'style',
                        IdPregunta: 5,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 17,
                        nombre: 'class',
                        IdPregunta: 5,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: 'JavaScript',
        descripcion: 'Prueba de conocimiento JavaScript',
        preguntas: [
            {
                id: 6,
                nombre: '¿Dentro de qué elemento HTML ponemos el JavaScript?',
                temaId: 2,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 18,
                        nombre: '<javascript>',
                        IdPregunta: 6,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 19,
                        nombre: '<js>',
                        IdPregunta: 6,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 20,
                        nombre: '<scripting>',
                        IdPregunta: 6,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 21,
                        nombre: '<script>',
                        IdPregunta: 6,
                        isRespuesta: true,
                        selecionada: false
                    },
                ]
            },
            {
                id: 7,
                nombre: '¿Dónde es el lugar correcto para insertar código JavaScript?',
                temaId: 2,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 21,
                        nombre: 'La sección <body>',
                        IdPregunta: 7,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 22,
                        nombre: 'Tanto la sección <head> como la sección <body> son correctas',
                        IdPregunta: 7,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 23,
                        nombre: 'La sección <head>',
                        IdPregunta: 7,
                        isRespuesta: false,
                        selecionada: false
                    }
                ]
            },
            {
                id: 8,
                nombre: '¿Cuál es la sintaxis correcta para referencia a un script externo llamado "xxx.js"?',
                temaId: 2,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 24,
                        nombre: '<script nombre="xxx.js">',
                        IdPregunta: 8,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 25,
                        nombre: '<script src="xxx.js">',
                        IdPregunta: 8,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 26,
                        nombre: '<script href="xxx.js">',
                        IdPregunta: 8,
                        isRespuesta: false,
                        selecionada: false
                    }
                ]
            },
            {
                id: 9,
                nombre: 'El archivo JavaScript externo debe contener la etiqueta <script>.',
                temaId: 2,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 27,
                        nombre: 'Si',
                        IdPregunta: 9,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 28,
                        nombre: 'No',
                        IdPregunta: 9,
                        isRespuesta: false,
                        selecionada: false
                    }
                ]
            },
            {
                id: 10,
                nombre: '¿Cómo se imprime "Hello World" en un cuadro de diálogo?',
                temaId: 2,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 29,
                        nombre: 'alertBox("Hello World");',
                        IdPregunta: 10,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 30,
                        nombre: 'msgBox("Hello World");',
                        IdPregunta: 10,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 31,
                        nombre: 'msg("Hello World");',
                        IdPregunta: 10,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 32,
                        nombre: 'alert("Hello World");',
                        IdPregunta: 10,
                        isRespuesta: true,
                        selecionada: false
                    }
                ]
            }
        ]
    },
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
    {
        id: 4,
        nombre: 'SQL',
        descripcion: 'Prueba de conocimiento SQL',
        preguntas: [
            {
                id: 16,
                nombre: '¿Qué significa SQL?',
                temaId: 4,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 47,
                        nombre: 'Strong Question Language',
                        IdPregunta: 16,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 48,
                        nombre: 'Structured Query Language',
                        IdPregunta: 16,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 49,
                        nombre: 'Structured Question Language',
                        IdPregunta: 16,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 17,
                nombre: '¿Qué declaración SQL se utiliza para extraer datos de una base de datos?',
                temaId: 4,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 50,
                        nombre: 'SELECT',
                        IdPregunta: 17,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 51,
                        nombre: 'GET',
                        IdPregunta: 17,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 52,
                        nombre: 'OPEN',
                        IdPregunta: 17,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 53,
                        nombre: 'EXTRACT',
                        IdPregunta: 17,
                        isRespuesta: false,
                        selecionada: false
                    },
                ]
            },
            {
                id: 18,
                nombre: '¿Qué declaración SQL se usa para actualizar datos en una base de datos?',
                temaId: 4,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 54,
                        nombre: 'SAVE AS',
                        IdPregunta: 18,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 55,
                        nombre: 'SAVE',
                        IdPregunta: 18,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 56,
                        nombre: 'MODIFY',
                        IdPregunta: 18,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 57,
                        nombre: 'UPDATE',
                        IdPregunta: 18,
                        isRespuesta: true,
                        selecionada: false
                    },
                ]
            },
            {
                id: 19,
                nombre: '¿Qué declaración SQL se utiliza para eliminar datos de una base de datos?',
                temaId: 4,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 58,
                        nombre: 'REMOVE',
                        IdPregunta: 19,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 59,
                        nombre: 'DELETE',
                        IdPregunta: 19,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 60,
                        nombre: 'COLLAPSE',
                        IdPregunta: 19,
                        isRespuesta: false,
                        selecionada: false
                    }
                ]
            },
            {
                id: 20,
                nombre: '¿Qué declaración SQL se usa para insertar nuevos datos en una base de datos?',
                temaId: 4,
                TipoPreguntaId: 1,
                respuestas: [
                    {
                        id: 44,
                        nombre: 'ADD RECORD',
                        IdPregunta: 20,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 45,
                        nombre: 'INSERT NEW',
                        IdPregunta: 20,
                        isRespuesta: false,
                        selecionada: false
                    },
                    {
                        id: 46,
                        nombre: 'INSERT INTO',
                        IdPregunta: 20,
                        isRespuesta: true,
                        selecionada: false
                    },
                    {
                        id: 46,
                        nombre: 'ADD NEW',
                        IdPregunta: 20,
                        isRespuesta: false,
                        selecionada: false
                    }
                ]
            }
        ]
    },
];