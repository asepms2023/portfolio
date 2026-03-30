import { aboutData } from "../data/aboutData";
import { experienceData } from "../data/experienceData";
import { calculateExperience } from "../utils/experienceHelper";
import { techstackData } from "../data/techstackData";
import { countTools } from "../utils/techstackHelper";

function About({ language }) {

  const about = aboutData;

  const { expValue, companiesValue } = calculateExperience(
    experienceData.jobs
  );
  const totalTools = countTools(techstackData.categories);

  return (
    <section id="about">

      <div className="about-grid">

        {/* LEFT */}
        <div className="about-text">

          <div className="section-label">
            {language === "IND" ? about.label.id : about.label.en}
          </div>

          <div className="section-title">
            {language === "IND" ? about.title.first.id : about.title.first.en}
            <br />
            {language === "IND" ? about.title.second.id : about.title.second.en}
          </div>

          <p>
            {language === "IND" ? about.description.first.id : about.description.first.en}
          </p>

          <br />

          <p>
            {language === "IND" ? about.description.second.id : about.description.second.en}
          </p>

        </div>

        {/* RIGHT */}
        <div className="about-stats">

          <div className="stat-box">
            <div className="stat-num">{expValue}</div>
            <div className="stat-label">
              {language === "IND" ? about.stats.experience.id : about.stats.experience.en}
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-num">{companiesValue}</div>
            <div className="stat-label">
              {language === "IND" ? about.stats.companies.id : about.stats.companies.en}
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-num">2+</div>
            <div className="stat-label">
              {language === "IND" ? about.stats.projects.id : about.stats.projects.en}
            </div>
          </div>

          <div className="stat-box">
            {/* <div className="stat-num">10+</div> */}
            <div className="stat-num">{totalTools}+</div>
            <div className="stat-label">
              {language === "IND" ? about.stats.tools.id : about.stats.tools.en}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;