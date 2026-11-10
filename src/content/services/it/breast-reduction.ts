import type { ServiceContent } from '@/lib/services';

const breastReductionContent: ServiceContent = {
    description: [
        "La mastoplastica riduttiva è un intervento chirurgico volto a ridurre le dimensioni di seni eccessivamente grandi (ipertrofia mammaria), rimuovendo il tessuto ghiandolare, il grasso e la pelle in eccesso. Questa procedura non ha solo una finalità estetica, ma mira soprattutto ad alleviare i disagi fisici e migliorare la qualità della vita delle pazienti.",
        "Oltre a donare un seno più leggero, sodo e sollevato, l'intervento corregge le proporzioni del corpo e risolve problemi cronici come dolori a schiena, collo e spalle. Il risultato è una silhouette più armoniosa che permette di ritrovare libertà di movimento e benessere quotidiano."
    ],
    benefits: [
        "Sollievo immediato dal dolore cronico a schiena, collo e spalle.",
        "Miglioramento della postura e della facilità nello svolgere attività fisica.",
        "Riduzione delle irritazioni cutanee croniche nel solco sottomammario.",
        "Armonia estetica tra il volume del seno e la corporatura generale.",
        "Risultati permanenti con un seno visibilmente più sollevato e giovane."
    ],
    quickFacts: {
        procedureTime: '2-4 ore',
        anesthesia: 'generale',
        recoveryTime: '4-6 settimane',
        results: 'permanenti e proporzionati',
    },
    sections: [
        {
            id: 'mastoplastica-riduttiva-comfort',
            title: 'Mastoplastica Riduttiva: Benessere e Proporzione',
            content: `
                <p>Seni eccessivamente grandi possono causare non solo disagio psicologico, ma reali problemi di salute. La <b>mastoplastica riduttiva</b> interviene per alleggerire il carico fisico, eliminando il tessuto in eccesso e rimodellando la mammella per adattarla perfettamente alla figura della paziente.</p>
                <p>L'obiettivo è creare una forma del seno che sia naturale, soda e proporzionata, eliminando la sensazione di pesantezza e le limitazioni funzionali che spesso accompagnano l'ipertrofia mammaria.</p>
            `
        },
        {
            id: 'approccio-riduzione-seno',
            title: 'Il Nostro Approccio: Sollievo Personalizzato',
            content: `
                <p>Ogni intervento viene pianificato in base all'anatomia della paziente e all'entità della riduzione desiderata. Utilizziamo tecniche avanzate per minimizzare l'impatto visivo delle cicatrici:</p>
                <ul>
                    <li><strong>Tecnica a T Invertita:</strong> Utilizzata per riduzioni significative, permette di rimodellare completamente il seno e riposizionare il capezzolo.</li>
                    <li><strong>Tecnica Verticale:</strong> Ideale per riduzioni moderate, limita la cicatrice all'area intorno all'areola e alla linea verticale verso il solco.</li>
                    <li><strong>Liposuzione Complementare:</strong> Spesso associata per rifinire i contorni ascellari e laterali del seno.</li>
                </ul>
            `
        },
        {
            id: 'percorso-post-operatorio-riduzione',
            title: 'Comprendere il Percorso di Recupero',
            content: `
                <h4>Preparazione e Cure Post-Chirurgiche:</h4>
                <p>L'intervento richiede una notte di degenza per monitoraggio. La fase di recupero è fondamentale per stabilizzare i risultati e garantire una corretta guarigione delle ferite.</p>
                <ul>
                    <li><strong>Indumenti Compressivi:</strong> È necessario indossare un reggiseno chirurgico per 4-6 settimane per supportare il seno durante la guarigione.</li>
                    <li><strong>Ripresa delle Attività:</strong> La maggior parte delle pazienti può tornare al lavoro dopo 2 settimane, mentre lo sport intenso va evitato per circa un mese.</li>
                    <li><strong>Sensibilità:</strong> Lievi alterazioni della sensibilità del capezzolo sono comuni nelle prime fasi e tendono a risolversi spontaneamente.</li>
                </ul>
            `
        },
        {
            id: 'rischi-sicurezza-riduzione',
            title: 'Rischi e Considerazioni Cliniche',
            content: `
                <p>Sebbene sia un intervento con alti tassi di soddisfazione, la mastoplastica riduttiva è una chirurgia complessa. È fondamentale discutere con il chirurgo aspetti quali:</p>
                <ul>
                    <li>La potenziale influenza sulla capacità di allattamento futuro.</li>
                    <li>La gestione delle cicatrici, che col tempo tendono a sbiadire e a diventare meno visibili.</li>
                    <li>La simmetria mammaria, che viene ricercata con precisione millimetrica durante l'operazione.</li>
                </ul>
                <p>Affidarsi a <b>chirurghi plastici certificati</b> assicura che l'intervento sia eseguito seguendo i più alti standard di sicurezza e precisione estetica.</p>
            `
        }
    ]
};

export default breastReductionContent;