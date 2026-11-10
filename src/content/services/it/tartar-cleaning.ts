import type { ServiceContent } from '@/lib/services';

const dentalCleaningContent: ServiceContent = {
    description: [
        "L'igiene orale professionale, comunemente nota come pulizia del tartaro o detartrasi, è il pilastro fondamentale della prevenzione dentale. Nonostante una corretta igiene domiciliare, placca e batteri tendono a mineralizzarsi in tartaro, una sostanza calcificata che può essere rimossa solo da uno specialista utilizzando strumentazione professionale dedicata.",
        "Sottoporsi regolarmente a una seduta di igiene non significa solo migliorare l'estetica del sorriso e rinfrescare l'alito, ma soprattutto proteggere la bocca da patologie gravi come la parodontite (piorrea), la gengivite e le carie. È un investimento essenziale per preservare i denti naturali e garantire la longevità di eventuali impianti o protesi nel tempo."
    ],
    benefits: [
        "Prevenzione efficace di gengiviti, parodontiti e carie dentali.",
        "Rimozione di macchie superficiali causate da fumo, caffè e alimenti pigmentanti.",
        "Eliminazione dei batteri responsabili dell'alitosi per un alito sempre fresco.",
        "Monitoraggio precoce di eventuali problematiche orali durante la visita.",
        "Rafforzamento dello smalto grazie a trattamenti professionali al fluoro."
    ],
    quickFacts: {
        procedureTime: '45 - 60 minuti',
        anesthesia: 'non necessaria (o gel topico desensibilizzante)',
        recoveryTime: 'immediato',
        results: 'sensazione di freschezza, denti più lucidi e gengive sane',
    },
    sections: [
        {
            id: 'fasi-detartrasi',
            title: 'Le Fasi della Pulizia Professionale',
            content: `
                <p>La nostra procedura di igiene orale segue un protocollo completo per una pulizia profonda e confortevole:</p>
                <ul>
                    <li><strong>Ablazione a Ultrasuoni:</strong> Utilizzo di punte vibranti ad alta frequenza per frantumare il tartaro sopragengivale in modo rapido e indolore.</li>
                    <li><strong>Scaling Manuale:</strong> Uso di curette specifiche per rimuovere con precisione i depositi sottogengivali e levigare le radici.</li>
                    <li><strong>Air-Polishing:</strong> Un getto di aria, acqua e bicarbonato micronizzato (o eritritolo) per eliminare le macchie più ostinate e la placca negli spazi interdentali.</li>
                    <li><strong>Lucidatura Finale:</strong> Applicazione di una pasta profilattica per rendere le superfici lisce e brillanti, ostacolando l'adesione futura della placca.</li>
                </ul>
            `
        },
        {
            id: 'prevenzione-salute',
            title: 'Perché la Pulizia è Indispensabile',
            content: `
                <p>Il tartaro agisce come una 'spugna' per i batteri; se non rimosso, può causare danni irreversibili:</p>
                <ol>
                    <li><strong>Infiammazione Gengivale:</strong> Il primo segno è il sanguinamento durante lo spazzolamento.</li>
                    <li><strong>Recessione Ossea:</strong> La parodontite distrugge l'osso che sostiene il dente, portando alla sua mobilità.</li>
                    <li><strong>Correlazione con la Salute Generale:</strong> Esiste un legame provato tra infezioni del cavo orale e patologie sistemiche come diabete e malattie cardiovascolari.</li>
                </ol>
            `
        },
        {
            id: 'frequenza-consigliata',
            title: 'Frequenza e Richiami Personalizzati',
            content: `
                <p>Non esiste una regola universale, ma un piano basato sulle necessità individuali:</p>
                <ul>
                    <li><strong>Pazienti Sani:</strong> Una seduta ogni 6 mesi è lo standard per mantenere i risultati ottimali.</li>
                    <li><strong>Pazienti Parodontali o Fumatori:</strong> Potrebbero essere necessari richiami trimestrali per monitorare lo stato delle gengive.</li>
                    <li><strong>Portatori di Apparecchi:</strong> Un'igiene più frequente previene la formazione di carie attorno ai bracket ortodontici.</li>
                </ul>
            `
        },
        {
            id: 'istruzioni-domiciliari',
            title: 'L’Igiene Continua a Casa',
            content: `
                <p>Durante la seduta, l'igienista dentale ti fornirà istruzioni su misura per migliorare la tua routine quotidiana, consigliandoti lo spazzolino più adatto (elettrico o manuale), il tipo di filo interdentale o lo scovolino ideale per la tua conformazione dentale.</p>
                <p>Mantenere i risultati ottenuti in studio attraverso un impegno quotidiano a casa è il segreto per un sorriso sano che dura tutta la vita.</p>
            `
        }
    ]
};

export default dentalCleaningContent;