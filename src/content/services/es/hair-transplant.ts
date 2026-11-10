import type { ServiceContent } from '@/lib/services';

const hairTransplantContent: ServiceContent = {
    description: [
        "Un trasplante capilar es una solución quirúrgica altamente eficaz diseñada para restaurar permanentemente el crecimiento del cabello en áreas afectadas por el adelgazamiento o la calvicie. El procedimiento consiste en redistribuir folículos pilosos sanos y resistentes a la caída desde una zona donante —generalmente la parte posterior o los laterales del cuero cabelludo— hacia las zonas receptoras. Esto da como resultado una restauración permanente de la densidad capilar con un aspecto natural y una línea de cabello redefinida.",
        "La restauración capilar moderna ha evolucionado hasta convertirse en una sofisticada mezcla de ciencia médica y arte. Al utilizar su propio cabello natural, los resultados son prácticamente indetectables, lo que permite que el cabello trasplantado crezca, se corte y se peine exactamente igual que el resto de su melena. Nuestro objetivo es proporcionar un impulso duradero a su apariencia y confianza mediante técnicas centradas en la precisión."
    ],
    benefits: [
        "Crecimiento permanente: Los folículos trasplantados son genéticamente resistentes a las hormonas que causan la calvicie.",
        "Resultados de aspecto natural: La colocación meticulosa asegura que la línea del cabello y la densidad coincidan con sus rasgos faciales.",
        "Cicatrización indetectable: Las técnicas avanzadas FUE solo dejan puntos microscópicos, mientras que las cicatrices de FUT se ocultan fácilmente.",
        "Alta tasa de éxito: El manejo especializado de los injertos garantiza una alta tasa de supervivencia del cabello trasplantado.",
        "Restauración versátil: Eficaz para la calvicie de patrón masculino, coronillas ralas y entradas pronunciadas."
    ],
    quickFacts: {
        procedureTime: '4 - 8 horas (dependiendo del número de injertos)',
        anesthesia: 'Anestesia local con sedación ligera opcional',
        recoveryTime: '7 - 10 días para que desaparezcan las costras; 2 semanas para actividad normal',
        results: 'El crecimiento comienza a los 3-4 meses; resultados finales visibles a los 12-18 meses',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'FUE vs. FUT: Métodos Avanzados de Restauración',
            content: `
                <p>Ofrecemos las dos técnicas de restauración capilar más eficaces, adaptando la elección a su tipo de cabello específico y objetivos de densidad:</p>
                <ul>
                    <li><strong>FUE (Extracción de Unidades Foliculares):</strong> Los folículos individuales se extraen uno a uno mediante una herramienta de micro-punción. Es una técnica sin puntos que no deja cicatriz lineal y permite un tiempo de recuperación más corto.</li>
                    <li><strong>FUT (Trasplante de Unidades Foliculares):</strong> También conocido como el método de la 'tira', se retira una estrecha franja de piel con cabello que se disecciona bajo microscopios de alta potencia. Suele ser ideal para pacientes que requieren un gran volumen de injertos en una sola sesión.</li>
                </ul>
            `
        },
        {
            id: 'artistic-design',
            title: 'El Arte de una Línea Frontal Natural',
            content: `
                <p>Un trasplante exitoso se define por su invisibilidad. Nuestros cirujanos se centran en los detalles más finos del diseño capilar:</p>
                <ul>
                    <li><strong>Macro y Micro-irregularidades:</strong> Replicamos el patrón natural y no lineal de una línea de cabello real para asegurar que no parezca artificial o tipo "pelo de muñeca".</li>
                    <li><strong>Angulación:</strong> Los injertos se colocan en ángulos precisos para que coincidan con el flujo natural y el ángulo de salida de su cabello original.</li>
                    <li><strong>Densidad Estratégica:</strong> Priorizamos la colocación de injertos donde proporcionarán el impacto visual más significativo y una cobertura natural.</li>
                </ul>
            `
        },
        {
            id: 'recovery-cycle',
            title: 'Cronología de su Crecimiento',
            content: `
                <p>La paciencia es clave mientras los folículos pilosos transitan por sus ciclos naturales de crecimiento:</p>
                <ol>
                    <li><strong>Los primeros 10 días:</strong> Curación inicial donde se forman pequeñas costras que luego se caen. Se requiere un lavado suave durante este periodo.</li>
                    <li><strong>Fase de caída (Shock Loss):</strong> Entre las semanas 2 y 4, los tallos del cabello trasplantado se caerán. Esto es normal; la raíz viva permanece sana bajo la piel.</li>
                    <li><strong>Nuevo crecimiento:</strong> El cabello nuevo y fino comienza a emerger alrededor del tercer o cuarto mes.</li>
                    <li><strong>Maduración final:</strong> El cabello continúa engrosándose y oscureciéndose, logrando la densidad final entre los 12 y 18 meses.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Atención y Soporte Global',
            content: `
                <p>Brindamos una experiencia premium para pacientes internacionales que viajan para su restauración capilar:</p>
                <ul>
                    <li><strong>Conserjería Integral:</strong> Asistencia completa con traslados al aeropuerto, transporte local y alojamiento de alta gama.</li>
                    <li><strong>Seguimiento Multiregional:</strong> Los pacientes tienen la flexibilidad única de asistir a sus chequeos de seguimiento en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Soporte Directo:</strong> Acceso 24/7 a nuestro equipo médico para consultas postoperatorias durante su fase de curación inicial.</li>
                </ul>
            `
        }
    ]
};

export default hairTransplantContent;