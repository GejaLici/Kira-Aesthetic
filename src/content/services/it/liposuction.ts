import type { ServiceContent } from '@/lib/services';

const liposuctionContent: ServiceContent = {
    description: [
        "La liposuzione, o lipoaspirazione, è l'intervento di chirurgia estetica mirato alla rimozione definitiva dei depositi di grasso localizzato che resistono a dieta e attività fisica. Non è un trattamento per il sovrappeso, ma una procedura di precisione per ridefinire i volumi del corpo e armonizzare la silhouette.",
        "Attraverso l'uso di cannule sottili e tecnologie avanzate, è possibile intervenire su aree specifiche come addome, fianchi, cosce, braccia e sottomento. L'obiettivo è creare un profilo corporeo più snello e proporzionato, garantendo risultati duraturi e cicatrici quasi invisibili grazie a micro-incisioni strategicamente posizionate."
    ],
    benefits: [
        "Eliminazione definitiva degli accumuli adiposi localizzati.",
        "Rimodellamento dei contorni corporei per una silhouette più armonica.",
        "Miglioramento dell'estetica di aree difficili (es. interno ginocchia, sottomento).",
        "Pelle più compatta grazie alle moderne tecniche di retrazione cutanea.",
        "Risultati permanenti se associati a uno stile di vita equilibrato."
    ],
    quickFacts: {
        procedureTime: '1 - 3 ore',
        anesthesia: 'locale con sedazione o generale',
        recoveryTime: '4 - 7 giorni (ritorno alle attività quotidiane)',
        results: 'visibili dopo il riassorbimento del gonfiore (3-6 mesi)',
    },
    sections: [
        {
            id: 'tecniche-lipoaspirazione',
            title: 'Tecniche Chirurgiche d’Avanguardia',
            content: `
                <p>Utilizziamo protocolli chirurgici moderni per massimizzare la sicurezza e il comfort del paziente:</p>
                <ul>
                    <li><strong>Liposuzione Tumescente:</strong> Prevede l'infiltrazione di una soluzione specifica che riduce il sanguinamento e facilita l'aspirazione del grasso.</li>
                    <li><strong>Tecnica VASER:</strong> Sfrutta gli ultrasuoni per liquefare il grasso prima di aspirarlo, ideale per chi cerca una definizione muscolare maggiore.</li>
                    <li><strong>PAL (Power-Assisted):</strong> L'uso di cannule vibranti permette una rimozione del grasso più rapida e meno traumatica per i tessuti circostanti.</li>
                </ul>
            `
        },
        {
            id: 'zone-intervento',
            title: 'Aree di Trattamento',
            content: `
                <p>La liposuzione può essere eseguita su singole aree o su più zone durante la stessa seduta:</p>
                <ol>
                    <li><strong>Tronco:</strong> Addome, fianchi (maniglie dell'amore) e schiena.</li>
                    <li><strong>Arti:</strong> Braccia, interno ed esterno coscia, ginocchia e caviglie.</li>
                    <li><strong>Viso:</strong> Riduzione del sottomento per ridefinire l'ovale del volto.</li>
                    <li><strong>Ginecomastia:</strong> Trattamento del seno maschile per un torace più tonico.</li>
                </ol>
            `
        },
        {
            id: 'recupero-post-operatorio',
            title: 'Il Post-Operatorio e la Guarigione',
            content: `
                <p>Il percorso di guarigione è fondamentale per consolidare il risultato estetico:</p>
                <ul>
                    <li><strong>Compressione Elastica:</strong> L'uso di una guaina compressiva per 4-6 settimane è essenziale per ridurre il gonfiore e modellare i tessuti.</li>
                    <li><strong>Gestione del Disagio:</strong> Il fastidio post-operatorio è simile a un indolenzimento muscolare e viene gestito con comuni analgesici.</li>
                    <li><strong>Linfodrenaggio:</strong> Consigliamo spesso massaggi drenanti dopo le prime due settimane per accelerare il recupero.</li>
                </ul>
            `
        },
        {
            id: 'risultati-permanenti',
            title: 'Mantenimento dei Risultati',
            content: `
                <p>Poiché le cellule adipose rimosse non possono rigenerarsi, i risultati della liposuzione sono considerati definitivi. Tuttavia, è importante mantenere un peso stabile per evitare che le cellule di grasso rimanenti aumentino di volume.</p>
                <p>In molti casi, la liposuzione rappresenta il primo passo verso una trasformazione completa del corpo, incentivando il paziente a mantenere uno stile di vita sano e attivo.</p>
            `
        }
    ]
};

export default liposuctionContent;