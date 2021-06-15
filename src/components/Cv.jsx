import React from "react";

function Cv() {
  return (
    <div className="cv">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Curriculum vitae</h1>

            <hr></hr>
            <section class = "Eduation align-items-left">
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

              <h4>Brooklyn Latin High School (2015-2019)</h4>
              <p>
                <em>High School Diploma</em>
              </p>
              <ul>
                <li>Cross Country</li>
                <li>Model United Nations</li>
              </ul>

            </section>
            <br></br>
            
            <section class = "Relevant-Projects">
              <h2>Relevant Projects</h2>
              <h4>Chat System</h4>
              <p>
                <em>Bulit using Python</em>
                <ul>
                  <li>Distributed client-server system</li>
                  <li>Used the pygames package to incorporate a multiplayer tetris game</li>
                </ul>
              </p>
            </section>
            
            <section class = "Professional-Experience">
              <h2>Professional Experience</h2>
              <h4>AT&T</h4>
              <p>
                <em>Summer Intern</em>
                <ul>
                  <li>Mentored by senior staff at AT&T to learn about the technical and business side of a large company.</li>
                  <li>Attended shareholder meetings to thoroughly understand the relationship with shareholders</li>
                </ul>
              </p>

              <h4>SUNY Attain Lab</h4>
              <p>
                <em>Technology Intern</em>
                <ul>
                  <li>Improved the job prospects of GED/TASC students positively by 
                    teaching basic computer skills and Microsoft Office programs such as Word, Excel, PowerPoint.</li>
                  <li>Managed confidential information to register new students into a state-wide database</li>
                </ul>
              </p>

              <h4>Icahn School of Medicine at Mount Sinai</h4>
              <p>
                <em>Nanotechnology Intern</em>
                <ul>
                  <li>Learned to perform database searches utilizing a 
                    variety of research websites, such as PubMed.</li>
                  <li>Explored the manipulation of microtubules 
                    and kinesin motor proteins at Columbia University’s 
                    Hess Lab for the potential use of nano cargo transport.</li>
                  <li>Worked in a collaborative setting to create a final presentation and research paper.</li>
                </ul>
              </p>

            </section>
            
            <section class = "Leadership-Experience">
              <h2>Leadership Experience</h2>
              <h4>Weill Cornell Medicine</h4>
              <p>
                <em>Volunteer</em>
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
              </p>
              <h4>Wagner Middle School</h4>
              <p>
                <em>Student Volunteer</em>
                <ul>
                  <li>Arranging and organizing student laboratories</li>
                  <li>Completing administrative work such as printing report cards and organizing important files</li>
                  <li>Organizing student libraries</li>
                  <li>Grading tests for teachers and inputting student grades into an online gradebook </li>
                </ul>
              </p>

            </section>
            
            <section class = "Skills-Interests">
              <h2>Skills and Interests</h2>
              <p>
                <ul>
                  <li>Natural Languages: English (Native), Mandarin Chinese</li>
                  <li>Computer Languages: Python (Matplotlib, Pandas, Pyplot), C++, JavaScript (React), HTML, CSS </li>
                  <li>Computer Skills: Certified in Microsoft Word, Excel, and Power Point</li>
                  <li>Interests: Photography, Volunteering</li>
                </ul>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;