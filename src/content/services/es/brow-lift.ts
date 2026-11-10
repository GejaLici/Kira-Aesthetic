import type { ServiceContent } from '@/lib/services';

const browLiftContent: ServiceContent = {
    description: [
        "Un lifting de cejas, también conocido como estiramiento de frente, es un procedimiento especializado de rejuvenecimiento facial diseñado para corregir la flacidez de la piel en la frente, las cejas y los párpados superiores. Al reposicionar el tejido blando y la piel de la zona de las cejas, esta cirugía elimina eficazmente las arrugas profundas de la frente, las 'líneas de expresión' entre los ojos y el aspecto de pesadez que suele acompañar al envejecimiento.",
        "Nuestro enfoque para el rejuvenecimiento frontal se centra en restaurar una apariencia naturalmente fresca y alerta. Utilizando técnicas avanzadas y mínimamente invasivas como la endoscopia, podemos elevar la ceja con precisión, evitando el aspecto 'sorprendido' de los métodos tradicionales. Este procedimiento no solo suaviza la parte superior del rostro, sino que también abre la zona de los ojos, haciéndole lucir más descansado, accesible y juvenil."
    ],
    benefits: [
        "Corrige las cejas caídas que contribuyen a una expresión de cansancio o tristeza.",
        "Suaviza las arrugas horizontales profundas de la frente y las líneas verticales del entrecejo.",
        "Reduce el exceso de piel que cae sobre los párpados superiores.",
        "Restaura un contorno facial superior más alerta, vibrante y juvenil.",
        "Técnicas mínimamente invasivas que garantizan cicatrices discretas ocultas en el cabello."
    ],
    quickFacts: {
        procedureTime: '1 - 2 horas',
        anesthesia: 'Anestesia general o sedación profunda',
        recoveryTime: '7 - 14 días para actividades sociales',
        results: 'Rejuvenecimiento duradero (5-10 años de media)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Técnicas modernas de elevación',
            content: `
                <p>Utilizamos diversos métodos para abordar grados específicos de envejecimiento y necesidades anatómicas:</p>
                <ul>
                    <li><strong>Lifting de cejas endoscópico:</strong> El método más avanzado. Mediante una cámara diminuta y pequeñas incisiones ocultas en el pelo, elevamos toda la frente con un trauma mínimo y una recuperación rápida.</li>
                    <li><strong>Lifting temporal (lateral):</strong> Ideal para pacientes preocupados principalmente por la cola externa de la ceja y las 'patas de gallo', proporcionando un sutil efecto de 'ojos de gato'.</li>
                    <li><strong>Lifting coronal:</strong> Un enfoque tradicional reservado para pacientes con gran laxitud cutánea o arrugas muy profundas que requieren una corrección más extensa.</li>
                </ul>
            `
        },
        {
            id: 'combined-procedures',
            title: 'Armonía facial total',
            content: `
                <p>El lifting de cejas se combina frecuentemente con otros procedimientos para un rejuvenecimiento facial más equilibrado:</p>
                <ul>
                    <li><strong>Blefaroplastia:</strong> Combinar el lifting de cejas con la cirugía de párpados proporciona el resultado definitivo de 'apertura ocular'.</li>
                    <li><strong>Lifting facial (Facelift):</strong> Abordar simultáneamente la parte superior, media e inferior del rostro garantiza una juventud natural y cohesiva.</li>
                    <li><strong>Inyectables:</strong> El Botox o los rellenos dérmicos pueden utilizarse tras la cirugía para mantener la suavidad y refinar las líneas finas.</li>
                </ul>
            `
        },
        {
            id: 'recovery-care',
            title: 'Su recuperación y cuidados',
            content: `
                <p>La recuperación de un lifting de cejas moderno suele ser sencilla:</p>
                <ol>
                    <li><strong>Soporte postoperatorio:</strong> Es posible que lleve un vendaje ligero alrededor de la frente durante 24-48 horas para reducir la hinchazón inicial.</li>
                    <li><strong>Elevación:</strong> Dormir con la cabeza elevada es fundamental durante la primera semana para minimizar los hematomas y la hinchazón alrededor de los ojos.</li>
                    <li><strong>Retorno al trabajo:</strong> La mayoría de los pacientes regresan a su vida profesional y social en unos 10 días, una vez que se retiran los puntos o grapas.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Servicios de conserjería internacional',
            content: `
                <p>Nos dedicamos a brindar una experiencia quirúrgica sin fisuras para nuestra clientela global:</p>
                <ul>
                    <li><strong>Viaje y alojamiento:</strong> Coordinación completa de transporte local y alojamiento confortable cerca de nuestra clínica.</li>
                    <li><strong>Seguimiento flexible:</strong> Los pacientes tienen la comodidad de asistir a sus revisiones postoperatorias en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Monitoreo experto:</strong> Soporte digital continuo por parte de nuestro equipo médico durante todo su proceso de curación.</li>
                </ul>
            `
        }
    ]
};

export default browLiftContent;