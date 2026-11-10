import type { ServiceContent } from '@/lib/services';

const labiaplastyContent: ServiceContent = {
    description: [
        "La labioplastia es un procedimiento quirúrgico especializado diseñado para remodelar o reducir el tamaño de los labios menores (labios internos) o los labios mayores (labios externos). Muchas mujeres buscan este tratamiento para aliviar molestias físicas —como el roce, la irritación o el dolor durante el ejercicio y la intimidad— causadas por unos labios agrandados o asimétricos. Más allá del alivio físico, el procedimiento ofrece importantes beneficios estéticos, ayudando a las mujeres a recuperar la confianza en sí mismas y a sentirse más cómodas con ropa ajustada.",
        "Nuestro enfoque en la cirugía íntima se define por una discreción extrema, compasión y excelencia quirúrgica. Al utilizar técnicas avanzadas que priorizan la preservación de la sensibilidad y los contornos naturales, nuestros cirujanos certificados brindan un entorno de apoyo donde sus objetivos funcionales y estéticos se cumplen con los más altos estándares médicos."
    ],
    benefits: [
        "Elimina las molestias físicas, el roce y la irritación durante las actividades diarias.",
        "Reduce la inseguridad y mejora la confianza en situaciones íntimas.",
        "Permite una mayor comodidad al usar ropa ajustada o trajes de baño.",
        "Corrige la asimetría y restaura una apariencia más proporcionada.",
        "Mejora la higiene y la comodidad durante la menstruación y el ejercicio físico."
    ],
    quickFacts: {
        procedureTime: '1 - 2 horas',
        anesthesia: 'Anestesia local con sedación o anestesia general',
        recoveryTime: '1 semana para el trabajo; 4-6 semanas para ejercicio e intimidad',
        results: 'Resultados permanentes con suturas reabsorbibles',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Técnicas Quirúrgicas Avanzadas',
            content: `
                <p>Adaptamos el método quirúrgico a su anatomía específica y al resultado deseado, garantizando una cicatrización mínima y una curación óptima:</p>
                <ul>
                    <li><strong>Técnica de Recorte (Trim):</strong> El exceso de tejido se elimina a lo largo del borde exterior de los labios, proporcionando un acabado muy limpio y simétrico.</li>
                    <li><strong>Técnica de Cuña (Wedge):</strong> Se extrae una pieza en forma de V de la parte central de los labios. Este método es preferido por muchas pacientes ya que preserva el borde natural, rugoso y el color del borde labial.</li>
                    <li><strong>Suturas Reabsorbibles:</strong> Utilizamos hilos absorbibles de alta calidad que se disuelven solos, eliminando la necesidad de retirar puntos y reduciendo el estrés postoperatorio.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Su Proceso de Recuperación',
            content: `
                <p>La curación de una labioplastia requiere una atención cuidadosa a la higiene y el descanso durante las primeras semanas:</p>
                <ol>
                    <li><strong>Las primeras 72 horas:</strong> El pico de hinchazón y las molestias leves se controlan con analgésicos recetados y compresas frías. El descanso es esencial.</li>
                    <li><strong>Semana 1-2:</strong> La mayoría de las pacientes regresan al trabajo sedentario. La hinchazón comienza a disminuir significativamente, aunque el área permanece sensible.</li>
                    <li><strong>Semana 4-6:</strong> Los tejidos suelen estar lo suficientemente curados para retomar el ejercicio intenso, la natación y la actividad sexual. Los resultados finales aparecen una vez que toda la hinchazón residual ha desaparecido.</li>
                </ol>
            `
        },
        {
            id: 'patient-care-safety',
            title: 'Seguridad y Privacidad',
            content: `
                <p>Su seguridad y privacidad son nuestras prioridades absolutas. Garantizamos una experiencia confidencial desde la primera consulta hasta el seguimiento final:</p>
                <ul>
                    <li><strong>Consulta Discreta:</strong> Un entorno privado para discutir sus síntomas y expectativas sin juicios.</li>
                    <li><strong>Cicatrización Mínima:</strong> Las incisiones se colocan estratégicamente para ser virtualmente invisibles una vez curadas por completo.</li>
                    <li><strong>Preservación de la Sensibilidad:</strong> Nuestros cirujanos utilizan técnicas meticulosas para proteger las terminaciones nerviosas y mantener la sensibilidad natural.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Soporte Premium para Clientes Globales',
            content: `
                <p>Facilitamos un viaje fluido para nuestras pacientes internacionales que buscan cirugía íntima especializada:</p>
                <ul>
                    <li><strong>Viaje y Alojamiento:</strong> Asistencia completa con traslados al aeropuerto y alojamiento premium privado para garantizar una recuperación tranquila.</li>
                    <li><strong>Flexibilidad de Seguimiento:</strong> Puede optar por realizar sus chequeos postoperatorios en cualquiera de nuestras modernas instalaciones en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Asistencia Remota:</strong> Comunicación directa con nuestro equipo médico antes y después de su viaje para total tranquilidad.</li>
                </ul>
            `
        }
    ]
};

export default labiaplastyContent;