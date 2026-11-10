import type { ServiceContent } from '@/lib/services';

const apicoectomyContent: ServiceContent = {
    description: [
        "Una apicectomía, también conocida como cirugía de la punta de la raíz, es un procedimiento de microcirugía endodóntica especializada diseñado para salvar un diente natural cuando los tratamientos de conducto convencionales han fallado o no son viables. Al tratar la infección directamente en el ápice (la punta de la raíz), podemos eliminar la inflamación persistente y promover la regeneración ósea sin necesidad de extraer la pieza dental.",
        "Utilizando técnicas de microcirugía avanzada, nuestros especialistas eliminan el tejido infectado y el extremo de la raíz, sellando el conducto desde la base. Este procedimiento suele ser la última línea de defensa para preservar su sonrisa natural, evitando la necesidad de implantes o puentes dentales al resolver infecciones profundas que los métodos tradicionales no pueden alcanzar."
    ],
    benefits: [
        "Salva el diente natural evitando la extracción y el reemplazo.",
        "Resuelve infecciones persistentes y dolor dental crónico.",
        "Tratamiento de alta precisión mediante el uso de microscopios quirúrgicos.",
        "Promueve una rápida curación del hueso mandibular circundante.",
        "Solución efectiva para estructuras radiculares complejas y conductos ocultos."
    ],
    quickFacts: {
        procedureTime: '30 - 90 minutos',
        anesthesia: 'Anestesia local (sedación disponible)',
        recoveryTime: '2 - 7 días para la cicatrización total del tejido',
        results: 'Resolución permanente de la infección en la raíz',
    },
    sections: [
        {
            id: 'why-apicoectomy',
            title: '¿Cuándo es necesaria una apicectomía?',
            content: `
                <p>Aunque la mayoría de las endodoncias son exitosas, ciertas condiciones requieren un enfoque quirúrgico para salvar el diente:</p>
                <ul>
                    <li><strong>Infección persistente:</strong> Cuando las bacterias permanecen en diminutas ramificaciones de los conductos en la punta de la raíz tras una endodoncia estándar.</li>
                    <li><strong>Anatomía compleja:</strong> Raíces curvas o depósitos de calcio que bloquean los instrumentos endodónticos tradicionales.</li>
                    <li><strong>Fracaso del retratamiento:</strong> Si ya se intentó una segunda endodoncia pero la infección persiste.</li>
                    <li><strong>Precisión diagnóstica:</strong> Para inspeccionar la raíz en busca de microfracturas o anomalías que no son visibles en las radiografías estándar.</li>
                </ul>
            `
        },
        {
            id: 'microsurgical-approach',
            title: 'La ventaja de la microcirugía',
            content: `
                <p>Utilizamos tecnología de vanguardia para garantizar las mayores tasas de éxito en la cirugía de ápice radicular:</p>
                <ul>
                    <li><strong>Microscopio quirúrgico:</strong> Proporciona un aumento extremo, permitiendo al cirujano ver detalles microscópicos y conductos ocultos.</li>
                    <li><strong>Limpieza ultrasónica:</strong> Utilizamos herramientas de vibración de alta frecuencia para limpiar el extremo de la raíz de forma más eficaz y conservadora que los tornos tradicionales.</li>
                    <li><strong>Sellado biocompatible:</strong> Se utilizan materiales avanzados (como MTA o biocerámicas) para crear un sellado a prueba de bacterias en la punta de la raíz.</li>
                    <li><strong>Imagenología 3D (CBCT):</strong> Las tomografías digitales preoperatorias nos permiten mapear la infección en tres dimensiones antes de comenzar.</li>
                </ul>
            `
        },
        {
            id: 'procedure-steps',
            title: 'Qué esperar durante el procedimiento',
            content: `
                <p>El proceso es sencillo y se realiza en un entorno ambulatorio confortable:</p>
                <ol>
                    <li><strong>Adormecimiento:</strong> Se aplica anestesia local para asegurar que el área esté completamente insensible al dolor.</li>
                    <li><strong>Acceso:</strong> Se realiza una pequeña incisión en el tejido de la encía para llegar a la punta de la raíz infectada.</li>
                    <li><strong>Eliminación:</strong> Se extrae el tejido infectado y los últimos milímetros de la punta de la raíz.</li>
                    <li><strong>Retro-obturación:</strong> El extremo del conducto se limpia con ultrasonido y se sella con un relleno biocompatible.</li>
                    <li><strong>Sutura:</strong> Se colocan unos pequeños puntos para ayudar a que el tejido de la encía sane en su posición original.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Recuperación y cuidados posteriores',
            content: `
                <p>La recuperación de una apicectomía es generalmente más rápida que la de una extracción dental:</p>
                <ul>
                    <li><strong>Confort postoperatorio:</strong> La mayoría de los pacientes controlan la inflamación leve con antiinflamatorios de venta libre.</li>
                    <li><strong>Cicatrización:</strong> Los puntos suelen retirarse o se disuelven por sí solos en un plazo de 7 días.</li>
                    <li><strong>Dieta:</strong> Recomendamos alimentos blandos durante las primeras 48 horas y evitar la presión directa en el sitio quirúrgico.</li>
                    <li><strong>Éxito a largo plazo:</strong> Se programarán radiografías de seguimiento para monitorear cómo se regenera el hueso alrededor de la raíz sellada.</li>
                </ul>
            `
        }
    ]
};

export default apicoectomyContent;