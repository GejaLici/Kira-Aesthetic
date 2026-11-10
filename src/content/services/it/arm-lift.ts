import type { ServiceContent } from '@/lib/services';

const armLiftContent: ServiceContent = {
    description: [
        "Il lifting delle braccia, o brachioplastica, è un intervento di chirurgia estetica progettato per rimuovere l'eccesso di pelle e grasso dalla parte superiore delle braccia, restituendo un profilo tonico e ridefinito. È la soluzione ideale per correggere le cosiddette 'braccia a pipistrello', spesso causate da invecchiamento o significative perdite di peso.",
        "L'obiettivo della procedura è rimodellare il contorno dell'arto superiore, rendendo la pelle più tesa, liscia e proporzionata al resto del corpo. Grazie all'evoluzione delle tecniche chirurgiche, oggi è possibile ottenere braccia sode con cicatrici posizionate strategicamente per essere il meno visibili possibile."
    ],
    benefits: [
        "Eliminazione definitiva della pelle cadente e flaccida delle braccia.",
        "Riduzione degli accumuli adiposi localizzati tra gomito e ascella.",
        "Rimodellamento del contorno corporeo per un aspetto più atletico e giovane.",
        "Maggiore libertà nella scelta dell'abbigliamento e nel movimento fisico.",
        "Risultati duraturi che migliorano significativamente l'autostima."
    ],
    quickFacts: {
        procedureTime: '2-3 ore',
        anesthesia: 'generale',
        recoveryTime: '2-4 settimane',
        results: 'stabili dopo 6-12 mesi',
    },
    sections: [
        {
            id: 'braccia-toniche-ridefinite',
            title: 'Lifting delle Braccia: Per un Profilo Tonico e Giovane',
            content: `
                <p>La <b>brachioplastica</b> affronta il rilassamento cutaneo che né la dieta né l'esercizio fisico possono correggere completamente. Quando la pelle perde la sua elasticità naturale, l'unico modo per ripristinare la tonicità è la rimozione chirurgica del tessuto in eccesso.</p>
                <p>L'intervento non solo migliora l'estetica, ma elimina anche il fastidio fisico dovuto allo sfregamento della pelle, permettendo di ritrovare disinvoltura nell'indossare abiti senza maniche e nello svolgere attività quotidiane.</p>
            `
        },
        {
            id: 'tecniche-brachioplastica',
            title: 'Il Nostro Approccio: Personalizzazione e Precisione',
            content: `
                <p>Ogni paziente ha una diversa anatomia e diversi obiettivi. Per questo offriamo diverse opzioni chirurgiche:</p>
                <ul>
                    <li><strong>Brachioplastica Standard:</strong> Per lassità moderata o severa; l'incisione corre lungo la parte interna del braccio.</li>
                    <li><strong>Mini-Brachioplastica:</strong> Per correzioni lievi, con un'incisione minima spesso nascosta nell'incavo ascellare.</li>
                    <li><strong>Liposuzione Braccia:</strong> Utilizzata quando il problema è principalmente l'eccesso di grasso e la pelle ha ancora una buona elasticità.</li>
                </ul>
                <p>I nostri chirurghi integrano spesso la liposuzione alla brachioplastica per definire meglio il muscolo sottostante e ottenere un risultato più armonioso.</p>
            `
        },
        {
            id: 'percorso-lifting-braccia',
            title: 'Comprendere il Tuo Percorso Chirurgico',
            content: `
                <h4>Preparazione e Intervento:</h4>
                <p>Il percorso inizia con un'analisi accurata della qualità della pelle. È fondamentale <b>smettere di fumare</b> almeno 4-6 settimane prima dell'intervento per garantire una corretta guarigione delle cicatrici.</p>
                <ul>
                    <li><strong>Anestesia:</strong> L'intervento si esegue in anestesia generale per la massima sicurezza del paziente.</li>
                    <li><strong>Fissaggio:</strong> I tessuti vengono sollevati e ridistribuiti, rimuovendo la pelle 'inutile' e chiudendo le incisioni con suture estetiche.</li>
                </ul>
            `
        },
        {
            id: 'recupero-e-guaina',
            title: 'Recupero e Cura Post-operatoria',
            content: `
                <p>Il successo del lifting dipende molto dalla cura nelle settimane successive:</p>
                <ul>
                    <li><strong>Guaina Compressiva:</strong> Fondamentale indossarla per 4-6 settimane per sostenere i tessuti e ridurre il gonfiore.</li>
                    <li><strong>Attività:</strong> Evitare il sollevamento di pesi e movimenti bruschi delle braccia per almeno un mese.</li>
                    <li><strong>Cicatrici:</strong> Sebbene permanenti, le cicatrici sbiadiranno nel tempo. È essenziale proteggerle dal sole con creme SPF 50+ per almeno un anno.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-e-rischi',
            title: 'Potenziali Rischi e Considerazioni',
            content: `
                <p>Come ogni intervento maggiore, la brachioplastica richiede un chirurgo esperto per minimizzare rischi quali:</p>
                <ul>
                    <li>Sieromi (accumuli di liquido) o asimmetrie dei contorni.</li>
                    <li>Cicatrizzazione lenta, particolarmente comune nei fumatori.</li>
                    <li>Alterazioni temporanee della sensibilità cutanea lungo l'incisione.</li>
                </ul>
                <p>La nostra clinica garantisce standard elevati e un monitoraggio costante per assicurare che il tuo percorso verso braccia toniche sia sicuro e soddisfacente.</p>
            `
        }
    ]
};

export default armLiftContent;