import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Printer } from "lucide-react";

/*
  PHOTO: put your picture at  public/photo.jpg
  If the file is missing, the "NM" initials are shown instead.
*/
const PHOTO_SRC = `${import.meta.env.BASE_URL}photo.jpg`;

const projects = [
  {
    title: "SAP ↔ Unicommerce",
    text: "Connected SAP ERP workflows with a third-party commerce platform through integration, API coordination, data mapping, and process automation.",
    tags: ["SAP", "API Integration", "Data Mapping"],
  },
  {
    title: "SAP + BEAS Manufacturing",
    text: "Supported manufacturing operations with BEAS production flows, inventory visibility, production transactions, and process validation.",
    tags: ["SAP B1", "BEAS", "Manufacturing"],
  },
  {
    title: "WMS / FEFO / Picklist",
    text: "Designed warehouse-facing processes covering FEFO allocation, batch management, picking logic, inventory visibility, and operational reporting.",
    tags: ["WMS", "FEFO", "Picklist"],
  },
  {
    title: "SAP Web / Mobile Portal",
    text: "Supported SAP-integrated web and mobile workflows covering Sales, Purchase, Inventory, and Expense operations.",
    tags: ["SAP", "Portals", "Workflow"],
  },
  {
    title: "SQL / HANA Reporting",
    text: "Created SQL queries, stored procedures, validation logic, and reports to provide reliable operational and business insights.",
    tags: ["SQL", "HANA", "Reporting"],
  },
  {
    title: "E-Invoicing / Automation",
    text: "Implemented process automation and e-invoicing solutions to reduce manual work and improve Accounts Receivable workflows.",
    tags: ["Automation", "E-Invoicing", "AR"],
  },
  {
    title: "SAP ↔ Telegram Automation",
    text: "Personal n8n project exploring SAP-to-Telegram integration for notifications, workflow triggers, and operational communication.",
    tags: ["n8n", "SAP", "Automation"],
    personal: true,
  },
];

/* One grouped list replaces the old Business Analysis + Skills tables. */
const skillGroups = [
  {
    label: "Business analysis",
    items: [
      "Requirements Gathering",
      "Process Mapping",
      "Gap Analysis",
      "Functional Documentation",
      "UAT",
      "Defect Management",
    ],
  },
  { label: "ERP", items: ["SAP ERP", "SAP Business One"] },
  { label: "Data & integration", items: ["REST APIs", "SQL", "SAP HANA"] },
  { label: "Automation", items: ["BEAS", "n8n", "Automation", "Data Mapping"] },
];

const experience = [
  {
    year: "2024 — Present",
    title: "Business Analyst Team Lead",
    company: "FieldNXT Pvt. Ltd",
    detail:
      "Leading SAP-integrated portals, workflow automation, BEAS manufacturing, SQL/HANA solutions, and third-party integrations.",
    skills: ["Business Analysis", "SAP Integration", "Team Leadership"],
  },
  {
    year: "2023 — 2024",
    title: "SAP Business One Functional Consultant",
    company: "Indus Novature Softech Pvt. Ltd",
    detail:
      "Supported SAP B1 implementations, production reporting, process documentation, integration requirements, and user adoption.",
    skills: ["SAP B1", "Functional Consulting", "UAT"],
  },
  {
    year: "2020 — 2022",
    title: "Financial Analyst",
    company: "CA Asha Zachariah & Co",
    detail:
      "Delivered reporting and analysis for 10+ clients, improved data validation, and supported audit and compliance work.",
    skills: ["Financial Analysis", "Reporting", "Data Validation"],
  },
  {
    year: "2015 — 2016",
    title: "Accountant / Audit Executive",
    company: "CA Alex Kuriakose & Co",
    detail:
      "Built a strong foundation in accounting operations, audit support, reconciliations, and financial controls.",
    skills: ["Accounting", "Reconciliation", "Financial Controls"],
  },
];

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Delivered", value: "24" },
  { label: "SAP Modules", value: "06" },
  { label: "Certifications", value: "04" },
];

const education = [
  {
    degree: "Master's in Business Management",
    school: "University of Siena, Italy",
    period: "2016–2019",
    detail:
      "International management, corporate valuation, business law, strategic management, and financial accounting.",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    school: "Mahatma Gandhi College, Kerala University",
    period: "2012–2015",
    detail:
      "Auditing, management accounting, costing, economics, and business law.",
  },
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
            <a href="#skills">Skills</a>
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/*
        Section order = print order (A4, 3 pages):
          Page 1: home, about, metrics, skills
          Page 2: work
          Page 3: experience, education, contact
      */}
      <main id="top" className="sap-document-stack">
        {/* HERO */}
        <section id="home" className="sap-hero-window">
          <div className="sap-hero-layout">
            <div className="sap-hero-copy">
              <div className="sap-form-caption">Available for opportunities</div>

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
                  Trivandrum, Kerala · Remote
                </span>

                <span>
                  <Mail size={14} />
                  namadmohammed0@gmail.com
                </span>
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
            </div>
          </div>

          <div className="sap-form-footer">
            <strong>
              Business need <em>→</em> system solution
            </strong>
            <small>Requirements · Mapping · Integration · Delivery</small>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="sap-about-window">
          <div className="sap-window-heading">
            <span className="sap-form-caption">Professional profile</span>
            <h2>
              Connecting business <em>needs with systems.</em>
            </h2>
          </div>

          <p className="sap-window-copy">
            Business Analyst with experience across ERP integration, business
            process improvement, automation, reporting, SQL/HANA, APIs, and
            third-party system integration. I work between business
            requirements and technical delivery, translating operational needs
            into practical systems and integration solutions.
          </p>

          <div className="sap-field-grid">
            <Field
              label="Expertise"
              value="ERP · APIs · SQL/HANA · Automation"
            />
            <Field
              label="Experience"
              value="10+ years across finance, ERP, and delivery"
            />
          </div>
        </section>

        {/* KPI */}
        <section id="metrics" className="sap-stats-window">
          <div className="sap-kpi-grid">
            {stats.map((stat) => (
              <div className="sap-kpi" key={stat.label}>
                <strong>{stat.value}</strong>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS (business analysis + tools, grouped) */}
        <section id="skills" className="sap-skills-window">
          <div className="sap-window-heading">
            <span className="sap-form-caption">Skills &amp; methods</span>
            <h2>
              Working toolkit, <em>mapped.</em>
            </h2>
          </div>

          <div className="sap-skill-rows">
            {skillGroups.map((group) => (
              <div className="sap-skill-row" key={group.label}>
                <span className="sap-skill-label">{group.label}</span>
                <ul className="sap-chip-list">
                  {group.items.map((item) => (
                    <li className="sap-chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="sap-projects-window">
          <div className="sap-window-heading">
            <span className="sap-form-caption">Selected projects</span>
            <h2>
              Relevant work, <em>clearly presented.</em>
            </h2>
          </div>

          <div className="sap-project-grid">
            {projects.map((project, index) => (
              <article className="sap-project" key={project.title}>
                <div className="sap-project-head">
                  <span className="sap-project-no">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{project.title}</h3>
                  {project.personal && (
                    <span className="sap-project-note">Personal project</span>
                  )}
                </div>

                <p>{project.text}</p>

                <ul className="sap-chip-list">
                  {project.tags.map((tag) => (
                    <li className="sap-chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="sap-experience-window">
          <div className="sap-window-heading">
            <span className="sap-form-caption">Professional journey</span>
            <h2>
              Experience <em>trace.</em>
            </h2>
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
                {experience.map((item) => (
                  <tr key={item.title}>
                    <td>{item.year}</td>
                    <td>
                      <strong>{item.title}</strong>
                    </td>
                    <td>{item.company}</td>
                    <td>{item.detail}</td>
                    <td>{item.skills.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="sap-education-window">
          <div className="sap-window-heading">
            <span className="sap-form-caption">Education</span>
            <h2>
              Academic <em>foundation.</em>
            </h2>
          </div>

          <div className="sap-edu-grid">
            {education.map((item) => (
              <article className="sap-edu" key={item.degree}>
                <span className="sap-edu-period">{item.period}</span>
                <h3>{item.degree}</h3>
                <strong>{item.school}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="sap-field-grid sap-edu-languages">
            <Field
              label="Languages"
              value="English · Italian · Hindi · Malayalam"
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="sap-contact-window">
          <div className="sap-window-heading">
            <span className="sap-form-caption">Contact</span>
            <h2>
              Let&apos;s build <em>better workflows.</em>
            </h2>
          </div>

          <p className="sap-window-copy">
            For opportunities involving business analysis, ERP integration,
            APIs, automation, SQL, or business systems delivery, contact me
            directly.
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
        </section>
      </main>
    </div>
  );
}
