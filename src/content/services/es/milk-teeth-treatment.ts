import type { ServiceContent } from '@/lib/services';

const milkTeethTreatmentContent: ServiceContent = {
    description: [
        "La salud de los dientes primarios de un niño —comúnmente conocidos como dientes de leche— es la base de su futura sonrisa adulta. Estos primeros dientes son mucho más que temporales; son esenciales para una nutrición adecuada mediante la masticación, el desarrollo del habla clara y, lo más importante, actúan como mantenedores naturales de espacio. Guían a los dientes permanentes a sus posiciones correctas, previniendo el apiñamiento futuro y problemas ortodónticos complejos.",
        "Tratar las caries e infecciones en los dientes de leche es vital para prevenir el dolor y asegurar que los dientes permanentes que se desarrollan debajo no se vean dañados por la propagación de bacterias. Nuestro enfoque en odontopediatría es salvar estos dientes primarios siempre que sea posible, asegurando que su hijo crezca con una boca sana y funcional y una actitud positiva hacia el cuidado dental."
    ],
    benefits: [
        "Desarrollo adecuado: Garantiza que los dientes permanentes tengan el espacio correcto para emerger.",
        "Prevención del dolor: Detiene los dolores de muela y la sensibilidad que pueden afectar el sueño y el aprendizaje del niño.",
        "Habla clara: Favorece la colocación correcta de la lengua para una pronunciación nítida.",
        "Salud nutricional: Permite que los niños mastiquen una amplia variedad de alimentos saludables y crujientes con comodidad.",
        "Confianza psicológica: Ayuda a los niños a sentirse orgullosos de su sonrisa desde una edad temprana."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutos por sesión',
        anesthesia: 'Anestesia local o sedación leve si es necesario',
        recoveryTime: 'Inmediata; evitar comer hasta que pase el efecto de la anestesia',
        results: 'Función restaurada y dientes primarios libres de infección',
    },
    sections: [
        {
            id: 'pediatric-specialties',
            title: 'Tratamientos Especializados para Niños',
            content: `
                <p>Los niños requieren un enfoque clínico diferente al de los adultos. Ofrecemos procedimientos pediátricos especializados adaptados a bocas más pequeñas:</p>
                <ul>
                    <li><strong>Obturaciones de Composite:</strong> Utilizamos materiales seguros del color del diente para reparar caries de forma discreta y restaurar la estructura dental.</li>
                    <li><strong>Pulpotomía ("Endodoncia infantil"):</strong> Cuando la caries llega al nervio, realizamos una terapia pulpar suave para eliminar solo la parte afectada, salvando el diente y deteniendo el dolor.</li>
                    <li><strong>Coronas Pediátricas:</strong> Para dientes con caries extensas, utilizamos coronas duraderas de circonio o acero inoxidable para proteger el diente hasta que se caiga de forma natural.</li>
                    <li><strong>Mantenedores de Espacio:</strong> Si un diente de leche se pierde demasiado pronto, colocamos un dispositivo personalizado para mantener el hueco abierto para el futuro diente adulto.</li>
                </ul>
            `
        },
        {
            id: 'fear-free-dentistry',
            title: 'Una Experiencia sin Temores',
            content: `
                <p>Sabemos que las primeras visitas al dentista pueden definir la relación de un niño con su salud oral de por vida. Nuestra clínica está diseñada para ser un espacio acogedor:</p>
                <ol>
                    <li><strong>Decir-Mostrar-Hacer:</strong> Explicamos cada herramienta y paso en un lenguaje amigable para los niños antes de comenzar.</li>
                    <li><strong>Técnica Suave:</strong> Nuestros especialistas en pediatría están formados en manejo de la conducta para mantener a los niños tranquilos y colaboradores.</li>
                    <li><strong>Refuerzo Positivo:</strong> Nos enfocamos en que la experiencia sea gratificante, asegurando que su hijo se vaya con una sonrisa y una sensación de logro.</li>
                </ol>
            `
        },
        {
            id: 'preventive-shield',
            title: 'El Escudo Preventivo',
            content: `
                <p>El mejor tratamiento es la prevención. Brindamos protección de alto nivel para detener las caries antes de que comiencen:</p>
                <ul>
                    <li><strong>Selladores de Fisuras:</strong> Una capa protectora delgada aplicada en las superficies de masticación de los molares posteriores para "sellar" la entrada de comida y bacterias.</li>
                    <li><strong>Terapia de Flúor:</strong> Aplicaciones de flúor de grado profesional para fortalecer el esmalte y hacerlo más resistente a los ataques ácidos.</li>
                    <li><strong>Educación en el Hogar:</strong> Demostraciones prácticas para padres e hijos sobre las mejores técnicas de cepillado y uso de hilo dental para manos pequeñas.</li>
                </ul>
            `
        },
        {
            id: 'international-families',
            title: 'Apoyo para Familias Internacionales',
            content: `
                <p>Recibimos a familias de todo el mundo, proporcionando una experiencia fluida para el cuidado dental infantil:</p>
                <ul>
                    <li><strong>Logística Familiar:</strong> Asistencia con alojamiento y transporte adecuado para niños en <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Atención Multilingüe:</strong> Nuestro equipo se comunica claramente en varios idiomas para asegurar que tanto padres como hijos se sientan comprendidos.</li>
                    <li><strong>Continuidad:</strong> Las citas de seguimiento y los chequeos preventivos pueden coordinarse en cualquiera de nuestras clínicas regionales.</li>
                </ul>
            `
        }
    ]
};

export default milkTeethTreatmentContent;