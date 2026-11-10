import type { ServiceContent } from '@/lib/services';

const dentalSealantsServiceContent: ServiceContent = {
  description: [
    "Vulosësit e dhëmbëve (Dental Sealants) përfaqësojnë një nga metodat më efikase dhe më pak invazive për mbrojtjen e dhëmbëve të pasmë nga kariesi. Kjo procedurë konsiston në aplikimin e një shtrese të hollë mbrojtëse në sipërfaqet përtypëse të molarëve dhe premolarëve, duke 'vulosur' gropëzat dhe brazdat ku mbeturinat ushqimore dhe bakteret grumbullohen më lehtë.",
    "Në klinikën tonë, ky trajtim kryhet me precizion të lartë nga specialistë italianë, duke përdorur materiale biokompatibël që krijojnë një mburojë fizike të qëndrueshme. Është një zgjidhje ideale si për fëmijët që sapo kanë ndërruar dhëmbët, ashtu edhe për të rriturit me rrezik të lartë ndaj kariesit."
  ],
  benefits: [
    "Reduktim i Kariesit deri në 80%: Mbron zonat më të vështira për t'u pastruar nga furça.",
    "Procedurë pa Dhimbje: Nuk kërkon shpim të dhëmbit apo anestezi, duke u bërë shumë miqësore për fëmijët.",
    "Mbrojtje Afatgjatë: Vulosësit mund të zgjasin nga 5 deri në 10 vite me kujdesin e duhur.",
    "Ruajtje e Strukturës: Ndryshe nga mbushjet, vulosja nuk kërkon heqjen e asnjë pjese të shëndetshme të dhëmbit.",
    "Kursim Financiar: Parandalon nevojën për trajtime më të kushtueshme dhe komplekse në të ardhmen."
  ],
  quickFacts: {
    procedureTime: '5 - 10 minuta për dhëmb',
    anesthesia: 'Nuk nevojitet',
    recoveryTime: 'E menjëhershme (mund të konsumohet ushqim direkt)',
    results: 'Mbrojtje mekanike e menjëhershme',
  },
  sections: [
    {
      id: 'procesi-aplikimit',
      title: 'Si realizohet vulosja e dhëmbëve?',
      content: `
        <p>Aplikimi është i shpejtë dhe i thjeshtë, duke ndjekur këto hapa profesionalë:</p>
        <ul>
          <li><strong>Pastrimi:</strong> Dhëmbi pastrohet tërësisht për të garantuar një sipërfaqe sterile.</li>
          <li><strong>Përgatitja (Etching):</strong> Aplikohet një solucion i butë që krijon mikropore për ngjitje maksimale.</li>
          <li><strong>Vulosja:</strong> Materiali rrëshinor lëngshëm aplikohet në brazdat e dhëmbit.</li>
          <li><strong>Polimerizimi:</strong> Përdoret një dritë speciale blu që ngurtëson materialin në pak sekonda.</li>
        </ul>
      `
    },
    {
      id: 'kush-duhet-ta-beje',
      title: 'Kush ka më shumë nevojë për vulosës?',
      content: `
        <p>Edhe pse është i dobishëm për këdo, trajtimi është thelbësor për:</p>
        <ul>
          <li><strong>Fëmijët (6-14 vjeç):</strong> Gjatë kohës që dalin molarët e parë dhe të dytë të përhershëm.</li>
          <li><strong>Adoleshentët:</strong> Për të mbrojtur dhëmbët gjatë periudhës kur higjiena mund të neglizhohet.</li>
          <li><strong>Të rriturit:</strong> Që kanë dhëmbë me brazda shumë të thella dhe pa mbushje ekzistuese.</li>
          <li><strong>Pacientët me Xerostomi:</strong> Ata që vuajnë nga goja e thatë dhe kanë nevojë për mbrojtje ekstra.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-dhe-ekspertiza',
      title: 'Pse të zgjidhni stafin tonë italian?',
      content: `
        <p>Ne ofrojmë një standard të lartë kujdesi që shkon përtej procedurës:</p>
        <ul>
          <li><strong>Teknika Moderne:</strong> Përdorim teknologjinë e fundit të dritës kuruese dhe materialeve rrëshinore.</li>
          <li><strong>Kontrolli i Integritetit:</strong> Në çdo vizitë rutinë, ne kontrollojmë gjendjen e vulosësve për t'u siguruar që mbrojtja vazhdon.</li>
          <li><strong>Logjistikë e Plotë:</strong> Për pacientët ndërkombëtarë, ne organizojmë transportin dhe akomodimin.</li>
          <li><strong>Asistencë në Itali:</strong> Ofertat tona përfshijnë ndjekjen e kujdesit pas trajtimit direkt në klinikat tona në Itali.</li>
        </ul>
      `
    }
  ]
};

export default dentalSealantsServiceContent;