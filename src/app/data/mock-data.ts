import { Quiz } from '../models/quiz';
import { QuestionType } from '../models/question-type';

const QUESTIONTYPE: QuestionType[] = [
    {
        id: 1,
        name: 'unique answer'
    }
];

export const QUIZ: Quiz[] = [
    {
        id: 3,
        name: 'HTML',
        description: 'Prueba de conocimiento HTML',
        questions: [
            {
                id: 11,
                name: '¿Qué significa HTML?',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 33,
                        name: 'Hyperlinks and Text Markup Language',
                        questionId: 11,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 34,
                        name: 'Hyper Text Markup Language',
                        questionId: 11,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 35,
                        name: 'Home Tool Markup Language',
                        questionId: 11,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 12,
                name: '¿Quién está haciendo los estándares web?',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 36,
                        name: 'Mozilla',
                        questionId: 12,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 37,
                        name: 'The World Wide Web Consortium',
                        questionId: 12,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 38,
                        name: 'Microsoft',
                        questionId: 12,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 39,
                        name: 'Google',
                        questionId: 12,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 13,
                name: 'Elija el elemento HTML correcto para el encabezado más grande:',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 40,
                        name: '<head>',
                        questionId: 13,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 41,
                        name: '<h6>',
                        questionId: 13,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 42,
                        name: '<h1>',
                        questionId: 13,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 43,
                        name: '<heading>',
                        questionId: 13,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 14,
                name: '¿Cuál es el elemento HTML correcto para insertar un salto de línea?',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 44,
                        name: '<break>',
                        questionId: 14,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 45,
                        name: '<lb>',
                        questionId: 14,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 46,
                        name: '<br>',
                        questionId: 14,
                        isAnswer: true,
                        selected: false
                    }
                ]
            },
            {
                id: 15,
                name: 'Elija el elemento HTML correcto para definir el texto importante',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 44,
                        name: '<i>',
                        questionId: 15,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 45,
                        name: '<b>',
                        questionId: 15,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 46,
                        name: '<strong>',
                        questionId: 15,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 46,
                        name: '<important>',
                        questionId: 15,
                        isAnswer: false,
                        selected: false
                    }
                ]
            }
        ]
    },
   
];