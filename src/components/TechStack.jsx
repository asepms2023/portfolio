import { techstackData } from "../data/techstackData";

function TechStack({ language }) {

  const data = techstackData;

  // helper biar clean
  const t = (text) => language === "IND" ? text.id : text.en;

  return (
    <section id="techstack">

      <div className="section-label">
        {t(data.label)}
      </div>

      <div className="section-title">
        {t(data.title)}
      </div>

      <div className="divider-line"></div>

      {data.categories.map((category, index) => (

        <div className="tech-category" key={index}>

          <h3>{t(category.title)}</h3>

          <div className="tech-grid">

            {category.items.map((item, i) => (

              <div className="tech-card" key={i}>

                <img 
                  src={item.img} 
                  alt={t(item.name)} 
                />

                <span>{t(item.name)}</span>

              </div>

            ))}

          </div>

        </div>

      ))}

    </section>
  );
}

export default TechStack;