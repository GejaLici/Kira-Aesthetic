import type { ServiceContent } from '@/lib/services';

const injectionLipolysisContent: ServiceContent = {
    description: [
        "La lipólisis inyectable, comúnmente conocida como inyecciones disolventes de grasa, es un tratamiento mínimamente invasivo diseñado para eliminar depósitos de grasa localizados y rebeldes que resisten a la dieta y al ejercicio. Este procedimiento utiliza compuestos especializados, como el ácido deoxicólico, para romper las membranas de las células grasas. Una vez que las células grasas se desintegran, el cuerpo metaboliza y elimina naturalmente los ácidos grasos liberados a través del sistema linfático.",
        "Este tratamiento es una solución no quirúrgica ideal para el contorneado corporal de precisión. Está específicamente indicado para la 'reducción de puntos críticos' en áreas como el mentón, el abdomen y los muslos. Aunque no sustituye la pérdida de peso, ofrece una forma poderosa de refinar su silueta y lograr una apariencia más esculpida con un tiempo de inactividad mínimo."
    ],
    benefits: [
        "No quirúrgico: Logra la reducción de grasa sin incisiones, cicatrices ni anestesia general.",
        "Contorneado específico: Trata con precisión áreas difíciles como la papada o la grasa del sujetador.",
        "Resultados permanentes: Una vez que las células grasas se destruyen, no regresan al área tratada.",
        "Mínimo tiempo de recuperación: La mayoría de los pacientes regresan a sus actividades diarias inmediatamente después de la sesión.",
        "Eliminación natural: Funciona con los propios procesos metabólicos del cuerpo para eliminar la grasa."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minutos',
        anesthesia: 'Ninguna (la solución contiene agentes adormecedores)',
        recoveryTime: 'Hinchazón de 3 a 7 días; sin baja laboral',
        results: 'Visibles después de 6 - 8 semanas; típicamente requiere 2-4 sesiones',
    },
    sections: [
        {
            id: 'treatment-areas',
            title: 'Áreas Comunes de Tratamiento',
            content: `
                <p>La lipólisis inyectable es altamente eficaz para pequeñas acumulaciones de grasa que distorsionan las líneas naturales del cuerpo:</p>
                <ul>
                    <li><strong>Grasa Submentoniana:</strong> Eliminación de la 'papada' para definir la línea de la mandíbula.</li>
                    <li><strong>Contorneado Corporal:</strong> Tratamiento de michelines, depósitos en el abdomen bajo y 'cartucheras' en los muslos.</li>
                    <li><strong>Depósitos Específicos:</strong> Reducción de los rollitos del sujetador, grasa en la cara interna de la rodilla y grasa en la espalda.</li>
                    <li><strong>Refinamiento Post-quirúrgico:</strong> Suavizado de pequeñas irregularidades tras una liposucción.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Qué Esperar Durante el Tratamiento',
            content: `
                <p>El proceso es rápido y clínico, centrado en la seguridad y la distribución uniforme:</p>
                <ol>
                    <li><strong>Mapeo:</strong> El profesional marca el área de tratamiento en un patrón de cuadrícula para asegurar intervalos de inyección precisos.</li>
                    <li><strong>Inyecciones:</strong> Se realizan una serie de pequeñas inyecciones superficiales en la capa de grasa. Puede sentir un breve escozor o sensación de calor.</li>
                    <li><strong>Respuesta Inflamatoria:</strong> Inmediatamente después, el área se volverá roja e hinchada. Esta es una señal positiva de que el proceso de lipólisis se ha activado.</li>
                </ol>
            `
        },
        {
            id: 'recovery-timeline',
            title: 'Recuperación y Maduración de Resultados',
            content: `
                <p>A diferencia de los procedimientos quirúrgicos, los resultados de la lipólisis aparecen gradualmente mientras el cuerpo procesa la grasa:</p>
                <ul>
                    <li><strong>Días 1-5:</strong> Se espera una hinchazón y sensibilidad significativas, especialmente al tratar el área del mentón.</li>
                    <li><strong>Semanas 2-4:</strong> La inflamación inicial desaparece y el cuerpo comienza el proceso gradual de drenaje linfático.</li>
                    <li><strong>Semanas 6-8:</strong> El efecto de contorneado se vuelve visible. Es el momento óptimo para evaluar si se necesita una sesión de seguimiento.</li>
                    <li><strong>Mantenimiento:</strong> Para preservar los resultados, es importante mantener un peso estable mediante hábitos de vida saludables.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Cuidado Integral para Pacientes Internacionales',
            content: `
                <p>Garantizamos una experiencia fluida para los pacientes que viajan para realizarse un contorneado corporal no quirúrgico:</p>
                <ul>
                    <li><strong>Sesiones Coordinadas:</strong> Para pacientes que nos visitan desde el extranjero, podemos planificar ciclos de tratamiento que se ajusten a su agenda de viaje.</li>
                    <li><strong>Soporte de Viaje:</strong> Asistencia con transporte y alojamiento premium en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Seguimiento Regional:</strong> Puede elegir cualquiera de nuestras clínicas para sus sesiones posteriores o revisiones, asegurando la continuidad del cuidado entre fronteras.</li>
                </ul>
            `
        }
    ]
};

export default injectionLipolysisContent;