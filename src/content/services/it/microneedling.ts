import type { ServiceContent } from '@/lib/services';

const microneedlingContent: ServiceContent = {
    description: [
        "Il Microneedling è una tecnica di bioristrutturazione meccanica all'avanguardia che stimola la capacità naturale della pelle di autoguarirsi. Attraverso l'uso di dispositivi di precisione come la Dermapen, dotata di micro-aghi sottilissimi, vengono create migliaia di micro-perforazioni controllate nel derma, innescando una produzione massiccia di nuovo collagene ed elastina.",
        "Questo trattamento non solo rigenera la struttura cutanea dall'interno, ma crea canali diretti per veicolare in profondità sieri sterili a base di acido ialuronico, vitamine e fattori di crescita. È la soluzione d'elezione per chi desidera trattare cicatrici post-acneiche, rughe sottili, pori dilatati e smagliature, ottenendo una pelle visibilmente più compatta, levigata e giovane."
    ],
    benefits: [
        "Stimolazione naturale e potente di collagene ed elastina.",
        "Miglioramento significativo della texture cutanea e riduzione dei pori.",
        "Trattamento efficace per cicatrici da acne, smagliature e iperpigmentazioni.",
        "Aumento drastico dell'assorbimento di principi attivi e vitamine.",
        "Risultati duraturi con un miglioramento progressivo della qualità della pelle."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minuti',
        anesthesia: 'crema anestetica topica',
        recoveryTime: '24 - 48 ore (rossore simile a eritema solare)',
        results: 'visibili dopo 2-4 settimane, ottimali a 3-6 mesi',
    },
    sections: [
        {
            id: 'tecnologia-dermapen',
            title: 'Induzione del Collagene (CIT)',
            content: `
                <p>La tecnica del Microneedling, nota anche come Terapia di Induzione del Collagene, si basa su principi fisiologici precisi:</p>
                <ul>
                    <li><strong>Rigenerazione Cellulare:</strong> Le micro-lesioni stimolano i fibroblasti a produrre nuove fibre di sostegno.</li>
                    <li><strong>Veicolazione Transdermica:</strong> I micro-canali permettono ai principi attivi di superare la barriera epidermica, aumentando l'efficacia dei sieri fino all'80% in più rispetto all'applicazione topica.</li>
                    <li><strong>Personalizzazione:</strong> La profondità degli aghi viene regolata in base all'area trattata e alla gravità dell'inestetismo.</li>
                </ul>
            `
        },
        {
            id: 'applicazioni-viso-corpo',
            title: 'Versatilità del Trattamento',
            content: `
                <p>Il Microneedling può essere eseguito con successo su diverse aree per molteplici obiettivi:</p>
                <ol>
                    <li><strong>Viso:</strong> Trattamento di rughe perioculari, codice a barre e cicatrici da acne.</li>
                    <li><strong>Corpo:</strong> Riduzione di smagliature su addome, glutei e interno cosce.</li>
                    <li><strong>Décolleté:</strong> Ringiovanimento della pelle sottile e danneggiata dal sole.</li>
                    <li><strong>Cuoio Capelluto:</strong> Stimolazione dei follicoli in caso di diradamento dei capelli.</li>
                </ol>
            `
        },
        {
            id: 'percorso-post-seduta',
            title: 'Cura e Protezione Post-Needling',
            content: `
                <p>La pelle dopo il trattamento entra in una fase di riparazione attiva che richiede attenzioni specifiche:</p>
                <ul>
                    <li><strong>Protezione Solare:</strong> È fondamentale l'uso di SPF 50+ per almeno 30 giorni per evitare iperpigmentazioni.</li>
                    <li><strong>Idratazione:</strong> Applicare esclusivamente sieri e creme sterili o lenitive consigliate dal medico per le prime 24 ore.</li>
                    <li><strong>Cosa evitare:</strong> Non applicare trucco per 24 ore e sospendere l'uso di esfolianti o retinoidi per una settimana.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-professionalita',
            title: 'Protocolli di Sicurezza Medica',
            content: `
                <p>Sebbene il Microneedling sia minimamente invasivo, la sicurezza del paziente è la nostra priorità. Utilizziamo esclusivamente testine sterili monouso e dispositivi certificati per prevenire qualsiasi rischio di infezione o danno tissutale.</p>
                <p>Il numero di sedute viene stabilito durante la consulenza iniziale, ma generalmente si consiglia un ciclo di 3 o 4 trattamenti per ottenere una trasformazione strutturale della pelle evidente e persistente.</p>
            `
        }
    ]
};

export default microneedlingContent;