import type { ServiceContent } from '@/lib/services';

const eyebrowTransplantContent: ServiceContent = {
    description: [
        "Il trapianto di sopracciglia è una procedura chirurgica di precisione mirata a ripristinare la densità, la forma e la definizione dell'arcata sopraccigliare. È la soluzione definitiva per chi presenta sopracciglia diradate a causa di eccessiva depilazione, cicatrici, invecchiamento o condizioni mediche come l'alopecia.",
        "A differenza del microblading o del trucco semi-permanente, il trapianto utilizza i bulbi piliferi del paziente stesso (solitamente prelevati dal cuoio capelluto), garantendo una crescita naturale, tridimensionale e permanente. Il risultato non è solo estetico, ma restituisce espressività e armonia all'intero sguardo."
    ],
    benefits: [
        "Risultato permanente e naturale con peli veri che crescono autonomamente.",
        "Ricostruzione totale di sopracciglia assenti o parziali.",
        "Correzione definitiva di asimmetrie e vuoti causati da cicatrici.",
        "Tecnica FUE mini-invasiva senza cicatrici lineari visibili.",
        "Personalizzazione assoluta della forma in base ai lineamenti del viso."
    ],
    quickFacts: {
        procedureTime: '2 - 4 ore',
        anesthesia: 'locale (sedazione leggera opzionale)',
        recoveryTime: '5 - 7 giorni',
        results: 'finali dopo 10-12 mesi',
    },
    sections: [
        {
            id: 'tecnica-fue-sopracciglia',
            title: 'Tecnologia FUE: Precisione Microscopica',
            content: `
                <p>La tecnica d'elezione per il trapianto è la <b>FUE (Follicular Unit Extraction)</b>, che permette un prelievo selettivo e un innesto mirato:</p>
                <ul>
                    <li><strong>Estrazione Selettiva:</strong> Si prelevano singoli follicoli dall'area donatrice, scegliendo quelli più sottili che meglio imitano la struttura naturale del sopracciglio.</li>
                    <li><strong>Angolazione Naturale:</strong> La sfida principale è l'innesto con angolazioni molto acute rispetto alla pelle, fondamentali per replicare la crescita piatta dei peli originali.</li>
                    <li><strong>Nessun Segno Visibile:</strong> Grazie ai micro-strumenti utilizzati, non rimangono cicatrici né nell'area di prelievo né in quella ricevente.</li>
                </ul>
            `
        },
        {
            id: 'fasi-intervento',
            title: 'Il Processo di Ricostruzione',
            content: `
                <p>L'intervento è un connubio tra chirurgia e arte estetica:</p>
                <ol>
                    <li><strong>Disegno Estetico:</strong> Il chirurgo disegna la nuova arcata in base alle proporzioni auree del viso del paziente.</li>
                    <li><strong>Prelievo e Preparazione:</strong> I follicoli estratti vengono analizzati al microscopio per selezionare solo le unità mono-bulbari (singoli peli).</li>
                    <li><strong>Impianto:</strong> Ogni pelo viene posizionato seguendo la direzione specifica delle diverse zone del sopracciglio (testa, corpo e coda).</li>
                </ol>
            `
        },
        {
            id: 'recupero-e-crescita',
            title: 'Post-Operatorio e Risultati',
            content: `
                <p>Il recupero è rapido, ma richiede attenzione ai dettagli:</p>
                <ul>
                    <li><strong>Prime 48 ore:</strong> È normale un leggero gonfiore perioculare che scompare rapidamente.</li>
                    <li><strong>Caduta Iniziale:</strong> Dopo 2-3 settimane, i peli trapiantati cadono (<i>shock loss</i>); è un processo fisiologico, le radici rimangono attive e produrranno i nuovi peli definitivi.</li>
                    <li><strong>Manutenzione:</strong> Poiché i peli trapiantati mantengono le caratteristiche del cuoio capelluto, cresceranno più velocemente e andranno spuntati regolarmente con le forbicine (ogni 10-15 giorni).</li>
                    <li><strong>Evoluzione:</strong> I primi risultati visibili compaiono al 4° mese, raggiungendo la massima densità dopo circa un anno.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-considerazioni',
            title: 'Sicurezza e Aspettative',
            content: `
                <p>Sebbene sia un intervento di superficie, il trapianto di sopracciglia richiede un'estrema specializzazione per evitare risultati innaturali o peli che crescono in direzioni errate.</p>
                <p>È fondamentale affidarsi a chirurghi esperti in tricologia che sappiano gestire la delicata fase dell'innesto, assicurando una densità omogenea e una simmetria perfetta tra le due arcate.</p>
            `
        }
    ]
};

export default eyebrowTransplantContent;