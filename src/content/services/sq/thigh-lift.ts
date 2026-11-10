import type { ServiceContent } from '@/lib/services';

const thighLiftServiceContent: ServiceContent = {
  description: [
    "Ngritja e kofshëve, ose kruroplastika, është një procedurë kirurgjikale estetike e krijuar për të rimodeluar këmbët duke hequr lëkurën e tepërt dhe depozitat yndyrore. Ky trajtim është ideal për individët që kanë pësuar humbje të madhe në peshë ose që përballen me varjen e lëkurës si pasojë e plakjes.",
    "Përmes ekspertizës së kirurgëve tanë italianë, procedura synon të rikthejë një kontur më të tonifikuar, të lëmuar dhe proporcional, duke eliminuar shqetësimet funksionale si fërkimi i lëkurës dhe ato estetike që ndikojnë në vetëbesimin tuaj."
  ],
  benefits: [
    "Konturim i Plotë: Zhdukja e lëkurës së varur dhe 'shkrifërimit' të kofshëve.",
    "Eliminimi i Irritimit: Redukton fërkimin e dhimbshëm midis këmbëve gjatë ecjes.",
    "Siluetë Harmonike: Kofshët bëhen proporcionale me pjesën tjetër të trupit.",
    "Rritje e Vetëbesimit: Liri për të veshur rroba banjoje, funde dhe veshje sportive.",
    "Rezultate Afatgjata: Efekt i qëndrueshëm që përmirëson cilësinë e jetës."
  ],
  quickFacts: {
    procedureTime: '2 - 4 orë',
    anesthesia: 'Anestezi Gjenerale',
    recoveryTime: '1 - 2 javë (rikthim në punë); 4-6 javë (aktivitet i plotë)',
    results: 'Dukshmëri pas rënies së ënjtjes; finale pas 6-12 muajsh',
  },
  sections: [
    {
      id: 'teknikat-e-nderhyrjes',
      title: 'Teknikat e Personalizuara të Ngritjes',
      content: `
        <p>Varësisht nga shkalla e varjes së lëkurës, kirurgët tanë aplikojnë teknika specifike për të minimizuar shenjat:</p>
        <ul>
          <li><strong>Ngritja e Brendshme (Medial):</strong> Teknika më popullore, ku incizioni pozicionohet në palën e ijës për të fshehur shenjën.</li>
          <li><strong>Ngritja Mini:</strong> Për raste me lëshime minimale, ku kërkohet një ndërhyrje më pak invazive.</li>
          <li><strong>Kombinimi me Liposuksion:</strong> Përdoret shpesh për të hequr yndyrën e tepërt para se të bëhet tërheqja e lëkurës, duke siguruar një rezultat më të lëmuar.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-post-operator',
      title: 'Rruga drejt Shërimit të Shpejtë',
      content: `
        <p>Procesi i rikuperimit është jetik për rezultatin përfundimtar:</p>
        <ul>
          <li><strong>Veshja Kompresuese:</strong> Eshtë **thelbësore** mbajtja e korseve speciale për 4-6 javë për të reduktuar ënjtjen dhe ndihmuar lëkurën të adaptohet.</li>
          <li><strong>Aktiviteti:</strong> Ecja e lehtë rekomandohet që në ditët e para për të parandaluar mpiksjen e gjakut, ndërsa ushtrimet e rënda pas javës së 6-të.</li>
          <li><strong>Drenazhet:</strong> Mund të përdoren për 24-48 orët e para për të larguar lëngjet e tepërta.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-kruroplastika',
      title: 'Ekselenca Kirurgjikale Italiane',
      content: `
        <p>Zgjedhja e klinikës sonë garanton një standard të lartë sigurie:</p>
        <ul>
          <li><strong>Kirurgë Italianë:</strong> Specialistë me përvojë ndërkombëtare në rimodelimin e trupit pas humbjes në peshë.</li>
          <li><strong>Teknologji Moderne:</strong> Përdorimi i metodave që minimizojnë traumën e indeve dhe përshpejtojnë shërimin.</li>
          <li><strong>Logjistikë e Plotë:</strong> Ne organizojmë udhëtimin dhe akomodimin tuaj në Shqipëri me standarde maksimale.</li>
          <li><strong>Asistencë në Itali:</strong> Kontrollet pas operacionit mund të kryhen direkt në Itali, duke ju kursyer udhëtime shtesë.</li>
        </ul>
      `
    }
  ]
};

export default thighLiftServiceContent;