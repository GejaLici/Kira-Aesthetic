import type { ServiceContent } from '@/lib/services';

const prpFaceContent: ServiceContent = {
    description: [
        "Il PRP (Plasma Ricco di Piastrine) per il viso è una delle procedure più avanzate di medicina rigenerativa, che utilizza le risorse naturali del tuo organismo per invertire i segni del tempo. Attraverso la concentrazione dei fattori di crescita presenti nel tuo sangue, questo trattamento stimola una riparazione profonda del derma, accelerando la produzione di nuovo collagene ed elastina per una pelle visibilmente più giovane e compatta.",
        "Conosciuto anche come biorivitalizzazione autologa, il PRP è la soluzione ideale per chi cerca un ringiovanimento globale senza l'utilizzo di sostanze sintetiche. Agisce efficacemente su rughe sottili, cicatrici da acne, pori dilatati e perdita di tono, restituendo al volto una luminosità e una freschezza naturale senza alterarne minimamente i lineamenti."
    ],
    benefits: [
        "Rigenerazione cellulare naturale al 100% con materiali autologhi.",
        "Miglioramento visibile della texture, della densità e della tonicità cutanea.",
        "Riduzione di cicatrici, segni post-acneici e rughe sottili.",
        "Incarnato più radioso, uniforme e profondamente idratato.",
        "Rischio nullo di reazioni allergiche o rigetto."
    ],
    quickFacts: {
        procedureTime: '45 - 60 minuti',
        anesthesia: 'crema anestetica topica',
        recoveryTime: '24 - 48 ore (lieve rossore o gonfiore)',
        results: 'primi segni dopo 2-3 settimane, ottimali a 3 mesi',
    },
    sections: [
        {
            id: 'scienza-rigenerativa',
            title: 'Come Funzionano i Fattori di Crescita',
            content: `
                <p>Il segreto del PRP risiede nelle piastrine, che una volta concentrate e iniettate, rilasciano proteine attive chiamate fattori di crescita:</p>
                <ul>
                    <li><strong>Stimolazione dei Fibroblasti:</strong> Le cellule responsabili della struttura della pelle vengono riattivate per produrre nuovo collagene.</li>
                    <li><strong>Neo-angiogenesi:</strong> Migliora la microcircolazione locale, portando più ossigeno e nutrienti ai tessuti.</li>
                    <li><strong>Riparazione Tissutale:</strong> Accelera i processi di guarigione, rendendolo ideale anche per il trattamento di cicatrici e segni del tempo.</li>
                </ul>
            `
        },
        {
            id: 'fasi-procedura',
            title: 'Il Percorso del Trattamento',
            content: `
                <p>La procedura si svolge interamente in clinica e segue protocolli rigorosi di sicurezza:</p>
                <ol>
                    <li><strong>Prelievo:</strong> Viene prelevata una piccola quantità di sangue (simile a un comune esame ematico).</li>
                    <li><strong>Centrifugazione:</strong> Il sangue viene trattato in una centrifuga speciale per isolare il plasma ad alta densità piastrinica.</li>
                    <li><strong>Iniezione:</strong> Il concentrato ottenuto viene iniettato nel derma tramite aghi sottilissimi o tecniche di microneedling.</li>
                    <li><strong>Assestamento:</strong> Un leggero massaggio finale ottimizza la distribuzione dei fattori rigenerativi.</li>
                </ol>
            `
        },
        {
            id: 'protocollo-consigliato',
            title: 'Risultati e Mantenimento',
            content: `
                <p>Poiché il PRP lavora stimolando processi biologici naturali, i risultati sono progressivi e duraturi:</p>
                <ul>
                    <li><strong>Ciclo Iniziale:</strong> Si consigliano solitamente 3 o 4 sedute a distanza di circa un mese l'una dall'altra.</li>
                    <li><strong>Mantenimento:</strong> Per conservare l'effetto rigenerativo, è sufficiente una seduta ogni 6-12 mesi.</li>
                    <li><strong>Post-Seduta:</strong> È fondamentale applicare una protezione solare SPF 50+ ed evitare saune o sforzi fisici intensi per le prime 48 ore.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-etica',
            title: 'Sicurezza e Bio-compatibilità',
            content: `
                <p>Essendo un trattamento autologo (che utilizza il sangue dello stesso paziente), il PRP esclude qualsiasi rischio di trasmissione di malattie o reazioni immunitarie. È una delle procedure più sicure in ambito medico-estetico.</p>
                <p>Presso la nostra clinica, utilizziamo solo kit di separazione certificati e procedure autorizzate per garantire la massima concentrazione piastrinica e la sterilità assoluta di ogni fase del processo.</p>
            `
        }
    ]
};

export default prpFaceContent;