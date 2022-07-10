import bcrypt from "bcryptjs";

// Interaaces
import { IModulo } from "../interfaces";

interface SeedGrade {
  module1?: number[];
  module2?: number[];
  module3?: number[];
}

interface SeedAnswers {
  module1?: [number[]?, number[]?, number[]?, number[]?, number[]?, number[]?];
  module2?: [number[]?, number[]?, number[]?, number[]?];
  module3?: [
    number[]?,
    number[]?,
    number[]?,
    number[]?,
    number[]?,
    number[]?,
    number[]?
  ];
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "teacher";
  grades?: SeedGrade;
  answers?: SeedAnswers;
}

interface SeedData {
  users: SeedUser[];
  modulos: IModulo[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Juan Camilo Ramírez",
      email: "jcramirezr@correo.udistrital.edu.co",
      password: bcrypt.hashSync("123456"),
      role: "admin",
    },
    {
      name: "Teacher 1",
      email: "teacher1@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      grades: {
        module1: [1, 2, 3, 4, 5, 5],
      },
      answers: {
        module1: [[1, 2, 3]],
      },
    },
    {
      name: "Teacher 2",
      email: "teacher2@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      grades: {
        module1: [1, 2, 3, 4, 5, 5],
        module2: [1, 2],
      },
      answers: {
        module1: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        module2: [
          [1, 2, 3],
          [1, 2, 3],
        ],
      },
    },
    {
      name: "Teacher 3",
      email: "teacher3@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      grades: {
        module1: [1, 2, 3, 4, 5, 5],
        module2: [1, 2, 3, 4],
        module3: [1, 2, 3, 4, 5, 5, 5],
      },
      answers: {
        module1: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        module2: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        module3: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
      },
    },
    {
      name: "Teacher 4",
      email: "teacher4@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
      grades: {
        module1: [1, 2, 3, 4, 5, 5],
        module2: [1, 2, 3, 4],
        module3: [1, 2, 3, 4, 5],
      },
      answers: {
        module1: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        module2: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
        module3: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
      },
    },
  ],
  modulos: [
    {
      name: "Introducción al pensamiento computacional",
      descripcion: "Bases del pensamiento computacional",
      keyWords: [
        "Principiante",
        "Estudiante",
        "Programación",
        "Algoritmo",
        "VIRTUS",
      ],
      goals: [
        "Entender conceptualmente que es el pensamiento computacional",
        "Analizar los objetivos del pensamiento computacional y sus características",
        "Abarcar las bases del pensamiento computacional en la programación",
      ],
      requirements: ["Sin requerimientos previos"],
      content: [
        {
          name: "Definición del pensamiento computacional",
          to: "1-introduction",
          description:
            "Conjunto de habilidades de abstracción y las técnicas de resolución de problemas utilizados por los científicos e ingenieros de la computación.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "http://www.pensamientocomputacional.org/index.php/curso-pc",
          time: 15,
          test: {
            name: "Test introductorio I",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Propósito y objetivos del pensamiento computacional",
          to: "1-goals",
          description:
            "Pensamiento computacional y el fortalecimiento de habilidades.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "http://seer.upf.br/index.php/rep/article/view/8702/114114609",
          time: 15,
          test: {
            name: "Test introductorio II",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Contextualización",
          to: "1-context",
          description:
            "Pensamiento computacional en la ciencia. Pensamiento computacional como proceso de pensamiento en la formulación de problemas.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "http://www.pensamientocomputacional.org/index.php/curso-pc",
          time: 15,
          test: {
            name: "Test introductorio III",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Características del pensamiento computacional",
          to: "1-features",
          description:
            "Análisis de las características del pensamiento computacional, una mirada de retroalimentación que envuelve las matices que definen el pensamiento computacional.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "https://tiposdepensamiento.com/pensamiento-computacional/",
          time: 15,
          test: {
            name: "Test introductorio IV",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Ecologías del aprendizaje",
          to: "1-learning-ecologies",
          description:
            "Ofrecer una perspectiva al público objetivo del pensamiento computacional desde  perspectivas socioconstructivas que analizen los diseños curriculares.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Jesús V. Berrocoso, María R. Sánchez, María G. Arroyo (2009). El pensamiento computacional y las nuevas ecologías del aprendizaje",
          time: 15,
          test: {
            name: "Test introductorio V",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Introducción a la conceptualización de la programación",
          to: "1-programming-conceptualization",
          description:
            "Interpretar el estado de transición del pensamiento complejo al pensamiento computacional.",
          modulo: "Introducción al pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Jorge A. Balladares Burgos, Mauro R. Avilés Salvador, Hamilton O. Pérez Narváez. (2016) Del pensamiento complejo al pensamiento computacional: retos para la educación contemporánea.",
          time: 15,
          test: {
            name: "Test introductorio VI",
            modulo: "Introducción al pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
      ],
    },
    {
      name: "Cuatro pilares fundamentales del pensamiento computacional",
      descripcion:
        "Análisis a: Descomposición, Reconocimiento de patrones, Pensamiento algorítmico, Abstracción",
      keyWords: [
        "Intermedio",
        "Estudiante",
        "Pilares",
        "Computación",
        "VIRTUS",
      ],
      goals: [
        "Aprender a reconocer los 4 pilares del pensamiento computacional",
        "Entender la descomposición de un problema",
        "Conocer el proceso de reconocimiento de patrones",
        "Analizar el pensamiento algorítmico",
        "Entender la abstracción en el pensamiento computacional",
      ],
      requirements: [
        "Completar exitosamente el modulo introductorio del curso.",
      ],
      content: [
        {
          name: "Descomposición",
          to: "2-descomposition",
          description:
            "La descomposición busca romper un problema complejo en partes más simples que sean fáciles de entender.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Karl Beecher. (2017) Computational Thinking. A beginner's guide to problem-solving and programming.",
          time: 15,
          test: {
            name: "Test intermedio I",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Reconocimiento de patrones",
          to: "2-recognition-of-patterns",
          description:
            "Concentra algoritmos, metodologías, teorías y sistemas que permiten diferenciar, asociar y clasificar datos de forma automatizada.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "http://www.pensamientocomputacional.org/index.php/curso-pc",
          time: 15,
          test: {
            name: "Test intermedio II",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Pensamiento algorítmico",
          to: "2-algorithm-thinking",
          description:
            "Los algoritmos son uno de los tópicos principales del pensamiento computacional porque representan las soluciones a nivel conceptual en el proceso de resolución de problemas.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Karl Beecher. (2017) Computational Thinking. A beginner's guide to problem-solving and programming.",
          time: 15,
          test: {
            name: "Test intermedio III",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Abstracción",
          to: "2-abstraction",
          description:
            "La abstracción es el filtro utilizado para quedarse con lo que se considera esencial, eliminando toda la complejidad innecesaria.",
          modulo: "Cuatro pilares fundamentales del pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Karl Beecher. (2017) Computational Thinking. A beginner's guide to problem-solving and programming.",
          time: 15,
          test: {
            name: "Test intermedio IV",
            modulo:
              "Cuatro pilares fundamentales del pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
      ],
    },
    {
      name: "Pilares complementarios y técnicas de pensamiento computacional",
      descripcion:
        "Análisis a los pilares complementarios del pensamiento computacional e introducción a las técnicas de pensamiento computacional.",
      keyWords: [
        "Avanzado",
        "Estudiante",
        "Técnicas",
        "Complementario",
        "VIRTUS",
      ],
      goals: [
        "Reconocer los pilares complementarios del pensamiento computacional",
        "Entender las técnicas de pensamiento computacional",
        "Practicar las técnicas de pensamiento computacional",
      ],
      requirements: ["Completar exitosamente el modulo intermedio del curso."],
      content: [
        {
          name: "Depuración",
          to: "3-debugging",
          description:
            "Esta habilidad consiste en la capacidad de analizar un problema y discriminar la información no relevante o que no aporta valor al planteamiento de una solución.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Xabier B. Olabe, Miguel Á. Olabe Basogain, Juan C. Olabe Basogain - Pensamiento Computacional a través de la Programación: Paradigma de Aprendizaje.",
          time: 15,
          test: {
            name: "Test avanzado I",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Pensamiento lógico",
          to: "3-logic-thinking",
          description:
            "Habilidad de identificar con que se cuenta y que se necesita para poder resolver un problema.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Xabier B. Olabe, Miguel Á. Olabe Basogain, Juan C. Olabe Basogain - Pensamiento Computacional a través de la Programación: Paradigma de Aprendizaje.",
          time: 15,
          test: {
            name: "Test avanzado II",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Reflexión",
          to: "3-reflection",
          description:
            "Habilidad de establecer juicios de valor sobre los resultados de las decisiones tomadas en la solución de problemas complejos.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Xabier B. Olabe, Miguel Á. Olabe Basogain, Juan C. Olabe Basogain - Pensamiento Computacional a través de la Programación: Paradigma de Aprendizaje.",
          time: 15,
          test: {
            name: "Test avanzado III",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Codificación",
          to: "3-coding",
          description:
            "Técnica aplicada para los sistemas de información en entornos virtuales, que subyacen a partir del modelamiento del problema traducido en codificación y productos de software que soportan variaciones en los requerimientos iniciales de la problemática inicial.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado IV",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Diseño",
          to: "3-design",
          description:
            "Técnica que se enfoca en trabajar la estructura y funcionalidad de los componentes, de manera que sea legible y entendible por otras personas.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado V",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Analizar",
          to: "3-analyze",
          description:
            "Consiste en un conjunto de los pilares fundamentales y complementarios mencionados anteriormente (descomposición, depuración y abstracción), el cual tiene como propósito la identificación de los algoritmos y/o generalizaciones que se puedan procesar mediante pensamiento algorítmico.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado VI",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
        {
          name: "Aplicar",
          to: "3-apply",
          description:
            "Esta técnica consta de usar soluciones preexistentes que pueden o no partir del conocimiento empírico o colaborativo de problemas semejantes bajo circunstancias parecidas.",
          modulo:
            "Pilares complementarios y técnicas de pensamiento computacional",
          exp: 100,
          content: "In process",
          bibliography:
            "Miguel Zapata-Ros - Pensamiento computacional: Una nueva alfabetización digital.",
          time: 15,
          test: {
            name: "Test avanzado VII",
            modulo:
              "Pilares complementarios y técnicas de pensamiento computacional",
            questions: [
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
              {
                question: "¿Qué es el pensamiento computacional?",
                answers: ["A", "B", "C", "D"],
                correct: 3,
              },
            ],
            exp: 100,
          },
        },
      ],
    },
  ],
};
