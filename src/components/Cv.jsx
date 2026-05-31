const professionalExperience = [
  {
    organization: "Expedia Group",
    role: "Full Stack Android Developer",
    period: "August 2023 - Present",
    details: [
      "Enhanced traveler and partner facing products at Expedia, improving the experience for millions of travelers and thousands of partners.",
      "Developed advertisement technology including video ad capabilities using ExoPlayer on Android apps across Expedia Group’s brands.",
      "Launched an ad badge component from schema design to placement on Expedia Android ads to adhere to the Digital Services Act.",
      "Led the effort to transition the reservation details page from legacy XML views to Jetpack Compose, collaborating with product, UX, and backend teams.",
      "Maintained strong test coverage using JUnit and MockK, reducing production bugs and contributing to a more stable code base.",
      "Led app releases through the Google Play Store Console, implementing regression test suites and phased rollouts.",
      "Diagnosed and resolved critical P1 bugs using Firebase Crashlytics, Splunk, and Quantum Metrics.",
    ],
  },
  {
    organization: "Expedia Group",
    role: "Full Stack Software Development Engineer Intern",
    period: "May 2022 - July 2022",
    details: [
      "Worked on public facing lodging products to improve user experience across Expedia Group’s brands.",
      "Implemented and deployed a new payment categorization within API services using Kotlin.",
      "Collaborated with engineers to revamp the hotel booking experience through A/B tests.",
      "Executed and debugged unit tests for backend logic and backend A/B experiment test logic using Kotlin.",
    ],
  },
  {
    organization: "NYU Faculty of Arts and Sciences",
    role: "Information Technology Student Worker",
    period: "July 2021 - January 2023",
    details: [
      "Assisted faculty by troubleshooting technological issues such as internet connectivity and software issues.",
      "Worked with both macOS and Windows to set up computers for in-person and hybrid learning.",
      "Created scripts to install apps and reduce the setup time for new machines.",
    ],
  },
  {
    organization: "AT&T",
    role: "Summer Intern",
    details: [
      "Mentored by senior staff at AT&T to learn about the technical and business side of a large company.",
      "Attended shareholder meetings to thoroughly understand the relationship with shareholders.",
    ],
  },
  {
    organization: "SUNY Attain Lab",
    role: "Technology Intern",
    details: [
      "Improved the job prospects of GED/TASC students positively by teaching basic computer skills and Microsoft Office programs such as Word, Excel, PowerPoint.",
      "Managed confidential information to register new students into a state-wide database.",
    ],
  },
  {
    organization: "Icahn School of Medicine at Mount Sinai",
    role: "Nanotechnology Intern",
    details: [
      "Learned to perform database searches utilizing a variety of research websites, such as PubMed.",
      "Explored the manipulation of microtubules and kinesin motor proteins at Columbia University’s Hess Lab for the potential use of nano cargo transport.",
      "Worked in a collaborative setting to create a final presentation and research paper.",
    ],
  },
];

const education = [
  {
    organization: "NYU Shanghai",
    period: "2019 - 2023",
    role: "BS. Computer Science",
    details: ["OCA Business and Economics Journalist", "Model United Nations"],
  },
  {
    organization: "NYU Tandon",
    period: "Spring 2020 - Fall 2021",
    role: "Study Away",
  },
];

const projects = [
  {
    organization: "Chat System",
    role: "Built using Python",
    details: [
      "Distributed client-server system",
      "Used the pygames package to incorporate a multiplayer tetris game",
    ],
  },
];

const leadership = [
  {
    organization: "NYU Shanghai in New York",
    role: "Orientation Ambassador & Freshman Mentor",
    period: "August 2021 - December 2021",
    details: [
      "Helped design and create the freshman orientation experience during the COVID-19 pandemic.",
      "Curated and delivered a presentation on living in New York City with a specific focus on student life.",
    ],
  },
  {
    organization: "Weill Cornell Medicine",
    role: "Volunteer",
    details: [
      "Engage with cardiac patients from all age groups to provide emotional support and basic assistance such as mealtime assistance.",
      "Assist clinical staff on basic duties such as changing the batteries on patients’ mobile cardiac telemetry device and setting up rooms for incoming patients.",
      "Assist unit clerk with duties such as filing EKG graphs, creating charts for incoming patients, and gathering discharging patients’ files; answering call light, securing appropriate assistance for patients, and answering and transferring calls.",
      "Stock isolation carts with yellow gowns and gloves.",
    ],
  },
  {
    organization: "Wagner Middle School",
    role: "Student Volunteer",
    details: [
      "Arranging and organizing student laboratories",
      "Completing administrative work such as printing report cards and organizing important files",
      "Organizing student libraries",
      "Grading tests for teachers and inputting student grades into an online gradebook",
    ],
  },
];

const skills = [
  "Natural Languages: English (Native), Mandarin Chinese",
  "Computer Languages: Python (Matplotlib, Pandas, Pyplot), C++, JavaScript (React), HTML, CSS",
  "Computer Skills: Certified in Microsoft Word, Excel, and Power Point",
  "Interests: Photography, Volunteering",
];

function CvEntry({ details, organization, period, role }) {
  return (
    <article className="cv-entry">
      <div className="cv-entry-heading">
        <div>
          <h3>{organization}</h3>
          <p>{role}</p>
        </div>
        {period && <span>{period}</span>}
      </div>

      {details && (
        <ul>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function CvSection({ entries, title }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      <div className="cv-section-stack">
        {entries.map((entry) => (
          <CvEntry key={`${entry.organization}-${entry.role}`} {...entry} />
        ))}
      </div>
    </section>
  );
}

function Cv() {
  return (
    <main className="cv">
      <div className="container">
        <header className="cv-hero">
          <p className="cv-kicker">Curriculum vitae</p>
          <h1>Chengang Zhang</h1>
          <p>
            Software engineer with experience building Android, backend, and
            traveler-facing products.
          </p>
        </header>

        <div className="cv-layout">
          <div className="cv-main">
            <CvSection
              entries={professionalExperience}
              title="Professional Experience"
            />
            <CvSection entries={projects} title="Relevant Projects" />
            <CvSection entries={leadership} title="Leadership Experience" />
          </div>

          <aside className="cv-sidebar" aria-label="Education and skills">
            <CvSection entries={education} title="Education" />

            <section className="cv-section">
              <h2>Skills and Interests</h2>
              <ul className="cv-skill-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cv;
