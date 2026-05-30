import React from "react";

function Cv() {
  return (
    <div className="cv">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <h1 className="font-weight-light">Curriculum vitae</h1>

            <hr></hr>
            <section className="Professional-Experience">
              <h2>Professional Experience</h2>
              <h4>Expedia Group</h4>
              <p><em>Full Stack Android Developer (August 2023 - Present)</em></p>
              <ul>
                <li>Enhanced traveler and partner facing products at Expedia, improving the experience for millions of travelers and thousands of partners.</li>
                <li>Developed advertisement technology including video ad capabilities using ExoPlayer on Android apps across Expedia Group’s brands.</li>
                <li>Launched an ad badge component from schema design to placement on Expedia Android ads to adhere to the Digital Services Act.</li>
                <li>Led the effort to transition the reservation details page from legacy XML views to Jetpack Compose, collaborating with product, UX, and backend teams.</li>
                <li>Maintained strong test coverage using JUnit and MockK, reducing production bugs and contributing to a more stable code base.</li>
                <li>Led app releases through the Google Play Store Console, implementing regression test suites and phased rollouts.</li>
                <li>Diagnosed and resolved critical P1 bugs using Firebase Crashlytics, Splunk, and Quantum Metrics.</li>
              </ul>

              <h4>Expedia Group</h4>
              <p><em>Full Stack Software Development Engineer Intern (May 2022 - July 2022)</em></p>
              <ul>
                <li>Worked on public facing lodging products to improve user experience across Expedia Group’s brands.</li>
                <li>Implemented and deployed a new payment categorization within API services using Kotlin.</li>
                <li>Collaborated with engineers to revamp the hotel booking experience through A/B tests.</li>
                <li>Executed and debugged unit tests for backend logic and backend A/B experiment test logic using Kotlin.</li>
              </ul>

              <h4>NYU Faculty of Arts and Sciences</h4>
              <p><em>Information Technology Student Worker (July 2021 - January 2023)</em></p>
              <ul>
                <li>Assisted faculty by troubleshooting technological issues such as internet connectivity and software issues.</li>
                <li>Worked with both macOS and Windows to set up computers for in-person and hybrid learning.</li>
                <li>Created scripts to install apps and reduce the setup time for new machines.</li>
              </ul>

              <h4>AT&T</h4>
              <p><em>Summer Intern</em></p>
              <ul>
                <li>Mentored by senior staff at AT&T to learn about the technical and business side of a large company.</li>
                <li>Attended shareholder meetings to thoroughly understand the relationship with shareholders</li>
              </ul>

              <h4>SUNY Attain Lab</h4>
              <p><em>Technology Intern</em></p>
              <ul>
                <li>Improved the job prospects of GED/TASC students positively by 
                  teaching basic computer skills and Microsoft Office programs such as Word, Excel, PowerPoint.</li>
                <li>Managed confidential information to register new students into a state-wide database</li>
              </ul>

              <h4>Icahn School of Medicine at Mount Sinai</h4>
              <p><em>Nanotechnology Intern</em></p>
              <ul>
                <li>Learned to perform database searches utilizing a 
                  variety of research websites, such as PubMed.</li>
                <li>Explored the manipulation of microtubules 
                  and kinesin motor proteins at Columbia University’s 
                  Hess Lab for the potential use of nano cargo transport.</li>
                <li>Worked in a collaborative setting to create a final presentation and research paper.</li>
              </ul>

            </section>

            <section className="Eduation align-items-left">
              <h2>Education</h2>
              <h4>NYU Shanghai (2019-2023)</h4>
              <p>
                <em>BS. Computer Science</em>
              </p>
              <ul>
                <li>OCA Business and Economics Journalist</li>
                <li>Model United Nations</li>
              </ul>

              <h4>NYU Tandon (Spring 2020 - Fall 2021)</h4>
              <p>
                <em>Study Away</em>
              </p>
              <ul>
              </ul>

            </section>
            <br></br>
            
            <section className="Relevant-Projects">
              <h2>Relevant Projects</h2>
              <h4>Chat System</h4>
              <p><em>Bulit using Python</em></p>
              <ul>
                <li>Distributed client-server system</li>
                <li>Used the pygames package to incorporate a multiplayer tetris game</li>
              </ul>
            </section>

            <section className="Leadership-Experience">
              <h2>Leadership Experience</h2>
              <h4>NYU Shanghai in New York</h4>
              <p><em>Orientation Ambassador &amp; Freshman Mentor (August 2021 - December 2021)</em></p>
              <ul>
                <li>Helped design and create the freshman orientation experience during the COVID-19 pandemic.</li>
                <li>Curated and delivered a presentation on living in New York City with a specific focus on student life.</li>
              </ul>

              <h4>Weill Cornell Medicine</h4>
              <p><em>Volunteer</em></p>
              <ul>
                <li>Engage with cardiac patients from all age groups to provide 
                  emotional support and basic assistance such as mealtime assistance. </li>
                <li>Assist clinical staff on basic duties such as changing the batteries 
                  on patients’ mobile cardiac telemetry device and setting up rooms for incoming patients.</li>
                <li>Assist unit clerk with duties such as filing EKG graphs, creating charts for incoming patients, 
                  and gathering discharging patients’ files; answering call light, 
                  securing appropriate assistance for patients, and answering and transferring calls.</li>
                <li>Stock isolation carts with yellow gowns and gloves.</li>
              </ul>
              <h4>Wagner Middle School</h4>
              <p><em>Student Volunteer</em></p>
              <ul>
                <li>Arranging and organizing student laboratories</li>
                <li>Completing administrative work such as printing report cards and organizing important files</li>
                <li>Organizing student libraries</li>
                <li>Grading tests for teachers and inputting student grades into an online gradebook </li>
              </ul>

            </section>
            
            <section className="Skills-Interests">
              <h2>Skills and Interests</h2>
              <ul>
                <li>Natural Languages: English (Native), Mandarin Chinese</li>
                <li>Computer Languages: Python (Matplotlib, Pandas, Pyplot), C++, JavaScript (React), HTML, CSS </li>
                <li>Computer Skills: Certified in Microsoft Word, Excel, and Power Point</li>
                <li>Interests: Photography, Volunteering</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
