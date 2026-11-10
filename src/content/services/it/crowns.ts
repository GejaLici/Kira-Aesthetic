import type { ServiceContent } from '@/lib/services';

const dentalCrownsContent: ServiceContent = {
    description: [
        "Le corone dentali, comunemente note come capsule, sono protesi fisse progettate per rivestire completamente un dente danneggiato, indebolito o devitalizzato. Questa soluzione permette di ripristinare l'integrità strutturale del dente, proteggendolo da fratture e restituendogli un'estetica naturale in termini di forma e colore.",
        "Utilizzate sia per finalità funzionali che estetiche, le corone sono essenziali per salvare denti compromessi che altrimenti andrebbero estratti. Grazie ai materiali di ultima generazione come lo zirconio e il disilicato di litio, le capsule moderne si integrano perfettamente nel sorriso, risultando indistinguibili dai denti naturali."
    ],
    benefits: [
        "Ripristino completo della funzione masticatoria e fonetica.",
        "Protezione duratura per denti fragili o sottoposti a terapia canalare.",
        "Miglioramento estetico radicale per denti con macchie o malformazioni.",
        "Elevata biocompatibilità e resistenza all'usura.",
        "Salvaguardia dell'allineamento dentale prevenendo lo spostamento dei denti adiacenti."
    ],
    quickFacts: {
        procedureTime: '2-3 sedute',
        anesthesia: 'locale (per la preparazione)',
        recoveryTime: 'immediato',
        results: 'duraturi (10-15+ anni)',
    },
    sections: [
        {
            id: 'materiali-corone-dentali',
            title: 'Materiali d\'Eccellenza: Zirconio, Ceramica e Disilicato',
            content: `
                <p>La scelta del materiale è fondamentale per garantire il giusto equilibrio tra resistenza ed estetica, a seconda della posizione del dente:</p>
                <ul>
                    <li><strong>Zirconio-Ceramica:</strong> Lo "standard d'oro" per i denti posteriori e anteriori. Unisce la resistenza estrema dello zirconio alla naturalezza della ceramica, senza bordi scuri metallici.</li>
                    <li><strong>Disilicato di Litio (E-Max):</strong> Particolarmente indicato per i denti frontali per la sua straordinaria traslucenza, capace di imitare perfettamente lo smalto naturale.</li>
                    <li><strong>Metallo-Ceramica:</strong> Una soluzione classica e robusta, ideale per i settori posteriori dove la forza masticatoria è massima.</li>
                </ul>
            `
        },
        {
            id: 'processo-applicazione-capsula',
            title: 'Il Percorso Clinico: Dalla Preparazione alla Cementazione',
            content: `
                <p>L'applicazione di una corona richiede precisione millimetrica e si articola in fasi specifiche:</p>
                <ol>
                    <li><strong>Preparazione (Monconizzazione):</strong> Il dente viene modellato per creare lo spazio necessario alla capsula.</li>
                    <li><strong>Impronta Digitale:</strong> Utilizziamo scanner intraorali per rilevare l'anatomia del dente con precisione superiore alle impronte tradizionali.</li>
                    <li><strong>Fase Provvisoria:</strong> Viene applicata una corona temporanea per proteggere il dente e mantenere l'estetica.</li>
                    <li><strong>Cementazione Definitiva:</strong> Una volta pronta, la corona viene fissata con adesivi speciali che garantiscono una tenuta strutturale a lungo termine.</li>
                </ol>
            `
        },
        {
            id: 'manutenzione-durata-corone',
            title: 'Cura e Longevità della Protesi',
            content: `
                <p>Una corona dentale può durare oltre 15 anni se supportata da una corretta igiene orale:</p>
                <ul>
                    <li><strong>Igiene Quotidiana:</strong> Fondamentale pulire accuratamente il bordo tra corona e gengiva per prevenire infiltrazioni batteriche.</li>
                    <li><strong>Controlli Periodici:</strong> Visite ogni 6-12 mesi permettono di monitorare l'integrità del cemento e la salute dei tessuti circostanti.</li>
                    <li><strong>Protezione dal Bruxismo:</strong> Se si digrignano i denti, l'uso di un bite notturno è essenziale per evitare di scheggiare la ceramica.</li>
                </ul>
            `
        },
        {
            id: 'indicazioni-restaurativa',
            title: 'Quando è Necessaria una Corona?',
            content: `
                <p>La corona è la soluzione raccomandata in presenza di:</p>
                <ul>
                    <li>Denti devitalizzati che hanno perso elasticità e resistenza.</li>
                    <li>Fratture estese o carie profonde che non permettono una semplice otturazione.</li>
                    <li>Necessità di coprire un impianto dentale o formare un ponte.</li>
                    <li>Grave erosione dello smalto dovuta ad acidi o bruxismo.</li>
                </ul>
                <p>Il nostro obiettivo è preservare il tuo dente naturale rinforzandolo con una struttura che ne garantisca la sopravvivenza per i decenni a venire.</p>
            `
        }
    ]
};

export default dentalCrownsContent;