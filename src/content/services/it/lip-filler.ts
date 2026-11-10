import type { ServiceContent } from '@/lib/services';

const lipFillerContent: ServiceContent = {
    description: [
        "Il rimodellamento delle labbra con filler di acido ialuronico è uno dei trattamenti di medicina estetica più richiesti per esaltare la bellezza del sorriso in modo armonioso. Grazie all'utilizzo di gel a base di acido ialuronico di ultima generazione, è possibile aumentare il volume, definire il contorno (arco di Cupido) e correggere le asimmetrie, mantenendo sempre un aspetto naturale e proporzionato al viso.",
        "Oltre all'effetto volumizzante, il filler svolge un'importante azione di idratazione profonda dei tessuti, distendendo le sottili rughe periorali (il cosiddetto 'codice a barre') e restituendo turgore a labbra che hanno perso definizione con il tempo. Il trattamento è altamente personalizzabile: dalla semplice idratazione 'glossy' alla ridefinizione strutturale completa."
    ],
    benefits: [
        "Aumento del volume personalizzato, da naturale a più intenso.",
        "Definizione netta del contorno labbra e dell'arco di Cupido.",
        "Correzione immediata di asimmetrie e proporzioni tra labbro superiore e inferiore.",
        "Idratazione profonda e riduzione delle rughe del contorno bocca.",
        "Risultati istantanei con tempi di recupero minimi."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minuti',
        anesthesia: 'crema anestetica o lidocaina inclusa nel filler',
        recoveryTime: 'immediato (gonfiore lieve per 24-48h)',
        results: 'immediati, durata 6-12 mesi',
    },
    sections: [
        {
            id: 'approccio-naturale',
            title: 'Filosofia della Naturalezza',
            content: `
                <p>Il segreto di un filler labbra ben eseguito risiede nel rispetto delle proporzioni auree del viso. Il nostro approccio evita eccessi artificiali:</p>
                <ul>
                    <li><strong>Equilibrio:</strong> Valutiamo il rapporto tra labbro superiore e inferiore per un profilo bilanciato.</li>
                    <li><strong>Integrazione:</strong> Utilizziamo filler dinamici che si muovono con i muscoli della bocca, evitando l'effetto statico.</li>
                    <li><strong>Personalizzazione:</strong> Ogni trattamento è studiato sulla fisionomia specifica del paziente, per valorizzare l'unicità del sorriso.</li>
                </ul>
            `
        },
        {
            id: 'procedura-comfort',
            title: 'La Seduta di Trattamento',
            content: `
                <p>La procedura è rapida e progettata per il massimo comfort del paziente:</p>
                <ol>
                    <li><strong>Disinfezione e Anestesia:</strong> Applicazione di una crema specifica per rendere l'area quasi del tutto insensibile.</li>
                    <li><strong>Micro-iniezioni:</strong> L'acido ialuronico viene posizionato con aghi sottilissimi o micro-cannule in punti strategici.</li>
                    <li><strong>Modellamento:</strong> Un leggero massaggio finale permette al medico di distribuire il prodotto uniformemente, eliminando eventuali irregolarità.</li>
                </ol>
            `
        },
        {
            id: 'post-trattamento-consigli',
            title: 'Guida al Post-Filler',
            content: `
                <p>Nelle ore successive al trattamento è normale riscontrare un leggero gonfiore, che svanisce spontaneamente:</p>
                <ul>
                    <li><strong>Cure immediate:</strong> Evitare l'esposizione a fonti di calore (saune, sole) e attività fisica intensa per 24-48 ore.</li>
                    <li><strong>Herpes:</strong> In caso di predisposizione all'herpes labiale, verrà consigliata una profilassi specifica nei giorni precedenti.</li>
                    <li><strong>Follow-up:</strong> Una visita di controllo dopo 14 giorni assicura che il filler si sia assestato perfettamente.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-materiali',
            title: 'Qualità e Sicurezza',
            content: `
                <p>Utilizziamo esclusivamente acidi ialuronici certificati e riassorbibili, garantendo la massima biocompatibilità. Essendo una sostanza naturalmente presente nel corpo umano, il rischio di reazioni allergiche è estremamente basso.</p>
                <p>La reversibilità del trattamento e la qualità dei materiali impiegati permettono di modulare i risultati nel tempo, accompagnando i cambiamenti del viso in modo sempre elegante e sicuro.</p>
            `
        }
    ]
};

export default lipFillerContent;