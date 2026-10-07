import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Printer } from "lucide-react";

/*
  PHOTO: put your picture at  public/photo.jpg
  If the file is missing, the "NM" initials are shown instead.
*/
const PHOTO_SRC = `${import.meta.env.BASE_URL}photo.jpg`;

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

const whatIDo = [
  "Business Analysis",
  "ERP Integration",
  "API Integration",
  "Data & SQL",
  "Automation",
  "Solution Delivery",
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
    skills: [
      "Business Analysis",
      "SAP Integration",
      "Team Leadership",
      "Automation",
    ],
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
    skills: [
      "Financial Analysis",
      "Reporting",
      "Data Validation",
      "Audit Support",
    ],
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

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="sap-field">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function Home() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <div className="consulting-portfolio">
      {/* SHELL BAR (hidden when printing) */}
      <header className="sap-shell">
        <div className="sap-shell-inner">
          <div className="sap-shell-brand">
            <span className="sap-shell-logo">NM</span>
            Namad Mohammed
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#work">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/*
        Section order matters for the 3-page A4 print:
          Page 1: home, about, metrics, business-analysis
          Page 2: work
          Page 3: skills, experience, education, contact
      */}
      <main id="top" className="sap-document-stack">
        {/* HERO */}
        <section id="home" className="sap-hero-window">
          <div className="sap-hero-layout">
            <div className="sap-hero-copy">
              <div className="sap-form-caption">
                AVAILABLE · ERP INTEGRATION & BUSINESS ANALYSIS
              </div>

              <h1>
                ERP Integration
                <br />
                <em>&amp; Business Analysis.</em>
              </h1>

              <p>
                Connecting business requirements, ERP systems, APIs, data, and
                automation to build practical solutions that reduce manual work
                and improve business processes.
              </p>

              <div className="sap-inline-meta">
                <span>
                  <MapPin size={14} />
                  Trivandrum, Kerala
                </span>

                <span>
                  <Mail size={14} />
                  namadmohammed0@gmail.com
                </span>
              </div>

              <div className="sap-data-strip">
                <span>AVAILABLE</span>
                <span>ERP · INTEGRATION · BUSINESS ANALYSIS</span>
                <span>API · SQL · AUTOMATION</span>
              </div>

              <div className="sap-action-row">
                <a className="sap-primary-button" href="#work">
                  View Projects
                  <ArrowUpRight size={14} />
                </a>

                <a
                  className="sap-secondary-button"
                  href="mailto:namadmohammed0@gmail.com"
                >
                  Contact Me
                  <Mail size={14} />
                </a>

                <button
                  type="button"
                  className="sap-secondary-button"
                  onClick={() => window.print()}
                >
                  Print / Save PDF
                  <Printer size={14} />
                </button>
              </div>
            </div>

            <div className="sap-hero-badge">
              <div className="sap-badge-ring">
                {photoOk ? (
                  <img
                    className="sap-photo"
                    src={PHOTO_SRC}
                    alt="Namad Mohammed"
                    onError={() => setPhotoOk(false)}
                  />
                ) : (
                  <span>NM</span>
                )}
              </div>

              <small>
                ERP / INTEGRATION
                <br />
                BUSINESS ANALYSIS
              </small>
            </div>
          </div>

          <div className="sap-form-footer">
            <span>CORE WORKSTREAM</span>

            <strong>
              Business need <em>→</em> system solution
            </strong>

            <small>Requirements · Mapping · Integration · Delivery</small>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="sap-about-window">
          <div className="sap-section-intro">
            <div>
              <span className="sap-form-caption">Professional profile</span>

              <h2>
                Connecting business
                <br />
                <em>needs with systems.</em>
              </h2>
            </div>

            <div className="sap-identity-mark">
              <strong>NM</strong>
              <span>PROFILE / 001</span>
            </div>
          </div>

          <p className="sap-window-copy">
            Business Analyst with experience across ERP integration, business
            process improvement, automation, reporting, SQL/HANA, APIs, and
            third-party system integration. I work between business
            requirements and technical delivery, translating operational needs
            into practical systems and integration solutions.
          </p>

          <div className="sap-field-grid">
            <Field label="NAME" value="Namad Mohammed" />
            <Field label="POSITION" value="ERP Integration & Business Analyst" />
            <Field label="LOCATION" value="Trivandrum, Kerala / Remote" />
            <Field
              label="EXPERTISE"
              value="ERP · APIs · SQL/HANA · Automation"
            />
            <Field
              label="EXPERIENCE"
              value="10+ years across finance, ERP, and delivery"
            />
          </div>
        </section>

        {/* KPI */}
        <section id="metrics" className="sap-stats-window">
          <div className="sap-kpi-grid">
            {stats.map((stat) => (
              <div className="sap-kpi" key={stat.code}>
                <span>{stat.code}</span>
                <strong>{stat.value}</strong>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </section>

        {/* BUSINESS ANALYSIS */}
        <section id="business-analysis" className="sap-analysis-window">
          <div className="sap-window-heading">
            <div>
              <span className="sap-form-caption">Business analysis</span>

              <h2>
                From questions
                <br />
                <em>to action.</em>
              </h2>
            </div>
          </div>

          <div className="sap-table-wrap">
            <table className="sap-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Process / Method</th>
                  <th>Delivery Area</th>
                </tr>
              </thead>

              <tbody>
                {businessAnalysis.map((item, index) => (
                  <tr key={item}>
                    <td>{String(index + 1).padStart(2, "0")}</td>
                    <td>{item}</td>
                    <td>Business Analysis</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="sap-projects-window">
          <div className="sap-window-heading">
            <div>
              <span className="sap-form-caption">Selected projects</span>

              <h2>
                Relevant work,
                <br />
                <em>clearly presented.</em>
              </h2>
            </div>

            <p>
              Selected experience across ERP, manufacturing, portals,
              reporting, integration, automation, and workflow delivery.
            </p>
          </div>

          <div className="sap-sales-orders">
            {projects.map((project) => (
              <article className="sap-sales-order" key={project.no}>
                <div className="sap-order-top">
                  <strong>PROJECT {project.no}</strong>

                  <span>
                    {project.no === "07"
                      ? "PERSONAL PROJECT"
                      : "SELECTED EXPERIENCE"}
                  </span>
                </div>

                <div className="sap-field-grid sap-order-fields">
                  <Field label="PROJECT" value={project.title} />
                  <Field
                    label="CAPABILITIES"
                    value={project.tags.join(" · ")}
                  />
                  <Field label="ROLE" value="Business Analysis / Integration" />
                  <Field
                    label="AREA"
                    value={
                      project.no === "07"
                        ? "Personal project"
                        : "ERP / Business Systems"
                    }
                  />
                  <Field label="STATUS" value="Selected experience" />
                  <Field label="OUTCOME" value={project.text} />
                </div>

                <a className="sap-row-link" href="#contact">
                  Discuss this capability
                  <ArrowUpRight size={13} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="sap-skills-window">
          <div className="sap-window-heading">
            <div>
              <span className="sap-form-caption">Skills matrix</span>

              <h2>
                Working toolkit,
                <br />
                <em>mapped.</em>
              </h2>
            </div>

            <p>
              ERP, integration, data, automation, and business analysis
              capabilities used across delivery.
            </p>
          </div>

          <div className="sap-table-wrap">
            <table className="sap-table sap-skills-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Capability / Tool</th>
                  <th>Area</th>
                </tr>
              </thead>

              <tbody>
                {technical.map((item, index) => (
                  <tr key={item}>
                    <td>
                      {index < 2
                        ? "ERP"
                        : index < 5
                        ? "Data & Integration"
                        : "Automation"}
                    </td>
                    <td>{item}</td>
                    <td>{whatIDo[index % whatIDo.length]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="sap-experience-window">
          <div className="sap-window-heading">
            <div>
              <span className="sap-form-caption">Professional journey</span>

              <h2>
                Experience
                <br />
                <em>trace.</em>
              </h2>
            </div>

            <p>
              Experience across business analysis, finance, ERP, integration,
              automation, and technical delivery.
            </p>
          </div>

          <div className="sap-table-wrap">
            <table className="sap-table sap-journal-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Role</th>
                  <th>Company</th>
                  <th>Description</th>
                  <th>Skills</th>
                </tr>
              </thead>

              <tbody>
                {experience.map((item, index) => (
                  <tr key={item.title}>
                    <td>{item.year}</td>

                    <td>
                      <strong>
                        {String(index + 1).padStart(2, "0")}
                        {" · "}
                        {item.title}
                      </strong>
                    </td>

                    <td>{item.company}</td>
                    <td>{item.detail}</td>
                    <td>{item.skills.slice(0, 3).join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="sap-education-window">
          <div className="sap-window-heading">
            <div>
              <span className="sap-form-caption">Education</span>

              <h2>
                Academic
                <br />
                <em>foundation.</em>
              </h2>
            </div>
          </div>

          <div className="sap-field-grid">
            <Field
              label="MASTER'S IN BUSINESS MANAGEMENT"
              value="University of Siena, Italy · 2016–2019"
            />
            <Field
              label="DETAILS"
              value="International management, corporate valuation, business law, strategic management, and financial accounting."
            />
            <Field
              label="BACHELOR OF COMMERCE (B.COM)"
              value="Mahatma Gandhi College, Kerala University · 2012–2015"
            />
            <Field
              label="DETAILS"
              value="Auditing, management accounting, costing, economics, and business law."
            />
            <Field
              label="LANGUAGES"
              value="English · Italian · Hindi · Malayalam"
            />
            <Field
              label="PROFILE"
              value="Professional working communication across multicultural business and technology teams."
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="sap-contact-window">
          <div className="sap-contact-grid">
            <div>
              <span className="sap-form-caption">Contact</span>

              <h2>
                Let&apos;s build
                <br />
                <em>better workflows.</em>
              </h2>

              <p className="sap-window-copy">
                For opportunities involving business analysis, ERP
                integration, APIs, automation, SQL, or business systems
                delivery, contact me directly.
              </p>

              <div className="sap-contact-list">
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

                <span>
                  <MapPin size={15} />
                  Trivandrum, Kerala
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
