import type { ServiceContent } from '@/lib/services';

const browLiftContent: ServiceContent = {
    description: [
        "Il lifting delle sopracciglia, noto anche come brow lift o lifting della fronte, è un intervento di chirurgia estetica progettato per sollevare le sopracciglia cadenti e levigare le rughe orizzontali della fronte. Questa procedura riapre lo sguardo, eliminando quell'espressione stanca, arrabbiata o preoccupata causata dal naturale cedimento dei tessuti.",
        "Attraverso tecniche moderne e mini-invasive, come il lifting endoscopico, è possibile riposizionare le sopracciglia in una posizione più giovanile e distendere le rughe d'espressione. Il risultato è un viso visibilmente più fresco, riposato e armonioso, con cicatrici minime e strategicamente nascoste tra i capelli."
    ],
    benefits: [
        "Sollevamento e riposizionamento naturale delle sopracciglia cadenti.",
        "Riduzione visibile delle rughe della fronte e delle linee d'espressione tra le sopracciglia.",
        "Sguardo più aperto, luminoso e ringiovanito.",
        "Correzione dell'appesantimento della palpebra superiore.",
        "Risultati duraturi con tecniche mini-invasive e cicatrici invisibili."
    ],
    quickFacts: {
        procedureTime: '1-2 ore',
        anesthesia: 'locale con sedazione o generale',
        recoveryTime: '7-14 giorni',
        results: 'naturali e stabili (3-6 mesi)',
    },
    sections: [
        {
            id: 'ringiovanire-fronte-sguardo',
            title: 'Lifting delle Sopracciglia: Ringiovanire la Fronte e Riaprire lo Sguardo',
            content: `
                <p>Con l'età, la gravità tende a far scendere la linea delle sopracciglia, appesantendo lo sguardo. Il <b>lifting delle sopracciglia</b> mira a ripristinare l'armonia del terzo superiore del viso, sollevando i tessuti e distendendo la pelle della fronte.</p>
                <p>Questo intervento non solo rialza le sopracciglia, ma corregge anche le <strong>rughe del leone</strong> (glabellari), conferendo un aspetto più sereno e riposato. Spesso viene combinato con una blefaroplastica per un ringiovanimento oculare completo.</p>
            `
        },
        {
            id: 'tecniche-lifting-sopracciglia',
            title: 'Il Nostro Approccio: Tecniche Mini-Invasive',
            content: `
                <p>Scegliamo la tecnica più adatta in base all'anatomia e alle necessità di correzione del paziente:</p>
                <ul>
                    <li><strong>Lifting Endoscopico:</strong> Utilizza piccole incisioni nascoste nei capelli e una telecamera per sollevare i tessuti con precisione millimetrica e minor trauma.</li>
                    <li><strong>Lifting Temporale:</strong> Si concentra sul sollevamento della parte esterna (coda) del sopracciglio, ideale per "aprire" l'angolo dell'occhio.</li>
                    <li><strong>Lifting Diretto:</strong> Riservato a casi specifici, agisce rimuovendo una piccola striscia di pelle sopra il sopracciglio, spesso indicato per pazienti con sopracciglia molto folte.</li>
                </ul>
            `
        },
        {
            id: 'percorso-brow-lift',
            title: 'Il Tuo Percorso di Chirurgia Estetica',
            content: `
                <h4>Preparazione e Procedura:</h4>
                <p>Prima dell'intervento è fondamentale una valutazione dell'elasticità cutanea e della dinamica dei muscoli mimici. L'intervento è solitamente <b>ambulatoriale</b>.</p>
                <ul>
                    <li><strong>Incisioni:</strong> Posizionate strategicamente all'interno dell'attaccatura dei capelli per risultare impercettibili.</li>
                    <li><strong>Fissaggio:</strong> I tessuti vengono ancorati nella nuova posizione elevata tramite suture sottili o dispositivi riassorbibili di ultima generazione.</li>
                </ul>
            `
        },
        {
            id: 'recupero-brow-lift',
            title: 'Sintomi di Recupero e Cura Post-operatoria',
            content: `
                <p>Il recupero post-operatorio è generalmente rapido, seguendo pochi semplici accorgimenti:</p>
                <table>
                  <thead>
                    <tr>
                      <th>Sintomo</th>
                      <th>Gestione e Tempi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Gonfiore/Ecchimosi</strong></td>
                      <td>Picco in 2-3 giorni, diminuisce in 2-4 settimane. Usare ghiaccio.</td>
                    </tr>
                    <tr>
                      <td><strong>Dolore/Tensione</strong></td>
                      <td>Lieve, gestibile con comuni antidolorifici prescritti.</td>
                    </tr>
                    <tr>
                      <td><strong>Attività Fisica</strong></td>
                      <td>Evitare sforzi intensi per almeno 3-4 settimane.</td>
                    </tr>
                    <tr>
                      <td><strong>Posizione Sonno</strong></td>
                      <td>Dormire con la testa elevata per i primi giorni.</td>
                    </tr>
                  </tbody>
                </table>
            `
        },
        {
            id: 'sicurezza-risultati-sopracciglia',
            title: 'Sicurezza e Considerazioni Importanti',
            content: `
                <p>Affidarsi a <b>chirurghi plastici esperti</b> è fondamentale per evitare l'effetto "sorpreso" o innaturale. Durante la consulenza discutiamo apertamente di:</p>
                <ul>
                    <li>Asimmetrie preesistenti che l'intervento mira a correggere.</li>
                    <li>Rischi minimi legati a cicatrizzazione o sensibilità cutanea.</li>
                    <li>Il tempo necessario affinché i tessuti si stabilizzino completamente (circa 3-6 mesi).</li>
                </ul>
                <p>La nostra priorità è un risultato che ringiovanisca lo sguardo preservando l'espressività autentica del tuo volto.</p>
            `
        }
    ]
};

export default browLiftContent;
