import type { ServiceContent } from '@/lib/services';

const thighLiftContent: ServiceContent = {
    description: [
        "Il lifting delle cosce, o lifting crurale, è l'intervento di chirurgia estetica d'elezione per eliminare l'eccesso di pelle e di tessuto adiposo localizzato negli arti inferiori. Questa procedura è particolarmente indicata per pazienti che, a seguito di un importante calo ponderale, gravidanze o naturale invecchiamento, presentano una marcata lassità cutanea che non risponde a dieta o esercizio fisico.",
        "L'obiettivo dell'intervento è rimodellare il profilo delle gambe, restituendo tonicità e compattezza ai tessuti. Attraverso la rimozione dei lembi cutanei in esubero e, dove necessario, l'integrazione con la liposuzione, il chirurgo ridisegna i contorni della coscia, eliminando fastidiosi sfregamenti e donando agli arti un aspetto più snello, armonioso e giovanile."
    ],
    benefits: [
        "Rimozione definitiva della pelle flaccida e cadente nell'interno coscia.",
        "Miglioramento significativo del tono e della compattezza cutanea.",
        "Eliminazione dei disagi fisici causati dallo sfregamento dei tessuti.",
        "Ridefinizione del profilo delle gambe per una maggiore armonia corporea.",
        "Risultati duraturi e incremento della fiducia nel proprio aspetto fisico."
    ],
    quickFacts: {
        procedureTime: '2 - 4 ore',
        anesthesia: 'generale',
        recoveryTime: '2 - 3 settimane (ritorno alle attività leggere)',
        results: 'visibili dopo il gonfiore, definitivi a 6-12 mesi',
    },
    sections: [
        {
            id: 'tecniche-chirurgiche',
            title: 'Tecniche di Rimodellamento Crurale',
            content: `
                <p>La scelta della tecnica chirurgica dipende dall'entità dell'inestetismo e dalla distribuzione della lassità:</p>
                <ul>
                    <li><strong>Lifting Mediale:</strong> Tratta la parte interna delle cosce. Le incisioni vengono solitamente nascoste nella piega dell'inguine.</li>
                    <li><strong>Lifting Verticale:</strong> Necessario in caso di eccesso cutaneo massivo; l'incisione si estende dall'inguine verso il lato interno del ginocchio.</li>
                    <li><strong>Lifting Laterale:</strong> Mirato a risollevare la parte esterna delle cosce e dei glutei, spesso parte di un body-lift più esteso.</li>
                    <li><strong>Lipo-Lifting:</strong> Combinazione di liposuzione e lifting per rimuovere il grasso in eccesso prima di tendere la pelle.</li>
                </ul>
            `
        },
        {
            id: 'percorso-operatorio',
            title: 'L\'Intervento e la Preparazione',
            content: `
                <p>Il percorso verso gambe toniche richiede una pianificazione rigorosa per garantire la massima sicurezza:</p>
                <ol>
                    <li><strong>Valutazione Clinica:</strong> Analisi dell'elasticità cutanea, della qualità dei tessuti e della storia clinica del paziente.</li>
                    <li><strong>Pianificazione Incisioni:</strong> Le cicatrici vengono progettate per essere il più possibile discrete e nascoste nelle pieghe naturali.</li>
                    <li><strong>Soggiorno in Clinica:</strong> Solitamente è previsto il pernottamento di una o due notti per il monitoraggio post-operatorio.</li>
                    <li><strong>Protocollo Pre-op:</strong> È tassativo sospendere il fumo almeno 4-6 settimane prima dell'intervento per garantire una corretta vascolarizzazione e guarigione dei tessuti.</li>
                </ol>
            `
        },
        {
            id: 'recupero-post-operatorio',
            title: 'Fase di Guarigione e Cura',
            content: `
                <p>La gestione del post-operatorio è cruciale per la qualità della cicatrice finale e la stabilità del risultato:</p>
                <ul>
                    <li><strong>Guaina Compressiva:</strong> Deve essere indossata h24 per circa 6-8 settimane per ridurre l'edema e sostenere i tessuti.</li>
                    <li><strong>Riposo e Mobilità:</strong> È necessario il riposo nei primi giorni, ma si incoraggiano brevi passeggiate per favorire la circolazione.</li>
                    <li><strong>Cicatrizzazione:</strong> Le suture vengono rimosse o riassorbite entro 3 settimane. È fondamentale evitare l'esposizione solare sulle ferite per almeno un anno.</li>
                    <li><strong>Attività Sportiva:</strong> Lo sport può essere ripreso gradualmente solo dopo 2 mesi, previa autorizzazione del chirurgo.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-rischi',
            title: 'Sicurezza e Risultati Naturali',
            content: `
                <p>Sebbene complesso, l'intervento offre risultati estremamente soddisfacenti se eseguito da chirurghi plastici certificati. I rischi (ematomi, sieromi, cicatrici ipertrofiche) vengono minimizzati attraverso l'uso di tecniche di sutura avanzate e drenaggi temporanei.</p>
                <p>Il risultato finale, apprezzabile dopo la maturazione delle cicatrici, restituisce al paziente la libertà di indossare qualsiasi abbigliamento e di muoversi con rinnovato comfort e sicurezza di sé.</p>
            `
        }
    ]
};

export default thighLiftContent;