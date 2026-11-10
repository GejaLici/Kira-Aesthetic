import type { ServiceContent } from '@/lib/services';

const reconstructiveBreastSurgeryContent: ServiceContent = {
    description: [
        "La mastoplastica ricostruttiva è un intervento di fondamentale importanza volto a ripristinare la forma, il volume e l'aspetto del seno dopo una mastectomia o altre escissioni oncologiche. Questo percorso non è solo chirurgico, ma rappresenta una tappa cruciale nel recupero psicologico e fisico della paziente, aiutandola a ritrovare l'integrità corporea.",
        "Grazie all'evoluzione delle tecniche moderne, oggi è possibile personalizzare la ricostruzione in base alle caratteristiche cliniche e alle preferenze della paziente, utilizzando impianti protesici, tessuti autologhi (lembi) o tecniche combinate. L'obiettivo è ricreare un seno che appaia naturale, equilibrato e in armonia con il resto del corpo."
    ],
    benefits: [
        "Ripristino della silhouette corporea dopo interventi oncologici.",
        "Recupero del benessere psicologico e della fiducia in sé stesse.",
        "Possibilità di ricostruzione immediata (durante la mastectomia) o differita.",
        "Risultati naturali in termini di consistenza e contorno.",
        "Personalizzazione della tecnica in base alla storia clinica della paziente."
    ],
    quickFacts: {
        procedureTime: '2-8 ore (variabile)',
        anesthesia: 'generale',
        recoveryTime: '4-8 settimane',
        results: 'permanenti e ricostruttivi',
    },
    sections: [
        {
            id: 'percorso-ricostruzione-seno',
            title: 'Mastoplastica Ricostruttiva: Un Percorso di Rinascita',
            content: `
                <p>La <b>ricostruzione mammaria</b> è parte integrante della cura del tumore al seno. Non si tratta di un mero intervento estetico, ma di una procedura volta a minimizzare il trauma fisico ed emotivo della mastectomia.</p>
                <p>Oggi le pazienti possono scegliere, insieme al chirurgo plastico e all'oncologo, tra una ricostruzione <b>immediata</b>, che avviene contestualmente alla rimozione del tumore, o <b>differita</b>, eseguita una volta completate le terapie adiuvanti.</p>
            `
        },
        {
            id: 'tecniche-ricostruttive',
            title: 'Le Tecniche: Impianti e Tessuti Autologhi',
            content: `
                <p>Esistono diverse metodologie per ricostruire il seno, ognuna con vantaggi specifici:</p>
                <ul>
                    <li><strong>Ricostruzione con Impianti:</strong> Utilizzo di espansori tissutali e protesi definitive. È la tecnica meno invasiva e con tempi di recupero più rapidi.</li>
                    <li><strong>Ricostruzione Autologa (Lembi):</strong> Utilizzo di tessuti della paziente prelevati da addome (DIEP flap), schiena o cosce. Garantisce un seno estremamente naturale e che invecchia fisiologicamente con la paziente.</li>
                    <li><strong>Lipofilling:</strong> Spesso usato come tecnica complementare per rifinire i contorni e migliorare la qualità dei tessuti irradiati.</li>
                </ul>
            `
        },
        {
            id: 'pianificazione-chirurgica',
            title: 'Pianificazione e Sicurezza',
            content: `
                <h4>Preparazione all'Intervento:</h4>
                <p>Data la complessità, la preparazione richiede un approccio multidisciplinare. Sono necessari esami diagnostici avanzati per mappare i vasi sanguigni (in caso di lembi) e una valutazione anestesiologica completa.</p>
                <ul>
                    <li><strong>Fumo:</strong> La cessazione del fumo è obbligatoria per almeno 6 settimane, poiché compromette gravemente la vitalità dei tessuti ricostruiti.</li>
                    <li><strong>Soggiorno in Clinica:</strong> Variabile da 1 a 7 giorni a seconda della complessità della tecnica scelta.</li>
                </ul>
            `
        },
        {
            id: 'recupero-post-ricostruzione',
            title: 'Recupero e Follow-up',
            content: `
                <p>Il post-operatorio è un processo graduale che richiede pazienza e cura:</p>
                <ul>
                    <li><strong>Drenaggi:</strong> Spesso necessari per rimuovere i liquidi in eccesso nei primi giorni.</li>
                    <li><strong>Supporto:</strong> Uso di reggiseni chirurgici o guaine specifiche per diverse settimane.</li>
                    <li><strong>Fisioterapia:</strong> In alcuni casi, sono consigliati esercizi mirati per recuperare la mobilità delle braccia o della zona donatrice.</li>
                </ul>
            `
        },
        {
            id: 'rischi-e-considerazioni',
            title: 'Potenziali Rischi e Considerazioni',
            content: `
                <p>Come ogni chirurgia maggiore, la ricostruzione presenta rischi che i nostri chirurghi gestiscono con la massima professionalità:</p>
                <ul>
                    <li>Possibile perdita parziale del lembo o complicazioni nel sito donatore.</li>
                    <li>Rischi legati alla radioterapia, che può influenzare la guarigione dei tessuti.</li>
                    <li>Necessità di piccoli interventi di ritocco per simmetrizzare il seno controlaterale.</li>
                </ul>
                <p>Affidarsi a <b>chirurghi plastici ricostruttivi certificati</b> garantisce un supporto costante e la gestione esperta di ogni fase del percorso di guarigione.</p>
            `
        }
    ]
};

export default reconstructiveBreastSurgeryContent;