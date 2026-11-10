import type { ServiceContent } from '@/lib/services';

const toothExtractionContent: ServiceContent = {
    description: [
        "L'estrazione dentale, o avulsione, è l'intervento di chirurgia orale finalizzato alla rimozione di un dente dall'alveolo. Sebbene l'odontoiatria moderna miri sempre alla conservazione del dente naturale, l'estrazione diventa un passo necessario quando il dente è irrimediabilmente compromesso da carie profonde, fratture radicolari o malattie parodontali avanzate che ne pregiudicano la stabilità.",
        "L'intervento viene eseguito con tecniche minimamente invasive per preservare il più possibile l'osso circostante, facilitando così la futura riabilitazione tramite impianti. Grazie all'uso di anestetici locali avanzati e, se necessario, della sedazione cosciente, la procedura risulta oggi sicura, rapida e priva di dolore, garantendo al paziente un decorso post-operatorio confortevole."
    ],
    benefits: [
        "Eliminazione definitiva di focolai infettivi, ascessi e dolore acuto.",
        "Prevenzione del danneggiamento dei denti sani adiacenti.",
        "Risoluzione di problematiche legate ai denti del giudizio inclusi o malposizionati.",
        "Creazione dello spazio necessario per trattamenti ortodontici complessi.",
        "Bonifica del cavo orale per ripristinare una corretta salute sistemica."
    ],
    quickFacts: {
        procedureTime: '20 - 60 minuti',
        anesthesia: 'locale (opzionale sedazione cosciente)',
        recoveryTime: '3 - 5 giorni per la guarigione iniziale dei tessuti',
        results: 'risoluzione dell\'infezione e del dolore, sito pronto per impianto',
    },
    sections: [
        {
            id: 'tipologie-estrazione',
            title: 'Tipologie di Intervento: Semplice e Chirurgica',
            content: `
                <p>A seconda della complessità del caso, l'approccio chirurgico varia per massimizzare l'efficacia:</p>
                <ul>
                    <li><strong>Estrazione Semplice:</strong> Eseguita su denti già erotti e visibili, utilizzando strumenti che ne permettono la rimozione fluida.</li>
                    <li><strong>Estrazione Chirurgica:</strong> Necessaria per denti fratturati sotto la gengiva o denti inclusi (come i denti del giudizio). Richiede una piccola incisione per accedere alle radici e, spesso, il sezionamento del dente per una rimozione meno traumatica.</li>
                    <li><strong>Denti del Giudizio:</strong> Un intervento specifico per i terzi molari che possono causare infiammazioni (pericoroniti) o danni ai molari vicini.</li>
                </ul>
            `
        },
        {
            id: 'post-operatorio',
            title: 'Protocollo di Recupero e Guarigione',
            content: `
                <p>Seguire le istruzioni post-operatorie è fondamentale per evitare complicanze come l'alveolite secca:</p>
                <ol>
                    <li><strong>Gestione del Coagulo:</strong> Nelle prime 24 ore è vietato sciacquare la bocca o sputare vigorosamente per non rimuovere il coagulo, essenziale per la guarigione dell'osso.</li>
                    <li><strong>Alimentazione:</strong> Dieta morbida e fredda/tiepida per i primi giorni. Evitare assolutamente cibi duri, caldi o l'uso di cannucce.</li>
                    <li><strong>Igiene:</strong> Dal secondo giorno, sciacqui delicati con acqua salata o collutori a base di clorexidina prescritti dal medico.</li>
                    <li><strong>Stile di vita:</strong> Sospensione del fumo per almeno 72 ore, poiché riduce l'ossigenazione dei tessuti e rallenta drasticamente la guarigione.</li>
                </ol>
            `
        },
        {
            id: 'sostituzione-dente',
            title: 'Sostituzione del Dente: Perché è Fondamentale',
            content: `
                <p>Estrarre un dente è solo la prima fase; lasciare uno spazio vuoto comporta rischi per l'intero apparato masticatorio:</p>
                <ul>
                    <li><strong>Spostamento dentale:</strong> I denti vicini tendono a inclinarsi verso lo spazio vuoto, alterando l'occlusione.</li>
                    <li><strong>Riassorbimento osseo:</strong> Senza la stimolazione della radice, l'osso alveolare tende a ritirarsi nel tempo.</li>
                    <li><strong>Soluzioni:</strong> Proponiamo riabilitazioni tramite <strong>impianti dentali</strong> (la soluzione più fisiologica) o ponti protesici per ripristinare estetica e funzione masticatoria.</li>
                </ul>
            `
        },
        {
            id: 'prevenzione-sicurezza',
            title: 'La Nostra Filosofia Conservativa',
            content: `
                <p>Ogni estrazione è preceduta da una diagnosi accurata tramite radiografia endorale o CBCT (TAC 3D) per mappare nervi e strutture anatomiche sensibili.</p>
                <p>La nostra priorità rimane la prevenzione: controlli regolari e igiene professionale sono gli strumenti più efficaci per evitare di arrivare alla perdita del dente. Tuttavia, quando necessario, affrontiamo l'estrazione con la massima professionalità per garantirti un ritorno rapido al benessere.</p>
            `
        }
    ]
};

export default toothExtractionContent;