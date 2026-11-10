import type { ServiceContent } from '@/lib/services';

const dentalScalingServiceContent: ServiceContent = {
  description: [
    "Pastrimi profesional i gurëve të dhëmbëve (skalimi) është procedura më e rëndësishme parandaluese në stomatologji. Ai eliminon tartarin dhe pllakën bakteriale që furça e dhëmbëve nuk mund t'i arrijë, duke mbrojtur mishrat nga inflamacionet dhe dhëmbët nga kariesi.",
    "Përmes teknologjisë me ultratinguj dhe teknikave të lëmuarjes profesionale, mjekët tanë italianë sigurojnë një higjienë të thellë orale, duke rikthyer shkëlqimin natyral të buzëqeshjes dhe duke parandaluar sëmundjet serioze si periodontiti."
  ],
  benefits: [
    "Mishra të Shëndetshëm: Ndalon gjakderdhjen dhe inflamacionin (gingivitin).",
    "Frymëmarrje e Freskët: Eliminon bakteret që shkaktojnë halitosis (erën e keqe të gojës).",
    "Zbardhje Natyrale: Heq njollat e shkaktuara nga kafeja, çaji, duhani dhe ushqimet me ngjyrues.",
    "Parandalim Kursyes: Shmang trajtimet e kushtueshme si mbushjet e thella apo kirurgjitë e mishrave.",
    "Stabilitet i Dhëmbëve: Mbron kockën mbështetëse, duke parandaluar lëvizjen ose rënien e dhëmbëve."
  ],
  quickFacts: {
    procedureTime: '30 - 60 minuta',
    anesthesia: 'Nuk nevojitet (ose xhel mpirës për pacientët sensitivë)',
    recoveryTime: 'E menjëhershme; ndjesi e lehtë freskie ose ndjeshmërie',
    results: 'Dukshmëri e menjëhershme; rekomandohet çdo 6 muaj',
  },
  sections: [
    {
      id: 'procesi-i-pastrimit',
      title: 'Hapat e një Higjiene Profesionale',
      content: `
        <p>Një seancë pastrimi në klinikën tonë ndjek një protokoll të detajuar:</p>
        <ul>
          <li><strong>Skalimi me Ultratinguj:</strong> Përdorimi i vibracioneve të shpejta për të shkëputur gurët pa dëmtuar zmaltin.</li>
          <li><strong>Pastrimi Manual:</strong> Rafinimi i zonave ndërdhëmbëshe dhe nën mishra me instrumente precize.</li>
          <li><strong>Air-Flow & Polishing:</strong> Heqja e pigmenteve dhe lëmuarja e sipërfaqes me një pastë speciale për të parandaluar ri-formimin e shpejtë të gurëve.</li>
          <li><strong>Fluorizimi:</strong> Aplikimi i fluorit për të forcuar dhëmbët dhe për të reduktuar ndjeshmërinë post-operatore.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-pas-pastrimit',
      title: 'Si të Ruani Rezultatin?',
      content: `
        <p>Pas procedurës, këshillohet kujdes i shtuar për 24-48 orët e para:</p>
        <ul>
          <li><strong>Ushqimi:</strong> Shmangni pijet me ngjyrë të fortë (verë e kuqe, kafe) pasi dhëmbët janë më të ndjeshëm ndaj njollosjes menjëherë pas pastrimit.</li>
          <li><strong>Ndjeshmëria:</strong> Përdorni një pastë për dhëmbë sensitivë nëse ndjeni shqetësim nga të ftohtit.</li>
          <li><strong>Higjiena Shtëpiake:</strong> Vazhdoni përdorimin e fillit dentar dhe furçës dy herë në ditë për të mbajtur rezultatin sa më gjatë.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-higjiena-orale',
      title: 'Pse të zgjidhni specialistët tanë?',
      content: `
        <p>Ekselenca në parandalim është vizioni i klinikës sonë:</p>
        <ul>
          <li><strong>Ekspertë Italianë:</strong> Higjienistët tanë ndjekin protokollet më strikte europiane për parandalimin e parodontopatisë.</li>
          <li><strong>Teknologji Pa Dhimbje:</strong> Pajisje moderne që minimizojnë vibrimet e pakëndshme dhe zhurmën.</li>
          <li><strong>Kontroll i Plotë:</strong> Pastrimi është gjithashtu një mundësi për të kontrolluar të gjithë gojën për karies të hershëm.</li>
          <li><strong>Kujdes i Vazhdueshëm:</strong> Mundësi kontrolli dhe ndjekjeje si në Shqipëri, ashtu edhe në Itali.</li>
        </ul>
      `
    }
  ]
};

export default dentalScalingServiceContent;