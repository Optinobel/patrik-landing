/**
 * ============================================================
 *  PATRIK PERNTHALER — LANDING PAGE CONFIG
 *  Edit this file to update all content on the page.
 *  No HTML knowledge needed — just change the values below.
 * ============================================================
 */

const CONFIG = {

  /* ── SITE META ───────────────────────────────────────────── */
  meta: {
    title:       { de: "Patrik Pernthaler – AI Transformation Leader & IT-Stratege | DACH",
                   en: "Patrik Pernthaler – AI Transformation Leader & IT Strategist | DACH" },
    description: { de: "Patrik Pernthaler – IT-Führungskraft mit 13+ Jahren Erfahrung, Azure-zertifiziert, Gründer von PLAI.AT. Offen für AI Transformation Leader, CAIO und Senior IT Director Rollen im DACH-Raum.",
                   en: "Patrik Pernthaler – IT leader with 13+ years experience, Azure certified, founder of PLAI.AT. Open to AI Transformation Leader, CAIO and Senior IT Director roles in the DACH region." },
    canonicalUrl: "https://patrikpernthaler.at/",
    ogLocale:     "de_AT",
  },

  /* ── PERSON (structured data) ────────────────────────────── */
  person: {
    name:      "Patrik Pernthaler",
    jobTitle:  "AI Transformation Leader & IT-Stratege",
    email:     "patrik.pernthaler@plai.at",
    city:      "Dornbirn",
    region:    "Vorarlberg",
    country:   "AT",
    linkedin:  "https://www.linkedin.com/in/p4trik",
    website:   "https://plai.at",
  },

  /* ── NAVIGATION ──────────────────────────────────────────── */
  nav: {
    logoText: "Pernthaler",
    links: [
      { href: "#about",    de: "Über mich",      en: "About" },
      { href: "#exp",      de: "Erfahrung",       en: "Experience" },
      { href: "#phil",     de: "KI-Philosophie",  en: "AI Philosophy" },
      { href: "#projects", de: "Projekte",         en: "Projects" },
      { href: "#contact",  de: "Kontakt",          en: "Contact" },
    ],
  },

  /* ── AVAILABILITY BANNER ─────────────────────────────────── */
  availability: {
    de: "Verfügbar ab sofort — <strong>offen für AI Leadership, CAIO und Senior IT Director Positionen im DACH-Raum.</strong>",
    en: "Available immediately — <strong>open to AI Leadership, CAIO and Senior IT Director positions in the DACH region.</strong>",
  },

  /* ── HERO ────────────────────────────────────────────────── */
  hero: {
    eyebrow: {
      de: "IT-Leadership · AI-Strategie · DACH",
      en: "IT Leadership · AI Strategy · DACH",
    },
    firstName: "Patrik",
    lastName:  "Pernthaler",
    tagline: {
      de: "<strong>13+ Jahre IT-Führungserfahrung.</strong> Jetzt an der Schnittstelle zwischen bewährter Unternehmens-IT und konkreter KI-Transformation — mit dem Ziel, Organisationen zukunftsfähig zu machen.",
      en: "<strong>13+ years of IT leadership.</strong> Now at the intersection of enterprise IT and practical AI transformation — focused on making organisations future-ready.",
    },
    cta1: { de: "Gespräch starten", en: "Start a conversation", href: "#contact" },
    cta2: { de: "Erfahrung ansehen", en: "View experience",     href: "#exp" },
    stats: [
      { value: 13, unit: "+", label: { de: "Jahre IT", en: "Years IT" } },
      { value: 45, unit: "+", label: { de: "KI Use-Cases", en: "AI Use-Cases" } },
      { value: 3,  unit: "",  label: { de: "Zertifikate", en: "Certifications" } },
    ],
  },

  /* ── ABOUT ───────────────────────────────────────────────── */
  about: {
    sectionLabel: { de: "Über mich", en: "About me" },
    heading: {
      de: "Technologie, die <em>wirklich</em><br>etwas verändert.",
      en: "Technology that <em>truly</em><br>makes a difference.",
    },
    paragraphs: [
      {
        de: "Ich bin Patrik — IT-Führungskraft und AI-Stratege aus Dornbirn, Vorarlberg. Mit über <strong>13 Jahren Erfahrung in der Unternehmens-IT</strong>, zuletzt als stellvertretender IT-Leiter bei Pantec Engineering AG (150+ User, 4 internationale Standorte), habe ich gelernt: Technologie entfaltet ihren Wert erst, wenn sie im Alltag der Menschen ankommt.",
        en: "I'm Patrik — an IT leader and AI strategist from Dornbirn, Vorarlberg. With over <strong>13 years of enterprise IT experience</strong>, most recently as Deputy Head of IT at Pantec Engineering AG (150+ users, 4 international locations), I've learned: technology only creates value when it lands in people's everyday work.",
      },
      {
        de: "Mit <strong>PLAI.AT</strong> bringe ich das Beste aus beiden Welten zusammen: Die Verlässlichkeit klassischer IT-Governance und die Konkretion moderner KI-Implementierung — für KMUs im DACH-Raum, die wirklich vorankommen wollen.",
        en: "With <strong>PLAI.AT</strong>, I bring the best of both worlds: the reliability of classical IT governance and the concreteness of modern AI implementation — for DACH-region SMEs that genuinely want to move forward.",
      },
    ],
    cta1: { de: "Gespräch starten", en: "Get in touch",  href: "#contact" },
    cta2: { label: "PLAI.AT →",                          href: "https://plai.at" },
    facts: [
      { icon: "📍", key: { de: "Standort",    en: "Location"    }, value: { de: "Dornbirn, Vorarlberg, AT",    en: "Dornbirn, Vorarlberg, AT" } },
      { icon: "🎯", key: { de: "Zielrolle",   en: "Target role" }, value: { de: "AI Lead · CAIO · IT Director", en: "AI Lead · CAIO · IT Director" } },
      { icon: "🌐", key: { de: "Modell",      en: "Model"       }, value: { de: "Remote-first · DACH",          en: "Remote-first · DACH" } },
      { icon: "💼", key: { de: "Gehaltsvst.", en: "Salary exp." }, value: { de: "€100–150k",                    en: "€100–150k" } },
      { icon: "🚀", key: { de: "PLAI.AT",     en: "PLAI.AT"     }, value: { de: "Gründer & AI-Berater",         en: "Founder & AI Consultant" } },
      { icon: "💬", key: { de: "Sprachen",    en: "Languages"   }, value: { de: "Deutsch (C2) · Englisch (C1)", en: "German (C2) · English (C1)" } },
    ],
  },

  /* ── EXPERIENCE ──────────────────────────────────────────── */
  experience: {
    sectionLabel: { de: "Berufserfahrung", en: "Experience" },
    heading: {
      de: "Breite Basis —<br><em>klarer Fokus.</em>",
      en: "Broad foundation —<br><em>clear focus.</em>",
    },
    jobs: [
      {
        years: "2024 — heute",
        role:  { de: "Gründer & AI-Berater",   en: "Founder & AI Consultant" },
        company: "PLAI.AT · Dornbirn, Vorarlberg",
        desc: {
          de: "KI-Workshops, Beratung und Implementierung für KMUs im DACH-Raum. McKinsey-Style Deliverables, AI Readiness Audits, Chatbot Security Testing, n8n Automatisierungen.",
          en: "AI workshops, consulting and implementation for DACH SMEs. McKinsey-style deliverables, AI readiness audits, chatbot security testing, n8n automation.",
        },
        chips: ["Claude", "n8n", "Prompt Engineering", "KI-Workshops", "PLAI.AT"],
      },
      {
        years: "2011 — 2024",
        role:  { de: "Stv. IT-Leiter", en: "Deputy Head of IT" },
        company: "Pantec Engineering AG · 4 int. Standorte",
        desc: {
          de: "Führung eines 3-köpfigen IT-Teams, 150+ User, 4 internationale Standorte. 99.8% SLA-Erfüllung Citrix-Infrastruktur. 60% Zeitersparnis durch PowerShell-Automatisierung. -50% Vendor-Konsolidierung. 6 Monate Interims-IT-Leitung.",
          en: "Leading a 3-person IT team, 150+ users, 4 international locations. 99.8% SLA Citrix infrastructure. 60% time savings via PowerShell automation. -50% vendor consolidation. 6 months interim IT leadership.",
        },
        chips: ["Azure", "Microsoft 365", "Citrix", "PowerShell", "IT-Leadership", "Security"],
      },
      {
        years: "2008 — 2011",
        role:  { de: "IT Solutions Engineer", en: "IT Solutions Engineer" },
        company: "Spider Netzwerk Consulting GmbH · Dornbirn",
        desc: {
          de: "Installation und Wartung von IT-Infrastrukturen. Security-Implementierung (Firewalls, VPNs, Endpoint Protection). Patch-Management-Automatisierung. KMU-Kundensupport.",
          en: "Installation and maintenance of IT infrastructures. Security implementation (firewalls, VPNs, endpoint protection). Patch management automation. SME customer support.",
        },
        chips: ["Netzwerk", "Security", "Helpdesk", "KMU-IT"],
      },
    ],
  },

  /* ── CERTIFICATIONS ──────────────────────────────────────── */
  certifications: [
    { icon: "☁️", name: "Azure Administrator Associate", issuer: "Microsoft · AZ-104", meta: { de: "Gültig bis 04/2026",   en: "Valid until 04/2026" } },
    { icon: "🤖", name: "Azure AI Fundamentals",         issuer: "Microsoft · AI-900", meta: { de: "Ausgestellt 06/2025",  en: "Issued 06/2025" } },
    { icon: "📋", name: "Microsoft 365 Administrator",   issuer: "Microsoft · MS-102", meta: { de: "Ausgestellt 11/2024",  en: "Issued 11/2024" } },
    { icon: "💡", name: "KI-Prompter Lehrgang",          issuer: "Digital Campus Vorarlberg", meta: { de: "Abschluss 06/2025", en: "Completed 06/2025" } },
    { icon: "🏆", name: "AI Fit Academy",                issuer: "werchota.ai",        meta: { de: "Enterprise AI · 2025", en: "Enterprise AI · 2025" } },
  ],

  /* ── SKILLS ──────────────────────────────────────────────── */
  skills: [
    { icon: "🤖", name: "Prompt Engineering", desc: { de: "Claude, SKILL.md-Ökosysteme, MCP",          en: "Claude, SKILL.md ecosystems, MCP" } },
    { icon: "⚙️", name: "n8n Automation",     desc: { de: "Workflows, RAG, KI-Agenten, APIs",           en: "Workflows, RAG, AI agents, APIs" } },
    { icon: "☁️", name: "Azure / Cloud",       desc: { de: "AZ-104 · AI-900 · MS-102",                  en: "AZ-104 · AI-900 · MS-102" } },
    { icon: "🏗️", name: "IT-Leadership",       desc: { de: "Infrastruktur, Team, Budget, Strategie",    en: "Infrastructure, team, budget, strategy" } },
    { icon: "🎯", name: "AI Strategy",         desc: { de: "Readiness-Audits, Workshops, Roadmaps",     en: "Readiness audits, workshops, roadmaps" } },
    { icon: "🛡️", name: "Security & DSGVO",    desc: { de: "Compliance, Datenschutz, Firewalls",        en: "Compliance, data protection, firewalls" } },
    { icon: "📊", name: "Projektmanagement",   desc: { de: "Int. Teams, Multi-Site, Stakeholder",       en: "Int. teams, multi-site, stakeholder" } },
    { icon: "🔌", name: "PowerShell / APIs",   desc: { de: "Automatisierung, Scripting, Integrationen", en: "Automation, scripting, integrations" } },
  ],

  /* ── AI TOOL STACK ───────────────────────────────────────── */
  tools: [
    { cat: "LLM",        name: "Claude",         use: { de: "Komplexe Analysen, Dokumente, Strategie",   en: "Complex analysis, documents, strategy" } },
    { cat: "LLM",        name: "ChatGPT",        use: { de: "Brainstorming, Content, Quick Wins",        en: "Brainstorming, content, quick wins" } },
    { cat: "Research",   name: "Perplexity",     use: { de: "Recherche mit echten Quellen",              en: "Research with real sources" } },
    { cat: "Knowledge",  name: "NotebookLM",     use: { de: "Multi-Dokument-Synthese, Analyse",          en: "Multi-document synthesis" } },
    { cat: "Automation", name: "n8n",            use: { de: "Workflows, RAG-Systeme, Agenten",           en: "Workflows, RAG systems, agents" } },
    { cat: "Voice",      name: "Wispr Flow",     use: { de: "Systemweites Diktat, Voice-First",          en: "System-wide dictation, voice-first" } },
    { cat: "Meeting",    name: "Plaud + Cluely", use: { de: "Meeting-Recording, AI-Nachbereitung",       en: "Meeting recording, AI follow-up" } },
    { cat: "Knowledge",  name: "Notion AI",      use: { de: "Wissensmanagement, Automatisierung",        en: "Knowledge mgmt, automation" } },
  ],

  /* ── PHILOSOPHY ──────────────────────────────────────────── */
  philosophy: {
    sectionLabel: { de: "KI-Philosophie", en: "AI Philosophy" },
    heading: {
      de: "KI als Partner —<br><em>nicht als Abkürzung.</em>",
      en: "AI as a partner —<br><em>not a shortcut.</em>",
    },
    paragraphs: [
      {
        de: "Ich glaube daran, dass <strong>KI dann ihren größten Wert entfaltet, wenn sie Menschen ermächtigt</strong> — nicht ersetzt. Mein Ansatz ist stets konkret: Was kann ich heute, in meinem spezifischen Kontext, nachweislich besser machen?",
        en: "I believe that <strong>AI creates its greatest value when it empowers people</strong> — not replaces them. My approach is always concrete: what can I demonstrably do better today, in my specific context?",
      },
      {
        de: "Als Gründer von PLAI.AT vermittle ich diese Philosophie — in Workshops, Beratungen und als AI-Trainer. <strong>Meine eigene Arbeitsweise ist das lebendige Beispiel</strong> für das, was ich lehre.",
        en: "As founder of PLAI.AT, I pass this philosophy on — through workshops, consulting, and AI training. <strong>My own way of working is the living example</strong> of what I teach.",
      },
    ],
    quote: {
      de: "Zeit ist das Einzige, das wir nicht zurückbekommen. KI gibt mir einen Teil davon zurück — und das ist der ehrlichste Grund, warum ich dieses Thema so ernst nehme.",
      en: "Time is the only thing we can never get back. AI gives some of it back to me — and that is the most honest reason why I take this field so seriously.",
    },
    pillars: [
      { num: "01", title: { de: "Praktisch vor theoretisch",  en: "Practical before theoretical" }, body: { de: "Tools die ich empfehle, setze ich täglich produktiv ein. Keine leeren Versprechen.", en: "Tools I recommend, I use productively myself every day. No empty promises." } },
      { num: "02", title: { de: "Transparenz über Hype",      en: "Transparency over hype"       }, body: { de: "Ehrliche Einschätzung was funktioniert und was nicht — ohne Verkaufsdruck.",       en: "Honest assessment of what works and what doesn't — without sales pressure." } },
      { num: "03", title: { de: "Mensch im Mittelpunkt",      en: "Human at the centre"          }, body: { de: "Technologie dient dem Menschen — nicht umgekehrt. Effizienz ohne Menschlichkeit ist kein Fortschritt.", en: "Technology serves people — not the other way around." } },
      { num: "04", title: { de: "Kontinuierlich lernen",      en: "Continuously learning"        }, body: { de: "Das Feld verändert sich täglich. All-in ist keine Option — es ist Pflicht.",       en: "The field changes daily. Going all-in isn't optional — it's a duty." } },
    ],
  },

  /* ── PROJECTS ────────────────────────────────────────────── */
  projects: {
    sectionLabel: { de: "Ausgewählte Projekte", en: "Selected Projects" },
    heading: { de: "Aus der <em>Praxis.</em>", en: "From <em>practice.</em>" },
    items: [
      {
        tag:   { de: "KI-Workshop · 2024",    en: "AI Workshop · 2024" },
        title: { de: "Haberkorn KI-Transformation", en: "Haberkorn AI Transformation" },
        desc:  { de: "Entwicklung von 45 KI-Anwendungsfällen für 4 Unternehmensbereiche (IT, Vertrieb, Beschaffung, Logistik). McKinsey-Style Dashboard als Deliverable. Interviews mit 5 Fachbereichen, strukturierte Roadmap.", en: "Development of 45 AI use cases across 4 business units (IT, sales, procurement, logistics). McKinsey-style dashboard deliverable. Interviews with 5 departments, structured roadmap." },
        chips: ["Claude", "n8n", "McKinsey Dashboard", "AI Readiness"],
      },
      {
        tag:   { de: "Security · 2024", en: "Security · 2024" },
        title: { de: "Red Team Arsenal", en: "Red Team Arsenal" },
        desc:  { de: "60+ Prompt Security Testing Framework für KI-Chatbots. Systematische Identifikation von Schwachstellen in Prompt-Architekturen, Jailbreak-Resistenz-Tests, Sicherheits-Checkliste für produktive KI-Systeme.", en: "60+ prompt security testing framework for AI chatbots. Systematic identification of vulnerabilities in prompt architectures, jailbreak resistance tests, security checklist for production AI systems." },
        chips: ["Prompt Security", "Red Teaming", "PLAI.AT"],
      },
      {
        tag:   { de: "Skill-Ökosystem · 2025", en: "Skill Ecosystem · 2025" },
        title: { de: "Claude Skill Ecosystem", en: "Claude Skill Ecosystem" },
        desc:  { de: "Aufbau eines wiederverwendbaren SKILL.md-Ökosystems für Claude — inklusive transcript-to-workbook, business-viz, prompt-optimization-analyzer und 15+ weiteren Skills. Ziel: reproduzierbare KI-Qualität ohne Wiederholung.", en: "Building a reusable SKILL.md ecosystem for Claude — including transcript-to-workbook, business-viz, prompt-optimization-analyzer and 15+ further skills. Goal: reproducible AI quality without repetition." },
        chips: ["Claude Skills", "Prompt Engineering", "MCP"],
      },
    ],
  },

  /* ── EDUCATION ───────────────────────────────────────────── */
  education: {
    sectionLabel: { de: "Ausbildung", en: "Education" },
    heading: { de: "Das <em>Fundament.</em>", en: "The <em>foundation.</em>" },
    items: [
      { years: "2002 – 2006", name: "HTL Dornbirn",        degree: { de: "Betriebsinformatik · Matura mit Schwerpunkt IT-Systeme", en: "Business Informatics · Matura (IT Systems focus)" } },
      { years: "2006 – 2008", name: "Fachschule Dornbirn", degree: { de: "Datenverarbeitung",                                     en: "Data Processing" } },
      { years: "2009 – 2010", name: "TBS Innsbruck",       degree: { de: "Elektrotechnik & Kommunikationstechnik",                en: "Electrical Engineering & Communications" } },
    ],
  },

  /* ── CONTACT / CTA ───────────────────────────────────────── */
  contact: {
    eyebrow: { de: "Bereit für den nächsten Schritt", en: "Ready for the next step" },
    heading: { de: "Lass uns<br><em>sprechen.</em>",  en: "Let's<br><em>talk.</em>" },
    subtext: {
      de: "Offen für AI Leadership Rollen, strategische Kooperationen und spannende Projekte im DACH-Raum.",
      en: "Open to AI leadership roles, strategic partnerships, and exciting projects across the DACH region.",
    },
    emailAddress: "p.pernthaler@plai.at",
    emailLabel:   { de: "E-Mail schreiben", en: "Send an email" },
    links: [
      { label: "🚀 &nbsp;PLAI.AT", href: "https://plai.at", classes: "btn btn-ghost", target: "_blank" },
    ],
  },

  /* ── FOOTER ──────────────────────────────────────────────── */
  footer: {
    brand: "Patrik Pernthaler · PLAI.AT",
    note:  { de: "© 2025 · Dornbirn, Vorarlberg, Österreich", en: "© 2025 · Dornbirn, Vorarlberg, Austria" },
  },

  /* ── PORTRAIT ────────────────────────────────────────────── */
  portrait: {
    src: "assets/portrait.jpg",
    alt: "Patrik Pernthaler – AI Transformation Leader",
  },

};
