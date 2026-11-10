import type { ServiceContent } from '@/lib/services';

const rinoplasticaContent: ServiceContent = {
    description: [
        "La rinoplastica è un intervento chirurgico estetico e funzionale che permette di migliorare l’aspetto del naso, rendendolo più armonioso rispetto ai lineamenti del viso. Che si tratti di rifarsi il naso per correggere una gobba, una punta grossa o un naso storto, l’obiettivo è sempre ottenere un risultato naturale. Oltre all’estetica, la rinoplastica moderna consente di risolvere problemi respiratori legati al setto nasale deviato.",
        "Nel nostro centro utilizziamo prevalentemente la rinoplastica chiusa, una tecnica che prevede incisioni interne senza cicatrici visibili. Offriamo inoltre la rinoplastica ultrasonica (Piezo), una tecnologia avanzata che consente di modellare le ossa del naso con estrema precisione, riducendo traumi, gonfiore e tempi di recupero."
    ],
    benefits: [
        "Migliora l’armonia del viso e le proporzioni del naso.",
        "Corregge problemi respiratori dovuti a setto nasale deviato (rinosettoplastica).",
        "Risultati naturali e duraturi senza cicatrici visibili.",
        "Aumenta l’autostima e la sicurezza personale.",
        "Recupero più rapido grazie alla rinoplastica ultrasonica."
    ],
    quickFacts: {
        procedureTime: '1-2 Ore',
        anesthesia: 'Generale (TIVA)',
        recoveryTime: '1-2 Settimane',
        results: 'Definitivi',
    },
    sections: [
        {
            id: 'cos-e-la-rinoplastica',
            title: 'Che Cos’è la Rinoplastica',
            content: `
                <p><strong>La rinoplastica</strong> è un intervento di chirurgia estetica e funzionale del naso che consente di modificarne la struttura ossea e cartilaginea per migliorare sia l’aspetto estetico sia la respirazione. È comunemente conosciuta come <strong>rifacimento del naso</strong> o <strong>intervento al naso</strong>.</p>
                <p>Molti pazienti si chiedono <strong>cos’è la rinoplastica</strong> e se sia l’intervento giusto per loro: oggi questa procedura è altamente personalizzata e studiata sulle caratteristiche del volto, evitando risultati standardizzati o innaturali. Un naso rifatto correttamente deve integrarsi in modo armonioso con il viso.</p>
                <p>La rinoplastica moderna non ha come obiettivo quello di “rimpicciolire” il naso, ma di migliorare proporzioni, simmetria e funzione respiratoria, rispettando l’identità del paziente.</p>
            `
        },
        {
            id: 'quando-rifarsi-il-naso',
            title: 'Quando Rifarsi il Naso: Indicazioni dell’Intervento',
            content: `
                <p>L’operazione al naso è indicata in presenza di difetti estetici o funzionali che causano disagio estetico o difficoltà respiratorie.</p>
                <ul>
                    <li><strong>Naso a patata</strong> o punta del naso grossa</li>
                    <li>Gobba nasale evidente</li>
                    <li>Naso storto frontalmente o lateralmente</li>
                    <li>Esiti di traumi o fratture nasali</li>
                    <li>Problemi respiratori da setto nasale deviato</li>
                    <li>Naso rifatto male in precedenti interventi</li>
                </ul>
                <p>Chi teme che l’<strong>intervento al naso faccia male</strong> deve sapere che, grazie alle moderne tecniche anestesiologiche, il dolore è minimo e facilmente controllabile.</p>
            `
        },
        {
            id: 'rinoplastica-chiusa',
            title: 'Rinoplastica Chiusa: Tecnica Senza Cicatrici Visibili',
            content: `
                <p>La <strong>rinoplastica chiusa</strong> è una tecnica chirurgica che prevede incisioni esclusivamente all’interno delle narici, senza tagli esterni sulla columella del naso.</p>
                <p>Questa metodica consente di <strong>operare il naso</strong> senza lasciare cicatrici visibili e con numerosi vantaggi:</p>
                <ul>
                    <li>Riduzione di gonfiore ed ecchimosi</li>
                    <li>Recupero post-operatorio più rapido</li>
                    <li>Minor trauma ai tessuti</li>
                    <li>Risultati più naturali e stabili nel tempo</li>
                </ul>
                <p>Il <strong>costo della rinoplastica</strong> con tecnica chiusa dipende dalla complessità anatomica e dagli obiettivi del paziente.</p>
            `
        },
        {
            id: 'rinoplastica-ultrasonica',
            title: 'Rinoplastica Ultrasonica (Piezo): La Nuova Frontiera',
            content: `
                <p>La <strong>rinoplastica ultrasonica</strong>, detta anche rinoplastica Piezo, rappresenta una vera rivoluzione nella chirurgia estetica del naso. Utilizza ultrasuoni ad alta frequenza per modellare le ossa con estrema precisione.</p>
                <p>A differenza delle tecniche tradizionali, la rinoplastica con ultrasuoni:</p>
                <ul>
                    <li>Agisce selettivamente sull’osso</li>
                    <li>Preserva vasi sanguigni e tessuti molli</li>
                    <li>Riduce sanguinamento intraoperatorio</li>
                    <li>Diminuisce gonfiore e lividi post-operatori</li>
                </ul>
                <p>Il <strong>costo della rinoplastica ultrasonica</strong> è legato all’utilizzo di tecnologie avanzate e all’elevata precisione del risultato finale.</p>
            `
        },
        {
            id: 'rinosettoplastica',
            title: 'Rinosettoplastica: Estetica e Respirazione',
            content: `
                <p>La <strong>rinosettoplastica</strong> è un intervento combinato che corregge sia la forma del naso sia il <strong>setto nasale deviato</strong>. È indicata per chi soffre di difficoltà respiratorie croniche e desidera allo stesso tempo migliorare l’estetica del naso.</p>
                <p>Il <strong>costo della rinosettoplastica</strong> varia in base alla complessità dell’intervento e può essere valutato durante la consulenza specialistica.</p>
            `
        },
        {
            id: 'percorso-rinoplastica',
            title: 'Il Percorso della Rinoplastica: Prima, Durante e Dopo',
            content: `
                <h3>Prima dell’intervento</h3>
                <p>Prima di rifarsi il naso vengono eseguiti esami clinici completi per garantire la massima sicurezza:</p>
                <ul>
                    <li>Esami del sangue e delle urine</li>
                    <li>Visita cardiologica ed ECG</li>
                    <li>Valutazione anestesiologica</li>
                    <li>Simulazione 3D del risultato</li>
                </ul>

                <h3>Anestesia</h3>
                <p>L’intervento viene eseguito in <strong>anestesia generale endovenosa</strong>, che consente un miglior controllo del sanguinamento e un decorso post-operatorio più confortevole.</p>

                <h3>Dopo l’intervento</h3>
                <ul>
                    <li>Tutore nasale per 7–10 giorni</li>
                    <li>Tamponi nasali di nuova generazione</li>
                    <li>Gonfiore progressivamente decrescente</li>
                </ul>
            `
        },
        {
            id: 'post-operatorio',
            title: 'Post-Operatorio e Assestamento del Naso',
            content: `
                <p>Dopo la rinoplastica è normale osservare gonfiore, in particolare sulla punta del naso. L’<strong>assestamento del naso post rinoplastica</strong> è graduale e può durare diversi mesi.</p>
                <ul>
                    <li>Rientro alla vita sociale in 10–14 giorni</li>
                    <li>Attività sportiva dopo circa 1 mese</li>
                    <li>Risultato definitivo visibile tra 6 e 12 mesi</li>
                </ul>
            `
        },
        {
            id: 'perche-sceglierci',
            title: 'Perché Scegliere il Nostro Centro',
            content: `
                <ul>
                    <li><strong>Chirurghi italiani altamente specializzati</strong> in rinoplastica</li>
                    <li><strong>Tecnologia Piezo</strong> per rinoplastica ultrasonica</li>
                    <li><strong>Assistenza completa in Albania</strong> con alloggio e trasporti</li>
                    <li><strong>Follow-up post-operatorio in Italia</strong></li>
                </ul>
                <p>La <strong>rinoplastica in Albania</strong> rappresenta una soluzione sicura e conveniente rispetto ai costi della rinoplastica in Italia, Francia o Belgio.</p>
            `
        }
    ]
};

export default rinoplasticaContent;
