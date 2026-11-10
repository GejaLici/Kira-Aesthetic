import type { ServiceContent } from '@/lib/services';

const breastReconstructionContent: ServiceContent = {
    description: [
        "La reconstrucción mamaria es un proceso quirúrgico vital diseñado para restaurar la forma, el volumen y la apariencia del seno tras una mastectomía o lumpectomía. Este procedimiento va más allá de la restauración física; es un paso fundamental en la recuperación emocional y psicológica de la paciente, ayudándole a recuperar la confianza en su cuerpo y su sentido de integridad tras enfrentar el cáncer de mama u otras condiciones médicas.",
        "Nuestro equipo especializado en reconstrucción utiliza técnicas avanzadas de microcirugía e implantes para recrear un seno que se vea y se sienta lo más natural posible. Trabajamos en estrecha coordinación con su equipo de oncología para proporcionar una transición fluida del tratamiento a la restauración, ofreciendo opciones de reconstrucción inmediata (en el momento de la mastectomía) o diferida, adaptadas a su historial de salud específico."
    ],
    benefits: [
        "Restaura la simetría corporal y el contorno natural del perfil mamario.",
        "Mejora significativamente el bienestar psicológico y la autoestima posmastectomía.",
        "Elimina la necesidad de utilizar prótesis externas de mama.",
        "Ofrece resultados permanentes mediante el uso de implantes avanzados o su propio tejido.",
        "Enfoque personalizable para igualar el tamaño y la forma del seno natural."
    ],
    quickFacts: {
        procedureTime: '2 - 12 horas (varía según la técnica)',
        anesthesia: 'Anestesia general',
        recoveryTime: '4 - 8 semanas para la recuperación total',
        results: 'Restauración permanente (puede requerir refinamiento del pezón posteriormente)',
    },
    sections: [
        {
            id: 'reconstruction-options',
            title: 'Metodologías de Reconstrucción',
            content: `
                <p>Ofrecemos diversas vías para la reconstrucción, dependiendo de su salud física y preferencias estéticas:</p>
                <ul>
                    <li><strong>Reconstrucción con implantes:</strong> El enfoque más común, que suele implicar un expansor de tejido seguido de un implante permanente de silicona o solución salina. Suele requerir un tiempo de recuperación más corto.</li>
                    <li><strong>Reconstrucción autóloga (colgajo):</strong> Una técnica sofisticada donde el cirujano utiliza su propio tejido del abdomen (colgajo DIEP o TRAM), la espalda (Dorsal Ancho) o los muslos. El resultado es el seno con el tacto más natural.</li>
                    <li><strong>Cirugía oncoplástica:</strong> Para pacientes que se someten a mastectomías parciales, utilizamos técnicas de cirugía plástica para remodelar el tejido mamario restante, evitando defectos o asimetrías.</li>
                </ul>
            `
        },
        {
            id: 'surgical-process',
            title: 'El proceso reconstructivo',
            content: `
                <p>La reconstrucción a menudo implica un enfoque en varias etapas para lograr una simetría óptima:</p>
                <ol>
                    <li><strong>Fase 1 (Restauración):</strong> Creación del montículo mamario mediante un implante o un colgajo de tejido.</li>
                    <li><strong>Fase 2 (Simetría):</strong> Se puede realizar un procedimiento secundario en el seno opuesto (levantamiento o reducción) para asegurar una coincidencia perfecta.</li>
                    <li><strong>Fase 3 (Refinamiento):</strong> Reconstrucción opcional del pezón y la aureola, a menudo mediante colgajos de tejido local o tatuaje médico.</li>
                </ol>
            `
        },
        {
            id: 'safety-recovery',
            title: 'Recuperación y cuidados a largo plazo',
            content: `
                <p>La recuperación depende de la complejidad del procedimiento; las cirugías basadas en colgajos requieren cuidados posteriores más intensivos:</p>
                <ul>
                    <li><strong>Estancia hospitalaria:</strong> Varía de 1-2 días para implantes hasta 3-7 días para transferencias de colgajos autólogos.</li>
                    <li><strong>Drenaje:</strong> Se utilizan drenajes quirúrgicos temporales para gestionar el líquido, que suelen retirarse en 1-2 semanas.</li>
                    <li><strong>Actividad física:</strong> Deben evitarse los movimientos bruscos y levantar objetos pesados durante al menos 6 semanas para asegurar la supervivencia del tejido y una curación adecuada.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Coordinación para pacientes internacionales',
            content: `
                <p>Brindamos un entorno compasivo e integral para las pacientes que viajan para recibir atención reconstructiva:</p>
                <ul>
                    <li><strong>Logística personalizada:</strong> Asistencia con el transporte y alojamiento seguro y cómodo durante su fase inicial de recuperación.</li>
                    <li><strong>Continuidad de la atención:</strong> Nuestra red única le permite asistir a consultas de seguimiento en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Medicina colaborativa:</strong> Nos coordinamos directamente con su oncólogo local para asegurar que su plan quirúrgico se alinee con su calendario general de tratamiento del cáncer.</li>
                </ul>
            `
        }
    ]
};

export default breastReconstructionContent;