import type { ServiceContent } from '@/lib/services';

const blefaroplasticaContent: ServiceContent = {
    description: [],
    benefits: [],
    quickFacts: {
        procedureTime: '1 - 2 ore',
        anesthesia: 'anestesia locale con sedazione o anestesia generale',
        recoveryTime: '7 - 10 giorni per attività sociali',
        results: 'risultati visibili con la riduzione del gonfiore; definitivi dopo 1 - 2 mesi'
    },
    sections: [
        {
            id: 'che-cos-e-blefaroplastica',
            title: 'Che cos’è la Blefaroplastica?',
            content: `
                <p><strong>La blefaroplastica</strong>, nota anche come chirurgia delle palpebre, è un intervento chirurgico preciso che rigenera l’area perioculare. L’operazione corregge palpebre superiori cadenti, borse sotto gli occhi, pelle in eccesso e muscoli indeboliti, restituendo un aspetto più giovane, riposato e sveglio senza alterare l’espressione naturale del volto.</p>
                <p>La pelle intorno agli occhi è tra le più sottili e delicate del corpo, mostrando per prima i segni dell’invecchiamento. Il nostro approccio garantisce risultati naturali, con incisioni nascoste nelle pieghe naturali o all’interno della palpebra inferiore, ripristinando i contorni vivaci degli occhi.</p>
            `
        },
        {
            id: 'palpebre-superiori-inferiori',
            title: 'Blefaroplastica Superiore e Inferiore',
            content: `
                <p>La blefaroplastica può trattare le palpebre superiori, inferiori o entrambe contemporaneamente, in base alle esigenze individuali.</p>
                <ul>
                    <li><strong>Blefaroplastica Superiore:</strong> Rimuove la pelle e il grasso in eccesso sulle palpebre superiori per correggere l’“accumulo” che può compromettere la visione o dare un aspetto stanco. L’incisione è nascosta nella piega naturale della palpebra.</li>
                    <li><strong>Blefaroplastica Inferiore:</strong> Corregge borse sotto gli occhi, gonfiore e pelle lassa. L’approccio transcongiuntivale permette di fare l’incisione all’interno della palpebra, senza cicatrici esterne.</li>
                    <li><strong>Trattamento Combinato:</strong> L’intervento su entrambe le palpebre offre un ringiovanimento completo e armonioso dell’area perioculare.</li>
                </ul>
                <p><strong>Benefici:</strong> Eliminazione dell’eccesso cutaneo, riduzione di borse e gonfiore, contorni più levigati, risultati duraturi e cicatrici praticamente invisibili.</p>
            `
        },
        {
            id: 'approccio-precisione',
            title: 'Il Nostro Approccio Chirurgico di Precisione',
            content: `
                <p>La blefaroplastica è un intervento che si misura in millimetri: precisione e conoscenza anatomica sono essenziali. I nostri chirurghi utilizzano tecniche avanzate per risultati sicuri e naturali.</p>
                <ul>
                    <li><strong>Competenza Anatomica:</strong> Conoscenza approfondita dei muscoli e dei compartimenti di grasso delle palpebre per evitare un aspetto eccessivamente corretto o scavato.</li>
                    <li><strong>Sutura Ultra-Fine:</strong> I punti sono rimossi entro una settimana, riducendo al minimo segni visibili.</li>
                    <li><strong>Riposizionamento del Grasso:</strong> Il grasso viene spesso riposizionato invece di essere rimosso completamente, per rendere più armoniosa la transizione tra palpebra inferiore e guancia.</li>
                </ul>
                <p><strong>Benefici:</strong> Conservazione dei contorni naturali degli occhi, transizioni più uniformi, cicatrici minime e prevenzione dell’aspetto scavato.</p>
            `
        },
        {
            id: 'recupero',
            title: 'Recupero e Tempistiche di Guarigione',
            content: `
                <p>Il recupero dalla blefaroplastica è generalmente rapido se si seguono le indicazioni post-operatorie.</p>
                <ol>
                    <li><strong>Prime 48 Ore:</strong> Applicare impacchi freddi e mantenere la testa sollevata per ridurre gonfiore e lividi.</li>
                    <li><strong>Giorni 5–7:</strong> Rimozione dei punti; il gonfiore tende a diminuire e può essere coperto con un trucco leggero.</li>
                    <li><strong>Settimana 2:</strong> La maggior parte dei pazienti torna a lavoro e attività sociali; evitare sforzi intensi per un’altra o due settimane.</li>
                    <li><strong>Risultato Finale:</strong> Pur mostrando un aspetto riposato subito, i contorni definitivi si stabilizzano nelle 4–6 settimane successive.</li>
                </ol>
                <p><strong>Benefici:</strong> Ritorno rapido alla vita sociale, riduzione graduale del gonfiore, definizione migliore delle palpebre e ringiovanimento duraturo.</p>
            `
        },
        {
            id: 'assistenza-internazionale',
            title: 'Assistenza Completa per Pazienti Internazionali',
            content: `
                <p>Offriamo un’esperienza senza stress per i pazienti che viaggiano dall’estero per la blefaroplastica.</p>
                <ul>
                    <li><strong>Supporto Logistico:</strong> Aiuto con alloggio e trasporti premium per un soggiorno confortevole.</li>
                    <li><strong>Follow-up Flessibile:</strong> Controlli post-operatori disponibili in <strong>Albania</strong>, <strong>Kosovo</strong> o <strong>Italia</strong>.</li>
                    <li><strong>Monitoraggio a Distanza:</strong> Accesso digitale diretto al nostro team medico per supporto durante le prime fasi della guarigione.</li>
                </ul>
                <p><strong>Benefici:</strong> Massima tranquillità, continuità nella cura e fiducia nel recupero ovunque ti trovi.</p>
            `
        }
    ]
};

export default blefaroplasticaContent;
