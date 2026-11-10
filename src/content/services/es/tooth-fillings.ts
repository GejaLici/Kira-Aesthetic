import type { ServiceContent } from '@/lib/services';

const toothFillingsContent: ServiceContent = {
    description: [
        "Un empaste dental es un procedimiento restaurativo fundamental utilizado para tratar la caries dental. Cuando las bacterias erosionan el esmalte, crean una cavidad que, si no se trata, puede llegar a la pulpa interna sensible, provocando dolor intenso e infección. Un empaste detiene esta progresión eliminando el tejido dañado y sellando el espacio con un material duradero y biocompatible.",
        "La odontología restauradora moderna ha evolucionado más allá de los metales tradicionales. En nuestra clínica, nos enfocamos en resinas compuestas (composites) de alta calidad que no solo restauran la integridad estructural de su diente, sino que también imitan su translucidez y color natural. Esto garantiza que su tratamiento dental sea funcionalmente robusto y estéticamente indistinguible de su sonrisa natural."
    ],
    benefits: [
        "Detiene la caries: Frena la propagación de bacterias hacia las capas más profundas del diente.",
        "Refuerzo estructural: Restaura la fuerza del diente, permitiendo una masticación y mordida normales.",
        "Estética natural: Los materiales de composite del color del diente se integran perfectamente con su esmalte.",
        "Previene complicaciones: Evitar un empaste simple a menudo deriva en tratamientos más invasivos como las endodoncias.",
        "Preservación del esmalte: Las técnicas de adhesión modernas requieren eliminar menos estructura dental sana."
    ],
    quickFacts: {
        procedureTime: '20 - 45 minutos por diente',
        anesthesia: 'Anestesia local para una experiencia sin dolor',
        recoveryTime: 'Inmediata; esperar a que pase el entumecimiento antes de comer',
        results: 'Restauración duradera de la función y forma del diente',
    },
    sections: [
        {
            id: 'material-excellence',
            title: 'Tecnología Avanzada de Resina Compuesta',
            content: `
                <p>Utilizamos principalmente empastes de composite "blancos" o del color del diente por varias razones clínicas:</p>
                <ul>
                    <li><strong>Mimetismo Estético:</strong> Utilizamos una guía de tonos completa para igualar la resina con su color de diente específico.</li>
                    <li><strong>Adhesión Química:</strong> A diferencia de los empastes de plata que se asientan en el hueco, los composites se adhieren directamente a la estructura dental, proporcionando un soporte extra.</li>
                    <li><strong>Versatilidad:</strong> Los composites pueden utilizarse tanto para reparar dientes astillados o rotos como para rellenar caries.</li>
                    <li><strong>Seguridad:</strong> Las resinas compuestas no contienen mercurio y no se expanden ni contraen significativamente con los cambios de temperatura.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'El Proceso de Restauración',
            content: `
                <p>Un empaste es un procedimiento rutinario realizado con precisión y cuidado:</p>
                <ol>
                    <li><strong>Anestesia:</strong> Se aplica anestesia local para que no sienta ninguna molestia durante el proceso.</li>
                    <li><strong>Preparación de la cavidad:</strong> Se elimina cuidadosamente todo el tejido dental dañado y debilitado utilizando instrumentos especializados.</li>
                    <li><strong>Descontaminación:</strong> El espacio se limpia y desinfecta a fondo para eliminar cualquier bacteria restante.</li>
                    <li><strong>Estratificación:</strong> El material de composite se aplica en capas finas, endureciendo cada capa (polimerización) con una luz azul especial.</li>
                    <li><strong>Ajuste de la mordida:</strong> Comprobamos su oclusión para asegurar que el empaste se sienta natural y pulimos la superficie para un acabado suave.</li>
                </ol>
            `
        },
        {
            id: 'longevity-care',
            title: 'Cuidado de sus Empastes',
            content: `
                <p>Aunque los empastes modernos son increíblemente duraderos, su vida útil depende de sus hábitos de higiene:</p>
                <ul>
                    <li><strong>Sensibilidad Inicial:</strong> Es normal sentir una ligera sensibilidad a la temperatura durante las 24–48 horas posteriores al procedimiento.</li>
                    <li><strong>Higiene:</strong> Cepíllese dos veces al día y use hilo dental alrededor del empaste para prevenir "caries secundarias" en los márgenes de la restauración.</li>
                    <li><strong>Hábitos Dietéticos:</strong> Limite los snacks azucarados y las bebidas ácidas que pueden debilitar la unión entre el empaste y el diente.</li>
                    <li><strong>Revisiones Regulares:</strong> Durante sus chequeos semestrales, monitorizamos la integridad de sus empastes para asegurar que permanezcan sellados y funcionales.</li>
                </ul>
            `
        },
        {
            id: 'international-patients',
            title: 'Atención Restauradora para Viajeros Internacionales',
            content: `
                <p>Para los pacientes que nos visitan del extranjero, ofrecemos una atención eficiente como parte de un plan dental integral:</p>
                <ul>
                    <li><strong>Tratamiento en el mismo día:</strong> A menudo podemos identificar y empastar múltiples caries en una sola cita para ahorrarle tiempo.</li>
                    <li><strong>Auditoría de Sonrisa Completa:</strong> Utilizamos radiografías digitales para detectar caries ocultas entre los dientes que pueden no ser visibles a simple vista.</li>
                    <li><strong>Conveniencia de Red:</strong> Si requiere trabajos dentales en el futuro, sus registros están disponibles en nuestras clínicas de <strong>Albania</strong>, <strong>Kosovo</strong> e <strong>Italia</strong>.</li>
                </ul>
            `
        }
    ]
};

export default toothFillingsContent;