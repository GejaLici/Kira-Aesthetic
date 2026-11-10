import type { ServiceContent } from '@/lib/services';

const infectedToothContent: ServiceContent = {
    description: [
        "Il trattamento dei denti infetti, noto come endodonzia o terapia canalare, è la procedura fondamentale per salvare un dente gravemente compromesso da carie profonde, traumi o ascessi. Quando l'infezione raggiunge la polpa dentale (il cuore vivo del dente), l'unico modo per evitare l'estrazione è intervenire con una detersione profonda dei canali radicolari.",
        "Grazie alle moderne tecnologie endodontiche, oggi la devitalizzazione è un intervento indolore che permette di eliminare il dolore acuto, risolvere l'infezione e mantenere l'integrità del tuo sorriso naturale. Salvare un dente originale è sempre la scelta preferibile per preservare la corretta masticazione e l'allineamento dell'intera arcata dentale."
    ],
    benefits: [
        "Eliminazione immediata del dolore pulsante e della sensibilità estrema.",
        "Salvataggio del dente naturale evitando l'estrazione e l'inserimento di impianti.",
        "Prevenzione di complicazioni gravi come granulomi, cisti o ascessi facciali.",
        "Ripristino della piena funzionalità masticatoria ed estetica del dente.",
        "Procedura sicura e indolore grazie alle moderne tecniche di anestesia locale."
    ],
    quickFacts: {
        procedureTime: '45 - 90 min per seduta',
        anesthesia: 'locale',
        recoveryTime: '1 - 2 giorni (sensibilità residua)',
        results: 'permanenti con adeguato restauro',
    },
    sections: [
        {
            id: 'fasi-terapia-canalare',
            title: 'Come funziona la Devitalizzazione',
            content: `
                <p>La terapia canalare si articola in passaggi precisi per garantire la completa rimozione dei batteri:</p>
                <ul>
                    <li><strong>Accesso e Detersione:</strong> Si crea una piccola apertura sulla corona per accedere alla polpa infetta, che viene rimossa accuratamente.</li>
                    <li><strong>Sagomatura dei Canali:</strong> I canali radicolari vengono puliti, disinfettati e modellati utilizzando strumenti di precisione e soluzioni antibatteriche.</li>
                    <li><strong>Sigillatura:</strong> Una volta decontaminati, i canali vengono riempiti con un materiale biocompatibile (guttaperca) per prevenire nuove infiltrazioni batteriche.</li>
                    <li><strong>Ricostruzione:</strong> Il dente viene sigillato con un'otturazione o, nei casi di grande perdita di sostanza, rinforzato con una corona (capsula) per prevenirne la frattura.</li>
                </ul>
            `
        },
        {
            id: 'sintomi-infezione',
            title: 'Segnali di un Dente Infetto',
            content: `
                <p>È fondamentale consultare un dentista se si riscontrano i seguenti sintomi:</p>
                <ol>
                    <li><strong>Dolore pulsante:</strong> Spesso peggiora in posizione distesa o durante la notte.</li>
                    <li><strong>Sensibilità prolungata:</strong> Reazione eccessiva al caldo e al freddo che persiste anche dopo aver rimosso lo stimolo.</li>
                    <li><strong>Gonfiore gengivale:</strong> Presenza di una piccola escrescenza sulla gengiva (fistola) o gonfiore diffuso.</li>
                    <li><strong>Cambiamento di colore:</strong> Il dente tende a diventare più scuro rispetto a quelli vicini, segno di necrosi interna.</li>
                </ol>
            `
        },
        {
            id: 'ritrattamento-e-chirurgia',
            title: 'Casi Complessi: Ritrattamenti e Apicectomie',
            content: `
                <p>In alcune situazioni particolari, un dente già trattato può mostrare segni di nuova infezione:</p>
                <ul>
                    <li><strong>Ritrattamento Endodontico:</strong> Consiste nel rimuovere il vecchio materiale da un precedente intervento per detergere nuovamente canali non trattati o infettatisi nuovamente.</li>
                    <li><strong>Apicectomia:</strong> Se l'infezione persiste all'apice della radice, si interviene chirurgicamente per rimuovere solo la punta della radice e il tessuto infetto circostante, preservando il resto del dente.</li>
                </ul>
            `
        },
        {
            id: 'prevenzione-e-cura',
            title: 'Mantenimento a Lungo Termine',
            content: `
                <p>Un dente devitalizzato è privo di sensibilità ma rimane soggetto alla placca batterica. È essenziale mantenere un'igiene orale scrupolosa e programmare controlli radiografici periodici per monitorare la guarigione dell'osso circostante.</p>
                <p>L'uso della <strong>diga di gomma</strong> durante l'intervento è un nostro standard: questo foglio protettivo isola il dente, garantendo un campo operatorio sterile e aumentando drasticamente le probabilità di successo della cura.</p>
            `
        }
    ]
};

export default infectedToothContent;