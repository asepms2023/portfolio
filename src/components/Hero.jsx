import { heroData } from "../data/heroData";
import { experienceData } from "../data/experienceData";
import { calculateExperience } from "../utils/experienceHelper";
import { FiDownload } from "react-icons/fi";

function Hero({ language }) {

  const hero = heroData;

  // ambil exp dari experience
  const { expValue } = calculateExperience(experienceData.jobs);

  return (
    <section id="home">

      {/* GLOW */}
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>

      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-text">

          <p className="greeting">
            {language === "IND" ? hero.greeting.id : hero.greeting.en}
          </p>

          <h1>
            I'm <span className="name-highlight">Mohamad Asep</span>
            <br />
            Shayfullah
          </h1>

          <p className="subtitle">
            {language === "IND" ? hero.subtitle.first.id : hero.subtitle.first.en}
            <br />
            {language === "IND" ? hero.subtitle.second.id : hero.subtitle.second.en}
          </p>

          <div className="hero-btns">

            <a href="#contact" className="btn-primary">
              {language === "IND" ? hero.button.contact.id : hero.button.contact.en}
            </a>

            <a
              href={language === "IND" ? hero.cv.id : hero.cv.en}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload style={{ marginRight: "6px" }} />
              {language === "IND" ? hero.button.cv.id : hero.button.cv.en}
            </a>

          </div>

          {/* SOCIAL */}
          <div className="social-row">
            {hero.social.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={item.img} alt={item.type} />
              </a>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-photo">

          <div className="photo-wrapper">

            <div className="photo-bg-shape"></div>

            <div className="photo-placeholder">

              <img
                src={hero.profile.profile_main}
                alt="profile"
                className="profile-photo profile-main"
              />

              <img
                src={hero.profile.profile_hover}
                alt="profile hover"
                className="profile-photo profile-hover"
              />

            </div>

            <div className="badge-floating badge2">
              <span className="badge-num">{expValue}</span>
              <span>
                {language === "IND" ? hero.exp.id : hero.exp.en}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;