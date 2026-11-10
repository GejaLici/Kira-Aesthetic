import type { LucideIcon } from 'lucide-react';
import { Syringe, User as FaceIcon, Heart as BreastIcon, PersonStanding as BodyIcon, Smile as DentistryIcon, Waves } from 'lucide-react';

export interface Service {
  id: string; // slug for the service
  nameKey: string;
  categorySlug: string; // slug for the category this service belongs to
  imageUrl: string; // URL for the service image, e.g., /images/Service Name.png
  imageHint?: string; // For placeholder image AI hint
}

export interface ServiceGroup {
  groupNameKey: string;
  services: Service[];
}

export interface ServiceCategory {
  id: string; // category slug
  nameKey: string;
  icon: LucideIcon;
  serviceGroups: ServiceGroup[];
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};


// --- CATEGORY SLUGS ---
const FACE = 'face';
const BREAST = 'breast';
const BODY = 'body';
const DENTISTRY = 'dentistry';
const AESTHETICS = 'aesthetics';


export const serviceData: ServiceCategory[] = [
  {
    id: FACE,
    nameKey: "face",
    icon: FaceIcon,
    serviceGroups: [
        {
            groupNameKey: "surgical",
            services: [
                { id: slugify("Rhinoplasty"), nameKey: "rhinoplasty", categorySlug: FACE, imageUrl: "/images/Rhinoplasty.jpeg", imageHint: "nose surgery" },
                { id: slugify("Face Lift"), nameKey: "faceLift", categorySlug: FACE, imageUrl: "/images/Face Lift.png", imageHint: "face rejuvenation" },
                { id: slugify("Eyelid Surgery"), nameKey: "eyelidSurgery", categorySlug: FACE, imageUrl: "/images/Eyelid Surgery.png", imageHint: "eyelid lift" },
                { id: slugify("Ear Reshaping"), nameKey: "earReshaping", categorySlug: FACE, imageUrl: "/images/Ear reshaping.png", imageHint: "ear surgery" },
                { id: slugify("Chin Reshaping"), nameKey: "chinReshaping", categorySlug: FACE, imageUrl: "/images/Chin reshaping.png", imageHint: "chin profile" },
                { id: slugify("Cheekbone Reshaping"), nameKey: "cheekboneReshaping", categorySlug: FACE, imageUrl: "/images/Cheekbone reshaping.png", imageHint: "cheekbones face" },
                { id: slugify("Brow Lift"), nameKey: "browLift", categorySlug: FACE, imageUrl: "/images/Brow Lift.png", imageHint: "forehead lift" },
            ]
        },
        {
            groupNameKey: "hairRestoration",
            services: [
                { id: slugify("Hair Transplant"), nameKey: "hairTransplant", categorySlug: FACE, imageUrl: "/images/Hair Transplant.png", imageHint: "hair follicles" },
                { id: slugify("Beard Transplant"), nameKey: "beardTransplant", categorySlug: FACE, imageUrl: "/images/Beard Transplant.png", imageHint: "man beard" },
                { id: slugify("Eyebrow Transplant"), nameKey: "eyebrowTransplant", categorySlug: FACE, imageUrl: "/images/Eyebrow transplant.png", imageHint: "eyebrow hair" },
            ]
        }
    ]
  },
  {
    id: BREAST,
    nameKey: "breast",
    icon: BreastIcon,
    serviceGroups: [
        {
            groupNameKey: "surgical",
            services: [
                { id: slugify("Breast Augmentation"), nameKey: "breastAugmentation", categorySlug: BREAST, imageUrl: "/images/Breast Augmentation.png", imageHint: "breast implants" },
                { id: slugify("Breast Reduction"), nameKey: "breastReduction", categorySlug: BREAST, imageUrl: "/images/Breast reduction.png", imageHint: "breast reduction" },
                { id: slugify("Breast Lift"), nameKey: "breastLift", categorySlug: BREAST, imageUrl: "/images/Breast Lift.png", imageHint: "breast lifting" },
                { id: slugify("Breast Reconstruction"), nameKey: "breastReconstruction", categorySlug: BREAST, imageUrl: "/images/Breast reconstruction.png", imageHint: "breast surgery" },
                { id: slugify("Gynecomastia"), nameKey: "gynecomastia", categorySlug: BREAST, imageUrl: "/images/Gynecomastia.png", imageHint: "male chest" },
            ]
        }
    ]
  },
  {
    id: BODY,
    nameKey: "body",
    icon: BodyIcon,
    serviceGroups: [
        {
            groupNameKey: "surgical",
            services: [
                { id: slugify("Liposuction"), nameKey: "liposuction", categorySlug: BODY, imageUrl: "/images/Liposuction.png", imageHint: "fat removal" },
                { id: slugify("Tummy Tuck"), nameKey: "tummyTuck", categorySlug: BODY, imageUrl: "/images/Tummy Tuck.png", imageHint: "abdominoplasty" },
                { id: slugify("Brazilian Butt Lift"), nameKey: "brazilianButtLift", categorySlug: BODY, imageUrl: "/images/Brazilian Butt Lift.png", imageHint: "buttocks enhancement" },
                { id: slugify("Thigh Lift"), nameKey: "thighLift", categorySlug: BODY, imageUrl: "/images/Thigh Lift.png", imageHint: "leg skin" },
                { id: slugify("Arm Lift"), nameKey: "armLift", categorySlug: BODY, imageUrl: "/images/Arm Lift.jpeg", imageHint: "arm skin" },
                { id: slugify("Labiaplasty"), nameKey: "labiaplasty", categorySlug: BODY, imageUrl: "/images/Labiaplasty.png", imageHint: "intimate surgery" },
                { id: slugify("Liposculpture"), nameKey: "liposculpture", categorySlug: BODY, imageUrl: "/images/Liposculpture.jpeg", imageHint: "body sculpting" },
            ]
        }
    ]
  },
  {
    id: AESTHETICS,
    nameKey: "aesthetics",
    icon: Waves,
    serviceGroups: [
        {
            groupNameKey: "injectables",
            services: [
                { id: slugify("Botox"), nameKey: "botox", categorySlug: AESTHETICS, imageUrl: "/images/Botox.png", imageHint: "wrinkle injection" },
                { id: slugify("Dermal Fillers"), nameKey: "dermalFillers", categorySlug: AESTHETICS, imageUrl: "/images/Dermal Fillers.png", imageHint: "face filler" },
                { id: slugify("Lip Reshaping"), nameKey: "lipReshaping", categorySlug: AESTHETICS, imageUrl: "/images/Lip reshaping.png", imageHint: "lip augmentation" },
                { id: slugify("Jawline Contouring"), nameKey: "jawlineContouring", categorySlug: AESTHETICS, imageUrl: "/images/Jawline contouring (Fillers).png", imageHint: "jawline definition" },
                { id: slugify("Non-surgical Nose Reshaping"), nameKey: "nonSurgicalNoseReshaping", categorySlug: AESTHETICS, imageUrl: "/images/Non-surgical nose reshaping.png", imageHint: "nose filler" },
                { id: slugify("Dark Circles"), nameKey: "darkCircles", categorySlug: AESTHETICS, imageUrl: "/images/Dark circles.png", imageHint: "under eye treatment" },
                { id: slugify("Wrinkle Fillers"), nameKey: "wrinkleFillers", categorySlug: AESTHETICS, imageUrl: "/images/Wrinkle fillers.png", imageHint: "forehead injection" },
                { id: slugify("Deep Wrinkle Filling"), nameKey: "deepWrinkleFilling", categorySlug: AESTHETICS, imageUrl: "/images/Sulcus filling (deep wrinkle filling).png", imageHint: "smile lines filler" }
            ]
        },
        {
            groupNameKey: "skinRejuvenation",
            services: [
                { id: slugify("PRP for the face"), nameKey: "prpFace", categorySlug: AESTHETICS, imageUrl: "/images/PRP for the face.png", imageHint: "vampire facial" },
                { id: slugify("PRP for hair"), nameKey: "prpHair", categorySlug: AESTHETICS, imageUrl: "/images/PRP for hair.png", imageHint: "hair loss treatment" },
                { id: slugify("Microneedling"), nameKey: "microneedling", categorySlug: AESTHETICS, imageUrl: "/images/Microneedling.png", imageHint: "skin needle roller" },
                { id: slugify("Microdermabrasion"), nameKey: "microdermabrasion", categorySlug: AESTHETICS, imageUrl: "/images/Microdermabrasion.png", imageHint: "facial exfoliation" },
                { id: slugify("Chemical Peels"), nameKey: "chemicalPeels", categorySlug: AESTHETICS, imageUrl: "/images/White peeling.png", imageHint: "chemical peel" },
                 { id: slugify("White Peeling"), nameKey: "whitePeeling", categorySlug: AESTHETICS, imageUrl: "/images/White peeling.png", imageHint: "face peel" }
            ]
        },
         {
            groupNameKey: "bodyGeneral",
            services: [
                { id: slugify("Laser Hair Removal"), nameKey: "laserHairRemoval", categorySlug: AESTHETICS, imageUrl: "/images/Laser hair removal.png", imageHint: "laser hair leg" },
                { id: slugify("Cellulite Treatment"), nameKey: "celluliteTreatment", categorySlug: AESTHETICS, imageUrl: "/images/Cellulite treatment.jpeg", imageHint: "anti cellulite massage" },
                { id: slugify("Sclerotherapy"), nameKey: "sclerotherapy", categorySlug: AESTHETICS, imageUrl: "/images/Sclerotherapy.jpeg", imageHint: "vein treatment legs" },
                { id: slugify("Carboxytherapy"), nameKey: "carboxytherapy", categorySlug: AESTHETICS, imageUrl: "/images/Carboxytherapy.png", imageHint: "co2 therapy" },
                { id: slugify("Lipolysis"), nameKey: "lipolysis", categorySlug: AESTHETICS, imageUrl: "/images/Lipolysis.jpeg", imageHint: "fat dissolving injection" },
                { id: slugify("Radiofrequency"), nameKey: "radiofrequency", categorySlug: AESTHETICS, imageUrl: "/images/Radiofrequency.png", imageHint: "skin tightening" }
            ]
        },
        {
            groupNameKey: "plasmaArc",
            services: [
                { id: slugify("Eyelids Plasma Arc"), nameKey: "eyelidsPlasmaArc", categorySlug: AESTHETICS, imageUrl: "/images/Eyelids, plasma arc.png", imageHint: "eyelid plasma treatment" },
                { id: slugify("Xanthelasma Plasma Arc"), nameKey: "xanthelasmaPlasmaArc", categorySlug: AESTHETICS, imageUrl: "/images/Xanthelasma, plasma arc.png", imageHint: "eyelid spot removal" },
                { id: slugify("Plasma Arc Body"), nameKey: "plasmaArcBody", categorySlug: AESTHETICS, imageUrl: "/images/Plasma arc.jpeg", imageHint: "plasma pen body" }
            ]
        },
    ]
  },
  {
    id: DENTISTRY,
    nameKey: "dentistry",
    icon: DentistryIcon,
    serviceGroups: [
        {
            groupNameKey: "aesthetics",
            services: [
                { id: slugify("Teeth Whitening"), nameKey: "teethWhitening", categorySlug: DENTISTRY, imageUrl: "/images/Teeth whitening.png", imageHint: "brighter smile" },
                { id: slugify("Composite Veneers"), nameKey: "compositeVeneers", categorySlug: DENTISTRY, imageUrl: "/images/Composite veneers.png", imageHint: "dental bonding" },
                { id: slugify("E-Max Veneers"), nameKey: "eMaxVeneers", categorySlug: DENTISTRY, imageUrl: "/images/E-Max Veneers.png", imageHint: "porcelain veneers" },
            ]
        },
        {
            groupNameKey: "prosthetics",
            services: [
                { id: slugify("Dental Implants"), nameKey: "dentalImplants", categorySlug: DENTISTRY, imageUrl: "/images/Dental Implants.png", imageHint: "tooth implant" },
                { id: slugify("Dental Bridges"), nameKey: "dentalBridges", categorySlug: DENTISTRY, imageUrl: "/images/Dental Bridges.png", imageHint: "tooth bridge" },
                { id: slugify("Crowns"), nameKey: "crowns", categorySlug: DENTISTRY, imageUrl: "/images/Crowns.png", imageHint: "dental cap" },
                { id: slugify("Dentures"), nameKey: "dentures", categorySlug: DENTISTRY, imageUrl: "/images/Dentures.png", imageHint: "false teeth" },
            ]
        },
        {
            groupNameKey: "orthodontics",
            services: [
                { id: slugify("Invisalign"), nameKey: "invisalign", categorySlug: DENTISTRY, imageUrl: "/images/Invisalign.png", imageHint: "clear aligners" },
                { id: slugify("Fixed Braces"), nameKey: "fixedBraces", categorySlug: DENTISTRY, imageUrl: "/images/Fixed braces.png", imageHint: "metal braces" },
                { id: slugify("Removable Appliances"), nameKey: "removableAppliances", categorySlug: DENTISTRY, imageUrl: "/images/Removable appliances.png", imageHint: "orthodontic retainer" },
            ]
        },
        {
            groupNameKey: "therapy",
            services: [
                { id: slugify("Tartar Cleaning"), nameKey: "tartarCleaning", categorySlug: DENTISTRY, imageUrl: "/images/Tartar cleaning.png", imageHint: "dental hygiene" },
                { id: slugify("Tooth Fillings"), nameKey: "toothFillings", categorySlug: DENTISTRY, imageUrl: "/images/Tooth Fillings.png", imageHint: "cavity filling" },
                { id: slugify("Infected Teeth Treatment"), nameKey: "infectedTeethTreatment", categorySlug: DENTISTRY, imageUrl: "/images/Infected teeth treatment.png", imageHint: "root canal" },
            ]
        },
        {
            groupNameKey: "surgical",
            services: [
                { id: slugify("Tooth Extraction"), nameKey: "toothExtraction", categorySlug: DENTISTRY, imageUrl: "/images/Tooth Extraction.png", imageHint: "pulling tooth" },
                { id: slugify("Apical Resection"), nameKey: "apicalResection", categorySlug: DENTISTRY, imageUrl: "/images/Apical Resection.png", imageHint: "root end surgery" },
            ]
        },
        {
            groupNameKey: "pedodontics",
            services: [
                { id: slugify("Milk Teeth Treatment"), nameKey: "milkTeethTreatment", categorySlug: DENTISTRY, imageUrl: "/images/Milk Teeth Treatment.png", imageHint: "child dentist" },
                { id: slugify("Tooth Fluoridation"), nameKey: "toothFluoridation", categorySlug: DENTISTRY, imageUrl: "/images/Tooth Fluoridation.png", imageHint: "fluoride varnish" },
                { id: slugify("Tooth Sealants"), nameKey: "toothSealants", categorySlug: DENTISTRY, imageUrl: "/images/Tooth Sealants.jpeg", imageHint: "dental sealant" },
            ]
        }
    ]
  },
];

export function getServiceDetails(categorySlug: string, serviceSlug: string) {
  const category = serviceData.find(cat => cat.id === categorySlug);
  if (!category) {
    return null;
  }

  for (const group of category.serviceGroups) {
    const service = group.services.find(serv => serv.id === serviceSlug);
    if (service) {
      return {
        category,
        service,
        group,
      };
    }
  }

  return null;
}

export function getServiceByNameKey(nameKey: string) {
    for (const category of serviceData) {
        for (const group of category.serviceGroups) {
            const service = group.services.find(s => s.nameKey === nameKey);
            if (service) {
                return {
                    category,
                    service,
                    group,
                };
            }
        }
    }
    return null;
}
