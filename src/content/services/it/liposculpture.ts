import type { ServiceContent } from '@/lib/services';

const liposuctionContent: ServiceContent = {
    description: [
        "La liposcultura, evoluzione moderna della liposuzione, è l'intervento chirurgico d'elezione per eliminare gli accumuli di grasso ostinato che non rispondono a dieta ed esercizio fisico. Non è un metodo per la perdita di peso, ma una vera e propria tecnica di scultura corporea che permette di rimodellare i contorni, definire la silhouette e armonizzare le proporzioni del corpo.",
        "Utilizzando micro-cannule di ultima generazione e tecnologie avanzate come gli ultrasuoni VASER, siamo in grado di estrarre il tessuto adiposo in eccesso con estrema precisione. Il risultato è un profilo più snello, tonico e definito, con cicatrici quasi invisibili grazie a micro-incisioni posizionate strategicamente nelle pieghe naturali della pelle."
    ],
    benefits: [
        "Rimozione definitiva dei depositi di grasso localizzato (addome, fianchi, cosce).",
        "Rimodellamento tridimensionale della silhouette (effetto scolpito).",
        "Miglioramento della definizione muscolare in aree critiche.",
        "Possibilità di riutilizzare il proprio grasso per dare volume a seno o glutei (Lipofilling).",
        "Cicatrici millimetriche e praticamente impercettibili dopo la guarigione."
    ],
    quickFacts: {
        procedureTime: '1 - 4 ore (in base alle aree)',
        anesthesia: 'locale con sedazione o generale',
        recoveryTime: '5 - 7 giorni (ritorno alle attività leggere)',
        results: 'visibili dopo 4 settimane, definitivi a 3-6 mesi',
    },
    sections: [
        {
            id: 'tecniche-avanzate',
            title: 'Tecnologie di Rimodellamento',
            content: `
                <p>Impieghiamo le migliori tecnologie per massimizzare la precisione e minimizzare i tempi di recupero:</p>
                <ul>
                    <li><strong>VASER Lipo:</strong> Utilizza ultrasuoni per sciogliere selettivamente il grasso preservando i vasi sanguigni e i nervi. Favorisce una migliore retrazione della pelle.</li>
                    <li><strong>Liposuzione Tumescente:</strong> Tecnica standard che utilizza una soluzione liquida per facilitare l'aspirazione e ridurre lividi e sanguinamento.</li>
                    <li><strong>PAL (Power-Assisted):</strong> Cannule vibranti che rendono l'estrazione più fluida e meno traumatica per i tessuti circostanti.</li>
                </ul>
            `
        },
        {
            id: 'zone-trattabili',
            title: 'Dove possiamo intervenire?',
            content: `
                <p>La liposcultura è estremamente versatile e può essere applicata a quasi tutto il corpo:</p>
                <ul>
                    <li><strong>Area Addominale:</strong> Definizione del girovita e rimozione delle "maniglie dell'amore".</li>
                    <li><strong>Arti Inferiori:</strong> Interno ed esterno coscia (culotte de cheval) e ginocchia.</li>
                    <li><strong>Terzo Superiore:</strong> Braccia, schiena e riduzione del doppio mento.</li>
                    <li><strong>Liposcultura HD:</strong> Per pazienti già atletici che desiderano evidenziare la muscolatura addominale.</li>
                </ul>
            `
        },
        {
            id: 'post-operatorio',
            title: 'Il Recupero e la Guaina',
            content: `
                <p>Il successo dell'intervento dipende molto dalla gestione post-operatoria:</p>
                <ol>
                    <li><strong>Compressione:</strong> È obbligatorio indossare una guaina elastica specifica per 4 settimane per aiutare la pelle ad aderire ai nuovi contorni.</li>
                    <li><strong>Attività:</strong> Il cammino è incoraggiato fin dal primo giorno, mentre l'attività sportiva intensa va sospesa per circa un mese.</li>
                    <li><strong>Massaggi:</strong> Spesso consigliamo cicli di linfodrenaggio manuale dopo 2 settimane per accelerare lo smaltimento dei liquidi e ottimizzare il risultato.</li>
                </ol>
            `
        },
        {
            id: 'risultati-durata',
            title: 'Risultati Permanenti',
            content: `
                <p>Le cellule adipose rimosse con la liposcultura non si rigenerano. Ciò significa che il risultato è permanente, a patto di mantenere un peso stabile attraverso uno stile di vita sano.</p>
                <p>L'intervento non solo migliora l'aspetto estetico, ma spesso agisce come potente motivatore per il paziente, che vede finalmente i risultati di anni di sforzi in palestra e dieta concretizzarsi in un corpo armonioso.</p>
            `
        }
    ]
};

export default liposuctionContent;