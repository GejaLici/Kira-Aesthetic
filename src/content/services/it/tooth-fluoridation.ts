import type { ServiceContent } from '@/lib/services';

const fluoridationContent: ServiceContent = {
    description: [
        "La fluorizzazione è un trattamento preventivo fondamentale che utilizza il fluoro, un minerale naturale, per rinforzare lo smalto dentale e proteggerlo dall'attacco degli acidi batterici. Questa procedura è considerata uno dei metodi più efficaci in odontoiatria per prevenire la carie sia nei bambini, i cui denti sono in fase di maturazione, sia negli adulti con particolari fattori di rischio.",
        "Attraverso processi di rimineralizzazione, il fluoro aiuta a riparare le lesioni iniziali dello smalto prima che si trasformino in cavità vere e proprie. L'applicazione professionale in studio permette di utilizzare concentrazioni di fluoro superiori rispetto ai prodotti domiciliari, creando una barriera protettiva duratura che riduce sensibilmente la sensibilità dentale e la proliferazione batterica."
    ],
    benefits: [
        "Rinforzo strutturale dello smalto contro l'erosione acida.",
        "Efficace prevenzione della carie nei denti da latte e permanenti.",
        "Rimineralizzazione delle macchie bianche (lesioni cariose iniziali).",
        "Riduzione della sensibilità dentale al caldo, al freddo e agli zuccheri.",
        "Trattamento rapido, sicuro e totalmente indolore per tutte le età."
    ],
    quickFacts: {
        procedureTime: '10 - 20 minuti',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (evitare cibo e bevande per 30 minuti)',
        results: 'protezione attiva e smalto più resistente nel tempo',
    },
    sections: [
        {
            id: 'meccanismo-fluoro',
            title: 'Come il Fluoro Protegge il Sorriso',
            content: `
                <p>Il fluoro svolge un'azione tripla per garantire la salute del cavo orale:</p>
                <ul>
                    <li><strong>Rimineralizzazione:</strong> Accelera il processo naturale di riparazione dello smalto, depositando minerali essenziali nelle aree indebolite.</li>
                    <li><strong>Resistenza:</strong> Durante la formazione dei denti, si integra nella struttura minerale rendendola chimicamente più stabile e meno solubile agli acidi.</li>
                    <li><strong>Azione Antibatterica:</strong> Interferisce con il metabolismo dei batteri della placca, limitando la loro produzione di acidi dannosi.</li>
                </ul>
            `
        },
        {
            id: 'applicazione-professionale',
            title: 'L\'Applicazione in Studio',
            content: `
                <p>Mentre il dentifricio quotidiano offre una protezione di base, il trattamento professionale potenzia la difesa dentale:</p>
                <ol>
                    <li><strong>Pulizia Preliminare:</strong> I denti vengono puliti per rimuovere placca e tartaro, permettendo al fluoro di aderire perfettamente.</li>
                    <li><strong>Applicazione:</strong> Il fluoro viene applicato sotto forma di gel, schiuma (tramite mascherine) o vernici specifiche ad alta adesività.</li>
                    <li><strong>Assorbimento:</strong> La sostanza viene lasciata agire per pochi minuti; le vernici, in particolare, rilasciano fluoro gradualmente per diverse ore.</li>
                </ol>
            `
        },
        {
            id: 'pazienti-indicati',
            title: 'Chi Beneficia della Fluorizzazione?',
            content: `
                <p>Sebbene sia un trattamento universale, è particolarmente raccomandato in casi specifici:</p>
                <ul>
                    <li><strong>Bambini e Adolescenti:</strong> Per proteggere i denti appena erotti che sono più vulnerabili.</li>
                    <li><strong>Pazienti Ortodontici:</strong> Chi porta l'apparecchio ha zone più difficili da pulire dove la placca ristagna facilmente.</li>
                    <li><strong>Recessioni Gengivali:</strong> Per proteggere le radici esposte che non sono coperte dallo smalto.</li>
                    <li><strong>Sindrome della Bocca Secca (Xerostomia):</strong> La mancanza di saliva aumenta drasticamente il rischio di carie.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-prevenzione',
            title: 'Sicurezza e Frequenza dei Trattamenti',
            content: `
                <p>La fluorizzazione professionale è un trattamento estremamente sicuro. Per i bambini, la supervisione dei genitori durante l'uso del dentifricio a casa è fondamentale per evitare l'ingestione eccessiva (fluorosi).</p>
                <p><strong>Frequenza:</strong> Consigliamo l'applicazione professionale ogni 6 o 12 mesi, solitamente durante la seduta di igiene orale, per mantenere costante la protezione dello smalto e monitorare la salute dei tessuti.</p>
            `
        }
    ]
};

export default fluoridationContent;