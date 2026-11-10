import type { ServiceContent } from '@/lib/services';

const breastLiftContent: ServiceContent = {
    description: [
        "Un levantamiento de senos, o mastopexia, es un procedimiento quirúrgico diseñado para corregir la flacidez (ptosis) y restaurar un contorno mamario más firme y elevado. Con el tiempo, factores como el embarazo, la lactancia, las fluctuaciones de peso y el envejecimiento natural pueden hacer que los senos pierdan elasticidad. Este procedimiento elimina el exceso de piel y tensa el tejido circundante para remodelar y dar soporte al nuevo perfil del busto.",
        "A diferencia del aumento de senos, el levantamiento se centra en la posición más que en el tamaño. Al reposicionar el pezón y la aureola a una altura más juvenil, nuestros cirujanos pueden crear una silueta rejuvenecida que luzca natural y armoniosa con su cuerpo. Para las pacientes que desean tanto elevación como un aumento de volumen, este procedimiento también se puede combinar con implantes mamarios."
    ],
    benefits: [
        "Eleva los senos a una posición más juvenil y firme.",
        "Elimina el exceso de piel estirada para una sensación de mayor firmeza.",
        "Reposiciona el pezón y la aureola para mejorar la simetría estética.",
        "Remodela el tejido mamario para mejorar la proyección y el contorno.",
        "Aumenta la autoconfianza y mejora el ajuste de la ropa y los trajes de baño."
    ],
    quickFacts: {
        procedureTime: '2 - 3 horas',
        anesthesia: 'Anestesia general',
        recoveryTime: '4 - 6 semanas para la recuperación total',
        results: 'Mejora inmediata; la forma final se asienta en 3-6 meses',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Técnicas de levantamiento personalizadas',
            content: `
                <p>La elección del patrón de incisión depende del grado de flacidez y de la cantidad de piel que se deba eliminar:</p>
                <ul>
                    <li><strong>Periareolar (Donut):</strong> Una incisión circular alrededor de la aureola, adecuada para una flacidez leve.</li>
                    <li><strong>Vertical (Lollipop/Piruleta):</strong> Una incisión alrededor de la aureola y verticalmente hasta el pliegue mamario; ideal para una ptosis moderada.</li>
                    <li><strong>En Ancla (T invertida):</strong> El levantamiento más completo, que implica incisiones alrededor de la aureola, hacia abajo en el centro y a lo largo del pliegue del seno.</li>
                </ul>
            `
        },
        {
            id: 'safety-preparation',
            title: 'Protocolos de preparación y seguridad',
            content: `
                <p>Su seguridad es nuestra prioridad. La fase preoperatoria garantiza que esté lista para la cirugía:</p>
                <ul>
                    <li><strong>Salud mamaria:</strong> Normalmente se requiere una mamografía o ecografía para asegurar la salud base de los senos.</li>
                    <li><strong>Autorización médica:</strong> Incluye análisis de sangre completos, un ECG y una consulta con nuestro anestesiólogo.</li>
                    <li><strong>Cuidados preoperatorios:</strong> Las pacientes deben dejar de fumar y evitar medicamentos anticoagulantes (como la aspirina) durante varias semanas antes del procedimiento.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Recuperación y cuidados posteriores',
            content: `
                <p>Un resultado exitoso depende de un cuidado postoperatorio diligente:</p>
                <ol>
                    <li><strong>Soporte:</strong> Deberá usar un sujetador quirúrgico especializado las 24 horas del día durante las primeras 4 a 6 semanas para dar soporte a los tejidos en curación.</li>
                    <li><strong>Actividad:</strong> Se recomienda caminar suavemente de inmediato, pero debe evitar levantar peso y realizar ejercicio intenso durante al menos un mes.</li>
                    <li><strong>Cuidado de cicatrices:</strong> Proporcionamos protocolos específicos para el cuidado de heridas y el manejo de cicatrices para asegurar que las incisiones se desvanezcan lo más posible con el tiempo.</li>
                </ol>
            `
        },
        {
            id: 'global-logistics',
            title: 'Soporte para pacientes internacionales',
            content: `
                <p>Facilitamos cada aspecto de su viaje quirúrgico para garantizar una experiencia sin preocupaciones:</p>
                <ul>
                    <li><strong>Asistencia de viaje:</strong> Ofrecemos soporte completo con transporte y alojamiento premium cerca de nuestro centro quirúrgico.</li>
                    <li><strong>Flexibilidad de seguimiento:</strong> Las pacientes tienen la opción única de completar sus revisiones postoperatorias en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Monitoreo continuo:</strong> Nuestro equipo está disponible para consultas virtuales durante su recuperación una vez que regrese a casa.</li>
                </ul>
            `
        }
    ]
};

export default breastLiftContent;