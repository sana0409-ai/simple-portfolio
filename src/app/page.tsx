import Image from "next/image";

export default function Home() {
  return (
    <section className="py-12">
      <div className="flex items-start justify-between gap-6">
        {/* Left: content (reserve space on right so it never sits under avatar) */}
        <div className="space-y-5 max-w-2xl md:pr-36">
          <h1 className="text-left text-2xl sm:text-3xl font-semibold tracking-tight">
            Sana Ambreen
          </h1>

          {/* Remove nowrap so it can wrap neatly */}
          <h2 className="text-left text-3xl md:text-4xl font-extrabold leading-[1.1]">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-600 bg-clip-text text-transparent">
              Designing AI systems with measurable impact.
            </span>
          </h2>

          <p className="text-zinc-700">
            I’m a Data Analytics professional, specializing in AI/ML. I build end-to-end pipelines and models with
            Python (pandas, NumPy, scikit-learn), SAS and run them on Cloud. I’m strong on data storytelling,
            shipping actionable dashboards in Tableau and Power BI and querying large, distributed datasets. I thrive
            at the intersection of AI, big data, and cloud—turning raw data into decisions and measurable business impact.
          </p>

          <div>
            <h3 className="text-xl font-semibold">Links</h3>
            <ul className="list-disc pl-5">
              <li>
                <a className="underline" href="mailto:sanataj0409@gmail.com">
                  sanataj0409@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/sana-ambreen-383433356/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://github.com/sana0409-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="hidden sm:block shrink-0 ml-12">
          <Image
            src="/avatar/me.jpg"
            alt="Sana Ambreen"
            width={200}
            height={200}
            className="rounded-full shadow-lg border-4 border-white/70"
            priority
          />
        </div>
      </div>
    </section>
  );
}
