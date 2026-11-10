import type { ServiceContent } from '@/lib/services';

const toothExtractionContent: ServiceContent = {
    description: [
        "Una extracción dental es la eliminación clínica de un diente de su cavidad en el hueso maxilar. Aunque nuestro objetivo principal es siempre preservar su dentición natural, una extracción se convierte en una medida necesaria y de mejora de la calidad de vida cuando un diente está comprometido más allá de toda reparación. Eliminar una fuente de infección crónica o de dolor intenso es a menudo el primer paso hacia la restauración de su salud oral general y su bienestar sistémico.",
        "Ya sea que se enfrente a una extracción de emergencia debido a un traumatismo o a un procedimiento planificado para las muelas del juicio o por espacio ortodóntico, nuestra clínica ofrece un entorno estéril y de alta tecnología. Nos centramos en técnicas de extracción 'atraumáticas', métodos diseñados para preservar la mayor cantidad posible de hueso circundante y tejido de las encías, lo cual es crucial si planea reemplazar el diente con un implante dental en el futuro."
    ],
    benefits: [
        "Eliminación del dolor: Elimina de forma inmediata la fuente de dolor dental agudo o crónico.",
        "Control de infecciones: Previene la propagación de bacterias desde un diente muerto o con absceso al resto del cuerpo.",
        "Protección de dientes adyacentes: Detiene la propagación de la caries y previene daños causados por muelas del juicio impactadas.",
        "Éxito ortodóntico: Crea el espacio necesario para una alineación dental eficaz en bocas con apiñamiento.",
        "Base para la restauración: Despeja el camino para reemplazos saludables y funcionales como los implantes dentales."
    ],
    quickFacts: {
        procedureTime: '20 - 60 minutos (según la complejidad)',
        anesthesia: 'Anestesia local (opciones de sedación disponibles para la ansiedad)',
        recoveryTime: '2 - 5 días para la curación inicial; evitar ejercicio pesado por 48h',
        results: 'Eliminación de la infección y el dolor; alveolo preparado para futura restauración',
    },
    sections: [
        {
            id: 'extraction-types',
            title: 'Extracciones Simples vs. Quirúrgicas',
            content: `
                <p>Categorizamos las extracciones según la complejidad de la posición y el estado del diente:</p>
                <ul>
                    <li><strong>Extracción Simple:</strong> Se realiza en dientes que son plenamente visibles por encima de la línea de la encía. Utilizando instrumentos especializados llamados elevadores y fórceps, el diente se afloja suavemente y se extrae bajo anestesia local.</li>
                    <li><strong>Extracción Quirúrgica:</strong> Requerida para dientes que se han roto en la línea de la encía o están impactados (como las muelas del juicio). Esto implica una pequeña incisión en la encía para acceder al diente de forma segura y puede requerir dividir el diente en secciones más pequeñas para una extracción más suave.</li>
                    <li><strong>Extracción de Muelas del Juicio:</strong> Cirugía especializada para eliminar los terceros molares que causan dolor, quistes o apiñamiento.</li>
                </ul>
            `
        },
        {
            id: 'comfort-first',
            title: 'Una Experiencia sin Dolor',
            content: `
                <p>La odontología moderna garantiza que la extracción de un diente sea una experiencia manejable y sin dolor:</p>
                <ol>
                    <li><strong>Anestesia Profunda:</strong> Utilizamos anestésicos locales avanzados para asegurar que toda la zona esté completamente adormecida. Sentirá presión, pero no dolor agudo.</li>
                    <li><strong>Odontología bajo Sedación:</strong> Para pacientes con fobia dental o casos quirúrgicos complejos, ofrecemos opciones de sedación para asegurar que permanezca relajado y sin estrés.</li>
                    <li><strong>Imagenología Pre-quirúrgica:</strong> Se utilizan radiografías de alta resolución o tomografías 3D (TAC) para mapear la estructura exacta de la raíz y la proximidad a los nervios antes de comenzar.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Cuidados Posteriores y Curación',
            content: `
                <p>El éxito de la curación depende de la protección del coágulo de sangre que se forma en el alveolo:</p>
                <ul>
                    <li><strong>Las primeras 24 horas:</strong> Muerda firmemente una gasa durante 45 minutos. Evite fumar, beber con pajita y enjuagarse vigorosamente, ya que esto puede causar "alveolitis seca" (pérdida del coágulo).</li>
                    <li><strong>Opciones Dietéticas:</strong> Consuma alimentos blandos y fríos como yogur, batidos y sopas tibias. Evite alimentos crujientes o picantes que puedan irritar la zona.</li>
                    <li><strong>Control de la Inflamación:</strong> Use una bolsa de hielo en el exterior de la mejilla en intervalos de 20 minutos durante el primer día para minimizar la inflamación.</li>
                    <li><strong>Higiene:</strong> Cepille sus otros dientes normalmente, pero enjuáguese suavemente con agua tibia con sal después de las primeras 24 horas para mantener limpio el sitio de la extracción.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Atención Quirúrgica y de Emergencia para Viajeros',
            content: `
                <p>Brindamos atención de respuesta rápida para pacientes internacionales que experimentan emergencias dentales o requieren cirugía oral planificada:</p>
                <ul>
                    <li><strong>Citas Inmediatas:</strong> Reservamos espacios de emergencia para viajeros con dolor agudo que requieren extracciones urgentes.</li>
                    <li><strong>Planificación de Reemplazo:</strong> Si viaja para una extracción, podemos coordinar un injerto de "preservación alveolar" para prepararlo para un implante dental durante la misma visita.</li>
                    <li><strong>Soporte en Múltiples Ubicaciones:</strong> Realice su procedimiento en <strong>Albania</strong> y su chequeo de seguimiento en <strong>Italia</strong> o <strong>Kosovo</strong> a través de nuestra red integrada.</li>
                </ul>
            `
        }
    ]
};

export default toothExtractionContent;