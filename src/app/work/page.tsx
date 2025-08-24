type Role = { company: string; title: string; period: string; bullets: string[] };

const roles: Role[] = [
  {
    company: "VerityAdvisors",
    title: "Data Scientist Intern",
    period: "Mar 2025 – May 2025",
    bullets: [
      "Filtered Unusual Whales sweeps with strict volume/OI rules.",
      "XGBoost → Logistic Regression stack to score trade signals.",
      "Logged sweeps/trades to Postgres; integrated mock IBKR exec.",
      "Containerized services; basic AWS MLOps.",
    ],
  },
];

export default function Work() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Work</h1>
      <div className="space-y-8">
        {roles.map((r) => (
          <div key={r.company} className="space-y-2">
            <div className="flex justify-between gap-4">
              <div>
                <div className="font-medium">{r.company}</div>
                <div className="text-sm text-zinc-600">{r.title}</div>
              </div>
              <div className="text-sm text-zinc-500">{r.period}</div>
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
