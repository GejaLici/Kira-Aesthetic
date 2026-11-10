import type { ServiceContent } from '@/lib/services';

const sclerotherapyContent: ServiceContent = {
    description: [
        "La scleroterapia è il trattamento d'elezione in medicina estetica e angiologia per l'eliminazione dei capillari visibili (teleangectasie) e delle piccole vene varicose delle gambe. Questa procedura mini-invasiva consiste nell'iniezione mirata di una soluzione sclerosante che induce la chiusura del vaso danneggiato, il quale viene poi riassorbito naturalmente dall'organismo.",
        "Oltre ai significativi benefici estetici, che restituiscono alle gambe un aspetto omogeneo e giovane, la scleroterapia migliora la funzionalità circolatoria, alleviando sintomi comuni come senso di pesantezza, gonfiore e crampi notturni. È una procedura ambulatoriale rapida che non richiede anestesia e permette un ritorno immediato alle attività quotidiane."
    ],
    benefits: [
        "Eliminazione efficace di capillari a ragnatela e vene reticolari.",
        "Miglioramento della microcircolazione e riduzione del senso di pesantezza.",
        "Risultati estetici visibili e duraturi senza ricorso alla chirurgia.",
        "Procedura ambulatoriale sicura, rapida e quasi indolore.",
        "Recupero immediato senza necessità di degenza o tempi di inattività."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minuti',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (uso di calza a compressione per 7-14 giorni)',
        results: 'progressivi, sbiadimento completo in alcune settimane',
    },
    sections: [
        {
            id: 'meccanismo-azione',
            title: 'Come agisce la Terapia Sclerosante',
            content: `
                <p>La tecnica si basa su un principio chimico-fisico preciso per risolvere l'insufficienza venosa superficiale:</p>
                <ul>
                    <li><strong>Iniezione Mirata:</strong> La soluzione sclerosante (liquida o sotto forma di schiuma) viene introdotta nel vaso tramite aghi sottilissimi.</li>
                    <li><strong>Fibrosi Controllata:</strong> Il farmaco provoca una reazione delle pareti venose che si "incollano", interrompendo il flusso di sangue nel vaso inutile o danneggiato.</li>
                    <li><strong>Riassorbimento:</strong> Una volta chiuso, il capillare viene trattato dal corpo come tessuto fibroso e smaltito gradualmente, scomparendo alla vista.</li>
                </ul>
            `
        },
        {
            id: 'percorso-post-trattamento',
            title: 'Cura e Mantenimento Post-Seduta',
            content: `
                <p>Per ottimizzare la riuscita del trattamento e prevenire discromie, è fondamentale seguire alcuni accorgimenti:</p>
                <ol>
                    <li><strong>Compressione:</strong> L'uso di calze a compressione graduata è essenziale per mantenere il vaso chiuso nelle prime fasi post-iniezione.</li>
                    <li><strong>Attività Fisica:</strong> Camminare subito dopo la seduta è consigliato per attivare la circolazione profonda, ma vanno evitati sport intensi per 48 ore.</li>
                    <li><strong>Esposizione Solare:</strong> È vietato esporsi al sole o a lampade UV per almeno 4 settimane per evitare iperpigmentazioni (macchie scure) sui punti trattati.</li>
                    <li><strong>Calore:</strong> Evitare bagni molto caldi, saune e fanghi termali nei giorni immediatamente successivi.</li>
                </ol>
            `
        },
        {
            id: 'risultati-ciclo',
            title: 'Risultati e Numero di Sedute',
            content: `
                <p>La scleroterapia non è un trattamento "one-shot" ma un percorso progressivo:</p>
                <ul>
                    <li><strong>Numero di sedute:</strong> Variabile da 3 a 8 sedute in base all'estensione dell'area, distanziate di circa 15-20 giorni.</li>
                    <li><strong>Evoluzione:</strong> È normale osservare inizialmente un leggero rossore o piccoli lividi che lasciano spazio a un graduale schiarimento dei vasi.</li>
                    <li><strong>Mantenimento:</strong> Poiché la fragilità capillare può essere costituzionale, si consigliano controlli annuali per trattare eventuali nuovi vasi.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-controindicazioni',
            title: 'Sicurezza e Valutazione Medica',
            content: `
                <p>La procedura è estremamente sicura se eseguita da uno specialista (Angiologo o Chirurgo Vascolare) previa valutazione Ecodoppler.</p>
                <p><strong>Controindicazioni:</strong> Il trattamento è sconsigliato in gravidanza, in caso di trombosi venosa profonda recente, infezioni cutanee attive o gravi malattie sistemiche non compensate. Durante la consulenza, il medico valuterà l'idoneità del paziente per garantire la massima efficacia in totale sicurezza.</p>
            `
        }
    ]
};

export default sclerotherapyContent;