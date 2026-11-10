import type { ServiceContent } from '@/lib/services';

const xanthelasmaRemovalContent: ServiceContent = {
    description: [
        "Los xantelasmas son placas amarillentas y planas de depósitos de colesterol que se desarrollan en o alrededor de los párpados. Aunque son médicamente benignos, pueden resultar distractores visualmente y a menudo afectan la confianza en uno mismo. En nuestra clínica, utilizamos la terapia de Arco de Plasma (Fibroblast), una solución no quirúrgica de vanguardia que elimina eficazmente estos depósitos sin necesidad de bisturíes, puntos o cirugía tradicional.",
        "La técnica de Arco de Plasma utiliza un dispositivo especializado para crear una descarga eléctrica microscópica que sublima el tejido superficial del xantelasma. Este proceso vaporiza el depósito de colesterol instantáneamente, dejando intacta la piel sana circundante. Este enfoque centrado en la precisión reduce significativamente el riesgo de cicatrices y proporciona un contorno de párpado más suave y claro con un tiempo de recuperación mucho más rápido que la escisión quirúrgica."
    ],
    benefits: [
        "Precisión no quirúrgica: No se requieren incisiones ni suturas, preservando la delicada piel del párpado.",
        "Tiempo de inactividad mínimo: Los pacientes pueden retomar la mayoría de sus actividades diarias inmediatamente después del procedimiento.",
        "Alta eficacia: Elimina eficazmente incluso las placas de colesterol persistentes en una o dos sesiones.",
        "Seguro para los párpados: El arco de plasma controlado solo afecta a la capa superficial de la piel tratada.",
        "Curación natural: Estimula los procesos regenerativos naturales de la piel para un resultado final suave."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minutos',
        anesthesia: 'Crema anestésica tópica de alta potencia',
        recoveryTime: '5 - 10 días para que las costras de carbono se desprendan',
        results: 'Eliminación visible una vez completada la curación (aprox. 2-3 semanas)',
    },
    sections: [
        {
            id: 'plasma-arc-technology',
            title: 'Cómo funciona la sublimación por plasma',
            content: `
                <p>A diferencia de los láseres o la cauterización, la tecnología de Arco de Plasma funciona mediante el principio de sublimación: convertir un sólido directamente en gas:</p>
                <ul>
                    <li><strong>Gas ionizado:</strong> El dispositivo crea un pequeño "arco" de plasma entre la punta del dispositivo y la piel.</li>
                    <li><strong>Vaporización localizada:</strong> La energía térmica vaporiza la placa de colesterol sin transferir exceso de calor a la dermis profunda.</li>
                    <li><strong>Contracción del tejido:</strong> El proceso también desencadena una contracción inmediata de las fibras de la piel, proporcionando un ligero efecto de elevación en el área del párpado.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure-experience',
            title: 'Su experiencia durante el tratamiento',
            content: `
                <p>Priorizamos la comodidad del paciente y la seguridad clínica en cada sesión:</p>
                <ol>
                    <li><strong>Diagnóstico clínico:</strong> Confirmamos que las lesiones son xantelasmas y evaluamos su profundidad y distribución.</li>
                    <li><strong>Anestesia:</strong> Se aplica un anestésico tópico de alta potencia durante 20–30 minutos para asegurar que sienta una molestia mínima o nula.</li>
                    <li><strong>Eliminación precisa:</strong> El especialista trata sistemáticamente las placas amarillas, desplazando el dispositivo de plasma con alta precisión sobre el depósito.</li>
                    <li><strong>Cuidados protectores:</strong> Se aplica un bálsamo reparador especializado en el área tratada para iniciar la fase de recuperación.</li>
                </ol>
            `
        },
        {
            id: 'recovery-aftercare',
            title: 'Curación y cuidados post-tratamiento',
            content: `
                <p>El éxito de la eliminación depende en gran medida de seguir el protocolo post-tratamiento:</p>
                <ul>
                    <li><strong>Costras de carbono:</strong> Se formarán pequeñas costras protectoras de color marrón. Es vital <strong>no arrancarlas ni rascarlas</strong>; deben caerse naturalmente para evitar cicatrices.</li>
                    <li><strong>Hinchazón del párpado:</strong> Es normal una hinchazón leve a moderada durante las primeras 48–72 horas. Las compresas frías (sin contacto directo con el agua) pueden ayudar.</li>
                    <li><strong>Protección solar:</strong> La "nueva" piel debajo es muy sensible. Debe aplicar SPF 50+ diariamente durante varios meses para evitar la hiperpigmentación.</li>
                    <li><strong>Mantenimiento sistémico:</strong> Dado que el xantelasma está vinculado al colesterol, recomendamos monitorear sus niveles lipídicos con su médico para prevenir nuevos depósitos.</li>
                </ul>
            `
        },
        {
            id: 'international-patients',
            title: 'Servicio de élite para pacientes internacionales',
            content: `
                <p>Recibimos a pacientes de todo el mundo que buscan tratamientos de párpados no invasivos:</p>
                <ul>
                    <li><strong>Soporte de recuperación express:</strong> Proporcionamos todos los productos necesarios para el cuidado posterior en un kit de viaje para su regreso a casa.</li>
                    <li><strong>Ubicaciones de atención integrada:</strong> Inicie su tratamiento en <strong>Albania</strong> y reciba soporte de seguimiento en nuestras clínicas de <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Conserjería completa:</strong> Asistimos con los traslados al aeropuerto y el alojamiento cerca de nuestras instalaciones para garantizar una experiencia sin estrés.</li>
                </ul>
            `
        }
    ]
};

export default xanthelasmaRemovalContent;