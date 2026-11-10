import type { ServiceContent } from '@/lib/services';

const fixedBracesContent: ServiceContent = {
    description: [
        "La ortodoncia fija sigue siendo la solución más fiable y eficaz para lograr una sonrisa perfectamente alineada. Compuesta por pequeños brackets adheridos a cada diente y conectados por un arco especializado, aplican una presión suave y continua para guiar los dientes hacia sus posiciones ideales. Este método ofrece una precisión inigualable, permitiendo a los ortodoncistas corregir incluso los problemas de mordida y alineación más complejos.",
        "Ya sea para tratar el apiñamiento severo, espacios interdentales o discrepancias significativas en la mordida (como la sobremordida o mordida cruzada), los brackets fijos tradicionales proporcionan una herramienta versátil y potente. Los avances modernos han hecho que los sistemas actuales sean más pequeños, cómodos y estéticos que nunca, convirtiéndolos en la opción preferida tanto para adolescentes como para adultos que buscan una transformación dental permanente."
    ],
    benefits: [
        "Control de precisión: Capaz de corregir movimientos dentales complejos y desalineaciones severas.",
        "Versatilidad: Trata eficazmente sobremordidas, prognatismo, mordidas cruzadas y mordidas abiertas.",
        "Corrección constante: Al estar fijos, el tratamiento funciona las 24 horas del día, los 7 días de la semana, sin depender de la disciplina del paciente.",
        "Mejora de la salud bucal: Los dientes rectos son más fáciles de limpiar, lo que reduce el riesgo de caries y enfermedades de las encías.",
        "Resultados duraderos: Un método probado en el tiempo que proporciona una base de por vida para una sonrisa saludable."
    ],
    quickFacts: {
        procedureTime: '1 - 2 horas para la colocación',
        anesthesia: 'No requerida',
        recoveryTime: '3 - 5 días para adaptarse a la presión',
        results: 'Alineación completa típicamente en 18 - 24 meses',
    },
    sections: [
        {
            id: 'brace-options',
            title: 'Opciones de Ortodoncia Moderna',
            content: `
                <p>Ofrecemos varios sistemas de brackets que se adaptan a su estilo de vida y preferencias estéticas:</p>
                <ul>
                    <li><strong>Brackets metálicos:</strong> La opción más duradera y tradicional, que ahora cuenta con brackets de acero inoxidable de alta calidad más pequeños para mayor comodidad.</li>
                    <li><strong>Brackets cerámicos:</strong> Una alternativa discreta que utiliza brackets de cerámica transparente o del color del diente que se mimetizan con el esmalte natural, ideal para profesionales y adolescentes preocupados por su imagen.</li>
                    <li><strong>Arcos personalizados:</strong> Utilizamos arcos activados por calor que aprovechan la temperatura corporal para ayudar a que los dientes se muevan de forma más rápida y menos dolorosa que en el pasado.</li>
                </ul>
            `
        },
        {
            id: 'treatment-journey',
            title: 'Su camino hacia una sonrisa recta',
            content: `
                <p>El tratamiento de ortodoncia es un proceso estructurado centrado en un movimiento gradual y saludable:</p>
                <ol>
                    <li><strong>La colocación:</strong> Los brackets se adhieren con precisión a sus dientes y se coloca el arco inicial. Este proceso es completamente indoloro.</li>
                    <li><strong>Ajustes periódicos:</strong> Cada 4 a 8 semanas, nos visitará para tensar o cambiar los arcos, asegurando que sus dientes continúen moviéndose hacia su objetivo.</li>
                    <li><strong>El gran final:</strong> Una vez completada la alineación, se retiran los brackets y realizamos una limpieza profesional para revelar su nueva sonrisa.</li>
                </ol>
            `
        },
        {
            id: 'life-with-braces',
            title: 'Cuidado y Mantenimiento',
            content: `
                <p>El mantenimiento de sus brackets es esencial para un resultado exitoso y un esmalte sano:</p>
                <ul>
                    <li><strong>Ajustes en la dieta:</strong> Evite alimentos duros, pegajosos o muy crujientes (como frutos secos, chicles o cortezas duras) que puedan despegar los brackets o doblar los arcos.</li>
                    <li><strong>Higiene reforzada:</strong> Le enseñaremos técnicas especializadas de cepillado y uso de hilo dental, utilizando cepillos interdentales para mantener las áreas alrededor de sus brackets libres de placa.</li>
                    <li><strong>Fase de retención:</strong> Después de retirar los brackets, el uso de un retenedor personalizado es vital para asegurar que sus dientes permanezcan en su nueva posición durante años.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Atención Global para Pacientes de Ortodoncia',
            content: `
                <p>Para los pacientes que viajan desde el extranjero, nos aseguramos de que su experiencia sea eficiente y esté bien respaldada:</p>
                <ul>
                    <li><strong>Citas coordinadas:</strong> Programamos sus visitas de ajuste para maximizar su tiempo, ofreciendo apoyo total para el transporte local y el alojamiento.</li>
                    <li><strong>Continuidad del tratamiento:</strong> Nuestras clínicas en <strong>Albania</strong>, <strong>Kosovo</strong> e <strong>Italia</strong> le permiten elegir la ubicación más conveniente para sus chequeos regulares.</li>
                    <li><strong>Soporte de emergencia:</strong> Proporcionamos orientación y contactos locales en su país de origen para ajustes menores si fuera necesario entre visitas.</li>
                </ul>
            `
        }
    ]
};

export default fixedBracesContent;