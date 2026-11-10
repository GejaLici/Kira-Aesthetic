import type { ServiceContent } from '@/lib/services';

const prpFaceContent: ServiceContent = {
    description: [
        "La terapia de Plasma Rico en Plaquetas (PRP) para el rostro, conocida popularmente como el 'Vampire Facial', es un tratamiento revolucionario de rejuvenecimiento cutáneo que utiliza el poder curativo de su propia biología. Al aislar las plaquetas concentradas de su sangre, ricas en factores de crecimiento esenciales, este procedimiento 100% natural activa la reparación de los tejidos profundos, estimula la producción de colágeno y acelera el proceso de renovación de la piel.",
        "A diferencia de los tratamientos sintéticos, el PRP trabaja desde el interior para mejorar la integridad estructural de la piel. Es una solución ideal para quienes buscan atenuar las líneas finas, suavizar las cicatrices del acné y recuperar un brillo juvenil y saludable. Al aprovechar las capacidades regenerativas innatas de su cuerpo, el Vampire Facial ofrece mejoras a largo plazo en la calidad, textura y firmeza de la piel sin riesgo de reacciones alérgicas."
    ],
    benefits: [
        "Rejuvenecimiento natural: Utiliza los componentes de su propia sangre, sin químicos sintéticos ni aditivos.",
        "Síntesis de colágeno: Aumenta la producción de colágeno Tipo I para una piel más firme y densa.",
        "Reparación de cicatrices y textura: Altamente eficaz para suavizar cicatrices de acné y refinar irregularidades cutáneas.",
        "Cutis radiante: Mejora el flujo sanguíneo y la renovación celular para un brillo saludable desde el interior.",
        "Seguro y biocompatible: Riesgo cero de rechazo o reacción alérgica al ser un tratamiento autólogo (de su propio cuerpo)."
    ],
    quickFacts: {
        procedureTime: '60 - 90 minutos',
        anesthesia: 'Crema anestésica tópica potente',
        recoveryTime: '24 - 48 horas de enrojecimiento leve (sensación de quemadura solar)',
        results: 'Luminosidad inicial en 1 semana; mejoras estructurales tras 4-6 semanas',
    },
    sections: [
        {
            id: 'science-of-prp',
            title: 'La Ciencia Detrás del Brillo',
            content: `
                <p>La eficacia de un Vampire Facial reside en la alta concentración de plaquetas entregadas directamente a la dermis:</p>
                <ul>
                    <li><strong>La Extracción:</strong> Se toma una pequeña muestra de sangre y se coloca en una centrifugadora especializada para separar el plasma de los glóbulos rojos.</li>
                    <li><strong>Factores de Crecimiento:</strong> El PRP resultante contiene de 5 a 10 veces la concentración de factores de crecimiento presentes en la sangre normal, los cuales actúan como "mensajeros" para activar el crecimiento celular.</li>
                    <li><strong>Sinergia con Microneedling:</strong> Utilizamos el microneedling para crear canales verticales en la piel, permitiendo que el PRP atraviese la barrera superficial y llegue a las capas regenerativas.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'Qué Esperar Durante su Sesión',
            content: `
                <p>Nuestro protocolo clínico está diseñado para la máxima comodidad y esterilidad:</p>
                <ol>
                    <li><strong>Anestesia y Extracción:</strong> Mientras la crema anestésica hace efecto, nuestro equipo médico realiza una extracción de sangre rápida y estándar.</li>
                    <li><strong>Procesamiento:</strong> Su sangre se procesa en el lugar utilizando una centrifugadora de alta precisión para aislar el "oro líquido" (PRP).</li>
                    <li><strong>Infusión:</strong> El PRP se aplica tópicamente mientras un dispositivo de microneedling de grado médico se desliza sobre la piel, introduciendo las plaquetas en los microcanales.</li>
                    <li><strong>Calma:</strong> Finalizamos con una aplicación del plasma restante para que actúe como una mascarilla curativa natural.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Recuperación y Longevidad de los Resultados',
            content: `
                <p>Dado que el tratamiento activa una respuesta de curación natural, seguir el cuidado posterior correcto es esencial:</p>
                <ul>
                    <li><strong>Las Primeras 24 Horas:</strong> Evite lavarse la cara o aplicar maquillaje para permitir que los factores de crecimiento sigan trabajando. Espere una apariencia similar a una quemadura solar.</li>
                    <li><strong>Hidratación y Protección:</strong> Utilice únicamente cremas hidratantes suaves aprobadas y evite la exposición solar directa durante al menos una semana.</li>
                    <li><strong>Resultados Óptimos:</strong> Aunque una sesión proporciona un refresco visible, solemos recomendar una serie de 3 tratamientos espaciados 4-6 semanas para una remodelación profunda de la piel.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Atención Premium para Pacientes Internacionales',
            content: `
                <p>Garantizamos un viaje fluido y cómodo para nuestra clientela global que busca un rejuvenecimiento natural de la piel:</p>
                <ul>
                    <li><strong>Soporte de Viaje:</strong> Asistencia con traslados al aeropuerto y alojamiento premium en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Seguimiento Regional:</strong> Puede elegir realizar sus sesiones posteriores en cualquiera de nuestras clínicas según su itinerario de viaje.</li>
                    <li><strong>Estándares Médicos:</strong> Todos los procedimientos de PRP son realizados por profesionales médicos certificados utilizando kits estériles de un solo uso y equipos autorizados por FDA/CE.</li>
                </ul>
            `
        }
    ]
};

export default prpFaceContent;