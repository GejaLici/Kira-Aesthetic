import type { ServiceContent } from '@/lib/services';

const tummyTuckContent: ServiceContent = {
    description: [
        "Una abdominoplastia es un procedimiento quirúrgico transformador diseñado para crear un perfil abdominal más plano, firme y tonificado. Esta cirugía aborda problemas estructurales que la dieta y el ejercicio por sí solos a menudo no pueden solucionar, como la flacidez cutánea significativa tras la pérdida de peso o el embarazo, y la reparación de los músculos abdominales separados (diástasis de rectos). Al eliminar el exceso de tejido y tensar el 'corsé' interno de la pared abdominal, este procedimiento restaura un contorno suave y juvenil en la zona media.",
        "Nuestro enfoque en la abdominoplastia se centra en el contorno corporal integral. No solo eliminamos piel; esculpimos el abdomen para asegurar que las nuevas proporciones armonicen con su físico natural. Ya sea que busque recuperar su figura previa al embarazo o finalizar un proceso de pérdida de peso significativa, nuestros cirujanos certificados utilizan técnicas avanzadas para minimizar las cicatrices y maximizar la definición de su área abdominal."
    ],
    benefits: [
        "Reparación muscular: Tensa quirúrgicamente los músculos abdominales debilitados o separados para un núcleo más firme.",
        "Eliminación de piel: Elimina el 'delantal' de exceso de piel que puede causar molestias y problemas de higiene.",
        "Eliminación de grasa persistente: Elimina los depósitos de grasa localizados que son resistentes a la pérdida de peso tradicional.",
        "Mejora de la postura: El fortalecimiento de la pared abdominal a menudo puede aliviar el dolor de espalda y mejorar el soporte espinal.",
        "Aumento de confianza: Proporciona un impulso significativo en la autoestima y comodidad al usar ropa ajustada."
    ],
    quickFacts: {
        procedureTime: '2 - 5 horas',
        anesthesia: 'Anestesia general',
        recoveryTime: '2 - 4 semanas (trabajo de escritorio); 6 - 8 semanas para actividad extenuante',
        results: 'Abdomen drásticamente más plano; resultados finales visibles tras la desaparición de la inflamación (6-12 meses)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Técnicas de Abdominoplastia Personalizadas',
            content: `
                <p>Ofrecemos varias modalidades de abdominoplastia para adaptarse a sus necesidades anatómicas específicas:</p>
                <ul>
                    <li><strong>Abdominoplastia Completa:</strong> El enfoque estándar para pacientes con exceso de piel y laxitud muscular tanto arriba como debajo del ombligo. Incluye la reposición del ombligo.</li>
                    <li><strong>Mini Abdominoplastia:</strong> Ideal para pacientes cuyas preocupaciones se limitan al área debajo del ombligo. Requiere una incisión más corta y no hay reposición del ombligo.</li>
                    <li><strong>Abdominoplastia Extendida:</strong> Se dirige al abdomen y a los "michelines" (flancos), a menudo necesaria tras una pérdida masiva de peso.</li>
                    <li><strong>Abdominoplastia de Alta Tensión Lateral:</strong> Una técnica especializada que se enfoca en elevar los muslos y suavizar la cintura mientras se aplana el estómago.</li>
                </ul>
            `
        },
        {
            id: 'safety-preparation',
            title: 'Preparación y Seguridad del Paciente',
            content: `
                <p>Dado que la abdominoplastia es una cirugía mayor, nos adherimos a rigurosos protocolos de seguridad:</p>
                <ol>
                    <li><strong>Evaluación Clínica:</strong> Paneles de sangre completos, ECG y una consulta de cardiología aseguran que usted es apto para la anestesia general.</li>
                    <li><strong>Cese de Nicotina:</strong> Fumar aumenta significativamente el riesgo de necrosis cutánea y mala cicatrización. Los pacientes deben dejar de fumar al menos 4-6 semanas antes y después de la cirugía.</li>
                    <li><strong>Estabilidad de Peso:</strong> Recomendamos que los pacientes estén en su peso objetivo o cerca de él durante al menos tres meses para asegurar resultados duraderos.</li>
                </ol>
            `
        },
        {
            id: 'recovery-protocol',
            title: 'Su Proceso de Recuperación',
            content: `
                <p>Un resultado exitoso depende en gran medida del cumplimiento postoperatorio:</p>
                <ul>
                    <li><strong>Estancia Hospitalaria:</strong> Espere pasar de 1 a 3 noches en nuestra clínica para monitoreo profesional y manejo del dolor.</li>
                    <li><strong>Terapia de Compresión:</strong> Se debe usar una faja abdominal especializada durante 4 a 8 semanas para dar soporte a los músculos y reducir la acumulación de líquidos.</li>
                    <li><strong>Cuidado Postural:</strong> Durante la primera semana, es probable que deba caminar ligeramente inclinado hacia adelante para evitar tensión en la línea de incisión.</li>
                    <li><strong>Gestión de Cicatrices:</strong> Aunque la incisión se coloca discretamente debajo de la línea del bikini, proporcionamos protocolos avanzados de cuidado de cicatrices para asegurar que se atenúen de forma óptima.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Atención Global para Clientes Internacionales',
            content: `
                <p>Brindamos una experiencia sin interrupciones para los pacientes que viajan por una cirugía de contorno corporal:</p>
                <ul>
                    <li><strong>Gestión Logística:</strong> Organizamos traslados al aeropuerto y alojamiento de alta calidad en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Seguimientos Regionales:</strong> Si reside en la región, puede optar por realizar sus chequeos postoperatorios en cualquiera de nuestras clínicas afiliadas.</li>
                    <li><strong>Comunicación Directa:</strong> Tendrá un coordinador dedicado para asistirle con consultas virtuales y planificación previa al viaje.</li>
                </ul>
            `
        }
    ]
};

export default tummyTuckContent;