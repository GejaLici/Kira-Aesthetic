import type { ServiceContent } from '@/lib/services';

const invisalignContent: ServiceContent = {
    description: [
        "Invisalign es un sistema de ortodoncia revolucionario que endereza los dientes mediante una serie de alineadores transparentes hechos a medida y prácticamente invisibles. Este enfoque moderno ofrece una alternativa discreta, cómoda y flexible a los brackets metálicos tradicionales, convirtiéndose en la opción preferida para adultos y adolescentes que desean mejorar su sonrisa sin el aspecto típico de los aparatos fijos. Los alineadores están fabricados con un plástico liso libre de BPA y se ajustan perfectamente a sus dientes, aplicando una fuerza controlada para guiarlos hacia la posición ideal.",
        "Más allá de la estética, Invisalign proporciona una experiencia altamente predecible e higiénica. Debido a que los alineadores son removibles, puede mantener su dieta habitual y su rutina de cuidado bucal con facilidad. Utilizando modelos digitales 3D avanzados, podemos mapear todo su proceso desde el primer alineador hasta su sonrisa final, permitiéndole ver los resultados proyectados incluso antes de que comience el tratamiento."
    ],
    benefits: [
        "Casi Invisible: El material transparente SmartTrack™ hace que su tratamiento sea prácticamente imperceptible.",
        "Removible: Retire fácilmente sus alineadores para comer, beber y asistir a eventos sociales especiales.",
        "Comodidad Superior: Sin brackets ni alambres metálicos que causen irritación bucal o urgencias dentales.",
        "Mejor Higiene: El cepillado y el uso de hilo dental siguen siendo sencillos, reduciendo el riesgo de placa durante el tratamiento.",
        "Precisión Digital: El mapeo 3D garantiza movimientos más precisos y, a menudo, tiempos de tratamiento más cortos."
    ],
    quickFacts: {
        procedureTime: 'Escaneo inicial: 30 min; Chequeos: Cada 6-8 semanas',
        anesthesia: 'No requerida',
        recoveryTime: 'Ninguna; 1-2 días de presión leve con cada nuevo alineador',
        results: 'Dientes alineados típicamente en 12 - 18 meses',
    },
    sections: [
        {
            id: 'digital-precision',
            title: 'Tecnología de Planificación 3D Avanzada',
            content: `
                <p>El núcleo del éxito de Invisalign es nuestro flujo de trabajo digital de vanguardia, que garantiza un ajuste perfecto y resultados predecibles:</p>
                <ul>
                    <li><strong>Escaneo Digital iTero®:</strong> Capturamos una imagen 3D de alta resolución de sus dientes en minutos, reemplazando las incómodas y pegajosas impresiones de masilla del pasado.</li>
                    <li><strong>Software ClinCheck®:</strong> Esto nos permite ajustar cada movimiento dental. Podrá ver una animación virtual 3D de la transformación de su sonrisa antes de fabricar sus alineadores personalizados.</li>
                    <li><strong>Tecnología SmartStage®:</strong> Optimiza la progresión de los movimientos para asegurar que cada diente se mueva en el orden correcto para la máxima eficiencia.</li>
                </ul>
            `
        },
        {
            id: 'the-invisalign-journey',
            title: 'Su Camino hacia una Nueva Sonrisa',
            content: `
                <p>El tratamiento es sencillo y está diseñado para adaptarse perfectamente a un estilo de vida ocupado:</p>
                <ol>
                    <li><strong>Consulta:</strong> Evaluamos su estructura dental y discutimos sus objetivos estéticos para asegurar que Invisalign sea la opción adecuada para usted.</li>
                    <li><strong>Fabricación a Medida:</strong> Sus escaneos 3D se envían al laboratorio, donde se fabrica una serie completa de alineadores personalizados exclusivos para usted.</li>
                    <li><strong>La Rutina:</strong> Usará cada juego de alineadores durante unas 20–22 horas al día, cambiando al siguiente juego cada 1–2 semanas.</li>
                    <li><strong>Monitoreo:</strong> Breves chequeos cada pocos meses aseguran que sus dientes sigan perfectamente el plan establecido.</li>
                </ol>
            `
        },
        {
            id: 'lifestyle-maintenance',
            title: 'La Vida con Alineadores Transparentes',
            content: `
                <p>Invisalign requiere disciplina pero ofrece una libertad inigualable en comparación con la ortodoncia fija:</p>
                <ul>
                    <li><strong>Libertad Dietética:</strong> Al quitarse los alineadores para comer, no hay restricciones con alimentos duros, pegajosos o crujientes.</li>
                    <li><strong>Limpieza:</strong> Simplemente enjuague sus alineadores y cepíllelos suavemente con un cepillo suave para mantenerlos transparentes y sin olores.</li>
                    <li><strong>Retenedores Vivera®:</strong> Una vez finalizado el tratamiento, proporcionamos retenedores Vivera a medida —fabricados con la misma alta tecnología— para mantener su nueva sonrisa en su lugar.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Excelencia Ortodóncica Global',
            content: `
                <p>Nos especializamos en coordinar el tratamiento Invisalign para nuestros pacientes internacionales:</p>
                <ul>
                    <li><strong>Citas Comprimidas:</strong> Podemos proporcionar varios juegos de alineadores a la vez para minimizar el número de visitas requeridas a la clínica.</li>
                    <li><strong>Soporte Regional:</strong> Acceda a controles de progreso y atención dental en cualquiera de nuestras clínicas asociadas en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Servicios de Conserjería:</strong> Asistimos con los preparativos del viaje y el alojamiento local para que sus "vacaciones dentales" sean fluidas y sin estrés.</li>
                </ul>
            `
        }
    ]
};

export default invisalignContent;