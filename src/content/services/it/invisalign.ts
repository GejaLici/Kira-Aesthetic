import type { ServiceContent } from '@/lib/services';

const invisalignContent: ServiceContent = {
    description: [
        "Invisalign rappresenta la frontiera più avanzata dell'ortodonzia moderna, offrendo un sistema di allineamento dentale quasi del tutto invisibile. Grazie a una serie di mascherine trasparenti (allineatori) rimosvibili e realizzate su misura, è possibile correggere denti storti, spaziature eccessive e malocclusioni senza il disagio estetico dei tradizionali apparecchi fissi.",
        "Questo trattamento si basa su una tecnologia di scansione 3D ad alta precisione che permette di pianificare ogni singolo movimento dentale ancora prima di iniziare. È la soluzione ideale per adulti e adolescenti che desiderano migliorare il proprio sorriso mantenendo uno stile di vita dinamico, senza restrizioni alimentari e con la massima facilità di igiene orale."
    ],
    benefits: [
        "Estetica impeccabile: gli allineatori sono praticamente invisibili durante l'uso.",
        "Massimo comfort: assenza di fili metallici o bracket che possono irritare le gengive.",
        "Completamente rimovibili: facilità nel mangiare, bere e lavarsi i denti.",
        "Risultati prevedibili: visualizzazione del risultato finale tramite simulazione digitale 3D.",
        "Igiene orale superiore: riduce il rischio di carie rispetto agli apparecchi fissi tradizionali."
    ],
    quickFacts: {
        procedureTime: 'Scansione digitale in 15 minuti',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (nessun adattamento invasivo)',
        results: 'visibili progressivamente (6-18 mesi)',
    },
    sections: [
        {
            id: 'tecnologia-clincheck',
            title: 'Pianificazione Digitale ClinCheck®',
            content: `
                <p>Il cuore del sistema Invisalign è la precisione digitale. Attraverso lo scanner iTero, creiamo una mappa 3D della tua bocca:</p>
                <ul>
                    <li><strong>Simulazione del Sorriso:</strong> Potrai vedere virtualmente come si trasformerà il tuo sorriso settimana dopo settimana.</li>
                    <li><strong>Personalizzazione Totale:</strong> Ogni set di allineatori è stampato in 3D con materiale SmartTrack®, progettato per applicare forze costanti ma delicate.</li>
                    <li><strong>Efficienza:</strong> La mappatura digitale riduce il margine d'errore e spesso accorcia i tempi complessivi del trattamento.</li>
                </ul>
            `
        },
        {
            id: 'quotidianita-invisalign',
            title: 'Vivere con gli Allineatori Trasparenti',
            content: `
                <p>Invisalign si adatta perfettamente alla tua routine quotidiana senza stravolgerla:</p>
                <ol>
                    <li><strong>Tempo di indosso:</strong> Per ottenere i migliori risultati, le mascherine vanno indossate per 20-22 ore al giorno.</li>
                    <li><strong>Alimentazione:</strong> Non ci sono cibi vietati, poiché gli allineatori vengono rimossi durante i pasti.</li>
                    <li><strong>Sport e Parlata:</strong> Il design sottile non interferisce con la fonetica né con le attività fisiche, rendendolo ideale per chi parla in pubblico o pratica sport di contatto.</li>
                </ol>
            `
        },
        {
            id: 'casi-trattabili',
            title: 'Cosa possiamo correggere?',
            content: `
                <p>Invisalign è efficace per trattare la maggior parte delle problematiche ortodontiche, tra cui:</p>
                <ul>
                    <li><strong>Affollamento dentale:</strong> quando lo spazio nell'arcata è insufficiente.</li>
                    <li><strong>Diastemi:</strong> chiusura di spazi vuoti eccessivi tra i denti.</li>
                    <li><strong>Malocclusioni:</strong> correzione di morsi incrociati, morsi profondi o morsi inversi.</li>
                    <li><strong>Allineamento Estetico:</strong> perfezionamento della linea del sorriso per un aspetto più armonioso.</li>
                </ul>
            `
        },
        {
            id: 'manutenzione-risultati',
            title: 'Mantenimento e Fase di Ritenzione',
            content: `
                <p>Una volta raggiunto l'allineamento perfetto, è fondamentale stabilizzare i risultati. Al termine del percorso, forniamo retainer trasparenti (come i Vivera Retainers) da indossare durante la notte.</p>
                <p>Questo garantisce che i denti non tornino nella posizione originale, proteggendo il tuo investimento e la salute del tuo nuovo sorriso per gli anni a venire.</p>
            `
        }
    ]
};

export default invisalignContent;