import type { ServiceContent } from '@/lib/services';

const prpFaceTreatmentContent: ServiceContent = {
  description: [
    "PRP (Plazma e Pasur me Trombocite), e njohur edhe si 'Vampire Facial', është një trajtim revolucionar që përdor fuqinë shëruese të gjakut tuaj për të rigjeneruar lëkurën. Duke izoluar faktorët e rritjes nga plazma juaj, ky trajtim stimulon në mënyrë natyrale prodhimin e kolagjenit dhe elastinës.",
    "Ky është një proces plotësisht biokompatibil dhe jo-kirurgjikal, i cili përmirëson rrënjësisht teksturën e lëkurës, zbut rrudhat dhe i jep fytyrës një shkëlqim rinor pa përdorur substanca sintetike."
  ],
  benefits: [
    "Rigjenerim 100% Natyral: Përdor qelizat tuaja, duke eliminuar rrezikun e alergjive.",
    "Stimulim i Kolagjenit: Faktorët e rritjes nxisin fibroblastet për të krijuar ind të ri dhe të fortë.",
    "Trajtim i Shenjave: Efekt i lartë në zbehjen e shenjave të aknes dhe plagëve të vjetra.",
    "Shkëlqim dhe Vitalitet: Përmirëson qarkullimin e gjakut, duke i dhënë lëkurës pamje të freskët.",
    "Minimalisht Invaziv: Procedurë e shpejtë me kohë shërimi shumë të shkurtër."
  ],
  quickFacts: {
    procedureTime: '45 - 60 minuta',
    anesthesia: 'Krem mpirës lokal para injektimit ose microneedling',
    recoveryTime: '1 - 2 ditë (skuqje e lehtë e ngjashme me djegien nga dielli)',
    results: 'Përmirësim i teksturës pas 3 javësh; rezultate optimale pas 3 seancash',
  },
  sections: [
    {
      id: 'procesi-prp',
      title: 'Si realizohet Terapia PRP?',
      content: `
        <p>Procedura ndjek një protokoll të rreptë mjekësor për të garantuar përqendrimin maksimal të trombociteve:</p>
        <ol>
          <li><strong>Marrja e Gjakut:</strong> Merret një sasi minimale gjaku (si në një analizë rutinë).</li>
          <li><strong>Centrifugimi:</strong> Gjaku përpunohet në një pajisje të teknologjisë së lartë për të ndarë plazmën e pasur me faktorë rritjeje.</li>
          <li><strong>Aplikimi:</strong> PRP injektohet me gjilpëra mikro-fine ose aplikohet përmes teknologjisë Dermapen (microneedling).</li>
        </ol>
      `
    },
    {
      id: 'rezultatet-dhe-kohezgjatja',
      title: 'Rezultatet dhe Mirëmbajtja',
      content: `
        <p>Ndryshe nga mbushësit sintetikë, PRP punon nga brenda-jashtë. Rezultatet janë graduale dhe bëhen më të dukshme me kalimin e javëve:</p>
        <ul>
          <li><strong>Seancat:</strong> Rekomandohet një cikël prej 3-4 seancash për rezultate maksimale.</li>
          <li><strong>Jetëgjatësia:</strong> Efekti rigjenerues zgjat zakonisht 12 deri në 18 muaj.</li>
          <li><strong>Mirëmbajtja:</strong> Një seancë çdo 6-12 muaj ndihmon në ruajtjen e densitetit dhe shkëlqimit të lëkurës.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-per-prp',
      title: 'Ekselenca dhe Siguria Italiane',
      content: `
        <p>Pse duhet ta kryeni trajtimin PRP në klinikën tonë?</p>
        <ul>
          <li><strong>Specialistë Italianë:</strong> Ekspertizë në aplikimin e PRP për rezultate estetike natyrale.</li>
          <li><strong>Teknologji e Certifikuar:</strong> Përdorim centrifugat më të sakta për të siguruar plazmën me cilësinë më të lartë.</li>
          <li><strong>Sterilitet Maksimal:</strong> Mjedis i certifikuar që garanton siguri totale gjatë procesit të marrjes dhe injektimit.</li>
          <li><strong>Asistencë pas Trajtimit:</strong> Ndiqni ecurinë e rigjenerimit tuaj me kontrolle direkte në zyrat tona në Itali.</li>
        </ul>
      `
    }
  ]
};

export default prpFaceTreatmentContent;