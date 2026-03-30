// 🔥 HITUNG TOTAL EXPERIENCE (UNTUK ABOUT)
export function calculateExperience(jobs) {
  const now = new Date();
  let totalMonths = 0;

  jobs.forEach(job => {
    const start = new Date(job.start_date + "-01");
    const end = job.end_date
      ? new Date(job.end_date + "-01")
      : now;

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) + 1;

    totalMonths += months;
  });

  const years = Math.floor(totalMonths / 12);

  let expValue = "0";
  if (totalMonths >= 12) {
    expValue = totalMonths % 12 === 0 ? `${years}` : `${years}+`;
  }

  return {
    expValue,
    companiesValue: jobs.length
  };
}


// 🔥 FORMAT TANGGAL (UNTUK UI)
export function formatDate(dateStr, language) {
  if (!dateStr) return "";

  const date = new Date(dateStr + "-01");

  return date.toLocaleString(
    language === "IND" ? "id-ID" : "en-US",
    {
      month: "short",
      year: "numeric"
    }
  );
}


// 🔥 HITUNG DURASI PER JOB
export function calculateJobDuration(job, language) {
  const now = new Date();

  const start = new Date(job.start_date + "-01");
  const end = job.end_date
    ? new Date(job.end_date + "-01")
    : now;

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1;

  return `${months} ${language === "IND" ? "bulan" : "months"}`;
}


// 🔥 SORT JOB TERBARU DI ATAS (OPSIONAL TAPI RECOMMENDED)
export function sortJobs(jobs) {
  return [...jobs].sort((a, b) => {
    // yang masih bekerja di atas
    if (!a.end_date && b.end_date) return -1;
    if (a.end_date && !b.end_date) return 1;

    // sort berdasarkan start_date terbaru
    return b.start_date.localeCompare(a.start_date);
  });
}