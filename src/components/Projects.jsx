import React from "react";

const projects = [
  {
    name: "TransitBar",
    owner: "chengang-zhang",
    url: "https://github.com/chengang-zhang/TransitBar",
    language: "Swift",
    description:
      "A transit-focused macOS menu bar project built around quick access and lightweight daily utility.",
    tags: ["Swift", "macOS", "Transit"],
  },
  {
    name: "TransitBar-GTFS",
    owner: "chengang-zhang",
    url: "https://github.com/chengang-zhang/TransitBar-GTFS",
    language: "Swift",
    description:
      "GTFS-related support work for TransitBar, focused on transit data and routing foundations.",
    tags: ["Swift", "GTFS", "Transit data"],
  },
  {
    name: "Oneshots",
    owner: "Brauntt",
    url: "https://github.com/Brauntt/Oneshots",
    language: "Repository",
    description:
      "A shared GitHub project space for the Oneshots repository.",
    tags: ["GitHub", "Project"],
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <header className="projects-hero">
          <p className="projects-kicker">Selected work</p>
          <h1>Projects</h1>
          <p>
            A few tools and project spaces I have been building around transit,
            data, and software experiments.
          </p>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.url}
              key={project.url}
              rel="noreferrer"
              target="_blank"
            >
              <div className="project-card-header">
                <div>
                  <p className="project-owner">{project.owner}</p>
                  <h2>{project.name}</h2>
                </div>
                <span aria-hidden="true" className="project-card-icon">
                  ↗
                </span>
              </div>

              <p>{project.description}</p>

              <div className="project-card-footer">
                <span className="project-language">{project.language}</span>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
