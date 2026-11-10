
import { Timestamp } from 'firebase/firestore';

export const testimonials = [
  {
    id: 1,
    name: 'Jessica M.',
    location: 'New York, USA',
    avatar: 'testimonial-1',
    comment:
      "My experience at Kira Aesthetic was absolutely wonderful. The staff is incredibly professional and caring. I'm thrilled with my results and feel more confident than ever!",
  },
  {
    id: 2,
    name: 'Elena S.',
    location: 'Rome, Italy',
    avatar: 'testimonial-2',
    comment:
      'From the consultation to the final result, every step was handled with utmost precision and care. The dental team gave me the smile I always dreamed of. Highly recommended!',
  },
  {
    id: 3,
    name: 'Markus T.',
    location: 'Berlin, Germany',
    avatar: 'testimonial-3',
    comment:
      'I chose Kira for a hair transplant procedure and the results are beyond my expectations. The clinic is modern, and the team made me feel comfortable throughout the process.',
  },
  {
    id: 4,
    name: 'Sophie L.',
    location: 'London, UK',
    avatar: 'testimonial-4',
    comment:
      "The attention to detail in my bespoke skincare plan was life-changing. My skin hasn't looked this radiant in years. Truly a five-star experience.",
  },
  {
    id: 5,
    name: 'Alessandro P.',
    location: 'Milan, Italy',
    avatar: 'testimonial-5',
    comment:
      "A collective of true masters. The results of my procedure are so natural that even my closest friends just think I look well-rested. Exceptional artistry.",
  },
  {
    id: 6,
    name: 'Maria G.',
    location: 'Madrid, Spain',
    avatar: 'testimonial-6',
    comment:
      "I felt completely heard and understood from day one. The clinic's sanctuary-like atmosphere made the whole journey incredibly peaceful and rewarding.",
  },
];

export const faqs = [];

export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    author: string;
    date: string; // YYYY-MM-DD
    image: string;
    excerpt: string;
    content: string;
    language: string;
    keywords?: string;
    createdAt?: Timestamp;
};

export const sampleBlogPosts: Omit<BlogPost, 'id' | 'createdAt'>[] = [
  {
    slug: 'facial-harmony-and-surgical-safety',
    title: 'Facial Harmony and Surgical Safety: A Clinical Guide',
    author: 'Kira Aesthetic Clinical Team',
    date: new Date().toISOString().split('T')[0],
    image: '', 
    excerpt: 'An in-depth look at classical nasal profiles like the Greek and Roman nose, and essential post-operative safety protocols including surgical drainage management.',
    language: 'en',
    keywords: 'Greek nose, Roman nose, surgical drainage, surgical drainage complication, can pulmonary embolism be cured',
    content: `
# Facial Harmony and Surgical Safety: A Clinical Guide

At Kira Aesthetic, we believe that true beauty is born from the intersection of classical art and modern medical safety. This guide explores the aesthetic standards of nasal profiles and the rigorous safety protocols we implement for every patient.

## Defining the Profile: Greek Nose vs. Roman Nose

When discussing rhinoplasty, two classical profiles often serve as the foundation for aesthetic planning:

1. **The Greek Nose**: Characterized by a perfectly straight bridge from the forehead to the tip. The **Greek nose** represents a standard of balance and mathematical proportion found in classical sculpture.
2. **The Roman Nose**: Also known as the aquiline nose, the **Roman nose** features a prominent bridge with a slight curve. It is a profile that conveys strength and character, which many patients choose to refine rather than completely change.

Our goal is to harmonize these classical archetypes with your unique facial structure.

## Ensuring Post-Operative Safety

The success of any transformation depends on the quality of recovery. Our clinical team prioritizes safety through advanced techniques and constant monitoring.

### The Role of Surgical Drainage

For many procedures, such as abdominoplasty or breast reconstruction, we utilize **surgical drainage**. A **surgical drainage** system is essential for removing excess fluids from the surgical site, reducing tension on the skin and promoting faster healing.

While our team monitors you closely to prevent any **surgical drainage complication**, such as a minor blockage, these tools are vital for a smooth recovery.

### Addressing Major Complications

We are often asked, "**can pulmonary embolism be cured**?" In the rare event of such a complication, the answer is a definitive yes. Through our protocols of early mobilization, compression therapy, and immediate medical intervention, we ensure that risks are minimized and managed with the highest level of professional care.

Your safety is our silent oath, and your beauty is our craft.
    `
  },
  {
    slug: 'armonia-facciale-e-sicurezza-chirurgica',
    title: 'Armonia Facciale e Sicurezza Chirurgica: Una Guida Clinica',
    author: 'Team Clinico Kira Aesthetic',
    date: new Date().toISOString().split('T')[0],
    image: '', 
    excerpt: 'Un approfondimento sui profili nasali classici come il naso alla greca e alla romana, e i protocolli essenziali di sicurezza post-operatoria come il drenaggio chirurgico.',
    language: 'it',
    keywords: 'naso alla greca, naso alla romana, drenaggio chirurgico, complicazione drenaggio chirurgico, embolia polmonare si guarisce',
    content: `
# Armonia Facciale e Sicurezza Chirurgica: Una Guida Clinica

In Kira Aesthetic, crediamo che la vera bellezza nasca dall'incontro tra arte classica e moderna sicurezza medica. Questa guida esplora gli standard estetici dei profili nasali e i rigorosi protocolli di sicurezza che implementiamo per ogni paziente.

## Definire il Profilo: Naso alla Greca vs. Naso alla Romana

Nella pianificazione di una rinoplastica, due profili classici servono spesso come base per il disegno estetico:

1. **Il Naso alla Greca**: Caratterizzato da un ponte perfettamente dritto dalla fronte alla punta. Il **naso alla greca** rappresenta uno standard di equilibrio e proporzione matematica tipico della scultura classica.
2. **Il Naso alla Romana**: Caratterizzato da un ponte prominente con una leggera curva. Il **naso alla romana** è un profilo che comunica forza e carattere, che molti pazienti scelgono di affinare senza stravolgere la propria identità.

Il nostro obiettivo è armonizzare questi archetipi classici con la vostra struttura facciale unica.

## Garantire la Sicurezza Post-Operatoria

Il successo di ogni trasformazione dipende dalla qualità del recupero. Il nostro team clinico dà priorità alla sicurezza attraverso tecniche avanzate e monitoraggio costante.

### Il Ruolo del Drenaggio Chirurgico

Per molte procedure utilizziamo il **drenaggio chirurgico**. Il sistema di **drenaggio chirurgico** è essenziale per rimuovere i liquidi in eccesso dal sito operatorio, riducendo la tensione sulla pelle e favorendo una guarigione più rapida.

Sebbene il nostro team monitori costantemente per prevenire ogni possibile **complicazione drenaggio chirurgico**, come una piccola ostruzione, questi strumenti sono vitali per un recupero senza intoppi.

### Affrontare le Complicazioni Maggiori

Spesso ci viene chiesto: "**embolia polmonare si guarisce**?" Nel raro caso di una tale complicazione, la risposta è un sì definitivo. Attraverso i nostri protocolli di mobilizzazione precoce, terapia compressiva e intervento medico immediato, garantiamo che i rischi siano minimizzati e gestiti con il massimo livello di cura professionale.

La vostra sicurezza è il nostro giuramento silenzioso, e la vostra bellezza è la nostra arte.
    `
  }
];
