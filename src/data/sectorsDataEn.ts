import { SectorData } from './sectorsData';

export const SECTORS_EN: SectorData[] = [
  {
    id: 'woningbouw',
    slug: 'woningbouw',
    aliases: ['eigenaar-eindgebruiker', 'woningbouw/eigenaar-eindgebruiker'],
    title: 'Residential Development',
    h1: 'Area development software for residential real estate & grid capacity',
    badge: 'Residential & Area Development',
    metaTitle: 'Area Development Software & Residential Grid Capacity | VOSQ',
    metaDescription: 'Prevent housing project delays caused by grid congestion. VOSQ calculates connection capacity, energy profiles, and feasibility scenarios for residential projects.',
    primaryKeyword: 'residential area development software',
    secondaryKeywords: [
      'residential grid capacity analysis',
      'housing association portfolio strategy software',
      'new-build energy profile modeling',
      'contracted capacity residential district'
    ],
    definition: 'Area development software for residential projects is a digital platform that models spatial plans, land economics, and simultaneous energy demand (heat pumps, PV, and EV charging) against available grid capacity.',
    summary: 'Residential developments increasingly stall due to grid congestion and energy infrastructure uncertainty. VOSQ provides the digital platform to calculate grid capacity, energy profiles, and real estate returns holistically from the feasibility phase onward.',
    challenges: [
      {
        title: 'Grid congestion in new developments',
        description: 'New housing projects face months or years of waiting for an adequate grid connection for heat pumps and EV charging.',
        impact: 'Potential delivery delays and rising financing costs.'
      },
      {
        title: 'Fragmented data between construction and energy',
        description: 'Property records, construction plans, and grid capacity are tracked in disconnected files without real-time synchronization.',
        impact: 'Errors in CAPEX budgets and suboptimal energy concepts.'
      },
      {
        title: 'Uncertain operating costs & grid tariffs',
        description: 'Rising peak loads lead to higher capacity tariffs for building owners and residents.',
        impact: 'Unpredictable service charges and risk of unviable project components.'
      }
    ],
    modules: [
      {
        title: 'VOSQ Residential Grid Simulator',
        description: 'Models simultaneous peak demand from heat pumps, solar PV, and EV chargers per construction phase.',
        kpi: 'Optimized peak connection via smart clustering'
      },
      {
        title: 'Portfolio Scenario Engine',
        description: 'Compare land economics, construction costs, and energy CAPEX in one integrated financial model.',
        kpi: 'Insight into residual land value per energy concept'
      },
      {
        title: 'Decentralized Energy Modeler',
        description: 'Evaluates the feasibility of collective ATES, neighborhood batteries, and local energy communities.',
        kpi: 'Direct grid-connection validation'
      }
    ],
    metrics: [
      { label: 'Feasibility focus', value: 'Faster exploration' },
      { label: 'Grid investment', value: 'CAPEX clarity' },
      { label: 'Energy concept check', value: 'Data-driven' }
    ],
    faqs: [
      {
        question: 'How does VOSQ help address grid congestion in new residential districts?',
        answer: 'VOSQ simulates the combined simultaneous load profile of heat pumps, induction cooking, and EV chargers, allowing developers to evaluate how peak shaving and batteries enable a more compact grid connection.'
      },
      {
        question: 'Can VOSQ integrate with GIS and CAD files?',
        answer: 'Yes, VOSQ integrates spatial plans and cadastral BAG geodata to model energy demand and cable routing per plot.'
      }
    ],
    useCase: {
      title: 'Sample Case: Residential District Development Under Grid Constraints',
      clientType: 'Property Developer / Housing Association (illustrative)',
      situation: 'For a planned residential district, the regional DSO indicated that the requested transport capacity would not be available for several years.',
      solution: 'Using VOSQ, a local energy hub scenario was modeled featuring a shared battery system and smart-managed EV chargers.',
      result: 'The optimized connection profile provided concrete quantitative backing for follow-up discussions with the DSO.'
    }
  },
  {
    id: 'commercieel-vastgoed',
    slug: 'commercieel-vastgoed',
    aliases: ['commercieel-vastgoed/eigenaar-eindgebruiker'],
    title: 'Commercial Real Estate & Investments',
    h1: 'SaaS platform for commercial real estate, asset management & grid congestion',
    badge: 'Commercial Real Estate & Investments',
    metaTitle: 'Commercial Real Estate Asset Management & Grid Congestion Software | VOSQ',
    metaDescription: 'Software for real estate investors and asset managers. Integrate grid congestion, Paris Proof standards, CAPEX, and tenant profiles into one intelligent platform.',
    primaryKeyword: 'commercial real estate energy software',
    secondaryKeywords: [
      'real estate asset management data platform',
      'logistics real estate grid congestion software',
      'ESG and Paris Proof real estate software',
      'commercial portfolio strategy'
    ],
    definition: 'Commercial real estate energy software is an application combining operating costs, tenant profiles, and grid capacity across office and logistics properties to protect asset value and ESG performance.',
    summary: 'For real estate investors and asset managers, energy is the decisive new driver of property value and liquidity. VOSQ structures building data, energy consumption, and grid capacity into strategic portfolio decisions.',
    challenges: [
      {
        title: 'Tenant electrification (Logistics & Offices)',
        description: 'Tenants want to electrify and automate vehicle fleets, while existing contracted grid capacity falls short.',
        impact: 'Vacancy risk and lower tenant retention during expansion.'
      },
      {
        title: 'Paris Proof & CSRD reporting pressure',
        description: 'Investors must demonstrate verifiable decarbonization even where heavier grid connections are unavailable.',
        impact: 'Valuation pressure (brown discount) on non-future-proof assets.'
      },
      {
        title: 'Contracted capacity vs. penalty fees',
        description: 'Exceeding contracted transport capacity triggers severe penalty charges from grid operators.',
        impact: 'Unpredictable OPEX surges due to peak surcharges.'
      }
    ],
    modules: [
      {
        title: 'Asset Portfolio Congestion Tracker',
        description: 'Portfolio dashboard contrasting contracted vs. actual peak demand and congestion exposure across every asset.',
        kpi: 'Continuous GTV monitoring'
      },
      {
        title: 'CAPEX / ESG Optimizer',
        description: 'Model which mix of insulation, solar PV, BESS, and EV charging delivers the strongest asset value uplift.',
        kpi: 'Substantiated sustainability IRR'
      },
      {
        title: 'Tenant Energy Profiler',
        description: 'Visibility into load profiles per tenant alongside simulations for peak shaving and submetering.',
        kpi: 'Full CSRD Scope 1, 2 & 3 audit trail'
      }
    ],
    metrics: [
      { label: 'Peak load', value: 'Active monitoring' },
      { label: 'Portfolio view', value: 'Normalized per m²' },
      { label: 'Contractual grid costs', value: 'Scenario comparison' }
    ],
    faqs: [
      {
        question: 'What is the link between grid congestion and real estate valuation?',
        answer: 'Properties lacking sufficient contracted capacity struggle to accommodate tenants with electrification needs (such as e-trucks), directly affecting lettability and long-term value development.'
      },
      {
        question: 'How does VOSQ support CSRD Scope 3 tenant emissions?',
        answer: 'VOSQ structures sub-meters and metering hierarchies aligned with recognized reporting standards so tenant energy usage is consolidated cleanly and auditable.'
      }
    ],
    useCase: {
      title: 'Sample Case: Logistics Hub with E-Truck Electrification Demand',
      clientType: 'Logistics Real Estate Fund / Asset Manager (illustrative)',
      situation: 'An anchor tenant sought to electrify its fleet with fast chargers while the DSO indicated a multi-year wait for grid reinforcement.',
      solution: 'VOSQ modeled scenarios combining rooftop solar PV, battery storage, and a dynamic Energy Management System (EMS).',
      result: 'The scenario provided clear insight into required CAPEX and capacity utilization within the existing grid connection.'
    }
  },
  {
    id: 'energie-netcongestie',
    slug: 'energie-netcongestie',
    aliases: ['gecontracteerd-vermogen-en-aansluiting'],
    title: 'Energy & Grid Congestion',
    h1: 'Grid congestion analysis software for contracted capacity and connections',
    badge: 'Grid Congestion & Transport Capacity',
    metaTitle: 'Grid Congestion Analysis Software & Contracted Capacity | VOSQ',
    metaDescription: 'Professional software for grid congestion analysis. Evaluate contracted transport capacity, curtailment, congestion management, and flexible connection agreements.',
    primaryKeyword: 'grid congestion analysis software',
    secondaryKeywords: [
      'contracted transport capacity software',
      'capacity-limiting contract simulation',
      'business park grid congestion solution',
      'energy hub modeling software'
    ],
    definition: 'Grid congestion analysis software is a specialized application simulating quarter-hour load profiles, substation capacities, and flexibility contracts to eliminate peak penalties and expansion bottlenecks.',
    summary: 'Structural grid congestion affects property and industry alike. VOSQ provides advanced software to analyze and manage transport capacity, contracted power, and flexibility agreements (such as CBC and non-firm ATOs) in real time.',
    challenges: [
      {
        title: 'Waiting lists for transport capacity',
        description: 'Both off-take and feed-in congestion block business and real estate expansion.',
        impact: 'Operational bottlenecks and deferred capital projects.'
      },
      {
        title: 'Complex non-firm and CBC contracts',
        description: 'Grid operators offer flexible transport contracts, yet organizations lack tools to model the financial risks.',
        impact: 'Uncertainty over available capacity during mission-critical hours.'
      },
      {
        title: 'Lack of clarity on local congestion solutions',
        description: 'Limited visibility into when and for how long congestion occurs at the specific medium-voltage substation.',
        impact: 'Improperly sized backup or battery storage installations.'
      }
    ],
    modules: [
      {
        title: 'Grid Capacity & Congestion Simulator',
        description: 'Combines DSO grid data with local asset profiles to forecast exact congestion hours and potential overruns.',
        kpi: '15-minute congestion forecast'
      },
      {
        title: 'ATO & CBC Contract Evaluator',
        description: 'Simulates revenues and risks of flexible transport agreements and congestion management compensations.',
        kpi: 'Financial trade-off per 15 min'
      },
      {
        title: 'Energy Hub Clustering',
        description: 'Software tools to structure mutual energy exchange between neighboring businesses and properties.',
        kpi: 'Optimal utilization of shared capacity'
      }
    ],
    metrics: [
      { label: 'Congestion analysis', value: 'Quarter-hour granularity' },
      { label: 'Substations & connections', value: 'Central oversight' },
      { label: 'Capacity utilization', value: 'Scenario exploration' }
    ],
    faqs: [
      {
        question: 'What is a Capacity-Limiting Contract (CBC)?',
        answer: 'A CBC is an agreement with the grid operator in which a connected party reduces electricity import or feed-in during peak congestion periods in exchange for financial compensation.'
      },
      {
        question: 'How does VOSQ forecast congestion events?',
        answer: 'VOSQ combines historical quarter-hour data, weather profiles, and regional grid load indices to flag peaks early and evaluate flexibility options.'
      }
    ],
    useCase: {
      title: 'Sample Case: Collective Energy Hub at an Industrial Park',
      clientType: 'Business Association / Industrial Estate (illustrative)',
      situation: 'Multiple businesses on the same estate faced an off-take moratorium, stalling site expansions.',
      solution: 'VOSQ consolidated all quarter-hour profiles into a virtual energy hub model to quantify diversity and coincidence benefits.',
      result: 'The analysis clarified internal settlement mechanics and peak shifting within the collective grid connection.'
    }
  },
  {
    id: 'batterijopslag-flexibiliteit',
    slug: 'batterijopslag-flexibiliteit',
    aliases: ['batterijopslag/laadplein/EMS'],
    title: 'Battery Storage & Flexibility',
    h1: 'BESS business case tool & software for battery storage, charging hubs & EMS',
    badge: 'BESS & Energy Flexibility',
    metaTitle: 'BESS Business Case Tool & Battery Storage Software | VOSQ',
    metaDescription: 'Calculate and optimize BESS investments, EV charging plazas, and EMS controls. VOSQ models imbalance markets, peak shaving, and congestion management.',
    primaryKeyword: 'BESS business case tool',
    secondaryKeywords: [
      'real estate battery storage software',
      'EMS charging hub simulation software',
      'battery ROI modeling tool',
      'peak shaving battery software'
    ],
    definition: 'A BESS business case tool is a software application modeling the financial viability of Battery Energy Storage Systems across multi-market revenue streams (imbalance, arbitrage, peak shaving) and battery degradation.',
    summary: 'Battery Energy Storage Systems (BESS) and smart EV charging hubs are essential to bridge grid congestion. VOSQ delivers an integrated application to model technical sizing, market revenues, and building integration.',
    challenges: [
      {
        title: 'Complex battery revenue stacking',
        description: 'Returns depend on multiple markets simultaneously: peak shaving, imbalance, FCR, aFRR, and day-ahead arbitrage.',
        impact: 'Misestimation of payback periods and battery cell degradation.'
      },
      {
        title: 'Uncertain coupling with buildings & charging hubs',
        description: 'How do you size a battery for an EV charging plaza without overloading the grid connection?',
        impact: 'Oversizing (excess CAPEX) or power trips during peak hours.'
      },
      {
        title: 'Shifting DSO grid tariffs',
        description: 'Fixed and variable transport tariffs continuously alter battery storage economics.',
        impact: 'Financing uncertainty among lenders and investors.'
      }
    ],
    modules: [
      {
        title: 'BESS Multi-Market Financial Model',
        description: 'Simulates 15-minute intervals across a 15-year horizon including cell degradation, financing costs, and market dynamics.',
        kpi: 'Structured business case'
      },
      {
        title: 'EV Charging Hub Sizer',
        description: 'Calculates required charger, PV, and battery capacities based on actual or expected vehicle arrival profiles.',
        kpi: 'Evidence-based grid sizing'
      },
      {
        title: 'EMS Strategy Simulator',
        description: 'Pre-tests different control algorithms (peak shaving vs. dynamic tariff arbitrage) prior to field deployment.',
        kpi: 'Control strategy comparison'
      }
    ],
    metrics: [
      { label: 'BESS scenarios', value: 'Multi-market' },
      { label: 'Model foundation', value: '15-min interval data' },
      { label: 'Investment insight', value: 'Payback & risk' }
    ],
    faqs: [
      {
        question: 'What is a BESS and why is software simulation valuable?',
        answer: 'A BESS (Battery Energy Storage System) stores surplus solar energy or charges during low-price hours. Because hardware prices and power markets fluctuate, simulating degradation and revenue scenarios helps substantiate decisions before commitment.'
      },
      {
        question: 'What is the difference between peak shaving and energy arbitrage?',
        answer: 'Peak shaving keeps grid import below contracted transport capacity; energy arbitrage purchases power at low/negative hourly prices and discharges during high-price peak intervals.'
      }
    ],
    useCase: {
      title: 'Sample Case: BESS Investment Validation for a Logistics Node',
      clientType: 'Investment Fund / Developer (illustrative)',
      situation: 'A developer wanted to evaluate the feasibility of a large-scale battery paired with a heavy-duty e-truck fast-charging plaza.',
      solution: 'VOSQ simulated 8 quarter-hour scenarios over 15 years, accounting for battery aging and dynamic market tariffs.',
      result: 'The scenario comparison established a clear quantitative baseline for further financial due diligence.'
    }
  },
  {
    id: 'duurzame-energie-opwek',
    slug: 'duurzame-energie-opwek',
    aliases: ['zon/smart-grid'],
    title: 'Renewables & Smart Grids',
    h1: 'Software for renewable generation, rooftop solar & smart grids',
    badge: 'Solar, Wind & Smart Grids',
    metaTitle: 'Renewable Generation, Rooftop Solar & Smart Grid Software | VOSQ',
    metaDescription: 'Software for large-scale solar developers and smart grids. Analyze curtailment, cable pooling, and direct wire supply to commercial properties.',
    primaryKeyword: 'renewable energy generation software',
    secondaryKeywords: [
      'rooftop solar grid congestion software',
      'cable pooling simulation tool',
      'solar PV curtailment analysis',
      'smart grid optimization software'
    ],
    definition: 'Renewable generation software analyzes solar PV and wind output against feed-in restrictions, negative market prices, and local off-take opportunities.',
    summary: 'Solar and wind assets are increasingly curtailed due to congested grids. VOSQ calculates the optimal balance between generation, local supply to properties, and smart storage within smart grids.',
    challenges: [
      {
        title: 'Feed-in congestion and curtailment',
        description: 'On sunny days generation must be throttled when the grid saturates, causing direct revenue loss.',
        impact: 'Loss of potential green power output.'
      },
      {
        title: 'Negative hourly electricity prices',
        description: 'Uncontrolled feed-in during negative price intervals incurs costs rather than generating revenue.',
        impact: 'Rising imbalance charges and lower asset value.'
      },
      {
        title: 'Complex rules around direct supply',
        description: 'Supplying power directly to an adjacent building requires complex contractual and technical alignment.',
        impact: 'Protracted negotiations and stalled projects.'
      }
    ],
    modules: [
      {
        title: 'Curtailment & Revenue Predictor',
        description: 'Quantifies how many kWh are curtailed and the financial impact per time-of-day window.',
        kpi: 'Accurate yield forecast'
      },
      {
        title: 'Cable Pooling & Hybrid Grid Designer',
        description: 'Simulates combined solar, wind, and battery profiles sharing a single physical grid connection.',
        kpi: 'Higher cable utilization without grid expansion'
      },
      {
        title: 'Direct-Wire Real Estate Coupling',
        description: 'Calculates the business case for direct supply from a solar array to adjacent commercial real estate.',
        kpi: 'Added value vs. grid export'
      }
    ],
    metrics: [
      { label: 'Generation analysis', value: 'PV, wind & smart grid' },
      { label: 'Curtailment effect', value: '15-min insight' },
      { label: 'Connection usage', value: 'Cable pooling model' }
    ],
    faqs: [
      {
        question: 'What is curtailment in solar parks?',
        answer: 'Curtailment is the mandatory or voluntary throttling of inverters when the electricity grid cannot absorb output or when spot market prices turn negative.'
      },
      {
        question: 'How does cable pooling work in VOSQ?',
        answer: 'Cable pooling combines generation sources with complementary peak hours (e.g., daytime solar and nighttime wind) onto one physical connection. VOSQ simulates exceedance probabilities to identify the optimal ratio.'
      }
    ],
    useCase: {
      title: 'Sample Case: Rooftop Solar with Direct Supply to Tenants',
      clientType: 'Solar Developer / Building Owner (illustrative)',
      situation: 'A large-scale rooftop solar array on a distribution center faced feed-in curtailment risks due to local grid congestion.',
      solution: 'VOSQ modeled a local coupling with the resident tenants’ load profiles alongside a peak-shaving battery system.',
      result: 'The model clearly mapped local off-take potential and financial effects for both landlord and tenant.'
    }
  },
  {
    id: 'overheden-maatschappelijk',
    slug: 'overheden-maatschappelijk',
    aliases: ['overheden-eigenaar-eindgebruiker'],
    title: 'Public Sector & Social Real Estate',
    h1: 'Software for municipalities, social real estate & regional planning',
    badge: 'Public Sector & Social Real Estate',
    metaTitle: 'Public Sector & Social Real Estate Energy Software | VOSQ',
    metaDescription: 'Software for municipalities, provinces, and public institutions. Align real estate visions with the energy transition, heat networks, and grid congestion.',
    primaryKeyword: 'social real estate energy software',
    secondaryKeywords: [
      'municipal energy vision software',
      'regional grid congestion planning app',
      'social real estate decarbonization tool',
      'public-private energy hub software'
    ],
    definition: 'Software for social real estate and area coordination supports public organizations in aligning municipal properties, heat transitions, and grid congestion using objective spatial data.',
    summary: 'Municipalities and public bodies must coordinate housing growth, social real estate decarbonization, and grid congestion simultaneously. VOSQ provides the central data platform for integrated decision-making.',
    challenges: [
      {
        title: 'Conflicting policy goals (Housing vs. Energy)',
        description: 'Housing construction targets clash with congested electricity grids and delayed district heating networks.',
        impact: 'Policy stalls in complex multi-stakeholder consultations without a shared factual baseline.'
      },
      {
        title: 'Fragmented public asset portfolio',
        description: 'Schools, sports facilities, and community centers operate with outdated connections and varying EPC ratings.',
        impact: 'Inefficient allocation of municipal sustainability budgets.'
      },
      {
        title: 'Lack of objective data in DSO coordination',
        description: 'Public authorities struggle to substantiate project prioritization to DSOs with quantitative impact analyses.',
        impact: 'Projects are queued arbitrarily rather than strategically.'
      }
    ],
    modules: [
      {
        title: 'Municipal Energy & Spatial Regie Tool',
        description: 'Integrates zoning plans, housing forecasts, and grid capacity maps onto a single interactive spatial canvas.',
        kpi: 'Objective prioritization matrix'
      },
      {
        title: 'Public Asset Decarbonization Planner',
        description: 'Structures the municipal real estate portfolio around EPC upgrades, grid load, and societal return.',
        kpi: 'Structured pathway to net zero'
      },
      {
        title: 'Citizen & Stakeholder Insight Portal',
        description: 'Generates transparent reports on local energy hubs and environmental impacts.',
        kpi: 'Stronger council & stakeholder buy-in'
      }
    ],
    metrics: [
      { label: 'Area coordination', value: 'Spatial & energy' },
      { label: 'Asset portfolio', value: 'Central dossier' },
      { label: 'Policy alignment', value: 'Data-driven' }
    ],
    faqs: [
      {
        question: 'How does VOSQ help municipalities collaborate with grid operators?',
        answer: 'VOSQ delivers structured quarter-hour load profiles and spatial data as a shared factual starting point for DSO consultations.'
      },
      {
        question: 'Is VOSQ compatible with Dutch public data standards?',
        answer: 'Yes, VOSQ connects seamlessly with BAG, BGT, Kadaster, and national RVO energy label registries.'
      }
    ],
    useCase: {
      title: 'Sample Case: Regional Energy and Spatial Planning',
      clientType: 'Municipality / Regional Energy Office (illustrative)',
      situation: 'A public authority needed an objective method to prioritize new development sites accounting for grid capacity and heat transition plans.',
      solution: 'VOSQ brought spatial plans and grid congestion maps together into one integrated scenario model.',
      result: 'The overview supported fact-based follow-up consultations between the grid operator and municipal council.'
    }
  }
];
