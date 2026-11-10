import type { ServiceContent } from '@/lib/services';

const toothExtractionServiceContent: ServiceContent = {
  description: [
    "Heqja e dhëmbrit (ekstraksioni) është një procedurë kirurgjikale që konsiston në largimin e një dhëmbi nga foleja e tij kockore. Edhe pse qëllimi ynë parësor është ruajtja e dhëmbëve natyralë, ekstraksioni bëhet i domosdoshëm kur dhëmbi është i dëmtuar rëndë, i thyer ose shkakton infeksione që rrezikojnë shëndetin e përgjithshëm oral.",
    "Përmes teknikave tona moderne dhe asistencës së kirurgëve italianë, ne sigurojmë që procedura të jetë sa më pak invazive, plotësisht pa dhimbje falë anestezisë lokale të avancuar, dhe me një plan të qartë për zëvendësimin e dhëmbit në të ardhmen."
  ],
  benefits: [
    "Eliminimi i Dhimbjes: Ndalon menjëherë vuajtjen e shkaktuar nga dhëmbët e prishur rëndë ose abceset.",
    "Mbrojtja e Dhëmbëve Fqinjë: Ndalon përhapjen e infeksionit te dhëmbët e shëndetshëm dhe kocka e nofullës.",
    "Zgjidhje për Dhëmbët e Pjekurisë: Parandalon shtrembërimin e dhëmbëve të tjerë dhe inflamacionin e mishrave.",
    "Përgatitje për Ortodoncë: Krijon hapësirën e nevojshme për drejtimin e dhëmbëve me aparat.",
    "Rikuperim i Shpejtë: Përdorimi i teknikave kirurgjikale precize që minimizojnë traumën e indeve."
  ],
  quickFacts: {
    procedureTime: '20 - 60 minuta',
    anesthesia: 'Anestezi Lokale (opsionale: sedacion)',
    recoveryTime: '2 - 5 ditë për shërimin fillestar',
    results: 'Eliminim i menjëhershëm i vatrës së infeksionit',
  },
  sections: [
    {
      id: 'llojet-e-ekstraksionit',
      title: 'Ekstraksioni i Thjeshtë vs. Kirurgjikal',
      content: `
        <p>Varësisht nga pozicioni i dhëmbit, ne aplikojmë dy metoda kryesore:</p>
        <ul>
          <li><strong>Ekstraksioni i Thjeshtë:</strong> Kryhet për dhëmbët e dukshëm mbi mishrat e dhëmbëve, duke përdorur instrumente speciale për lëkundjen dhe heqjen e tyre të shpejtë.</li>
          <li><strong>Ekstraksioni Kirurgjikal:</strong> I nevojshëm për dhëmbët e thyer në nivel kockor ose dhëmbët e pjekurisë që nuk kanë dalë ende (të impaktuar). Kjo kërkon një ndërhyrje më të detajuar për të ruajtur integritetin e kockës.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-pas-heqjes',
      title: 'Udhëzime Kritike për Shërimin',
      content: `
        <p>Suksesi i shërimit varet nga formimi i koagulës së gjakut. Ndiqni këto rregulla:</p>
        <ul>
          <li><strong>Garza:</strong> Mbajeni garzën duke e kafshuar fort për 30-45 minuta pas procedurës.</li>
          <li><strong>Shmangni:</strong> Mos përdorni pipë për pirje, mos pini duhan dhe mos e shpëlani gojën fort për 24 orët e para (për të parandaluar "Alveolitin" ose Dry Socket).</li>
          <li><strong>Ushqimi:</strong> Konsumoni ushqime të buta dhe të ftohta (si kos ose supë të vakët) në ditën e parë.</li>
          <li><strong>Kompresat:</strong> Përdorni akull nga jashtë faqes për të minimizuar ënjtjen e mundshme.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-kirurgji-orale',
      title: 'Pse të na besoni ne?',
      content: `
        <p>Siguria juaj është prioriteti ynë kryesor gjatë çdo ndërhyrjeje:</p>
        <ul>
          <li><strong>Kirurgë Italianë:</strong> Ekspertizë e lartë në procedurat kirurgjikale komplekse dhe traumatike.</li>
          <li><strong>Ambient Steril:</strong> Standarde rigoroze të higjienës për të parandaluar çdo infeksion post-operator.</li>
          <li><strong>Planifikim për Implantet:</strong> Nëse dëshironi, ne planifikojmë menjëherë hapat për zëvendësimin e dhëmbit të hequr.</li>
          <li><strong>Asistencë në Itali:</strong> Çdo kontroll i nevojshëm pas procedurës mund të kryhet në klinikat tona në Itali.</li>
        </ul>
      `
    }
  ]
};

export default toothExtractionServiceContent;