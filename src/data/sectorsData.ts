export interface SectorData {
  id: string;
  slug: string;
  aliases: string[];
  title: string;
  h1: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  definition: string;
  summary: string;
  challenges: {
    title: string;
    description: string;
    impact: string;
  }[];
  modules: {
    title: string;
    description: string;
    kpi: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  useCase: {
    title: string;
    clientType: string;
    situation: string;
    solution: string;
    result: string;
  };
}

export const SECTORS: SectorData[] = [
  {
    id: 'woningbouw',
    slug: 'woningbouw',
    aliases: ['eigenaar-eindgebruiker', 'woningbouw/eigenaar-eindgebruiker'],
    title: 'Woningbouw',
    h1: 'Gebiedsontwikkeling software voor woningbouw & netcapaciteit',
    badge: 'Woningbouw & Gebiedsontwikkeling',
    metaTitle: 'Gebiedsontwikkeling Software & Netcapaciteit Woningbouw | VOSQ',
    metaDescription: 'Voorkom vertraging bij woningbouw door netcongestie. VOSQ software berekent aansluitvermogen, energieprofielen en scenario\'s voor woningbouw.',
    primaryKeyword: 'gebiedsontwikkeling software woningbouw',
    secondaryKeywords: [
      'netcapaciteit woningbouw analyse',
      'woningcorporatie portefeuillestrategie software',
      'energieprofiel nieuwbouw software',
      'aansluiting gecontracteerd vermogen woonwijk'
    ],
    definition: 'Gebiedsontwikkeling software voor woningbouw is een digitaal platform dat ruimtelijke plannen, grondexploitaties en gelijktijdige energievraag (warmtepompen, PV en laadinfrastructuur) berekent tegen de beschikbare netcapaciteit.',
    summary: 'Woningbouwprojecten lopen steeds vaker vast op netcongestie en onzekerheid over energie-infrastructuur. VOSQ biedt het digitale platform om al in de haalbaarheidsfase netcapaciteit, energieprofielen en vastgoedrendementen integraal door te rekenen.',
    challenges: [
      {
        title: 'Netcongestie bij projectontwikkeling',
        description: 'Nieuwbouwprojecten wachten maanden of jaren op een toereikende netaansluiting voor warmtepompen en laadinfrastructuur.',
        impact: 'Mogelijke vertraging in oplevering en oplopende financieringskosten.'
      },
      {
        title: 'Versnipperde data tussen bouw en energie',
        description: 'Vastgoeddata, bouwplannen en netcapaciteit worden beheerd in gescheiden bestanden zonder realtime koppeling.',
        impact: 'Fouten in investeringsbegrotingen en suboptimale energieconcepten.'
      },
      {
        title: 'Onzekere exploitatiekosten & nettarieven',
        description: 'Stijgende piekbelastingen leiden tot hoge capaciteitstarieven voor gebouweigenaren en bewoners.',
        impact: 'Onvoorspelbare servicekosten en risico op onrendabele toppen.'
      }
    ],
    modules: [
      {
        title: 'VOSQ Residential Grid Simulator',
        description: 'Berekent per bouwfase de gelijktijdige vermogensvraag van warmtepompen, PV en laadpalen.',
        kpi: 'Geoptimaliseerde piekaansluiting door slimme clustering'
      },
      {
        title: 'Portfolio Scenario Engine',
        description: 'Vergelijk grondexploitatie, bouwkosten en energie-CAPEX in één geïntegreerd financieel model.',
        kpi: 'Inzicht in residuele grondwaarde per energieconcept'
      },
      {
        title: 'Decentralized Energy Modeler',
        description: 'Toetst de haalbaarheid van collectieve WKO, wijkbatterijen en lokale energiegemeenschappen.',
        kpi: 'Directe aansluitbaarheidsvalidatie'
      }
    ],
    metrics: [
      { label: 'Focus haalbaarheidsfase', value: 'Snellere verkenning' },
      { label: 'Netinvestering', value: 'CAPEX-inzicht' },
      { label: 'Validatie energieconcept', value: 'Datagedreven' }
    ],
    faqs: [
      {
        question: 'Hoe helpt VOSQ bij netcongestie in nieuwbouwwijken?',
        answer: 'VOSQ simuleert het gecombineerde gelijktijdige verbruiksprofiel van warmtepompen, inductiekoken en laadpalen, waardoor ontwikkelaars met peak-shaving en batterijen kunnen onderzoeken hoe een compactere netaansluiting past.'
      },
      {
        question: 'Kan VOSQ gekoppeld worden aan GIS- en CAD-bestanden?',
        answer: 'Ja, VOSQ integreert ruimtelijke plannen en BAG-geodata om per kavel de energievraag en kabeltracés te modelleren.'
      }
    ],
    useCase: {
      title: 'Voorbeeldcase: Gebiedsontwikkeling Woonwijk met Netbeperking',
      clientType: 'Projectontwikkelaar / Woningcorporatie (illustratief)',
      situation: 'Bij een voorgenomen woonwijkontwikkeling gaf de regionale netbeheerder aan dat de gewenste transportcapaciteit pas na enkele jaren beschikbaar zou zijn.',
      solution: 'Met het VOSQ-platform werd een lokaal energy hub scenario gemodelleerd met een collectief batterijsysteem en gestuurde laadpalen.',
      result: 'Het geoptimaliseerde aansluitprofiel bood concrete onderbouwing voor het vervolgoverleg met de netbeheerder.'
    }
  },
  {
    id: 'commercieel-vastgoed',
    slug: 'commercieel-vastgoed',
    aliases: ['commercieel-vastgoed/eigenaar-eindgebruiker'],
    title: 'Commercieel vastgoed & investeringen',
    h1: 'SaaS-platform voor commercieel vastgoed, assetmanagement & netcongestie',
    badge: 'Commercieel Vastgoed & Beleggingen',
    metaTitle: 'Commercieel Vastgoed Asset Management & Netcongestie Software | VOSQ',
    metaDescription: 'Software voor vastgoedbeleggers en asset managers. Integreer netcongestie, Paris Proof normen, CAPEX en huurdersprofielen in één intelligent platform.',
    primaryKeyword: 'commercieel vastgoed energie software',
    secondaryKeywords: [
      'asset management vastgoed data platform',
      'netcongestie logistiek vastgoed software',
      'ESG en Paris Proof software vastgoed',
      'portefeuillestrategie commercieel vastgoed'
    ],
    definition: 'Commercieel vastgoed energie software is een applicatie die de exploitatiekosten, huurdersprofielen en netcapaciteit van kantoren en logistieke panden combineert om de assetwaarde en ESG-scores te waarborgen.',
    summary: 'Voor vastgoedbeleggers en asset managers is energie de nieuwe bepalende factor voor vastgoedwaarde en liquiditeit. VOSQ structureert gebouwdata, energieverbruik en netcapaciteit tot strategische portfoliobeslissingen.',
    challenges: [
      {
        title: 'Elektrificatie van huurders (Logistiek & Kantoren)',
        description: 'Huurders willen vloten elektrificeren en robotiseren, maar de bestaande gecontracteerde capaciteit schiet tekort.',
        impact: 'Leegstandsrisico en afnemende huurdersloyaliteit bij expansie.'
      },
      {
        title: 'Paris Proof & CSRD rapportagedruk',
        description: 'Beleggers moeten aantoonbaar verduurzamen zonder dat zwaardere netaansluitingen beschikbaar zijn.',
        impact: 'Waardedaling (brown discount) op niet-toekomstbestendige assets.'
      },
      {
        title: 'Gecontracteerd vermogen vs. boetebedragen',
        description: 'Overschrijding van het gecontracteerd transportvermogen leidt tot torenhoge boetes van netbeheerders.',
        impact: 'Onvoorspelbare OPEX-kosten door piekboetes.'
      }
    ],
    modules: [
      {
        title: 'Asset Portfolio Congestion Tracker',
        description: 'Dashboard van alle vastgoedobjecten met gecontracteerd vs. werkelijk piekvermogen en congestierisico.',
        kpi: 'Continue GTV-monitoring'
      },
      {
        title: 'CAPEX / ESG Optimizer',
        description: 'Reken door welke combinatie van isolatie, PV, BESS en laadpalen de hoogste assetwaarde oplevert.',
        kpi: 'Onderbouwde verduurzamings-IRR'
      },
      {
        title: 'Tenant Energy Profiler',
        description: 'Inzicht in verbruiksprofielen per huurder en simulatie van peak-shaving en submetering.',
        kpi: 'Volledige CSRD Scope 1, 2 en 3 audit-trail'
      }
    ],
    metrics: [
      { label: 'Piekbelasting', value: 'Actieve monitoring' },
      { label: 'Portefeuille-overzicht', value: 'Uniform op m²' },
      { label: 'Contractuele netkosten', value: 'Scenariovergelijking' }
    ],
    faqs: [
      {
        question: 'Wat is de relatie tussen netcongestie en vastgoedwaardering?',
        answer: 'Vastgoed zonder voldoende gecontracteerd vermogen kan huurders met elektrificatiebehoeften (zoals e-trucks) moeilijker bedienen, wat impact kan hebben op verhuurbaarheid en waardeontwikkeling.'
      },
      {
        question: 'Hoe helpt VOSQ bij CSRD Scope 3 emissies van huurders?',
        answer: 'VOSQ structureert tussenmeters en submetering conform gangbare rapportagestandaarden, zodat huurdersverbruik overzichtelijk en controleerbaar wordt geconsolideerd.'
      }
    ],
    useCase: {
      title: 'Voorbeeldcase: Logistiek Centrum met E-Truck Elektrificatiebehoefte',
      clientType: 'Logistiek Vastgoedfonds / Assetmanager (illustratief)',
      situation: 'Een hoofdhuurder wilde een wagenpark elektrificeren met snelladers, terwijl de netbeheerder een wachttijd aangaf voor netverzwaring.',
      solution: 'VOSQ modelleerde scenario\'s met dakgebonden PV, batterijopslag en een dynamisch laadbeheersysteem (EMS).',
      result: 'Het scenario gaf helder inzicht in benodigde investeringen en capaciteitsbenutting binnen de bestaande aansluiting.'
    }
  },
  {
    id: 'energie-netcongestie',
    slug: 'energie-netcongestie',
    aliases: ['gecontracteerd-vermogen-en-aansluiting'],
    title: 'Energie & netcongestie',
    h1: 'Netcongestie analyse software voor gecontracteerd vermogen en aansluitingen',
    badge: 'Netcongestie & Transportcapaciteit',
    metaTitle: 'Netcongestie Analyse Software & Gecontracteerd Vermogen | VOSQ',
    metaDescription: 'Professionele software voor netcongestie analyse. Bereken gecontracteerd transportvermogen, curtailment, congestiemanagement en alternatieve aansluitingen.',
    primaryKeyword: 'netcongestie analyse software',
    secondaryKeywords: [
      'gecontracteerd transportvermogen software',
      'capaciteitsbeperkend contract simulatie',
      'netcongestie bedrijfsterrein oplossing',
      'energiehub modelleringssoftware'
    ],
    definition: 'Netcongestie analyse software is een specialistische applicatie die kwartier-belastingsprofielen, netstationscapaciteit en flexibiliteitscontracten simuleert om piekboetes en uitbreidingsbeperkingen te elimineren.',
    summary: 'Nederland kampt met structurele netcongestie. VOSQ biedt geavanceerde SaaS-software om transportcapaciteit, gecontracteerd vermogen en flexibiliteitscontracten (zoals CBC en non-firm ATO) realtime te analyseren en te beheren.',
    challenges: [
      {
        title: 'Wachtlijsten voor transportcapaciteit',
        description: 'Zowel afname- als invoedingscongestie blokkeert uitbreiding van bedrijven en vastgoed.',
        impact: 'Stilstand van bedrijfsactiviteiten en uitgestelde investeringen.'
      },
      {
        title: 'Complexe non-firm en CBC contracten',
        description: 'Netbeheerders bieden flexibele contracten aan, maar bedrijven missen software om de financiële risico\'s door te rekenen.',
        impact: 'Onzekerheid over beschikbaar vermogen tijdens bedrijfskritische uren.'
      },
      {
        title: 'Onduidelijkheid over lokale congestie-oplossingen',
        description: 'Gebrek aan inzicht in wanneer en hoelang congestie optreedt op het specifieke middenspanningsstation.',
        impact: 'Verkeerd gedimensioneerde noodstroom- of batterijoplossingen.'
      }
    ],
    modules: [
      {
        title: 'Grid Capacity & Congestion Simulator',
        description: 'Koppelt netbeheerdersdata aan lokale assetprofielen om exacte congestie-uren en overschrijdingen te voorspellen.',
        kpi: 'Kwartierwaarde congestieprognose'
      },
      {
        title: 'ATO & CBC Contract Evaluator',
        description: 'Simuleert de opbrengsten en risico\'s van flexibele transportovereenkomsten en congestiemanagementvergoedingen.',
        kpi: 'Financiële afweging per kwartier'
      },
      {
        title: 'Energy Hub Clustering',
        description: 'Software om onderlinge energie-uitwisseling tussen naburige bedrijven en vastgoedobjecten te structureren.',
        kpi: 'Maximale benutting van gedeelde capaciteit'
      }
    ],
    metrics: [
      { label: 'Congestie-analyse', value: 'Op kwartierbasis' },
      { label: 'Netstations & aansluitingen', value: 'Centraal inzicht' },
      { label: 'Vermogensbenutting', value: 'Scenarioverkenning' }
    ],
    faqs: [
      {
        question: 'Wat is een Capaciteitsbeperkend Contract (CBC)?',
        answer: 'Een CBC is een afspraak met de netbeheerder waarbij een aangeslotene op piekmomenten tegen een vergoeding minder elektriciteit afneemt of teruglevert om het net te ontlasten.'
      },
      {
        question: 'Hoe voorspelt VOSQ congestiemomenten?',
        answer: 'VOSQ combineert historische kwartierdata, weerprofielen en regionale netbelastingsindices om pieken tijdig te signaleren en flexibiliteitsopties door te rekenen.'
      }
    ],
    useCase: {
      title: 'Voorbeeldcase: Collectieve Energiehub op Bedrijventerrein',
      clientType: 'Ondernemersvereniging / Bedrijventerrein (illustratief)',
      situation: 'Meerdere bedrijven op hetzelfde industrieterrein kregen te maken met een transportstop voor afname, waardoor bedrijfsuitbreidingen stagneerden.',
      solution: 'VOSQ bracht alle kwartierprofielen samen in een virtueel energiehub-model om gelijktijdigheidsvoordelen te kwantificeren.',
      result: 'De analyse maakte onderlinge verrekening en piekverschuiving binnen de collectieve aansluiting inzichtelijk.'
    }
  },
  {
    id: 'batterijopslag-flexibiliteit',
    slug: 'batterijopslag-flexibiliteit',
    aliases: ['batterijopslag/laadplein/EMS'],
    title: 'Batterijopslag & flexibiliteit',
    h1: 'BESS businesscase tool & software voor batterijopslag, laadpleinen en EMS',
    badge: 'BESS & Energie Flexibiliteit',
    metaTitle: 'BESS Businesscase Tool & Batterijopslag Software | VOSQ',
    metaDescription: 'Bereken en optimaliseer BESS investeringen, laadpleinen en EMS aansturing. VOSQ software modelleert onbalans, peak-shaving en congestiemanagement.',
    primaryKeyword: 'BESS businesscase tool',
    secondaryKeywords: [
      'batterijopslag software vastgoed',
      'EMS laadplein software simulatie',
      'batterij rendement doorrekenen',
      'peak shaving batterij software'
    ],
    definition: 'Een BESS businesscase tool is een softwareapplicatie die de rentabiliteit van Battery Energy Storage Systems berekent op basis van multi-market opbrengsten (onbalans, arbitrage, peak-shaving) en batterijdegradatie.',
    summary: 'Batterij-energiesystemen (BESS) en slimme laadpleinen zijn essentieel om netcongestie te overbruggen. VOSQ biedt een geavanceerde applicatie om technische dimensies, marktopbrengsten en vastgoedintegratie integraal door te rekenen.',
    challenges: [
      {
        title: 'Complexe verdienmodellen van batterijen',
        description: 'Rendement is afhankelijk van meerdere markten tegelijk: peak-shaving, onbalans, FCR, aFRR en day-ahead arbitrage.',
        impact: 'Foutieve inschatting van terugverdientijd en degradatie van het batterijpakket.'
      },
      {
        title: 'Onzekere koppeling met vastgoed en laadpleinen',
        description: 'Hoe dimensioneert u een batterij voor een laadplein zonder dat het net overbelast raakt?',
        impact: 'Overdimensionering (onnodig hoge CAPEX) of stroomuitval bij piekuren.'
      },
      {
        title: 'Veranderende netbeheerderstarieven',
        description: 'Vaste en variabele transporttarieven veranderen de rentabiliteit van batterijopslag continu.',
        impact: 'Financieringsonzekerheid bij banken en investeerders.'
      }
    ],
    modules: [
      {
        title: 'BESS Multi-Market Financial Model',
        description: 'Simuleert kwartierwaarden over 15 jaar inclusief batterijdegradatie, rente en marktontwikkelingen.',
        kpi: 'Gestructureerde businesscase'
      },
      {
        title: 'EV Charging Hub Sizer',
        description: 'Berekent de benodigde capaciteit van laadpalen, PV en batterijopslag op basis van voertuigprofielen.',
        kpi: 'Onderbouwde netdimensionering'
      },
      {
        title: 'EMS Strategy Simulator',
        description: 'Toetst verschillende sturingsalgoritmes (peak shaving vs. dynamische tariefarbitrage) vooraf aan de praktijk.',
        kpi: 'Vergelijking van sturingsstrategieën'
      }
    ],
    metrics: [
      { label: 'BESS-scenario\'s', value: 'Multi-market' },
      { label: 'Modelbasis', value: 'Kwartierdata' },
      { label: 'Investeringsinzicht', value: 'Terugverdientijd & risico' }
    ],
    faqs: [
      {
        question: 'Wat is een BESS en waarom is softwarematige simulatie noodzakelijk?',
        answer: 'Een BESS (Battery Energy Storage System) slaat overtollige zonne-energie op of laadt op tijdens lage stroomprijzen. Omdat batterijprijzen en elektriciteitsmarkten fluctueren, is simulatie van degradatie en opbrengstscenario\'s waardevol ter voorbereiding op besluitvorming.'
      },
      {
        question: 'Wat is het verschil tussen peak shaving en energie-arbitrage?',
        answer: 'Peak shaving voorkomt dat de afname boven het contractuele transportvermogen stijgt; energie-arbitrage koopt stroom in bij lage/negatieve uurprijzen en levert terug tijdens dure piekuren.'
      }
    ],
    useCase: {
      title: 'Voorbeeldcase: BESS Investeringsvalidatie voor Logistiek Knooppunt',
      clientType: 'Investeringsfonds / Ontwikkelaar (illustratief)',
      situation: 'Een ontwikkelaar wilde de haalbaarheid onderzoeken van een grootschalig batterijsysteem in combinatie met een snellaadplein voor vrachtwagens.',
      solution: 'VOSQ simuleerde 8 kwartierscenario\'s over 15 jaar, rekening houdend met batterijveroudering en dynamische markttarieven.',
      result: 'De scenariovergelijking bood een heldere kwantitatieve basis voor verdere financiële toetsing.'
    }
  },
  {
    id: 'duurzame-energie-opwek',
    slug: 'duurzame-energie-opwek',
    aliases: ['zon/smart-grid'],
    title: 'Opwek & duurzame energie',
    h1: 'Software voor duurzame energieopwek, zon op dak & smart grids',
    badge: 'Zon, Wind & Smart Grids',
    metaTitle: 'Software Duurzame Energie Opwek, Zon & Smart Grids | VOSQ',
    metaDescription: 'Software voor ontwikkelaars van grootschalige zonne-energie en smart grids. Analyseer curtailment, cable pooling en directe levering aan vastgoed.',
    primaryKeyword: 'duurzame energie opwek software',
    secondaryKeywords: [
      'zon op dak netcongestie software',
      'cable pooling simulatie tool',
      'curtailment analyse zonnepanelen',
      'smart grid optimalisatie software'
    ],
    definition: 'Duurzame energie opwek software is een systeemapplicatie die de opbrengsten van zon-PV en windenergie analyseert tegen terugleverbeperkingen, negatieve uurprijzen en lokale afzetmogelijkheden.',
    summary: 'Zon- en windprojecten worden steeds vaker afgeschakeld (curtailment) door overbelaste netten. VOSQ berekent de optimale balans tussen opwek, lokale afzet aan vastgoed en slimme opslag in smart grids.',
    challenges: [
      {
        title: 'Teruglevercongestie en afschakeling',
        description: 'Op zonnige dagen moet opwek worden afgeregeld omdat het net vol zit, wat direct leidt tot inkomstenverlies.',
        impact: 'Verlies aan potentiële groenestroomopbrengsten.'
      },
      {
        title: 'Negatieve uurprijzen op de elektriciteitsmarkt',
        description: 'Ongecontroleerde teruglevering tijdens negatieve prijzen kost geld in plaats van dat het oplevert.',
        impact: 'Oplopende onbalanskosten en dalende projectwaarde.'
      },
      {
        title: 'Complexe regelgeving rond directe levering',
        description: 'Stroom rechtstreeks leveren aan een nabijgelegen gebouw vereist ingewikkelde contractuele en technische afstemming.',
        impact: 'Lange onderhandelingstrajecten en vastlopende projecten.'
      }
    ],
    modules: [
      {
        title: 'Curtailment & Revenue Predictor',
        description: 'Kwantificeert exact hoeveel kWh afgeregeld zal worden en wat de financiële impact is per dagdeel.',
        kpi: 'Exacte rendementsprognose'
      },
      {
        title: 'Cable Pooling & Hybrid Grid Designer',
        description: 'Simuleert de gecombineerde profielen van zon, wind en batterij op één enkele netaansluiting.',
        kpi: 'Verhoogde kabelbenutting zonder netuitbreiding'
      },
      {
        title: 'Direct-Wire Real Estate Coupling',
        description: 'Berekent de businesscase voor directe levering van een zonnepark aan aangrenzend commercieel vastgoed.',
        kpi: 'Meerwaarde ten opzichte van netlevering'
      }
    ],
    metrics: [
      { label: 'Opwekanalyse', value: 'PV, wind & smart grid' },
      { label: 'Curtailment-effect', value: 'Kwartierinzicht' },
      { label: 'Aansluitbenutting', value: 'Cable pooling model' }
    ],
    faqs: [
      {
        question: 'Wat is curtailment bij zonneparken?',
        answer: 'Curtailment is het verplicht of vrijwillig afknijpen van de omvormers wanneer het elektriciteitsnet de stroom niet kan opnemen of wanneer marktprijzen negatief zijn.'
      },
      {
        question: 'Hoe werkt cable pooling in VOSQ?',
        answer: 'Cable pooling combineert opwekbronnen met verschillende piekuren (bijv. zon overdag en wind \'s nachts) op dezelfde fysieke kabel. VOSQ simuleert de overschrijdingskansen en verkent de optimale verhouding.'
      }
    ],
    useCase: {
      title: 'Voorbeeldcase: Zon-op-Dak met Directe Levering aan Huurders',
      clientType: 'Zonne-energie ontwikkelaar / Gebouweigenaar (illustratief)',
      situation: 'Een grootschalig zonne-energiesysteem op een distributiecentrum liep het risico op terugleverbeperkingen door netcongestie.',
      solution: 'VOSQ modelleerde een lokale koppeling met de energiebehoefte van de zittende huurders en een peak-shaving batterijsysteem.',
      result: 'Het model bracht de lokale afzetmogelijkheden en financiële effecten voor verhuurder en huurder helder in kaart.'
    }
  },
  {
    id: 'overheden-maatschappelijk',
    slug: 'overheden-maatschappelijk',
    aliases: ['overheden-eigenaar-eindgebruiker'],
    title: 'Overheden & maatschappelijk vastgoed',
    h1: 'Software voor overheden, maatschappelijk vastgoed & gebiedsregie',
    badge: 'Publieke Sector & Maatschappelijk Vastgoed',
    metaTitle: 'Software Overheden & Maatschappelijk Vastgoed Energie | VOSQ',
    metaDescription: 'Software voor gemeenten, provincies en maatschappelijke organisaties. Koppel vastgoedvisies aan de energietransitie, warmtenetten en netcongestie.',
    primaryKeyword: 'software maatschappelijk vastgoed energie',
    secondaryKeywords: [
      'gemeentelijke energievisie software',
      'gebiedsregie netcongestie applicatie',
      'maatschappelijk vastgoed verduurzaming tool',
      'publiek private energiehub software'
    ],
    definition: 'Software voor maatschappelijk vastgoed en gebiedsregie ondersteunt publieke organisaties bij het afstemmen van gemeentelijk vastgoed, warmtetransitie en netcongestie op basis van objectieve geodata.',
    summary: 'Gemeenten en publieke organisaties staan voor de opgave om woningbouw, verduurzaming van maatschappelijk vastgoed en netcongestie gelijktijdig te regisseren. VOSQ biedt het centrale dataplatform voor integrale besluitvorming.',
    challenges: [
      {
        title: 'Conflicterende beleidsdoelen (Bouwen vs. Energie)',
        description: 'Woningbouwambities botsen met overbelaste elektriciteitsnetten en vertraagde warmtenetten.',
        impact: 'Beleid loopt vast in complexe overlegstructuren zonder feitenbasis.'
      },
      {
        title: 'Versnipperde maatschappelijke portefeuille',
        description: 'Scholen, sportaccommodaties en wijkcentra hebben verouderde aansluitingen en uiteenlopende energielabels.',
        impact: 'Inefficiënte inzet van gemeentelijke verduurzamingsbudgetten.'
      },
      {
        title: 'Gebrek aan objectieve data in afstemming met netbeheerder',
        description: 'Overheden hebben moeite om prioritering bij netbeheerders te onderbouwen met kwantitatieve impactanalyses.',
        impact: 'Projecten worden op willekeurige volgorde behandeld.'
      }
    ],
    modules: [
      {
        title: 'Municipal Energy & Spatial Regie Tool',
        description: 'Integreert bestemmingsplannen, woningbouwprognoses en netcapaciteitsdata op één interactieve kaart.',
        kpi: 'Objectieve prioriteringsmatrix'
      },
      {
        title: 'Public Asset Decarbonization Planner',
        description: 'Structureert de gemeentelijke vastgoedportefeuille op basis van labelverbetering, netbelasting en maatschappelijk rendement.',
        kpi: 'Gestructureerde route naar klimaatneutraal'
      },
      {
        title: 'Citizen & Stakeholder Insight Portal',
        description: 'Genereert transparante rapportages over lokale energiehubs en de impact op de leefomgeving.',
        kpi: 'Draagvlakvergroting bij raad en stakeholders'
      }
    ],
    metrics: [
      { label: 'Gebiedsregie', value: 'Ruimte & energie' },
      { label: 'Vastgoedportefeuille', value: 'Centraal dossier' },
      { label: 'Beleidsafstemming', value: 'Datagedreven' }
    ],
    faqs: [
      {
        question: 'Hoe helpt VOSQ gemeenten in de afstemming met netbeheerders?',
        answer: 'VOSQ levert gestructureerde kwartierprofielen en ruimtelijke data die als gezamenlijk vertrekpunt dienen, waardoor overleg plaatsvindt op basis van feiten.'
      },
      {
        question: 'Is VOSQ compatibel met gemeentelijke standaarden?',
        answer: 'Ja, VOSQ sluit aan op de BAG, BGT, Kadaster en landelijke energielabelregistraties van RVO.'
      }
    ],
    useCase: {
      title: 'Voorbeeldcase: Regionale Energie- en Ruimtelijke Planning',
      clientType: 'Gemeente / Regionale Energie Regie (illustratief)',
      situation: 'Een overheidsinstantie zocht een eenduidige methode om prioriteit toe te kennen aan nieuwbouwlocaties rekening houdend met netcapaciteit en warmtevisies.',
      solution: 'VOSQ bracht alle ruimtelijke plannen en netcongestiekaarten samen in een integraal scenariomodel.',
      result: 'Het overzicht ondersteunde een feitelijk onderbouwd vervolgoverleg tussen netbeheerder en gemeenteraad.'
    }
  }
];
