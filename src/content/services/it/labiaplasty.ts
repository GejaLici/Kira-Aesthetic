import type { ServiceContent } from '@/lib/services';

const labiaplastyContent: ServiceContent = {
    description: [
        "La labioplastica è un intervento di chirurgia estetica intima volto a rimodellare o ridurre le dimensioni delle piccole labbra (labbra minora). Questa procedura non risponde solo a un'esigenza estetica, ma risolve spesso disagi fisici concreti come irritazioni, dolore durante l'attività sportiva o fastidio nell'indossare capi d'abbigliamento aderenti.",
        "Il nostro approccio combina sensibilità clinica e precisione chirurgica per restituire armonia e comfort alla zona intima femminile. L'intervento mira a creare una proporzione naturale, migliorando la fiducia in se stesse e la qualità della vita sessuale e quotidiana, con tecniche che preservano la sensibilità e garantiscono cicatrici praticamente invisibili."
    ],
    benefits: [
        "Eliminazione del dolore e dello sfregamento durante lo sport o il cammino.",
        "Miglioramento dell'estetica intima e simmetria delle piccole labbra.",
        "Maggiore sicurezza e comfort nei rapporti intimi.",
        "Facilitazione dell'igiene intima quotidiana.",
        "Recupero rapido con l'utilizzo di suture riassorbibili che non richiedono rimozione."
    ],
    quickFacts: {
        procedureTime: '45 - 90 minuti',
        anesthesia: 'locale con sedazione o generale',
        recoveryTime: '3 - 5 giorni (ritorno al lavoro)',
        results: 'definitivi dopo la completa guarigione (3-6 mesi)',
    },
    sections: [
        {
            id: 'tecniche-chirurgiche',
            title: 'Tecniche Avanzate di Rimodellamento',
            content: `
                <p>Ogni intervento viene personalizzato in base all'anatomia della paziente per garantire un risultato armonioso:</p>
                <ul>
                    <li><strong>Tecnica a Cuneo (Wedge):</strong> Rimuove una porzione centrale a forma di V, preservando i bordi naturali e la pigmentazione originale delle labbra.</li>
                    <li><strong>Resezione Lineare (Trim):</strong> Ideale per ridurre bordi eccessivamente lunghi o irregolari, garantendo una linea pulita e simmetrica.</li>
                    <li><strong>Riduzione del Cappuccio Clitorideo:</strong> Se necessario, può essere eseguita in combinazione per bilanciare l'intera estetica vulvare.</li>
                </ul>
            `
        },
        {
            id: 'percorso-post-operatorio',
            title: 'Cosa aspettarsi dopo l’intervento',
            content: `
                <p>La guarigione nell'area intima è generalmente rapida grazie all'ottima vascolarizzazione del tessuto:</p>
                <ol>
                    <li><strong>Prime 48 ore:</strong> È normale riscontrare gonfiore e un lieve fastidio, gestibili con impacchi freddi e comuni analgesici.</li>
                    <li><strong>Igiene:</strong> Saranno fornite istruzioni specifiche per detergere l'area delicatamente senza frizioni.</li>
                    <li><strong>Abbigliamento:</strong> Si consiglia l'uso di biancheria di cotone e pantaloni morbidi per le prime due settimane.</li>
                </ol>
            `
        },
        {
            id: 'limitazioni-recupero',
            title: 'Ritorno alla Normalità',
            content: `
                <p>Per una guarigione ottimale, è necessario osservare alcuni periodi di riposo per attività specifiche:</p>
                <ul>
                    <li><strong>Sport:</strong> Attività come ciclismo, equitazione o corsa possono essere riprese dopo circa 4-6 settimane.</li>
                    <li><strong>Attività sessuale:</strong> È fondamentale attendere la completa chiusura delle ferite (solitamente 6 settimane).</li>
                    <li><strong>Lavoro:</strong> La maggior parte delle pazienti riprende le attività sedentarie entro pochi giorni.</li>
                </ul>
            `
        },
        {
            id: 'sensibilita-discrezione',
            title: 'Privacy e Professionalità',
            content: `
                <p>La scelta di sottoporsi a una labioplastica è una decisione personale che richiede un ambiente di totale fiducia. Il nostro team garantisce la massima discrezione e un supporto costante durante tutto il percorso.</p>
                <p>La chirurgia intima moderna non mira a imporre standard estetici, ma a restituire alla donna il benessere necessario per vivere serenamente ogni aspetto della propria femminilità.</p>
            `
        }
    ]
};

export default labiaplastyContent;