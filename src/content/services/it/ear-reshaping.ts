import type { ServiceContent } from '@/lib/services';

const otoplastyContent: ServiceContent = {
    description: [
        "L'otoplastica, o rimodellamento delle orecchie, è l'intervento di chirurgia estetica volto a correggere la forma, la dimensione o la sporgenza delle orecchie (comunemente note come 'orecchie a sventola'). L'obiettivo è ripristinare un'armonia naturale tra le orecchie e il resto del viso, eliminando il disagio estetico e psicologico.",
        "Questa procedura è indicata sia per gli adulti che per i bambini (generalmente a partire dai 5-6 anni, quando lo sviluppo auricolare è quasi completo). Grazie a tecniche chirurgiche avanzate, è possibile rimodellare la cartilagine in modo preciso, ottenendo un profilo facciale equilibrato con cicatrici praticamente invisibili, nascoste nelle pieghe naturali dietro l'orecchio."
    ],
    benefits: [
        "Correzione definitiva delle orecchie a sventola o prominenti.",
        "Miglioramento dell'armonia e delle proporzioni del viso.",
        "Aumento significativo dell'autostima e della fiducia in se stessi.",
        "Intervento mini-invasivo con cicatrici nascoste e discrete.",
        "Risultati naturali e duraturi nel tempo."
    ],
    quickFacts: {
        procedureTime: '1 - 2 ore',
        anesthesia: 'locale con sedazione o generale',
        recoveryTime: '5 - 7 giorni',
        results: 'immediati e permanenti',
    },
    sections: [
        {
            id: 'tecniche-otoplastica',
            title: 'Approccio Chirurgico e Tecniche di Rimodellamento',
            content: `
                <p>Ogni intervento di otoplastica è personalizzato in base all'anatomia del paziente. Le tecniche principali includono:</p>
                <ul>
                    <li><strong>Suture di rimodellamento:</strong> Attraverso piccole incisioni posteriori, la cartilagine viene ripiegata per creare l'antelice (la piega naturale dell'orecchio) e fissata con suture permanenti.</li>
                    <li><strong>Riduzione della conca:</strong> Se la sporgenza è dovuta a un eccesso di cartilagine concale, questa viene rimodellata o parzialmente rimossa per avvicinare l'orecchio alla testa.</li>
                    <li><strong>Correzione del lobo:</strong> È possibile intervenire anche su lobi troppo grandi o disarmonici per completare il profilo estetico.</li>
                </ul>
                <p>L'uso di incisioni sul retro dell'orecchio garantisce che i segni dell'intervento siano celati allo sguardo esterno.</p>
            `
        },
        {
            id: 'percorso-operatorio',
            title: 'Preparazione e Intervento',
            content: `
                <p>Il percorso verso il nuovo profilo auricolare prevede passaggi rigorosi per la sicurezza del paziente:</p>
                <ol>
                    <li><strong>Consultazione:</strong> Valutazione della struttura cartilaginea e scelta della tecnica anestetica più idonea (spesso generale per i più piccoli).</li>
                    <li><strong>Pianificazione:</strong> Analisi fotografica per garantire simmetria e proporzione.</li>
                    <li><strong>Procedura:</strong> L'intervento è ambulatoriale e consente il ritorno a casa nella stessa giornata.</li>
                    <li><strong>Bendaggio:</strong> Viene applicata una medicazione protettiva 'a casco' per mantenere le orecchie nella nuova posizione durante i primi giorni di guarigione.</li>
                </ol>
            `
        },
        {
            id: 'recupero-post-otoplastica',
            title: 'Il Post-Operatorio: Cosa Aspettarsi',
            content: `
                <p>Il recupero dopo un rimodellamento delle orecchie è generalmente rapido e poco doloroso:</p>
                <ul>
                    <li><strong>Prima settimana:</strong> Il bendaggio compressivo viene rimosso dopo 5-7 giorni dal chirurgo.</li>
                    <li><strong>Protezione notturna:</strong> Dopo la rimozione dei punti, è necessario indossare una fascia elastica protettiva durante il sonno per circa 3-4 settimane.</li>
                    <li><strong>Attività fisica:</strong> Si consiglia di evitare sport di contatto per almeno un mese per prevenire traumi alla cartilagine in fase di stabilizzazione.</li>
                    <li><strong>Risultato finale:</strong> Sebbene il miglioramento sia visibile subito, il risultato definitivo si apprezza dopo circa 3 mesi, quando il gonfiore scompare completamente.</li>
                </ul>
            `
        },
        {
            id: 'considerazioni-rischi',
            title: 'Sicurezza e Risultati',
            content: `
                <p>L'otoplastica è considerata una procedura sicura, ma come ogni intervento chirurgico richiede la scelta di un chirurgo plastico esperto per minimizzare rischi come asimmetrie o recidive della sporgenza.</p>
                <p>Un risultato naturale deve evitare l'effetto dell'orecchio 'troppo schiacciato' contro la testa, mantenendo un angolo esteticamente gradevole e in linea con le proporzioni craniche del paziente.</p>
            `
        }
    ]
};

export default otoplastyContent;