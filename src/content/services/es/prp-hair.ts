import type { ServiceContent } from '@/lib/services';

const prpHairContent: ServiceContent = {
    description: [
        "La terapia de Plasma Rico en Plaquetas (PRP) es una solución innovadora y no quirúrgica para la restauración del cabello que utiliza el poder regenerativo de su propia sangre. Esta forma de medicina biológica aborda la causa raíz del adelgazamiento capilar al entregar una alta concentración de factores de crecimiento directamente a los folículos pilosos inactivos o debilitados. Al 'despertar' estos folículos, el PRP ayuda a frenar la caída activa y activa el crecimiento de hebras más gruesas y resistentes.",
        "Ideal tanto para hombres como para mujeres en etapas tempranas o moderadas de pérdida de cabello o alopecia androgénica, la terapia PRP ofrece una alternativa completamente natural a los fármacos sintéticos o la cirugía invasiva. Dado que el tratamiento utiliza su propio plasma, es excepcionalmente seguro y biocompatible, proporcionando un camino respaldado científicamente para recuperar la densidad capilar y la salud del cuero cabelludo."
    ],
    benefits: [
        "Estimulación natural del folículo: Utiliza factores de crecimiento para prolongar la 'fase de crecimiento' del ciclo capilar.",
        "Aumento de la densidad: Promueve el incremento del diámetro de cada hebra para un aspecto más poblado.",
        "Frena la caída: Reduce eficazmente la pérdida activa de cabello en pacientes con calvicie de patrón.",
        "No quirúrgico y conveniente: Sin incisiones, sin cicatrices y sin tiempo de inactividad significativo.",
        "Salud del cuero cabelludo: Mejora la circulación sanguínea, creando un mejor entorno para el crecimiento del cabello."
    ],
    quickFacts: {
        procedureTime: '45 - 60 minutos',
         anesthesia: 'Anestésico local o enfriamiento para mayor comodidad',
        recoveryTime: 'Inmediata; evitar lavar el cabello durante 24 horas',
        results: 'Reducción de la caída en 2-3 meses; crecimiento visible en 4-6 meses',
    },
    sections: [
        {
            id: 'biological-mechanism',
            title: 'La Ciencia de la Regeneración Capilar',
            content: `
                <p>El PRP actúa a nivel celular para revertir la miniaturización de los folículos pilosos:</p>
                <ul>
                    <li><strong>Concentración de Plaquetas:</strong> Sus plaquetas contienen proteínas especializadas que estimulan la división celular y la reparación de tejidos.</li>
                    <li><strong>Liberación de Factores de Crecimiento:</strong> Una vez inyectados, estos factores activan el área de la protuberancia del folículo, señalándole que pase de una fase latente (telógena) de vuelta a una fase de crecimiento activa (anágena).</li>
                    <li><strong>Vascularización:</strong> El PRP fomenta la formación de nuevos vasos sanguíneos, asegurando que los folículos reciban el oxígeno y los nutrientes necesarios para producir un cabello sano.</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Su Viaje de Tratamiento',
            content: `
                <p>Una sesión típica de PRP es ágil y clínica, garantizando la máxima viabilidad de las plaquetas:</p>
                <ol>
                    <li><strong>Recolección de Sangre:</strong> Se extrae una pequeña cantidad de sangre utilizando un kit estéril de un solo uso.</li>
                    <li><strong>Separación:</strong> Utilizamos una centrifugadora de alta velocidad para aislar el Plasma Rico en Plaquetas de los glóbulos rojos y blancos.</li>
                    <li><strong>Microinyección:</strong> El "oro líquido" concentrado se inyecta en el cuero cabelludo a la profundidad específica donde se encuentran los bulbos pilosos, centrándose en las áreas de adelgazamiento.</li>
                </ol>
            `
        },
        {
            id: 'results-maintenance',
            title: 'Qué Esperar y Resultados a Largo Plazo',
            content: `
                <p>La restauración capilar es un proceso acumulativo. Para obtener el mejor resultado estético, recomendamos un enfoque estructurado:</p>
                <ul>
                    <li><strong>La Fase Inicial:</strong> La mayoría de los pacientes requieren de 3 a 4 sesiones iniciales, espaciadas aproximadamente 4 semanas, para "reactivar" los folículos.</li>
                    <li><strong>La Fase de Mantenimiento:</strong> Para mantener los resultados y contrarrestar la progresión genética de la pérdida de cabello, se aconseja una sesión de mantenimiento cada 6 a 12 meses.</li>
                    <li><strong>Terapia Complementaria:</strong> El PRP puede combinarse de forma segura con otros tratamientos, como el Minoxidil, o tras un trasplante capilar para mejorar la densidad general.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Atención Global y Logística',
            content: `
                <p>Brindamos un soporte de servicio completo para pacientes internacionales que buscan restauración capilar avanzada:</p>
                <ul>
                    <li><strong>Logística:</strong> Asistimos con traslados al aeropuerto y alojamiento premium cerca de nuestras clínicas en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Continuidad Regional:</strong> Puede elegir realizar su serie inicial en un país y sus sesiones de mantenimiento en otro dentro de nuestra red clínica.</li>
                    <li><strong>Seguridad y Experiencia:</strong> Todos los procedimientos son realizados por profesionales médicos certificados utilizando kits de PRP autorizados por FDA/CE para garantizar la mayor concentración plaquetaria.</li>
                </ul>
            `
        }
    ]
};

export default prpHairContent;