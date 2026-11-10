
import type { LucideIcon } from 'lucide-react';
import { Smile, PersonStanding, Waves } from 'lucide-react';
import { DentistryIcon } from '@/components/icons/DentistryIcon';
import { BreastIcon } from '@/components/icons/BreastIcon';

export type QuickFacts = {
  procedureTime: string;
  anesthesia: string;
  recoveryTime: string;
  results: string;
};

export type ServiceContentSection = {
    id: string;
    title: string;
    content: string;
}

export type ServiceContent = {
  description: string[];
  benefits: string[];
  quickFacts: QuickFacts;
  sections?: ServiceContentSection[];
};

export type Service = {
  id: string;
  nameKey: string;
  image: string;
  resultImageIds?: string[];
};

export type ServiceSubCategory = {
  id:string;
  nameKey: string;
  services: Service[];
};

export type ServiceCategory = {
  id: string;
  nameKey: string;
  subCategories: ServiceSubCategory[];
};

export const services: ServiceCategory[] = [
  {
    id: 'face',
    nameKey: 'face',
    subCategories: [
      {
        id: 'surgical',
        nameKey: 'surgical',
        services: [
          { id: 'rhinoplasty', nameKey: 'rhinoplasty', image: 'service-item-face-10', resultImageIds: ['rhinoplasty-result-1', 'rhinoplasty-result-2', 'rhinoplasty-result-3'] },
          { id: 'eyelid-surgery', nameKey: 'eyelidSurgery', image: 'service-item-face-7', resultImageIds: ['eyelid-surgery-result-1', 'eyelid-surgery-result-2'] },
          { id: 'face-lift', nameKey: 'faceLift', image: 'service-item-face-8' },
          { id: 'hair-transplant', nameKey: 'hairTransplant', image: 'service-item-face-9', resultImageIds: ['hair-transplant-result-1', 'hair-transplant-result-2'] },
          { id: 'beard-transplant', nameKey: 'beardTransplant', image: 'service-item-face-1' },
          { id: 'ear-reshaping', nameKey: 'earReshaping', image: 'service-item-face-5' },
          { id: 'brow-lift', nameKey: 'browLift', image: 'service-item-face-2' },
          { id: 'cheekbone-reshaping', nameKey: 'cheekboneReshaping', image: 'service-item-face-3' },
          { id: 'chin-reshaping', nameKey: 'chinReshaping', image: 'service-item-face-4' },
          { id: 'eyebrow-transplant', nameKey: 'eyebrowTransplant', image: 'service-item-face-6' },
        ],
      },
    ],
  },
  {
    id: 'breast',
    nameKey: 'breast',
    subCategories: [
      {
        id: 'surgical',
        nameKey: 'surgical',
        services: [
          { id: 'breast-augmentation', nameKey: 'breastAugmentation', image: 'service-item-breast-1', resultImageIds: ['breast-augmentation-result-1', 'breast-augmentation-result-2'] },
          { id: 'breast-lift', nameKey: 'breastLift', image: 'service-item-breast-2', resultImageIds: ['breast-lift-result-1', 'breast-lift-result-2'] },
          { id: 'breast-reconstruction', nameKey: 'breastReconstruction', image: 'service-item-breast-3' },
          { id: 'breast-reduction', nameKey: 'breastReduction', image: 'service-item-breast-4' },
          { id: 'gynecomastia', nameKey: 'gynecomastia', image: 'service-item-breast-5' },
        ],
      },
    ],
  },
  {
    id: 'body',
    nameKey: 'body',
    subCategories: [
      {
        id: 'surgical',
        nameKey: 'surgical',
        services: [
          { id: 'arm-lift', nameKey: 'armLift', image: 'service-item-body-1', resultImageIds: ['arm-lift-result-1', 'arm-lift-result-2'] },
          { id: 'brazilian-butt-lift', nameKey: 'brazilianButtLift', image: 'service-item-body-2' },
          { id: 'labiaplasty', nameKey: 'labiaplasty', image: 'service-item-body-3' },
          { id: 'liposculpture', nameKey: 'liposculpture', image: 'service-item-body-4' },
          { id: 'thigh-lift', nameKey: 'thighLift', image: 'service-item-body-5' },
          { id: 'tummy-tuck', nameKey: 'tummyTuck', image: 'service-item-body-6', resultImageIds: ['tummy-tuck-result-1', 'tummy-tuck-result-2', 'tummy-tuck-result-3'] },
          { id: 'liposuction', nameKey: 'liposuction', image: 'service-item-body-7' },
        ],
      },
    ],
  },
  {
    id: 'aesthetics-treatments',
    nameKey: 'aesthetics',
    subCategories: [
      {
        id: 'general-body',
        nameKey: 'generalBody',
        services: [
          { id: 'sclerotherapy', nameKey: 'sclerotherapy', image: 'service-item-aesthetics-1' },
          { id: 'lipolysis', nameKey: 'lipolysis', image: 'service-item-aesthetics-3' },
          { id: 'strikecell', nameKey: 'strikeCell', image: 'service-item-aesthetics-4' },
        ],
      },
      {
        id: 'skin-rejuvenation',
        nameKey: 'skinRejuvenation',
        services: [
          { id: 'microdermabrasion', nameKey: 'microdermabrasion', image: 'service-item-aesthetics-5' },
          { id: 'microneedling', nameKey: 'microneedling', image: 'service-item-aesthetics-20' },
          { id: 'dermapen-4', nameKey: 'dermapen4', image: 'service-item-aesthetics-6' },
          { id: 'multivitamin-treatment', nameKey: 'multivitaminTreatment', image: 'service-item-aesthetics-7' },
          { id: 'prp-face', nameKey: 'prpFace', image: 'service-item-aesthetics-8' },
          { id: 'prp-hair', nameKey: 'prpHair', image: 'service-item-aesthetics-9' },
          { id: 'white-peeling', nameKey: 'whitePeeling', image: 'service-item-aesthetics-10' },
        ],
      },
      {
        id: 'plasma-arc-removals',
        nameKey: 'plasmaArcRemovals',
        services: [
          { id: 'xanthelasma', nameKey: 'xanthelasma', image: 'service-item-aesthetics-11' },
          { id: 'callus', nameKey: 'callus', image: 'service-item-aesthetics-12' },
          { id: 'wart', nameKey: 'wart', image: 'service-item-aesthetics-13' },
          { id: 'mole', nameKey: 'mole', image: 'service-item-aesthetics-14' },
        ],
      },
      {
        id: 'fillers',
        nameKey: 'fillers',
        services: [
          { id: 'cheek-filler', nameKey: 'cheekFiller', image: 'service-item-aesthetics-15' },
          { id: 'jawline-filler', nameKey: 'jawlineFiller', image: 'service-item-aesthetics-16' },
          { id: 'nasolabial-filler', nameKey: 'nasolabialFiller', image: 'service-item-aesthetics-17' },
          { id: 'forehead-filler', nameKey: 'foreheadFiller', image: 'service-item-aesthetics-18' },
          { id: 'lip-filler', nameKey: 'lipFiller', image: 'service-item-aesthetics-19' },
        ],
      },
    ],
  },
  {
    id: 'dentistry',
    nameKey: 'dentistry',
    subCategories: [
      {
        id: 'aesthetics',
        nameKey: 'aesthetics',
        services: [
          { id: 'composite-veneers', nameKey: 'compositeVeneers', image: 'service-item-dentistry-composite' },
          { id: 'emax-veneers', nameKey: 'emaxVeneers', image: 'service-item-dentistry-1' },
          { id: 'teeth-whitening', nameKey: 'teethWhitening', image: 'service-item-dentistry-2' },
        ],
      },
      {
        id: 'prosthetics',
        nameKey: 'prosthetics',
        services: [
          { id: 'crowns', nameKey: 'crowns', image: 'service-item-dentistry-3' },
          { id: 'dental-bridges', nameKey: 'dentalBridges', image: 'service-item-dentistry-4' },
          { id: 'dentures', nameKey: 'dentures', image: 'service-item-dentistry-5' },
        ],
      },
      {
        id: 'orthodontics',
        nameKey: 'orthodontics',
        services: [
          { id: 'fixed-braces', nameKey: 'fixedBraces', image: 'service-item-dentistry-6' },
          { id: 'invisalign', nameKey: 'invisalign', image: 'service-item-dentistry-7' },
          { id: 'removable-appliances', nameKey: 'removableAppliances', image: 'service-item-dentistry-8' },
        ],
      },
      {
        id: 'therapy',
        nameKey: 'therapy',
        services: [
          { id: 'infected-teeth-treatment', nameKey: 'infectedTeethTreatment', image: 'service-item-dentistry-9' },
          { id: 'tartar-cleaning', nameKey: 'tartarCleaning', image: 'service-item-dentistry-10' },
          { id: 'tooth-fillings', nameKey: 'toothFillings', image: 'service-item-dentistry-11' },
        ],
      },
      {
        id: 'surgical-dentistry',
        nameKey: 'surgicalDentistry',
        services: [
          { id: 'apical-resection', nameKey: 'apicalResection', image: 'service-item-dentistry-12' },
          { id: 'dental-implants', nameKey: 'dentalImplants', image: 'service-item-dentistry-13' },
          { id: 'tooth-extraction', nameKey: 'toothExtraction', image: 'service-item-dentistry-14' },
        ],
      },
      {
        id: 'pedodontics',
        nameKey: 'pedodontics',
        services: [
          { id: 'milk-teeth-treatment', nameKey: 'milkTeethTreatment', image: 'service-item-dentistry-15' },
          { id: 'tooth-fluoridation', nameKey: 'toothFluoridation', image: 'service-item-dentistry-16' },
          { id: 'tooth-sealants', nameKey: 'toothSealants', image: 'service-item-dentistry-17' },
        ],
      },
    ],
  },
];
