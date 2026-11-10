import type { ServiceContent } from '@/lib/services';

const gynecomastiaContent: ServiceContent = {
    description: [
        "La ginecomastia è una condizione caratterizzata dallo sviluppo anomalo del tessuto mammario nell'uomo, un inestetismo che può causare forte imbarazzo e disagio sociale. L'intervento di correzione chirurgica mira a eliminare l'eccesso di ghiandola e grasso, restituendo al torace un profilo piatto, sodo e tipicamente maschile.",
        "Che si tratti di ginecomastia 'vera' (eccesso ghiandolare), 'falsa' (accumulo adiposo) o mista, il nostro approccio si concentra sulla scultura dei contorni pettorali. Utilizzando tecniche avanzate di liposuzione e micro-escissione, riusciamo a ridefinire il torace con incisioni minime e quasi invisibili, garantendo un risultato naturale in armonia con la fisionomia del paziente."
    ],
    benefits: [
        "Eliminazione definitiva del seno maschile e del senso di gonfiore.",
        "Torace più scolpito, tonico e virile.",
        "Ripristino immediato della sicurezza in sé stessi e nel proprio corpo.",
        "Incisioni periareolari discrete che diventano impercettibili nel tempo.",
        "Recupero post-operatorio rapido grazie a tecniche mini-invasive."
    ],
    quickFacts: {
        procedureTime: '1 - 2 ore',
        anesthesia: 'generale o locale con sedazione',
        recoveryTime: '5 - 7 giorni',
        results: 'visibili dopo 4-6 settimane',
    },
    sections: [
        {
            id: 'tipologie-ginecomastia',
            title: 'Diagnosi e Tecniche di Intervento',
            content: `
                <p>Ogni torace richiede una strategia specifica per ottenere un profilo armonioso:</p>
                <ul>
                    <li><strong>Liposuzione Pettorale:</strong> Ideale per la pseudoginecomastia (solo grasso). Attraverso micro-cannule si aspira l'eccesso adiposo senza lasciare cicatrici visibili.</li>
                    <li><strong>Escissione Chirurgica:</strong> Necessaria quando è presente un eccesso di ghiandola mammaria densa. Si esegue una piccola incisione a semicerchio sul bordo dell'areola.</li>
                    <li><strong>Tecnica Combinata:</strong> È l'approccio più comune, che unisce la liposuzione per modellare i contorni e l'escissione per rimuovere il nucleo ghiandolare.</li>
                    <li><strong>Rimodellamento Cutaneo:</strong> Nei casi di forte perdita di peso, interveniamo rimuovendo la pelle in eccesso per evitare l'effetto svuotato.</li>
                </ul>
            `
        },
        {
            id: 'preparazione-intervento',
            title: 'Il Percorso Pre-Operatorio',
            content: `
                <p>Prima di procedere, è essenziale identificare l'origine della condizione:</p>
                <ol>
                    <li><strong>Esami Endocrinologici:</strong> Valutiamo il quadro ormonale per escludere cause sistemiche che potrebbero richiedere cure mediche piuttosto che chirurgiche.</li>
                    <li><strong>Ecografia Mammaria:</strong> Fondamentale per distinguere tra componente ghiandolare e adiposa e pianificare la tecnica corretta.</li>
                    <li><strong>Pianificazione Estetica:</strong> Discutiamo la posizione delle areole e il grado di definizione muscolare che si desidera ottenere.</li>
                </ol>
            `
        },
        {
            id: 'post-operatorio-ginecomastia',
            title: 'Recupero e Convalescenza',
            content: `
                <p>Il decorso post-operatorio è generalmente agevole se si seguono poche e semplici regole:</p>
                <ul>
                    <li><strong>Guaina Compressiva:</strong> Indossare una fascia elastica specifica per circa 4 settimane per favorire l'adesione dei tessuti e ridurre il gonfiore.</li>
                    <li><strong>Attività Fisica:</strong> È possibile tornare al lavoro dopo una settimana, ma gli esercizi intensi per i pettorali vanno evitati per almeno un mese.</li>
                    <li><strong>Gestione del Dolore:</strong> Eventuali fastidi sono lievi e facilmente controllabili con i comuni analgesici.</li>
                </ul>
            `
        },
        {
            id: 'risultati-finali',
            title: 'Risultati e Mantenimento',
            content: `
                <p>I risultati della chirurgia per ginecomastia sono considerati permanenti, a patto di mantenere uno stile di vita sano e un peso stabile.</p>
                <p>La cicatrice, posizionata lungo il bordo dell'areola dove cambia il colore della pelle, tende a mimetizzarsi completamente entro pochi mesi, permettendo al paziente di esporsi a torso nudo in totale libertà e sicurezza.</p>
            `
        }
    ]
};

export default gynecomastiaContent;