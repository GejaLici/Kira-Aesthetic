import type { ServiceContent } from '@/lib/services';

const dentalFillingsServiceContent: ServiceContent = {
  description: [
    "Mbushja e dhëmbit, e njohur ndryshe si plombë, është trajtimi kryesor për restaurimin e dhëmbëve të prekur nga kariesi (prishja). Procedura konsiston në heqjen e pjesës së dëmtuar dhe mbushjen e hapësirës me materiale speciale që rikthejnë formën, funksionin dhe forcën e dhëmbit natyral.",
    "Në klinikën tonë, nën drejtimin e mjekëve italianë, ne përdorim materiale biokompatible të gjeneratës së fundit që përputhen plotësisht me ngjyrën e dhëmbëve tuaj, duke garantuar një rezultat estetik të padukshëm dhe një mbrojtje afatgjatë kundër infeksioneve të mëtejshme."
  ],
  benefits: [
    "Ndalimi i Kariesit: Parandalon përhapjen e baktereve drejt nervit të dhëmbit.",
    "Rikthimi i Funksionit: Mundëson përtypje normale dhe pa dhimbje.",
    "Estetikë Natyrale: Mbushjet kompozite përzihen pa u dalluar me smaltin tuaj.",
    "Mbrojtje e Dhëmbit: Forcon strukturën e dhëmbit dhe parandalon thyerjet.",
    "Procedurë e Shpejtë: Përfundon zakonisht në një seancë të vetme 30-45 minutëshe."
  ],
  quickFacts: {
    procedureTime: '30 - 60 minuta',
    anesthesia: 'Anestezi Lokale',
    recoveryTime: 'E menjëhershme (shmangni ushqimin derisa të kalojë mpirja)',
    results: 'Rikthim i menjëhershëm i funksionit dhe estetikës',
  },
  sections: [
    {
      id: 'llojet-e-mbushjeve',
      title: 'Materialet që përdorim',
      content: `
        <p>Zgjedhja e materialit varet nga pozicioni i dhëmbit dhe madhësia e dëmtimit:</p>
        <ul>
          <li><strong>Mbushje Kompozite:</strong> Materiali më popullor që imiton ngjyrën e dhëmbit, ideal për zonat e dukshme.</li>
          <li><strong>Inlays & Onlays (Qeramikë):</strong> Mbushje laboratorike për dëmtime më të mëdha, që ofrojnë qëndrueshmëri maksimale.</li>
          <li><strong>Xham-Jonomer:</strong> Lëshojnë fluorid, duke qenë zgjedhja ideale për dhëmbët e fëmijëve ose zonat me rrezik të lartë kariesi.</li>
        </ul>
      `
    },
    {
      id: 'kur-nevojitet-mbushja',
      title: 'Shenjat që tregojnë nevojë për mbushje',
      content: `
        <p>Mos i injoroni këto simptoma, pasi kariesi i patrajtuar mund të çojë në humbje të dhëmbit:</p>
        <ul>
          <li>Dhimbje mprehtë gjatë konsumit të ushqimeve të ëmbla ose të ftohta.</li>
          <li>Vrima ose "gropa" të dukshme në sipërfaqen e dhëmbit.</li>
          <li>Njolla të zeza, kafe ose gri në dhëmb.</li>
          <li>Filli dentar që griset gjithmonë në të njëjtën pikë midis dhëmbëve.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-restaurim',
      title: 'Pse të zgjidhni ekspertizën tonë?',
      content: `
        <p>Ne kombinojmë teknologjinë italiane me kujdesin e personalizuar:</p>
        <ul>
          <li><strong>Mjekë Italianë:</strong> Specialistë në stomatologjinë konservative me fokus te ruajtja e strukturës natyrale.</li>
          <li><strong>Teknologji "Painless":</strong> Përdorim anestezi moderne për një procedurë krejtësisht pa dhimbje.</li>
          <li><strong>Garanci Cilësie:</strong> Vetëm materiale të certifikuara nga BE që garantojnë jetëgjatësi.</li>
          <li><strong>Asistencë pas trajtimit:</strong> Kontrollet rutinë mund të kryhen edhe në klinikat tona partnere në Itali.</li>
        </ul>
      `
    }
  ]
};

export default dentalFillingsServiceContent;