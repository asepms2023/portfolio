import { contactData } from "../data/contactData";

function Contact({ language }) {

  const contact = contactData;

  return (
    <section id="contact">

      <div className="section-label">
        {language === "IND" ? contact.label.id : contact.label.en}
      </div>

      <div className="section-title">
        {language === "IND" ? contact.title.id : contact.title.en}
      </div>

      <div
        className="divider-line"
        style={{ margin: "0 auto 40px" }}
      ></div>

      <div className="contact-box">

        <p>
          {language === "IND"
            ? contact.description.id
            : contact.description.en}
        </p>

        <div className="contact-links">

          {contact.contacts.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >

              <div className="contact-icon">
                <img src={item.img} alt={item.type} />
              </div>

              <div className="contact-info">

                <div className="contact-type">
                  {language === "IND" ? item.label.id : item.label.en}
                </div>

                <div className="contact-val">
                  {item.value}
                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Contact;