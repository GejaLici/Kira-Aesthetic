import type { ServiceContent } from '@/lib/services';

const multivitaminTreatmentContent: ServiceContent = {
  description: [
    "Trajtimi multivitaminoz është një 'infuzion' jete për lëkurën e stresuar dhe të zbehtë. Përmes koktejeve të personalizuara me vitamina, antioksidantë dhe minerale, ky trajtim ushqen qelizat në thellësi, duke luftuar dëmtimet nga radikalet e lira dhe proceset e plakjes.",
    "Në klinikën tonë, ne kombinojmë shkencën e dermatologjisë me ekspertizën italiane për të rikthyer shkëlqimin, hidratimin dhe elasticitetin e humbur, duke përdorur teknika që garantojnë përthithje maksimale të lëndëve ushqyese."
  ],
  benefits: [
    "Shkëlqim i Menjëhershëm: Rikthen rrezatimin natyral të lëkurës që pas seancës së parë.",
    "Mbrojtje Antioksidante: Neutralizon dëmtimet nga dielli, ndotja dhe stresi mjedisor.",
    "Hidratim i Thellë: Ringjall lëkurën e thatë dhe të dehidratuar përmes vitaminave B5 dhe E.",
    "Stimulim i Kolagjenit: Vitamina C nxit prodhimin e fibrave mbështetëse për një lëkurë më të fortë.",
    "Uniformizim i Tonit: Ndihmon në zbehjen e njollave dhe rregullimin e pigmentimit."
  ],
  quickFacts: {
    procedureTime: '30 - 60 minuta',
    anesthesia: 'Krem mpirës lokal (për mezoterapi dhe microneedling)',
    recoveryTime: 'E menjëhershme për trajtimet topike; 1-2 ditë për mezoterapinë',
    results: 'Lëkurë më e freskët menjëherë; përmirësim strukturor pas 3-5 seancash',
  },
  sections: [
    {
      id: 'vitaminat-thelbesore',
      title: 'Kokteji i Rinovimit: Përbërësit Tanë',
      content: `
        <p>Trajtimet tona bazohen në vitamina me pastërti mjekësore për rezultate të garantuara:</p>
        <ul>
          <li><strong>Vitamina C:</strong> Ndriçuesi më i fuqishëm dhe mbrojtës kundër plakjes.</li>
          <li><strong>Vitamina A (Retinol):</strong> Mbreti i rigjenerimit qelizor dhe zbutjes së rrudhave.</li>
          <li><strong>Vitamina B3 (Niacinamid):</strong> Forcon barrierën mbrojtëse dhe zvogëlon poret.</li>
          <li><strong>Vitamina E:</strong> Ushqyes esencial për hidratim dhe riparim të shpejtë.</li>
        </ul>
      `
    },
    {
      id: 'metodat-e-aplikimit',
      title: 'Metodat e Avancuara të Aplikimit',
      content: `
        <p>Ne ofrojmë tri mënyra kryesore për të ushqyer lëkurën tuaj:</p>
        <p></p>
        <ul>
          <li><strong>Mezoterapi:</strong> Injeksione mikro-fine direkt në dermë për efikasitet 100%.</li>
          <li><strong>Microneedling:</strong> Krijimi i mikro-kanaleve që rrisin përthithjen e serumeve deri në 80%.</li>
          <li><strong>Infuzion Topik:</strong> Maskat dhe serumet tona profesionale për një "boost" të shpejtë dhe pa gjilpëra.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-dhe-ekspertiza',
      title: 'Përvoja jonë me Standard Italian',
      content: `
        <p>Pse të zgjidhni trajtimin tonë multivitaminoz?</p>
        <ul>
          <li><strong>Mjekë Italianë:</strong> Protokolle të sakta mjekësore për dozimin e duhur të vitaminave.</li>
          <li><strong>Personalizim:</strong> Nuk përdorim formula standarde; çdo koktej krijohet sipas nevojës së lëkurës suaj.</li>
          <li><strong>Vazhdimësi në Itali:</strong> Ofroni lëkurës suaj trajtim elitar në Shqipëri dhe vazhdoni kontrollet direkt në Itali.</li>
        </ul>
      `
    }
  ]
};

export default multivitaminTreatmentContent;