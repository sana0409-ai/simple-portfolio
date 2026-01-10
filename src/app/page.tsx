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
            I’m an <strong>AI/ML Engineer</strong> with <strong>3+ years of experience</strong>,
            focused on building production-ready <strong>machine learning</strong> and
            <strong> generative AI</strong> systems. I enjoy turning complex data into
            scalable APIs, intelligent models, and real-world solutions.
            <br />
            <br />
            My work spans designing end-to-end ML pipelines from data cleaning and feature
            engineering to model training, deployment, and monitoring. I’ve built
            <strong> fraud detection systems</strong>, <strong>real-time forecasting pipelines</strong>,
            <strong> conversational AI assistants</strong>, and <strong>RAG-based applications</strong>,
            deploying them using <strong>FastAPI</strong>, <strong>Docker</strong>, and
            cloud platforms. I enjoy building systems that are <strong>explainable</strong>,
            <strong> reliable</strong>, and actually used by end users. I’m also comfortable
            translating technical work into clear insights and dashboards for stakeholders.
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
