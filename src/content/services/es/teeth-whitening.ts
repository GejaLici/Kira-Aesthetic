import type { ServiceContent } from '@/lib/services';

const teethWhiteningContent: ServiceContent = {
    description: [
        "El blanqueamiento dental profesional es un procedimiento estético rápido, seguro y no invasivo diseñado para borrar años de manchas y decoloración. Con el tiempo, factores como el proceso natural de envejecimiento y el consumo de café, té, vino tinto o tabaco pueden opacar la brillantez de su sonrisa. El blanqueamiento profesional utiliza agentes blanqueadores de grado médico para descomponer los pigmentos profundos dentro del esmalte, revelando una sonrisa significativamente más brillante y juvenil.",
        "Mientras que los productos de venta libre a menudo ofrecen resultados inconsistentes y pueden causar irritación en las encías, nuestros tratamientos dirigidos por especialistas se personalizan según su perfil dental específico. Mediante el uso de geles de alta concentración y tecnología avanzada de activación por luz, garantizamos un resultado uniforme que protege sus tejidos blandos y logra una transformación drástica en una sola sesión."
    ],
    benefits: [
        "Transformación instantánea: Logre una sonrisa varios tonos más blanca en solo una hora.",
        "Precisión y seguridad: Las férulas a medida y las barreras protectoras previenen la irritación de las encías.",
        "Resultados duraderos: Las fórmulas de grado profesional ofrecen resultados más persistentes que las alternativas de farmacia.",
        "Aumento de confianza: Una sonrisa más brillante se asocia a menudo con la salud, la vitalidad y una mejor autoestima.",
        "Soluciones a medida: Elija entre un procedimiento rápido en clínica o un cómodo kit profesional para el hogar."
    ],
    quickFacts: {
        procedureTime: '60 minutos (En clínica) o 10-14 días (Kit para casa)',
        anesthesia: 'No requerida',
        recoveryTime: 'Ninguna; puede haber sensibilidad temporal durante 24-48 horas',
        results: 'Sonrisa vibrante y blanca visible inmediatamente después del tratamiento',
    },
    sections: [
        {
            id: 'whitening-options',
            title: 'Nuestras Tecnologías de Blanqueamiento Avanzado',
            content: `
                <p>Ofrecemos los protocolos de blanqueamiento líderes en el mundo para garantizar la máxima eficacia con la mínima sensibilidad:</p>
                <ul>
                    <li><strong>Blanqueamiento en Clínica Activado por Láser:</strong> El estándar de oro en rapidez. Se aplica un potente gel de peróxido que se activa mediante una fuente de luz especializada para acelerar el proceso, ideal para eventos especiales.</li>
                    <li><strong>Kits Personalizados para el Hogar:</strong> Creamos férulas moldeadas a medida en laboratorio que se ajustan perfectamente a sus dientes. Al usarlas con nuestro gel profesional durante 30 a 60 minutos al día, obtendrá resultados profesionales con total flexibilidad.</li>
                    <li><strong>Blanqueamiento Interno:</strong> Para dientes individuales que se han oscurecido debido a traumatismos o tratamientos de conducto (endodoncias), ofrecemos blanqueamiento interno especializado para igualar el tono con los dientes adyacentes.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Su Viaje hacia una Sonrisa más Blanca',
            content: `
                <p>Para asegurar el mejor resultado, seguimos un estricto protocolo clínico:</p>
                <ol>
                    <li><strong>Examen Dental:</strong> Comprobamos la presencia de caries o recesión de las encías, ya que los agentes blanqueadores solo deben aplicarse sobre dientes sanos.</li>
                    <li><strong>Profilaxis (Limpieza):</strong> Recomendamos una limpieza profesional antes del blanqueamiento para eliminar la placa y el sarro, asegurando que el gel tenga contacto directo con el esmalte.</li>
                    <li><strong>Selección de Tono:</strong> Registramos su tono actual para seguir el progreso y ayudarle a elegir un tono objetivo que luzca natural.</li>
                    <li><strong>Protección:</strong> Sus encías y labios se aíslan con una barrera protectora para evitar cualquier contacto con el gel blanqueador.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Mantenimiento de sus Resultados',
            content: `
                <p>Aunque el blanqueamiento dental no es permanente, puede prolongar la vida de sus resultados con estos sencillos hábitos:</p>
                <ul>
                    <li><strong>La "Dieta Blanca":</strong> Evite alimentos altamente pigmentados (bayas, salsa de soja) y bebidas (café, vino tinto) durante las primeras 48 horas después del tratamiento.</li>
                    <li><strong>Higiene Oral:</strong> Continúe cepillándose y usando hilo dental dos veces al día para evitar que se asienten nuevas manchas superficiales.</li>
                    <li><strong>Retoques:</strong> Utilice sus férulas personalizadas para un retoque de una noche cada 6 meses para mantener el brillo máximo de su sonrisa.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Cuidado Exclusivo para Sonrisas Globales',
            content: `
                <p>Ofrecemos una experiencia premium para pacientes que viajan por odontología estética:</p>
                <ul>
                    <li><strong>Servicio Express:</strong> Priorizamos el blanqueamiento en clínica para viajeros internacionales para que pueda disfrutar de su nueva sonrisa el resto de su viaje.</li>
                    <li><strong>Preparación de Kit para el Hogar:</strong> Podemos tomar sus impresiones el primer día y tener sus férulas personalizadas listas en 24 horas.</li>
                    <li><strong>Soporte Logístico:</strong> Asistencia con traslados al aeropuerto y alojamiento de lujo en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                </ul>
            `
        }
    ]
};

export default teethWhiteningContent;