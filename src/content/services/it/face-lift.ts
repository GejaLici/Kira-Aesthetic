import type { ServiceContent } from '@/lib/services';

const faceLiftContent: ServiceContent = {
    description: [],
    benefits: [],
    quickFacts: {
        procedureTime: '3 - 6 ore',
        anesthesia: 'generale o locale con sedazione profonda',
        recoveryTime: '2 - 4 settimane',
        results: 'definitivi dopo 6-12 mesi'
    },
    sections: [
        {
            id: 'cos-e-lifting-viso',
            title: 'Cos’è il Lifting del Viso (Ritidectomia) e Come Funziona',
            content: `
                <p>Il <strong>lifting del viso</strong>, noto anche come <strong>ritidectomia</strong>, è un intervento chirurgico estetico volto a contrastare i segni dell’invecchiamento del volto e del collo. Grazie al <strong>riposizionamento dei tessuti cutanei e muscolari</strong>, permette di eliminare la pelle cadente, ridurre le rughe profonde e ridefinire il profilo mandibolare.</p>
                <p>L’approccio moderno non si limita a “tirare” la pelle: agisce sulle strutture profonde (SMAS) per un risultato naturale e armonioso, preservando l’espressività e i tratti caratteristici del volto.</p>
                <p><strong>Domande frequenti:</strong> “Il lifting del viso fa male?” “Quanto dura il recupero?” “Le cicatrici sono visibili?” La risposta è che con chirurghi esperti, dolore e gonfiore sono gestibili, il recupero è di 2-4 settimane e le cicatrici sono nascoste strategicamente tra capelli e pieghe naturali.</p>
            `
        },
        {
            id: 'tipi-lifting-viso',
            title: 'Tipi di Lifting del Viso: Tradizionale, Mini-Lifting, Deep Plane e Lifting del Collo',
            content: `
                <p>Il <strong>tipo di lifting</strong> viene scelto in base all’età, alla qualità della pelle e alla gravità della lassità:</p>
                <ul>
                    <li><strong>Lifting Tradizionale:</strong> completo, interviene su viso e collo per un ringiovanimento profondo.</li>
                    <li><strong>Mini-Lifting:</strong> meno invasivo, ideale per cedimenti lievi del terzo inferiore del volto.</li>
                    <li><strong>Deep Plane Lift:</strong> tecnica avanzata che agisce sugli strati muscolari profondi, garantendo naturalezza nei movimenti post-operatori.</li>
                    <li><strong>Lifting del Collo:</strong> elimina le “corde” del collo e ridefinisce l’angolo mento-gola.</li>
                </ul>
                <p><strong>Benefici:</strong> ringiovanimento visibile, profilo mandibolare ridefinito, volumi armonizzati, cicatrici nascoste, risultati duraturi fino a 10-15 anni.</p>
            `
        },
        {
            id: 'preparazione-lifting',
            title: 'Come Prepararsi al Lifting del Viso',
            content: `
                <p>La preparazione è fondamentale per sicurezza e successo dell’intervento. Include:</p>
                <ol>
                    <li><strong>Analisi facciale completa:</strong> valutazione struttura ossea, qualità dei tessuti e simulazione risultati.</li>
                    <li><strong>Esami clinici:</strong> sangue, ECG e altri test per confermare idoneità.</li>
                    <li><strong>Protocollo pre-chirurgico:</strong> sospensione fumo e farmaci anticoagulanti 4-6 settimane prima.</li>
                </ol>
                <p><strong>Benefici:</strong> riduce rischi, ottimizza guarigione e prepara il corpo a un recupero sicuro.</p>
            `
        },
        {
            id: 'recupero-lifting',
            title: 'Recupero Post-Operatorio e Cura del Lifting del Viso',
            content: `
                <p>Il <strong>recupero dal lifting</strong> richiede attenzione e cure post-operatorie:</p>
                <ul>
                    <li><strong>Primi giorni:</strong> bendaggio compressivo, testa elevata, ghiaccio per ridurre gonfiore.</li>
                    <li><strong>Rimozione punti:</strong> tra 7° e 10° giorno.</li>
                    <li><strong>Ritorno alle attività:</strong> sociali e lavorative dopo circa 15-20 giorni.</li>
                    <li><strong>Protezione:</strong> evitare sole diretto e sforzi fisici intensi per 4-6 settimane.</li>
                </ul>
                <p><strong>Benefici:</strong> assestamento ottimale dei tessuti, minore gonfiore, risultati naturali e armoniosi.</p>
            `
        },
        {
            id: 'sicurezza-rischi',
            title: 'Sicurezza e Possibili Rischi del Lifting',
            content: `
                <p>Il <strong>lifting del viso</strong> richiede competenza elevata per preservare nervi facciali, simmetria e funzione muscolare. Affidarsi a chirurghi certificati riduce rischi di asimmetrie o cicatrici ipertrofiche.</p>
                <p><strong>Benefici:</strong> volto giovane e riposato, risultato naturale e duraturo, gestione sicura di tutte le fasi dell’intervento.</p>
                <p><strong>Domande frequenti:</strong> “Il lifting lascia cicatrici?” “Quanto dura l’effetto?” “Posso combinare lifting e altri trattamenti estetici?” Tutte risposte personalizzate durante la consulenza con il chirurgo.</p>
            `
        }
    ]
};

export default faceLiftContent;
