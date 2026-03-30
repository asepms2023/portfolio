import { techstackData } from "../data/techstackData";

function TechStack({ language }) {

  const data = techstackData;

  return (
    <section id="techstack">

      <div className="section-label">
        {language === "IND" ? data.label.id : data.label.en}
      </div>

      <div className="section-title">
        {language === "IND" ? data.title.id : data.title.en}
      </div>

      <div className="divider-line"></div>

      {data.categories.map((category, index) => (

        <div className="tech-category" key={index}>

          <h3>
            {language === "IND" ? category.title.id : category.title.en}
          </h3>

          <div className="tech-grid">

            {category.items.map((item, i) => (

              <div className="tech-card" key={i}>

                <img src={item.img} alt={item.name} />

                <span>{item.name}</span>

              </div>

            ))}

          </div>

        </div>

      ))}

    </section>
  );
}

export default TechStack;