import type { ServiceContent } from '@/lib/services';

const rootCanalContent: ServiceContent = {
    description: [
        "El tratamiento de conducto, o endodoncia, es un procedimiento especializado diseñado para salvar un diente natural que ha sufrido una caries profunda, daños o una infección severa. En el centro de cada diente se encuentra la 'pulpa', un conjunto de nervios y vasos sanguíneos. Cuando esta área se ve comprometida por bacterias, puede causar un dolor intenso o derivar en un absceso. Una endodoncia elimina el tejido enfermo, elimina la infección y sella el diente para evitar problemas futuros.",
        "La endodoncia moderna ha transformado este procedimiento en una experiencia cómoda y rutinaria, similar a recibir un empaste estándar. Al elegir la terapia de conducto, está optando por preservar su estructura dental natural, que es siempre la mejor manera de mantener la salud del hueso maxilar, la fuerza de masticación y la alineación natural de su sonrisa."
    ],
    benefits: [
        "Alivio del dolor: Elimina inmediatamente la fuente del dolor dental agudo y la presión.",
        "Preservación dental: Salva su diente natural, evitando la necesidad de extracciones e implantes.",
        "Control de la infección: Elimina las bacterias para prevenir la propagación de la infección al hueso y los tejidos circundantes.",
        "Funcionalidad natural: Restaura su capacidad para masticar y hablar normalmente con su diente original.",
        "Rentabilidad: Preservar un diente es significativamente más asequible que reemplazarlo con un puente o un implante."
    ],
    quickFacts: {
        procedureTime: '60 - 90 minutos por visita (normalmente 1-2 visitas)',
        anesthesia: 'Anestesia local (procedimiento indoloro)',
        recoveryTime: '2 - 3 días para que la sensibilidad disminuya',
        results: 'Eliminación permanente de la infección; diente protegido por una corona',
    },
    sections: [
        {
            id: 'advanced-endodontics',
            title: 'Nuestro Enfoque Avanzado en Endodoncia',
            content: `
                <p>Combinamos la experiencia clínica con tecnología de vanguardia para garantizar las mayores tasas de éxito en el tratamiento de conducto:</p>
                <ul>
                    <li><strong>Localizadores de Ápice Digitales:</strong> Utilizamos sensores electrónicos para medir con precisión la longitud de sus conductos radiculares, asegurando una limpieza completa.</li>
                    <li><strong>Endodoncia Rotatoria:</strong> Herramientas avanzadas y flexibles de níquel-titanio que nos permiten limpiar y dar forma a los conductos de manera más eficiente y cómoda que las limas manuales tradicionales.</li>
                    <li><strong>Sellado Biocompatible:</strong> Utilizamos gutapercha de primera calidad y selladores antimicrobianos para sellar herméticamente los conductos contra futuras entradas bacterianas.</li>
                </ul>
            `
        },
        {
            id: 'procedure-steps',
            title: 'Entendiendo el Procedimiento',
            content: `
                <p>El tratamiento de conducto es un proceso meticuloso de varios pasos centrado en la desinfección total:</p>
                <ol>
                    <li><strong>Diagnóstico y Adormecimiento:</strong> Utilizamos radiografías digitales para mapear la infección y asegurar que el diente esté completamente adormecido.</li>
                    <li><strong>Limpieza:</strong> Se extrae la pulpa infectada y los conductos se desinfectan y moldean meticulosamente.</li>
                    <li><strong>Sellado:</strong> Los conductos huecos se rellenan con un material similar al caucho para proporcionar soporte estructural y prevenir la reinfección.</li>
                    <li><strong>Restauración Final:</strong> Debido a que el diente se vuelve más quebradizo tras el tratamiento, casi siempre recomendamos una <strong>corona dental</strong> para restaurar su fuerza y apariencia total.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Cuidados Postoperatorios y Sensibilidad',
            content: `
                <p>La recuperación tras el tratamiento suele ser muy sencilla:</p>
                <ul>
                    <li><strong>Manejo de la Sensibilidad:</strong> Es normal que la zona se sienta ligeramente sensible durante unos días. Esto suele controlarse fácilmente con analgésicos estándar de venta libre.</li>
                    <li><strong>Hábitos de Masticación:</strong> Evite morder alimentos duros con el diente tratado hasta que se haya colocado su corona permanente.</li>
                    <li><strong>Higiene Bucal:</strong> Continúe cepillándose y usando hilo dental normalmente. Un diente con endodoncia sigue siendo susceptible a enfermedades de las encías, por lo que la higiene regular sigue siendo crítica.</li>
                </ul>
            `
        },
        {
            id: 'global-patient-experience',
            title: 'Soporte para Pacientes Internacionales',
            content: `
                <p>Ofrecemos una experiencia optimizada para nuestros huéspedes que viajan desde el extranjero para recibir atención dental:</p>
                <ul>
                    <li><strong>Programación Prioritaria:</strong> Coordinamos su endodoncia y la colocación de la corona para que se ajusten a su itinerario de viaje.</li>
                    <li><strong>Conserjería de Viaje:</strong> Asistencia con alojamiento premium y transporte local en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Atención Integrada:</strong> Acceda a sus registros de tratamiento y soporte de seguimiento en todas nuestras ubicaciones regionales.</li>
                </ul>
            `
        }
    ]
};

export default rootCanalContent;