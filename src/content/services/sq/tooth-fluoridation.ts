import type { ServiceContent } from '@/lib/services';

const fluorideTreatmentServiceContent: ServiceContent = {
  description: [
    "Fluorizimi i dhëmbëve është një nga masat parandaluese më efektive në stomatologjinë moderne për të mbrojtur dhëmbët nga kariesi (prishja). Ky proces konsiston në aplikimin e një përqendrimi të lartë fluori direkt në sipërfaqen e dhëmbëve për të forcuar zmaltin dhe për të riparuar dëmtimet e hershme mikroskopike.",
    "Në klinikën tonë, trajtimi kryhet me protokolle italiane të sigurisë, duke përdorur xhel dhe llak profesional që remineralizojnë dhëmbin, duke krijuar një mburojë mbrojtëse kundër acideve dhe baktereve që shkaktojnë vrimat në dhëmbë."
  ],
  benefits: [
    "Forcim i Zmaltit: E bën shtresën e jashtme të dhëmbit më rezistente ndaj sulmeve acide.",
    "Parandalim i Kariesit: Redukton ndjeshëm mundësinë e formimit të vrimave të reja.",
    "Remineralizim: Ndihmon në rikthimin e mineraleve në zonat ku ka filluar prishja e lehtë.",
    "Reduktim i Ndjeshmërisë: Ndihmon në mbylljen e poreve të dhëmbit, duke ulur ndjeshmërinë ndaj të ftohtit/nxehtit.",
    "Kursim Afatgjatë: Një procedurë parandaluese e thjeshtë që shmang mbushjet dhe trajtimet e kushtueshme në të ardhmen."
  ],
  quickFacts: {
    procedureTime: '15 - 30 minuta',
    anesthesia: 'Nuk nevojitet',
    recoveryTime: 'E menjëhershme (shmangni ushqimin për 30 minuta)',
    results: 'Mbrojtje aktive për 4 deri në 6 muaj',
  },
  sections: [
    {
      id: 'procesi-profesional',
      title: 'Si realizohet fluorizimi profesional?',
      content: `
        <p>Aplikimi i fluorit në klinikë është shumë më i fuqishëm se pastat e zakonshme të dhëmbëve:</p>
        <ul>
          <li><strong>Pastrimi paraprak:</strong> Dhëmbët pastrohen nga pllaka bakteriale për të lejuar përthithjen maksimale.</li>
          <li><strong>Aplikimi i fluorit:</strong> Përdoret xhel me shije të këndshme ose llak (varnish) i cili ngjitet në dhëmbë dhe thahet shpejt.</li>
          <li><strong>Përthithja:</strong> Fluori depërton në strukturën e dhëmbit për të forcuar zonat e dobësuara.</li>
          <li><strong>Këshilla:</strong> Rekomandohet të mos konsumohet ushqim ose pije për 30 minuta pas seancës.</li>
        </ul>
      `
    },
    {
      id: 'kujt-i-rekomandohet',
      title: 'Kush ka më shumë nevojë për këtë trajtim?',
      content: `
        <p>Edhe pse fluori është i mirë për të gjithë, ai është jetik për kategori të caktuara:</p>
        <ul>
          <li><strong>Fëmijët:</strong> Gjatë kohës që dhëmbët e përhershëm po dalin dhe zmalti është ende duke u forcuar.</li>
          <li><strong>Pacientët me aparate:</strong> Aparatet ortodontike mbajnë më shumë baktere, duke rritur rrezikun për karies.</li>
          <li><strong>Gojë e thatë (Xerostomia):</strong> Pasi pështyma nuk mbron dot mjaftueshëm dhëmbët, fluori plotëson këtë mungesë.</li>
          <li><strong>Mishra të tërhequr:</strong> Për të mbrojtur rrënjët e ekspozuara që nuk kanë zmalt mbrojtës.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-parandalim',
      title: 'Pse të zgjidhni klinikën tonë?',
      content: `
        <p>Ne besojmë se parandalimi është trajtimi më i mirë:</p>
        <ul>
          <li><strong>Ekspertizë Italiane:</strong> Specialistët tanë ndjekin udhëzimet më të fundit evropiane për fluorizimin.</li>
          <li><strong>Materiale Premium:</strong> Përdorim vetëm llak dhe xhel profesional të certifikuar, të sigurt edhe për fëmijët shumë të vegj.</li>
          <li><strong>Qasje e Personalizuar:</strong> Vlerësojmë rrezikun tuaj individual ndaj kariesit para se të përcaktojmë dozën.</li>
          <li><strong>Kontinuitet në Itali:</strong> Programet tona parandaluese mund të monitorohen rregullisht në klinikat tona në Itali.</li>
        </ul>
      `
    }
  ]
};

export default fluorideTreatmentServiceContent;