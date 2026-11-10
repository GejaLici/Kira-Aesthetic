import type { ServiceContent } from '@/lib/services';

const liposuctionContent: ServiceContent = {
    description: [
        "La liposucción es uno de los procedimientos cosméticos más eficaces y populares para eliminar depósitos de grasa localizados y rebeldes que son resistentes a la dieta y al ejercicio. Al eliminar permanentemente las células grasas de áreas específicas —como el abdomen, las caderas, los muslos, los brazos y el cuello—, la liposucción permite un esculpido corporal preciso, ayudándole a lograr una silueta más delgada, proporcionada y estéticamente agradable.",
        "Es importante destacar que la liposucción es una herramienta de contorneado corporal y no un método de pérdida de peso. Los mejores resultados se logran en pacientes que se encuentran en su peso ideal o cerca de él, pero que buscan eliminar 'áreas problemáticas'. Con las técnicas modernas y mínimamente invasivas actuales, podemos ofrecer resultados más suaves, menos hematomas y una recuperación más rápida que nunca."
    ],
    benefits: [
        "Elimina grasa rebelde: Trata depósitos localizados que no responden a la pérdida de peso tradicional.",
        "Resultados permanentes: Una vez que se extraen las células grasas de un área, estas no vuelven a crecer.",
        "Esculpido de precisión: Mejora los contornos naturales del cuerpo y las proporciones generales.",
        "Mínimamente invasivo: Pequeñas incisiones (de pocos milímetros) que resultan en cicatrices casi invisibles.",
        "Aplicación versátil: Puede tratar diversas áreas, incluyendo el mentón, la espalda, los flancos y las piernas."
    ],
    quickFacts: {
        procedureTime: '1 - 4 horas (dependiendo del volumen)',
        anesthesia: 'Local con sedación o anestesia general',
        recoveryTime: '3 - 7 días para volver al trabajo; 4-6 semanas para ejercicio',
        results: 'Cambios iniciales en semanas; resultados finales tras 3-6 meses',
    },
    sections: [
        {
            id: 'liposuction-techniques',
            title: 'Tecnologías Avanzadas de Eliminación de Grasa',
            content: `
                <p>Utilizamos diversas técnicas de vanguardia para garantizar la máxima precisión y seguridad del paciente:</p>
                <ul>
                    <li><strong>Liposucción Tumescente:</strong> La técnica estándar de oro donde se inyecta una solución medicada para adormecer el área y contraer los vasos sanguíneos, haciendo que la extracción de grasa sea suave y eficiente.</li>
                    <li><strong>Liposucción VASER:</strong> Utiliza ondas de ultrasonido para romper selectivamente las células grasas preservando los tejidos circundantes como nervios y vasos sanguíneos.</li>
                    <li><strong>Liposucción Asistida por Potencia (PAL):</strong> Cuenta con una cánula vibratoria especializada que permite una extracción de grasa más suave con menos trauma físico para el cuerpo.</li>
                </ul>
            `
        },
        {
            id: 'treatment-areas',
            title: 'Áreas Comunes de Tratamiento',
            content: `
                <p>La liposucción es un procedimiento sumamente versátil capaz de refinar casi cualquier área del cuerpo:</p>
                <ul>
                    <li><strong>Abdomen y Flancos:</strong> Eliminación de los "michelines" y la grasa abdominal para una sección media más plana.</li>
                    <li><strong>Muslos y Caderas:</strong> Remodelación de la cara interna y externa de los muslos para un mejor contorno de las piernas.</li>
                    <li><strong>Tren Superior:</strong> Tratamiento de la espalda, la grasa del sujetador y la parte superior de los brazos.</li>
                    <li><strong>Rostro y Cuello:</strong> Eliminación de la grasa submentoniana (papada) para definir la línea de la mandíbula.</li>
                </ul>
            `
        },
        {
            id: 'recovery-guidelines',
            title: 'Cuidados Postoperatorios y Recuperación',
            content: `
                <p>Cumplir con su plan de recuperación es esencial para garantizar una piel suave y contornos óptimos:</p>
                <ol>
                    <li><strong>Prendas de Compresión:</strong> Debe usar una faja de compresión de grado médico durante 4 a 6 semanas. Esto controla la hinchazón y ayuda a que la piel se adapte a su nueva forma.</li>
                    <li><strong>Actividad Física:</strong> Aunque se requiere descanso inicial, se recomienda caminar suavemente dentro de las primeras 24 horas para prevenir coágulos sanguíneos.</li>
                    <li><strong>Gestión de la Hinchazón:</strong> Los hematomas y la hinchazón alcanzan su punto máximo durante la primera semana. A menudo recomendamos masajes de drenaje linfático para acelerar el proceso de curación.</li>
                </ol>
            `
        },
        {
            id: 'international-support',
            title: 'Atención de Clase Mundial para Pacientes Internacionales',
            content: `
                <p>Ofrecemos una experiencia de "turismo médico" fluida para nuestros pacientes que viajan desde el extranjero:</p>
                <ul>
                    <li><strong>Soporte Logístico:</strong> Asistencia con traslados al aeropuerto y alojamiento premium en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Red de Seguimiento:</strong> Puede optar por realizar sus chequeos postoperatorios en cualquiera de nuestras clínicas en la región.</li>
                    <li><strong>Seguridad Integral:</strong> Todos los procedimientos se realizan en centros quirúrgicos acreditados por cirujanos plásticos certificados.</li>
                </ul>
            `
        }
    ]
};

export default liposuctionContent;