import { certificatesData } from "../data/certificatesData";

function Certificates({ language }) {

  const data = certificatesData;

  const formatDate = (dateStr) => {
    if (!dateStr) return null;

    const date = new Date(dateStr + "-01");

    return date.toLocaleString(
      language === "IND" ? "id-ID" : "en-US",
      { month: "short", year: "numeric" }
    );
  };

  const isExpired = (end_date) => {
    if (!end_date) return false;

    const now = new Date();
    const end = new Date(end_date + "-01");

    return now > end;
  };

  // 🔥 PREPROCESS DATA
  const processedList = data.list.map(cert => ({
    ...cert,
    expired: isExpired(cert.end_date),
  }));

  // 🔥 SORT
  const sortedList = processedList.sort((a, b) => {

    if (a.expired && !b.expired) return 1;
    if (!a.expired && b.expired) return -1;

    const dateA = a.start_date ? new Date(a.start_date + "-01") : new Date(0);
    const dateB = b.start_date ? new Date(b.start_date + "-01") : new Date(0);

    return dateB - dateA;
  });

  return (
    <section id="certificates">

      <div className="section-label">
        {language === "IND" ? data.label.id : data.label.en}
      </div>

      <div className="section-title">
        {language === "IND" ? data.title.id : data.title.en}
      </div>

      <div className="divider-line"></div>

      <div className="cert-grid">

        {sortedList.map((cert) => {

          const start = formatDate(cert.start_date);
          const end = formatDate(cert.end_date);

          const CardContent = (
            <>
              <div className="cert-image-wrapper">

                {cert.expired && (
                  <div className="expired-badge">
                    {language === "IND" ? "Kadaluwarsa" : "Expired"}
                  </div>
                )}

                <img
                  src={cert.img}
                  alt={`Certificate ${cert.name}`}
                />

              </div>

              <div className="cert-name">
                {cert.name}
              </div>

              {(start || end) && (
                <div className="cert-date">
                  {start && end && `${start} - ${end}`}
                  {start && !end && `${start}`}
                </div>
              )}
            </>
          );

          return cert.link ? (
            <a
              key={cert.id || cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              {CardContent}
            </a>
          ) : (
            <div
              key={cert.id || cert.name}
              className="cert-card"
            >
              {CardContent}
            </div>
          );

        })}

      </div>

    </section>
  );
}

export default Certificates;