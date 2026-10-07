import "../portfolio.css";
import { ArrowUpRight, Mail, MapPin, Phone, Printer } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const SITE_URL = "https://namadmohammed0-rgb.github.io/Portfolio2/";

const CONTACT_VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "FN:Namad Mohammed",
  "N:Mohammed;Namad;;;",
  "TITLE:ERP Integration & Business Analyst",
  "EMAIL;TYPE=INTERNET:namadmohammed0@gmail.com",
  "TEL;TYPE=CELL:+916238414128",
  "ADR;TYPE=WORK:;;Trivandrum;Kerala;;India",
  `URL:${SITE_URL}`,
  "NOTE:ERP Integration | Business Analysis | SAP ERP | APIs | SQL | Automation",
  "END:VCARD",
].join("\r\n");

const projects = [
  {
    no: "01",
    title: "SAP ↔ Unicommerce",
    text: "Connected SAP ERP workflows with a third-party commerce platform through integration, API coordination, data mapping, and process automation.",
    tags: ["SAP", "API Integration", "Data Mapping"],
  },
  {
    no: "02",
    title: "SAP + BEAS Manufacturing",
    text: "Supported manufacturing operations with BEAS production flows, inventory visibility, production transactions, and process validation.",
    tags: ["SAP B1", "BEAS", "Manufacturing"],
  },
  {
    no: "03",
    title: "WMS / FEFO / Picklist",
    text: "Designed warehouse-facing processes covering FEFO allocation, batch management, picking logic, inventory visibility, and operational reporting.",
    tags: ["WMS", "FEFO", "Picklist"],
  },
  {
    no: "04",
    title: "SAP Web / Mobile Portal",
    text: "Supported SAP-integrated web and mobile workflows covering Sales, Purchase, Inventory, and Expense operations.",
    tags: ["SAP", "Portals", "Workflow"],
  },
  {
    no: "05",
    title: "SQL / HANA Reporting",
    text: "Created SQL queries, stored procedures, validation logic, and reports to provide reliable operational and business insights.",
    tags: ["SQL", "HANA", "Reporting"],
  },
  {
    no: "06",
    title: "E-Invoicing / Automation",
    text: "Implemented process automation and e-invoicing solutions to reduce manual work and improve Accounts Receivable workflows.",
    tags: ["Automation", "E-Invoicing", "AR"],
  },
  {
    no: "07",
    title: "SAP ↔ Telegram Automation",
    text: "Personal n8n project exploring SAP-to-Telegram integration for notifications, workflow triggers, and operational communication.",
    tags: ["n8n", "SAP", "Automation"],
  },
];

const businessAnalysis = [
  "Requirements Gathering",
  "Process Mapping",
  "Gap Analysis",
  "Functional Documentation",
  "UAT",
  "Defect Management",
];

const technical = [
  "SAP ERP",
  "SAP Business One",
  "REST APIs",
  "SQL",
  "SAP HANA",
  "BEAS",
  "n8n",
  "Automation",
  "Data Mapping",
];

const experience = [
  {
    year: "2024 — Present",
    title: "Business Analyst Team Lead",
    company: "FieldNXT Pvt. Ltd",
    detail:
      "Leading SAP-integrated portals, workflow automation, BEAS manufacturing, SQL/HANA solutions, and third-party integrations.",
    skills: ["Business Analysis", "SAP Integration", "Team Leadership", "Automation"],
  },
  {
    year: "2023 — 2024",
    title: "SAP Business One Functional Consultant",
    company: "Indus Novature Softech Pvt. Ltd",
    detail:
      "Supported SAP B1 implementations, production reporting, process documentation, integration requirements, and user adoption.",
    skills: ["SAP B1", "Functional Consulting", "UAT", "Documentation"],
  },
  {
    year: "2020 — 2022",
    title: "Financial Analyst",
    company: "CA Asha Zachariah & Co",
    detail:
      "Delivered reporting and analysis for 10+ clients, improved data validation, and supported audit and compliance work.",
    skills: ["Financial Analysis", "Reporting", "Data Validation", "Audit Support"],
  },
  {
    year: "2015 — 2016",
    title: "Accountant / Audit Executive",
    company: "CA Alex Kuriakose & Co",
    detail:
      "Built a strong foundation in accounting operations, audit support, reconciliations, and financial controls.",
    skills: ["Accounting", "Reconciliation", "Financial Controls", "Audit"],
  },
];

const stats = [
  { label: "Years of Experience", value: "10+", code: "EXP" },
  { label: "Projects Delivered", value: "24", code: "PRJ" },
  { label: "SAP Modules", value: "06", code: "MOD" },
  { label: "Certifications", value: "04", code: "CERT" },
];

const capabilities = [
  "Requirements Gathering",
  "ERP Integration",
  "Process Mapping",
  "API Coordination",
  "Data Analysis",
  "Automation",
  "UAT & Reporting",
  "Solution Delivery",
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="profile-fields">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-nav screen-only">
        <div className="nav-brand">
          <strong>NM</strong>
          <span>Namad Mohammed</span>
        </div>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="nav-print-button"
          type="button"
          onClick={() => window.print()}
        >
          <Printer size={14} />
          Print / Save PDF
        </button>
      </header>

      <main>
        <section className="portfolio-hero">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="hero-status">
                AVAILABLE · ERP INTEGRATION &amp; BUSINESS ANALYSIS
              </span>

              <h1>
                ERP Integration
                <br />
                <em>&amp; Business Analysis.</em>
              </h1>

              <p className="hero-description">
                Connecting business requirements, ERP systems, APIs, data, and
                automation to build practical solutions that reduce manual work
                and improve business processes.
              </p>

              <div className="hero-meta">
                <span>
                  <MapPin size={14} />
                  Trivandrum, Kerala
                </span>

                <a href="mailto:namadmohammed0@gmail.com">
                  <Mail size={14} />
                  namadmohammed0@gmail.com
                </a>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View Projects
                  <ArrowUpRight size={14} />
                </a>

                <a
                  className="button button-secondary"
                  href="mailto:namadmohammed0@gmail.com"
                >
                  Contact Me
                  <Mail size={14} />
                </a>
              </div>
            </div>

            <div className="hero-profile">
              <div className="profile-photo-frame">
                <img
                  src="/Portfolio2/profile.jpg"
                  alt="Namad Mohammed"
                  className="profile-photo"
                />
              </div>

              <div className="hero-profile-name">
                <strong>Namad Mohammed</strong>
                <span>ERP Integration &amp; Business Analyst</span>
              </div>
            </div>
          </div>

          <div className="hero-strip">
            <span>AVAILABLE</span>
            <span>ERP · INTEGRATION</span>
            <span>BUSINESS ANALYSIS</span>
            <span>API · SQL</span>
            <span>DATA · AUTOMATION</span>
          </div>
        </section>

        <section id="about" className="portfolio-section about-section">
          <div className="portfolio-section-heading">
            <span>Professional profile</span>
            <h2>
              Connecting business
              <br />
              <em>needs with systems.</em>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Business Analyst with experience across ERP integration, business
                process improvement, automation, reporting, SQL/HANA, APIs, and
                third-party system integration. I work between business
                requirements and technical delivery, translating operational needs
                into practical systems and integration solutions.
              </p>
            </div>

            <div className="profile-fields">
              <div>
                <span>Name</span>
                <strong>Namad Mohammed</strong>
              </div>

              <div>
                <span>Position</span>
                <strong>ERP Integration &amp; Business Analyst</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Trivandrum, Kerala / Remote</strong>
              </div>

              <div>
                <span>Expertise</span>
                <strong>ERP · APIs · SQL/HANA · Automation</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>10+ years across finance, ERP, and delivery</strong>
              </div>

              <div>
                <span>Languages</span>
                <strong>English · Hindi · Malayalam</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.code}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="portfolio-section">
          <div className="portfolio-section-heading">
            <span>Selected projects</span>
            <h2>
              Relevant work,
              <br />
              <em>clearly presented.</em>
            </h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.no}>
                <div className="project-number">{project.no}</div>

                <div className="project-content">
                  <div className="project-label">selected experience</div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="two-column-section">
            <div>
              <div className="portfolio-section-heading">
                <span>Business analysis</span>
                <h2>
                  From questions
                  <br />
                  <em>to action.</em>
                </h2>
              </div>

              <div className="capability-list">
                {businessAnalysis.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="portfolio-section-heading">
                <span>Skills matrix</span>
                <h2>
                  Working toolkit,
                  <br />
                  <em>mapped.</em>
                </h2>
              </div>

              <div className="skill-list">
                {technical.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="portfolio-section">
          <div className="portfolio-section-heading">
            <span>Professional journey</span>
            <h2>
              Experience
              <br />
              <em>trace.</em>
            </h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <div className="experience-item" key={item.title}>
                <div className="experience-period">{item.year}</div>

                <div className="experience-main">
                  <h3>{item.title}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.detail}</p>

                  <div className="experience-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="portfolio-section">
          <div className="portfolio-section-heading">
            <span>Capabilities</span>
            <h2>
              Business and
              <br />
              <em>technical strengths.</em>
            </h2>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <span>Business analysis</span>
              <h3>Operational insight</h3>
              <p>
                Requirements capture, process mapping, workflow analysis, UAT,
                functional documentation, and defect triage for ERP and business
                systems.
              </p>
            </div>

            <div className="education-card">
              <span>Technical delivery</span>
              <h3>System and data solutions</h3>
              <p>
                SAP ERP, SAP B1, API coordination, SQL/HANA reporting, BEAS
                processes, and automation solutions that connect people with the
                right data.
              </p>
            </div>
          </div>

          <div className="languages">
            <span>Core capabilities</span>
            <strong>{capabilities.join(" · ")}</strong>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-heading">
            <span>Education</span>
            <h2>
              Academic
              <br />
              <em>foundation.</em>
            </h2>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <span>2016 — 2019</span>
              <h3>Master&apos;s in Business Management</h3>
              <p>University of Siena, Italy</p>
            </div>

            <div className="education-card">
              <span>2012 — 2015</span>
              <h3>Bachelor of Commerce</h3>
              <p>Mahatma Gandhi College, Kerala University</p>
            </div>
          </div>
        </section>

        <section id="contact" className="portfolio-section contact-section">
          <div className="portfolio-section-heading">
            <span>Contact</span>
            <h2>
              Let&apos;s build
              <br />
              <em>better workflows.</em>
            </h2>
          </div>

          <div className="contact-layout">
            <div>
              <p className="contact-description">
                For opportunities involving business analysis, ERP integration,
                APIs, automation, SQL, or business systems delivery, contact me
                directly.
              </p>

              <div className="contact-links">
                <a href="mailto:namadmohammed0@gmail.com">
                  <Mail size={15} />
                  namadmohammed0@gmail.com
                  <ArrowUpRight size={13} />
                </a>

                <a href="tel:+916238414128">
                  <Phone size={15} />
                  +91 62384 14128
                  <ArrowUpRight size={13} />
                </a>

                <a href="https://goo.gl/maps" target="_blank" rel="noreferrer">
                  <MapPin size={15} />
                  Trivandrum, Kerala
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="contact-qr">
              <QRCodeSVG value={CONTACT_VCARD} size={150} level="M" includeMargin />
              <span>SCAN TO SAVE CONTACT</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
