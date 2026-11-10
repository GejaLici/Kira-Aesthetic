import type { ServiceContent } from '@/lib/services';

const blepharoplastyContent: ServiceContent = {
    description: [
        "La cirugía de párpados, o blefaroplastia, es un procedimiento quirúrgico de precisión diseñado para rejuvenecer la apariencia de los ojos al tratar la piel flácida, el exceso de grasa y la laxitud muscular. Ya sea que se realice en los párpados superiores, inferiores o en ambos, este tratamiento elimina eficazmente la 'mirada cansada', reduciendo la hinchazón y el descolgamiento para revelar una expresión más brillante, alerta y juvenil.",
        "Los ojos suelen ser la primera zona en mostrar signos de envejecimiento debido a la naturaleza delicada de la piel periorbitaria. Nuestro enfoque en la blefaroplastia se centra en refinamientos sutiles y de aspecto natural que respetan su anatomía facial única. Al reposicionar meticulosamente el tejido y ocultar las incisiones dentro de los pliegues naturales, restauramos el contorno vibrante de sus ojos sin alterar su apariencia fundamental."
    ],
    benefits: [
        "Eliminación del exceso de piel en el párpado superior que a veces puede interferir con la visión.",
        "Eliminación de las bolsas bajo los ojos y la hinchazón para un aspecto descansado.",
        "Reducción de las arrugas finas y del exceso de piel en la zona del párpado inferior.",
        "Rejuvenecimiento duradero que ilumina todo el rostro.",
        "Cicatrices prácticamente invisibles ocultas en los pliegues naturales o dentro del párpado."
    ],
    quickFacts: {
        procedureTime: '1 - 2 horas',
        anesthesia: 'Anestesia local con sedación (o general)',
        recoveryTime: '7 - 10 días para actividades sociales',
        results: 'Visibles al bajar la hinchazón; finales tras 1-2 meses',
    },
    sections: [
        {
            id: 'upper-vs-lower',
            title: 'Blefaroplastia Superior e Inferior',
            content: `
                <p>Dependiendo de sus necesidades específicas, podemos tratar los párpados superiores, inferiores o ambos simultáneamente:</p>
                <ul>
                    <li><strong>Blefaroplastia Superior:</strong> Se centra en eliminar la piel "pesada" que cuelga sobre las pestañas. La incisión se oculta perfectamente en el pliegue horizontal natural del párpado.</li>
                    <li><strong>Blefaroplastia Inferior:</strong> Se dirige a las ojeras y los depósitos de grasa (bolsas). A menudo se puede realizar mediante un enfoque "transconjuntival", donde la incisión se hace dentro del párpado, sin dejar cicatriz externa.</li>
                    <li><strong>Rejuvenecimiento Combinado:</strong> Muchos pacientes optan por tratar ambas áreas a la vez para un refrescamiento completo y armonioso de la zona ocular.</li>
                </ul>
            `
        },
        {
            id: 'surgical-precision',
            title: 'Nuestro Enfoque de Precisión',
            content: `
                <p>La cirugía de párpados es un procedimiento de milímetros. Nuestros cirujanos utilizan técnicas avanzadas para garantizar la seguridad y la estética:</p>
                <ul>
                    <li><strong>Experiencia Anatómica:</strong> Conocimiento profundo de los delicados músculos y almohadillas de grasa alrededor del ojo para evitar un aspecto "sobreoperado".</li>
                    <li><strong>Técnica de Sutura:</strong> Utilizamos suturas ultrafinas que normalmente se retiran en una semana, minimizando cualquier riesgo de marca visible.</li>
                    <li><strong>Reposicionamiento de Grasa:</strong> En lugar de simplemente eliminar la grasa, a menudo la reposicionamos para rellenar áreas hundidas, evitando una apariencia "cadavérica" y asegurando una transición suave hacia la mejilla.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Su Proceso de Recuperación',
            content: `
                <p>El proceso de curación de la blefaroplastia es relativamente rápido en comparación con otras cirugías faciales:</p>
                <ol>
                    <li><strong>Las primeras 48 horas:</strong> Use compresas frías diligentemente para minimizar la hinchazón y los hematomas. Mantenga la cabeza elevada incluso al dormir.</li>
                    <li><strong>Días 5-7:</strong> Se retiran las suturas en la clínica. La mayoría de los hematomas empiezan a tornarse amarillentos y a menudo pueden ocultarse con maquillaje.</li>
                    <li><strong>Semana 2:</strong> La mayoría de los pacientes se sienten seguros para volver al trabajo y a la vida pública. Debe evitarse el ejercicio intenso durante otras 1-2 semanas.</li>
                    <li><strong>Resultado Final:</strong> Aunque se verá renovado rápidamente, los contornos refinados finales se asientan durante las semanas siguientes.</li>
                </ol>
            `
        },
        {
            id: 'global-patient-care',
            title: 'Atención Integral para Pacientes Internacionales',
            content: `
                <p>Nos enorgullecemos de ofrecer una experiencia libre de estrés para quienes viajan para su cirugía:</p>
                <ul>
                    <li><strong>Soporte Logístico:</strong> Asistimos con alojamiento premium y transporte local hacia y desde nuestra clínica.</li>
                    <li><strong>Flexibilidad de Seguimiento:</strong> Tiene la opción de realizar sus chequeos postoperatorios en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italy</strong>.</li>
                    <li><strong>Monitoreo Remoto:</strong> Para nuestros clientes internacionales, ofrecemos acceso digital directo a nuestro equipo médico para cualquier consulta durante las primeras etapas de curación.</li>
                </ul>
            `
        }
    ]
};

export default blepharoplastyContent;