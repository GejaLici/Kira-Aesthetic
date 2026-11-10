import type { ServiceContent } from '@/lib/services';

const dentalSealantsContent: ServiceContent = {
    description: [
        "Un sellador dental es un recubrimiento protector fino y de alto rendimiento que se aplica en las superficies de masticación de los dientes posteriores (molares y premolares). Estos dientes contienen de forma natural fosas y fisuras —surcos microscópicos que a menudo son más estrechos que una sola cerda de un cepillo de dientes—. Al sellar estas áreas vulnerables, los selladores crean un escudo liso e impermeable que evita que los restos de comida y las bacterias productoras de ácido se asienten en el esmalte.",
        "Los selladores se consideran una de las medidas preventivas más eficaces en la odontología pediátrica moderna. Este tratamiento indoloro y no invasivo actúa como una barrera física contra la caries, reduciendo significativamente la probabilidad de cavidades durante los años de mayor riesgo en la infancia. Es una inversión proactiva que protege la integridad estructural de los dientes permanentes antes de que el deterioro tenga oportunidad de comenzar."
    ],
    benefits: [
        "Protección focalizada: Protege los surcos profundos de los molares, donde ocurren el 80% de las caries en niños.",
        "Indoloro y no invasivo: Sin taladros, sin inyecciones y sin necesidad de eliminar estructura dental.",
        "Aplicación rápida: Cada diente puede ser sellado y protegido en apenas unos minutos.",
        "Durabilidad a largo plazo: Puede resistir la presión de la masticación normal durante varios años.",
        "Prevención costo-efectiva: Significativamente menos costoso que los empastes o coronas necesarios para tratar una caries."
    ],
    quickFacts: {
        procedureTime: '5 - 10 minutos por diente',
        anesthesia: 'No requerida',
        recoveryTime: 'Inmediata; los pacientes pueden comer y beber de inmediato',
        results: 'Protección instantánea contra la acumulación de comida y placa',
    },
    sections: [
        {
            id: 'how-sealants-work',
            title: 'Creando una Barrera Física',
            content: `
                <p>Para entender el valor de los selladores, es útil observar la anatomía de un molar:</p>
                <ul>
                    <li><strong>El Problema:</strong> Las "fosas y fisuras" en la parte superior de los molares son lo suficientemente profundas para atrapar placa, pero demasiado pequeñas para ser limpiadas con un cepillo.</li>
                    <li><strong>La Solución:</strong> El sellador líquido fluye en estos surcos profundos, rellenándolos por completo y endureciéndose para formar un escudo resistente similar al plástico.</li>
                    <li><strong>El Resultado:</strong> Una superficie lisa que es fácil de limpiar con el cepillado, sin dejar espacio para que las bacterias se escondan y produzcan los ácidos que causan caries.</li>
                </ul>
            `
        },
        {
            id: 'application-steps',
            title: 'Un Proceso Simple de Varios Pasos',
            content: `
                <p>La aplicación de un sellador es un procedimiento clínico directo que se realiza durante una visita rutinaria:</p>
                
                <ol>
                    <li><strong>Descontaminación:</strong> El diente se limpia meticulosamente para eliminar cualquier placa superficial o restos.</li>
                    <li><strong>Acondicionamiento:</strong> Se aplica un gel de grabado suave en el esmalte durante unos segundos para crear una textura microscópica, asegurando una unión permanente.</li>
                    <li><strong>Adhesión:</strong> Se enjuaga y seca el diente, y el sellador líquido se "pinta" sobre los surcos del diente.</li>
                    <li><strong>Fotopolimerización:</strong> Se utiliza una luz LED azul especializada para endurecer instantáneamente el material, uniéndolo de forma segura al esmalte.</li>
                </ol>
            `
        },
        {
            id: 'optimal-timing',
            title: '¿Cuál es el mejor momento para los selladores?',
            content: `
                <p>El momento oportuno es crítico para asegurar que los dientes estén protegidos tan pronto como son más vulnerables:</p>
                <ul>
                    <li><strong>Primeros Molares:</strong> Suelen erupcionar alrededor de los 6 años. Sellarlos temprano los protege durante la transición a la dentición permanente.</li>
                    <li><strong>Segundos Molares:</strong> Aparecen típicamente alrededor de los 12 años. Sellar estos "molares de los 12 años" brinda protección durante la adolescencia.</li>
                    <li><strong>Pacientes Adultos:</strong> Aunque es más común en niños, los adultos con surcos profundos y sin empastes previos también pueden beneficiarse del poder preventivo de los selladores.</li>
                </ul>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Mantenimiento y Longevidad',
            content: `
                <p>Aunque los selladores son increíblemente duraderos, no son permanentes y requieren una supervisión mínima:</p>
                <ul>
                    <li><strong>Revisiones Rutinarias:</strong> En cada chequeo semestral, nuestro equipo inspecciona los selladores en busca de signos de desgaste, astillamiento o desprendimiento.</li>
                    <li><strong>Reparaciones Sencillas:</strong> Si un sellador se desgasta por una masticación fuerte, puede retocarse o reaplicarse fácilmente sin ninguna molestia.</li>
                    <li><strong>Cuidado en Casa:</strong> Los selladores protegen las superficies de masticación, pero el cepillado diario y el uso de hilo dental siguen siendo esenciales para proteger los lados y los espacios entre los dientes.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Excelencia Pediátrica para Familias Viajeras',
            content: `
                <p>Para las familias que visitan nuestras clínicas desde el extranjero, coordinamos el cuidado preventivo para maximizar la eficiencia:</p>
                <ul>
                    <li><strong>Sesiones Combinadas:</strong> Podemos realizar limpiezas, fluoración y selladores en una sola sesión para respetar su itinerario de viaje.</li>
                    <li><strong>Registros Regionales:</strong> El historial dental preventivo de su hijo es accesible en nuestras clínicas de <strong>Albania</strong>, <strong>Kosovo</strong> e <strong>Italia</strong>.</li>
                    <li><strong>Soporte Completo:</strong> Nuestro equipo asiste con alojamiento apto para niños y transporte local para asegurar un viaje médico sin estrés.</li>
                </ul>
            `
        }
    ]
};

export default dentalSealantsContent;