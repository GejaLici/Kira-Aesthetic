import type { ServiceContent } from '@/lib/services';

const dentalProstheticsContent: ServiceContent = {
    description: [
        "Le protesi dentarie sono dispositivi medici su misura progettati per sostituire i denti mancanti e ripristinare le funzioni vitali della bocca. La perdita dei denti non influisce solo sull'estetica, ma compromette la masticazione, la fonetica e può causare il riassorbimento dell'osso mascellare.",
        "Dalle soluzioni fisse come corone e ponti, fino alle protesi mobili e alle innovative opzioni su impianti, l'odontoiatria protesica moderna offre soluzioni confortevoli e naturali. L'obiettivo è restituire al paziente un sorriso armonioso e la piena capacità di alimentarsi e parlare con fiducia."
    ],
    benefits: [
        "Ripristino immediato della funzione masticatoria e della corretta digestione.",
        "Miglioramento dell'estetica del viso e sostegno dei tessuti periorali.",
        "Correzione dei difetti di pronuncia legati alla mancanza di elementi dentari.",
        "Prevenzione dello spostamento dei denti sani residui.",
        "Soluzioni personalizzate per ogni esigenza clinica e di budget."
    ],
    quickFacts: {
        procedureTime: 'Varia in base al tipo (2-6 sedute)',
        anesthesia: 'Locale (se richiesta preparazione)',
        recoveryTime: 'Adattamento in pochi giorni',
        results: 'Funzionali ed estetici a lungo termine',
    },
    sections: [
        {
            id: 'protesi-fisse',
            title: 'Protesi Fisse: Stabilità e Comfort Permanente',
            content: `
                <p>Le protesi fisse sono soluzioni non rimovibili che offrono il massimo grado di naturalezza e stabilità:</p>
                <ul>
                    <li><strong>Corone (Capsule):</strong> Ideali per rinforzare un singolo dente danneggiato o devitalizzato, proteggendolo da fratture.</li>
                    <li><strong>Ponti:</strong> Utilizzati per colmare lo spazio di uno o più denti mancanti, ancorandosi ai denti sani adiacenti.</li>
                    <li><strong>Protesi su Impianti:</strong> La soluzione più avanzata che sostituisce i denti senza coinvolgere quelli sani, agendo come radici artificiali integrate nell'osso.</li>
                </ul>
            `
        },
        {
            id: 'protesi-mobili',
            title: 'Protesi Mobili: Versatilità e Semplicità',
            content: `
                <p>Le protesi mobili (rimovibili) permettono una facile igiene e sono adatte a diverse situazioni cliniche:</p>
                <ul>
                    <li><strong>Protesi Totale (Dentiera):</strong> La soluzione classica per chi ha perso tutti i denti di un'arcata, realizzata in resina acrilica anallergica.</li>
                    <li><strong>Scheletrato:</strong> Una protesi parziale con struttura metallica che si aggancia ai denti residui per una maggiore stabilità.</li>
                    <li><strong>Overdenture su Impianti:</strong> Una protesi mobile stabilizzata da 2 o 4 impianti, che elimina il problema dell'instabilità tipico delle dentiere tradizionali.</li>
                </ul>
            `
        },
        {
            id: 'percorso-riabilitativo',
            title: 'Il Percorso di Ricostruzione del Sorriso',
            content: `
                <p>Ogni riabilitazione protesica segue un protocollo rigoroso per garantire precisione e comfort:</p>
                <ol>
                    <li><strong>Analisi Diagnostica:</strong> Valutazione clinica, radiografie e scansioni digitali per definire il piano di trattamento.</li>
                    <li><strong>Impronte di Precisione:</strong> Rilevamento dell'anatomia del cavo orale (spesso tramite scanner intraorale) per il laboratorio odontotecnico.</li>
                    <li><strong>Fase di Prova:</strong> Test funzionali ed estetici (forma e colore) per assicurarsi che la protesi sia in perfetta armonia con il viso.</li>
                    <li><strong>Consegna e Adattamento:</strong> Applicazione finale e istruzioni dettagliate sulla gestione e la manutenzione quotidiana.</li>
                </ol>
            `
        },
        {
            id: 'manutenzione-protesi',
            title: 'Cura e Longevità dei Dispositivi',
            content: `
                <p>La durata di una protesi dipende dalla cura dedicata:</p>
                <ul>
                    <li><strong>Igiene:</strong> Le protesi fisse si puliscono come i denti naturali; quelle mobili richiedono detergenti specifici e spazzolatura dopo ogni pasto.</li>
                    <li><strong>Controlli:</strong> Visite ogni 6-12 mesi sono fondamentali per verificare la corretta occlusione e la salute delle gengive.</li>
                    <li><strong>Ribasatura:</strong> Per le protesi mobili, può essere necessario periodicamente un riadattamento alla gengiva dovuto al naturale mutamento dell'osso.</li>
                </ul>
            `
        }
    ]
};

export default dentalProstheticsContent;