import type { ServiceContent } from '@/lib/services';

const prpHairContent: ServiceContent = {
    description: [
        "Il PRP (Plasma Ricco di Piastrine) per capelli è una terapia tricologica d'avanguardia che sfrutta il potenziale rigenerativo dei fattori di crescita autologhi per contrastare il diradamento e l'alopecia. Questa tecnica biostimolante agisce direttamente sui bulbi piliferi ancora attivi ma indeboliti, promuovendo il rinforzo del fusto, accelerando la ricrescita e migliorando sensibilmente la densità della chioma.",
        "Essendo una procedura che utilizza esclusivamente il plasma prelevato dal paziente stesso, il PRP rappresenta una soluzione sicura, naturale e priva di rischi di rigetto. È il trattamento d'elezione sia per uomini che per donne che desiderano fermare la caduta eccessiva dei capelli e ripristinare il turgore e la salute del cuoio capelluto senza ricorrere a farmaci sistemici o interventi invasivi."
    ],
    benefits: [
        "Stimolazione efficace dei follicoli piliferi 'dormienti' o miniaturizzati.",
        "Contrasto attivo alla caduta dei capelli e al diradamento stagionale o ormonale.",
        "Aumento dello spessore, della resistenza e della qualità del fusto del capello.",
        "Supporto fondamentale pre e post trapianto di capelli (autotrapianto).",
        "Trattamento sicuro, autologo e minimamente invasivo."
    ],
    quickFacts: {
        procedureTime: '45 - 60 minuti',
        anesthesia: 'non necessaria (o locale spray)',
        recoveryTime: 'immediato (evitare lavaggio per 24h)',
        results: 'primi segni a 2-3 mesi, ottimali a 6-12 mesi',
    },
    sections: [
        {
            id: 'scienza-tricologica',
            title: 'Meccanismo di Rigenerazione Follicolare',
            content: `
                <p>Il successo del PRP in tricologia si basa sulla capacità dei fattori di crescita di "riprogrammare" il ciclo di vita del capello:</p>
                <ul>
                    <li><strong>Fase Anagen:</strong> Il trattamento prolunga la fase di crescita attiva del capello, ritardandone la caduta.</li>
                    <li><strong>Vascolarizzazione:</strong> Stimola la creazione di nuovi micro-vasi attorno al bulbo, garantendo un maggiore afflusso di nutrienti.</li>
                    <li><strong>Riparazione Cellulare:</strong> Contrasta l'infiammazione del cuoio capelluto, spesso causa silente di diradamento progressivo.</li>
                </ul>
            `
        },
        {
            id: 'fasi-trattamento-capelli',
            title: 'Come si svolge la seduta',
            content: `
                <p>Il protocollo segue una sequenza clinica rigorosa per garantire la massima concentrazione piastrinica:</p>
                <ol>
                    <li><strong>Prelievo Ematico:</strong> Raccolta di una piccola quantità di sangue venoso dal paziente.</li>
                    <li><strong>Centrifugazione Controllata:</strong> Separazione del plasma ricco di piastrine dai globuli rossi attraverso un macchinario ad alta velocità.</li>
                    <li><strong>Micro-Iniezioni:</strong> Somministrazione del concentrato nel cuoio capelluto tramite aghi sottilissimi con tecnica a "tappeto".</li>
                    <li><strong>Massaggio Distributivo:</strong> Manipolazione leggera per favorire la penetrazione dei fattori di crescita nei tessuti.</li>
                </ol>
            `
        },
        {
            id: 'risultati-aspettative',
            title: 'Cosa aspettarsi dal PRP',
            content: `
                <p>La rigenerazione dei capelli è un processo biologico che richiede costanza e pazienza:</p>
                <ul>
                    <li><strong>Protocollo Standard:</strong> Solitamente si consigliano 3 o 4 sedute iniziali, distanziate di un mese.</li>
                    <li><strong>Evoluzione:</strong> Dopo le prime sedute si nota una riduzione della perdita; successivamente i capelli appaiono più corposi e vitali.</li>
                    <li><strong>Mantenimento:</strong> Per stabilizzare i risultati nel tempo, è indicata una seduta di richiamo ogni 4-6 mesi, a seconda del grado di alopecia.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-qualita',
            title: 'Standard di Eccellenza',
            content: `
                <p>Utilizziamo esclusivamente dispositivi medici certificati per la separazione del plasma, assicurando che la concentrazione di piastrine sia ottimale per indurre la ricrescita. La procedura viene eseguita in totale sterilità da medici esperti in tricologia rigenerativa.</p>
                <p>Il PRP capelli non è solo un trattamento estetico, ma una vera terapia medica che agisce alla radice del problema, restituendo forza e fiducia nel proprio aspetto in modo naturale.</p>
            `
        }
    ]
};

export default prpHairContent;