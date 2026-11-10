import type { ServiceContent } from '@/lib/services';

const thighLiftContent: ServiceContent = {
    description: [
        "Un lifting de muslos, o cruroplastia, es un procedimiento quirúrgico transformador diseñado para remodelar las piernas mediante la eliminación del exceso de piel flácida y los depósitos de grasa persistentes. Este procedimiento es particularmente eficaz para personas que han experimentado una pérdida de peso significativa, los efectos naturales del envejecimiento o predisposiciones genéticas que resultan en piel suelta. Al tensar los tejidos subyacentes y redrapear la piel, el lifting de muslos crea un perfil de pierna más firme, suave y atlético.",
        "En nuestra clínica, priorizamos la armonía corporal y la comodidad funcional. Más allá de los beneficios estéticos de una apariencia más tonificada, el lifting de muslos puede aliviarlas molestias físicas como la irritación de la piel y el roce. Nuestros cirujanos plásticos certificados combinan técnicas quirúrgicas avanzadas con un ojo artístico para asegurar que las cicatrices se coloquen de forma discreta y que los contornos finales complementen las proporciones generales de su cuerpo."
    ],
    benefits: [
        "Tensado de la piel: Elimina la piel flácida o con aspecto 'papel de arroz' que suele quedar tras la pérdida de peso.",
        "Contornos refinados: Remodela tanto la cara interna como la externa de los muslos para un aspecto más proporcionado.",
        "Comodidad física: Reduce la fricción piel con piel y la irritación causada por el exceso de tejido.",
        "Ajuste de la ropa: Permite un mejor ajuste en trajes de baño, ropa deportiva y prendas a medida.",
        "Resultados a largo plazo: Proporciona una eliminación permanente del exceso de piel con resultados que duran años."
    ],
    quickFacts: {
        procedureTime: '2 - 4 horas',
        anesthesia: 'Anestesia general',
        recoveryTime: '2 - 3 semanas (regreso al trabajo ligero); 6 semanas para actividad completa',
        results: 'Visibles de inmediato; refinamiento final tras 6-12 meses',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Enfoques Quirúrgicos Personalizados',
            content: `
                <p>Adaptamos el patrón de incisión a la distribución específica de su exceso de tejido:</p>
                <ul>
                    <li><strong>Lifting de Muslo Interno (Medial):</strong> El enfoque más común, centrado en la parte superior del muslo interno. Las incisiones suelen ocultarse en el pliegue de la ingle.</li>
                    <li><strong>Cruroplastia Vertical:</strong> Para pacientes con una gran cantidad de piel suelta que se extiende hacia la rodilla, puede ser necesaria una incisión vertical a lo largo del muslo interno para una corrección máxima.</li>
                    <li><strong>Lifting de Muslo Externo (Lateral):</strong> Aborda las caras frontal y externa de los muslos, a menudo combinado con un lifting de glúteos o un lifting de la parte inferior del cuerpo.</li>
                    <li><strong>Lipo-cruroplastia:</strong> Frecuentemente integramos la liposucción para eliminar capas de grasa profunda antes de tensar la piel, asegurando la transición más suave posible.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Seguridad y Cuidados Preoperatorios',
            content: `
                <p>Su seguridad es nuestra prioridad absoluta. El viaje comienza con una evaluación médica integral:</p>
                <ol>
                    <li><strong>Evaluación Médica:</strong> Incluye una revisión completa del historial, examen físico y análisis de sangre detallados.</li>
                    <li><strong>Planificación Quirúrgica:</strong> Utilizamos fotografía de alta resolución para trazar la ubicación de las incisiones de modo que sean lo más fáciles de ocultar posible.</li>
                    <li><strong>Anestesiología:</strong> Una consulta dedicada para garantizar la administración más segura de la anestesia general, adaptada a su perfil de salud.</li>
                </ol>
            `
        },
        {
            id: 'recovery-process',
            title: 'El Camino hacia la Recuperación',
            content: `
                <p>La curación de un lifting de muslos requiere paciencia y el cumplimiento de un protocolo postoperatorio específico:</p>
                <ul>
                    <li><strong>Compresión:</strong> Deberá usar una prenda médica especializada durante 4 a 6 semanas para dar soporte a los nuevos contornos y minimizar la hinchazón.</li>
                    <li><strong>Tiempo de Reposo Inicial:</strong> La mayoría de los pacientes requieren una noche de estancia en nuestra clínica para monitoreo profesional. Recomendamos descansar al menos 10 a 14 días antes de volver a un trabajo de escritorio.</li>
                    <li><strong>Graduación de la Actividad:</strong> Aunque se fomenta caminar ligero a las 24 horas para prevenir coágulos, el ejercicio extenuante y el levantamiento de pesas deben evitarse durante al menos 6 semanas.</li>
                    <li><strong>Gestión de Cicatrices:</strong> Ofrecemos tratamientos avanzados a base de silicona y opciones de terapia láser para asegurar que las cicatrices se atenúen lo máximo posible con el tiempo.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Soporte Total para Pacientes Internacionales',
            content: `
                <p>Nos especializamos en brindar atención quirúrgica de alta gama para pacientes que viajan desde el Reino Unido, la UE y otros lugares:</p>
                <ul>
                    <li><strong>Logística de Conserjería:</strong> Gestión completa de traslados al aeropuerto y alojamiento de lujo en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Monitoreo Extendido:</strong> Nos aseguramos de que esté en condiciones seguras de volar antes del alta y brindamos acceso digital 24/7 a su equipo quirúrgico.</li>
                    <li><strong>Seguimientos Regionales:</strong> Si reside dentro de la región, puede optar por realizar sus chequeos postoperatorios en cualquiera de nuestras clínicas afiliadas.</li>
                </ul>
            `
        }
    ]
};

export default thighLiftContent;