import { ProductGroup } from './productsData';

export const PRODUCTS_EN: ProductGroup[] = [
  {
    id: 'vastgoedportefeuille-objectbeheer',
    slug: 'vastgoedportefeuille-objectbeheer',
    badge: 'Real Estate & Dossier',
    title: 'Real Estate Portfolio & Asset Management',
    tagline: 'Central asset register, BAG integration & 10-chapter dossiers',
    h1: 'Integrated Real Estate Management and Asset Dossiers Without Fragmented Data',
    metaTitle: 'Real Estate Portfolio & Asset Management Software | VOSQ',
    metaDescription: 'Centralized asset register and structured property dossiers for real estate investors. Connect cadastral records, leases, and EPC ratings in a single source of truth.',
    definition: 'Real Estate Portfolio & Asset Management is the VOSQ software module that centralizes scattered technical, legal, and financial building data into a unified asset register and lifecycle dossier.',
    problem: {
      summary: 'Real estate investors and asset managers often oversee portfolios through fragmented systems: technical inspections live in standalone PDFs, cadastral records in spreadsheets, and EPC ratings or lease data in separate software tools.',
      points: [
        'During acquisition, operations, or disposal, there is no single source of truth.',
        'Administrative delays and high advisory and due diligence costs around transactions.',
        'Blind spots in risk management, building quality, and outdated records on floor areas and leases.'
      ]
    },
    solution: {
      summary: 'VOSQ structures your complete real estate portfolio in a standardized data model linked directly to public registries and energy flows.',
      modules: [
        {
          name: 'Central Asset Register',
          description: 'A single standardized record per property with unique ID, legal entity, ownership structure, BAG ID, cadastral parcels, and validated areas (GFA/NLA/usable area).',
          kpi: 'Fully traceable source data'
        },
        {
          name: '10-Chapter Asset Dossier',
          description: 'Structured dossier compilation covering management summary, building engineering and installations, regulatory compliance, permits, and variance analyses.',
          kpi: 'Export-ready data room'
        },
        {
          name: 'Lifecycle & Exit Workflow',
          description: 'Management of active, redevelopment, and archived properties, including an automated exit checklist for divestment or restructuring.',
          kpi: 'Structured due diligence preparation'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Top Panel: Compact KPI Tiles (Illustrative)',
        description: 'Immediate visibility into macro indicators across your entire portfolio.',
        kpis: [
          { title: 'Total Portfolio Value', value: '€ 64.0', unit: 'M' },
          { title: 'Gross Rental Income', value: '€ 4.6', unit: 'M/yr' },
          { title: 'Average Occupancy', value: '96.4', unit: '%' },
          { title: 'EPC Label A or Better', value: '88', unit: '%' },
          { title: 'CO₂ Reduction vs. Baseline', value: '24.8', unit: '%' }
        ]
      },
      center: {
        label: 'Center Panel: GIS & Financial Performance Matrix',
        description: 'Interactive satellite and GIS map of all sites paired with an analytical performance overview contrasting Net Operating Income (NOI) directly against operating expenses.'
      },
      bottom: {
        label: 'Bottom Panel: Complete Asset Overview',
        description: 'Filterable asset list by asset class (logistics, offices, retail, residential), construction year, current occupancy, and a shortcut to each property’s official Energy Passport.'
      }
    },
    faqs: [
      {
        question: 'How does VOSQ integrate with the Land Registry and BAG?',
        answer: 'VOSQ connects via official public registry APIs. Using a BAG ID or parcel reference, parcel boundaries, usage functions, and construction years are automatically imported and kept up to date.'
      },
      {
        question: 'What does the 10-Chapter Asset Dossier cover?',
        answer: 'The dossier structures the management summary, ownership structure, structural condition, MEP systems, multi-year maintenance plans (MJOP), tenant leases, energy profiles, compliance certificates, ESG scores, and disposal documents.'
      }
    ],
    cta: {
      headline: 'Gain control over your entire real estate portfolio',
      text: 'Experience how VOSQ’s central asset register brings clarity and structure to operations and disposal dossiers.',
      buttonText: 'Request a personal demo',
      secondaryText: 'or get in touch to explore your portfolio setup'
    },
    targetAudience: 'Real estate investors, asset managers, housing associations, and family offices.'
  },
  {
    id: 'energiemonitor-kwartierdata',
    slug: 'energiemonitor-kwartierdata',
    badge: 'Energy & Grid Congestion',
    title: 'Energy Monitor & Quarter-Hour Data Analysis',
    tagline: '15-minute intervals, capacity formula & grid congestion monitoring',
    h1: 'Real-Time Visibility into Quarter-Hour Data, Peak Loads, and Grid Congestion Risks',
    metaTitle: 'Energy Monitor & Quarter-Hour Data Analysis Software | VOSQ',
    metaDescription: 'Prevent DSO peak capacity penalties and analyze grid congestion every 15 minutes. Monitor Contracted Transport Capacity (GTV) and simulate BESS & EV.',
    definition: 'Grid congestion occurs when the electricity grid lacks sufficient capacity for demanded or fed-in power. The Energy Monitor analyzes 15-minute interval data to prevent peak penalties and outages.',
    problem: {
      summary: 'Due to growing grid congestion in the Netherlands, property owners face strict capacity limits. Unnoticed peaks above Contracted Transport Capacity (GTV) result in steep DSO penalty tariffs (~€ 42 per exceeded kW).',
      points: [
        'Unexpected peak surcharges running into tens of thousands of euros per month upon exceeding contracted capacity.',
        'Solar PV installations are curtailed due to feed-in restrictions, leaving sustainable investments underutilized.',
        'Night-time system faults and weekend standby baseload cause thousands of euros in wasted energy expenditure.'
      ]
    },
    solution: {
      summary: 'VOSQ automatically ingests quarter-hour meter data, continuously tracks capacity thresholds, and simulates flexibility measures such as battery storage (BESS).',
      modules: [
        {
          name: 'P4 & Telemetry 15-Min Data Importer',
          description: 'Automated 7-step import wizard for CSV/Excel datasets from regional grid operators (Enexis, Liander, Stedin) and metering companies (Fudura, Kenter).',
          kpi: 'Automated data ingestion'
        },
        {
          name: 'Peak & Capacity Monitoring',
          description: 'Strict tracking of the capacity formula with automated alerts as soon as peak demand approaches 90% of the GTV contract ceiling.',
          kpi: 'Early peak warnings'
        },
        {
          name: 'Weekly Heatmap & Baseload Analysis',
          description: 'Visual 24/7 intensity matrix exposing unnecessary weekend and overnight standby consumption at a glance.',
          kpi: 'Immediate baseload visibility'
        },
        {
          name: 'Scenario Simulator',
          description: 'Indicative assessment of EV charging plazas, all-electric heat pumps, solar PV expansions, and BESS against physical and contractual grid capacity.',
          kpi: 'Indicative capacity exploration'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Top Panel: Real-Time Energy & Capacity Indicators (Illustrative)',
        description: 'Core gauges for active load and transport capacity.',
        kpis: [
          { title: 'Total Grid Import', value: '2,963', unit: 'MWh' },
          { title: 'Total Feed-In', value: '412', unit: 'MWh' },
          { title: 'Current PV Output', value: '385', unit: 'kW' },
          { title: 'Highest 15-Min Peak', value: '640', unit: 'kW' },
          { title: 'GTV Utilization', value: '86', unit: '%' }
        ]
      },
      center: {
        label: 'Center Panel: 24-Hour Quarter-Hour Profile with GTV Ceiling',
        description: 'Interactive 24-hour 15-minute load curve plotted directly against the red GTV contract limit and solar generation curves.'
      },
      bottom: {
        label: 'Bottom Panel: 24/7 Weekly Heatmap & Smart Alerts',
        description: 'Color-coded Monday–Sunday quarter-hour heatmap paired with active alerts and actionable peak-shaving recommendations.'
      }
    },
    faqs: [
      {
        question: 'What is Contracted Transport Capacity (GTV) and why is exceeding it expensive?',
        answer: 'GTV is the maximum capacity agreed contractually with your grid operator. Exceeding this 15-minute peak threshold triggers a penalty tariff of approximately € 42 per exceeded kW and can lead to mandatory connection upgrades or sanctions.'
      },
      {
        question: 'Which metering data formats does VOSQ support?',
        answer: 'VOSQ supports P4 data from all Dutch regional grid operators (Liander, Enexis, Stedin, Coteq, Rendo) and telemetry feeds from accredited metering companies such as Fudura, Kenter, and Joulz.'
      }
    ],
    cta: {
      headline: 'Prevent peak penalties and optimize your grid capacity',
      text: 'Discover where your properties lose capacity and where immediate cost savings can be achieved.',
      buttonText: 'Schedule an Energy Monitor demo',
      secondaryText: 'Includes evaluation using your own 15-minute meter dataset'
    },
    targetAudience: 'Property owners, logistics parks, industrial operators, and energy managers.'
  },
  {
    id: 'energiecontract-ean-management',
    slug: 'energiecontract-ean-management',
    badge: 'Contracts & EAN',
    title: 'Energy Contract & EAN Management',
    tagline: 'Three-tier architecture (L1/L2/L3), multisite EAN register & hedge tracking',
    h1: 'Central Contract Governance for Complex Multisite and Large-Scale Connections',
    metaTitle: 'Energy Contract & EAN Management Software | VOSQ',
    metaDescription: 'Manage multisite energy contracts, framework agreements, and EAN codes. Prevent silent renewals and monitor procurement and hedge positions.',
    definition: 'Energy Contract & EAN Management is the module for centrally governing master agreements, underlying EAN metering connections, and mutations upon buying or selling properties.',
    problem: {
      summary: 'Large real estate portfolios deal with dozens of different EAN codes, changing suppliers, and varied contract structures (fixed, dynamic, click tranches, or PPAs).',
      points: [
        'During property acquisitions or disposals, metering connections are frequently transferred late, leading to double billing.',
        'Expiring contracts silently auto-renew at unfavorable spot or variable day rates.',
        'Lack of visibility into total hedge coverage and price exposure across multiple financial years.'
      ]
    },
    solution: {
      summary: 'VOSQ brings order to complex multisite portfolios through a three-tier architecture seamlessly linking framework agreements to physical EAN meters.',
      modules: [
        {
          name: 'Three-Tier Architecture (L1/L2/L3)',
          description: 'Clear separation between master framework contracts (L1), participating legal entities/assets (L2), and individual EAN connections (L3).',
          kpi: 'Full contractual transparency'
        },
        {
          name: 'Multisite & EAN Register',
          description: 'Structured overview of all electricity, gas, and district heating connections with DSOs, metering codes, and contracted volumes.',
          kpi: 'Central EAN register'
        },
        {
          name: 'Plug-In & Plug-Out Workflows',
          description: 'Streamlined onboarding and offboarding workflows upon buying or selling assets, including automated notices for suppliers and metering parties.',
          kpi: 'Timely administrative transfers'
        },
        {
          name: 'Hedge & Risk Governance',
          description: 'Visibility into hedge coverage per delivery year and contractual notice periods to proactively manage price volatility.',
          kpi: 'Fixed vs. click vs. spot visibility'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Top Panel: Contractual & Portfolio KPI Cards (Illustrative)',
        description: 'Overview of all active procurement and master contracts.',
        kpis: [
          { title: 'Active Master Contracts', value: '5', unit: 'contracts' },
          { title: 'Connected EAN Codes', value: '9', unit: 'connections' },
          { title: 'Electricity Volume YTD', value: '26.2', unit: 'GWh' },
          { title: 'Gas & Heat Volume', value: '88.1', unit: 'dam³' },
          { title: 'Next-Year Hedge Ratio', value: '75', unit: '%' }
        ]
      },
      center: {
        label: 'Center Panel: Maturity Calendar & Hedge Breakdown',
        description: 'Contract expiry calendar and hedge distribution (fixed vs. click vs. spot markets) with early alerts for agreements expiring within 12 months.'
      },
      bottom: {
        label: 'Bottom Panel: Fully Searchable Connection Register',
        description: 'Live register with instant search and filtering by energy supplier, DSO, connection capacity, and cost center.'
      }
    },
    faqs: [
      {
        question: 'What is an EAN code and how does VOSQ track it?',
        answer: 'An EAN code (European Article Numbering) is the unique 18-digit identifier for an energy metering connection. VOSQ links every EAN to the right property, legal owner, and corresponding supply contract.'
      },
      {
        question: 'How does the L1/L2/L3 architecture work?',
        answer: 'L1 represents the master framework contract with the energy supplier; L2 represents the specific property or subsidiary; L3 represents the individual physical meter/EAN connection.'
      }
    ],
    cta: {
      headline: 'Bring structure to your commercial energy contracts',
      text: 'Govern all framework agreements and EAN connections from a single unified environment.',
      buttonText: 'Request a live demo',
      secondaryText: 'Built for multisite portfolios starting from 5 connections'
    },
    targetAudience: 'Portfolio managers, procurement directors, housing associations, and facility managers.'
  },
  {
    id: 'huurdersadministratie-kostenallocatie',
    slug: 'huurdersadministratie-kostenallocatie',
    badge: 'Tenants & Service Charges',
    title: 'Tenant Administration & Cost Allocation',
    tagline: 'Sub-meter reconciliation, common facilities & accurate pass-through billing',
    h1: 'Accurate Energy Cost Pass-Through and Transparent Tenant Allocation',
    metaTitle: 'Tenant Administration & Cost Allocation Software | VOSQ',
    metaDescription: 'Transparent sub-meter reconciliation and service charge pass-through. Allocate common facility costs accurately based on NLA m² and measured kWh.',
    definition: 'Tenant Administration & Cost Allocation bridges the landlord-tenant split incentive by allocating main-meter and sub-meter energy costs accurately and defensibly.',
    problem: {
      summary: 'The landlord-tenant split incentive leads to recurring annual disputes over service charge settlements.',
      points: [
        'When main meters and sub-meters are poorly aligned, unexplained reconciliation gaps arise.',
        'Common facilities (elevators, central lobbies, HVAC) are allocated inconsistently or remain open to challenge.',
        'Property owners end up absorbing non-recoverable energy expenses and uncollected advances.'
      ]
    },
    solution: {
      summary: 'VOSQ automatically reconciles sub-meters with main meters and applies transparent allocation keys aligned with ROZ and NEN standards.',
      modules: [
        {
          name: 'Sub-Meter Reconciliation',
          description: 'Transparent alignment between grid import at the main meter and the sum of all underlying sub-meters with automated residual allocation.',
          kpi: 'Closed meter balance'
        },
        {
          name: 'Common Facilities Allocation',
          description: 'Dedicated tracking of shared building consumption and automated allocation via fixed keys (such as NLA m²).',
          kpi: 'Transparent service charges'
        },
        {
          name: 'Data Status Labels',
          description: 'Every consumption line and cost item is explicitly tagged as measured, calculated, estimated, or allocated per accounting standards.',
          kpi: 'Full audit trail'
        },
        {
          name: 'Lease & Indexation Tracking',
          description: 'Traceability of ROZ leases, CPI rent indexations, payment statuses, and bank guarantees.',
          kpi: 'Timely indexation alerts'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Top Panel: Main Meter vs. Sub-Meter Reconciliation Tiles (Illustrative)',
        description: 'Immediate insight into total import and its breakdown across tenants and common areas.',
        kpis: [
          { title: 'Main Meter Import', value: '1,420', unit: 'MWh' },
          { title: 'Measured Tenant Usage', value: '1,185', unit: 'MWh' },
          { title: 'Common Facilities', value: '231', unit: 'MWh' },
          { title: 'Reconciliation Variance', value: '< 0.5', unit: '%' },
          { title: 'Recovery Rate', value: '98.2', unit: '%' }
        ]
      },
      center: {
        label: 'Center Panel: The Tenant Matrix',
        description: 'Tenant matrix detailing each tenant’s leased unit, NLA area, measured kWh consumption, share of common charges, and indicative energy costs.'
      },
      bottom: {
        label: 'Bottom Panel: Recoverable vs. Non-Recoverable Split',
        description: 'Clear breakdown between directly recoverable service charges and non-recoverable landlord expenses for annual financial statements.'
      }
    },
    faqs: [
      {
        question: 'How does VOSQ resolve the split incentive?',
        answer: 'By pairing real-time sub-meter readings with transparent allocation keys (NLA m²), both landlord and tenant see exactly what share is directly metered and what share reflects common consumption.'
      },
      {
        question: 'What are data status labels?',
        answer: 'Tags such as "measured", "calculated", "estimated", or "allocated" give auditors and tenants instant clarity on the origin and reliability of every cost line.'
      }
    ],
    cta: {
      headline: 'Audit-proof energy settlements without tenant disputes',
      text: 'Make your utility pass-through transparent, verifiable, and legally robust.',
      buttonText: 'See the tenant module in a demo',
      secondaryText: 'Includes sample ROZ service charge statement'
    },
    targetAudience: 'Commercial property managers, asset managers, and real estate finance teams.'
  },
  {
    id: 'onderhoud-keuringen-gacs',
    slug: 'onderhoud-keuringen-gacs',
    badge: 'Compliance & Inspections',
    title: 'Maintenance, Inspections & GACS Compliance',
    tagline: 'SCIOS Scope 8/10/12, NEN 2767 condition assessments & EPBD IV GACS tracking',
    h1: 'Safeguarding NEN 2767, SCIOS Inspections, and EPBD IV Compliance',
    metaTitle: 'Maintenance, Inspections & GACS Compliance Software | VOSQ',
    metaDescription: 'Software to track SCIOS Scope 8, 10, and 12 inspections, NEN 2767 condition scores, and EPBD IV GACS compliance for non-residential buildings.',
    definition: 'Under EPBD IV, GACS (Building Automation and Control Systems) becomes mandatory for non-residential buildings with heating or cooling systems above specific thresholds (>290 kW and >70 kW). VOSQ tracks this compliance centrally.',
    problem: {
      summary: 'Statutory obligations for commercial real estate are tightening rapidly. Without centralized oversight, certificates expire unnoticed.',
      points: [
        'SCIOS Scope 8, 10, and 12 (solar PV) certificates expire unnoticed, risking loss of fire insurance coverage.',
        'The mandatory EPBD IV GACS requirement for 2026 and 2030 demands continuous monitoring and control of building systems.',
        'Scattered inspection reports across different inspection bodies turn regulatory enforcement into a compliance risk.'
      ]
    },
    solution: {
      summary: 'VOSQ digitizes and monitors inspection deadlines, links MJOP condition scores, and proactively evaluates properties against EPBD IV and GACS standards.',
      modules: [
        {
          name: 'Statutory Inspections & Certificates',
          description: 'Automated follow-up of inspection schedules for electrical systems, elevators, fire alarms (BMI/OAI), and rooftop solar PV.',
          kpi: 'Zero lapsed certificates'
        },
        {
          name: 'MJOP & NEN 2767 Condition Scoring',
          description: 'Integration of Multi-Year Maintenance Plans with condition scores (1–6) and long-term CAPEX forecasts.',
          kpi: 'Control over multi-year CAPEX'
        },
        {
          name: 'EPBD IV & GACS Readiness',
          description: 'Immediate visibility into compliance readiness for commercial properties with HVAC systems >290 kW and >70 kW.',
          kpi: 'Up-to-date regulatory overview'
        },
        {
          name: 'Vendor & SLA Management',
          description: 'Central logging of maintenance contracts, SLA response times, and designated contacts per engineering discipline.',
          kpi: 'Direct vendor accountability'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Top Panel: Inspection Monitor & Risk Indicator (Illustrative)',
        description: 'Live status of valid, expiring, and urgent inspections.',
        kpis: [
          { title: 'Valid Certificates', value: '24', unit: 'items' },
          { title: 'Expiring in 90 Days', value: '3', unit: 'checks' },
          { title: 'Expired / Urgent', value: '0', unit: 'actions' },
          { title: 'Average NEN Score', value: '1.8', unit: 'scale 1-6' },
          { title: 'GACS Compliance Rate', value: '92', unit: '%' }
        ]
      },
      center: {
        label: 'Center Panel: MJOP Schedule 2025–2035 & CAPEX',
        description: 'Multi-year maintenance timeline 2025–2035 detailing scheduled component replacements (roofing, HVAC, heat pumps) and associated CAPEX.'
      },
      bottom: {
        label: 'Bottom Panel: Certificate Database with Inspection Reports',
        description: 'Detailed certificate registry holding reports from accredited bodies with one-click download for insurers.'
      }
    },
    faqs: [
      {
        question: 'What does the GACS obligation under EPBD IV entail?',
        answer: 'Under the revised EPBD IV directive, commercial buildings with effective rated heating or cooling output above 290 kW (and subsequently 70 kW) must be equipped with a Building Automation and Control System (GACS) that continuously monitors and optimizes energy performance.'
      },
      {
        question: 'What is the risk of an expired SCIOS Scope 12 inspection?',
        answer: 'In the event of fire damage involving a solar PV installation, commercial insurers require a valid SCIOS Scope 12 inspection report. Without a valid certificate, insurance coverage may be denied.'
      }
    ],
    cta: {
      headline: 'Never miss an inspection certificate or compliance deadline again',
      text: 'Keep your buildings safe, insured, and aligned with current legislation.',
      buttonText: 'Request a compliance audit demo',
      secondaryText: 'Includes GACS and SCIOS checklist'
    },
    targetAudience: 'Technical managers, property owners, compliance officers, and MJOP advisors.'
  },
  {
    id: 'financien-exploitatie-esg',
    slug: 'financien-exploitatie-esg',
    badge: 'Finance & ESG',
    title: 'Finance, Operations & ESG (CSRD)',
    tagline: 'Net Operating Income (NOI), Paris Proof NTA 8800 & export-ready data room',
    h1: 'Full Control Over Net Operating Income (NOI) and Paris Proof Targets',
    metaTitle: 'Real Estate Finance, Operations & ESG Software | VOSQ',
    metaDescription: 'Optimize Net Operating Income (NOI) and track Paris Proof and CSRD targets. Connect gross rental cashflows directly to actual energy expenses.',
    definition: 'Net Operating Income (NOI) represents a property’s net operational result (gross income minus operating expenses). VOSQ integrates real-time energy costs directly into NOI and ESG reporting.',
    problem: {
      summary: 'For institutional investors and lenders, sustainability and financial return are inextricably linked.',
      points: [
        'Operating expenses (OPEX) are rising due to volatile energy markets and higher grid tariffs.',
        'Banks and regulators require rigorous CSRD, EED, and Paris Proof disclosures aligned with NTA 8800 and EU Taxonomy.',
        'Without consolidated data, it is impossible to substantiate strategic CAPEX decisions quantitatively.'
      ]
    },
    solution: {
      summary: 'VOSQ combines contractual rental income with actual energy expenses and ESG performance into one consolidated financial dashboard.',
      modules: [
        {
          name: 'Integrated Financial Operations',
          description: 'Real-time visibility into contractual gross rental cashflows, operating expenses (OPEX), energy costs, and resulting Net Operating Income (NOI).',
          kpi: 'Real-time NOI monitoring'
        },
        {
          name: 'Sustainability & ESG Monitor',
          description: 'Calculation of actual kWh/m², CO₂ emission reductions, and Paris Proof indicators aligned with NTA 8800.',
          kpi: 'Paris Proof WEii benchmark'
        },
        {
          name: 'Financial Matrix per Asset',
          description: 'Comparison of net initial yields (NIY) and energy recovery ratios across your entire portfolio.',
          kpi: 'Objective asset yield tracking'
        },
        {
          name: 'Export-Ready Data Room',
          description: 'Clean JSON and Excel exports prepared for ESG annual reports, statutory audits, and disposal dossiers.',
          kpi: '1-click reporting'
        }
      ]
    },
    dashboard: {
      top: {
        label: 'Top Panel: Core NOI & ESG Indicators (Illustrative)',
        description: 'Financial and sustainability metrics for the current fiscal year.',
        kpis: [
          { title: 'Total NOI YTD', value: '€ 3.4', unit: 'M' },
          { title: 'Gross Annual Rent', value: '€ 4.6', unit: 'M' },
          { title: 'Total OPEX & Energy', value: '€ 1.2', unit: 'M' },
          { title: 'Average NIY', value: '6.2', unit: '%' },
          { title: 'Paris Proof Compliance', value: '78', unit: '%' }
        ]
      },
      center: {
        label: 'Center Panel: Sustainability Monitor & Energy Mix',
        description: 'Sustainability monitor (ESG score 0–100) and energy mix breakdown (grid power, rooftop PV, gas, and district heating).'
      },
      bottom: {
        label: 'Bottom Panel: Financial Matrix per Property',
        description: 'Asset-by-asset financial matrix comparing rental revenue, OPEX, energy expenses, and tenant pass-through recovery side by side.'
      }
    },
    faqs: [
      {
        question: 'How does VOSQ calculate Paris Proof indicators?',
        answer: 'VOSQ uses the official NTA 8800 methodology combined with actual 15-minute metered consumption to benchmark actual energy intensity (kWh/m²/year) against Dutch Green Building Council (DGBC) Paris Proof thresholds.'
      },
      {
        question: 'Are exports suitable for CSRD reporting?',
        answer: 'Yes, export datasets provide standardized Scope 1, Scope 2, and Scope 3 (tenant consumption) emissions data ready for auditors and financial controllers.'
      }
    ],
    cta: {
      headline: 'Full control over financial returns and sustainability',
      text: 'Discover how VOSQ unites financial performance and ESG compliance in one clear platform.',
      buttonText: 'Request an ESG & NOI demo',
      secondaryText: 'Includes sample export package'
    },
    targetAudience: 'CFOs, fund managers, institutional real estate investors, and ESG directors.'
  }
];
