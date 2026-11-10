import type { ServiceContent } from '@/lib/services';

const microdermabrasionContent: ServiceContent = {
    description: [
        "La microdermoabrasione è un trattamento di medicina estetica avanzato che offre un'esfoliazione meccanica controllata e profonda della pelle. Attraverso la rimozione delicata dello strato corneo (le cellule morte superficiali), questo trattamento accelera il rinnovamento cellulare, stimola la produzione di nuovo collagene e restituisce immediatamente vitalità e freschezza all'incarnato.",
        "Considerato un 'peeling meccanico' non invasivo, è la soluzione ideale per chi desidera affinare la grana della pelle, ridurre i pori dilatati e attenuare le piccole imperfezioni come rughe sottili o macchie superficiali. Il risultato è una pelle visibilmente più levigata, morbida al tatto e con una luminosità naturale rinnovata."
    ],
    benefits: [
        "Pelle immediatamente più luminosa e levigata fin dalla prima seduta.",
        "Riduzione visibile dei pori dilatati e delle irregolarità della texture.",
        "Attenuazione di rughe sottili, linee d'espressione e cicatrici da acne lievi.",
        "Miglioramento dell'assorbimento dei prodotti cosmetici e dei trattamenti successivi.",
        "Trattamento rapido, indolore e senza tempi di recupero sociali."
    ],
    quickFacts: {
        procedureTime: '20 - 30 minuti',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (lieve rossore per qualche ora)',
        results: 'visibili da subito, ottimali con un ciclo di 3-6 sedute',
    },
    sections: [
        {
            id: 'tecniche-esfoliazione',
            title: 'Tecnologie di Rinnovamento Cutaneo',
            content: `
                <p>Presso la nostra clinica utilizziamo metodiche all'avanguardia per garantire precisione e comfort:</p>
                <ul>
                    <li><strong>Punta Diamantata:</strong> Un manipolo rivestito di micro-diamanti naturali esfolia la pelle con estrema accuratezza, ideale per le zone delicate e per chi desidera un trattamento senza residui.</li>
                    <li><strong>Micro-cristalli:</strong> Un flusso di polvere di ossido di alluminio leviga la superficie cutanea, rimuovendo le impurità in modo uniforme.</li>
                    <li><strong>Aspirazione Vacuum:</strong> Entrambe le tecniche integrano un sistema di aspirazione che stimola la microcircolazione e rimuove istantaneamente i detriti cellulari.</li>
                </ul>
            `
        },
        {
            id: 'obiettivi-pelle',
            title: 'Per chi è indicato il trattamento?',
            content: `
                <p>La microdermoabrasione è versatile e adatta a quasi tutti i fototipi di pelle, risultando efficace per:</p>
                <ol>
                    <li><strong>Pelle Opaca:</strong> Per eliminare il colorito grigio tipico di fumatori o di chi vive in ambienti inquinati.</li>
                    <li><strong>Invecchiamento Precoce:</strong> Per contrastare i primi segni del tempo e le macchie solari superficiali.</li>
                    <li><strong>Pelle Impura:</strong> Per liberare i pori ostruiti e uniformare la superficie dopo episodi acneici lievi.</li>
                    <li><strong>Pre-trattamento:</strong> Per preparare la pelle a ricevere al meglio altri trattamenti come biorivitalizzazione o peeling chimici.</li>
                </ol>
            `
        },
        {
            id: 'post-trattamento-cura',
            title: 'Consigli e Mantenimento',
            content: `
                <p>Il recupero è rapidissimo, ma la pelle 'nuova' necessita di attenzioni specifiche nei giorni successivi:</p>
                <ul>
                    <li><strong>Protezione Solare:</strong> È fondamentale applicare uno schermo totale (SPF 50+) poiché la pelle esfoliata è più sensibile ai raggi UV.</li>
                    <li><strong>Idratazione:</strong> L'uso di sieri e creme idratanti e lenitive potenzia l'effetto setoso del trattamento.</li>
                    <li><strong>Prodotti da evitare:</strong> Sospendere l'uso di acidi esfolianti o retinoidi per almeno 48-72 ore post-seduta.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-professionalita',
            title: 'Un Trattamento su Misura',
            content: `
                <p>Sebbene sia una procedura sicura, la profondità dell'esfoliazione deve essere calibrata da mani esperte. Il nostro team valuta attentamente lo spessore e la sensibilità della tua cute per evitare irritazioni inutili e garantire il massimo del risultato estetico.</p>
                <p>La microdermoabrasione rappresenta il 'gold standard' per la pulizia profonda del viso moderna, unendo l'efficacia clinica al piacere di una pelle istantaneamente rigenerata.</p>
            `
        }
    ]
};

export default microdermabrasionContent;