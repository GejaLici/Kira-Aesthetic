import type { ServiceContent } from '@/lib/services';

const dentalBridgesContent: ServiceContent = {
    description: [
        "Un puente dental es una solución restauradora fija diseñada para reemplazar uno o más dientes ausentes, literalmente 'cerrando el espacio' entre ellos. Consiste en dientes postizos fabricados a medida (pónticos) que se anclan en su lugar mediante coronas dentales (pilares) colocadas sobre los dientes naturales o implantes a cada lado del espacio vacío.",
        "Más allá de restaurar la apariencia de su sonrisa, un puente es vital para mantener la salud dental. Evita que los dientes restantes se desplacen y pierdan su alineación, restaura su capacidad para masticar y hablar correctamente, y ayuda a mantener la forma natural de su rostro al proporcionar soporte estructural a los labios y las mejillas."
    ],
    benefits: [
        "Restaura instantáneamente la apariencia estética de una sonrisa completa y saludable.",
        "Mejora la eficiencia al masticar y clarifica el habla afectada por la pérdida de dientes.",
        "Previene el desplazamiento de los dientes adyacentes hacia el espacio vacío.",
        "Distribuye la fuerza de la mordida de manera uniforme para proteger los dientes circundantes.",
        "Ofrece una alternativa estable y fija a las dentaduras parciales removibles."
    ],
    quickFacts: {
        procedureTime: '2+ visitas (preparación y ajuste final)',
        anesthesia: 'Anestesia local',
        recoveryTime: 'Inmediata; período de ajuste de 2-3 días',
        results: 'Restauración fija, duradera y de largo plazo',
    },
    sections: [
        {
            id: 'bridge-types',
            title: 'Opciones de puentes personalizados',
            content: `
                <p>Ofrecemos varios tipos de puentes adaptados a sus necesidades clínicas específicas y a la ubicación de los dientes ausentes:</p>
                <ul>
                    <li><strong>Puentes tradicionales:</strong> La opción más común, donde se colocan coronas en los dos dientes adyacentes al espacio.</li>
                    <li><strong>Puentes Cantilever (en voladizo):</strong> Se utilizan cuando solo hay un diente adyacente en un lado del espacio faltante.</li>
                    <li><strong>Puentes Maryland:</strong> Una opción conservadora utilizada a menudo para los dientes frontales, que emplea una estructura de metal o porcelana adherida a la parte posterior de los dientes vecinos.</li>
                    <li><strong>Puentes sobre implantes:</strong> La solución más estable para la pérdida de múltiples dientes, anclada por implantes dentales en lugar de dientes naturales.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'El proceso de restauración',
            content: `
                <p>El camino hacia una sonrisa restaurada generalmente implica tres fases clave:</p>
                <ol>
                    <li><strong>Preparación de los pilares:</strong> Los dientes de anclaje se moldean con precisión para albergar las coronas de soporte. Luego, tomamos impresiones de alta definición para guiar al laboratorio dental.</li>
                    <li><strong>Puente provisional:</strong> Proporcionamos una restauración temporal para proteger sus dientes y mantener la estética mientras se fabrica su puente personalizado.</li>
                    <li><strong>Integración final:</strong> Una vez que el puente permanente está listo, verificamos meticulosamente el ajuste, la mordida y la coincidencia de color antes de fijarlo con cemento dental.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Salud bucal a largo plazo',
            content: `
                <p>La longevidad de un puente depende de la salud de los dientes y encías que lo sostienen:</p>
                <ul>
                    <li><strong>Limpieza especializada:</strong> Le enseñaremos cómo usar enhebradores de hilo dental o cepillos interproximales para limpiar debajo del póntico (el diente postizo).</li>
                    <li><strong>Salud de la base:</strong> El cepillado y el uso de hilo dental en los dientes de anclaje son esenciales para prevenir caries y enfermedades de las encías que podrían comprometer el puente.</li>
                    <li><strong>Revisiones profesionales:</strong> Las visitas rutinarias nos permiten asegurar que el puente permanezca bien cementado y que los tejidos circundantes se mantengan sanos.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Atención de clase mundial para pacientes globales',
            content: `
                <p>Ofrecemos una experiencia fluida para quienes viajan a nuestra clínica para odontología restauradora:</p>
                <ul>
                    <li><strong>Logística coordinada:</strong> Soporte integral con transporte local y alojamiento premium cerca de la clínica.</li>
                    <li><strong>Seguimiento en varios países:</strong> Usted tiene la ventaja única de asistir a revisiones de seguimiento en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Tiempos eficientes:</strong> Priorizamos su cronograma de tratamiento para asegurar que su restauración permanente se complete cómodamente dentro de las fechas de su viaje.</li>
                </ul>
            `
        }
    ]
};

export default dentalBridgesContent;