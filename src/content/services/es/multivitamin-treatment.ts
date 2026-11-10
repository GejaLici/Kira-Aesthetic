import type { ServiceContent } from '@/lib/services';

const multivitaminTreatmentContent: ServiceContent = {
    description: [
        "El tratamiento multivitamínico, una forma especializada de mesoterapia, es un procedimiento de biorrevitalización cutánea que entrega un potente 'cóctel' de nutrientes esenciales directamente en la dermis. A diferencia del cuidado de la piel tópico que a menudo tiene dificultades para atravesar la barrera protectora de la piel, la mesoterapia utiliza microinyecciones para asegurar que las vitaminas, minerales, aminoácidos y antioxidantes lleguen a las capas más profundas, donde pueden estimular eficazmente la reparación y renovación celular.",
        "Este tratamiento actúa como un 'alimento profundo para la piel', proporcionando los bloques de construcción necesarios para la producción de colágeno y elastina. Es una solución ideal para quienes buscan combatir los primeros signos del envejecimiento, el estrés ambiental o un cutis apagado y cansado. El resultado es una piel profundamente hidratada, más firme y luminosa que irradia salud de adentro hacia afuera."
    ],
    benefits: [
        "Luminosidad instantánea: Revitaliza la piel opaca para un brillo visible y saludable.",
        "Hidratación profunda: Redensifica la piel desde el interior utilizando ácido hialurónico y minerales.",
        "Protección antioxidante: Neutraliza los radicales libres para prevenir el envejecimiento prematuro y el daño ambiental.",
        "Elasticidad mejorada: Estimula la producción natural de fibras de colágeno y elastina.",
        "Tono uniforme: Ayuda a iluminar el cutis y suavizar pequeñas irregularidades en la textura."
    ],
    quickFacts: {
        procedureTime: '30 - 45 minutos',
        anesthesia: 'Crema anestésica tópica opcional',
        recoveryTime: 'Inmediata; el ligero enrojecimiento desaparece en 24 horas',
        results: 'Hidratación inmediata; mejora acumulativa tras 3-6 sesiones',
    },
    sections: [
        {
            id: 'bespoke-cocktails',
            title: 'Cócteles Nutritivos Personalizados',
            content: `
                <p>No creemos en un enfoque único. Cada tratamiento se mezcla de forma personalizada para abordar las necesidades biológicas específicas de su piel:</p>
                <ul>
                    <li><strong>Vitaminas C y E:</strong> Potentes antioxidantes para iluminar y proteger la barrera cutánea.</li>
                    <li><strong>Vitamina A (Retinoides):</strong> Para fomentar la renovación celular y reparar las líneas finas.</li>
                    <li><strong>Ácido Hialurónico:</strong> Para una retención intensa de la humedad y un efecto de relleno inmediato.</li>
                    <li><strong>Aminoácidos y Péptidos:</strong> Proteínas esenciales para construir tejido cutáneo nuevo y firme.</li>
                    <li><strong>Minerales (Magnesio, Zinc):</strong> Para equilibrar la salud de la piel y reducir la inflamación.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Qué Esperar Durante la Sesión',
            content: `
                <p>La mesoterapia es un procedimiento rápido y bien tolerado que se integra fácilmente en cualquier agenda:</p>
                <ol>
                    <li><strong>Preparación:</strong> Se desinfecta la piel y, si se desea, se aplica una crema anestésica suave en el área objetivo.</li>
                    <li><strong>Microinyecciones:</strong> Utilizando una aguja ultrafina o una meso-pistola especializada, el suero personalizado se entrega a través de una serie de inyecciones superficiales rápidas.</li>
                    <li><strong>Absorción:</strong> Se realiza un masaje suave para asegurar una distribución uniforme de los nutrientes por toda la capa dérmica.</li>
                    <li><strong>Protección:</strong> Finalizamos con un suero refrescante y un protector solar de alto factor para proteger la piel.</li>
                </ol>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Resultados Óptimos y Mantenimiento',
            content: `
                <p>Aunque una sola sesión proporciona un refresco inmediato, la mesoterapia está diseñada como una terapia acumulativa:</p>
                <ul>
                    <li><strong>Fase Inicial:</strong> Se recomienda una serie de 3 a 6 sesiones, espaciadas de 2 a 4 semanas, para saturar completamente la piel de nutrientes.</li>
                    <li><strong>Mantenimiento:</strong> Una sesión cada 3 a 6 meses suele ser suficiente para mantener el brillo y continuar con los beneficios antienvejecimiento.</li>
                    <li><strong>Áreas de Tratamiento:</strong> Este tratamiento es altamente eficaz no solo para el rostro, sino también para el cuello, el escote y el dorso de las manos.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Atención Fluida para Clientes Internacionales',
            content: `
                <p>Brindamos una experiencia premium para los pacientes que viajan para nuestros protocolos estéticos especializados:</p>
                <ul>
                    <li><strong>Soporte Integral:</strong> Asistencia completa con la logística de viaje, traslados al aeropuerto y alojamiento en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Seguimiento Regional:</strong> Tiene la flexibilidad de programar sus sesiones de mantenimiento en cualquiera de nuestras clínicas en la región.</li>
                    <li><strong>Personal Experto:</strong> Todos los tratamientos son realizados por esteticistas médicos o médicos especializados en rejuvenecimiento cutáneo inyectable.</li>
                </ul>
            `
        }
    ]
};

export default multivitaminTreatmentContent;