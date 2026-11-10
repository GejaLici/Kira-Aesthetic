import type { ServiceContent } from '@/lib/services';

const fixedBracesContent: ServiceContent = {
    description: [
        "L'ortodonzia fissa rappresenta la soluzione più collaudata ed efficace per correggere malocclusioni complesse, affollamento dentale e problemi di allineamento. Attraverso l'uso di attacchi (bracket) e archi metallici, questo trattamento esercita una pressione costante e precisa, guidando i denti verso la loro posizione ideale per una funzione masticatoria ottimale e un sorriso armonioso.",
        "Oggi l'ortodonzia tradizionale si è evoluta drasticamente: i moderni apparecchi fissi sono più piccoli, confortevoli e discreti rispetto al passato. Oltre alla classica versione in metallo, offriamo soluzioni estetiche in ceramica o zaffiro e sistemi autoleganti avanzati, rendendo il percorso verso il sorriso perfetto adatto sia ai bambini che agli adulti."
    ],
    benefits: [
        "Massima precisione nel controllo del movimento di ogni singolo dente.",
        "Efficacia garantita anche per i casi clinici e le malocclusioni più gravi.",
        "Miglioramento dell'estetica del viso e delle proporzioni del sorriso.",
        "Prevenzione di usura dentale, carie e problemi gengivali legati ai denti storti.",
        "Risultati permanenti e stabili grazie alla fase di ritenzione post-trattamento."
    ],
    quickFacts: {
        procedureTime: '45 - 90 min (applicazione)',
        anesthesia: 'non necessaria',
        recoveryTime: '2 - 4 giorni (adattamento)',
        results: 'visibili progressivamente (18-36 mesi)',
    },
    sections: [
        {
            id: 'tipologie-apparecchi',
            title: 'Tipologie di Apparecchi Fissi',
            content: `
                <p>Presso il nostro centro, proponiamo diverse opzioni per rispondere alle esigenze cliniche ed estetiche di ogni paziente:</p>
                <ul>
                    <li><strong>Apparecchio Metallico Tradizionale:</strong> La scelta più robusta ed economica, composta da bracket in acciaio inossidabile di alta qualità.</li>
                    <li><strong>Apparecchio Estetico:</strong> Utilizza bracket in ceramica o zaffiro trasparente che si mimetizzano con il colore naturale dello smalto, ideali per gli adulti.</li>
                    <li><strong>Sistemi Autoleganti:</strong> Bracket avanzati che riducono l'attrito e la necessità di elastici, accelerando spesso i tempi di trattamento e facilitando l'igiene.</li>
                    <li><strong>Ortodonzia Linguale:</strong> Gli attacchi vengono posizionati sulla superficie interna dei denti, rendendo l'apparecchio totalmente invisibile dall'esterno.</li>
                </ul>
            `
        },
        {
            id: 'percorso-ortodontico',
            title: 'Le Fasi del Trattamento',
            content: `
                <p>Il viaggio verso un nuovo sorriso è pianificato meticolosamente attraverso passaggi chiave:</p>
                <ol>
                    <li><strong>Studio del Caso:</strong> Analisi radiografica (panoramica e teleradiografia), impronte digitali e fotografie per creare un piano di trattamento su misura.</li>
                    <li><strong>Bonding (Applicazione):</strong> I bracket vengono incollati ai denti con resine specifiche e collegati dall'arco ortodontico.</li>
                    <li><strong>Attivazioni Mensili:</strong> Visite periodiche per regolare la tensione dell'arco e monitorare il progresso dei movimenti.</li>
                    <li><strong>Rimozione e Contenzione:</strong> Una volta raggiunto l'obiettivo, l'apparecchio viene rimosso e viene applicato un dispositivo di ritenzione per mantenere i denti nella nuova posizione.</li>
                </ol>
            `
        },
        {
            id: 'manutenzione-igiene',
            title: 'Igiene e Cura dell’Apparecchio',
            content: `
                <p>Una corretta manutenzione è fondamentale per evitare complicazioni come carie o macchie durante il trattamento:</p>
                <ul>
                    <li><strong>Pulizia Accurata:</strong> È necessario utilizzare spazzolini ortodontici a "V", scovolini e fili interdentali specifici per rimuovere i residui di cibo tra i bracket.</li>
                    <li><strong>Attenzione alla Dieta:</strong> Evitare cibi eccessivamente duri, croccanti o appiccicosi (come caramelle mou o gomme da masticare) che potrebbero staccare gli attacchi.</li>
                    <li><strong>Controlli Professionali:</strong> Programmare sedute di igiene professionale più frequenti per garantire la salute dei tessuti gengivali.</li>
                </ul>
            `
        },
        {
            id: 'considerazioni-pazienti',
            title: 'Ortodonzia per Tutte le Età',
            content: `
                <p>Non è mai troppo tardi per allineare il sorriso. Nei <strong>bambini</strong>, l'apparecchio fisso guida lo sviluppo corretto delle arcate, mentre negli <strong>adulti</strong> permette di risolvere problematiche funzionali accumulate negli anni, migliorando al contempo la fiducia in se stessi.</p>
                <p>Affidarsi a un ortodontista esperto garantisce che le forze applicate siano bilanciate, proteggendo le radici dei denti e l'osso alveolare durante tutto il processo di spostamento.</p>
            `
        }
    ]
};

export default fixedBracesContent;