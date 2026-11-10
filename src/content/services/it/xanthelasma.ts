import type { ServiceContent } from '@/lib/services';

const xanthelasmaContent: ServiceContent = {
    description: [
        "Lo xantelasma è un inestetismo cutaneo caratterizzato dalla comparsa di placche giallastre rilievate sulle palpebre, causate da depositi localizzati di colesterolo. Oltre a poter segnalare livelli lipidici alterati, queste lesioni appesantiscono notevolmente lo sguardo, conferendo al viso un aspetto stanco e invecchiato.",
        "Il trattamento d'elezione non chirurgico è oggi rappresentato dall'Arco al Plasma (Plexr). Questa tecnologia innovativa permette di rimuovere le placche per sublimazione (vaporizzazione del tessuto), evitando il ricorso al bisturi, ai punti di sutura e riducendo drasticamente il rischio di cicatrici. La precisione millimetrica dello strumento preserva i tessuti sani circostanti, garantendo una guarigione rapida e un ritorno immediato alla vita sociale."
    ],
    benefits: [
        "Rimozione precisa e mirata delle placche senza incisioni chirurgiche.",
        "Assenza di punti di sutura, sanguinamento e cicatrici visibili.",
        "Procedura ambulatoriale rapida eseguita con semplice anestesia topica.",
        "Ripristino di uno sguardo più fresco, pulito e giovanile.",
        "Minimo rischio di complicanze grazie alla tecnologia a sublimazione."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minuti',
        anesthesia: 'crema anestetica topica',
        recoveryTime: '5 - 10 giorni (caduta delle piccole crosticine)',
        results: 'definitivi (salvo recidive legate a ipercolesterolemia)',
    },
    sections: [
        {
            id: 'tecnologia-plexr',
            title: 'La Tecnologia dell\'Arco al Plasma',
            content: `
                <p>Il dispositivo agisce ionizzando i gas presenti nell'aria tra la punta dello strumento e la cute, generando un piccolo arco di plasma:</p>
                <ul>
                    <li><strong>Sublimazione:</strong> Il tessuto dello xantelasma passa direttamente dallo stato solido a quello gassoso, vaporizzandosi istantaneamente.</li>
                    <li><strong>Rispetto Anatomico:</strong> Non essendoci passaggio di corrente nel corpo del paziente e non trasmettendo calore eccessivo ai tessuti profondi, la sicurezza per l'occhio è totale.</li>
                    <li><strong>Precisione:</strong> Il medico agisce solo sullo spessore della placca lipidica, livellando la superficie palpebrale senza danneggiare il derma sottostante.</li>
                </ul>
            `
        },
        {
            id: 'fase-operativa',
            title: 'Svolgimento della Seduta',
            content: `
                <p>L'intervento è semplice e strutturato per il massimo comfort del paziente:</p>
                <ol>
                    <li><strong>Detersione:</strong> L'area perioculare viene accuratamente disinfettata.</li>
                    <li><strong>Anestesia:</strong> Si applica una crema specifica per circa 20-30 minuti per rendere il trattamento del tutto indolore.</li>
                    <li><strong>Trattamento:</strong> Il medico effettua piccoli "spot" sulla lesione; si avvertirà solo una sensazione di calore localizzato.</li>
                    <li><strong>Post-intervento:</strong> Al termine residuano minuscole crosticine puntiformi che proteggono la pelle in fase di rigenerazione.</li>
                </ol>
            `
        },
        {
            id: 'convalescenza-cura',
            title: 'Guarigione e Manutenzione',
            content: `
                <p>Il decorso post-trattamento richiede poche ma fondamentali attenzioni:</p>
                <ul>
                    <li><strong>Gestione Crosticine:</strong> Non devono essere rimosse o grattate; cadranno spontaneamente rivelando una pelle nuova e rosata.</li>
                    <li><strong>Igiene:</strong> Detergere delicatamente l'area con acqua tiepida e sapone neutro, tamponando senza sfregare.</li>
                    <li><strong>Protezione Solare:</strong> L'applicazione di un filtro SPF 50+ è tassativa per almeno 3 mesi per evitare iperpigmentazioni.</li>
                    <li><strong>Stile di Vita:</strong> È consigliabile monitorare i livelli di colesterolo nel sangue con il proprio medico per ridurre le probabilità che lo xantelasma si riformi.</li>
                </ul>
            `
        },
        {
            id: 'rischi-considerazioni',
            title: 'Sicurezza e Possibili Reazioni',
            content: `
                <p>Il gonfiore (edema) delle palpebre è normale nei primi 2 giorni dopo la seduta. I rischi di infezione o discromie sono estremamente bassi se si seguono le istruzioni post-trattamento. In caso di placche molto voluminose, il medico potrebbe programmare una seconda seduta di rifinitura a distanza di circa un mese per ottenere un risultato perfetto.</p>
            `
        }
    ]
};

export default xanthelasmaContent;