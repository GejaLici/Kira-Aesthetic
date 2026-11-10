import type { ServiceContent } from '@/lib/services';

const abdominoplastyContent: ServiceContent = {
    description: [
        "L'addominoplastica, o tummy tuck, è l'intervento di chirurgia plastica d'elezione per il rimodellamento profondo della regione addominale. Questa procedura permette di eliminare drasticamente l'eccesso di pelle (grembiule addominale) e i depositi adiposi resistenti, ripristinando al contempo la compattezza della parete muscolare, spesso compromessa da gravidanze o importanti variazioni di peso.",
        "Oltre al miglioramento estetico, l'intervento mira a risolvere problematiche funzionali come la diastasi dei muscoli retti, restituendo forza al 'core' corporeo. Il risultato è un addome visibilmente più piatto, una vita più stretta e un profilo corporeo armonioso, con cicatrici strategicamente posizionate per essere occultate dalla normale biancheria intima."
    ],
    benefits: [
        "Rimozione definitiva della pelle flaccida e in eccesso (lassità cutanea).",
        "Riparazione chirurgica della diastasi dei muscoli retti addominali.",
        "Riduzione significativa delle smagliature localizzate nell'addome inferiore.",
        "Ridefinizione del punto vita e miglioramento della silhouette complessiva.",
        "Ripristino della fiducia in sé stessi e del comfort nel vestire."
    ],
    quickFacts: {
        procedureTime: '2 - 4 ore',
        anesthesia: 'generale',
        recoveryTime: '2 - 4 settimane (ritorno alle attività quotidiane)',
        results: 'permanenti (previo mantenimento del peso)',
    },
    sections: [
        {
            id: 'tecniche-addominali',
            title: 'Tecniche Chirurgiche Personalizzate',
            content: `
                <p>Ogni addome presenta caratteristiche uniche; per questo utilizziamo diverse varianti tecniche:</p>
                <ul>
                    <li><strong>Addominoplastica Completa:</strong> Ideale per chi presenta eccesso di pelle sia sopra che sotto l'ombelico e necessita di riparazione muscolare totale.</li>
                    <li><strong>Mini-Addominoplastica:</strong> Indicata quando il rilassamento cutaneo è limitato alla zona sotto-ombelicale, con un'incisione più contenuta.</li>
                    <li><strong>Addominoplastica con Liposuzione:</strong> La combinazione con la liposcultura permette di definire meglio i fianchi e il profilo addominale.</li>
                    <li><strong>Body Lift:</strong> Riservato ai casi di ex-obesità, per trattare l'eccesso di pelle che coinvolge anche i fianchi e la regione dorsale.</li>
                </ul>
            `
        },
        {
            id: 'preparazione-sicurezza',
            title: 'Preparazione e Protocolli di Sicurezza',
            content: `
                <p>La sicurezza è la nostra priorità assoluta. Il percorso pre-operatorio prevede:</p>
                <ul>
                    <li><strong>Screening Completo:</strong> Esami del sangue, ECG e valutazione anestesiologica dettagliata.</li>
                    <li><strong>Astensione dal fumo:</strong> Fondamentale smettere di fumare almeno 4 settimane prima per garantire la vascolarizzazione dei tessuti.</li>
                    <li><strong>Stabilità del peso:</strong> L'intervento è raccomandato quando il paziente ha raggiunto un peso stabile, non come metodo di dimagrimento.</li>
                </ul>
            `
        },
        {
            id: 'recupero-post-operatorio',
            title: 'Fase di Guarigione e Risultati',
            content: `
                <p>Il decorso post-operatorio è gestito con protocolli mirati a ridurre il disagio:</p>
                <ol>
                    <li><strong>Degenza:</strong> Solitamente sono previste 1 o 2 notti di osservazione in clinica.</li>
                    <li><strong>Guaina Compressiva:</strong> Indispensabile per 6-8 settimane per sostenere i tessuti e ridurre il gonfiore.</li>
                    <li><strong>Attività Fisica:</strong> Il riposo è totale nella prima settimana; la ripresa dello sport avviene gradualmente dopo circa 2 mesi.</li>
                    <li><strong>Evoluzione Risultati:</strong> Il gonfiore scompare progressivamente in 3-6 mesi, mentre la cicatrice matura e schiarisce nell'arco di un anno.</li>
                </ol>
            `
        },
        {
            id: 'considerazioni-rischi',
            title: 'Rischi e Gestione delle Cicatrici',
            content: `
                <p>Come ogni intervento maggiore, possono verificarsi sieromi, ematomi o guarigione lenta, specialmente nei fumatori. Le cicatrici sono permanenti ma progettate per essere nascoste dai costumi da bagno. Utilizziamo protocolli post-operatori avanzati (gel siliconici, massaggi, laser) per rendere i segni chirurgici il più sottili e meno visibili possibile nel tempo.</p>
            `
        }
    ]
};

export default abdominoplastyContent;