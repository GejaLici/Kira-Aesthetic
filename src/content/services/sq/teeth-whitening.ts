import type { ServiceContent } from '@/lib/services';

const teethWhiteningServiceContent: ServiceContent = {
  description: [
    "Zbardhimi i dhëmbëve profesional është një procedurë e stomatologjisë estetike që synon eliminimin e njollave dhe zverdhjes së smaltit, duke rikthyer shkëlqimin natyral të buzëqeshjes. Ndryshe nga produktet komerciale, trajtimi mjekësor ofron rezultate deri në 10 nuanca më të bardha në mënyrë të sigurt dhe të kontrolluar.",
    "Nën mbikëqyrjen e mjekëve tanë italianë, ne përdorim teknologjinë e avancuar me llambë LED dhe agjentë zbardhues të certifikuar që mbrojnë integritetin e dhëmbit dhe mishrave, duke garantuar një buzëqeshje rrezatuese që zgjat në kohë."
  ],
  benefits: [
    "Rezultate të Menjëhershme: Dhëmbë dukshëm më të bardhë në vetëm një seancë 60-minutëshe.",
    "Siguri Maksimale: Mbrojtje e izoluar e mishrave të dhëmbëve për të shmangur irritimet.",
    "Trajtim i Personalizuar: Përzgjedhja e nuancës ideale që përshtatet me tonin tuaj të lëkurës.",
    "Rritje e Vetëbesimit: Një buzëqeshje më e re dhe më tërheqëse në çdo komunikim.",
    "Mirëmbajtje e Lehtë: Mundësi për sete zbardhimi në shtëpi me shabllonë të personalizuar."
  ],
  quickFacts: {
    procedureTime: '60 - 90 minuta',
    anesthesia: 'Nuk nevojitet',
    recoveryTime: 'E menjëhershme (24-48 orë dietë e bardhë)',
    results: 'Deri në 5-10 nuanca më të bardha; zgjasin 1-2 vjet',
  },
  sections: [
    {
      id: 'metodat-e-zbardhimit',
      title: 'Teknologjitë e Zbardhimit në Klinikë',
      content: `
        <p>Ne ofrojmë dy rrugë kryesore për të arritur bardhësinë e dëshiruar:</p>
        <ul>
          <li><strong>Zbardhimi me Llambë LED:</strong> Metoda më e shpejtë ku xheli zbardhues aktivizohet nga drita blu, duke përshpejtuar procesin e oksidimit të njollave.</li>
          <li><strong>Sistemi Home-Bleaching:</strong> Shabllonë të personalizuar (kasetë) që mund t'i mbani në shtëpi për disa orë në ditë, nën udhëzimet tona, për një zbardhim më gradual.</li>
          <li><strong>Teknika e Kombinuar:</strong> Fillimi me një seancë intensive në klinikë dhe vazhdimi me mirëmbajtje në shtëpi për stabilitet maksimal të ngjyrës.</li>
        </ul>
      `
    },
    {
      id: 'dieta-e-bardhe',
      title: 'Kujdesi Post-Trajtim: Dieta e Bardhë',
      content: `
        <p>Për 48 orët e para, dhëmbët janë më porozë dhe mund të thithin ngjyruesit. Rekomandohet:</p>
        <ul>
          <li><strong>Shmangni:</strong> Kafenë, çajin, verën e kuqe, lëngjet e errëta të frutave, çokollatën dhe duhanin.</li>
          <li><strong>Preferoni:</strong> Orizin, mishin e bardhë, djathin, ujin dhe makaronat me salca të bardha.</li>
          <li><strong>Menaxhimi i Ndjeshmërisë:</strong> Përdorimi i pastave desensitizuese nëse ndjeni pickime të lehta ndaj të ftohtit.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-estetike-dentare',
      title: 'Pse të na zgjidhni për buzëqeshjen tuaj?',
      content: `
        <p>Klinika jonë ofron një standard europian të përkujdesjes:</p>
        <ul>
          <li><strong>Ekspertizë Italiane:</strong> Specialistë në stomatologji estetike që vlerësojnë harmoninë e plotë të fytyrës.</li>
          <li><strong>Produkte Premium:</strong> Përdorim vetëm agjentë zbardhues të certifikuar që nuk dëmtojnë zmaltin.</li>
          <li><strong>Asistencë pas trajtimit:</strong> Kontrolli i rezultateve mund të bëhet edhe në klinikat tona partnere në Itali.</li>
          <li><strong>Komoditet Logjistik:</strong> Për pacientët ndërkombëtarë, ne kurojmë çdo detaj të udhëtimit dhe akomodimit.</li>
        </ul>
      `
    }
  ]
};

export default teethWhiteningServiceContent;