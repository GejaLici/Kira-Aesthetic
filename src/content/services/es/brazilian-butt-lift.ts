import type { ServiceContent } from '@/lib/services';

const brazilianButtLiftContent: ServiceContent = {
    description: [
        "El Brazilian Butt Lift (BBL), o levantamiento de glúteos brasileño, es un procedimiento sofisticado de contorno corporal que mejora el volumen, la forma y la elevación de los glúteos utilizando tu propia grasa natural. A diferencia de los implantes, el BBL utiliza grasa extraída mediante liposucción de zonas donantes —como el abdomen, los flancos o los muslos— para crear una silueta más curvilínea y equilibrada, mientras se estilizan simultáneamente las áreas que deseas refinar.",
        "La belleza del BBL reside en su doble beneficio: ofrece una escultura corporal de alta definición en una zona y un aumento natural en otra. Al utilizar el propio tejido de tu cuerpo, los resultados se ven y se sienten increíblemente naturales. Nuestro enfoque se centra en crear una figura de 'reloj de arena' armoniosa, priorizando la seguridad del paciente y la supervivencia de las células grasas a largo plazo para un resultado que complemente tus proporciones únicas."
    ],
    benefits: [
        "Aumento de aspecto natural utilizando tu propia grasa corporal en lugar de implantes.",
        "Contorno corporal de doble acción: adelgaza las zonas donantes mientras aumenta los glúteos.",
        "Mejora de las proporciones corporales y una figura de 'reloj de arena' más definida.",
        "Resultados duraderos, ya que las células grasas transferidas se integran de forma permanente.",
        "Cicatrices mínimas gracias al uso de cánulas diminutas de liposucción e inyección."
    ],
    quickFacts: {
        procedureTime: '2 - 5 horas',
        anesthesia: 'Anestesia general',
        recoveryTime: '2 - 3 semanas (inicial); 6-8 semanas (actividad completa)',
        results: 'Visibles tras bajar la inflamación; finales a los 3-6 meses',
    },
    sections: [
        {
            id: 'bbl-technique',
            title: 'Escultura y lipotransferencia de precisión',
            content: `
                <p>Un BBL exitoso es una forma de arte que requiere una técnica meticulosa en cada etapa:</p>
                <ul>
                    <li><strong>Recolección suave:</strong> Utilizamos liposucción avanzada para extraer cuidadosamente las células grasas preservando su integridad.</li>
                    <li><strong>Purificación:</strong> La grasa recolectada se procesa para aislar las células más puras y sanas para el trasplante.</li>
                    <li><strong>Inyección estratégica:</strong> Nuestros cirujanos inyectan la grasa en las capas subcutáneas (sobre el músculo) para garantizar los más altos estándares de seguridad y un contorno lo más suave posible.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Protocolos de seguridad y preparación',
            content: `
                <p>La seguridad es nuestra prioridad absoluta. El BBL es una cirugía compleja que exige una planificación preoperatoria rigurosa:</p>
                <ul>
                    <li><strong>Evaluación exhaustiva:</strong> Análisis de sangre completos, ECG y exámenes físicos para asegurar que eres un candidato apto.</li>
                    <li><strong>Peso estable:</strong> Los candidatos deben tener un peso estable, ya que las fluctuaciones significativas pueden alterar la forma final.</li>
                    <li><strong>Cese del tabaquismo:</strong> Está estrictamente prohibido fumar de 4 a 6 semanas antes y después de la cirugía, ya que reduce significativamente la supervivencia de la grasa.</li>
                </ul>
            `
        },
        {
            id: 'recovery-rules',
            title: 'Pautas críticas de recuperación',
            content: `
                <p>El éxito de tu BBL depende en gran medida del cuidado postoperatorio, específicamente de la protección de las nuevas células grasas:</p>
                <ol>
                    <li><strong>La regla de no sentarse:</strong> Debes evitar sentarte o acostarte directamente sobre los glúteos durante al menos 2-3 semanas. Se requiere un 'cojín BBL' para cuando sea necesario sentarse.</li>
                    <li><strong>Compresión:</strong> Se debe usar una faja especializada en las zonas donantes para reducir la hinchazón y favorecer la retracción de la piel.</li>
                    <li><strong>Posición al dormir:</strong> Debes dormir boca abajo o de lado durante la fase inicial de curación.</li>
                    <li><strong>Caminar:</strong> Se recomienda caminar suavemente desde el principio para promover la circulación.</li>
                </ol>
            `
        },
        {
            id: 'international-logistics',
            title: 'Soporte para pacientes internacionales',
            content: `
                <p>Ofrecemos un ecosistema integral para nuestros clientes globales:</p>
                <ul>
                    <li><strong>Viaje y estancia:</strong> Asistencia completa con el transporte y alojamiento premium cerca de nuestro centro quirúrgico.</li>
                    <li><strong>Seguimiento flexible:</strong> Puedes elegir realizar tus revisiones postoperatorias en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Cuidado a largo plazo:</strong> Acceso directo a tu equipo quirúrgico para supervisar tus resultados a medida que la grasa se 'asienta' durante los primeros 6 meses.</li>
                </ul>
            `
        }
    ]
};

export default brazilianButtLiftContent;