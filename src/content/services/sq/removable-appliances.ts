import type { ServiceContent } from '@/lib/services';

const removableOrthodonticsContent: ServiceContent = {
  description: [
    "Aparatet e lëvizshme ortodontike ofrojnë një zgjidhje fleksibël dhe efikase për korrigjimin e problemeve të lehta deri në mesatare të kafshimit dhe rreshtimit të dhëmbëve. Për dallim nga aparatet fikse, këto mund të hiqen gjatë ngrënies dhe pastrimit, duke ofruar komoditet maksimal për pacientin.",
    "Këto aparate janë jetike në ortodoncinë parandaluese te fëmijët për zgjerimin e harkut dentar dhe si fiksues (retajnër) pas trajtimeve komplekse, duke garantuar që buzëqeshja juaj e re të mbetet e përsosur përgjithmonë."
  ],
  benefits: [
    "Higjienë e Shkëlqyer: Mundësia për t'i hequr lejon larjen e plotë të dhëmbëve dhe përdorimin e fillit dentar pa pengesa.",
    "Pa Kufizime Ushqimore: Mund të shijoni çdo lloj ushqimi pa rrezikun e thyerjes së telave apo brakteteve.",
    "Komoditet i Lartë: Materialet akrilike të lëmuara minimizojnë irritimet e faqeve dhe mishrave të dhëmbëve.",
    "Diskrecion Estetik: Opsionet transparente (Essix) janë pothuajse të padukshme për syrin e lirë.",
    "Trajtim Parandalues: Ideale për fëmijët në rritje për të drejtuar zhvillimin e duhur të nofullave."
  ],
  quickFacts: {
    procedureTime: '30 - 45 minuta (marrja e masës dhe dërgimi në laborator)',
    anesthesia: 'Nuk nevojitet',
    recoveryTime: 'E menjëhershme; një periudhë e shkurtër adaptimi me të folurin',
    results: 'Dukshmëri graduale; kohëzgjatja varion nga 6 muaj deri në disa vite',
  },
  sections: [
    {
      id: 'llojet-e-aparateve',
      title: 'Llojet Kryesore të Aparateve të Lëvizshme',
      content: `
        <p>Zgjedhja e aparatit varet nga objektivi specifik i trajtimit:</p>
        <ul>
          <li><strong>Pllakat Aktive:</strong> Përdoren për zgjerimin e nofullës dhe krijimin e hapësirës për dhëmbët e përhershëm.</li>
          <li><strong>Retajnër Hawley:</strong> Kombinim i akrilikut dhe telit metalik, klasik për mbajtjen e dhëmbëve në pozicion pas heqjes së telave.</li>
          <li><strong>Fiksuesit Transparentë (Essix):</strong> Shina të padukshme që mbulojnë dhëmbët, të preferuara për estetikën e tyre të lartë.</li>
          <li><strong>Aparatet Funksionale:</strong> Përdoren te fëmijët për të korrigjuar disproporcionet mes nofullës së sipërme dhe të poshtme.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-dhe-mirembajtja',
      title: 'Si të Kujdeseni për Aparatin Tuaj?',
      content: `
        <p>Suksesi i trajtimit varet tërësisht nga bashkëpunimi i pacientit:</p>
        <ul>
          <li><strong>Veshja e Rregullt:</strong> Duhet mbajtur sipas orarit të caktuar (zakonisht 14-22 orë në ditë) për të pasur efekt.</li>
          <li><strong>Pastrimi:</strong> Lani aparatin me një furçë të butë dhe sapun neutral. Shmangni ujin e nxehtë pasi mund ta deformojë plastikën.</li>
          <li><strong>Ruajtja:</strong> Kur nuk është në gojë, vendoseni gjithmonë në kutinë e tij mbrojtëse për të shmangur thyerjen ose humbjen.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-ortodonci',
      title: 'Pse të zgjidhni ekspertizën tonë Italiane?',
      content: `
        <p>Ortodoncia është një shkencë precizioni që kërkon planifikim të detajuar:</p>
        <ul>
          <li><strong>Specialistë Italianë:</strong> Ortodontët tanë kanë përvojë të gjatë në klinikat më të mira të Italisë dhe Shqipërisë.</li>
          <li><strong>Teknologji Digjitale:</strong> Marrja e masave me skaner intraoral për saktësi maksimale dhe rehati të pacientit.</li>
          <li><strong>Garanci Post-Trajtim:</strong> Kontrollet periodike mund të kryhen si në klinikën tonë në Shqipëri, ashtu edhe në zyrat tona partnere në Itali.</li>
        </ul>
      `
    }
  ]
};

export default removableOrthodonticsContent;