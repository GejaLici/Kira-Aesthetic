import type { ServiceContent } from '@/lib/services';

const pediatricDentistryContent: ServiceContent = {
    description: [
        "La pedodonzia, o odontoiatria pediatrica, si occupa della salute orale dei bambini dalla nascita fino all'adolescenza. Contrariamente a quanto si creda, i denti da latte (decidui) richiedono cure attente quanto i denti permanenti: essi non servono solo alla masticazione e alla fonazione, ma fungono da fondamentali 'mantenitori di spazio' per guidare l'eruzione corretta dei denti definitivi.",
        "Il nostro approccio è studiato per trasformare la visita dal dentista in un'esperienza positiva e priva di paura. Attraverso la prevenzione, la cura delle carie infantili e l'educazione all'igiene orale, accompagniamo i piccoli pazienti verso uno sviluppo armonioso delle arcate dentarie, prevenendo problemi ortodontici e infettivi futuri."
    ],
    benefits: [
        "Prevenzione di ascessi e dolore acuto nei bambini.",
        "Mantenimento degli spazi corretti per i futuri denti permanenti.",
        "Corretto sviluppo delle funzioni fonetiche e masticatorie.",
        "Riduzione della necessità di complessi trattamenti ortodontici in età adulta.",
        "Costruzione di un rapporto di fiducia e serenità con la figura del dentista."
    ],
    quickFacts: {
        procedureTime: '20 - 45 minuti',
        anesthesia: 'locale superficiale o sedazione cosciente',
        recoveryTime: 'immediato',
        results: 'salute orale preservata e corretto sviluppo dentale',
    },
    sections: [
        {
            id: 'trattamenti-curativi',
            title: 'Cura e Restauro dei Denti Decidui',
            content: `
                <p>Quando un dente da latte viene colpito da carie o traumi, interveniamo con tecniche conservative specifiche:</p>
                <ul>
                    <li><strong>Otturazioni in Bio-Resina:</strong> Utilizziamo materiali biocompatibili ed estetici per ricostruire il dente ed eliminare la sensibilità.</li>
                    <li><strong>Pulpotomia e Pulpectomia:</strong> In caso di carie profonde che raggiungono il nervo, procediamo con la rimozione della polpa infetta per salvare il dente dalla caduta precoce.</li>
                    <li><strong>Corone Pedodontiche:</strong> Protezioni specifiche per denti molto danneggiati che devono rimanere in arcata fino alla permuta naturale.</li>
                    <li><strong>Mantenitori di Spazio:</strong> Dispositivi essenziali se un dente viene perso troppo presto, per evitare l'affollamento dei denti permanenti.</li>
                </ul>
            `
        },
        {
            id: 'prevenzione-attiva',
            title: 'Protocolli di Prevenzione Pediatrica',
            content: `
                <p>La prevenzione è lo strumento più potente per evitare interventi invasivi in futuro:</p>
                <ol>
                    <li><strong>Sigillature dei Solchi:</strong> Applicazione di una resina protettiva sui molari per prevenire il ristagno di placca nelle zone più a rischio.</li>
                    <li><strong>Fluoroprofilassi:</strong> Applicazione professionale di fluoro per rinforzare lo smalto dei denti in crescita.</li>
                    <li><strong>Monitoraggio della Permuta:</strong> Controlli periodici per verificare che la caduta dei denti da latte e l'uscita dei definitivi avvenga nei tempi corretti.</li>
                </ol>
            `
        },
        {
            id: 'igiene-domiciliare',
            title: 'Educazione e Igiene a Casa',
            content: `
                <p>Insegnare al bambino le giuste abitudini è una missione condivisa tra dentista e genitori:</p>
                <ul>
                    <li><strong>Tecnica di Spazzolamento:</strong> Istruiamo i piccoli sull'uso corretto dello spazzolino attraverso il gioco e la simulazione.</li>
                    <li><strong>Consigli Alimentari:</strong> Guida alla gestione degli zuccheri e delle bevande acide per prevenire l'erosione dello smalto.</li>
                    <li><strong>Prima Visita:</strong> Raccomandata entro il primo anno di vita per intercettare precocemente abitudini viziate (ciuccio, pollice).</li>
                </ul>
            `
        },
        {
            id: 'approccio-psicologico',
            title: 'L’Ambiente a Misura di Bambino',
            content: `
                <p>Il pedodontista non cura solo i denti, ma gestisce l'emotività del bambino. Utilizziamo un linguaggio semplice, tecniche di distrazione e, dove necessario, la sedazione cosciente con protossido d'azoto per garantire un trattamento in totale relax.</p>
                <p>Un bambino che non ha paura del dentista oggi sarà un adulto con una bocca sana domani.</p>
            `
        }
    ]
};

export default pediatricDentistryContent;