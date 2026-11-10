import type { ServiceContent } from '@/lib/services';

const dentalFillingContent: ServiceContent = {
    description: [
        "L'otturazione dentale è il trattamento cardine dell'odontoiatria conservativa, finalizzato alla cura della carie e al ripristino dell'integrità strutturale del dente. Questa procedura permette di rimuovere il tessuto infetto, sigillare la cavità e restituire al dente la sua naturale forma e funzione masticatoria, prevenendo complicazioni più gravi come ascessi o la necessità di devitalizzazioni.",
        "Oggi utilizziamo esclusivamente materiali bio-compatibili ed estetici di ultima generazione che si integrano perfettamente con lo smalto originale. Grazie alle moderne tecniche di adesione e modellazione, l'otturazione non è solo una cura funzionale, ma un vero e proprio restauro invisibile che preserva la bellezza del sorriso e la salute del cavo orale a lungo termine."
    ],
    benefits: [
        "Arresto immediato della progressione della carie e dell'infezione batterica.",
        "Ripristino completo della funzione masticatoria e della forma del dente.",
        "Eliminazione del dolore e della sensibilità dentale al caldo e al freddo.",
        "Risultato estetico naturale grazie all'uso di resine composite invisibili.",
        "Conservazione della struttura dentale sana, evitando trattamenti più invasivi."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minuti',
        anesthesia: 'locale (ove necessario)',
        recoveryTime: 'immediato (possibile lieve sensibilità per 24-48h)',
        results: 'ripristino funzionale ed estetico immediato',
    },
    sections: [
        {
            id: 'materiali-estetici',
            title: 'Materiali Moderni: Il Passaggio al Composito',
            content: `
                <p>L'odontoiatria moderna ha abbandonato l'uso delle vecchie amalgame d'argento a favore di materiali più sicuri ed estetici:</p>
                <ul>
                    <li><strong>Resine Composite:</strong> Miscele di materiali plastici e particelle ceramiche che permettono di replicare fedelmente il colore e la durezza dello smalto. Si legano chimicamente al dente, rinforzandolo.</li>
                    <li><strong>Intarsi (Inlay/Onlay):</strong> Per cavità molto estese, utilizziamo restauri in ceramica realizzati in laboratorio. Rappresentano la soluzione intermedia tra otturazione e corona, garantendo massima resistenza.</li>
                    <li><strong>Biocompatibilità:</strong> I nuovi materiali sono privi di metalli e mercurio, garantendo una totale sicurezza per l'organismo.</li>
                </ul>
            `
        },
        {
            id: 'procedura-otturazione',
            title: 'Il Processo di Cura del Dente',
            content: `
                <p>L'intervento di otturazione viene eseguito con precisione millimetrica per garantire durata e comfort:</p>
                <ol>
                    <li><strong>Detersione della Carie:</strong> Rimozione selettiva del solo tessuto infetto tramite strumenti di precisione o laser.</li>
                    <li><strong>Isolamento:</strong> Uso della diga di gomma per mantenere il campo operatorio asciutto e privo di batteri salivari, condizione essenziale per una perfetta adesione.</li>
                    <li><strong>Stratificazione:</strong> Il materiale viene applicato a piccoli incrementi e indurito con lampade a luce LED polimerizzante.</li>
                    <li><strong>Rifinitura Occlusale:</strong> Modellazione finale e lucidatura per assicurare che il morso sia confortevole e naturale.</li>
                </ol>
            `
        },
        {
            id: 'manutenzione-durata',
            title: 'Longevità e Prevenzione Secondaria',
            content: `
                <p>Un'otturazione ben eseguita può durare molti anni, ma richiede una corretta gestione:</p>
                <ul>
                    <li><strong>Igiene Domiciliare:</strong> L'uso costante di spazzolino e filo interdentale impedisce la formazione di "carie secondarie" lungo i margini del restauro.</li>
                    <li><strong>Controlli Periodici:</strong> Le visite semestrali permettono al dentista di monitorare l'integrità dei margini e la stabilità del materiale nel tempo.</li>
                    <li><strong>Dieta:</strong> Ridurre l'apporto di zuccheri semplici aiuta a stabilizzare il pH del cavo orale, proteggendo sia il restauro che i denti sani.</li>
                </ul>
            `
        },
        {
            id: 'quando-non-basta',
            title: 'Quando l\'Otturazione non è Sufficiente',
            content: `
                <p>Se la carie ha raggiunto la camera pulpare o ha distrutto oltre il 50% della corona clinica, l'otturazione semplice potrebbe non essere sufficiente. In questi casi, il nostro team valuterà alternative come la <strong>terapia canalare</strong> o la protezione del dente con una <strong>capsula (corona)</strong> in zirconia o ceramica per evitare fratture future.</p>
            `
        }
    ]
};

export default dentalFillingContent;