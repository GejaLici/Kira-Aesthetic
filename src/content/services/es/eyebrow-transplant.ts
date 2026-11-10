import type { ServiceContent } from '@/lib/services';

const eyebrowTransplantContent: ServiceContent = {
    description: [
        "El trasplante de cejas es un procedimiento de restauración capilar altamente especializado, diseñado para restaurar o mejorar permanentemente la densidad, forma y definición de las cejas. Es la solución ideal para personas que han perdido vello en las cejas debido a la genética, el exceso de depilación, cicatrices o condiciones médicas. Al utilizar su propio vello natural, este procedimiento ofrece una alternativa permanente y tridimensional a soluciones temporales como el microblading o el maquillaje.",
        "Utilizando la avanzada técnica de Extracción de Unidades Foliculares (FUE), los folículos pilosos individuales se extraen y trasplantan meticulosamente al área de la ceja. Nuestro enfoque se centra en la recreación artística de la ceja, asegurando que cada vello se coloque en el ángulo y la dirección correctos para imitar los patrones de crecimiento natural, lo que resulta en unas cejas bellamente esculpidas que enmarcan perfectamente su rostro."
    ],
    benefits: [
        "Resultados permanentes: Ofrece una solución de por vida utilizando sus propios folículos pilosos vivos.",
        "Apariencia natural: La colocación individual de los folículos imita la dirección natural del vello de la ceja.",
        "Diseño personalizado: Forma y densidad de cejas totalmente personalizadas, adaptadas a sus rasgos faciales.",
        "Tiempo de inactividad mínimo: La técnica FUE mínimamente invasiva permite una curación rápida sin cicatrices lineales.",
        "Elimina el mantenimiento diario: Reduce o elimina la necesidad de lápices, geles o polvos para cejas."
    ],
    quickFacts: {
        procedureTime: '3 - 5 horas',
        anesthesia: 'Anestesia local',
        recoveryTime: '7 - 10 días para la curación inicial',
        results: 'El crecimiento comienza a los 3-4 meses; resultados completos a los 12 meses',
    },
    sections: [
        {
            id: 'art-of-restoration',
            title: 'El Arte y la Precisión del Diseño de Cejas',
            content: `
                <p>La restauración de cejas es tanto una forma de arte como un procedimiento médico. Nos centramos en cuatro elementos críticos para garantizar un resultado impecable:</p>
                <ul>
                    <li><strong>Selección de folículos:</strong> Extraemos cuidadosamente los vellos más finos de la parte posterior del cuero cabelludo que mejor coincidan con la textura natural del vello de la ceja.</li>
                    <li><strong>Mapeo Anatómico:</strong> Diseñamos la forma de la ceja basándonos en su estructura ósea única y sus proporciones faciales.</li>
                    <li><strong>Angulación:</strong> Cada vello se implanta en un ángulo muy superficial para asegurar que repose plano contra la piel, igual que el vello natural.</li>
                    <li><strong>Flujo direccional:</strong> Replicamos el complejo patrón de crecimiento multidireccional de la ceja natural, desde el inicio vertical hasta la "cola" horizontal.</li>
                </ul>
            `
        },
        {
            id: 'the-fue-technique',
            title: 'El Método FUE para Cejas',
            content: `
                <p>Utilizamos exclusivamente el método de Extracción de Unidades Foliculares (FUE) por sus resultados superiores y la comodidad del paciente:</p>
                <ol>
                    <li><strong>Cosecha del Donante:</strong> Los folículos individuales se extraen mediante una herramienta de micro-punción especializada, sin dejar cicatrices visibles.</li>
                    <li><strong>Micro-incisiones:</strong> Se crean sitios diminutos, del tamaño de una aguja, en el área de la ceja para recibir los injertos.</li>
                    <li><strong>Implantación:</strong> Los injertos se colocan uno a uno bajo alta magnificación para asegurar una precisión absoluta.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'Qué Esperar Durante la Recuperación',
            content: `
                <p>Comprender el ciclo de curación es esencial para una experiencia libre de estrés:</p>
                <ul>
                    <li><strong>Fase inicial:</strong> Un enrojecimiento menor y pequeñas costras alrededor de los injertos se resolverán en 5 a 7 días.</li>
                    <li><strong>Fase de "pérdida":</strong> Es normal que los vellos trasplantados se caigan después de 2 a 4 semanas. Las raíces permanecen sanas y latentes bajo la piel.</li>
                    <li><strong>Nuevo crecimiento:</strong> El vello nuevo y fino comenzará a emerger después de 3 a 4 meses y continuará ganando grosor durante el primer año.</li>
                    <li><strong>Recorte:</strong> Debido a que estos vellos provienen del cuero cabelludo, crecerán más que el vello natural de la ceja y requerirán ser recortados cada 1 o 2 semanas.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Atención Integral para Clientes Internacionales',
            content: `
                <p>Brindamos apoyo integral para los pacientes que viajan desde el extranjero a nuestros centros especializados:</p>
                <ul>
                    <li><strong>Soporte Logístico:</strong> Asistencia completa con transporte local y alojamiento premium cerca de nuestra clínica.</li>
                    <li><strong>Continuidad Regional:</strong> Puede elegir completar sus cuidados de seguimiento o chequeos postoperatorios en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Evaluación remota:</strong> Envíenos fotos claras de sus cejas y del área donante para una evaluación virtual inicial antes de viajar.</li>
                </ul>
            `
        }
    ]
};

export default eyebrowTransplantContent;