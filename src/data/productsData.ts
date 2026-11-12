export interface ProductModule {
  name: string;
  description: string;
  kpi?: string;
}

export interface ProductGroup {
  id: string;
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  problem: {
    summary: string;
    points: string[];
  };
  solution: {
    summary: string;
    modules: ProductModule[];
  };
  dashboard: {
    top: {
      label: string;
      description: string;
      kpis: { title: string; value: string; unit?: string }[];
    };
    center: {
      label: string;
      description: string;
    };
    bottom: {
      label: string;
      description: string;
    };
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    headline: string;
    text: string;
    buttonText: string;
    secondaryText?: string;
  };
  targetAudience: string;
}

export const PRODUCTS: ProductGroup[] = [
  {
    id: 'vastgoedportefeuille-objectbeheer',
    slug: 'vastgoedportefeuille-objectbeheer',
    badge: 'Vastgoed & Dossier',
    title: 'Vastgoedportefeuille & Objectbeheer',
    tagline: 'Centraal objectregister, BAG-integratie & 10-hoofdstukken dossiers',
    h1: 'Integraal Vastgoedbeheer en Objectdossiers Zonder Gefragmenteerde Data',
    metaTitle: 'Vastgoedportefeuille & Objectbeheer Software | VOSQ',
    metaDescription: 'Centraal objectregister en gestructureerde objectdossiers voor vastgoedbeleggers. Koppel BAG, kadaster, huur en energielabels in één bron van waarheid.',
    definition: 'Vastgoedportefeuille & Objectbeheer is de softwaremodule binnen VOSQ die verspreide technische, juridische en financiële gebouwdata centraliseert tot een uniform objectregister en levenscyclusdossier.',
    problem: {
      summary: 'Vastgoedbeleggers en assetmanagers beheren hun portefeuille vaak via versnipperde systemen: technische keuringen staan in losse pdf’s, kadastrale gegevens in spreadsheets, en energielabels en huurgegevens in separate softwarepakketten.',
      points: [
        'Bij aankoop, exploitatie of verkoop ontbreekt het aan één eenduidige bron van waarheid (single source of truth).',
        'Administratieve vertraging en hoge advies- en due-diligence-kosten bij transacties.',
        'Blinde vlekken in het risicobeheer, gebouwkwaliteit en verouderde gegevens over oppervlaktes en huurcontracten.'
      ]
    },
    solution: {
      summary: 'VOSQ structureert het complete vastgoedbestand in een gestandaardiseerd datamodel dat direct gekoppeld is aan landelijke registraties en energiestromen.',
      modules: [
        {
          name: 'Centraal Objectregister',
          description: 'Eén uniforme registratie van ieder vastgoedobject met uniek ID, juridische entiteit, eigendomsvorm, BAG-ID, kadastrale percelen en gevalideerde oppervlaktes (BVO/VVO/GO).',
          kpi: 'Volledig traceerbare brondata'
        },
        {
          name: '10-Hoofdstukken Object Dossier',
          description: 'Gestructureerde dossiervorming van managementsamenvatting, gebouwtechniek en installaties tot wettelijke naleving, vergunningen en afwijkingenanalyses.',
          kpi: 'Direct exportklare dataroom'
        },
        {
          name: 'Levenscyclus- & Exit-Workflow',
          description: 'Beheer van actieve, herontwikkelings- en gearchiveerde objecten, inclusief een geautomatiseerde exit-checklist bij verkoop of herstructurering.',
          kpi: 'Gestructureerde due diligence voorbereiding'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Bovenzijde: Compacte KPI-Tegels (Voorbeeld)',
        description: 'Direct inzicht in macro-indicatoren over de gehele portefeuille.',
        kpis: [
          { title: 'Totale Portefeuillewaarde', value: '€ 64,0', unit: 'mln' },
          { title: 'Bruto Huuropbrengsten', value: '€ 4,6', unit: 'mln/jr' },
          { title: 'Gemiddelde Bezettingsgraad', value: '96,4', unit: '%' },
          { title: 'Energielabel A of beter', value: '88', unit: '%' },
          { title: 'CO₂-Reductie t.o.v. Referentie', value: '24,8', unit: '%' }
        ]
      },
      center: {
        label: 'Centraal: GIS & Financiële Performance Matrix',
        description: 'Interactieve satelliet- en GIS-kaart van alle locaties gekoppeld aan een analytisch performance-overzicht waarin Net Operating Income (NOI) direct wordt afgezet tegen exploitatiekosten.'
      },
      bottom: {
        label: 'Onderzijde: Het Complete Objectenoverzicht',
        description: 'Filterbaar objectenoverzicht met directe selectie op gebruiksfunctie (logistiek, kantoren, retail, woningbouw), bouwjaar, actuele bezetting en een sneltoets naar het officiële Energiepaspoort per pand.'
      }
    },
    faqs: [
      {
        question: 'Hoe koppelt VOSQ met het Kadaster en de BAG?',
        answer: 'VOSQ integreert via officiële overheids-API’s. Met een BAG-ID of perceelnummer worden perceelgrenzen, gebruiksfuncties en bouwjaren automatisch ingeladen en actueel gehouden.'
      },
      {
        question: 'Wat omvat het 10-Hoofdstukken Object Dossier?',
        answer: 'Het dossier structureert de managementsamenvatting, eigendomsstructuur, bouwkundige staat, installaties, onderhoudsplannen (MJOP), huurderscontracten, energieprofielen, compliance-certificaten, ESG-scores en verkoopdocumenten.'
      }
    ],
    cta: {
      headline: 'Krijg grip op uw totale vastgoedportefeuille',
      text: 'Ervaar hoe het centrale objectregister van VOSQ rust en overzicht brengt in uw exploitatie en verkoopdossiers.',
      buttonText: 'Vraag een persoonlijke demo aan',
      secondaryText: 'of neem contact op met onze vastgoedspecialisten'
    },
    targetAudience: 'Vastgoedbeleggers, assetmanagers, woningcorporaties en family offices.'
  },
  {
    id: 'energiemonitor-kwartierdata',
    slug: 'energiemonitor-kwartierdata',
    badge: 'Energie & Netcongestie',
    title: 'Energiemonitor & Kwartierdata Analyse',
    tagline: 'Kwartierwaarden, vermogensformule & netcongestiebewaking',
    h1: 'Realtime Inzicht in Kwartierdata, Piekbelasting en Netcongestierisico’s',
    metaTitle: 'Energiemonitor & Kwartierdata Analyse Software | VOSQ',
    metaDescription: 'Voorkom piekboetes van netbeheerders en analyseer netcongestie per kwartier. Monitor het Gecontracteerd Transportvermogen (GTV) en simuleer BESS & EV.',
    definition: 'Netcongestie is het moment waarop het elektriciteitsnet onvoldoende capaciteit heeft voor de gevraagde of aangeboden hoeveelheid energie. De Energiemonitor analyseert kwartierdata om piekboetes en uitval te voorkomen.',
    problem: {
      summary: 'Door de toenemende netcongestie in Nederland lopen vastgoedeigenaren tegen harde grenzen aan. Onbewuste pieken boven het gecontracteerde transportvermogen (GTV) resulteren in torenhoge boetetarieven van netbeheerders (€ 42,- per overschreden kW).',
      points: [
        'Onvoorziene piekboetes van tienduizenden euro\'s per maand bij onbewuste overschrijding van het gecontracteerde transportvermogen.',
        'Zonnepanelen worden afgeschakeld door terugleverbeperkingen, waardoor duurzame investeringen onbenut blijven.',
        'Nachtelijke installatiefouten en sluipverbruik in het weekend zorgen voor duizenden euro\'s aan verspilde energielasten.'
      ]
    },
    solution: {
      summary: 'VOSQ leest kwartierdata geautomatiseerd in, bewaakt continu de vermogensgrenzen en simuleert flexibiliteitsmaatregelen zoals batterijopslag (BESS).',
      modules: [
        {
          name: 'P4 & Telemetrie Kwartierdata-Inlezer',
          description: 'Geautomatiseerde 7-staps importwizard voor CSV/Excel-bestanden van netbeheerders (Enexis, Liander, Stedin) en meetbedrijven (Fudura, Kenter).',
          kpi: 'Geautomatiseerde data-ingestie'
        },
        {
          name: 'Piek- & Vermogensbewaking',
          description: 'Strikte monitoring van de vermogensformule met automatische signalering zodra het piekvermogen 90% van de GTV-contractgrens nadert.',
          kpi: 'Vroegtijdige pieksignalering'
        },
        {
          name: 'Week-Heatmap & Baseload-Analyse',
          description: 'Visuele 24/7 intensiteitsmatrix die onnodig sluipverbruik in het weekend en \'s nachts direct blootlegt.',
          kpi: 'Direct inzicht in sluipverbruik'
        },
        {
          name: 'Scenario-Simulator',
          description: 'Indicatieve toetsing van laadpleinen (EV), all-electric warmtepompen, PV-uitbreidingen en batterijopslag (BESS) tegen de fysieke én contractuele netcapaciteit.',
          kpi: 'Indicatieve capaciteitsverkenning'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Bovenzijde: Realtime Energie- & Vermogensindicatoren (Voorbeeld)',
        description: 'Kernmeters voor actuele belasting en transportcapaciteit.',
        kpis: [
          { title: 'Netafname Totaal', value: '2.963', unit: 'MWh' },
          { title: 'Teruglevering Totaal', value: '412', unit: 'MWh' },
          { title: 'Actuele PV-Opwek', value: '385', unit: 'kW' },
          { title: 'Hoogste Kwartierpiek', value: '640', unit: 'kW' },
          { title: 'GTV-Benutting', value: '86', unit: '%' }
        ]
      },
      center: {
        label: 'Centraal: 24-Uurs Kwartiergrafiek met GTV-Contractgrens',
        description: 'Interactieve 24-uurs kwartiergrafiek waarin de werkelijke afnamecurve direct wordt afgezet tegen de rode GTV-contractgrens en zonne-opweklijnen.'
      },
      bottom: {
        label: 'Onderzijde: 24/7 Week-Heatmap & Slimme Signaleringen',
        description: 'Kleurgecodeerde heatmap van maandag t/m zondag per kwartier, vergezeld van actieve signaleringen met concrete actie-adviezen voor peak-shaving.'
      }
    },
    faqs: [
      {
        question: 'Wat is het Gecontracteerd Transportvermogen (GTV) en waarom is overschrijding duur?',
        answer: 'Het GTV is de maximale vermogenscapaciteit die contractueel is afgesproken met de netbeheerder. Overschrijding van dit kwartiervermogen resulteert in een boetetarief van circa € 42,- per overschreden kW en kan leiden tot verplichte verzwaring of sancties.'
      },
      {
        question: 'Welke meetdata ondersteunt VOSQ?',
        answer: 'VOSQ ondersteunt P4-data van alle regionale netbeheerders (Liander, Enexis, Stedin, Coteq, Rendo) en telemetriedata van geaccrediteerde meetbedrijven zoals Fudura, Kenter en Joulz.'
      }
    ],
    cta: {
      headline: 'Voorkom piekboetes en benut uw netcapaciteit optimaal',
      text: 'Ontdek binnen 15 minuten waar uw panden capaciteit verliezen en waar u direct kunt besparen.',
      buttonText: 'Plan een demonstratie van de Energiemonitor',
      secondaryText: 'Inclusief analyse van uw eigen kwartierbestand'
    },
    targetAudience: 'Vastgoedeigenaren, logistieke parken, industriële bedrijven en energiemanagers.'
  },
  {
    id: 'energiecontract-ean-management',
    slug: 'energiecontract-ean-management',
    badge: 'Contracten & EAN',
    title: 'Energiecontract- & EAN-Management',
    tagline: 'Drieniveau-architectuur (L1/L2/L3), multisite EAN-register & hedgebeheer',
    h1: 'Centraal Contractmanagement voor Complexe Multisite- en Grootverbruikaansluitingen',
    metaTitle: 'Energiecontract- & EAN-Management Software | VOSQ',
    metaDescription: 'Beheer multisite energiecontracten, raamovereenkomsten en EAN-codes. Voorkom stilzwijgende verlengingen en bewaak inkoop- en hedgeposities.',
    definition: 'Energiecontract- & EAN-Management is de software voor het overkoepelend beheren van raamovereenkomsten, onderliggende EAN-aansluitingen en mutaties bij aankoop en verkoop van vastgoed.',
    problem: {
      summary: 'Grote vastgoedportefeuilles hebben te maken met tientallen verschillende EAN-codes, wisselende leveranciers en uiteenlopende contractvormen (vast, dynamisch, kliktranches of PPA’s).',
      points: [
        'Bij aan- of verkoop van vastgoed worden aansluitingen regelmatig te laat overgedragen, met dubbele facturatie tot gevolg.',
        'Aflopende contracten worden stilzwijgend verlengd tegen ongunstige dagtarieven.',
        'Gebrek aan inzicht in de totale afdekkingsgraad (hedgepositie) en prijsrisico\'s over meerdere boekjaren.'
      ]
    },
    solution: {
      summary: 'VOSQ brengt structuur in complexe multisite-portefeuilles met een drieniveau-architectuur die raamcontracten naadloos koppelt aan fysieke EAN-aansluitingen.',
      modules: [
        {
          name: 'Drieniveau-Architectuur (L1/L2/L3)',
          description: 'Heldere scheiding tussen centrale raamcontracten (L1), deelnemende rechtspersonen/objecten (L2) en individuele EAN-aansluitingen (L3).',
          kpi: 'Volledige contractuele transparantie'
        },
        {
          name: 'Multisite- & EAN-Register',
          description: 'Gestructureerd overzicht van alle aansluitingen voor elektra, gas en stadswarmte met netbeheerders, meetcodes en gecontracteerde volumes.',
          kpi: 'Centraal EAN-register'
        },
        {
          name: 'In- en Uitplug-Workflows',
          description: 'Gestroomlijnde mutaties bij aankoop of verkoop van panden, inclusief automatische notificaties voor leveranciers en meetbedrijven.',
          kpi: 'Tijdig administratief overgedragen'
        },
        {
          name: 'Hedge- & Risicobeheer',
          description: 'Inzicht in de afdekkingsgraad per leveringsjaar en contractuele opzegtermijnen om prijsvolatiliteit proactief te beheersen.',
          kpi: 'Inzicht in vast vs. klik vs. spot'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Bovenzijde: Contractuele & Portefeuille KPI-Kaarten (Voorbeeld)',
        description: 'Overzicht van alle lopende inkoop- en raamcontracten.',
        kpis: [
          { title: 'Actieve Raamcontracten', value: '5', unit: 'contracten' },
          { title: 'Aangesloten EAN-Codes', value: '9', unit: 'aansluitingen' },
          { title: 'Elektra Volume YTD', value: '26,2', unit: 'GWh' },
          { title: 'Gas & Warmte Volume', value: '88,1', unit: 'dam³' },
          { title: 'Hedgegraad Komend Jaar', value: '75', unit: '%' }
        ]
      },
      center: {
        label: 'Centraal: Looptijdenkalender & Hedgeverdeling',
        description: 'Looptijdenkalender en hedgeverdeling (vast vs. klik vs. spotmarkten) met vroegtijdige signalering van aflopende contracten binnen 12 maanden.'
      },
      bottom: {
        label: 'Onderzijde: Volledig Doorzoekbaar Aansluitingenregister',
        description: 'Register met realtime zoek- en filteropties op energieleverancier, netbeheerder, aansluitwaarde en gekoppelde kostenplaats.'
      }
    },
    faqs: [
      {
        question: 'Wat is een EAN-code en hoe bewaakt VOSQ deze?',
        answer: 'Een EAN-code (European Article Numbering) is het unieke 18-cijferige nummer van een energieaansluiting. VOSQ koppelt elke EAN aan het juiste vastgoedobject, de juridische eigenaar en het bijbehorende leveringscontract.'
      },
      {
        question: 'Wat is de L1/L2/L3-architectuur?',
        answer: 'L1 staat voor het overkoepelende leveringscontract met de energieleverancier; L2 voor het specifieke vastgoedobject of de dochteronderneming; L3 voor de individuele fysieke meter/aansluiting.'
      }
    ],
    cta: {
      headline: 'Breng structuur aan in uw zakelijke energiecontracten',
      text: 'Beheer al uw raamovereenkomsten en EAN-aansluitingen vanuit één overzichtelijke omgeving.',
      buttonText: 'Vraag een live demo aan',
      secondaryText: 'Voor multisite portefeuilles vanaf 5 aansluitingen'
    },
    targetAudience: 'Portefeuillebeheerders, inkoopdirecteuren, corporaties en facility managers.'
  },
  {
    id: 'huurdersadministratie-kostenallocatie',
    slug: 'huurdersadministratie-kostenallocatie',
    badge: 'Huurders & Servicekosten',
    title: 'Huurdersadministratie & Kostenallocatie',
    tagline: 'Tussenmeter reconciliatie, algemene voorzieningen & foutloze doorbelasting',
    h1: 'Foutloze Doorberekening van Energielasten en Transparante Huurdersverdeling',
    metaTitle: 'Huurdersadministratie & Kostenallocatie Software | VOSQ',
    metaDescription: 'Transparante tussenmeter reconciliatie en servicekosten doorbelasting. Verdeel algemene voorzieningen foutloos op basis van VVO en gemeten kWh.',
    definition: 'Huurdersadministratie & Kostenallocatie is de softwaremodule die de kloof overbrugt tussen verhuurder en huurders (split-incentive) door energiekosten van hoofd- en tussenmeters juridisch sluitend te verdelen.',
    problem: {
      summary: 'De splitsing tussen huurder en verhuurder (split-incentive) leidt jaarlijks tot moeizame discussies over servicekostenafrekeningen.',
      points: [
        'Wanneer hoofdmeters en tussenmeters niet goed op elkaar zijn afgestemd, ontstaan onverklaarbare verschillen.',
        'Algemene voorzieningen (zoals liften, centrale hal en klimaatinstallaties) worden niet aantoonbaar of betwistbaar verdeeld.',
        'De vastgoedeigenaar blijft achter met niet-verhaalbare energielasten en onbetaalde voorschotten.'
      ]
    },
    solution: {
      summary: 'VOSQ reconcilieert automatisch tussenmeters met hoofdmeters en past transparante verdeelsleutels toe conform ROZ- en NEN-standaarden.',
      modules: [
        {
          name: 'Tussenmeter Reconciliatie',
          description: 'Transparante aansluiting tussen de netafname op de hoofdmeter en de som van alle onderliggende tussenmeters met automatische restverdeling.',
          kpi: 'Sluitende meterbalans'
        },
        {
          name: 'Algemene Voorzieningen Verdeling',
          description: 'Afzonderlijke registratie van gemeenschappelijk verbruik en geautomatiseerde toerekening via vaste verdeelsleutels (zoals VVO m²).',
          kpi: 'Transparante servicekosten'
        },
        {
          name: 'Data-Statuslabels',
          description: 'Iedere verbruiksregel en kostenpost wordt expliciet gelabeld als gemeten, berekend, geschat of verdeeld conform administratieve standaarden.',
          kpi: 'Volledige audit-trail'
        },
        {
          name: 'Huurcontract- & Indexatiebeheer',
          description: 'Traceerbaarheid van ROZ-contracten, CPI-huurindexaties, betaalstatussen en gestelde bankgaranties.',
          kpi: 'Tijdige signalering indexaties'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Bovenzijde: Reconciliatietegels Hoofdmeter vs Tussenmeters (Voorbeeld)',
        description: 'Direct inzicht in totale afname en de verdeling over huurders en algemeen.',
        kpis: [
          { title: 'Hoofdmeter Afname', value: '1.420', unit: 'MWh' },
          { title: 'Gemeten Huurdersverbruik', value: '1.185', unit: 'MWh' },
          { title: 'Algemene Voorzieningen', value: '231', unit: 'MWh' },
          { title: 'Reconciliatie Verschil', value: '< 0,5', unit: '%' },
          { title: 'Doorbelastingspercentage', value: '98,2', unit: '%' }
        ]
      },
      center: {
        label: 'Centraal: De Huurdersmatrix',
        description: 'Huurdersmatrix met per huurder de gehuurde eenheid, VVO-oppervlakte, gemeten kWh-verbruik, aandeel in algemene lasten en indicatieve energiekosten.'
      },
      bottom: {
        label: 'Onderzijde: Uitsplitsing Verhaalbaar vs Niet-Verhaalbaar',
        description: 'Duidelijke uitsplitsing tussen direct verhaalbare servicekosten en niet-verhaalbare eigenaarslasten voor de jaarrekening.'
      }
    },
    faqs: [
      {
        question: 'Hoe lost VOSQ de split-incentive op?',
        answer: 'Door realtime tussenmeterdata te koppelen aan transparante verdeelsleutels (VVO m²) zien zowel huurder als verhuurder exact welk deel gemeten is en welk deel algemeen verbruik betreft.'
      },
      {
        question: 'Wat betekenen de data-statuslabels?',
        answer: 'Labels als "gemeten", "berekend", "geschat" of "verdeeld" geven accountants en huurders direct inzicht in de herkomst en betrouwbaarheid van elke kostenregel.'
      }
    ],
    cta: {
      headline: 'Sluitende energieafrekeningen zonder discussie met huurders',
      text: 'Maak uw energiedoorbelasting transparant, controleerbaar en juridisch robuust.',
      buttonText: 'Bekijk de huurdersmodule in een demo',
      secondaryText: 'Inclusief model ROZ servicekostenoverzicht'
    },
    targetAudience: 'Commercieel vastgoedbeheerders, assetmanagers en vastgoedadministraties.'
  },
  {
    id: 'onderhoud-keuringen-gacs',
    slug: 'onderhoud-keuringen-gacs',
    badge: 'Compliance & Keuringen',
    title: 'Onderhoud, Keuringen & GACS Compliance',
    tagline: 'SCIOS Scope 8/10/12, NEN 2767 conditiemeting & EPBD IV GACS-borging',
    h1: 'Borging van NEN 2767, SCIOS-Keuringen en EPBD IV Wetgeving',
    metaTitle: 'Onderhoud, Keuringen & GACS Compliance Software | VOSQ',
    metaDescription: 'Software voor bewaking van SCIOS Scope 8, 10 en 12 keuringen, NEN 2767 conditiemeting en EPBD IV GACS compliance voor utiliteitsgebouwen.',
    definition: 'GACS (Gebouwautomatiserings- en Controlesystemen) is onder EPBD IV verplicht voor utiliteitsgebouwen met verwarmings- of koelsystemen boven bepaalde vermogensgrenzen (>290 kW en >70 kW). VOSQ bewaakt deze compliance centraal.',
    problem: {
      summary: 'Wettelijke verplichtingen voor commercieel vastgoed worden steeds strenger. Zonder centrale bewaking verlopen certificaten ongemerkt.',
      points: [
        'SCIOS Scope 8, 10 en 12 (zonnepanelen) keuringen verlopen ongemerkt, met risico op verlies van brandverzekeringsdekking.',
        'De wettelijke EPBD IV verplichting voor GACS per 2026 en 2030 vereist continue monitoring en controle van installaties.',
        'Verspreide keuringsrapporten van verschillende inspectiebureaus maken handhaving door de omgevingsdienst tot een compliance-risico.'
      ]
    },
    solution: {
      summary: 'VOSQ digitaliseert en bewaakt keuringstermijnen, koppelt MJOP-conditiescores en toetst utiliteitsgebouwen proactief aan EPBD IV en GACS normeringen.',
      modules: [
        {
          name: 'Wettelijke Keuringen & Certificaten',
          description: 'Automatische opvolging van keuringstermijnen voor elektra, liften, brandmeldinstallaties (BMI/OAI) en PV-daken.',
          kpi: '0 verlopen certificaten'
        },
        {
          name: 'MJOP & NEN 2767 Conditiemeting',
          description: 'Integratie van meerjarenonderhoudsplannen met conditiescores (1 t/m 6) en meerjarige investeringsprognoses.',
          kpi: 'Grip op meerjarige CAPEX'
        },
        {
          name: 'EPBD IV & GACS Readiness',
          description: 'Direct inzicht in de nalevingsstatus voor utiliteitsgebouwen met klimaatinstallaties >290 kW en >70 kW.',
          kpi: 'Actueel overzicht wetgeving'
        },
        {
          name: 'Leveranciersbeheer',
          description: 'Vastlegging van onderhoudscontracten, responstijden (SLA) en contactpersonen per installatiediscipline.',
          kpi: 'Directe aanspreekpunten'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Bovenzijde: Keuringsmonitor & Risico-Indicator (Voorbeeld)',
        description: 'Realtime status van geldige, aflopende en urgente keuringen.',
        kpis: [
          { title: 'Geldige Certificaten', value: '24', unit: 'stuks' },
          { title: 'Verloopt binnen 90 Dagen', value: '3', unit: 'keuringen' },
          { title: 'Verlopen / Urgent', value: '0', unit: 'acties' },
          { title: 'Gemiddelde NEN Score', value: '1,8', unit: 'score 1-6' },
          { title: 'GACS Nalevingsgraad', value: '92', unit: '%' }
        ]
      },
      center: {
        label: 'Centraal: MJOP-Planning 2025–2035 & CAPEX',
        description: 'MJOP-planning 2025–2035 met geplande vervangingen van bouwdelen (dakbedekking, HVAC, warmtepompen) en bijbehorende CAPEX.'
      },
      bottom: {
        label: 'Onderzijde: Certificatendatabase met Inspectierapporten',
        description: 'Gedetailleerd certificatenoverzicht met inspectierapporten van geaccrediteerde instanties en directe download voor verzekeraars.'
      }
    },
    faqs: [
      {
        question: 'Wat houdt de GACS-verplichting onder EPBD IV in?',
        answer: 'Onder de herziene EPBD IV moeten utiliteitsgebouwen met een effectief nominaal vermogen voor verwarming of koeling van meer dan 290 kW (en later 70 kW) uitgerust zijn met een Gebouwautomatiserings- en Controlesysteem (GACS) dat energieverbruik continu monitort en optimaliseert.'
      },
      {
        question: 'Wat is het risico van een verlopen SCIOS Scope 12 keuring?',
        answer: 'Bij schade door brand aan een zonne-energie-installatie eisen brandverzekeraars een geldig SCIOS Scope 12 inspectierapport. Zonder geldig certificaat kan dekking worden geweigerd.'
      }
    ],
    cta: {
      headline: 'Nooit meer een verlopen keuringscertificaat of compliance-risico',
      text: 'Houd uw gebouwen veilig, verzekerd en compliant met de actuele wetgeving.',
      buttonText: 'Vraag een compliance-audit demo aan',
      secondaryText: 'Inclusief GACS en SCIOS checklist'
    },
    targetAudience: 'Technisch managers, vastgoedeigenaren, compliance officers en MJOP-adviseurs.'
  },
  {
    id: 'financien-exploitatie-esg',
    slug: 'financien-exploitatie-esg',
    badge: 'Financiën & ESG',
    title: 'Financiën, Exploitatie & ESG (CSRD)',
    tagline: 'Net Operating Income (NOI), Paris Proof NTA 8800 & exportklare dataroom',
    h1: 'Maximale Grip op Net Operating Income (NOI) en Paris Proof Doelstellingen',
    metaTitle: 'Financiën, Exploitatie & ESG Software voor Vastgoed | VOSQ',
    metaDescription: 'Optimaliseer Net Operating Income (NOI) en bewaak Paris Proof en CSRD doelstellingen. Koppel bruto huurstromen aan werkelijke energielasten.',
    definition: 'Net Operating Income (NOI) is het netto bedrijfsresultaat van een vastgoedobject (bruto inkomsten minus operationele exploitatiekosten). VOSQ integreert energielasten realtime in de NOI- en ESG-rapportage.',
    problem: {
      summary: 'Voor institutionele beleggers en financiers zijn duurzaamheid en financieel rendement onlosmakelijk met elkaar verbonden.',
      points: [
        'Exploitatiekosten (OPEX) lopen op door volatiele energieprijzen en stijgende netwerktarieven.',
        'Banken en toezichthouders eisen strenge CSRD-, EED- en Paris Proof-verantwoording conform NTA 8800 en EU-taxonomie.',
        'Zonder geconsolideerde data is het onmogelijk om investeringsbeslissingen strategisch te onderbouwen.'
      ]
    },
    solution: {
      summary: 'VOSQ combineert contractuele huurinkomsten met werkelijke energielasten en ESG-prestaties tot een geconsolideerd financieel dashboard.',
      modules: [
        {
          name: 'Integrale Financiële Exploitatie',
          description: 'Realtime inzicht in contractuele bruto huurstromen, exploitatiekosten (OPEX), energielasten en het resulterende Net Operating Income (NOI).',
          kpi: 'Realtime NOI-monitoring'
        },
        {
          name: 'Duurzaamheids- & ESG-Monitor',
          description: 'Berekening van werkelijke kWh/m², CO₂-emissiereductie en Paris Proof indicatoren conform NTA 8800.',
          kpi: 'Paris Proof WEii-benchmark'
        },
        {
          name: 'Financiële Matrix per Pand',
          description: 'Vergelijking van netto aanvangsrendementen (NAR) en energiedoorbelastingspercentages over de gehele portefeuille.',
          kpi: 'Objectief assetrendement'
        },
        {
          name: 'Exportklare Dataroom',
          description: 'Eenvoudige JSON- en Excel-exports voor ESG-jaarrekeningen, accountantscontroles en verkoopdossiers.',
          kpi: '1-klik rapportage'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Bovenzijde: Kernindicatoren voor NOI & ESG (Voorbeeld)',
        description: 'Financiële en duurzaamheidsmetrics over het lopende boekjaar.',
        kpis: [
          { title: 'Totale NOI YTD', value: '€ 3,4', unit: 'mln' },
          { title: 'Bruto Jaarhuur', value: '€ 4,6', unit: 'mln' },
          { title: 'Totale OPEX & Energie', value: '€ 1,2', unit: 'mln' },
          { title: 'Gemiddeld NAR', value: '6,2', unit: '%' },
          { title: 'Paris Proof Naleving', value: '78', unit: '%' }
        ]
      },
      center: {
        label: 'Centraal: Duurzaamheidsmonitor & Energiemix',
        description: 'Duurzaamheidsmonitor (ESG-score 0–100) en energiemix-verdeling (netstroom, zon-PV, gas en stadswarmte).'
      },
      bottom: {
        label: 'Onderzijde: Financiële Matrix per Object',
        description: 'Financiële matrix waarin per object de huuropbrengst, exploitatiekosten, energiekosten en doorbelastingsgraad direct naast elkaar worden gepresenteerd.'
      }
    },
    faqs: [
      {
        question: 'Hoe berekent VOSQ de Paris Proof indicatoren?',
        answer: 'VOSQ gebruikt de officiële NTA 8800 methodiek en werkelijke kwartier-energiemetingen om het werkelijke energieverbruik per vierkante meter (kWh/m²/jaar) te toetsen aan de Paris Proof grenswaarden van de Dutch Green Building Council (DGBC).'
      },
      {
        question: 'Is de export geschikt voor CSRD-rapportages?',
        answer: 'Ja, de databestanden bevatten de gestandaardiseerde Scope 1, Scope 2 en Scope 3 (huurdersverbruik) emissiedata die accountants en auditoren direct kunnen overnemen.'
      }
    ],
    cta: {
      headline: 'Maximale grip op rendement en verduurzaming',
      text: 'Ontdek hoe VOSQ financieel rendement en ESG-compliance samenbrengt in één overzichtelijk platform.',
      buttonText: 'Vraag een ESG & NOI demo aan',
      secondaryText: 'Inclusief voorbeeld exportbestand'
    },
    targetAudience: 'CFO’s, fondsmanagers, institutionele vastgoedbeleggers en ESG-directeuren.'
  }
];
