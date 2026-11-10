import type { ServiceContent } from '@/lib/services';

const lipReshapingContent: ServiceContent = {
    description: [
        "La remodelación de labios, conocida comúnmente como aumento de labios o rellenos labiales, es un tratamiento estético no quirúrgico sumamente popular diseñado para mejorar el volumen, la forma y la definición de los labios. Utilizando rellenos de ácido hialurónico (HA) de primera calidad, este procedimiento permite una personalización precisa, ya sea que busque restaurar el volumen perdido por el envejecimiento, corregir asimetrías naturales o simplemente lograr una apariencia más hidratada y voluminosa.",
        "Nuestro enfoque se centra en la filosofía del 'Aspecto Natural'. Creemos que los mejores resultados son aquellos que armonizan con sus proporciones faciales únicas. El ácido hialurónico es una sustancia que se encuentra naturalmente en el cuerpo, lo que garantiza que el tratamiento no solo sea eficaz, sino también seguro y reversible, proporcionando una mejora suave, sutil y hermosa."
    ],
    benefits: [
        "Volumen personalizado: Desde una hidratación sutil hasta una plenitud más marcada.",
        "Definición refinada: Realza el arco de Cupido y el borde bermellón para un aspecto más nítido.",
        "Simetría mejorada: Equilibra los labios superior e inferior o corrige lados desiguales.",
        "Resultados inmediatos: Salga de la clínica con una transformación visible en menos de una hora.",
        "Impulso de hidratación: El ácido hialurónico atrae naturalmente la humedad, haciendo que los labios luzcan más suaves y sanos."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutos',
        anesthesia: 'Crema anestésica tópica + rellenos con lidocaína',
        recoveryTime: '24 - 48 horas para el pico de hinchazón; 1 semana para el asentamiento total',
        results: 'Visibles de inmediato; duran de 6 a 12 meses',
    },
    sections: [
        {
            id: 'art-of-lip-design',
            title: 'El Arte del Diseño Labial',
            content: `
                <p>Un aumento de labios exitoso requiere un equilibrio entre la ciencia médica y la visión artística. Nos centramos en varias áreas clave del labio para garantizar un aspecto natural:</p>
                <ul>
                    <li><strong>El Arco de Cupido:</strong> Definimos la forma en 'V' del labio superior para un perfil más juvenil y femenino.</li>
                    <li><strong>Las Columnas del Filtrum:</strong> Realzamos las dos líneas que van desde la nariz al labio para proporcionar soporte estructural y proyección.</li>
                    <li><strong>Comisuras Bucales:</strong> Tratamos las esquinas de la boca para crear una expresión más neutra o ligeramente elevada.</li>
                    <li><strong>Equilibrio de Proporciones:</strong> Aseguramos la clásica proporción 1:1.6 entre el labio superior e inferior para una armonía facial ideal.</li>
                </ul>
            `
        },
        {
            id: 'treatment-experience',
            title: 'Qué Esperar Durante su Visita',
            content: `
                <p>Su comodidad y seguridad son nuestras máximas prioridades durante todo el procedimiento:</p>
                <ol>
                    <li><strong>Preparación:</strong> Se aplica un anestésico tópico de alta potencia para asegurar que el tratamiento sea prácticamente indoloro.</li>
                    <li><strong>Inyecciones de Precisión:</strong> Utilizando agujas ultrafinas o cánulas de punta roma, el médico coloca estratégicamente el relleno para esculpir la forma deseada.</li>
                    <li><strong>Revisión Inmediata:</strong> Trabajamos de forma interactiva con usted, permitiéndole ver el progreso en un espejo y darnos su opinión sobre el volumen.</li>
                    <li><strong>Cuidado Post-Inyección:</strong> Aplicamos un bálsamo calmante y proporcionamos compresas frías para gestionar inmediatamente cualquier hinchazón inicial.</li>
                </ol>
            `
        },
        {
            id: 'recovery-results',
            title: 'Recuperación y Longevidad',
            content: `
                <p>El tejido labial está muy vascularizado, por lo que se espera un breve periodo de recuperación:</p>
                <ul>
                    <li><strong>Hinchazón:</strong> Es normal que los labios parezcan significativamente más grandes durante las primeras 24–48 horas. Se trata de una respuesta inflamatoria y no es el resultado final.</li>
                    <li><strong>Periodo de Asentamiento:</strong> El relleno se integra con su tejido natural durante 1 a 2 semanas, volviéndose más suave y natural al tacto.</li>
                    <li><strong>Mantenimiento:</strong> Para mantener los resultados frescos, recomendamos una cita de retoque cada 6 a 9 meses, aunque muchos pacientes encuentran que sus resultados duran hasta un año completo.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Soporte de Conserjería para Clientes Globales',
            content: `
                <p>Ofrecemos una experiencia premium y sin estrés para los pacientes que viajan desde toda Europa y más allá:</p>
                <ul>
                    <li><strong>Coordinación de Viajes:</strong> Asistencia completa con traslados al aeropuerto y alojamiento en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Flexibilidad de Seguimiento:</strong> Si requiere un retoque o chequeo, puede visitar cualquiera de nuestras clínicas regionales a su conveniencia.</li>
                    <li><strong>Experiencia Certificada:</strong> Todos los procedimientos de labios son realizados exclusivamente por médicos certificados especializados en medicina estética.</li>
                </ul>
            `
        }
    ]
};

export default lipReshapingContent;