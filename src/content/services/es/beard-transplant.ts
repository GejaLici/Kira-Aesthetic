import type { ServiceContent } from '@/lib/services';

const beardTransplantContent: ServiceContent = {
    description: [
        "Un injerto de barba es un procedimiento especializado de restauración capilar diseñado para aumentar la densidad del vello facial y redefinir la estética masculina. Ya sea que se enfrente a un crecimiento irregular (parches), vello facial fino o desee ocultar cicatrices, este procedimiento utiliza sus propios folículos pilosos para crear una barba, bigote o patillas de aspecto completo y natural.",
        "Utilizando la técnica avanzada de Extracción de Unidades Foliculares (FUE), se recolectan folículos individuales del cuero cabelludo y se implantan artísticamente en el rostro. Esta solución permanente le permite dejarse crecer una barba real que se puede afeitar, recortar y peinar como el vello facial natural, proporcionando un impulso significativo a la autoconfianza y la simetría facial."
    ],
    benefits: [
        "Solución permanente para barbas y bigotes con calvas o poca densidad.",
        "Resultados de aspecto natural con vello que crece en el ángulo y dirección correctos.",
        "Diseño artístico adaptado a su estructura facial específica y objetivos estéticos.",
        "Técnica FUE mínimamente invasiva sin cicatrices lineales y con recuperación rápida.",
        "Capacidad para ocultar cicatrices faciales, marcas de acné o lesiones previas."
    ],
    quickFacts: {
        procedureTime: '3 - 8 horas',
        anesthesia: 'Anestesia local',
        recoveryTime: '7 - 10 días para la cicatrización inicial',
        results: 'Crecimiento visible a los 3-4 meses; resultados finales a los 12 meses',
    },
    sections: [
        {
            id: 'fue-technique',
            title: 'El arte de la restauración de barba FUE',
            content: `
                <p>Crear una barba realista requiere una combinación de precisión quirúrgica y visión artística. Utilizamos exclusivamente el método FUE (Extracción de Unidades Foliculares):</p>
                <ul>
                    <li><strong>Extracción individual:</strong> Los folículos se extraen uno a uno de la zona donante (generalmente la parte posterior de la cabeza) mediante micro-punzones, sin dejar cicatrices visibles.</li>
                    <li><strong>Colocación estratégica:</strong> Cada injerto se angula meticulosamente para imitar el flujo natural descendente del vello facial.</li>
                    <li><strong>Integración natural:</strong> Seleccionamos injertos de un solo cabello para los bordes y de mayor densidad para el centro de la barba, asegurando una transición suave e indetectable.</li>
                </ul>
            `
        },
        {
            id: 'treatment-phases',
            title: 'Su trayectoria en el trasplante',
            content: `
                <p>El procedimiento es una experiencia ambulatoria diseñada para su comodidad:</p>
                <ol>
                    <li><strong>Diseño y mapeo:</strong> Dibujamos el nuevo contorno de la barba basándonos en sus proporciones faciales y el estilo deseado.</li>
                    <li><strong>Recolección:</strong> Bajo anestesia local, se extraen los folículos donantes del cuero cabelludo.</li>
                    <li><strong>Creación de sitios:</strong> Se crean micro-canales en el área de la barba, determinando la densidad y la dirección.</li>
                    <li><strong>Implantación:</strong> Los injertos se colocan cuidadosamente en los sitios receptores.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'Cronología de recuperación y crecimiento',
            content: `
                <p>Comprender el proceso de curación es clave para un resultado exitoso:</p>
                <ul>
                    <li><strong>Primera semana:</strong> Se formarán pequeñas costras alrededor de los injertos. El enrojecimiento y la ligera hinchazón son normales y disminuyen rápidamente.</li>
                    <li><strong>Pérdida por choque (Shock Loss):</strong> Entre las semanas 2 y 4, el vello trasplantado se caerá. Es una parte normal del ciclo; las raíces permanecen sanas bajo la piel.</li>
                    <li><strong>Rebrote:</strong> El nuevo cabello permanente comienza a emerger alrededor del tercer o cuarto mes.</li>
                    <li><strong>Densidad completa:</strong> La barba continuará espesándose, alcanzando su apariencia final y madura entre los 10 y 12 meses.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Apoyo internacional y seguimiento',
            content: `
                <p>Brindamos una experiencia sin interrupciones para los pacientes que viajan desde el extranjero:</p>
                <ul>
                    <li><strong>Logística de viaje:</strong> Asistencia integral con el transporte y el alojamiento cerca de nuestra clínica.</li>
                    <li><strong>Seguimiento multilocación:</strong> Para su comodidad, puede organizar sus citas de revisión en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Soporte continuo:</strong> Nuestro equipo permanece disponible para consultas digitales y orientación postoperatoria durante todo el proceso de crecimiento.</li>
                </ul>
            `
        }
    ]
};

export default beardTransplantContent;