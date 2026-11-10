import type { ServiceContent } from '@/lib/services';

const emaxVeneersContent: ServiceContent = {
    description: [
        "Le faccette E-Max rappresentano l'eccellenza assoluta nell'odontoiatria estetica moderna. Realizzate in disilicato di litio, una vetro-ceramica nota per la sua straordinaria traslucenza e resistenza, queste faccette permettono di trasformare radicalmente il sorriso mantenendo un aspetto incredibilmente naturale.",
        "A differenza delle faccette tradizionali, il materiale E-Max mima perfettamente le proprietà ottiche dello smalto dentale, riflettendo la luce con la stessa vitalità dei denti veri. È la soluzione ideale per chi cerca il massimo in termini di luminosità, precisione e durata nel tempo."
    ],
    benefits: [
        "Estetica superiore grazie alla traslucenza del disilicato di litio.",
        "Elevata resistenza all'usura, alle fratture e alle scheggiature.",
        "Resistenza totale alle macchie di caffè, tè, fumo e vino rosso.",
        "Preparazione mini-invasiva del dente naturale.",
        "Longevità eccezionale, con una durata che supera spesso i 15 anni."
    ],
    quickFacts: {
        procedureTime: '2 sedute principali',
        anesthesia: 'locale (minima preparazione)',
        recoveryTime: 'immediato',
        results: 'estetici e duraturi (10-15+ anni)',
    },
    sections: [
        {
            id: 'perche-scegliere-emax',
            title: 'Perché scegliere il Disilicato di Litio (E-Max)?',
            content: `
                <p>Le faccette E-Max sono considerate lo "standard d'oro" per diversi motivi tecnici:</p>
                <ul>
                    <li><strong>Integrazione Cromatica:</strong> Il materiale è disponibile in una vasta gamma di sfumature che permettono di replicare ogni dettaglio del dente naturale.</li>
                    <li><strong>Sottigliezza estrema:</strong> La grande resistenza del materiale permette di creare faccette molto sottili, riducendo al minimo la necessità di limare il dente originale.</li>
                    <li><strong>Biocompatibilità:</strong> Il disilicato di litio è perfettamente tollerato dai tessuti gengivali, eliminando il rischio di irritazioni o bordi scuri.</li>
                </ul>
            `
        },
        {
            id: 'applicazione-faccette-emax',
            title: 'Il Processo di Trasformazione del Sorriso',
            content: `
                <p>La creazione del tuo nuovo sorriso segue un percorso di precisione artigianale e tecnologica:</p>
                <ol>
                    <li><strong>Digital Smile Design:</strong> Progettiamo il risultato finale digitalmente, permettendoti di visualizzare l'anteprima del tuo sorriso prima di iniziare.</li>
                    <li><strong>Preparazione Conservativa:</strong> Viene rimosso un micro-strato di smalto (circa 0.3-0.5 mm) per creare lo spazio necessario alla faccetta.</li>
                    <li><strong>Impronta Ottica:</strong> Utilizziamo scanner intraorali per una precisione millimetrica, evitando le fastidiose paste tradizionali.</li>
                    <li><strong>Cementazione Adesiva:</strong> Le faccette vengono fissate con resine speciali che creano un legame chimico indissolubile con il dente.</li>
                </ol>
            `
        },
        {
            id: 'manutenzione-emax',
            title: 'Cura e Mantenimento del Sorriso E-Max',
            content: `
                <p>Mantenere le faccette E-Max è semplice, ma richiede costanza:</p>
                <ul>
                    <li><strong>Igiene Orale:</strong> Spazzolamento regolare e uso del filo interdentale per proteggere il dente naturale sottostante.</li>
                    <li><strong>Bite Notturno:</strong> Se digrigni i denti (bruxismo), l'uso di un bite è fondamentale per proteggere la ceramica dalle tensioni notturne.</li>
                    <li><strong>Pulizia Professionale:</strong> Visite semestrali per monitorare la salute delle gengive e l'integrità dei margini della faccetta.</li>
                </ul>
            `
        },
        {
            id: 'indicazioni-emax',
            title: 'Quando sono indicate le Faccette E-Max?',
            content: `
                <p>Questa soluzione d'eccellenza è ideale per risolvere:</p>
                <ul>
                    <li>Discromie severe e macchie resistenti allo sbiancamento.</li>
                    <li>Diastemi (spazi tra i denti) che si desidera chiudere senza ortodonzia.</li>
                    <li>Denti conoidi, irregolari o leggermente disallineati.</li>
                    <li>Smalti usurati, scheggiati o abrasi dal tempo.</li>
                </ul>
            `
        }
    ]
};

export default emaxVeneersContent;