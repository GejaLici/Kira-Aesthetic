import type { ServiceContent } from '@/lib/services';

const otoplastyContent: ServiceContent = {
    description: [
        "La otoplastia, o cirugía de remodelación de orejas, es un procedimiento transformador diseñado para mejorar la forma, posición o proporción de la oreja. Aunque se asocia frecuentemente con la 'fijación de orejas' (orejas de soplillo o despegadas), la otoplastia también aborda la macrotia (orejas excesivamente grandes), la asimetría y las deformidades congénitas o traumáticas. El objetivo principal es crear una apariencia más equilibrada que armonice con el resto de sus rasgos faciales.",
        "Este procedimiento es único, ya que es altamente efectivo tanto para niños (normalmente a partir de los 5 años) como para adultos. Para muchos pacientes, la otoplastia proporciona un alivio psicológico significativo, aumentando la confianza en uno mismo al corregir rasgos que pueden haber sido una fuente de inseguridad. Nuestros cirujanos se centran en crear contornos naturales, asegurando que las orejas se vean estéticamente agradables sin parecer 'demasiado pegadas' o artificiales."
    ],
    benefits: [
        "Corrige las orejas prominentes o 'despegadas' para un perfil más equilibrado.",
        "Remodela y reduce el tamaño de las orejas grandes (macrotia).",
        "Mejora la simetría facial al corregir formas o posiciones desiguales.",
        "Aumenta la autoestima y alivia la ansiedad social, especialmente en pacientes jóvenes.",
        "Proporciona resultados permanentes con incisiones discretas ocultas detrás de la oreja."
    ],
    quickFacts: {
        procedureTime: '1 - 3 horas',
        anesthesia: 'Anestesia local con sedación o anestesia general',
        recoveryTime: '1 - 2 semanas para escuela/trabajo; 6-8 semanas para deportes',
        results: 'Corrección permanente de la forma y posición de las orejas',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Técnicas de remodelación de precisión',
            content: `
                <p>Utilizamos métodos quirúrgicos avanzados para garantizar que las orejas luzcan naturales y los resultados sean duraderos:</p>
                <ul>
                    <li><strong>Esculpido del cartílago:</strong> El cartílago de la oreja se remodela cuidadosamente para crear el pliegue anti-helicoidal natural, que suele faltar en las orejas prominentes.</li>
                    <li><strong>Sutura interna:</strong> Se utilizan suturas internas especializadas y permanentes para fijar el cartílago en su nueva posición estética.</li>
                    <li><strong>Cicatrices invisibles:</strong> Las incisiones se colocan estratégicamente en el pliegue natural detrás de la oreja o dentro de los pliegues frontales, haciendo que las cicatrices sean prácticamente indetectables una vez curadas.</li>
                </ul>
            `
        },
        {
            id: 'pediatric-otoplasty',
            title: 'Consideraciones para niños',
            content: `
                <p>La otoplastia es uno de los pocos procedimientos estéticos recomendados para niños. Debido a que la oreja se ha desarrollado en un 90% a los cinco años, la cirugía puede realizarse antes de que el niño comience la escuela para prevenir posibles burlas:</p>
                <ul>
                    <li><strong>Desarrollo seguro:</strong> Nos aseguramos de que el cartílago sea lo suficientemente maduro antes de proceder con la cirugía.</li>
                    <li><strong>Comodidad absoluta:</strong> Para los pacientes más jóvenes, solemos utilizar anestesia general para garantizar una experiencia totalmente libre de dolor y estrés.</li>
                    <li><strong>Recuperación guiada:</strong> Proporcionamos bandas para la cabeza especializadas y orientación postoperatoria adaptada a niños activos.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Su proceso de recuperación',
            content: `
                <p>La curación de la otoplastia es relativamente rápida, siempre que se sigan las instrucciones postoperatorias:</p>
                <ol>
                    <li><strong>La primera semana:</strong> Se utiliza un vendaje de compresión protector para mantener la nueva posición de la oreja y minimizar la hinchazón.</li>
                    <li><strong>Fase de la banda elástica:</strong> Tras retirar el vendaje, se debe usar una banda suave (inicialmente a tiempo completo, luego solo por la noche) para proteger las orejas durante el sueño.</li>
                    <li><strong>Actividad:</strong> La mayoría de los pacientes regresan al trabajo o a la escuela en 7–10 días. Sin embargo, los deportes de contacto deben evitarse durante al menos dos meses para prevenir traumatismos en el cartílago.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Soporte para pacientes internacionales',
            content: `
                <p>Nos especializamos en brindar atención de alta calidad para pacientes que viajan desde el extranjero:</p>
                <ul>
                    <li><strong>Logística sin fisuras:</strong> Asistencia con el transporte local y alojamiento premium cerca de nuestra clínica para una estancia confortable.</li>
                    <li><strong>Seguimiento tri-regional:</strong> Para su comodidad, puede elegir completar sus revisiones en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Consulta remota:</strong> Las evaluaciones iniciales pueden realizarse mediante revisión de fotos o videollamada para agilizar su proceso quirúrgico.</li>
                </ul>
            `
        }
    ]
};

export default otoplastyContent;