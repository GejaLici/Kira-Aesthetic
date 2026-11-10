import type { ServiceContent } from '@/lib/services';

const dentalSealantsContent: ServiceContent = {
    description: [
        "La sigillatura dei solchi è uno dei trattamenti di prevenzione dentale più efficaci e sicuri, studiato per proteggere i denti permanenti appena erotti (molari e premolari) dall'insorgenza della carie. Poiché la superficie masticatoria di questi denti presenta scanalature profonde e strette, dove le setole dello spazzolino faticano ad arrivare, il rischio di accumulo di placca e batteri è estremamente elevato.",
        "Il trattamento consiste nell'applicazione di una speciale resina protettiva che sigilla queste aree critiche, creando una barriera fisica invisibile. È una procedura totalmente indolore, rapida e non invasiva, che non richiede l'uso del trapano né di anestesia, rendendola l'alleato ideale per la salute orale di bambini e adolescenti durante la delicata fase di crescita."
    ],
    benefits: [
        "Protezione duratura contro la carie nelle zone più vulnerabili del dente.",
        "Procedura rapida, indolore e senza necessità di anestesia.",
        "Riduzione drastica dei costi futuri per cure odontoiatriche e otturazioni.",
        "Superficie dentale più liscia e facile da pulire con lo spazzolino.",
        "Massima efficacia per i denti permanenti appena erotti (dai 6 anni in su)."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minuti',
        anesthesia: 'non necessaria',
        recoveryTime: 'immediato (si può mangiare subito)',
        results: 'barriera protettiva attiva per 5-10 anni',
    },
    sections: [
        {
            id: 'perche-sigillare',
            title: 'Perché i Molari sono a Rischio?',
            content: `
                <p>I primi molari permanenti compaiono intorno ai 6 anni, spesso senza che i genitori se ne accorgano, poiché non sostituiscono denti da latte. La loro anatomia li rende bersagli facili per la carie:</p>
                <ul>
                    <li><strong>Solchi Profondi:</strong> Le scanalature sono spesso così strette che i residui di cibo rimangono intrappolati oltre la portata delle setole dello spazzolino.</li>
                    <li><strong>Smalto Immaturo:</strong> Al momento dell'eruzione, lo smalto non è ancora completamente mineralizzato e risulta più sensibile agli acidi.</li>
                    <li><strong>Barriera Fisica:</strong> Il sigillante riempie queste valli dentali, rendendo la superficie piana e inattaccabile dai batteri.</li>
                </ul>
            `
        },
        {
            id: 'procedura-sigillatura',
            title: 'Come avviene l\'applicazione',
            content: `
                <p>In una sola seduta e in pochi semplici passaggi, mettiamo in sicurezza il sorriso dei più piccoli:</p>
                <ol>
                    <li><strong>Pulizia:</strong> Il dente viene pulito accuratamente per rimuovere ogni traccia di placca.</li>
                    <li><strong>Preparazione:</strong> Si applica un gel delicato per rendere la superficie porosa e favorire l'adesione della resina.</li>
                    <li><strong>Sigillatura:</strong> La resina fluida viene stesa nei solchi e nelle fossette.</li>
                    <li><strong>Indurimento:</strong> Una luce blu speciale (lampada fotopolimerizzatrice) fissa il materiale in pochi secondi.</li>
                </ol>
            `
        },
        {
            id: 'durata-manutenzione',
            title: 'Durata e Controlli nel Tempo',
            content: `
                <p>Le sigillature sono progettate per resistere alle forze della masticazione per anni. Tuttavia, è fondamentale monitorarne l'integrità:</p>
                <ul>
                    <li><strong>Controlli Semestrali:</strong> Durante la visita periodica, il dentista verifica che il sigillante sia ancora integro.</li>
                    <li><strong>Riparabilità:</strong> Se una parte del sigillante si usura, può essere ripristinata in pochi istanti senza alcun fastidio.</li>
                    <li><strong>Igiene Domiciliare:</strong> Anche se protetto, il dente va spazzolato correttamente per proteggere le superfici laterali e interdentali.</li>
                </ul>
            `
        },
        {
            id: 'pedodonzia-prevenzione',
            title: 'Investire oggi nel Sorriso di domani',
            content: `
                <p>La sigillatura è un pilastro della pedodonzia moderna. Proteggere i denti sani oggi significa evitare otturazioni, devitalizzazioni o estrazioni in età adulta. Insieme alla fluoroprofilassi e a una dieta povera di zuccheri, rappresenta la strategia vincente per una bocca sana per tutta la vita.</p>
            `
        }
    ]
};

export default dentalSealantsContent;