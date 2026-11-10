import type { ServiceContent } from '@/lib/services';

const compositeVeneersContent: ServiceContent = {
    description: [
        "Las carillas de composite, a menudo denominadas unión dental o carillas directas, son una solución cosmética versátil y rentable diseñada para mejorar instantáneamente la apariencia de sus dientes. A diferencia de las carillas de porcelana tradicionales que se fabrican en un laboratorio, las de composite son esculpidas a mano por nuestros expertos dentistas directamente sobre sus dientes utilizando una resina de alta calidad del color del diente.",
        "Este procedimiento mínimamente invasivo es ideal para corregir pequeñas imperfecciones dentales como astillamientos, espacios (diastemas) y decoloraciones persistentes en una sola visita. Debido a que el tratamiento requiere poca o ninguna eliminación del esmalte natural, es una de las formas más conservadoras de lograr una transformación significativa de la sonrisa con resultados inmediatos y naturales."
    ],
    benefits: [
        "Transformación en una sola visita: Logre una sonrisa nueva en una sola cita dental.",
        "Mínimamente invasivo: Preserva la estructura dental natural con poca o ninguna reducción del esmalte.",
        "Corrección versátil: Corrige eficazmente dientes astillados, grietas, espacios y formas irregulares.",
        "Económico: Una alternativa más asequible que las carillas de porcelana con resultados estéticos de alta calidad.",
        "Fácilmente reparable: A diferencia de la porcelana, la resina de composite se puede retocar o reparar fácilmente si se daña."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutos por diente',
        anesthesia: 'Normalmente no es necesaria',
        recoveryTime: 'Inmediata; sin tiempo de inactividad',
        results: 'Duran entre 5 y 7 años con el mantenimiento adecuado',
    },
    sections: [
        {
            id: 'smile-design',
            title: 'Arte en cada capa',
            content: `
                <p>Crear carillas de composite es tanto un arte como una ciencia. Nuestros dentistas estéticos utilizan una técnica de estratificación meticulosa para asegurar que su nueva sonrisa luzca completamente natural:</p>
                <ul>
                    <li><strong>Combinación de colores personalizada:</strong> Utilizamos múltiples tonos de resina para imitar la translucidez y el degradado natural del esmalte real.</li>
                    <li><strong>Esculpido anatómico:</strong> La resina se moldea a mano para mejorar la longitud, el ancho y la textura superficial de cada diente.</li>
                    <li><strong>Pulido de alto brillo:</strong> Un proceso de pulido de varios pasos garantiza que las carillas tengan el mismo brillo que refleja la luz que sus dientes naturales circundantes.</li>
                </ul>
            `
        },
        {
            id: 'the-process',
            title: 'Qué esperar durante el tratamiento',
            content: `
                <p>El proceso es sencillo y cómodo para el paciente:</p>
                <ol>
                    <li><strong>Preparación:</strong> La superficie del diente se limpia y se acondiciona ligeramente para crear una unión fuerte con la resina.</li>
                    <li><strong>Aplicación:</strong> El dentista aplica el composite (con textura de masilla) y lo esculpe hasta lograr la forma ideal.</li>
                    <li><strong>Fraguado:</strong> Se utiliza una luz azul de alta intensidad para endurecer instantáneamente la resina.</li>
                    <li><strong>Refinamiento:</strong> Se realizan los ajustes finales en su mordida, seguidos de un pulido detallado.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Mantenimiento de su nueva sonrisa',
            content: `
                <p>Aunque las carillas de composite son duraderas, requieren cuidados específicos para mantenerse brillantes e intactas:</p>
                <ul>
                    <li><strong>Prevención de manchas:</strong> La resina puede absorber manchas con el tiempo. Recomendamos enjuagarse la boca tras consumir café, té o vino tinto.</li>
                    <li><strong>Evitar impactos fuertes:</strong> Absténgase de morderse las uñas, hielo o bolígrafos, ya que pueden astillar el material de composite.</li>
                    <li><strong>Higiene regular:</strong> El cepillado y el uso de hilo dental estándar son esenciales, junto con limpiezas profesionales para mantener el pulido de la resina.</li>
                </ul>
            `
        },
        {
            id: 'why-choose-us',
            title: 'Comodidad para pacientes internacionales',
            content: `
                <p>Para nuestros clientes globales, las carillas de composite ofrecen la solución definitiva de "en el mismo día". Puede llegar con preocupaciones dentales y salir esa misma tarde con una sonrisa totalmente restaurada. Ofrecemos apoyo logístico completo, incluyendo:</p>
                <ul>
                    <li><strong>Transporte y estancia:</strong> Asistencia con los arreglos de viaje y alojamiento confortable cerca de nuestra clínica.</li>
                    <li><strong>Seguimientos regionales:</strong> Acceso a nuestras clínicas asociadas en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italy</strong> para cualquier mantenimiento futuro o retoque.</li>
                </ul>
            `
        }
    ]
};

export default compositeVeneersContent;