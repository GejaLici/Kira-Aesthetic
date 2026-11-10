import type { ServiceContent } from '@/lib/services';

const microdermabrasionContent: ServiceContent = {
    description: [
        "La microdermabrasión es un tratamiento de renovación cutánea no invasivo diseñado para revitalizar y pulir la piel. Mediante el uso de un aplicador especializado con punta de diamante o finos cristales abrasivos, este procedimiento elimina suavemente la capa externa gruesa de células muertas de la piel (el estrato córneo). Esta exfoliación mecánica revela la piel más fresca y radiante que se encuentra debajo y activa la respuesta de curación natural del cuerpo para producir más colágeno.",
        "Conocida como el 'peeling a la hora del almuerzo', la microdermabrasión es una forma rápida e indolora de abordar diversas imperfecciones superficiales de la piel. Ya sea que se enfrente a una piel opaca, líneas finas o textura irregular, este tratamiento proporciona un brillo instantáneo y una sensación de suavidad sin ningún tiempo de inactividad, lo que lo convierte en el procedimiento de mantenimiento perfecto para un estilo de vida ocupado."
    ],
    benefits: [
        "Resplandor instantáneo: Elimina las células muertas y opacas para un brillo saludable inmediato.",
        "Refina la textura: Suaviza las zonas ásperas y atenúa la apariencia de las líneas finas.",
        "Desobstruye los poros: Limpia eficazmente los residuos superficiales para reducir el riesgo de brotes.",
        "Mejora la absorción de productos: Permite que sus sueros y cremas hidratantes penetren más profundamente.",
        "Unifica el tono de la piel: Ayuda a desvanecer la hiperpigmentación leve, las manchas solares y las manchas de la edad con el tiempo."
    ],
    quickFacts: {
        procedureTime: '30 - 45 minutos',
        anesthesia: 'No requerida (indoloro)',
        recoveryTime: 'Ninguna; puede haber un ligero enrojecimiento durante 1-2 horas',
        results: 'Luminosidad inmediata; resultados acumulativos tras una serie de sesiones',
    },
    sections: [
        {
            id: 'clinical-approach',
            title: 'Nuestro Enfoque de Exfoliación Personalizada',
            content: `
                <p>Tratamos la microdermabrasión como un paso clínico del cuidado de la piel, asegurando que la intensidad se adapte perfectamente a la sensibilidad de su cutis:</p>
                <ul>
                    <li><strong>Equipamiento de Grado Profesional:</strong> Utilizamos sistemas de alta gama que ofrecen niveles ajustables de succión y abrasión para un resultado constante y seguro.</li>
                    <li><strong>Análisis de la Piel:</strong> Antes de comenzar, nuestros esteticistas evalúan su tipo de piel para asegurar que la microdermabrasión sea la opción más eficaz para sus preocupaciones.</li>
                    <li><strong>Infusión de Nutrientes:</strong> Tras la exfoliación, la piel está preparada para absorber nutrientes. Aplicamos sueros especializados ricos en antioxidantes y ácido hialurónico para calmar e hidratar la piel.</li>
                </ul>
            `
        },
        {
            id: 'treatment-experience',
            title: 'Qué Esperar Durante la Sesión',
            content: `
                <p>La experiencia a menudo se describe como una sensación de "lijado" suave o el lamido áspero de la lengua de un gato:</p>
                <ol>
                    <li><strong>Limpieza:</strong> Se limpia profundamente la piel para eliminar todo rastro de maquillaje y aceites.</li>
                    <li><strong>Exfoliación:</strong> El esteticista desplaza la pieza de mano sobre las áreas objetivo, utilizando succión al vacío para retirar las impurezas.</li>
                    <li><strong>Hidratación y Protección:</strong> Se aplica una mascarilla calmante o un suero refrescante, seguido de un protector solar de alto FPS para proteger las capas de piel recién expuestas.</li>
                </ol>
            `
        },
        {
            id: 'optimal-results',
            title: 'Manteniendo su Brillo',
            content: `
                <p>Aunque una sesión proporciona un refresco visible, la salud de la piel a largo plazo se logra mediante la constancia:</p>
                <ul>
                    <li><strong>Serie Recomendada:</strong> Para problemas como líneas finas o cicatrices leves, solemos sugerir una serie de 5 a 10 tratamientos.</li>
                    <li><strong>Espaciado:</strong> Lo ideal es espaciar las sesiones de 2 a 4 semanas para alinearlas con el ciclo de regeneración natural de la piel de 28 días.</li>
                    <li><strong>Seguridad Solar:</strong> Debido a que se elimina la capa protectora externa, su piel estará más sensible a los rayos UV. El uso diario de protector solar es obligatorio tras el tratamiento.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Experiencia para Pacientes Internacionales',
            content: `
                <p>Para nuestros clientes que viajan desde el extranjero, nos aseguramos de que su visita sea productiva y libre de estrés:</p>
                <ul>
                    <li><strong>Integración de Tratamientos:</strong> La microdermabrasión suele combinarse con otros procedimientos como peelings químicos o tratamientos con láser para una renovación total de la piel.</li>
                    <li><strong>Soporte de Viaje:</strong> Ofrecemos asistencia con el transporte y alojamiento premium en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italy</strong>.</li>
                    <li><strong>Atención Transfronteriza:</strong> Puede comenzar su serie de tratamientos en una ubicación y continuar las sesiones de seguimiento en cualquiera de nuestras otras clínicas regionales.</li>
                </ul>
            `
        }
    ]
};

export default microdermabrasionContent;