import React from "react";

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <h1 className="font-weight-light">Projects</h1>
            <hr></hr>
          </div>
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.freepnglogos.com/uploads/under-construction-png/under-construction-sutton-group-heritage-realty-brokerage-durham-region-real-estate-16.png"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            
            <p>
              Currently working on side-projects! Come back soon! <br></br>
              Or check out my 
              <a href="https://github.com/chengang-zhang" target = "_blank"> github</a> for my most recent projects!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;