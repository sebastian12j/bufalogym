
export const gruposmusculares =
    [
        {
            
            nombre: "Rutina de Bíceps",
            duracion: "30 minutos",
            descripcion: "Ejercicios específicos para fortalecer los bíceps...",
            videoURL: "https://www.youtube.com/watch?v=N0ss1-swvac",
            explicacion: "Esta rutina se enfoca en el desarrollo de los bíceps...",
            ejercicios: [
                 {
                    id:"1",
                    musculo:"biceps",
                    nombre: "Curl con Mancuerna",
                    repeticiones: "3 series de 10 repeticiones",
                    tips: "Mantén el codo pegado al cuerpo para mayor efectividad."
                },
                {
                     id:"2",
                    musculo:"biceps",
                    nombre: "Curl con Barra",
                    repeticiones: "4 series de 8 repeticiones",
                    tips: "Evita balancear el cuerpo para aislar el músculo."
                },
                 {
                     id:"3",
                    musculo:"biceps",
                    nombre: "Curl en Predicador",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "Controla el movimiento para evitar sobrecargar los tendones."
                }
            ]
        },
       {
            nombre: "Rutina de Tríceps",
            duracion: "25 minutos",
            descripcion: "Ejercicios para trabajar la parte trasera del brazo...",
            videoURL: "https://www.youtube.com/watch?v=62gZo7rji7o",
            explicacion: "Esta rutina ayuda a fortalecer los tríceps...",
            ejercicios: [
                 {
                     id:"4",
                    musculo:"Tríceps",
                    nombre: "Extensión con Mancuerna",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "Realiza el movimiento lentamente para activar el tríceps."
                },
                {
                    id:"5",
                    musculo:"Tríceps",
                    nombre: "Fondos en Banco",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "Evita balancear el cuerpo; mantén la espalda recta."
                },
                 {
                    id:"6",
                    musculo:"Tríceps",
                    nombre: "Press Francés",
                    repeticiones: "3 series de 10 repeticiones",
                    tips: "Baja la barra lentamente para controlar la carga."
                }
            ]
        },
        {
            nombre: "Rutina de Espalda",
            duracion: "35 minutos",
            descripcion: "Rutina de ejercicios para fortalecer la espalda...",
            videoURL: "https://www.youtube.com/watch?v=wRJM4soQGVs",
            explicacion: "Esta rutina se centra en la activación de los músculos de la espalda...",
            ejercicios: [
                {   
                    id:"7",
                    musculo:"Espalda",
                    nombre: "Jalón al Pecho",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "Tira hacia el pecho manteniendo la espalda recta."
                },
                {
                    id:"8",
                    musculo:"Espalda",
                    nombre: "Remo con Mancuerna",
                    repeticiones: "4 series de 8 repeticiones",
                    tips: "Mantén el torso ligeramente inclinado hacia adelante."
                },
                {
                    id:"9",
                    musculo:"Espalda",
                    nombre: "Pull Over",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "No sobreextiendas los brazos para evitar el estrés en los hombros."
                }
            ]
        },
       {
            nombre: "Rutina de Pecho",
            duracion: "30 minutos",
            descripcion: "Ejercicios enfocados en desarrollar el pecho...",
            videoURL: "https://www.youtube.com/watch?v=VB09kLgJDo0",
            explicacion: "Una rutina pensada para activar y fortalecer los pectorales...",
            ejercicios: {
                press_banca: {
                    nombre: "Press en Banca",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "Controla la bajada de la barra para mayor eficacia."
                },
                apertura_mancuernas: {
                    nombre: "Apertura con Mancuernas",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "No dejes caer las mancuernas, controla todo el movimiento."
                },
                press_inclinado: {
                    nombre: "Press Inclinado",
                    repeticiones: "4 series de 8 repeticiones",
                    tips: "Inclina el banco a 45 grados para una activación óptima."
                }
            }
        },
         {
            nombre: "Rutina de Piernas",
            duracion: "40 minutos",
            descripcion: "Ejercicios que fortalecen y tonifican las piernas...",
            videoURL: "https://www.youtube.com/watch?v=2mxH4WfnWwc",
            explicacion: "Rutina completa para trabajar todos los músculos de las piernas...",
            ejercicios: [
                {
                    id:"10",
                    musculo:"Piernas",
                    nombre: "Sentadilla",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "Mantén la espalda recta y baja hasta 90 grados."
                },
                {
                     id:"11",
                    musculo:"Piernas",
                    nombre: "Prensa de Piernas",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "No estires completamente las rodillas para proteger las articulaciones."
                },
                 {
                     id:"12",
                    musculo:"Piernas",
                    nombre: "Desplantes",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "Mantén el torso recto y da pasos largos para mayor activación."
                }
            ]
        }
    
    ]


    export const ejercicios =
    [
        
         
                 {
                    id:"1",
                    musculo:"biceps",
                    nombre: "Curl con Mancuerna",
                    repeticiones: "3 series de 10 repeticiones",
                    tips: "Mantén el codo pegado al cuerpo para mayor efectividad."
                 },{

                     id:"2",
                    musculo:"biceps",
                    nombre: "Curl con Barra",
                    repeticiones: "4 series de 8 repeticiones",
                    tips: "Evita balancear el cuerpo para aislar el músculo."
                },{
                     id:"3",
                    musculo:"biceps",
                    nombre: "Curl en Predicador",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "Controla el movimiento para evitar sobrecargar los tendones."
         
          
                },{
                     id:"4",
                    musculo:"Tríceps",
                    nombre: "Extensión con Mancuerna",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "Realiza el movimiento lentamente para activar el tríceps."
                },{
                    id:"5",
                    musculo:"Tríceps",
                    nombre: "Fondos en Banco",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "Evita balancear el cuerpo; mantén la espalda recta."
                },{
                    id:"6",
                    musculo:"Tríceps",
                    nombre: "Press Francés",
                    repeticiones: "3 series de 10 repeticiones",
                    tips: "Baja la barra lentamente para controlar la carga."
                },{ 
                    id:"7",
                    musculo:"Espalda",
                    nombre: "Jalón al Pecho",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "Tira hacia el pecho manteniendo la espalda recta."
                },{
                    id:"8",
                    musculo:"Espalda",
                    nombre: "Remo con Mancuerna",
                    repeticiones: "4 series de 8 repeticiones",
                    tips: "Mantén el torso ligeramente inclinado hacia adelante."
                },{
                    id:"9",
                    musculo:"Espalda",
                    nombre: "Pull Over",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "No sobreextiendas los brazos para evitar el estrés en los hombros."
                },{
                    id:"10",
                    musculo:"Piernas",
                    nombre: "Sentadilla",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "Mantén la espalda recta y baja hasta 90 grados."
                },{
                     id:"11",
                    musculo:"Piernas",
                    nombre: "Prensa de Piernas",
                    repeticiones: "4 series de 10 repeticiones",
                    tips: "No estires completamente las rodillas para proteger las articulaciones."
                },{
                     id:"12",
                    musculo:"Piernas",
                    nombre: "Desplantes",
                    repeticiones: "3 series de 12 repeticiones",
                    tips: "Mantén el torso recto y da pasos largos para mayor activación."
                }
            ]
        
    
    
