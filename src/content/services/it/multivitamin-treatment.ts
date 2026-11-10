import type { ServiceContent } from '@/lib/services';

const multivitaminTreatmentContent: ServiceContent = {
    description: [
        "Il trattamento multivitaminico è un potente 'booster' di medicina estetica che fornisce un concentrato di nutrienti essenziali, antiossidanti e oligoelementi direttamente nel derma. Questa procedura è progettata per contrastare gli effetti dello stress, dell'inquinamento e dell'invecchiamento, restituendo alla pelle la vitalità, l'idratazione e la luminosità che i normali prodotti cosmetici non riescono a garantire in profondità.",
        "Attraverso micro-iniezioni superficiali (tecnica mesoterapica), veicoliamo un cocktail personalizzato di vitamine (A, C, E, complesso B) e acido ialuronico non reticolato. Il risultato è una biorivitalizzazione immediata che stimola il metabolismo cellulare, protegge dai radicali liberi e migliora visibilmente la texture e il tono cutaneo di viso, collo e décolleté."
    ],
    benefits: [
        "Aumento immediato della luminosità e riduzione del colorito spento.",
        "Idratazione profonda e miglioramento della funzione barriera della pelle.",
        "Azione antiossidante intensiva contro i danni da fumo, smog e raggi UV.",
        "Stimolazione naturale del rinnovamento cellulare e della produzione di collagene.",
        "Trattamento preventivo ideale per mantenere la pelle giovane e resiliente."
    ],
    quickFacts: {
        procedureTime: '20 - 40 minuti',
        anesthesia: 'non necessaria (o crema anestetica per pelli sensibili)',
        recoveryTime: 'immediato (piccoli pomfi riassorbibili in poche ore)',
        results: 'progressivi, ottimali con un ciclo di 3-5 sedute',
    },
    sections: [
        {
            id: 'cocktail-vitaminico',
            title: 'Un Mix di Nutrienti su Misura',
            content: `
                <p>Ogni trattamento viene formulato in base alle carenze specifiche rilevate durante la consulenza:</p>
                <ul>
                    <li><strong>Vitamina C:</strong> Illumina l'incarnato e accelera la sintesi di collagene.</li>
                    <li><strong>Vitamina A (Retinolo):</strong> Affina la grana della pelle e contrasta le rughe sottili.</li>
                    <li><strong>Vitamina E & B5:</strong> Svolgono un'azione lenitiva, riparatrice e protettiva sulle membrane cellulari.</li>
                    <li><strong>Acido Ialuronico:</strong> Agisce come veicolo idratante per trasportare le vitamine nel cuore del derma.</li>
                </ul>
            `
        },
        {
            id: 'percorso-trattamento',
            title: 'Fasi della Procedura',
            content: `
                <p>Il trattamento è rapido, sicuro e minimamente invasivo:</p>
                <ol>
                    <li><strong>Detersione:</strong> La pelle viene preparata e disinfettata accuratamente.</li>
                    <li><strong>Micro-iniezioni:</strong> Utilizzo di aghi sottilissimi per depositare il cocktail vitaminico a livello superficiale.</li>
                    <li><strong>Massaggio Bio-attivo:</strong> Una leggera manipolazione finale favorisce la distribuzione omogenea dei nutrienti.</li>
                    <li><strong>Protezione:</strong> Applicazione di uno schermo solare per proteggere la pelle appena rigenerata.</li>
                </ol>
            `
        },
        {
            id: 'risultati-mantenimento',
            title: 'Protocollo Consigliato',
            content: `
                <p>Per massimizzare l'efficacia del trattamento multivitaminico, consigliamo un approccio ciclico:</p>
                <ul>
                    <li><strong>Fase d'urto:</strong> 3-5 sedute iniziali distanziate di circa 2-4 settimane l'una dall'altra.</li>
                    <li><strong>Mantenimento:</strong> Una seduta ogni 3-4 mesi per conservare i livelli di nutrienti e la luminosità raggiunta.</li>
                    <li><strong>Post-trattamento:</strong> È possibile tornare subito al lavoro; si consiglia solo di evitare sport intensi e saune per le prime 24 ore.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-medica',
            title: 'Sicurezza e Bio-compatibilità',
            content: `
                <p>L'utilizzo di sostanze naturalmente presenti nell'organismo o nei nutrienti essenziali rende il rischio di reazioni allergiche estremamente basso. La procedura è eseguita esclusivamente da medici esperti che garantiscono la massima sterilità e precisione tecnica.</p>
                <p>Il trattamento multivitaminico non altera i lineamenti del viso, ma ne esalta la salute intrinseca, offrendo un aspetto fresco e riposato in modo del tutto naturale.</p>
            `
        }
    ]
};

export default multivitaminTreatmentContent;