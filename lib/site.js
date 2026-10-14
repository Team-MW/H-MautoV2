/**
 * HM AUTO - Configuration & Contenu Centralisé
 * Toutes les données du site, informations client, textes éditoriaux et paramètres de thème
 * sont centralisés dans ce fichier unique. Aucun texte visible n'est codé en dur dans les composants.
 */

export const siteConfig = {
  // Informations administratives & client
  business: {
    name: "HM AUTO",
    legalName: "HM AUTO SARL",
    manager: "Hassan M.",
    slogan: "Atelier & Mécanique Automobile Toutes Marques",
    tagline: "Entretien, révision et diagnostic certifiés",
    phone: "01 43 78 92 10",
    phoneRaw: "+33143789210",
    whatsapp: "+33612345678",
    whatsappLink: "https://wa.me/33612345678",
    email: "contact@hmauto-garage.fr",
    address: {
      street: "142 Avenue de la République",
      postalCode: "93120",
      city: "La Courneuve",
      region: "Île-de-France",
      country: "France",
      full: "142 Avenue de la République, 93120 La Courneuve",
    },
    geo: {
      latitude: 48.9248,
      longitude: 2.3982,
    },
    googleMapsUrl: "https://maps.google.com/?q=142+Avenue+de+la+R%C3%A9publique+93120+La+Courneuve",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5735160898517!2d2.3956250769411964!3d48.92480007134185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c61f2249e91%3A0xb35359a35b0d0611!2s142%20Av.%20de%20la%20R%C3%A9publique%2C%2093120%20La%20Courneuve!5e0!3m2!1sfr!2sfr!4v1713100000000!5m2!1sfr!2sfr",
    logo: {
      src: "/images/logo.svg",
      alt: "HM AUTO - Garage et Atelier de réparation automobile",
      width: 210,
      height: 48,
    },
    hours: [
      { days: "Lundi au Vendredi", hours: "08:00 – 12:00 | 14:00 – 19:00", open: true },
      { days: "Samedi", hours: "08:30 – 13:00", open: true },
      { days: "Dimanche", hours: "Fermé", open: false },
    ],
    hoursSummary: "Lun - Ven : 8h00 - 19h00 | Sam : 8h30 - 13h00",
  },

  // Activation / désactivation des sections facultatives
  sectionsVisibility: {
    emergency: true,
    services: true,
    appointment: true,
    whyUs: true,
    reviews: true,
    contactLocation: true,
    mobileCallBar: true,
  },

  // Variables de thème (reflétant fidèlement la maquette de référence)
  theme: {
    colors: {
      primary: "#1e56ed",          // Bleu électrique cobalt (boutons d'action, accents graphiques)
      primaryHover: "#1746c2",
      primarySoft: "#eff4ff",
      darkBg: "#0d0f12",           // Noir profond du Hero & de la Navbar
      darkSurface: "#15181e",
      lightBg: "#ffffff",          // Fond blanc épuré des sections de contenu
      lightSurface: "#f6f8fa",
      textDark: "#0d0f12",
      textMutedDark: "#57606a",
      textLight: "#ffffff",
      textMutedLight: "#9aa0a6",
      borderDark: "#262a33",
      borderLight: "#e1e4e8",
    },
    typography: {
      fontHeading: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    radii: {
      none: "0px",
      sm: "2px",
      base: "4px",
      md: "6px",
    },
  },

  // SEO et métadonnées
  seo: {
    title: "HM AUTO | Garage Automobile & Atelier de Réparation Mécanique",
    description: "Atelier de mécanique automobile toutes marques à La Courneuve : entretien, révision constructeur, freinage, diagnostic électronique et réparations. Devis transparent et prise de rendez-vous rapide.",
    keywords: ["garage automobile", "réparation auto", "mécanique", "révision voiture", "freinage", "diagnostic électronique", "La Courneuve", "HM AUTO"],
    locale: "fr_FR",
    siteUrl: "https://hmauto-garage.fr",
  },

  // Barre de navigation (Navbar)
  navbar: {
    homeLabel: "Accueil",
    navLinks: [
      { label: "Accueil", href: "#hero" },
      { label: "Services", href: "#services" },
      { label: "Pourquoi nous", href: "#engagements" },
      { label: "Rendez-vous", href: "#rendez-vous" },
      { label: "Avis", href: "#avis" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: {
      label: "Prendre RDV",
      href: "#rendez-vous",
    },
    phoneButton: {
      label: "Appeler",
      ariaLabel: "Appeler le garage au 01 43 78 92 10",
    },
    menuOpenLabel: "Ouvrir le menu de navigation",
    menuCloseLabel: "Fermer le menu de navigation",
  },

  // Section Hero (Fidèle à la composition sombre de l'image de référence)
  hero: {
    eyebrow: "RÉPARATION & ENTRETIEN AUTOMOBILE",
    headline: "ENTRETIEN, RÉVISION ET RÉPARATION TOUTES MARQUES",
    description: "Mécanique générale, diagnostic électronique de précision et interventions garanties constructeur. Chez HM AUTO, nous allions rigueur technique et transparence pour assurer la longévité de votre véhicule.",
    ctaPrimary: {
      label: "Prendre rendez-vous",
      href: "#rendez-vous",
    },
    ctaSecondary: {
      label: "Voir nos services",
      href: "#services",
    },
    image: {
      src: "/images/hero_car.jpg",
      alt: "Véhicule sportif moderne dans l'atelier mécanique HM AUTO avec éclairage studio",
      width: 1200,
      height: 675,
    },
    badges: [
      { text: "Garantie constructeur préservée" },
      { text: "Pièces certifiées d'origine" },
      { text: "Devis clair avant intervention" },
    ],
  },

  // Section Dépannage & Prise en charge urgente (sobre, honnête et sans fausses promesses)
  emergency: {
    eyebrow: "ASSISTANCE ATELIER",
    title: "Voyant allumé, bruit suspect ou panne mécanique ?",
    description: "Passez directement à notre atelier ou contactez-nous par téléphone durant nos horaires d'ouverture. Nous réalisons un pré-diagnostic rapide pour sécuriser votre véhicule sans délai inutile.",
    phoneLabel: "Appeler l'atelier : 01 43 78 92 10",
    scheduleNotice: "Prise en charge du Lundi au Vendredi dès 08h00 et Samedi matin",
    ctaWhatsappLabel: "Message d'urgence WhatsApp",
  },

  // Section Services (Fidèle aux blocs 01, 02, etc. de la référence)
  services: {
    eyebrow: "NOS PRESTATIONS",
    title: "UN SPECTRE COMPLET DE SERVICES MÉCANIQUES",
    description: "Des interventions courantes d'entretien aux opérations de mécanique lourde, nous prenons en charge toutes les marques selon les préconisations des constructeurs.",
    ctaCardLabel: "Prendre RDV pour ce service",
    ctaSectionPrimary: {
      label: "Prendre rendez-vous",
      href: "#rendez-vous",
    },
    ctaSectionSecondary: {
      label: "Contacter l'atelier",
      href: "#contact",
    },
    items: [
      {
        id: "revision",
        number: "01",
        title: "RÉVISION & ENTRETIEN",
        description: "Vidange moteur aux normes constructeur, remplacement des filtres (huile, air, carburant, habitacle) et contrôle complet de sécurité sur 40 points essentiels.",
        image: {
          src: "/images/service_revision.jpg",
          alt: "Opération de vidange et contrôle des fluides moteur en atelier",
        },
        tags: ["Vidange homologuée", "Garantie préservée", "40 points de contrôle"],
      },
      {
        id: "mecanique",
        number: "02",
        title: "MÉCANIQUE GÉNÉRALE",
        description: "Distribution, embrayage, amortisseurs, suspension, échappement et circuit de refroidissement. Des réparations fiables avec des pièces d'équipementiers certifiés.",
        image: {
          src: "/images/service_engine.jpg",
          alt: "Compartiment moteur et courroies de distribution en atelier de mécanique",
        },
        tags: ["Courroie & chaîne", "Embrayage", "Train roulant"],
      },
      {
        id: "freinage",
        number: "03",
        title: "FREINAGE & SÉCURITÉ",
        description: "Diagnostic de l'usure, remplacement des plaquettes, disques, liquide de frein et purge du circuit hydraulique pour une sécurité de conduite irréprochable.",
        image: {
          src: "/images/service_brakes.jpg",
          alt: "Gros plan sur un disque de frein ventilé et étrier dans le garage",
        },
        tags: ["Plaquettes & disques", "Purge liquide", "Contrôle ABS/ESP"],
      },
      {
        id: "diagnostic",
        number: "04",
        title: "DIAGNOSTIC ÉLECTRONIQUE",
        description: "Lecture et analyse des calculateurs avec valise multimarque dernière génération : détection de pannes d'injection, voyant moteur, FAP et réinitialisation.",
        image: {
          src: "/images/service_diagnostic.jpg",
          alt: "Valise de diagnostic électronique connectée à la prise OBD d'un véhicule",
        },
        tags: ["Valise multimarque", "Voyant moteur", "Capteurs & FAP"],
      },
    ],
  },

  // Section Pourquoi nous choisir / Engagements (avec le visuel biseauté inspiré de la maquette)
  whyUs: {
    eyebrow: "POURQUOI NOUS CHOISIR ?",
    title: "NOS ENGAGEMENTS POUR VOTRE VÉHICULE",
    leadParagraph: "Confier votre voiture à HM AUTO, c'est choisir un interlocuteur dédié, des méthodes rigoureuses et une totale clarté sur chaque devis et chaque intervention.",
    image: {
      src: "/images/mechanic_lift.jpg",
      alt: "Mécanicien qualifié inspectant sous un véhicule levé sur pont élévateur",
      width: 600,
      height: 800,
    },
    commitments: [
      {
        title: "Réactivité & Délais tenus",
        description: "Nous respectons les horaires de dépôt et de restitution convenus pour ne pas perturber votre quotidien.",
      },
      {
        title: "Travail soigné & Pièces garanties",
        description: "Chaque pièce posée répond aux normes des constructeurs et bénéficie de la garantie fabricant.",
      },
      {
        title: "Accueil humain & Conseils clairs",
        description: "Nous prenons le temps de vous expliquer simplement ce qui doit être fait sans jargon technique.",
      },
      {
        title: "Transparence tarifaire absolue",
        description: "Devis détaillé et sans surprise : aucun travail supplémentaire n'est entrepris sans votre accord explicite préalable.",
      },
    ],
    ctaButton: {
      label: "Demander un rendez-vous",
      href: "#rendez-vous",
    },
  },

  // Section Demande de Rendez-vous (Formulaire interactif avec redirection WhatsApp & téléphone)
  appointment: {
    eyebrow: "PLANIFIER UNE VISITE",
    title: "DEMANDER UN RENDEZ-VOUS À L'ATELIER",
    description: "Remplissez ce formulaire pour préparer votre demande. Vos souhaits de date et créneau seront vérifiés par notre équipe et confirmés par message ou téléphone.",
    notice: "Note : Cette demande est indicative. Votre rendez-vous sera définitivement confirmé par le garage avant votre venue.",
    fields: {
      service: {
        label: "Prestation souhaitée",
        placeholder: "Sélectionnez votre prestation",
        options: [
          { value: "revision", label: "Révision & Vidange complète" },
          { value: "freinage", label: "Freinage (plaquettes / disques)" },
          { value: "mecanique", label: "Mécanique générale (distribution, embrayage...)" },
          { value: "diagnostic", label: "Diagnostic électronique / Recherche de panne" },
          { value: "climatisation", label: "Climatisation (recharge / contrôle)" },
          { value: "pneumatiques", label: "Pneumatiques & Géométrie" },
          { value: "autre", label: "Autre intervention / Devis spécifique" },
        ],
      },
      vehicle: {
        label: "Véhicule (Marque, modèle ou immatriculation)",
        placeholder: "Ex : Renault Clio V ou AA-123-BB",
      },
      date: {
        label: "Date souhaitée",
      },
      slot: {
        label: "Créneau préféré",
        options: [
          { value: "matin", label: "Matin (08h00 - 12h00)" },
          { value: "apres-midi", label: "Après-midi (14h00 - 18h30)" },
          { value: "indifferent", label: "Indifférent / Premier créneau disponible" },
        ],
      },
      name: {
        label: "Votre nom et prénom",
        placeholder: "Ex : Jean Dupont",
      },
      phone: {
        label: "Numéro de téléphone",
        placeholder: "Ex : 06 12 34 56 78",
      },
      comments: {
        label: "Précisions ou description du problème (facultatif)",
        placeholder: "Précisez un éventuel bruit, voyant allumé ou kilométrage actuel...",
      },
    },
    submitButton: {
      label: "Envoyer ma demande via WhatsApp",
    },
    phoneAlternative: {
      text: "Vous préférez un échange direct par téléphone ?",
      label: "Appeler au 01 43 78 92 10",
    },
    messages: {
      errorRequired: "Veuillez remplir tous les champs obligatoires (prestation, véhicule, date, nom et téléphone).",
      preparedSuccess: "Votre demande est prête ! Cliquez ci-dessous pour transmettre le récapitulatif directement sur notre WhatsApp officiel.",
      openWhatsappButton: "Ouvrir WhatsApp pour confirmer",
      copySuccess: "Message copié dans le presse-papier !",
    },
  },

  // Section Avis Clients (Google Maps)
  reviews: {
    eyebrow: "RETROURS D'EXPÉRIENCE",
    title: "LA SATISFACTION DE NOS CLIENTS",
    description: "Découvrez les avis authentiques laissés par les automobilistes qui nous confient régulièrement leurs véhicules.",
    ratingScore: "4.9",
    ratingMax: "5",
    totalReviews: "148 avis",
    googleBadgeLabel: "Note Google certifiée",
    googleLink: "https://maps.google.com/?q=142+Avenue+de+la+R%C3%A9publique+93120+La+Courneuve",
    googleLinkLabel: "Consulter tous nos avis sur Google Maps",
    items: [
      {
        author: "Karim B.",
        date: "Il y a 3 semaines",
        rating: 5,
        vehicle: "Peugeot 3008",
        comment: "Remplacement du kit de distribution et révision complète. Accueil très pro, devis respecté à l'euro près et véhicule rendu nettoyé et à l'heure convenue.",
      },
      {
        author: "Sophie M.",
        date: "Il y a 1 mois",
        rating: 5,
        vehicle: "Volkswagen Golf VII",
        comment: "Voyant moteur allumé sur l'autoroute. Prise en charge le jour même pour le diagnostic, explications limpides sans forcer à la dépense. Je recommande sans hésiter.",
      },
      {
        author: "David L.",
        date: "Il y a 2 mois",
        rating: 5,
        vehicle: "Toyota Yaris Hybride",
        comment: "Changement disques et plaquettes avant. Travail impeccable, équipe courtoise et tarif bien plus juste que chez le concessionnaire de la marque.",
      },
    ],
  },

  // Section Contact & Localisation
  contactLocation: {
    eyebrow: "ACCÈS & HORAIRES",
    title: "NOUS TROUVER À LA COURNEUVE",
    description: "Notre atelier vous accueille du lundi au samedi. Situé sur un axe facilement accessible, avec parking réservé à notre clientèle.",
    addressTitle: "Adresse de l'atelier",
    hoursTitle: "Horaires d'ouverture",
    contactTitle: "Coordonnées directes",
    itineraryButtonLabel: "Calculer mon itinéraire Google Maps",
    phoneCallLabel: "Appeler l'atelier",
    mapAriaLabel: "Carte interactive de l'emplacement du garage HM AUTO",
  },

  // Barre d'appel mobile discrète
  mobileCallBar: {
    callLabel: "Appeler",
    whatsappLabel: "WhatsApp",
    appointmentLabel: "Rendez-vous",
    appointmentHref: "#rendez-vous",
  },

  // Footer & mentions légales
  footer: {
    garageName: "HM AUTO",
    description: "Atelier de mécanique et de réparation automobile toutes marques. Entretien courant, révisions constructeur, freinage et diagnostic à La Courneuve.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Prestations",
    contactTitle: "Atelier",
    copyright: "© 2026 HM AUTO. Tous droits réservés.",
    legalNotice: "Les données collectées via le formulaire servent uniquement au traitement de votre demande de rendez-vous et ne sont jamais cédées à des tiers.",
    madeBy: "Site vitrine professionnel HM AUTO",
  },
};
