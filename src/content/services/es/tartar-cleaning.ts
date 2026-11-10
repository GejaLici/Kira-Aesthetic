
import type { ServiceContent } from '@/lib/services';

const teethCleaningContent: ServiceContent = {
    description: [
        "La limpieza dental profesional, conocida médicamente como profilaxis, es el tratamiento preventivo más esencial en la odontología moderna. Incluso con un cepillado y uso de hilo dental meticulosos en casa, la placa —una película pegajosa de bacterias— puede acumularse en áreas de difícil acceso y mineralizarse en sarro (cálculo). Una vez que se forma el sarro, no se puede eliminar con un cepillo de dientes y requiere una intervención profesional para evitar que cause caries y enfermedades de las encías.",
        "Nuestro protocolo de limpieza profunda va más allá de la superficie para eliminar las colonias bacterianas y los depósitos endurecidos que comprometen su salud oral. Al combinar el raspado ultrasónico avanzado con un pulido de alta precisión, restauramos la superficie lisa de su esmalte, lo que dificulta que la nueva placa se adhiera y deja su boca con una sensación notablemente fresca y limpia."
    ],
    benefits: [
        "Prevención de Caries: Elimina la acumulación de bacterias ácidas que erosionan el esmalte dental.",
        "Defensa contra Enfermedades de las Encías: Detiene la gingivitis antes de que progrese a una pérdida ósea permanente (periodontitis).",
        "Eliminación de Manchas: Pule suavemente las manchas externas de café, té, vino tinto y tabaco.",
        "Aliento Fresco: Elimina las bacterias productoras de azufre que son la causa principal de la halitosis.",
        "Salud Sistémica: Reduce la inflamación oral, que está clínicamente relacionada con enfermedades cardíacas y diabetes."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutos',
        anesthesia: 'No se requiere (gel anestésico tópico disponible para encías sensibles)',
        recoveryTime: 'Inmediata; evite alimentos muy pigmentados durante 2-3 horas',
        results: 'Frescura instantánea y apariencia más limpia',
    },
    sections: [
        {
            id: 'cleaning-process',
            title: 'Nuestro Protocolo de Limpieza Integral',
            content: `
                <p>Utilizamos un proceso de varios pasos para asegurar que cada superficie dental se descontamine meticulosamente:</p>
                <ul>
                    <li><strong>Raspado Ultrasónico:</strong> Usamos dispositivos ultrasónicos de última generación que emiten vibraciones de alta frecuencia para "sacudir" suavemente el sarro sin dañar el esmalte.</li>
                    <li><strong>Raspado Manual Fino:</strong> Nuestros higienistas utilizan instrumentos manuales de precisión para eliminar cualquier depósito rebelde restante de espacios estrechos y debajo de la línea de las encías.</li>
                    <li><strong>Air-Flow o Prophy-Jet:</strong> Para la eliminación avanzada de manchas, podemos usar un chorro presurizado de aire, agua y polvo fino para limpiar profundamente las fosas y fisuras de los dientes.</li>
                    <li><strong>Pulido Profesional:</strong> Se utiliza una copa giratoria especializada y pasta profiláctica para alisar la superficie del diente, creando un acabado de alto brillo.</li>
                </ul>
            `
        },
        {
            id: 'preventive-care',
            title: 'La Base de la Salud a Largo Plazo',
            content: `
                <p>Una sesión de limpieza es también una oportunidad para un chequeo de salud detallado:</p>
                <ol>
                    <li><strong>Detección Periodontal:</strong> Medimos las "bolsas" entre sus dientes y encías para detectar signos tempranos de recesión de las encías o pérdida ósea.</li>
                    <li><strong>Detección de Cáncer Oral:</strong> Una inspección visual de los tejidos blandos para asegurar que todo se vea saludable.</li>
                    <li><strong>Asesoramiento de Higiene Personalizado:</strong> Proporcionamos consejos a medida sobre las mejores herramientas (cepillos eléctricos, limpiadores interdentales) para su anatomía dental específica.</li>
                </ol>
            `
        },
        {
            id: 'frequency-recommendations',
            title: '¿Con qué frecuencia debería visitarnos?',
            content: `
                <p>Si bien la recomendación estándar es cada <strong>seis meses</strong>, personalizamos la frecuencia según su "riesgo biológico":</p>
                <ul>
                    <li><strong>Bajo Riesgo:</strong> Dos veces al año es suficiente para pacientes con excelente cuidado en el hogar y encías sanas.</li>
                    <li><strong>Alto Riesgo:</strong> Pacientes con antecedentes de enfermedad de las encías, fumadores o aquellos con aparatos de ortodoncia pueden requerir limpiezas cada 3-4 meses.</li>
                    <li><strong>Diabetes y Embarazo:</strong> Estas condiciones aumentan el riesgo de inflamación de las encías, lo que hace que las limpiezas profesionales regulares sean aún más críticas.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Servicios de Conserjería para Pacientes Globales',
            content: `
                <p>Para nuestros clientes internacionales, tratamos una limpieza profesional como parte de una visita integral de "Chequeo de Sonrisa":</p>
                <ul>
                    <li><strong>Programación Fácil:</strong> Coordinamos su limpieza junto con otros tratamientos para maximizar su tiempo en nuestras clínicas.</li>
                    <li><strong>Acceso Regional:</strong> Mantenga su salud oral en toda nuestra red en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Soporte de Viaje:</strong> Asistencia con transporte y alojamiento premium para que sus vacaciones dentales sean libres de estrés.</li>
                </ul>
            `
        }
    ]
};

export default teethCleaningContent;
