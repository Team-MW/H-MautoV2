/**
 * HM AUTO 24 (Bergerac) - Configuration & Contenu Centralisé
 * Toutes les données du site, informations client réelles, 2 numéros de téléphone,
 * affiche officielle et thème couleur Jaune Racing (#ffcc00) fidèle à l'affiche.
 */

export const siteConfig = {
  // Informations administratives & client réelles
  business: {
    name: "HM Auto 24",
    legalName: "HM Auto 24",
    manager: "Atelier HM Auto 24",
    slogan: "Mécanique Générale • Vente • Achat • Reprise à Bergerac",
    tagline: "Votre voiture entre de bonnes mains ! Performance, sécurité et fiabilité à petit prix.",
    
    // Les 2 numéros de téléphone officiels (issus de l'affiche)
    phone: "07 83 23 28 35",
    phoneRaw: "+33783232835",
    phoneSecondary: "07 80 54 13 57",
    phoneSecondaryRaw: "+33780541357",
    phones: [
      { id: "line1", label: "Ligne 1", number: "07 83 23 28 35", raw: "+33783232835" },
      { id: "line2", label: "Ligne 2", number: "07 80 54 13 57", raw: "+33780541357" },
    ],

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
    poster: {
      src: "/images/HMautodisign.jpeg",
      alt: "Affiche officielle HM Auto 24 - Vente, Achat, Reprise et Entretien Rapide",
      width: 1920,
      height: 720,
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
    poster: true,          // Section affiche officielle
    services: true,
    appointment: true,
    whyUs: true,
    reviews: true,
    contactLocation: true,
    mobileCallBar: true,
  },

  // Variables de thème (Jaune Racing #ffcc00 extrait fidèlement de l'affiche HM Auto 24)
  theme: {
    colors: {
      primary: "#ffcc00",          // Jaune racing exact de l'affiche
      primaryHover: "#e6b800",
      primarySoft: "#fffbeb",
      primaryGlow: "rgba(255, 204, 0, 0.3)",
      textOnPrimary: "#0d0f12",     // Noir intense pour contraste maximal sur les boutons jaunes
      darkBg: "#0d0f12",           // Noir profond du Hero & de la Navbar
      darkSurface: "#14171d",
      darkCard: "#181d24",
      lightBg: "#ffffff",          // Fond blanc pur des sections
      lightSurface: "#f7f9fb",
      textDark: "#0d0f12",
      textMutedDark: "#57606a",
      textLight: "#ffffff",
      textMutedLight: "#9aa0a6",
      borderDark: "#262a33",
      borderLight: "#e1e4e8",
      accentRed: "#ef4444",        // Touche rouge racing ("RAPIDE")
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
    title: "HM Auto 24 | Garage, Mécanique Générale & Vente Auto à Bergerac",
    description: "Atelier HM Auto 24 à Bergerac (24) : entretien rapide, mécanique générale, diagnostic immédiat, vidange, freinage, suspension, batterie et vente/achat/reprise. Appels directs au 07 83 23 28 35 et 07 80 54 13 57.",
    keywords: ["HM Auto 24", "garage Bergerac", "mécanique Bergerac", "diagnostic voiture Bergerac", "dépannage batterie Bergerac", "achat vente reprise auto Bergerac", "07 83 23 28 35", "07 80 54 13 57"],
    locale: "fr_FR",
    siteUrl: "https://hmauto24.fr",
  },

  // Barre de navigation (Navbar)
  navbar: {
    homeLabel: "Accueil",
    navLinks: [
      { label: "Accueil", href: "#hero" },
      { label: "L'Affiche", href: "#affiche" },
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
      ariaLabel: "Appeler l'atelier HM Auto 24",
    },
    menuOpenLabel: "Ouvrir le menu de navigation",
    menuCloseLabel: "Fermer le menu de navigation",
  },

  // Section Hero
  hero: {
    eyebrow: "ENTRETIEN RAPIDE • VENTE • ACHAT • REPRISE",
    headline: "VOTRE VOITURE ENTRE DE BONNES MAINS À BERGERAC",
    description: "Mécanique générale, diagnostic immédiat sans délai d'attente, pose de batterie à domicile et entretien toutes marques. Performance, sécurité et fiabilité à petit prix.",
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
      { text: "Note 5/5 sur Google (7 avis)" },
    ],
  },

  // Section Affiche officielle (Demandée explicitement par le client)
  posterSection: {
    eyebrow: "ENSEIGNE & IDENTITÉ",
    title: "L'AFFICHE OFFICIELLE DE NOTRE ATELIER",
    lead: "Retrouvez tous nos domaines d'expertise réunis : entretien rapide, mécanique, diagnostic, pose de batterie et transaction de véhicules à Bergerac.",
    image: {
      src: "/images/HMautodisign.jpeg",
      alt: "Affiche officielle HM Auto 24 - Entretien Rapide, Diagnostic, Vidange, Freinage, Suspension, Batterie",
      width: 1920,
      height: 720,
    },
    features: [
      { title: "Diagnostic", desc: "Analyse valise électronique immédiate" },
      { title: "Vidange & Filtres", desc: "Huiles homologuées constructeur" },
      { title: "Freinage", desc: "Plaquettes et disques haute sécurité" },
      { title: "Suspension", desc: "Amortisseurs et tenue de route" },
      { title: "Batterie & Dépannage", desc: "Pose neuve à domicile ou à l'atelier" },
      { title: "Vente • Achat • Reprise", desc: "Transactions sécurisées au juste prix" },
    ],
    ctaCallLine1: "Appeler le 07 83 23 28 35",
    ctaCallLine2: "Appeler le 07 80 54 13 57",
  },

  // Section Dépannage & Prise en charge urgente (2 numéros mis en avant)
  emergency: {
    eyebrow: "BESOIN D'UNE INTERVENTION RAPIDE ?",
    title: "Voyant moteur allumé ou batterie à plat à Bergerac ?",
    description: "Contactez directement nos deux lignes d'atelier. Nous passons votre véhicule au diagnostic immédiatement sans vous faire attendre une semaine et nous déplaçons à domicile si votre véhicule ne démarre plus.",
    phonesNotice: "Nos 2 lignes directes :",
    scheduleNotice: "Atelier ouvert du Lundi au Vendredi dès 09h00 et Samedi matin",
    ctaWhatsappLabel: "Message WhatsApp rapide",
  },

  // Section Services (Fidèle aux blocs 01, 02, etc. avec les prestations de l'affiche)
  services: {
    eyebrow: "NOS PRESTATIONS",
    title: "UN SERVICE COMPLET, RAPIDE ET MINUTIEUX",
    description: "De l'entretien courant aux réparations mécaniques plus lourdes, bénéficiez de prestations soignées au juste prix.",
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
        description: "Alors que les autres garages imposent une semaine de délai, nous branchons la valise électronique sur le champ pour analyser le voyant moteur et localiser la panne.",
        image: {
          src: "/images/service_diagnostic.jpg",
          alt: "Valise de diagnostic électronique multimarque connectée au véhicule",
        },
        tags: ["Sans attente", "Lecture défauts", "Toutes marques"],
      },
      {
        id: "mecanique",
        number: "02",
        title: "MÉCANIQUE GÉNÉRALE & DISTRIBUTION",
        description: "Distribution, embrayage, démarreur, amortisseurs, suspension et échappement. Interventions rigoureuses avec des pièces de qualité d'origine.",
        image: {
          src: "/images/service_engine.jpg",
          alt: "Compartiment moteur et travaux de mécanique chez HM Auto 24",
        },
        tags: ["Distribution", "Embrayage", "Suspension"],
      },
      {
        id: "domicile",
        number: "03",
        title: "BATTERIE & DÉPLACEMENT À DOMICILE",
        description: "Votre voiture ne démarre pas ? Nous nous déplaçons directement chez vous ou sur votre lieu de travail pour poser une batterie neuve et vous éviter un remorquage.",
        image: {
          src: "/images/service_revision.jpg",
          alt: "Intervention rapide et pose de batterie neuve à domicile",
        },
        tags: ["Pose batterie", "Dépannage léger", "Secteur Bergerac"],
      },
      {
        id: "freinage-revision",
        number: "04",
        title: "VIDANGE, FILTRES & FREINAGE",
        description: "Entretien rapide aux normes constructeur : vidange moteur, remplacement des filtres, contrôle minutieux des plaquettes et disques de frein pour votre sécurité.",
        image: {
          src: "/images/service_brakes.jpg",
          alt: "Contrôle et remplacement des freins chez HM Auto 24",
        },
        tags: ["Vidange & filtres", "Disques & plaquettes", "Sécurité"],
      },
    ],
  },

  // Section Pourquoi nous choisir / Engagements
  whyUs: {
    eyebrow: "POURQUOI CHOISIR HM AUTO 24 ?",
    title: "UN PROFESSIONNEL SÉRIEUX, RÉACTIF ET MINUTIEUX",
    leadParagraph: "Tout juste lancé à Bergerac, l'atelier HM Auto 24 mise sur une relation humaine et transparente, une grande réactivité et un travail soigné qui fait déjà l'unanimité auprès des premiers clients.",
    image: {
      src: "/images/mechanic_lift.jpg",
      alt: "Mécanicien minutieux au travail chez HM Auto 24",
      width: 600,
      height: 800,
    },
    commitments: [
      {
        title: "Diagnostic immédiat",
        description: "Inutile d'attendre une semaine pour connaître la cause d'un voyant : nous analysons votre panne dès votre arrivée.",
      },
      {
        title: "Déplacement sur place possible",
        description: "Batterie à plat ou petite intervention urgente : nous venons jusqu'à votre domicile sur le secteur de Bergerac.",
      },
      {
        title: "Travail minutieux & de qualité",
        description: "Chaque intervention est exécutée avec passion, sérieux et grand soin mécanique.",
      },
      {
        title: "Fiabilité à petit prix",
        description: "Un devis honnête et clair sans surcoût ni remplacement inutile de pièces.",
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
    description: "Indiquez votre véhicule et votre créneau souhaité. Nous vous recontactons rapidement pour valider la prise en charge à l'atelier ou à domicile.",
    notice: "Note : La date et le créneau sont indicatifs et seront confirmés par téléphone ou WhatsApp.",
    fields: {
      service: {
        label: "Prestation souhaitée",
        placeholder: "Sélectionnez votre prestation",
        options: [
          { value: "diagnostic", label: "Diagnostic immédiat (voyant moteur, panne)" },
          { value: "mecanique", label: "Mécanique générale (distribution, embrayage...)" },
          { value: "batterie", label: "Batterie / Dépannage à domicile" },
          { value: "vidange", label: "Entretien rapide (vidange & filtres)" },
          { value: "freinage", label: "Freinage (plaquettes / disques)" },
          { value: "suspension", label: "Suspension & Tenue de route" },
          { value: "transaction", label: "Vente / Achat / Reprise de véhicule" },
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
        placeholder: "Ex : 07 00 00 00 00",
      },
      comments: {
        label: "Précisions sur votre besoin ou votre panne (facultatif)",
        placeholder: "Ex : batterie à changer à domicile, voyant moteur, bruit anormal...",
      },
    },
    submitButton: {
      label: "Envoyer ma demande par WhatsApp",
    },
    phoneAlternative: {
      text: "Besoin d'une réponse immédiate ? Contactez directement nos lignes :",
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
        vehicle: "Pose de batterie à domicile",
        comment: "Excellent mécanicien, très réactif ! Il s'est déplacé directement à mon domicile pour poser une batterie neuve alors que j'étais bloqué. Sérieux et ponctuel.",
      },
      {
        author: "Client Bergerac",
        date: "Récemment",
        rating: 5,
        vehicle: "Diagnostic valise électronique",
        comment: "Diagnostic fait immédiatement alors que les autres garages me demandaient d'attendre plus d'une semaine. Panne identifiée et réparée rapidement avec un tarif très raisonnable.",
      },
      {
        author: "Automobiliste 24",
        date: "Récemment",
        rating: 5,
        vehicle: "Mécanique & Entretien rapide",
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
    contactTitle: "Téléphones directs & Devis",
    itineraryButtonLabel: "Ouvrir l'itinéraire Google Maps",
    phoneCallLabel: "Appeler",
    mapAriaLabel: "Plan d'accès au garage HM Auto 24 à Bergerac",
  },

  // Barre d'appel mobile discrète (avec les 2 numéros accessibles)
  mobileCallBar: {
    callLabel1: "Ligne 1",
    callLabel2: "Ligne 2",
    whatsappLabel: "WhatsApp",
    appointmentLabel: "Rendez-vous",
    appointmentHref: "#rendez-vous",
  },

  // Footer & mentions
  footer: {
    garageName: "HM Auto 24",
    description: "Atelier de mécanique générale, diagnostic immédiat, entretien rapide et vente/achat/reprise à Bergerac (24). Dépannage léger et pose de batterie à domicile.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Prestations",
    contactTitle: "Atelier & Appels",
    copyright: "© 2026 HM Auto 24. Tous droits réservés.",
    legalNotice: "Les informations transmises sont uniquement utilisées pour traiter votre demande d'intervention.",
    madeBy: "Site vitrine professionnel HM Auto 24",
  },
};
