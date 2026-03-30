import { experienceData } from "../data/experienceData";
import {
  formatDate,
  calculateJobDuration
} from "../utils/experienceHelper";

function Experience({ language }) {

  const data = experienceData;

  // 🔥 SORTING
  const sortedJobs = [...data.jobs].sort((a, b) => {

    const aCurrent = !a.end_date;
    const bCurrent = !b.end_date;

    if (aCurrent && !bCurrent) return -1;
    if (!aCurrent && bCurrent) return 1;

    const dateA = a.start_date ? new Date(a.start_date + "-01") : new Date(0);
    const dateB = b.start_date ? new Date(b.start_date + "-01") : new Date(0);

    return dateB - dateA;
  });

  return (
    <section id="experience">

      <div className="section-label">
        {language === "IND" ? data.label.id : data.label.en}
      </div>

      <div className="section-title">
        {language === "IND" ? data.title.id : data.title.en}
      </div>

      <div className="divider-line"></div>

      <div className="timeline">

        {sortedJobs.map((job) => {

          const start = formatDate(job.start_date, language);

          const end = job.end_date
            ? formatDate(job.end_date, language)
            : (language === "IND" ? "Saat ini" : "Present");

          const duration = calculateJobDuration(job, language);

          return (

            <div className="timeline-item" key={job.id}>

              <div className="exp-role">{job.role}</div>

              <div className="exp-company">{job.company}</div>

              <span className="exp-year">
                {start} - {end}
              </span>

              <div className="exp-duration">
                {duration}
              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}

export default Experience;