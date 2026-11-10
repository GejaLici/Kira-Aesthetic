import type { ServiceContent } from '@/lib/services';

const rinoplastiaContent: ServiceContent = {
    description: [
        "La rinoplastia es una intervención de cirugía estética y funcional cuyo objetivo es mejorar la forma de la nariz y su armonía con los rasgos del rostro. Muchas personas deciden realizarse una operación de nariz para corregir una giba nasal, una punta ancha o una nariz desviada, siempre buscando un resultado natural y equilibrado.",
        "Además del aspecto estético, la rinoplastia moderna permite mejorar notablemente la respiración, especialmente en casos de desviación del tabique nasal. En nuestra clínica utilizamos principalmente la rinoplastia cerrada y la rinoplastia ultrasónica (Piezo), técnicas avanzadas que reducen el trauma quirúrgico y aceleran el proceso de recuperación."
    ],
    benefits: [
        "Mejora la armonía facial y las proporciones de la nariz.",
        "Corrige problemas respiratorios causados por el tabique nasal desviado (rinoseptoplastia).",
        "Resultados naturales sin cicatrices visibles.",
        "Aumenta la confianza en uno mismo y el bienestar personal.",
        "Recuperación más rápida gracias a la rinoplastia ultrasónica."
    ],
    quickFacts: {
        procedureTime: '1–2 Horas',
        anesthesia: 'Local o General',
        recoveryTime: '1–2 Semanas',
        results: 'Permanentes',
    },
    sections: [
        {
            id: 'que-es-la-rinoplastia',
            title: 'Qué es la Rinoplastia?',
            content: `
                <p><strong>La rinoplastia</strong> es una cirugía estética y funcional de la nariz que permite modificar la estructura ósea y cartilaginosa para mejorar tanto la apariencia como la función respiratoria.</p>
                <p>Es una de las intervenciones más complejas de la <strong>cirugía estética facial</strong>, ya que la nariz ocupa una posición central en el equilibrio del rostro.</p>
                <p>Una rinoplastia bien realizada no debe parecer artificial, sino integrarse de forma natural con los rasgos faciales del paciente.</p>
            `
        },
        {
            id: 'cuando-realizar-operacion-nariz',
            title: 'Cuándo Realizar una Operación de Nariz?',
            content: `
                <p>La rinoplastia puede indicarse por motivos estéticos, funcionales o una combinación de ambos.</p>
                <ul>
                    <li>Giba nasal pronunciada</li>
                    <li>Punta nasal ancha, caída o asimétrica</li>
                    <li>Nariz desviada de frente o de perfil</li>
                    <li>Dificultad para respirar por desviación del tabique</li>
                    <li>Secuelas de traumatismos o fracturas nasales</li>
                    <li>Rinoplastia secundaria tras una cirugía previa fallida</li>
                </ul>
                <p>Contrario a lo que muchos piensan, el <strong>dolor tras la operación de nariz</strong> suele ser leve y fácilmente controlable.</p>
            `
        },
        {
            id: 'rinoplastia-cerrada',
            title: 'Rinoplastia Cerrada: Sin Cicatrices Visibles',
            content: `
                <p><strong>La rinoplastia cerrada</strong> es una técnica avanzada en la que todas las incisiones se realizan dentro de las fosas nasales.</p>
                <p>Sus principales ventajas incluyen:</p>
                <ul>
                    <li>Ausencia de cicatrices externas visibles</li>
                    <li>Menor inflamación y hematomas</li>
                    <li>Recuperación más rápida</li>
                    <li>Resultados estéticos más naturales</li>
                </ul>
                <p>El <strong>precio de la rinoplastia</strong> con técnica cerrada depende de la complejidad del caso y de los objetivos estéticos establecidos en la consulta.</p>
            `
        },
        {
            id: 'rinoplastia-ultrasonica',
            title: 'Rinoplastia Ultrasónica (Piezo): Precisión e Innovación',
            content: `
                <p><strong>La rinoplastia ultrasónica</strong>, también conocida como rinoplastia Piezo, representa una evolución importante en la cirugía de la nariz.</p>
                <p>Mediante el uso de ultrasonidos, el cirujano puede remodelar los huesos nasales con una precisión milimétrica, preservando los tejidos blandos.</p>
                <ul>
                    <li>Menor trauma óseo</li>
                    <li>Disminución notable de la inflamación</li>
                    <li>Recuperación más cómoda para el paciente</li>
                    <li>Resultados más simétricos y previsibles</li>
                </ul>
                <p>El <strong>costo de la rinoplastia ultrasónica</strong> refleja el uso de tecnología avanzada y la alta especialización del procedimiento.</p>
            `
        },
        {
            id: 'rinoseptoplastia',
            title: 'Rinoseptoplastia: Estética y Mejora Respiratoria',
            content: `
                <p><strong>La rinoseptoplastia</strong> es una cirugía combinada que corrige tanto la apariencia de la nariz como la desviación del tabique nasal.</p>
                <p>Está indicada para pacientes que presentan dificultades respiratorias y desean al mismo tiempo una mejora estética.</p>
                <p>El <strong>precio de la rinoseptoplastia</strong> varía según el grado de desviación y la complejidad de la intervención.</p>
            `
        },
        {
            id: 'proceso-rinoplastia',
            title: 'Proceso de la Rinoplastia: Antes, Durante y Después',
            content: `
                <h3>Antes de la cirugía</h3>
                <p>El paciente se somete a una evaluación médica completa para garantizar la máxima seguridad.</p>
                <ul>
                    <li>Análisis de sangre y orina</li>
                    <li>Consulta cardiológica y electrocardiograma</li>
                    <li>Valoración anestésica</li>
                    <li>Simulación 3D del resultado final</li>
                </ul>

                <h3>Anestesia</h3>
                <p>La intervención se realiza bajo <strong>anestesia general intravenosa</strong>, lo que permite un mayor confort y control del sangrado.</p>

                <h3>Después de la cirugía</h3>
                <ul>
                    <li>Férula nasal durante 7–10 días</li>
                    <li>Taponamiento nasal moderno y transpirable</li>
                    <li>Inflamación temporal que disminuye progresivamente</li>
                </ul>
            `
        },
        {
            id: 'recuperacion-resultados',
            title: 'Recuperación y Resultados de la Rinoplastia',
            content: `
                <p>Después de una rinoplastia, la inflamación es normal, especialmente en la punta de la nariz.</p>
                <ul>
                    <li>Reincorporación a la vida cotidiana tras 10–14 días</li>
                    <li>Actividad física permitida después de aproximadamente un mes</li>
                    <li>Resultado definitivo visible entre 6 y 12 meses</li>
                </ul>
                <p>La paciencia es clave para apreciar plenamente el resultado final.</p>
            `
        },
        {
            id: 'por-que-elegirnos',
            title: 'Por Qué Elegirnos para Tu Rinoplastia?',
            content: `
                <ul>
                    <li><strong>Cirujanos altamente especializados</strong> en rinoplastia</li>
                    <li><strong>Tecnología ultrasónica Piezo</strong> de última generación</li>
                    <li><strong>Atención integral</strong>: transporte y alojamiento incluidos</li>
                    <li><strong>Seguimiento postoperatorio</strong> en España, Italia o Francia</li>
                </ul>
                <p><strong>La rinoplastia en el extranjero</strong> ofrece una excelente relación calidad-precio sin comprometer la seguridad ni los resultados.</p>
            `
        }
    ]
};

export default rinoplastiaContent;
