/**
 * HM AUTO 24 (Bergerac) - Configuration & Contenu Centralisé
 * Toutes les données du site, informations client réelles, textes éditoriaux et paramètres de thème.
 * Tout composant consomme ce fichier unique.
 */

export const siteConfig = {
  // Informations administratives & client réelles
  business: {
    name: "HM Auto 24",
    legalName: "HM Auto 24",
    manager: "Atelier HM Auto 24",
    slogan: "Mécanique Générale & Diagnostic Immédiat à Bergerac",
    tagline: "Réactivité, sérieux et déplacement à domicile",
    phone: "07 83 23 28 35",
    phoneRaw: "+33783232835",
    whatsapp: "+33783232835",
    whatsappLink: "https://wa.me/33783232835",
    email: "contact@hmauto24.fr",
    address: {
      street: "39 Route Pierre Pinson",
      postalCode: "24100",
      city: "Bergerac",
      region: "Dordogne (24)",
      country: "France",
      full: "39 Route Pierre Pinson, 24100 Bergerac",
    },
    geo: {
      latitude: 44.8537,
      longitude: 0.4842,
    },
    googleMapsUrl: "https://maps.google.com/?q=39+Route+Pierre+Pinson+24100+Bergerac",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=39+Route+Pierre+Pinson+24100+Bergerac&t=&z=14&ie=UTF8&iwloc=&output=embed",
    logo: {
      src: "/images/logo.svg",
      alt: "HM Auto 24 - Garage et Atelier Mécanique à Bergerac",
      width: 220,
      height: 48,
    },
    hours: [
      { days: "Lundi au Vendredi", hours: "09:00 – 19:00", open: true },
      { days: "Samedi", hours: "09:00 – 14:00", open: true },
      { days: "Dimanche", hours: "Fermé", open: false },
    ],
    hoursSummary: "Lun - Ven : 09h00 - 19h00 | Sam : 09h00 - 14h00",
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
      primary: "#1e56ed",          // Bleu électrique cobalt
      primaryHover: "#1746c2",
      primarySoft: "#eff4ff",
      darkBg: "#0d0f12",           // Noir profond du Hero & de la Navbar
      darkSurface: "#15181e",
      lightBg: "#ffffff",          // Fond blanc pur des sections
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
    title: "HM Auto 24 | Garage & Mécanique Générale à Bergerac (24)",
    description: "Garage automobile HM Auto 24 à Bergerac : mécanique générale, diagnostic électronique immédiat sans attente, entretien courant et déplacement à domicile pour dépannage léger. 07 83 23 28 35.",
    keywords: ["HM Auto 24", "garage Bergerac", "mécanique Bergerac", "diagnostic voiture Bergerac", "dépannage batterie Bergerac", "réparation auto 24"],
    locale: "fr_FR",
    siteUrl: "https://hmauto24.fr",
  },

  // Barre de navigation (Navbar)
  navbar: {
    homeLabel: "Accueil",
    navLinks: [
      { label: "Accueil", href: "#hero" },
      { label: "Prestations", href: "#services" },
      { label: "Pourquoi nous", href: "#engagements" },
      { label: "Rendez-vous", href: "#rendez-vous" },
      { label: "Avis (5/5)", href: "#avis" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: {
      label: "Prendre RDV",
      href: "#rendez-vous",
    },
    phoneButton: {
      label: "Appeler",
      ariaLabel: "Appeler le garage HM Auto 24 au 07 83 23 28 35",
    },
    menuOpenLabel: "Ouvrir le menu de navigation",
    menuCloseLabel: "Fermer le menu de navigation",
  },

  // Section Hero (Fidèle à la composition sombre de l'image de référence)
  hero: {
    eyebrow: "GARAGE AUTOMOBILE À BERGERAC (24)",
    headline: "MÉCANIQUE GÉNÉRALE & DIAGNOSTIC IMMÉDIAT",
    description: "Votre atelier de proximité à Bergerac. Diagnostic électronique sans délai d'attente, réparations soignées toutes marques et possibilité de déplacement à domicile pour dépannage léger.",
    ctaPrimary: {
      label: "Demander un rendez-vous",
      href: "#rendez-vous",
    },
    ctaSecondary: {
      label: "Découvrir nos prestations",
      href: "#services",
    },
    image: {
      src: "/images/hero_car.jpg",
      alt: "Véhicule moderne dans l'atelier HM Auto 24 à Bergerac",
      width: 1200,
      height: 675,
    },
    badges: [
      { text: "Diagnostic immédiat sans attente" },
      { text: "Déplacement à domicile possible" },
      { text: "Note 5/5 sur Google" },
    ],
  },

  // Section Dépannage & Prise en charge urgente (sobre, honnête et concrète)
  emergency: {
    eyebrow: "BESOIN D'UNE INTERVENTION RAPIDE ?",
    title: "Voyant moteur allumé ou batterie à plat à Bergerac ?",
    description: "Contactez directement l'atelier au 07 83 23 28 35. Nous passons votre véhicule au diagnostic sans vous faire attendre une semaine et intervenons à domicile si votre véhicule ne démarre pas.",
    phoneLabel: "Appeler directement : 07 83 23 28 35",
    scheduleNotice: "Atelier ouvert dès 09h00 du Lundi au Samedi",
    ctaWhatsappLabel: "Message rapide WhatsApp",
  },

  // Section Services (Fidèle aux blocs 01, 02, etc. de la référence)
  services: {
    eyebrow: "NOS PRESTATIONS",
    title: "UN SERVICE COMPLET, RAPIDE ET MINUTIEUX",
    description: "Un mécanicien consciencieux à votre écoute pour entretenir et réparer votre véhicule au juste prix, sans pousser à la dépense.",
    ctaCardLabel: "Prendre RDV pour ce service",
    ctaSectionPrimary: {
      label: "Prendre un rendez-vous",
      href: "#rendez-vous",
    },
    ctaSectionSecondary: {
      label: "Contacter l'atelier",
      href: "#contact",
    },
    items: [
      {
        id: "diagnostic",
        number: "01",
        title: "DIAGNOSTIC IMMÉDIAT",
        description: "Alors que d'autres imposent plusieurs jours d'attente, nous branchons la valise électronique immédiatement pour identifier le code défaut, analyser la panne et vous conseiller.",
        image: {
          src: "/images/service_diagnostic.jpg",
          alt: "Valise de diagnostic électronique multimarque connectée au véhicule",
        },
        tags: ["Sans délai d'attente", "Lecture défauts", "Toutes marques"],
      },
      {
        id: "mecanique",
        number: "02",
        title: "MÉCANIQUE GÉNÉRALE",
        description: "Kit de distribution, embrayage, démarreur, amortisseurs, roulements et échappement. Interventions rigoureuses avec des pièces fiables et garanties.",
        image: {
          src: "/images/service_engine.jpg",
          alt: "Compartiment moteur et travaux de mécanique générale chez HM Auto 24",
        },
        tags: ["Distribution", "Embrayage", "Suspensions"],
      },
      {
        id: "domicile",
        number: "03",
        title: "DÉPLACEMENT À DOMICILE",
        description: "Véhicule bloqué chez vous ? Nous pouvons nous déplacer directement à votre domicile ou sur votre lieu de travail pour poser une batterie neuve ou un dépannage léger.",
        image: {
          src: "/images/service_revision.jpg",
          alt: "Intervention mécanique rapide et pose de batterie",
        },
        tags: ["Pose batterie", "Dépannage léger", "Secteur Bergerac"],
      },
      {
        id: "freinage-revision",
        number: "04",
        title: "RÉVISION & FREINAGE",
        description: "Vidange aux normes constructeur, filtres neufs, contrôle des disques et plaquettes pour rouler l'esprit tranquille avec un budget maîtrisé.",
        image: {
          src: "/images/service_brakes.jpg",
          alt: "Contrôle et remplacement des freins chez HM Auto 24",
        },
        tags: ["Vidange & filtres", "Disques & plaquettes", "Sécurité"],
      },
    ],
  },

  // Section Pourquoi nous choisir / Engagements (avec le visuel géométrique de la maquette)
  whyUs: {
    eyebrow: "POURQUOI CHOISIR HM AUTO 24 ?",
    title: "UN PROFESSIONNEL SÉRIEUX ET MINUTIEUX À BERGERAC",
    leadParagraph: "Tout juste lancé à Bergerac, l'atelier HM Auto 24 mise sur une proximité authentique, une réactivité exemplaire et un travail soigné qui fait déjà l'unanimité auprès des premiers clients.",
    image: {
      src: "/images/mechanic_lift.jpg",
      alt: "Mécanicien minutieux au travail chez HM Auto 24",
      width: 600,
      height: 800,
    },
    commitments: [
      {
        title: "Diagnostic sans attente",
        description: "Inutile d'attendre une semaine pour savoir ce qu'a votre voiture : nous analysons les voyants et pannes sans délai.",
      },
      {
        title: "Déplacement sur place possible",
        description: "Batterie à plat ou petite intervention urgente : nous venons jusqu'à chez vous pour vous éviter le remorquage.",
      },
      {
        title: "Travail minutieux & sérieux",
        description: "Chaque intervention est réalisée avec soin, propreté et souci du détail mécanique bien fait.",
      },
      {
        title: "Tarifs clairs & budget respecté",
        description: "Un devis honnête et transparent, sans surcoût imprévu ni remplacement de pièces inutiles.",
      },
    ],
    ctaButton: {
      label: "Demander un rendez-vous",
      href: "#rendez-vous",
    },
  },

  // Section Demande de Rendez-vous (Formulaire interactif avec redirection WhatsApp & téléphone)
  appointment: {
    eyebrow: "PRISE DE CONTACT SIMPLE",
    title: "DEMANDER UN RENDEZ-VOUS OU UN DEVIS",
    description: "Indiquez votre véhicule et vos disponibilités souhaitées. Nous vous recontactons immédiatement pour valider la prise en charge à l'atelier ou à domicile.",
    notice: "Note : La date et le créneau sont indicatifs et seront confirmés par téléphone ou WhatsApp.",
    fields: {
      service: {
        label: "Prestation souhaitée",
        placeholder: "Sélectionnez votre prestation",
        options: [
          { value: "diagnostic", label: "Diagnostic immédiat (voyant moteur, panne)" },
          { value: "mecanique", label: "Mécanique générale (distribution, embrayage...)" },
          { value: "domicile", label: "Déplacement à domicile (batterie, dépannage léger)" },
          { value: "revision", label: "Révision & Vidange complète" },
          { value: "freinage", label: "Freinage (plaquettes / disques)" },
          { value: "autre", label: "Autre demande / Devis sur-mesure" },
        ],
      },
      vehicle: {
        label: "Votre véhicule (Marque / Modèle)",
        placeholder: "Ex : Renault Clio, Peugeot 208, Golf...",
      },
      date: {
        label: "Date souhaitée",
      },
      slot: {
        label: "Créneau préféré",
        options: [
          { value: "matin", label: "Matin (09h00 - 12h30)" },
          { value: "apres-midi", label: "Après-midi (14h00 - 19h00)" },
          { value: "indifferent", label: "Premier créneau disponible" },
        ],
      },
      name: {
        label: "Votre nom et prénom",
        placeholder: "Ex : Thomas Martin",
      },
      phone: {
        label: "Numéro de téléphone",
        placeholder: "Ex : 06 00 00 00 00",
      },
      comments: {
        label: "Précisions sur votre panne ou votre besoin (facultatif)",
        placeholder: "Ex : bruit au freinage, batterie à changer à domicile, voyant moteur orange...",
      },
    },
    submitButton: {
      label: "Envoyer ma demande par WhatsApp",
    },
    phoneAlternative: {
      text: "Besoin d'une réponse immédiate par téléphone ?",
      label: "Appeler le 07 83 23 28 35",
    },
    messages: {
      errorRequired: "Merci d'indiquer votre prestation, votre véhicule, la date souhaitée, votre nom et votre numéro de téléphone.",
      preparedSuccess: "Votre demande est prête ! Cliquez ci-dessous pour l'envoyer directement au mécanicien sur WhatsApp.",
      openWhatsappButton: "Ouvrir WhatsApp pour confirmer",
      copySuccess: "Message copié dans le presse-papier !",
    },
  },

  // Section Avis Clients réels (Google 5/5 avec 7 avis)
  reviews: {
    eyebrow: "RETROURS CLIENTS VÉRIFIÉS",
    title: "100% DE SATISFACTION SUR GOOGLE",
    description: "Les premiers clients de HM Auto 24 témoignent de la réactivité, du sérieux et de la minutie de l'atelier.",
    ratingScore: "5.0",
    ratingMax: "5",
    totalReviews: "7 avis Google",
    googleBadgeLabel: "Note Google certifiée",
    googleLink: "https://maps.google.com/?q=39+Route+Pierre+Pinson+24100+Bergerac",
    googleLinkLabel: "Voir la fiche Google de l'atelier",
    items: [
      {
        author: "Client Google",
        date: "Récemment",
        rating: 5,
        vehicle: "Intervention à domicile",
        comment: "Excellent mécanicien, très réactif ! Il s'est déplacé directement à mon domicile pour poser une batterie neuve alors que j'étais bloqué. Sérieux et ponctuel.",
      },
      {
        author: "Client Bergerac",
        date: "Récemment",
        rating: 5,
        vehicle: "Diagnostic moteur",
        comment: "Diagnostic fait immédiatement alors que les autres garages me demandaient d'attendre plus d'une semaine. Panne identifiée et réparée rapidement avec un tarif très raisonnable.",
      },
      {
        author: "Automobiliste 24",
        date: "Récemment",
        rating: 5,
        vehicle: "Mécanique & Entretien",
        comment: "Travail minutieux, mécanicien passionné et de bon conseil. C'est rare de trouver quelqu'un d'aussi sérieux et honnête sur les devis. Je recommande HM Auto 24 les yeux fermés.",
      },
    ],
  },

  // Section Contact & Localisation
  contactLocation: {
    eyebrow: "ACCÈS & COORDONNÉES",
    title: "ATELIER HM AUTO 24 À BERGERAC",
    description: "Situé 39 Route Pierre Pinson à Bergerac. Nous vous accueillons du lundi au vendredi de 9h à 19h et le samedi matin jusqu'à 14h.",
    addressTitle: "Adresse de l'atelier",
    hoursTitle: "Horaires d'ouverture",
    contactTitle: "Contact direct & Devis",
    itineraryButtonLabel: "Ouvrir l'itinéraire Google Maps",
    phoneCallLabel: "Appeler au 07 83 23 28 35",
    mapAriaLabel: "Plan d'accès au garage HM Auto 24 à Bergerac",
  },

  // Barre d'appel mobile discrète
  mobileCallBar: {
    callLabel: "Appeler",
    whatsappLabel: "WhatsApp",
    appointmentLabel: "Rendez-vous",
    appointmentHref: "#rendez-vous",
  },

  // Footer & mentions
  footer: {
    garageName: "HM Auto 24",
    description: "Atelier de mécanique générale et diagnostic automobile immédiat à Bergerac (24). Dépannage léger et pose de batterie à domicile.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Prestations",
    contactTitle: "Atelier",
    copyright: "© 2026 HM Auto 24. Tous droits réservés.",
    legalNotice: "Les informations transmises sont uniquement utilisées pour traiter votre demande d'intervention.",
    madeBy: "Site vitrine professionnel HM Auto 24",
  },
};
