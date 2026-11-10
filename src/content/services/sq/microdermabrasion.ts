import type { ServiceContent } from '@/lib/services';

const microdermabrasionContent: ServiceContent = {
  description: [
    "Mikrodermabrasioni është një procedurë estetike jo-invazive që shërben si një 'fshirje' mekanike e shtresës së sipërme të lëkurës. Përmes këtij trajtimi, hiqen qelizat e vdekura dhe stimulohet rigjenerimi qelizor, duke zbuluar një lëkurë më të lëmuar, më të pastër dhe me shkëlqim natyral.",
    "Ky trajtim është zgjidhja ideale për ata që kërkojnë të përmirësojnë teksturën e lëkurës, të reduktojnë poret e zmadhuara dhe të zbehin rrudhat e holla apo njollat e diellit, pa pasur nevojë për kohë rikuperimi apo ndërhyrje kirurgjikale."
  ],
  benefits: [
    "Eksfolim i Thellë: Heqja efikase e qelizave të vdekura që bllokojnë poret.",
    "Rinovim i Teksturës: Zbut lëkurën e ashpër dhe përmirëson tonin e pabarabartë.",
    "Stimulim i Kolagjenit: Nxit prodhimin e fibrave që e mbajnë lëkurën të fortë dhe elastike.",
    "Trajtim i Shpejtë: Një seancë 'lunch-break' që zgjat vetëm 30-60 minuta.",
    "Pa Dhimbje: Procedurë komode që nuk kërkon anestezi dhe lejon kthimin e menjëhershëm në aktivitet."
  ],
  quickFacts: {
    procedureTime: '30 - 60 minuta',
    anesthesia: 'Nuk nevojitet',
    recoveryTime: 'E menjëhershme (mund të ketë skuqje të lehtë për 24 orë)',
    results: 'Lëkurë më e butë pas seancës së parë; rezultate kumulative pas 5-10 seancash',
  },
  sections: [
    {
      id: 'teknologjite-e-perdorura',
      title: 'Teknologjitë tona të Eksfolimit',
      content: `
        <p>Ne ofrojmë teknikat më të avancuara të mikrodermabrasionit për t'iu përshtatur çdo tipi lëkure:</p>
        <ul>
          <li><strong>Maja e Diamantit:</strong> Përdor diamante të imta për një eksfolim preciz, ideal për zonat delikate si rreth syve.</li>
          <li><strong>Sistemi me Kristale:</strong> Përdor rrymë kristalesh oksidi alumini për një trajtim më intensiv të shenjave të aknes dhe poreve të zmadhuara.</li>
          <li><strong>Hidradermabrasion:</strong> Versioni më modern që kombinon eksfolimin me hidratimin e thellë përmes serumeve ushqyese.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-pas-trajtimit',
      title: 'Kujdesi dhe Mirëmbajtja',
      content: `
        <p>Pas trajtimit, lëkura juaj është më e ndjeshme dhe kërkon vëmendje të veçantë:</p>
        <p><strong>Mbrojtja nga dielli (SPF 30+)</strong> është absolutisht e domosdoshme për të parandaluar pigmentimin e ri. Rekomandohet hidratimi i vazhdueshëm me produkte të buta dhe shmangia e metodave agresive (si retinoli ose acidet AHA/BHA) për të paktën 48 orët e para.</p>
      `
    },
    {
      id: 'pervoja-italiane',
      title: 'Pse Mikrodermabrasion në Klinikën Tonë?',
      content: `
        <p>Ne kombinojmë standardet më të larta të mjekësisë estetike italiane me komoditetin tuaj:</p>
        <ul>
          <li><strong>Specialistë Italianë:</strong> Trajtimi kryhet nga ekspertë që vlerësojnë me saktësi nevojat e lëkurës suaj.</li>
          <li><strong>Pajisje të Certifikuara:</strong> Teknologji e fundit që garanton siguri dhe efikasitet maksimal.</li>
          <li><strong>Shërbim Logjistik:</strong> Për pacientët ndërkombëtarë, ne organizojmë transportin dhe akomodimin në Shqipëri.</li>
          <li><strong>Kontrolle në Itali:</strong> Ofertë unike për ndjekje dhe këshillim direkt në Itali pas trajtimit.</li>
        </ul>
      `
    }
  ]
};

export default microdermabrasionContent;