import type { ServiceContent } from '@/lib/services';

const beardTransplantContent: ServiceContent = {
    description: [
        "Il trapianto di barba è una procedura di chirurgia estetica altamente specializzata, progettata per ripristinare o aumentare la densità e la definizione di barba, baffi e basette. È la soluzione ideale per uomini con aree diradate, irregolari o prive di peli a causa di fattori genetici, cicatrici da acne o traumi.",
        "Utilizzando la tecnica FUE (Follicular Unit Extraction), preleviamo i follicoli dal cuoio capelluto del paziente per reimpiantarli sul viso. Questa procedura offre una soluzione permanente e dall'aspetto completamente naturale, permettendo di modellare e curare la propria barba proprio come una barba nativa."
    ],
    benefits: [
        "Ripristino completo della densità in zone diradate o glabre.",
        "Definizione precisa dei contorni di barba, baffi e basette.",
        "Risultato permanente e naturale grazie all'uso dei propri follicoli.",
        "Assenza di cicatrici lineari nell'area donatrice grazie alla tecnica FUE.",
        "Miglioramento significativo dell'estetica facciale e della fiducia in se stessi."
    ],
    quickFacts: {
        procedureTime: '3-8 ore',
        anesthesia: 'locale (con eventuale sedazione leggera)',
        recoveryTime: '7-10 giorni',
        results: 'visibili dopo 3-4 mesi (finali in 12-18 mesi)',
    },
    sections: [
        {
            id: 'densita-definizione-barba',
            title: 'Trapianto di Barba: Ottenere la Densità Desiderata',
            content: `
                <p>Molti uomini desiderano una barba folta e ben definita, elemento distintivo dell'identità maschile. Il <b>trapianto di barba</b> consente di creare una crescita uniforme e direzionata, riempiendo i "buchi" e definendo i lineamenti del viso in modo armonioso.</p>
                <p>I peli trapiantati mantengono le caratteristiche dei follicoli originali, crescendo naturalmente e permettendo di essere regolati, rasati o lasciati lunghi secondo lo stile desiderato.</p>
            `
        },
        {
            id: 'approccio-fue-barba',
            title: 'Il Nostro Approccio: Arte e Precisione FUE',
            content: `
                <p>La tecnica chirurgica d'elezione è la <strong>FUE (Follicular Unit Extraction)</strong>, che garantisce risultati superiori con il minimo impatto:</p>
                <ul>
                    <li><strong>Estrazione Mirata:</strong> Prelievo di singole unità follicolari dalla parte posteriore o laterale della testa.</li>
                    <li><strong>Impianto Artistico:</strong> Creazione di siti riceventi rispettando rigorosamente l'angolo, la direzione e la profondità naturale dei peli facciali.</li>
                    <li><strong>Personalizzazione:</strong> Ogni progetto viene disegnato preventivamente per adattarsi perfettamente alla struttura ossea del volto del paziente.</li>
                </ul>
            `
        },
        {
            id: 'percorso-trapianto-barba',
            title: 'Il Tuo Percorso di Chirurgia Facciale',
            content: `
                <h4>Preparazione e Procedura:</h4>
                <p>La procedura è ambulatoriale e si svolge in anestesia locale. Durante la sessione, il chirurgo seleziona accuratamente i peli che più si avvicinano alla consistenza dei peli facciali per garantire l'uniformità visiva.</p>
                <ul>
                    <li><strong>Durata:</strong> Variabile in base al numero di innesti, solitamente completata in un'unica giornata.</li>
                    <li><strong>Discrezione:</strong> La tecnica FUE non lascia cicatrici lineari, rendendo l'intervento quasi impercettibile una volta guarito.</li>
                </ul>
            `
        },
        {
            id: 'recupero-e-crescita',
            title: 'Sintomi di Recupero e Ciclo di Crescita',
            content: `
                <p>Il post-operatorio richiede attenzione ma non interferisce a lungo con la vita quotidiana:</p>
                <ul>
                    <li><strong>Fase Iniziale:</strong> Piccole croste cadranno entro i primi 7-10 giorni. È normale che i peli trapiantati cadano inizialmente (shock loss) per poi ricrescere permanentemente.</li>
                    <li><strong>Cura:</strong> Evitare la rasatura per circa 10-14 giorni e proteggere l'area da sfregamenti o sudorazione eccessiva nelle prime due settimane.</li>
                    <li><strong>Risultati:</strong> La nuova crescita inizia dopo 3 mesi, con un aumento costante di spessore e densità fino a 12-18 mesi dopo l'intervento.</li>
                </ul>
            `
        },
        {
            id: 'rischi-e-sicurezza-barba',
            title: 'Potenziali Rischi e Considerazioni',
            content: `
                <p>Il trapianto di barba è una procedura sicura, ma la complessità dell'angolo di crescita dei peli facciali richiede un <b>chirurgo esperto</b> per evitare:</p>
                <ul>
                    <li>Crescita dei peli in direzioni innaturali.</li>
                    <li>Densità irregolare o asimmetrica tra i due lati del viso.</li>
                    <li>Follicoliti temporanee durante la ricrescita.</li>
                </ul>
                <p>Scegliere uno specialista certificato assicura che il design della barba sia simmetrico e che la sopravvivenza degli innesti sia ottimizzata al massimo.</p>
            `
        }
    ]
};

export default beardTransplantContent;