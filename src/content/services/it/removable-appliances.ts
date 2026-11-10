import type { ServiceContent } from '@/lib/services';

const removableOrthodonticsContent: ServiceContent = {
    description: [
        "Gli apparecchi rimovibili, o ortodonzia mobile, rappresentano una soluzione terapeutica versatile che il paziente può gestire autonomamente. Questi dispositivi sono fondamentali nell'ortodonzia intercettiva per bambini, dove l'obiettivo è guidare la crescita delle ossa mascellari e correggere malocclusioni precoci prima che diventino problematiche scheletriche complesse.",
        "Oltre all'età pediatrica, gli apparecchi rimovibili trovano applicazione negli adulti per piccoli riallineamenti o come dispositivi di contenzione (retainer) al termine di un trattamento fisso. La loro efficacia è strettamente legata alla collaborazione del paziente: un utilizzo costante e una corretta manutenzione sono le chiavi per ottenere un sorriso armonioso e funzionale."
    ],
    benefits: [
        "Massima igiene orale: l'apparecchio si rimuove per mangiare e spazzolare i denti.",
        "Intercettazione precoce di problemi scheletrici nei bambini in crescita.",
        "Maggiore comfort grazie all'assenza di attacchi metallici fissi o fili ortodontici.",
        "Versatilità d'uso: ideale per espansione del palato o correzione di abitudini viziate.",
        "Discrezione: possibilità di rimuovere il dispositivo per occasioni sociali importanti."
    ],
    quickFacts: {
        procedureTime: '30 - 45 minuti (seduta per impronte)',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (breve periodo di adattamento alla fonazione)',
        results: 'progressivi, dipendenti dalle ore di utilizzo quotidiano',
    },
    sections: [
        {
            id: 'tipologie-apparecchi',
            title: 'Tipi di Ortodonzia Mobile',
            content: `
                <p>Esistono diverse categorie di dispositivi mobili, ognuno con un obiettivo specifico:</p>
                <ul>
                    <li><strong>Apparecchi Funzionali:</strong> Agiscono sulla muscolatura e sulla crescita ossea di mascella e mandibola (es. Attivatore, Bionator).</li>
                    <li><strong>Apparecchi Meccanici:</strong> Dotati di viti o molle per espandere le arcate (es. Espansore palatale rimovibile) o spostare singoli denti.</li>
                    <li><strong>Contenzioni (Retainer):</strong> Fondamentali dopo l'apparecchio fisso per stabilizzare i denti nella nuova posizione (es. Placca di Hawley o mascherine trasparenti).</li>
                    <li><strong>Allineatori Trasparenti:</strong> Una versione evoluta di ortodonzia rimovibile per l'allineamento estetico e funzionale negli adulti.</li>
                </ul>
            `
        },
        {
            id: 'percorso-terapeutico',
            title: 'Il Processo di Trattamento',
            content: `
                <p>Il percorso ortodontico mobile segue fasi precise per garantire precisione e risultati:</p>
                <ol>
                    <li><strong>Check-up Ortodontico:</strong> Studio del caso tramite radiografie (panoramica e teleradiografia), foto e impronte digitali.</li>
                    <li><strong>Progettazione Su Misura:</strong> L'apparecchio viene fabbricato in laboratorio odontotecnico con materiali biocompatibili certificati.</li>
                    <li><strong>Consegna e Training:</strong> L'ortodontista spiega come inserire l'apparecchio e fornisce le regole per la pulizia quotidiana.</li>
                    <li><strong>Controlli Periodici:</strong> Visite ogni 4-8 settimane per monitorare lo spostamento dentale e la crescita ossea.</li>
                </ol>
            `
        },
        {
            id: 'collaborazione-paziente',
            title: 'Regole d’Oro per il Successo',
            content: `
                <p>La natura rimovibile è un vantaggio che richiede disciplina. Per un risultato ottimale è necessario:</p>
                <ul>
                    <li><strong>Tempo di indosso:</strong> Rispettare rigorosamente le ore prescritte (solitamente 14-16 ore al giorno o uso notturno esclusivo).</li>
                    <li><strong>Pulizia del dispositivo:</strong> Lavare l'apparecchio con spazzolino e sapone neutro (mai acqua bollente che potrebbe deformarlo).</li>
                    <li><strong>Custodia Protettiva:</strong> Riporre sempre l'apparecchio nel suo box quando non indossato per evitare smarrimenti o rotture accidentali.</li>
                </ul>
            `
        },
        {
            id: 'limitazioni-considerazioni',
            title: 'Quando l’Apparecchio Mobile non Basta',
            content: `
                <p>Sebbene molto versatili, questi apparecchi non possono gestire movimenti tridimensionali complessi o gravi affollamenti che richiedono l'ortodonzia fissa. Spesso, l'apparecchio rimovibile rappresenta solo la 'Fase 1' di un trattamento che si completerà durante l'adolescenza.</p>
                <p>La valutazione dell'ortodontista specializzato è essenziale per capire se la terapia mobile è la scelta corretta per il caso specifico o per quello del proprio bambino.</p>
            `
        }
    ]
};

export default removableOrthodonticsContent;