import type { ServiceContent } from '@/lib/services';

const microneedlingContent: ServiceContent = {
    description: [
        "El microneedling, también conocido como Terapia de Inducción de Colágeno (CIT), es un procedimiento no quirúrgico transformador que aprovecha la capacidad innata de la piel para repararse a sí misma. Mediante el uso de un dispositivo de grado médico para crear miles de 'lesiones' microscópicas y controladas en la superficie de la piel, el tratamiento activa una potente respuesta de curación. Esta cascada de reparación conduce a la producción rápida de nuevo colágeno y elastina, los bloques fundamentales de una piel firme, suave y de aspecto juvenil.",
        "Este tratamiento es excepcionalmente versátil, lo que lo convierte en una solución estándar de oro para abordar problemas cutáneos profundos como cicatrices de acné, líneas finas y poros dilatados. Ya sea utilizado como medida antienvejecimiento preventiva o como tratamiento correctivo para irregularidades de la textura, el microneedling ofrece mejoras estructurales a largo plazo que van mucho más allá de la superficie, resultando en un cutis visiblemente más denso, terso y resistente."
    ],
    benefits: [
        "Reducción de cicatrices: Atenúa significativamente las cicatrices del acné, quirúrgicas y traumáticas al romper el tejido cicatricial antiguo.",
        "Antienvejecimiento: Suaviza las líneas finas y las arrugas profundas mediante la síntesis natural de colágeno.",
        "Refinamiento de poros: Tensa y minimiza la apariencia de los poros dilatados.",
        "Textura y tono: Corrige la textura irregular de la piel y unifica la hiperpigmentación y el daño solar.",
        "Mejora de la absorción: Crea microcanales que permiten que los ingredientes activos penetren hasta un 80% más profundamente."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutos (incluyendo anestesia)',
        anesthesia: 'Crema anestésica tópica potente',
        recoveryTime: '24 - 48 horas de enrojecimiento leve',
        results: 'Luminosidad inicial en 1 semana; remodelación completa de colágeno tras 3-6 meses',
    },
    sections: [
        {
            id: 'prp-vampire-facial',
            title: 'Mejora Avanzada: Microneedling con PRP',
            content: `
                <p>Para lograr el máximo nivel de rejuvenecimiento, ofrecemos el "Vampire Facial", una combinación de microneedling y terapia de Plasma Rico en Plaquetas (PRP):</p>
                <ul>
                    <li><strong>Factores de Crecimiento Naturales:</strong> Extraemos una pequeña cantidad de su propia sangre y concentramos las plaquetas, que están llenas de factores de crecimiento restauradores.</li>
                    <li><strong>Entrega Profunda:</strong> El proceso de microneedling crea las vías perfectas para que el PRP llegue a las capas más profundas de la dermis.</li>
                    <li><strong>Curación Acelerada:</strong> El PRP acelera drásticamente el proceso de recuperación y multiplica los efectos de creación de colágeno, siendo ideal para cicatrices profundas y envejecimiento avanzado.</li>
                </ul>
            `
        },
        {
            id: 'treatment-process',
            title: 'Qué Esperar Durante el Procedimiento',
            content: `
                <p>Nuestro enfoque clínico garantiza una experiencia cómoda y estéril:</p>
                <ol>
                    <li><strong>Preparación:</strong> Se limpia profundamente la piel y se aplica un anestésico tópico de grado médico durante 30–45 minutos.</li>
                    <li><strong>El Tratamiento:</strong> Se utiliza un cartucho de agujas estéril y de un solo uso con un dispositivo de lápiz automatizado. Ajustamos la profundidad de la aguja con precisión según el área (por ejemplo, más profunda para cicatrices, más superficial para la frente).</li>
                    <li><strong>Calma:</strong> Después del microneedling, aplicamos un suero de ácido hialurónico calmante o su propio PRP para sellar la humedad y comenzar el proceso de reparación.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-results',
            title: 'Recuperación y Resultados Óptimos',
            content: `
                <p>El cuidado post-tratamiento es vital para proteger su piel "abierta" y maximizar el impulso de colágeno:</p>
                <ul>
                    <li><strong>Las Primeras 24 Horas:</strong> Su piel se verá y sentirá como una quemadura solar leve. Evite el maquillaje, la sudoración y la exposición solar directa.</li>
                    <li><strong>La Fase "Rosa":</strong> El enrojecimiento menor suele desaparecer en 48 horas. Puede producirse una ligera descamación a medida que se desprenden las células viejas.</li>
                    <li><strong>Beneficios Acumulativos:</strong> Aunque un tratamiento aporta frescura, recomendamos una serie de 3 a 6 sesiones espaciadas 4 semanas para lograr cambios estructurales significativos.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Atención a Medida para Pacientes Internacionales',
            content: `
                <p>Facilitamos el rejuvenecimiento cutáneo de alta gama para nuestra clientela global con un enfoque en la conveniencia:</p>
                <ul>
                    <li><strong>Logística y Estancia:</strong> Asistencia completa con traslados al aeropuerto y alojamiento premium en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Continuidad Regional:</strong> Puede comenzar su serie de microneedling en una de nuestras clínicas y completar el seguimiento en otra, garantizando una atención sin interrupciones en nuestra red.</li>
                    <li><strong>Estándares de Seguridad:</strong> Utilizamos solo dispositivos médicos autorizados por la FDA o con marcado CE y estrictos protocolos de esterilidad.</li>
                </ul>
            `
        }
    ]
};

export default microneedlingContent;