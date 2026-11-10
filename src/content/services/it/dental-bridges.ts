import type { ServiceContent } from '@/lib/services';

const dentalBridgesContent: ServiceContent = {
    description: [
        "I ponti dentali rappresentano una soluzione protesica fissa collaudata per sostituire uno o più denti mancanti. A differenza delle protesi mobili, il ponte viene cementato stabilmente ai denti naturali adiacenti (pilastri) o su impianti, offrendo una sensazione di naturalezza e una stabilità funzionale paragonabile ai denti originali.",
        "Ripristinare i denti mancanti con un ponte non è solo una scelta estetica: è fondamentale per prevenire lo spostamento dei denti sani, correggere difficoltà masticatorie e fonetiche, e mantenere l'armonia complessiva delle arcate dentali, evitando il deterioramento dell'osso e dei tessuti gengivali."
    ],
    benefits: [
        "Ripristino immediato della corretta funzione masticatoria e della fonazione.",
        "Prevenzione della migrazione e dell'inclinazione dei denti sani adiacenti.",
        "Risultato estetico naturale grazie all'uso di materiali traslucidi come lo zirconio.",
        "Soluzione fissa e stabile che non richiede di essere rimossa per la pulizia.",
        "Distribuzione corretta delle forze masticatorie sull'intera arcata."
    ],
    quickFacts: {
        procedureTime: '2-3 sedute',
        anesthesia: 'locale (per la preparazione dei pilastri)',
        recoveryTime: 'immediato',
        results: 'stabili e duraturi (10-15+ anni)',
    },
    sections: [
        {
            id: 'materiali-ponti-dentali',
            title: 'Materiali d\'Avanguardia: Estetica e Resistenza',
            content: `
                <p>La scelta del materiale del ponte dipende dalla posizione dei denti e dalle necessità di carico masticatorio:</p>
                <ul>
                    <li><strong>Zirconio-Ceramica:</strong> La scelta d'elezione per la combinazione di estrema robustezza e resa estetica superiore. Lo zirconio elimina il rischio di bordi scuri metallici nel tempo.</li>
                    <li><strong>Disilicato di Litio (E-Max):</strong> Ideale per ponti corti nei settori anteriori (incisivi e premolari) per la sua straordinaria capacità di imitare la traslucenza dello smalto naturale.</li>
                    <li><strong>Metallo-Ceramica:</strong> Una soluzione tradizionale solida, indicata soprattutto nei settori posteriori dove la resistenza strutturale è la priorità principale.</li>
                </ul>
            `
        },
        {
            id: 'processo-applicazione-ponte',
            title: 'Il Percorso di Riabilitazione',
            content: `
                <p>La creazione di un ponte dentale su misura segue un protocollo clinico rigoroso:</p>
                <ol>
                    <li><strong>Preparazione dei Pilastri:</strong> I denti adiacenti allo spazio vuoto vengono leggermente limati per fungere da supporto solido per le corone del ponte.</li>
                    <li><strong>Impronta di Precisione:</strong> Rilevamento digitale o tradizionale dell'arcata per permettere al laboratorio di costruire un ponte che si integri millimetricamente nell'occlusione.</li>
                    <li><strong>Ponte Provvisorio:</strong> Applicazione di una struttura temporanea per proteggere i denti e mantenere la funzione estetica durante la fase di laboratorio.</li>
                    <li><strong>Cementazione Definitiva:</strong> Il ponte finale viene provato, regolato e infine fissato permanentemente con adesivi medicali ad alta tenuta.</li>
                </ol>
            `
        },
        {
            id: 'manutenzione-ponte-fisso',
            title: 'Cura e Longevità del Ponte',
            content: `
                <p>Un ponte dentale richiede una manutenzione specifica per proteggere i denti pilastro che lo sostengono:</p>
                <ul>
                    <li><strong>Igiene Specifica:</strong> È essenziale l'uso del filo interdentale di tipo "Superfloss" o di scovolini per pulire lo spazio sotto l'elemento intermedio (il dente sospeso), dove la placca tende ad accumularsi.</li>
                    <li><strong>Controlli Periodici:</strong> Visite ogni 6 mesi sono necessarie per monitorare la salute delle gengive e l'integrità dei margini di cementazione.</li>
                    <li><strong>Protezione:</strong> Evitare di masticare oggetti o cibi estremamente duri che potrebbero scheggiare il rivestimento in ceramica.</li>
                </ul>
            `
        },
        {
            id: 'ponte-vs-impianto',
            title: 'Considerazioni sulla Scelta Protesica',
            content: `
                <p>Il ponte dentale è la soluzione ideale quando i denti pilastro necessitano comunque di essere incapsulati o quando non è possibile procedere con l'implantologia per mancanza di osso o controindicazioni cliniche.</p>
                <p>La nostra equipe valuterà attentamente la stabilità dei tuoi denti di supporto e la salute parodontale per garantirti una riabilitazione che sia non solo bella, ma capace di durare decenni.</p>
            `
        }
    ]
};

export default dentalBridgesContent;