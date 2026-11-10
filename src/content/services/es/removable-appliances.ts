import type { ServiceContent } from '@/lib/services';

const removableOrthodonticsContent: ServiceContent = {
    description: [
        "Los aparatos de ortodoncia removibles son dispositivos diseñados a medida que el paciente puede ponerse y quitarse de la boca fácilmente. A diferencia de los brackets fijos tradicionales, estos aparatos ofrecen un alto grado de flexibilidad y se utilizan principalmente para movimientos dentales menores, guía del crecimiento de la mandíbula en niños y la fase crítica de retención tras un tratamiento de ortodoncia integral.",
        "Aunque no sustituyen a la ortodoncia fija en casos complejos, los aparatos removibles son herramientas indispensables para lograr objetivos funcionales específicos y mantener los resultados de una sonrisa perfectamente alineada. Ya sea un retenedor transparente o una placa funcional, el éxito de estos tratamientos depende en gran medida del compromiso del paciente y de un plan de tratamiento personalizado diseñado por un ortodoncista experto."
    ],
    benefits: [
        "Higiene mejorada: Los aparatos se retiran para el cepillado y el uso de hilo dental, lo que facilita el mantenimiento de la salud oral.",
        "Tratamiento discreto: Muchas opciones removibles modernas, como los retenedores transparentes, son prácticamente invisibles.",
        "Comodidad y conveniencia: Pueden retirarse para comer, hacer deporte y ocasiones especiales.",
        "Guía del crecimiento: Altamente eficaces en ortodoncia pediátrica para guiar las estructuras mandibulares en desarrollo.",
        "Retención vital: Aseguran que los dientes no vuelvan a sus posiciones originales después de retirar los brackets."
    ],
    quickFacts: {
        procedureTime: 'Sesión de ajuste de 30 minutos',
        anesthesia: 'No requerida',
        recoveryTime: '1-3 días para adaptar el habla y la comodidad',
        results: 'Estabilidad a largo plazo de la alineación dental',
    },
    sections: [
        {
            id: 'types-of-appliances',
            title: 'Tipos de Dispositivos de Ortodoncia Removible',
            content: `
                <p>Utilizamos diversos aparatos especializados según la edad del paciente y los objetivos clínicos:</p>
                <ul>
                    <li><strong>Retenedores Hawley:</strong> El retenedor clásico y duradero hecho de un alambre de metal y una base de plástico, utilizado para mantener la alineación post-ortodoncia.</li>
                    <li><strong>Alineadores/Retenedores Transparentes:</strong> Férulas de plástico transparente que son casi invisibles y altamente estéticas para adolescentes y adultos.</li>
                    <li><strong>Aparatos Funcionales:</strong> Dispositivos como Twin Blocks o Activadores que utilizan las fuerzas musculares de la mandíbula para corregir discrepancias en la mordida en niños en crecimiento.</li>
                    <li><strong>Placas de Ortodoncia:</strong> A menudo equipadas con tornillos de expansión o resortes para ensanchar suavemente un arco estrecho o colocar un diente específico en su lugar.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'El Proceso de Fabricación a Medida',
            content: `
                <p>Lograr un ajuste perfecto es esencial tanto para la comodidad como para la eficacia clínica:</p>
                <ol>
                    <li><strong>Impresiones Digitales:</strong> Utilizamos escaneos de alta precisión o moldes tradicionales para crear una réplica exacta en 3D de sus dientes.</li>
                    <li><strong>Diseño de Laboratorio:</strong> Su aparato personalizado se fabrica en un laboratorio dental especializado para cumplir con las especificaciones exactas del ortodoncista.</li>
                    <li><strong>Ajuste e Instrucciones:</strong> Durante su cita, nos aseguramos de que el dispositivo encaje cómodamente y proporcionamos instrucciones sobre cómo insertarlo y retirarlo de forma segura.</li>
                </ol>
            `
        },
        {
            id: 'patient-compliance',
            title: 'La Vida con un Aparato Removible',
            content: `
                <p>Debido a que estos dispositivos son removibles, su compromiso es el factor más importante para el éxito del tratamiento:</p>
                <ul>
                    <li><strong>Tiempo de Uso Prescrito:</strong> La mayoría de los aparatos deben usarse 22 horas al día (incluyendo las horas de sueño) para ser efectivos, a menos que sean específicamente de uso nocturno.</li>
                    <li><strong>Protocolo de Limpieza:</strong> Los aparatos deben limpiarse diariamente con un cepillo suave y agua fría o pastillas de limpieza especializadas para evitar la acumulación de bacterias.</li>
                    <li><strong>Almacenamiento Seguro:</strong> Siempre que el aparato no esté en la boca, debe guardarse en su estuche protector para evitar daños o pérdida.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Atención para Pacientes Internacionales',
            content: `
                <p>Brindamos una experiencia fluida para familias e individuos que viajan para recibir atención ortodóntica:</p>
                <ul>
                    <li><strong>Programación Eficiente:</strong> Coordinamos los escaneos digitales y los ajustes para minimizar el número de visitas necesarias para clientes internacionales.</li>
                    <li><strong>Continuidad Regional:</strong> Los ajustes de seguimiento pueden gestionarse en nuestra red de clínicas en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Asistencia Logística:</strong> Soporte completo para transporte y alojamiento para asegurar que su estancia sea cómoda y libre de estrés.</li>
                </ul>
            `
        }
    ]
};

export default removableOrthodonticsContent;