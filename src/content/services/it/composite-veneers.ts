import type { ServiceContent } from '@/lib/services';

const compositeVeneersContent: ServiceContent = {
    description: [
        "Le faccette in composito rappresentano una delle soluzioni più versatili e conservative dell'odontoiatria estetica per trasformare il sorriso. Realizzate con un materiale resinoso modellabile di alta qualità, queste sottili lamine permettono di correggere colore, forma e allineamento senza dover limare lo smalto naturale in modo invasivo.",
        "A differenza delle soluzioni in ceramica, le faccette in composito vengono modellate direttamente dal dentista in una singola seduta. Questo approccio 'diretto' garantisce un risultato immediato, altamente personalizzabile e spesso reversibile, ideale per chi cerca un miglioramento estetico efficace e delicato."
    ],
    benefits: [
        "Trattamento conservativo: minima o nessuna limatura del dente naturale.",
        "Risultati immediati: il nuovo sorriso viene completato in una sola seduta.",
        "Riparabilità: eventuali scheggiature possono essere riparate facilmente e rapidamente.",
        "Costo contenuto: soluzione più accessibile rispetto alle faccette in ceramica.",
        "Versatilità: ideale per correggere denti macchiati, scheggiati o chiudere diastemi."
    ],
    quickFacts: {
        procedureTime: '1 seduta',
        anesthesia: 'raramente necessaria',
        recoveryTime: 'immediato',
        results: 'naturali e reversibili',
    },
    sections: [
        {
            id: 'faccette-composito-tecnica',
            title: 'La Tecnica Diretta: Il Sorriso in una Sola Seduta',
            content: `
                <p>La realizzazione delle faccette in composito è un processo artigianale che unisce competenza clinica e senso estetico. Il processo si svolge tipicamente seguendo queste fasi:</p>
                <ul>
                    <li><strong>Progettazione:</strong> Analisi delle proporzioni del viso e scelta della tonalità ideale di bianco.</li>
                    <li><strong>Preparazione Minima:</strong> Lo smalto viene appena irruvidito per favorire l'adesione, preservando l'integrità del dente.</li>
                    <li><strong>Modellazione:</strong> Il dentista applica il composito a strati, scolpendo manualmente la forma desiderata direttamente in bocca.</li>
                    <li><strong>Rifinitura:</strong> Lucidatura finale per ottenere una brillantezza naturale e una superficie liscia che respinga la placca.</li>
                </ul>
            `
        },
        {
            id: 'faccette-composito-applicazioni',
            title: 'Quando Scegliere il Bonding in Composito',
            content: `
                <p>Questa tecnica è particolarmente indicata per risolvere inestetismi specifici in modo mirato:</p>
                <ul>
                    <li><strong>Denti Discromici:</strong> Copertura di macchie resistenti allo sbiancamento chimico.</li>
                    <li><strong>Diastemi:</strong> Chiusura degli spazi antiestetici tra i denti anteriori.</li>
                    <li><strong>Usura Dentale:</strong> Ripristino della lunghezza di denti abrasi o scheggiati.</li>
                    <li><strong>Lievi Disallineamenti:</strong> Correzione visiva di denti leggermente storti senza ricorrere all'ortodonzia.</li>
                </ul>
            `
        },
        {
            id: 'manutenzione-faccette',
            title: 'Cura e Longevità del Risultato',
            content: `
                <p>Con una corretta manutenzione, le faccette in composito possono durare tra i <b>5 e i 10 anni</b>. Per preservarne la bellezza, consigliamo:</p>
                <ul>
                    <li><strong>Igiene Orale:</strong> Uso regolare di spazzolino e filo interdentale per proteggere il dente sottostante.</li>
                    <li><strong>Pulizia Professionale:</strong> Sedute ogni 6 mesi per la lucidatura superficiale delle faccette.</li>
                    <li><strong>Attenzione alle Macchie:</strong> Limitare fumo, caffè e vino rosso, poiché il composito può assorbire pigmenti nel tempo.</li>
                    <li><strong>Protezione:</strong> Uso di un bite notturno se si soffre di bruxismo per evitare scheggiature.</li>
                </ul>
            `
        },
        {
            id: 'controindicazioni-estetica',
            title: 'Considerazioni e Controindicazioni',
            content: `
                <p>Nonostante i numerosi vantaggi, le faccette in composito potrebbero non essere la scelta ideale in presenza di:</p>
                <ul>
                    <li>Gravi malocclusioni che richiedono apparecchi ortodontici.</li>
                    <li>Denti con carie estese o pareti residue troppo sottili.</li>
                    <li>Malattie parodontali non ancora trattate.</li>
                </ul>
                <p>La scelta del professionista è cruciale: modellare il composito richiede un'abilità manuale superiore per evitare un effetto 'finto' e garantire un'integrazione perfetta con le gengive.</p>
            `
        }
    ]
};

export default compositeVeneersContent;