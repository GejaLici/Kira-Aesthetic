import type { ServiceContent } from '@/lib/services';

const dentalCrownsContent: ServiceContent = {
    description: [
        "Una corona dental es una 'funda' fabricada a medida y diseñada para cubrir totalmente un diente dañado, debilitado o estéticamente comprometido. Al cubrir toda la porción visible del diente por encima de la línea de la encía, la corona restaura su forma, tamaño y fuerza originales, proporcionando al mismo tiempo una barrera protectora contra futuras caries o fracturas.",
        "Las coronas dentales modernas están diseñadas para integrarse perfectamente con su sonrisa natural. Ya sea que necesite reforzar un diente tras una endodoncia, dar soporte a un gran empaste o cubrir un implante dental, nuestras coronas utilizan materiales biocompatibles avanzados que ofrecen el equilibrio perfecto entre durabilidad estructural y una translucidez muy similar a la real."
    ],
    benefits: [
        "Restaura la integridad estructural de dientes rotos, agrietados o severamente desgastados.",
        "Proporciona protección esencial para dientes débiles, evitando futuras fracturas.",
        "Mejora la estética corrigiendo la forma, el tamaño y el color de dientes deformados.",
        "Actúa como un anclaje duradero para puentes dentales y una cobertura segura para implantes.",
        "Funcionalidad a largo plazo, con resultados que pueden durar entre 10 y 15 años o más con el cuidado adecuado."
    ],
    quickFacts: {
        procedureTime: '2 visitas (preparación y colocación)',
        anesthesia: 'Anestesia local',
        recoveryTime: 'Inmediata; sensibilidad leve durante 24-48 horas',
        results: 'Restauración duradera; corona final colocada en la segunda visita',
    },
    sections: [
        {
            id: 'material-options',
            title: 'Materiales de alto rendimiento',
            content: `
                <p>Ofrecemos una variedad de materiales adaptados a la ubicación y función del diente que se va a restaurar:</p>
                <ul>
                    <li><strong>Zirconio:</strong> Reconocido por su extrema resistencia y biocompatibilidad, es la opción ideal para molares que soportan una gran presión al masticar.</li>
                    <li><strong>Totalmente Cerámica / Porcelana:</strong> Ofrece la coincidencia de color y reflexión de luz más natural, siendo el estándar de oro para los dientes frontales en la "zona de la sonrisa".</li>
                    <li><strong>Porcelana fundida sobre metal (PFM):</strong> Combina un interior metálico resistente para mayor durabilidad con un exterior de porcelana para una apariencia natural.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'El procedimiento: Restaurando su sonrisa',
            content: `
                <p>Restaurar un diente con una corona es un proceso preciso de dos etapas:</p>
                <ol>
                    <li><strong>Preparación:</strong> El diente se remodela cuidadosamente para alojar la corona. Tomamos impresiones digitales o moldes tradicionales para garantizar un ajuste perfecto.</li>
                    <li><strong>Protección temporal:</strong> Mientras su corona permanente se fabrica a medida en el laboratorio, colocamos una corona provisional para proteger su diente y mantener su mordida.</li>
                    <li><strong>Ajuste final:</strong> Una vez que su corona personalizada está lista, verificamos meticulosamente el ajuste y el color antes de cementarla permanentemente en su lugar.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Mantenimiento y longevidad',
            content: `
                <p>Un diente con corona requiere el mismo cuidado diligente que un diente natural para asegurar su durabilidad:</p>
                <ul>
                    <li><strong>Higiene Bucal:</strong> Cepíllese dos veces al día y use hilo dental con cuidado alrededor de la base de la corona para prevenir enfermedades de las encías y caries bajo el margen.</li>
                    <li><strong>Evite objetos duros:</strong> Absténgase de masticar hielo, caramelos duros u objetos no alimenticios para evitar que la porcelana se astille.</li>
                    <li><strong>Revisiones rutinarias:</strong> Las visitas dentales regulares nos permiten monitorear la integridad de la corona y la salud de los tejidos de soporte.</li>
                </ul>
            `
        },
        {
            id: 'international-service',
            title: 'Comodidad para pacientes internacionales',
            content: `
                <p>Nos especializamos en cuidados restaurativos eficientes y de alta calidad para pacientes que viajan desde el extranjero:</p>
                <ul>
                    <li><strong>Programación eficiente:</strong> Nos coordinamos con nuestros laboratorios dentales para asegurar que su restauración permanente esté lista dentro del plazo de su viaje.</li>
                    <li><strong>Apoyo logístico:</strong> Asistencia completa con el transporte local y alojamiento confortable cerca de nuestra moderna clínica.</li>
                    <li><strong>Seguimiento multilocación:</strong> Puede elegir completar sus cuidados de seguimiento o mantenimiento rutinario en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                </ul>
            `
        }
    ]
};

export default dentalCrownsContent;