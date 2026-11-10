import type { ServiceContent } from '@/lib/services';

const gynecomastiaContent: ServiceContent = {
    description: [
        "La ginecomastia, el desarrollo excesivo del tejido mamario masculino, es una condición común que puede afectar a hombres de todas las edades, provocando a menudo una inseguridad significativa y molestias físicas. La cirugía de reducción de pecho masculino es un procedimiento altamente eficaz diseñado para corregir los 'pezones hinchados' o el volumen excesivo del tórax mediante la eliminación del tejido glandular y la grasa localizada, creando un contorno pectoral más plano, firme y masculino.",
        "Este procedimiento se dirige específicamente al tejido que es resistente a la dieta y al ejercicio. Al combinar la liposucción avanzada con una escisión quirúrgica precisa, nuestros cirujanos certificados pueden remodelar el área del pecho, restaurando un perfil más atlético y aumentando significativamente la confianza y la calidad de vida del paciente."
    ],
    benefits: [
        "Restaura un contorno pectoral más plano, firme y tradicionalmente masculino.",
        "Elimina el tejido glandular y la grasa persistente que no responde al ejercicio.",
        "Corrige los 'pezones hinchados' y la asimetría pectoral para un aspecto más atlético.",
        "Aumenta la autoestima y la confianza en situaciones sociales e íntimas.",
        "Proporciona resultados permanentes, siempre que se mantenga un peso estable."
    ],
    quickFacts: {
        procedureTime: '1 - 3 horas',
        anesthesia: 'Anestesia general',
        recoveryTime: '1 semana para el trabajo; 4-6 semanas para ejercicio intenso',
        results: 'Contorno final visible después de 3-6 meses',
    },
    sections: [
        {
            id: 'customized-techniques',
            title: 'Técnicas de Esculpido de Precisión',
            content: `
                <p>Dado que cada caso de ginecomastia es único, adaptamos nuestro enfoque quirúrgico a la composición específica del tejido del paciente:</p>
                <ul>
                    <li><strong>Liposucción:</strong> Se utiliza principalmente cuando el exceso de volumen consiste en tejido graso. Se realiza a través de incisiones diminutas y discretas.</li>
                    <li><strong>Escisión Quirúrgica:</strong> Necesaria cuando hay una cantidad significativa de tejido glandular. La incisión se coloca típicamente a lo largo de la mitad inferior de la areola para ocultar cualquier cicatriz resultante.</li>
                    <li><strong>Enfoque Combinado:</strong> La mayoría de los pacientes se benefician de una técnica híbrida que utiliza la liposucción para el contorneado general y la escisión para el tejido glandular firme directamente debajo del pezón.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'El Camino hacia la Recuperación',
            content: `
                <p>El cuidado postoperatorio es vital para garantizar el mejor resultado estético y un proceso de curación fluido:</p>
                <ol>
                    <li><strong>Prenda de Compresión:</strong> Deberá usar un chaleco médico especializado durante 4 a 6 semanas para minimizar la hinchazón y ayudar a que la piel se adapte a la nueva forma del pecho.</li>
                    <li><strong>Curación Inicial:</strong> La mayoría de los pacientes pueden regresar al trabajo sedentario en 5-7 días. Los hematomas y la hinchazón leve son normales y alcanzarán su punto máximo en las primeras 72 horas.</li>
                    <li><strong>Restricciones de Ejercicio:</strong> Aunque se recomienda caminar de inmediato, se debe evitar levantar objetos pesados y los entrenamientos de la parte superior del cuerpo durante al menos un mes.</li>
                </ol>
            `
        },
        {
            id: 'results-longevity',
            title: 'Resultados a Largo Plazo',
            content: `
                <p>Los resultados de la cirugía de ginecomastia son generalmente permanentes. El tejido glandular extraído no vuelve a crecer. Sin embargo, para mantener su nuevo contorno, es importante:</p>
                <ul>
                    <li><strong>Mantener un Peso Estable:</strong> Un aumento significativo de peso puede provocar nuevos depósitos de grasa en el área del pecho.</li>
                    <li><strong>Estilo de Vida Saludable:</strong> Evite ciertos medicamentos o sustancias que puedan causar desequilibrios hormonales y potencialmente estimular el tejido restante.</li>
                </ul>
            `
        },
        {
            id: 'global-patient-support',
            title: 'Conserjería para Pacientes Internacionales',
            content: `
                <p>Ofrecemos una experiencia integral y discreta para nuestros clientes internacionales:</p>
                <ul>
                    <li><strong>Logística Todo Incluido:</strong> Asistencia con alojamiento premium y transporte privado entre el aeropuerto y la clínica.</li>
                    <li><strong>Seguimientos Estratégicos:</strong> Los pacientes tienen la opción única de realizar sus exámenes de seguimiento en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Consulta Remota:</strong> Las evaluaciones quirúrgicas iniciales pueden realizarse mediante la revisión de fotos de alta calidad para planificar su viaje de manera efectiva.</li>
                </ul>
            `
        }
    ]
};

export default gynecomastiaContent;