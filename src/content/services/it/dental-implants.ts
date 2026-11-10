import type { ServiceContent } from '@/lib/services';

const dentalImplantsContent: ServiceContent = {
    description: [
        "Gli impianti dentali rappresentano la soluzione più moderna e affidabile per sostituire denti mancanti, offrendo una stabilità e un'estetica del tutto paragonabili ai denti naturali. Grazie all'impiego di radici artificiali in titanio biocompatibile, l'implantologia permette di ripristinare la piena funzionalità masticatoria e la bellezza del sorriso in modo permanente.",
        "A differenza delle protesi mobili o dei ponti tradizionali, gli impianti si integrano direttamente nell'osso (osteointegrazione), prevenendo il riassorbimento osseo e salvaguardando l'integrità dei denti sani adiacenti. Che si tratti di un dente singolo o di un'intera arcata, l'impianto è l'investimento più duraturo per la salute orale."
    ],
    benefits: [
        "Stabilità assoluta: nessuna mobilità durante la masticazione o la fonazione.",
        "Preservazione ossea: stimolano l'osso mascellare prevenendone l'atrofia.",
        "Estetica naturale: corone personalizzate per colore e forma ai denti originali.",
        "Intervento conservativo: non è necessario limare i denti sani vicini.",
        "Longevità: progettati per durare decenni con una corretta manutenzione."
    ],
    quickFacts: {
        procedureTime: '30-60 min per impianto',
        anesthesia: 'locale o sedazione cosciente',
        recoveryTime: '2-5 giorni',
        results: 'permanenti (osteointegrazione)',
    },
    sections: [
        {
            id: 'cosa-sono-impianti',
            title: 'Come Funziona l\'Impianto Dentale',
            content: `
                <p>L'impianto è una piccola vite in <b>titanio medicale</b> che sostituisce la radice del dente perso. Il processo si basa sull'<b>osteointegrazione</b>: la capacità biologica del titanio di fondersi con l'osso umano.</p>
                <p>Una volta guarito, l'impianto diventa una base indistruttibile su cui viene fissato un pilastro (<i>abutment</i>) e, infine, la corona in ceramica o zirconio. Questo sistema a tre componenti garantisce una resistenza meccanica superiore a qualsiasi altra soluzione protesica.</p>
            `
        },
        {
            id: 'soluzioni-implantari',
            title: 'Soluzioni per Ogni Esigenza',
            content: `
                <ul>
                    <li><strong>Impianto Singolo:</strong> La scelta ideale per sostituire un dente senza danneggiare quelli vicini.</li>
                    <li><strong>All-on-4® / All-on-6®:</strong> Protocolli avanzati per riabilitare intere arcate senza denti utilizzando solo 4 o 6 impianti.</li>
                    <li><strong>Carico Immediato:</strong> Quando le condizioni ossee lo permettono, è possibile applicare i denti fissi provvisori entro 24-48 ore dall'intervento, riducendo al minimo il disagio estetico.</li>
                </ul>
            `
        },
        {
            id: 'percorso-implantologico',
            title: 'Il Tuo Percorso verso un Nuovo Sorriso',
            content: `
                <ol>
                    <li><strong>Diagnosi 3D:</strong> Utilizziamo la tecnologia CBCT (TAC digitale) per analizzare l'osso in tre dimensioni e pianificare virtualmente il posizionamento degli impianti.</li>
                    <li><strong>Fase Chirurgica:</strong> L'inserimento dell'impianto è un intervento mini-invasivo, eseguito in anestesia locale, spesso meno fastidioso di una semplice estrazione.</li>
                    <li><strong>Guarigione:</strong> Un periodo di 2-6 mesi necessario affinché l'osso si leghi stabilmente al titanio.</li>
                    <li><strong>Finalizzazione:</strong> Applicazione della protesi definitiva realizzata con scanner intraorali per una precisione millimetrica.</li>
                </ol>
            `
        },
        {
            id: 'manutenzione-impianti',
            title: 'Longevità e Cura Post-Operatoria',
            content: `
                <p>Gli impianti non possono cariarsi, ma richiedono cura per evitare la <i>perimplantite</i> (infiammazione dei tessuti intorno all'impianto):</p>
                <ul>
                    <li><strong>Igiene Domiciliare:</strong> Uso di spazzolini elettrici e scovolini specifici per la pulizia dei pilastri.</li>
                    <li><strong>Controlli Professionali:</strong> Visite semestrali per monitorare la stabilità dell'impianto e lo stato della protesi.</li>
                    <li><strong>Stile di Vita:</strong> Il fumo è il principale nemico degli impianti; ridurne l'uso aumenta drasticamente le probabilità di successo a lungo termine.</li>
                </ul>
            `
        }
    ]
};

export default dentalImplantsContent;