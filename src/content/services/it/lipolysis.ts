import type { ServiceContent } from '@/lib/services';

const lipolysisContent: ServiceContent = {
    description: [
        "La lipolisi rappresenta l'alternativa non chirurgica alla liposuzione per il trattamento delle adiposità localizzate. Attraverso diverse metodiche mediche, è possibile agire in modo mirato su accumuli di grasso resistenti a dieta ed esercizio fisico, favorendo la rottura delle cellule adipose e il loro naturale smaltimento da parte dell'organismo.",
        "Sia che si tratti di ridefinire il profilo del mento, assottigliare il girovita o modellare le cosce, la lipolisi offre un approccio mini-invasivo o del tutto non invasivo. I trattamenti permettono di rimodellare la silhouette con precisione, garantendo un recupero immediato e risultati progressivi che migliorano l'armonia complessiva del corpo senza i rischi di un intervento chirurgico."
    ],
    benefits: [
        "Riduzione efficace del grasso localizzato senza bisturi né cicatrici.",
        "Trattamenti ambulatoriali rapidi con ritorno immediato alla vita sociale.",
        "Precisione nel rimodellamento di aree piccole e delicate (es. doppio mento).",
        "Miglioramento della tonicità cutanea grazie all'effetto termico o biostimolante.",
        "Risultati naturali e duraturi in sinergia con uno stile di vita sano."
    ],
    quickFacts: {
        procedureTime: '20 - 60 minuti',
        anesthesia: 'non necessaria o locale topica',
        recoveryTime: 'immediato',
        results: 'progressivi (visibili dopo 3-8 settimane)',
    },
    sections: [
        {
            id: 'metodiche-lipolisi',
            title: 'Le Tecnologie per lo Scioglimento del Grasso',
            content: `
                <p>Esistono diverse soluzioni mediche per indurre la lisi degli adipociti, selezionate in base all'area e al tipo di tessuto:</p>
                <ul>
                    <li><strong>Intralipoterapia (Lipolisi Infiltrativa):</strong> Iniezione di sostanze lipolitiche che sciolgono chimicamente le membrane delle cellule adipose.</li>
                    <li><strong>Criolipolisi:</strong> Utilizzo del freddo controllato per cristallizzare il grasso, che viene poi eliminato gradualmente dal sistema linfatico.</li>
                    <li><strong>Ultrasuoni Cavitazionali:</strong> Onde sonore che creano micro-bolle capaci di frammentare meccanicamente i depositi adiposi.</li>
                    <li><strong>Laserlipolisi:</strong> Energia laser che scioglie il grasso e contemporaneamente stimola il collagene per rassodare la pelle.</li>
                </ul>
            `
        },
        {
            id: 'zone-trattamento',
            title: 'Aree di Applicazione Comuni',
            content: `
                <p>La lipolisi è estremamente versatile e può essere applicata in diverse zone del corpo e del viso:</p>
                <ol>
                    <li><strong>Viso e Collo:</strong> Definizione della mandibola e riduzione del doppio mento.</li>
                    <li><strong>Addome e Fianchi:</strong> Eliminazione delle "maniglie dell'amore" e dei rotolini addominali.</li>
                    <li><strong>Arti:</strong> Riduzione dell'interno coscia, delle culotte de cheval e dell'area sopra il ginocchio.</li>
                    <li><strong>Braccia:</strong> Trattamento dell'adipe nella zona tricipitale per un contorno più definito.</li>
                </ol>
            `
        },
        {
            id: 'percorso-risultati',
            title: 'Cosa aspettarsi dal trattamento',
            content: `
                <p>Il percorso non è finalizzato alla perdita di peso generale, ma alla scultura dei contorni corporei:</p>
                <ul>
                    <li><strong>Sensazioni:</strong> Durante la seduta si può avvertire un leggero calore, pizzicore o sensazione di freddo, sempre ben tollerati.</li>
                    <li><strong>Post-seduta:</strong> È possibile riscontrare un lieve rossore o gonfiore nell'area trattata, segni del processo metabolico in atto.</li>
                    <li><strong>Protocollo:</strong> Solitamente si consiglia un ciclo di 3-5 sedute a distanza di alcune settimane per ottenere il massimo della definizione.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-consulenza',
            title: 'Consulenza Medica Specialistica',
            content: `
                <p>La riuscita della lipolisi dipende da una corretta diagnosi iniziale. Il nostro staff valuta lo spessore del pannicolo adiposo e l'elasticità cutanea per consigliare la tecnologia più performante.</p>
                <p>È importante sottolineare che, sebbene le cellule eliminate non si rigenerino, il mantenimento dei risultati è strettamente legato a un'alimentazione equilibrata che prevenga l'ipertrofia delle cellule adipose rimanenti.</p>
            `
        }
    ]
};

export default lipolysisContent;