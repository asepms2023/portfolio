import { projectsData } from "../data/projectsData";

function Projects({ language }) {

  const data = projectsData;

  return (
    <section id="projects">

      <div className="section-label">
        {language === "IND" ? data.label.id : data.label.en}
      </div>

      <div className="section-title">
        {language === "IND" ? data.title.id : data.title.en}
      </div>

      <div className="divider-line"></div>

      <div className="projects-grid">

        {data.list.map((project, index) => (

          <div className="project-card" key={index}>

            <span className="project-tag">
              {language === "IND" ? project.tag.id : project.tag.en}
            </span>

            <div className="project-title">
              {language === "IND" ? project.title.id : project.title.en}
            </div>

            <p className="project-desc">
              {language === "IND" ? project.desc.id : project.desc.en}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;