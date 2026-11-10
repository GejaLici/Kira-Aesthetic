import type { ServiceContent } from '@/lib/services';

const apicectomyContent: ServiceContent = {
    description: [
        "La resezione apicale, nota anche come apicectomia o chirurgia endodontica, è un intervento microchirurgico mirato a rimuovere un'infezione o un'infiammazione persistente all'apice della radice di un dente, spesso residua dopo una terapia canalare.",
        "L'obiettivo primario di questa procedura è eliminare il tessuto infetto (come granulomi o cisti radicolari) e sigillare la radice per prevenire future infiltrazioni batteriche. Rappresenta l'ultima, efficace risorsa per salvare il dente naturale ed evitare l'estrazione e la successiva necessità di impianti."
    ],
    benefits: [
        "Consente di salvare il dente naturale, evitando ponti o impianti.",
        "Risolve definitivamente infezioni croniche come granulomi e cisti.",
        "Elimina il dolore e la sensibilità alla pressione nei denti devitalizzati.",
        "Procedura mininvasiva con un tasso di successo superiore al 90%.",
        "Intervento rapido eseguito in anestesia locale con recupero veloce."
    ],
    quickFacts: {
        procedureTime: '30-90 minuti',
        anesthesia: 'locale',
        recoveryTime: '5-7 giorni',
        results: 'permanenti e conservativi',
    },
    sections: [
        {
            id: 'apicectomia-salvataggio-dente',
            title: 'Resezione Apicale: Salvare il Dente Quando Altro Non Basta',
            content: `
                <p>La <b>resezione apicale</b> è necessaria quando i batteri rimangono confinati nella parte estrema della radice, creando un'infezione cronica che non risponde alla classica devitalizzazione. È la soluzione mirata per <strong>eliminare l'infezione alla radice</strong> senza dover ricorrere all'estrazione.</p>
                <p>I sintomi tipici che richiedono questo intervento includono dolore persistente in un dente già trattato, gonfiore gengivale o la presenza di una fistola. Grazie all'apicectomia, è possibile ripristinare la salute del dente in modo conservativo.</p>
            `
        },
        {
            id: 'fasi-intervento-endodontico',
            title: 'Quando è Necessaria e Come si Esegue',
            content: `
                <p>L'intervento viene considerato quando il ritrattamento canalare standard fallisce o non è praticabile a causa di perni, corone fisse o cisti di grandi dimensioni. Le fasi principali includono:</p>
                <ul>
                    <li><strong>Accesso Chirurgico:</strong> Una piccola incisione sulla gengiva espone la radice infetta.</li>
                    <li><strong>Rimozione dell'Apice:</strong> Asportazione della punta della radice e del tessuto infetto circostante.</li>
                    <li><strong>Otturazione Retrogada:</strong> Il canale viene sigillato con materiali biocompatibili d'avanguardia (come i bioceramici) per una chiusura ermetica.</li>
                    <li><strong>Chiusura:</strong> Il tessuto viene richiuso con suture sottili, rimosse solitamente dopo una settimana.</li>
                </ul>
            `
        },
        {
            id: 'recupero-e-vantaggi-apice',
            title: 'Recupero Post-Operatorio e Vantaggi',
            content: `
                <p>Il recupero è generalmente rapido e poco invasivo. Per una guarigione ottimale consigliamo:</p>
                <ul>
                    <li><strong>Ghiaccio:</strong> Applicazione nelle prime ore per ridurre il gonfiore.</li>
                    <li><strong>Igiene Orale:</strong> Uso di collutori antisettici e delicatezza estrema durante lo spazzolamento dell'area trattata.</li>
                    <li><strong>Alimentazione:</strong> Dieta morbida e cibi freschi per i primi 2-3 giorni.</li>
                </ul>
                <p>Perché scegliere l'apicectomia? Risolve l'infezione alla fonte, ha un successo elevatissimo e, cosa più importante, ti permette di mantenere il tuo sorriso naturale.</p>
            `
        },
        {
            id: 'considerazioni-alternative',
            title: 'Considerazioni Importanti e Alternative',
            content: `
                <p>È fondamentale affidarsi a specialisti in endodonzia per garantire precisione millimetrica. Sebbene l'apicectomia sia la scelta d'elezione per salvare il dente, esistono delle alternative:</p>
                <ul>
                    <li><strong>Ritrattamento canalare:</strong> Qualora il canale sia accessibile senza chirurgia.</li>
                    <li><strong>Estrazione:</strong> Considerata l'ultima spiaggia, seguita poi dall'inserimento di un impianto dentale.</li>
                </ul>
                <p>Non aspettare che l'infezione peggiori. Una consulenza tempestiva può fare la differenza tra salvare il tuo dente o perderlo definitivamente.</p>
            `
        }
    ]
};

export default apicectomyContent;