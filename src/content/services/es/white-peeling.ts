import type { ServiceContent } from '@/lib/services';

const whitePeelingContent: ServiceContent = {
    description: [
        "El peeling blanco es un tratamiento químico especializado de grado médico diseñado específicamente para combatir la hiperpigmentación y el tono desigual de la piel. A diferencia de los peelings químicos estándar que se centran en la textura general o el acné, el peeling blanco utiliza una potente mezcla de agentes despigmentantes diseñados para inhibir los melanocitos, las células responsables de la producción de pigmento. Este enfoque de doble acción elimina las manchas oscuras existentes mientras suprime los desencadenantes biológicos que causan la formación de nueva decoloración.",
        "Este tratamiento avanzado es la solución ideal para pacientes que luchan contra el melasma, el daño solar y la hiperpigmentación posinflamatoria (HPI). Al acelerar el recambio celular y exfoliar suavemente las capas pigmentadas de la epidermis, el peeling blanco revela una tez luminosa y más uniforme, iluminando significativamente la apariencia general de la piel con precisión profesional."
    ],
    benefits: [
        "Corrección de pigmento: Atenúa eficazmente las manchas solares, las manchas de la edad y el melasma hormonal persistente.",
        "Supresión de melanina: Inhibe la actividad de la tirosinasa para prevenir la formación de nuevas manchas oscuras.",
        "Tez radiante: Elimina la opacidad al remover las células muertas y estimular el crecimiento de células nuevas.",
        "Tono de piel uniforme: Armoniza la paleta de colores de la piel, reduciendo las rojeces y las manchas marrones.",
        "Curación post-acné: Se enfoca y desvanece las marcas oscuras que suelen quedar tras los brotes de acné."
    ],
    quickFacts: {
        procedureTime: '30 minutos',
        anesthesia: 'No requerida (sensación leve de hormigueo)',
        recoveryTime: '3 - 7 días de enrojecimiento leve y descamación',
        results: 'Resultados óptimos tras una serie de 3-6 sesiones',
    },
    sections: [
        {
            id: 'targeted-pigment-science',
            title: 'La Ciencia de la Despigmentación',
            content: `
                <p>Nuestro sistema de peeling blanco funciona a través de tres vías biológicas distintas para garantizar la claridad de la piel a largo plazo:</p>
                <ul>
                    <li><strong>Inhibición de la Tirosinasa:</strong> Los ingredientes activos alcanzan las capas más profundas de la epidermis para "apagar" la enzima que activa la producción de melanina.</li>
                    <li><strong>Exfoliación Acelerada:</strong> La solución química disuelve los enlaces entre las células cutáneas pigmentadas, permitiendo que se desprendan más rápidamente.</li>
                    <li><strong>Sinergia Iluminadora:</strong> Al despejar el camino para células nuevas y sanas, el peeling permite que la luz se refleje de manera más uniforme sobre la superficie de la piel para un efecto de "piel de cristal" (glass skin).</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Qué esperar durante el procedimiento',
            content: `
                <p>Una sesión de peeling blanco es un procedimiento clínico enfocado realizado por nuestros especialistas en estética:</p>
                <ol>
                    <li><strong>Análisis de la piel:</strong> Evaluamos su fototipo en la escala de Fitzpatrick y la profundidad de su pigmentación para calibrar la intensidad del peeling.</li>
                    <li><strong>Preparación:</strong> La piel se limpia y desengrasa a fondo para asegurar que los agentes del peeling penetren de manera uniforme.</li>
                    <li><strong>Aplicación:</strong> La solución se aplica en capas precisas. Puede experimentar una breve sensación de calor o picor mientras los ingredientes activos actúan en la piel.</li>
                    <li><strong>Neutralización:</strong> Una vez alcanzado el punto clínico deseado, se neutraliza el peeling y se aplica un bálsamo refrescante y calmante.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-importance',
            title: 'Cuidados Post-Peeling y Seguridad Solar',
            content: `
                <p>El éxito de un peeling blanco depende en un 50% del tratamiento y en un 50% de los cuidados posteriores. Proteger su "nueva" piel es crítico:</p>
                <ul>
                    <li><strong>El protector solar es obligatorio:</strong> Debe aplicar SPF 50+ de amplio espectro todos los días. La exposición solar sin protección puede hacer que el pigmento regrese más oscuro que antes.</li>
                    <li><strong>Rutina suave:</strong> Utilice solo limpiadores suaves e hidratantes y cremas ricas en ceramidas durante al menos 7 días después del tratamiento.</li>
                    <li><strong>No tocar:</strong> Permita que la piel se descame naturalmente. Arrancar la piel que se está pelando puede provocar cicatrices o hiperpigmentación secundaria.</li>
                    <li><strong>Pausa en productos activos:</strong> Evite retinoides, AHAs y sueros de Vitamina C durante una semana después del tratamiento, a menos que se indique lo contrario.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Soporte de Élite para Clientes Internacionales',
            content: `
                <p>Brindamos una experiencia sin interrupciones para los pacientes que viajan para dermatología estética avanzada:</p>
                <ul>
                    <li><strong>Viaje Coordinado:</strong> Asistencia completa con traslados al aeropuerto y alojamiento en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Continuidad del Tratamiento:</strong> Para pacientes que requieren una serie de peelings, las sesiones pueden programarse en nuestras diferentes sedes regionales para adaptarse a su itinerario.</li>
                    <li><strong>Consultas Virtuales:</strong> Analice sus preocupaciones cutáneas con nuestros especialistas mediante videollamada antes de su viaje para asegurar que el peeling blanco sea la mejor opción para usted.</li>
                </ul>
            `
        }
    ]
};

export default whitePeelingContent;