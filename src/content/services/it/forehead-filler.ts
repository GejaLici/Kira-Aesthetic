import type { ServiceContent } from '@/lib/services';

const wrinkleFillerContent: ServiceContent = {
    description: [
        "I filler a base di acido ialuronico rappresentano l'eccellenza della medicina estetica non invasiva per contrastare i segni dell'invecchiamento. Grazie alla loro capacità di trattenere l'acqua e ripristinare i volumi persi, questi trattamenti permettono di riempire solchi e rughe profonde, restituendo al viso un aspetto immediatamente più levigato, fresco e riposato.",
        "L'acido ialuronico utilizzato è un polimero naturale altamente biocompatibile e riassorbibile, che si integra armoniosamente nei tessuti senza stravolgere i lineamenti. L'obiettivo dei nostri specialisti è un ringiovanimento naturale e globale, che non si limita a 'cancellare' un segno, ma a rigenerare i volumi e l'idratazione profonda del volto."
    ],
    benefits: [
        "Riempimento immediato di rughe naso-labiali, della marionetta e periorali.",
        "Ripristino dei volumi naturali in aree svuotate come zigomi e mento.",
        "Idratazione profonda dei tessuti e miglioramento della texture cutanea.",
        "Risultati visibili istantaneamente con un effetto naturale e armonioso.",
        "Procedura rapida, sicura e con tempi di recupero pressoché nulli."
    ],
    quickFacts: {
        procedureTime: '20 - 40 minuti',
        anesthesia: 'topica o inclusa nel filler (lidocaina)',
        recoveryTime: 'immediato (possibile lieve gonfiore per 24-48h)',
        results: 'immediati, durata dai 6 ai 18 mesi',
    },
    sections: [
        {
            id: 'aree-trattamento',
            title: 'Dove agiscono i Filler?',
            content: `
                <p>La versatilità dell'acido ialuronico permette di intervenire su diversi distretti del viso con precisione chirurgica:</p>
                <ul>
                    <li><strong>Solchi Naso-genieni:</strong> Le linee che partono dalle ali del naso verso gli angoli della bocca.</li>
                    <li><strong>Linee della Marionetta:</strong> I solchi che conferiscono alla bocca un aspetto triste o stanco.</li>
                    <li><strong>Rughe Periorali:</strong> Il cosiddetto 'codice a barre' sopra il labbro superiore.</li>
                    <li><strong>Solco Lacrimale:</strong> Per correggere le occhiaie scavate e illuminare lo sguardo.</li>
                    <li><strong>Ridefinizione dei Contorni:</strong> Valorizzazione di zigomi, mandibola e mento per un ovale più scolpito.</li>
                </ul>
            `
        },
        {
            id: 'personalizzazione-filler',
            title: 'Un Filler per ogni esigenza',
            content: `
                <p>Non tutti i filler sono uguali. La scelta del prodotto dipende dalla zona e dal tipo di ruga da trattare:</p>
                <ul>
                    <li><strong>Bassa Densità:</strong> Per rughe superficiali e sottili, garantendo massima fluidità e naturalezza.</li>
                    <li><strong>Media Densità:</strong> Per solchi moderati, ideale per le rughe intorno alla bocca.</li>
                    <li><strong>Alta Densità (Volumizzanti):</strong> Per modellare le strutture del viso e riempire solchi molto profondi, garantendo sostegno e durata.</li>
                </ul>
            `
        },
        {
            id: 'procedura-sicurezza',
            title: 'La Procedura e la Sicurezza',
            content: `
                <p>Il trattamento viene eseguito in ambulatorio attraverso micro-iniezioni con aghi sottilissimi o micro-cannule flessibili:</p>
                <ol>
                    <li><strong>Analisi Estetica:</strong> Studio delle proporzioni e delle zone d'ombra del volto.</li>
                    <li><strong>Iniezione:</strong> Il medico posiziona il prodotto nel derma medio o profondo a seconda della necessità.</li>
                    <li><strong>Modellamento:</strong> Un leggero massaggio permette di distribuire il filler in modo uniforme per evitare irregolarità.</li>
                    <li><strong>Sicurezza:</strong> Utilizziamo solo prodotti certificati FDA e CE. In caso di necessità, il trattamento è reversibile grazie all'enzima ialuronidasi.</li>
                </ol>
            `
        },
        {
            id: 'post-trattamento',
            title: 'Cosa aspettarsi dopo la seduta',
            content: `
                <p>Dopo il trattamento è possibile riprendere subito la vita sociale. Eventuali piccoli lividi o un lieve gonfiore sono normali e scompaiono in pochi giorni. Si raccomanda di evitare l'esposizione a calore eccessivo (saune, sole diretto) e l'attività fisica intensa per le prime 48 ore. L'uso di una protezione solare SPF 50+ è sempre consigliato per preservare la qualità della pelle e la durata del trattamento.</p>
            `
        }
    ]
};

export default wrinkleFillerContent;