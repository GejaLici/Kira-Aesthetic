import type { ServiceContent } from '@/lib/services';

const denturesContent: ServiceContent = {
    description: [
        "Las dentaduras son dispositivos protésicos removibles, fabricados a medida, diseñados para reemplazar los dientes ausentes y restaurar la función de su sonrisa. Más allá de la estética, la pérdida de dientes puede afectar significativamente su capacidad para hablar con claridad, masticar con eficacia y mantener la estructura facial. Las dentaduras modernas ofrecen una solución fiable y probada a estos desafíos, devolviéndole una sonrisa completa y segura.",
        "Las dentaduras actuales son mucho más avanzadas que los 'dientes postizos' del pasado. Utilizando acrílicos de alta calidad y técnicas protésicas de vanguardia, creamos prótesis ligeras, duraderas y diseñadas meticulosamente para adaptarse a los contornos naturales de su boca. Ya sea que necesite una dentadura completa o solo reemplazar algunas piezas, nuestro objetivo es proporcionar una restauración que se sienta cómoda y luzca completamente natural."
    ],
    benefits: [
        "Restaura una sonrisa completa, aumentando la confianza y mejorando la apariencia.",
        "Proporciona un soporte vital para los músculos faciales, evitando el aspecto 'hundido'.",
        "Mejora la dicción y la claridad fonética, a menudo dificultadas por la falta de dientes.",
        "Potencia la capacidad de masticación, permitiendo una dieta más variada y saludable.",
        "Opciones versátiles disponibles, incluyendo prótesis completas, parciales y sobre implantes."
    ],
    quickFacts: {
        procedureTime: 'Varias citas durante 3 - 5 semanas',
        anesthesia: 'No requerida (a menos que se combine con extracciones)',
        recoveryTime: 'Período de ajuste de 2 - 4 semanas',
        results: 'Restauración funcional; se recomienda renovarlas cada 5-7 años',
    },
    sections: [
        {
            id: 'denture-types',
            title: 'Tipos de dentaduras que ofrecemos',
            content: `
                <p>Ofrecemos soluciones especializadas dependiendo del número de dientes ausentes y la salud de su mandíbula:</p>
                <ul>
                    <li><strong>Dentaduras Completas:</strong> Utilizadas cuando faltan todos los dientes en el arco superior o inferior. Cuentan con una base acrílica del color de la encía para un ajuste preciso.</li>
                    <li><strong>Dentaduras Parciales:</strong> Ideales cuando aún se conservan algunos dientes naturales. Se aseguran con una estructura discreta que evita que los dientes existentes se desplacen.</li>
                    <li><strong>Dentaduras sobre Implantes:</strong> Para una estabilidad máxima, las prótesis pueden anclarse a implantes dentales. Esto elimina la necesidad de adhesivos y evita que la prótesis se mueva al comer o hablar.</li>
                </ul>
            `
        },
        {
            id: 'custom-crafting',
            title: 'El arte del ajuste personalizado',
            content: `
                <p>El éxito de una dentadura reside en su precisión. Nuestro proceso de ajuste de varios pasos garantiza una comodidad óptima:</p>
                <ol>
                    <li><strong>Impresiones detalladas:</strong> Tomamos moldes precisos de sus encías y paladar para asegurar la base más estable posible.</li>
                    <li><strong>Registro de mordida:</strong> Medimos cómo encajan sus mandíbulas para asegurar que sus nuevos dientes funcionen armoniosamente sin causar dolor articular.</li>
                    <li><strong>Prueba de cera:</strong> Probará una versión en cera de su dentadura para aprobar la estética (tamaño, forma y tono) antes de fabricar el set final.</li>
                </ol>
            `
        },
        {
            id: 'adjustment-period',
            title: 'La vida con sus nuevas dentaduras',
            content: `
                <p>Adaptarse a unas nuevas dentaduras es un proceso gradual. Esto es lo que puede esperar durante las primeras semanas:</p>
                <ul>
                    <li><strong>Adaptación muscular:</strong> Los músculos de la lengua y las mejillas aprenderán naturalmente a mantener la prótesis en su lugar con el tiempo.</li>
                    <li><strong>Habla y dieta:</strong> Recomendamos practicar la lectura en voz alta y comenzar con alimentos blandos cortados en trozos pequeños para ganar confianza.</li>
                    <li><strong>Cuidado diario:</strong> Las dentaduras deben limpiarse a diario con cepillos especializados y sumergirse durante la noche para mantener el material hidratado y sus encías sanas.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Apoyo al paciente internacional',
            content: `
                <p>Ofrecemos una experiencia fluida para pacientes internacionales que buscan prótesis dentales de alta calidad y asequibles:</p>
                <ul>
                    <li><strong>Tiempos optimizados:</strong> Priorizamos el trabajo de laboratorio para asegurar que sus citas de ajuste se completen de manera eficiente durante su visita.</li>
                    <li><strong>Conserjería de viaje:</strong> Asistencia con el transporte local y alojamiento confortable cerca de nuestra clínica.</li>
                    <li><strong>Seguimiento conveniente:</strong> Los ajustes posteriores o rebasados pueden gestionarse en nuestras sedes asociadas en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                </ul>
            `
        }
    ]
};

export default denturesContent;