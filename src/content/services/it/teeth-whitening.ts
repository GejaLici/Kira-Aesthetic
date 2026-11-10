import type { ServiceContent } from '@/lib/services';

const teethWhiteningContent: ServiceContent = {
    description: [
        "Lo sbiancamento dentale professionale è uno dei trattamenti di odontoiatria estetica più efficaci per restituire brillantezza a un sorriso spento o ingiallito. Attraverso l'uso di agenti sbiancanti sicuri e certificati (perossido di idrogeno o di carbammide), è possibile eliminare le macchie profonde accumulate negli anni a causa di fumo, caffè, vino e invecchiamento naturale, senza minimamente intaccare l'integrità dello smalto.",
        "A differenza delle soluzioni 'fai-da-te', il trattamento professionale viene personalizzato in base alla sensibilità del paziente e alla tonalità desiderata. Che si scelga la procedura rapida in studio con attivazione a lampada LED o il sistema domiciliare con mascherine su misura, il risultato è un sorriso visibilmente più bianco, giovane e radioso in tempi brevissimi."
    ],
    benefits: [
        "Risultati immediati: denti fino a 3-4 tonalità più chiari in una sola seduta.",
        "Sicurezza garantita: protezione totale di gengive e tessuti molli durante il processo.",
        "Trattamento non invasivo: lo smalto rimane intatto e la struttura dentale preservata.",
        "Personalizzazione: possibilità di modulare l'intensità del bianco per un effetto naturale.",
        "Aumento dell'autostima grazie a un sorriso più sano, pulito e luminoso."
    ],
    quickFacts: {
        procedureTime: '60 minuti (in studio) / 10-14 giorni (domiciliare)',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (possibile leggera sensibilità temporanea)',
        results: 'visibili da subito, stabili con corretta igiene e dieta',
    },
    sections: [
        {
            id: 'tecniche-sbiancamento',
            title: 'In Studio o a Casa: Scegli la Tua Modalità',
            content: `
                <p>Offriamo le migliori tecnologie per adattarci al tuo stile di vita e alle tue esigenze:</p>
                <ul>
                    <li><strong>Power Bleaching (In Studio):</strong> Seduta intensiva di un'ora dove il gel viene attivato da una luce LED professionale per un risultato istantaneo.</li>
                    <li><strong>Home Bleaching (Domiciliare):</strong> Utilizzo di mascherine individuali realizzate su misura da indossare comodamente a casa per alcune ore al giorno o la notte.</li>
                    <li><strong>Trattamento Combinato:</strong> La sinergia tra seduta in studio e mantenimento domiciliare per chi desidera il massimo della luminosità e della durata.</li>
                </ul>
            `
        },
        {
            id: 'preparazione-importanza',
            title: 'Il Segreto di un Risultato Uniforme',
            content: `
                <p>Per ottenere uno sbiancamento eccellente, il dente deve essere perfettamente preparato:</p>
                <ol>
                    <li><strong>Igiene Orale Professionale:</strong> È obbligatorio eseguire una pulizia del tartaro prima dello sbiancamento per permettere al gel di agire uniformemente sulla superficie dello smalto.</li>
                    <li><strong>Controllo Carie:</strong> Il dentista verificherà l'assenza di lesioni cariose o infiammazioni gengivali che potrebbero causare fastidi durante il trattamento.</li>
                    <li><strong>Valutazione Estetica:</strong> Analisi di corone o otturazioni preesistenti, poiché i materiali artificiali non cambiano colore con lo sbiancamento.</li>
                </ol>
            `
        },
        {
            id: 'mantenimento-dieta',
            title: 'La "Dieta Bianca" e il Post-Trattamento',
            content: `
                <p>Nelle 48 ore successive allo sbiancamento, i tubuli dentinali sono più ricettivi ai pigmenti. Per mantenere il risultato, consigliamo:</p>
                <ul>
                    <li><strong>Evitare cibi cromogeni:</strong> Come caffè, tè, vino rosso, sugo di pomodoro, curry e frutti di bosco.</li>
                    <li><strong>Stop al fumo:</strong> La nicotina è il principale nemico del bianco dentale.</li>
                    <li><strong>Igiene costante:</strong> Uso di dentifrici specifici non abrasivi consigliati dai nostri specialisti.</li>
                </ul>
            `
        },
        {
            id: 'sicurezza-limiti',
            title: 'Controindicazioni e Professionalità',
            content: `
                <p>Sebbene sicuro, lo sbiancamento è sconsigliato in gravidanza, allattamento, ai minori di 16 anni o in presenza di gravi erosioni dello smalto.</p>
                <p>La supervisione del medico odontoiatra è fondamentale per gestire la sensibilità post-operatoria e per garantire che i tessuti gengivali non vengano irritati, assicurando un'esperienza confortevole e un'estetica di alto livello.</p>
            `
        }
    ]
};

export default teethWhiteningContent;