import type { ServiceContent } from '@/lib/services';

const breastReductionContent: ServiceContent = {
    description: [
        "La reducción de pecho, o mamoplastia de reducción, es un procedimiento que cambia la vida, diseñado para aligerar la carga física y emocional de unos senos excesivamente grandes (macromastia o gigantomastia). Al eliminar el exceso de tejido mamario, grasa y piel, esta cirugía crea un tamaño de pecho más armonioso con su estructura corporal, proporcionando un alivio inmediato del dolor crónico y las limitaciones funcionales.",
        "Más allá de los beneficios físicos, la reducción de pecho restaura un contorno firme y elevado, mejorando las proporciones generales del cuerpo. Nuestro enfoque se centra en lograr la armonía estética y la comodidad a largo plazo, permitiendo a las pacientes llevar un estilo de vida más activo y sentirse más seguras con su ropa y su propio cuerpo."
    ],
    benefits: [
        "Alivio del dolor crónico de espalda, cuello y hombros causado por el peso excesivo.",
        "Eliminación de la irritación cutánea y erupciones bajo el pliegue mamario.",
        "Mejora de la postura y de la capacidad para realizar actividades físicas cómodamente.",
        "Logro de un tamaño de pecho proporcionado a su físico general.",
        "Forma del pecho más firme y elevada con pezones reposicionados para un aspecto juvenil."
    ],
    quickFacts: {
        procedureTime: '2 - 4 horas',
        anesthesia: 'Anestesia general',
        recoveryTime: '4 - 6 semanas para actividad completa',
        results: 'Permanentes (sujetos a cambios significativos de peso o envejecimiento)',
    },
    sections: [
        {
            id: 'medical-benefits',
            title: '¿Por qué considerar la reducción de pecho?',
            content: `
                <p>Para muchas mujeres, la reducción de pecho es tanto una necesidad médica como una elección estética. Trata eficazmente varias condiciones:</p>
                <ul>
                    <li><strong>Alivio físico:</strong> Reducción de la carga pesada sobre la columna vertebral y los músculos de soporte.</li>
                    <li><strong>Surcos en los hombros:</strong> Alivia las dolorosas hendiduras causadas por los tirantes del sujetador.</li>
                    <li><strong>Restauración de la actividad:</strong> Permite correr, practicar deportes y hacer ejercicio, actividades que antes eran difíciles o dolorosas.</li>
                    <li><strong>Confianza:</strong> Resuelve la timidez respecto al tamaño del pecho y mejora el ajuste de la ropa estándar.</li>
                </ul>
            `
        },
        {
            id: 'surgical-approach',
            title: 'Técnicas de remodelación de precisión',
            content: `
                <p>Utilizamos patrones quirúrgicos avanzados para garantizar el mejor resultado estético con la mínima cicatrización:</p>
                <ul>
                    <li><strong>Técnica Vertical (Piruleta):</strong> Ideal para reducciones moderadas, implica una incisión alrededor de la areola y hacia abajo hasta el pliegue.</li>
                    <li><strong>Técnica de T invertida (Ancla):</strong> El estándar de oro para reducciones significativas, permitiendo una remodelación y elevación máximas.</li>
                    <li><strong>Reposicionamiento del pezón:</strong> El pezón y la areola se mueven a una posición más alta y natural, manteniendo el suministro sanguíneo y la sensibilidad siempre que sea posible.</li>
                </ul>
            `
        },
        {
            id: 'recovery-care',
            title: 'Recuperación y apoyo postoperatorio',
            content: `
                <p>Una curación adecuada es esencial para mantener la nueva forma y garantizar la comodidad:</p>
                <ol>
                    <li><strong>Soporte:</strong> Se debe usar un sujetador quirúrgico especializado durante 4 a 6 semanas para sujetar los pechos mientras cicatrizan.</li>
                    <li><strong>Monitoreo:</strong> Se pueden usar drenajes temporales durante unos días para evitar la acumulación de líquidos.</li>
                    <li><strong>Estilo de vida:</strong> La mayoría de las pacientes vuelven al trabajo de oficina en 2 semanas, mientras que el levantamiento de pesas y el ejercicio intenso de la parte superior del cuerpo se restringen durante 6 semanas.</li>
                    <li><strong>Manejo de cicatrices:</strong> Proporcionamos instrucciones detalladas sobre tratamientos tópicos y protección solar para ayudar a que las incisiones se desvanezcan estéticamente.</li>
                </ol>
            `
        },
        {
            id: 'patient-concierge',
            title: 'Atención al paciente internacional',
            content: `
                <p>Garantizamos un proceso fluido y profesional para nuestras pacientes que viajan desde el extranjero:</p>
                <ul>
                    <li><strong>Viaje sin complicaciones:</strong> Coordinación completa del transporte local y alojamiento confortable cerca de nuestra clínica.</li>
                    <li><strong>Red de seguimiento:</strong> Para su comodidad, puede elegir realizar sus revisiones postoperatorias en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Equipo experto:</strong> Nuestros cirujanos certificados brindan apoyo continuo, asegurando la continuidad del cuidado desde su primer vuelo hasta el resultado final.</li>
                </ul>
            `
        }
    ]
};

export default breastReductionContent;