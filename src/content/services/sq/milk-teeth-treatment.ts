import type { ServiceContent } from '@/lib/services';

const primaryToothTreatmentContent: ServiceContent = {
  description: [
    "Dhëmbët e qumështit nuk janë thjesht dhëmbë të përkohshëm; ata janë 'udhërrëfyesit' e buzëqeshjes së përhershme të fëmijës tuaj. Kujdesi i duhur për ta është jetik për përtypjen, zhvillimin e të folurit dhe ruajtjen e hapësirës për dhëmbët e ardhshëm.",
    "Në klinikën tonë, stomatologjia pediatrike trajtohet me një qasje të butë dhe pa ankth. Specialistët tanë italianë përdorin teknikat më moderne për të trajtuar kariesin dhe infeksionet, duke siguruar që fëmija juaj të ketë një përvojë pozitive dhe të shëndetshme te dentisti."
  ],
  benefits: [
    "Parandalimi i Infeksioneve: Trajtimi i hershëm parandalon dhimbjen dhe dëmtimin e sythit të dhëmbit të përhershëm.",
    "Ruajtja e Hapësirës: Dhëmbët e shëndetshëm të qumështit parandalojnë nevojën për trajtime komplekse ortodontike (aparat) në të ardhmen.",
    "Zhvillimi i të Folurit: Ndihmojnë në shqiptimin e saktë të tingujve gjatë fazës kritike të rritjes.",
    "Edukimi Oral: Fëmijët mësojnë rëndësinë e higjienës që në moshë të hershme, duke krijuar shprehi të shëndetshme për jetën.",
    "Ushqyerje e Mirë: Sigurojnë një përtypje efikase, thelbësore për tretjen dhe rritjen e fëmijës."
  ],
  quickFacts: {
    procedureTime: '20 - 45 minuta (në varësi të rastit)',
    anesthesia: 'Lokale (nëse nevojitet) me teknika të buta për fëmijë',
    recoveryTime: 'E menjëhershme; kujdes nga kafshimi i buzës pas mpirjes',
    results: 'Eliminim i dhimbjes dhe rikthim i funksionit përtypës',
  },
  sections: [
    {
      id: 'trajtimet-pediatrike',
      title: 'Trajtimet tona të Specializuara',
      content: `
        <p>Ne ofrojmë një gamë të plotë shërbimesh për pacientët tanë të vegjël:</p>
        <ul>
          <li><strong>Mbushje Estetike:</strong> Përdorimi i materialeve biokompatibile për të riparuar kariesin pa rënë në sy.</li>
          <li><strong>Pulpotomia:</strong> Trajtimi i nervit të dhëmbit të qumështit për të shpëtuar dhëmbin nga heqja e parakohshme.</li>
          <li><strong>Ruajtësit e Hapësirës:</strong> Aparate të vogla që mbajnë vendin e lirë nëse një dhëmb qumështi humbet para kohe.</li>
          <li><strong>Vulosësit (Sealants):</strong> Mbrojtje plastike transparente për të parandaluar kariesin në gropëzat e dhëmbëve.</li>
        </ul>
      `
    },
    {
      id: 'parandalimi-kariesit',
      title: 'Parandalimi: Sekreti i një Buzëqeshjeje të Shëndetshme',
      content: `
        <p>Çelësi i suksesit është profilaksia. Ne rekomandojmë:</p>
        <p><strong>Fluorizimin profesional</strong> për të forcuar zmaltin dhe kontrolle periodike çdo 6 muaj. Edukimi i fëmijës mbi larjen e dhëmbëve bëhet përmes lojës dhe komunikimit miqësor, duke eliminuar frikën nga 'bluza e bardhë'.</p>
      `
    },
    {
      id: 'standardi-italian-pediatri',
      title: 'Pse prindërit na besojnë ne?',
      content: `
        <p>Kujdesi për fëmijët kërkon durim, saktësi dhe ekspertizë:</p>
        <ul>
          <li><strong>Stomatologë Italianë:</strong> Specializuar në menaxhimin e sjelljes dhe trajtimet pediatrike pa dhimbje.</li>
          <li><strong>Ambient Miqësor:</strong> Klinika është projektuar për të qenë një vend argëtues dhe mikpritës për fëmijët.</li>
          <li><strong>Teknologji Digjitale:</strong> Radiografi me dozë minimale rrezatimi, specifike për fëmijë.</li>
          <li><strong>Asistencë Ndërkombëtare:</strong> Mbështetje logjistike për familjet që vijnë nga jashtë dhe kontrolle vijuese në Itali.</li>
        </ul>
      `
    }
  ]
};

export default primaryToothTreatmentContent;