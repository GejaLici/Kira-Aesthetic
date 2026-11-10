import type { ServiceContent } from '@/lib/services';

const whitePeelingContent: ServiceContent = {
    description: [
        "Il Peeling Bianco è un trattamento di esfoliazione chimica superficiale, basato sull'utilizzo di alfa-idrossiacidi delicati come l'acido mandelico (derivato dalle mandorle amare) o l'acido lattico. A differenza dei peeling profondi, questa procedura agisce con estrema dolcezza, rimuovendo le cellule morte dello strato corneo senza causare irritazioni o desquamazioni sociali evidenti.",
        "Questo trattamento è la soluzione ideale per chi desidera un immediato effetto 'glow' e una pelle visibilmente più levigata e uniforme. Grazie alla sua elevata tollerabilità, il Peeling Bianco può essere eseguito in ogni periodo dell'anno, anche su pelli sensibili o reattive, offrendo un rinnovamento cellulare progressivo che migliora texture, idratazione e luminosità dell'incarnato."
    ],
    benefits: [
        "Incremento immediato della luminosità e della freschezza del volto.",
        "Uniformità del colorito e riduzione delle discromie superficiali.",
        "Azione purificante sui pori dilatati e miglioramento della texture cutanea.",
        "Stimolazione delicata della produzione di collagene ed elastina.",
        "Elevata tollerabilità: ideale per pelli sensibili e senza tempi di recupero."
    ],
    quickFacts: {
        procedureTime: '20 - 30 minuti',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (lieve rossore per poche ore)',
        results: 'visibili dopo la prima seduta, ottimali con ciclo di 3-6 sedute',
    },
    sections: [
        {
            id: 'proprieta-acidi',
            title: 'L\'Efficacia degli Acidi Mandelico e Lattico',
            content: `
                <p>La scelta dell'agente esfoliante nel Peeling Bianco offre vantaggi specifici per diverse esigenze cutanee:</p>
                <ul>
                    <li><strong>Acido Mandelico:</strong> Caratterizzato da una molecola grande che penetra lentamente, riducendo al minimo il rischio di eritema. Possiede spiccate proprietà antibatteriche e schiarenti.</li>
                    <li><strong>Acido Lattico:</strong> Oltre all'azione esfoliante, ha una naturale capacità igroscopica che aumenta l'idratazione profonda dei tessuti, rendendo la pelle incredibilmente morbida.</li>
                    <li><strong>Versatilità:</strong> Questi acidi non sono fotosensibilizzanti, permettendo il trattamento anche in primavera o estate (sempre con adeguata protezione solare).</li>
                </ul>
            `
        },
        {
            id: 'procedura-peeling',
            title: 'Protocollo del Trattamento',
            content: `
                <p>Il trattamento si svolge in modo rapido e confortevole attraverso passaggi rigorosi:</p>
                <ol>
                    <li><strong>Detersione Professionale:</strong> Rimozione di trucco e impurità per preparare la pelle a ricevere l'acido.</li>
                    <li><strong>Applicazione:</strong> Stesura uniforme della soluzione esfoliante sulla zona interessata (viso, collo o décolleté).</li>
                    <li><strong>Monitoraggio:</strong> L'acido viene lasciato agire per pochi minuti; il paziente può avvertire solo un lieve e passeggero formicolio.</li>
                    <li><strong>Neutralizzazione:</strong> Blocco dell'azione chimica e applicazione di maschere o sieri lenitivi e idratanti.</li>
                </ol>
            `
        },
        {
            id: 'cura-post-trattamento',
            title: 'Consigli per il Post-Peeling',
            content: `
                <p>Per mantenere e potenziare gli effetti del peeling, è essenziale seguire poche semplici regole:</p>
                <ul>
                    <li><strong>Idratazione:</strong> Applicare creme idratanti e barriera per supportare il rinnovamento della barriera cutanea.</li>
                    <li><strong>Protezione Solare:</strong> Anche se delicato, il peeling espone cellule nuove; l'uso di un SPF 50+ è obbligatorio per prevenire macchie solari.</li>
                    <li><strong>Evitare Irritanti:</strong> Non utilizzare scrub meccanici o prodotti a base di retinolo per almeno 5 giorni dopo la seduta.</li>
                </ul>
            `
        },
        {
            id: 'risultati-aspettative',
            title: 'Risultati Progressivi e Naturali',
            content: `
                <p>Già dopo la prima seduta la pelle appare più "pulita" e luminosa. Per correggere inestetismi specifici come pori dilatati, rughe sottili o opacità cronica, consigliamo un ciclo di 3-6 sedute distanziate di 2-3 settimane l'una dall'altra. Questo approccio permette un miglioramento cumulativo della qualità della pelle senza mai stressare i tessuti.</p>
            `
        }
    ]
};

export default whitePeelingContent;