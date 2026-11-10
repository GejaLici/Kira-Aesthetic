import type { ServiceContent } from '@/lib/services';

const armLiftContent: ServiceContent = {
    description: [
        "Un lifting de brazos, o braquioplastia, es un procedimiento quirúrgico transformador diseñado para remodelar la parte superior de los brazos mediante la eliminación de la piel flácida y los depósitos de grasa persistentes. El exceso de tejido en los brazos, a menudo denominado 'alas de murciélago', puede ser resultado de una pérdida de peso significativa, el envejecimiento o la genética, y frecuentemente es resistente a la dieta y al ejercicio por sí solos.",
        "Nuestro enfoque de la braquioplastia se centra en restaurar un contorno firme, juvenil y bien proporcionado en la parte superior del cuerpo. Al tensar estratégicamente los tejidos de soporte subyacentes y readaptar la piel, logramos un perfil de brazo más suave y definido. Este procedimiento no solo mejora su apariencia física, sino que también le devuelve la confianza para usar prendas sin mangas y sentirse cómodo con su propia piel."
    ],
    benefits: [
        "Eliminación de la piel suelta y flácida ('alas de murciélago') para un aspecto más firme.",
        "Reducción de depósitos de grasa localizada, a menudo optimizada con liposucción.",
        "Mejora de la definición del brazo y una silueta corporal más proporcionada.",
        "Resultados duraderos que mejoran significativamente la estética de la parte superior del cuerpo.",
        "Aumento de la autoconfianza y mayor comodidad al usar diversos estilos de ropa."
    ],
    quickFacts: {
        procedureTime: '2 - 3 horas',
        anesthesia: 'Anestesia general',
        recoveryTime: '4 - 6 semanas para actividad completa',
        results: 'Resultados duraderos (se mantienen mejor con un peso estable)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Técnicas quirúrgicas personalizadas',
            content: `
                <p>Ofrecemos diferentes patrones de incisión dependiendo del grado de laxitud de la piel y la distribución de la grasa:</p>
                <ul>
                    <li><strong>Braquioplastia completa:</strong> El método más común, que implica una incisión desde la axila hasta el codo. Es ideal para pacientes con un exceso de piel significativo.</li>
                    <li><strong>Lifting de brazos de incisión limitada:</strong> Para pacientes con laxitud moderada, las incisiones pueden limitarse al área de la axila, lo que resulta en cicatrices menos visibles.</li>
                    <li><strong>Liposucción combinada:</strong> Frecuentemente utilizamos la liposucción junto con la escisión de piel para refinar la forma del brazo y asegurar un contorno suave y atlético.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Preparación y seguridad del paciente',
            content: `
                <p>Garantizar un resultado óptimo comienza con una fase preoperatoria integral:</p>
                <ul>
                    <li><strong>Evaluación médica:</strong> Incluye análisis de sangre, electrocardiograma (ECG) y un examen físico detallado.</li>
                    <li><strong>Ajustes en el estilo de vida:</strong> Se requiere que los pacientes dejen de fumar y eviten medicamentos anticoagulantes durante varias semanas antes de la cirugía.</li>
                    <li><strong>Estabilidad del peso:</strong> Para obtener los mejores resultados, se recomienda que los pacientes mantengan un peso estable y saludable antes del procedimiento.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'Recuperación y cuidados postoperatorios',
            content: `
                <p>Una recuperación sin contratiempos es esencial para lograr los mejores resultados estéticos:</p>
                <ol>
                    <li><strong>Compresión:</strong> Deberá usar mangas de compresión especializadas durante 4 a 6 semanas para minimizar la hinchazón y dar soporte a los nuevos contornos.</li>
                    <li><strong>Actividad física:</strong> Aunque se recomienda caminar ligeramente de inmediato, se debe evitar levantar objetos pesados y realizar movimientos de los brazos por encima de la cabeza durante al menos un mes.</li>
                    <li><strong>Manejo de cicatrices:</strong> Proporcionamos protocolos detallados para el cuidado de las cicatrices, incluyendo geles de silicona y protección solar, para ayudar a que las incisiones se desvanezcan estéticamente con el tiempo.</li>
                </ol>
            `
        },
        {
            id: 'international-patients',
            title: 'Apoyo especial para nuestros pacientes',
            content: `
                <p>Nos dedicamos a brindar una experiencia sin interrupciones, independientemente de su lugar de residencia:</p>
                <ul>
                    <li><strong>Pacientes internacionales:</strong> Ofrecemos asistencia completa con el alojamiento y el transporte local para que su viaje quirúrgico sea libre de estrés.</li>
                    <li><strong>Seguimiento en Italia:</strong> Para nuestros pacientes italianos, ofrecemos la ventaja exclusiva de consultas de seguimiento y revisiones directamente en Italia, garantizando la continuidad de la atención cerca de su hogar.</li>
                </ul>
            `
        }
    ]
};

export default armLiftContent;