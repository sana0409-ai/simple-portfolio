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
              Designing production-grade GenAI &amp; ML systems.
            </span>
          </h2>

          <p className="text-zinc-700">
            I&#39;m a Senior ML Engineer and GenAI Specialist with 7+ years of experience building production-grade machine learning and generative AI systems across startups and enterprise environments.
            <br />
            <br />
            My work spans the full ML lifecycle from exploratory data analysis and feature engineering to model training, fine-tuning, deployment, and monitoring. I&#39;ve shipped engagement prediction engines, real-time trading ML systems, LLM-powered RAG applications, multi-agent orchestration pipelines, and large-scale time-series forecasting models deploying them on GCP, AWS, and Azure using FastAPI, Docker, Kubernetes, and modern MLOps tooling.
            <br />
            <br />
            I specialize in the space where generative AI meets production reality: fine-tuning LLMs (Llama, BERTweet) with qLoRA, building Graph RAG systems with knowledge graph retrieval, and designing agentic frameworks using LangGraph and LangChain that actually work reliably under real traffic.
            <br />
            <br />
            What drives me is building systems that are explainable, scalable, and genuinely used and translating complex model outputs into clear, actionable insights for both technical teams and business stakeholders.
            <br />
            <br />
            I am open to senior ML, GenAI, and data science roles at companies building things that matter.
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
