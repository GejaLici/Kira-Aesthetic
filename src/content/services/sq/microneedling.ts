import type { ServiceContent } from '@/lib/services';

const microneedlingContent: ServiceContent = {
  description: [
    "Microneedling, i njohur si Terapia e Induksionit të Kolagjenit (CIT), është një procedurë revolucionare mjekësore-estetike që shfrytëzon fuqinë vetë-shëruese të trupit. Përmes mikro-shpuarjeve të kontrolluara, ky trajtim zgjon qelizat për të prodhuar kolagjen dhe elastinë të re, duke transformuar teksturën dhe tonin e lëkurës nga brenda jashtë.",
    "Në klinikën tonë, ne përdorim teknologjinë Dermapen të gjeneratës së fundit, e cila lejon trajtimin e saktë të shenjave të aknes, rrudhave të holla, strijave dhe poreve të zmadhuara me minimalisht parehati dhe kohë rikuperimi shumë të shkurtër."
  ],
  benefits: [
    "Rigjenerim Natyral: Stimulon prodhimin organik të kolagjenit pa përdorur substanca sintetike agresive.",
    "Trajtim i Shenjave: Një nga metodat më efektive për zbutjen e shenjave atrofike të aknes.",
    "Përthithje e Lartë: Mikro-kanalet rritin deri në 80% efikasitetin e serumeve me acid hialuronik apo vitaminë C.",
    "Shtrëngim i Lëkurës: Përmirëson elasticitetin dhe tonifikimin e lëkurës në fytyrë, qafë dhe dekolte.",
    "Versatilitet: Trajton me sukses si rrudhat e moshës, ashtu edhe strijat në zona të ndryshme të trupit."
  ],
  quickFacts: {
    procedureTime: '30 - 60 minuta',
    anesthesia: 'Krem mpirës lokal (aplikohet 30 min para)',
    recoveryTime: '24 - 48 orë skuqje; shërim i plotë brenda 1 jave',
    results: 'Lëkurë më e shndritshme pas 1 jave; rezultate strukturore pas 3-6 seancash',
  },
  sections: [
    {
      id: 'teknologjia-dermapen',
      title: 'Dermapen vs. Dermaroller: Pse Teknologjia jonë?',
      content: `
        <p>Në mjekësinë moderne estetike, pajisja që përdoret bën diferencën midis një rezultati mesatar dhe një rezultati ekselent:</p>
        <ul>
          <li><strong>Hyrje Vertikale:</strong> Dermapen depërton vertikalisht, ndryshe nga rullat tradicionalë, duke shmangur grisjen e lëkurës dhe minimizuar dhimbjen.</li>
          <li><strong>Thellësi e Rregullueshme:</strong> Ne modifikojmë thellësinë e gjilpërave në kohë reale për zona të ndryshme (p.sh. më pak thellë rreth syve, më thellë në faqe).</li>
          <li><strong>Kombinimi me PRP:</strong> Për rezultate maksimale, ne ofrojmë kombinimin e microneedling me Plazmën e Pasuruar me Trombocite (PRP).</li>
        </ul>
      `
    },
    {
      id: 'faza-e-sherimit',
      title: 'Çfarë duhet të prisni pas trajtimit?',
      content: `
        <p>Procesi i shërimit pas microneedling është i shpejtë, por kërkon disiplinë:</p>
        <p>Gjatë 24 orëve të para, lëkura do të duket si pas një djegieje të lehtë nga dielli. Është <strong>thelbësore</strong> të shmangni grimimin dhe ekspozimin direkt në diell. Përdorimi i një kremi hidratues qetësues dhe mbrojtjes së lartë diellore (SPF 50) është i domosdoshëm për të mbrojtur lëkurën e re që po krijohet.</p>
      `
    },
    {
      id: 'ekspertiza-italiane',
      title: 'Standardi Italian i Bukurisë',
      content: `
        <p>Zgjedhja e klinikës sonë ju garanton një protokoll mjekësor të klasit botëror:</p>
        <ul>
          <li><strong>Specialistë Italianë:</strong> Trajnime të avancuara në mjekësinë rigjeneruese për rezultate harmonike.</li>
          <li><strong>Higjienë Rigoroze:</strong> Përdorimi i majave sterile të disponueshme vetëm për një përdorim për çdo pacient.</li>
          <li><strong>Mbështetje Logjistike:</strong> Organizim i plotë i transportit dhe akomodimit për pacientët që udhëtojnë drejt Shqipërisë.</li>
          <li><strong>Kontroll pas trajtimit:</strong> Mundësi ndjekjeje dhe kontrolli direkt në klinikat tona partnere në Itali.</li>
        </ul>
      `
    }
  ]
};

export default microneedlingContent;