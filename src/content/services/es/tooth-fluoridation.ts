import type { ServiceContent } from '@/lib/services';

const toothFluoridationContent: ServiceContent = {
    description: [
        "La fluoración dental profesional es un pilar fundamental de la odontología pediátrica preventiva, actuando como un escudo protector para las sonrisas en desarrollo. El flúor es un mineral natural que facilita la remineralización del esmalte dental, la capa externa dura y protectora de los dientes. Al integrarse en la estructura del esmalte, el flúor hace que los dientes sean significativamente más resistentes a los ataques ácidos de las bacterias de la placa y los azúcares que causan las caries.",
        "Para los niños, los tratamientos profesionales con flúor son particularmente vitales, ya que sus dientes permanentes recién erupcionados aún no están totalmente mineralizados y son más susceptibles al deterioro. Este procedimiento sencillo e indoloro no solo previene futuras caries, sino que también puede ayudar a 'curar' caries en etapas muy tempranas al redepositar minerales en las áreas debilitadas del esmalte antes de que se forme una cavidad."
    ],
    benefits: [
        "Refuerzo del esmalte: Endurece significativamente el esmalte dental contra el ácido bacteriano.",
        "Prevención de caries: Clínicamente probado para reducir el riesgo de caries en niños y adolescentes.",
        "Protección indolora: Una aplicación rápida y no invasiva que no requiere taladros ni anestesia.",
        "Revierte el deterioro temprano: Puede detener y revertir la progresión de lesiones incipientes de manchas blancas.",
        "Costo-efectivo: Una medida preventiva simple que evita la necesidad de futuros empastes o extracciones costosas."
    ],
    quickFacts: {
        procedureTime: '5 - 10 minutos',
        anesthesia: 'No requerida',
        recoveryTime: 'Inmediata; evitar el cepillado hasta la mañana siguiente',
        results: 'Esmalte fortalecido y mayor resistencia a la caries',
    },
    sections: [
        {
            id: 'fluoride-application',
            title: 'Tecnología Avanzada de Barniz de Flúor',
            content: `
                <p>Utilizamos sistemas de aplicación de flúor de última generación para asegurar la máxima absorción y comodidad del paciente:</p>
                <ul>
                    <li><strong>Barniz de Flúor:</strong> A diferencia de las antiguas cubetas o espumas, nuestro barniz de alta concentración se "pinta" sobre los dientes. Se adhiere inmediatamente al contacto con la saliva, asegurando que el flúor permanezca en contacto con el esmalte durante varias horas.</li>
                    <li><strong>Sabores Agradables:</strong> Nuestros barnices vienen en sabores aptos para niños, haciendo que la experiencia sea positiva incluso para nuestros pacientes más jóvenes.</li>
                    <li><strong>Aplicación Focalizada:</strong> La aplicación con pincel nos permite centrar el flúor en áreas específicas de alto riesgo, como los surcos profundos de los molares y los espacios interdentales.</li>
                </ul>
            `
        },
        {
            id: 'why-children-need-it',
            title: '¿Por qué empezar temprano?',
            content: `
                <p>La salud dental pediátrica sienta las bases para una vida de bienestar. La fluoración se recomienda por varias razones clave:</p>
                <ol>
                    <li><strong>Esmalte Inmaduro:</strong> Los dientes recién erupcionados son más suaves y porosos que los de los adultos, lo que los convierte en "esponjas" para la absorción de flúor.</li>
                    <li><strong>Hábitos Dietéticos:</strong> Los niños suelen estar más expuestos a snacks azucarados y jugos, lo que requiere protección extra contra las bacterias productoras de ácido.</li>
                    <li><strong>Aprendizaje de Higiene Oral:</strong> Mientras los niños perfeccionan sus habilidades de cepillado, el flúor proporciona una "red de seguridad" para las áreas que podrían olvidar durante su rutina diaria.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Maximizando los Beneficios del Tratamiento',
            content: `
                <p>Para asegurar que el barniz de flúor proporcione el nivel más alto de protección, recomendamos los siguientes cuidados:</p>
                <ul>
                    <li><strong>Comer y Beber:</strong> Su hijo puede beber líquidos fríos inmediatamente. Sugerimos esperar de 4 a 6 horas antes de comer alimentos crujientes o pegajosos.</li>
                    <li><strong>Cepillado e Hilo Dental:</strong> No cepille ni use hilo dental en los dientes de su hijo durante al menos 6 a 12 horas (idealmente hasta la mañana siguiente). Esto permite que el barniz permanezca en contacto con el esmalte el tiempo óptimo.</li>
                    <li><strong>Evitar el Calor:</strong> Absténgase de dar a su hijo bebidas o sopas muy calientes durante el resto del día del tratamiento.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Cuidado Preventivo para Familias Viajeras',
            content: `
                <p>Ofrecemos paquetes de cuidado pediátrico especializado para familias que visitan nuestras clínicas regionales:</p>
                <ul>
                    <li><strong>Chequeos Integrales:</strong> Combine la fluoración con selladores dentales y una limpieza completa para una visita de "Protección Total".</li>
                    <li><strong>Ubicaciones Flexibles:</strong> Inicie el cuidado preventivo de su hijo en <strong>Albania</strong> y mantenga sus registros en nuestras clínicas de <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Asistencia en el Viaje:</strong> Brindamos soporte completo con transporte y alojamiento apto para familias para que su visita dental sea parte de un viaje cómodo.</li>
                </ul>
            `
        }
    ]
};

export default toothFluoridationContent;