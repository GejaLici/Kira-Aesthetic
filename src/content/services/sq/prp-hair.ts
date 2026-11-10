import type { ServiceContent } from '@/lib/services';

const prpHairTreatmentContent: ServiceContent = {
  description: [
    "PRP (Plazma e Pasur me Trombocite) për flokët është një terapi pararojë që lufton rënien e flokëve duke përdorur resurset rigjeneruese të vetë trupit tuaj. Ky trajtim jo-kirurgjikal fokusohet në 'zgjimin' e folikulave të fjetura dhe forcimin e rrënjëve përmes faktorëve të rritjes të izoluar nga gjeku juaj.",
    "Në klinikën tonë, ne aplikojmë protokolle të avancuara italiane për të stimuluar dendësinë, për të trashur fijen e flokut dhe për të ndaluar rënien progresive, duke ofruar një zgjidhje të sigurt, natyrale dhe pa efekte anësore."
  ],
  benefits: [
    "Ndalon Rënien e Flokëve: Redukton ndjeshëm humbjen e flokëve që në seancat e para.",
    "Rrit Dendësinë: Stimulon rritjen e flokëve të rinj dhe trashjen e boshtit të fijes ekzistuese.",
    "Rigjenerim Natyral: Përdor bioteknologjinë e gjakut tuaj, pa asnjë agjent kimik.",
    "Përmirëson Skalpin: Optimizon qarkullimin e gjakut dhe shëndetin e lëkurës së kokës.",
    "Suport për Transplantin: Ideal para dhe pas transplantit për të rritur shkallën e mbijetesës së folikulave."
  ],
  quickFacts: {
    procedureTime: '60 - 90 minuta',
    anesthesia: 'Krem mpirës lokal ose anestetik i lehtë në skalp',
    recoveryTime: 'E menjëhershme; rekomandohet moslarja e kokës për 24 orë',
    results: 'Reduktim i rënies pas 2 seancave; rritje e dendësisë pas 3-6 muajsh',
  },
  sections: [
    {
      id: 'bioteknologjia-prp',
      title: 'Shkenca e Faktorëve të Rritjes',
      content: `
        <p>Suksesi i PRP bazohet në përqendrimin e trombociteve, të cilat çlirojnë faktorë kyç si PDGF dhe VEGF:</p>
        <ul>
          <li><strong>Stimulimi Folikular:</strong> Faktorët e rritjes 'rizgjojnë' rrënjët që kanë hyrë në fazën e fjetjes.</li>
          <li><strong>Vaskularizimi:</strong> Përmirësohet furnizimi me oksigjen i rrënjës, duke zgjatur fazën e rritjes (Anagjen).</li>
          <li><strong>Mbrojtja:</strong> PRP rrit rezistencën e flokut ndaj faktorëve gjenetikë dhe stresit mjedisor.</li>
        </ul>
      `
    },
    {
      id: 'faza-e-trajtimit',
      title: 'Protokolli i Trajtimit',
      content: `
        <p>Për të arritur rezultate maksimale, ne ndjekim një rrugëtim të strukturuar:</p>
        <ol>
          <li><strong>Analiza e Skalpit:</strong> Vlerësimi i gjendjes së folikulave nga mjekët tanë italianë.</li>
          <li><strong>Centrifugimi i Kontrolluar:</strong> Izolimi i plazmës me densitet të lartë përmes pajisjeve të teknologjisë së fundit.</li>
          <li><strong>Injektimi Mikro-Fine:</strong> Shpërndarja e plazmës në zonat prioritare me precizion maksimal.</li>
        </ol>
      `
    },
    {
      id: 'pse-klinika-jone-floke',
      title: 'Ekspertizë Italiane në Trikologji',
      content: `
        <p>Dallimi ynë qëndron në cilësinë e procesit dhe kujdesin ndaj pacientit:</p>
        <ul>
          <li><strong>Mjekë Specialistë:</strong> Trajtimi udhëhiqet nga ekspertë italianë me përvojë të gjatë në mjekësinë rigjeneruese.</li>
          <li><strong>Teknologji Moderne:</strong> Centrifugat tona sigurojnë përqendrimin më të lartë të trombociteve në treg.</li>
          <li><strong>Logjistikë e Siguruar:</strong> Organizojmë udhëtimin tuaj drejt Shqipërisë dhe garantojmë kontrolle post-trajtim në Itali.</li>
        </ul>
      `
    }
  ]
};

export default prpHairTreatmentContent;