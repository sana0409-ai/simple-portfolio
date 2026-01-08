import Image from "next/image";

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold">Work</h1>

      {/* ---- Experience Card ---- */}
      <article className="mt-8 rounded-xl bg-white/40 backdrop-blur p-6 shadow">
        <header className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Verity Advisors</h2>
            <p className="text-sm text-zinc-700">AI Research Intern</p>
          </div>
          <span className="text-sm text-zinc-600 whitespace-nowrap">
            Mar 2025 – May 2025
          </span>
        </header>

        <p className="mt-4 text-sm leading-6 text-zinc-800">
          Contributed to applied research in AI/ML for quantitative finance. Designed and shipped
          end-to-end ML pipelines in Python using XGBoost,{" "}
          <strong>LSTM</strong>, and <strong>PyTorch</strong>; operationalized models with{" "}
          <strong>MLflow</strong>, <strong>GitHub Actions</strong>, <strong>Docker</strong>, and{" "}
          <strong>AWS</strong>. Worked with real-time APIs (IBKR, Unusual Whales), applied
          risk-aware evaluation, model calibration, and ensembles to improve reliability.
        </p>
      </article>

      {/* ---- Project Showcase ---- */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Featured Project</h2>

        {/* --- Multimodal Depression Analysis --- */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl bg-white/40 backdrop-blur p-6 shadow">
          <div className="md:col-span-1">
            <div className="relative w-full h-48 md:h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/projects/mda.jpg"
                alt="Multimodal Depression Analysis preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold">Multimodal Depression Analysis</h3>

            <p className="mt-2 text-sm text-zinc-800">
              Built an end-to-end, real-time multimodal depression screening system that analyzes{" "}
              <strong>speech, facial expressions, and language</strong> from short user responses.
              The system captures live audio and video through webcam and microphone, extracts
              acoustic features (eGeMAPS), speech formants, facial landmarks, and contextual text
              embeddings (BERT), and combines them into a unified feature vector. A trained PyTorch
              neural network predicts the probability of depression and delivers results instantly
              through a deployed web application.
            </p>

            <div className="mt-4">
              <a
                href="https://multimodal-depression-analysis--sanataj0409.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Open Live App
              </a>
            </div>
          </div>
        </div>

        {/* --- Fraud Real-Time Monitoring Dashboard --- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl bg-white/40 backdrop-blur p-6 shadow">
          <div className="md:col-span-1">
            <div className="relative w-full h-48 md:h-[300px] overflow-hidden rounded-lg bg-white flex items-center justify-center">
              <Image
                src="/projects/fraud_image.png"
                alt="Fraud Real-Time Monitoring Dashboard preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold">Fraud Real-Time Monitoring Dashboard</h3>

            <p className="mt-2 text-sm text-zinc-800">
              A full-stack, real-time fraud monitoring platform designed to help analysts detect,
              investigate, and explain suspicious transactions with speed and clarity.
            </p>

            <p className="mt-2 text-sm text-zinc-800">
              The dashboard provides a live view of transaction activity, fraud severity indicators,
              and contextual signals, paired with AI-generated explanations powered by
              Retrieval-Augmented Generation (RAG). By grounding large language model outputs in
              historical fraud cases, the system delivers explanations that are not only intelligent,
              but auditable and trustworthy.
            </p>

            <p className="mt-2 text-sm text-zinc-800">
              The frontend presents fraud trends, alerts, and case-level insights through an intuitive UI,
              while the backend runs on a cloud-native FastAPI microservice deployed on Azure Container Apps.
              Semantic search is handled via Azure Cognitive Search, and reasoning is powered by Azure OpenAI,
              enabling analysts to move from detection to decision in seconds.
            </p>

            <div className="mt-4">
              <a
                href="https://fraud-monitoring-dashboard--sanataj0409.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Open Live App
              </a>
            </div>
          </div>
        </div>

        {/* --- TripSage AI Travel Assistant --- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl bg-white/40 backdrop-blur p-6 shadow">
          <div className="md:col-span-1">
            <div className="relative w-full h-48 md:h-[300px] overflow-hidden rounded-lg bg-white flex items-center justify-center">
              <Image
                src="/projects/trip sage.jpg"
                alt="TripSage AI Travel Assistant preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold">TripSage AI Travel Assistant</h3>

            <p className="mt-2 text-sm text-zinc-800">
              AI-powered travel planning assistant built with Google Dialogflow CX and React.
              Enables users to book flights, hotels, and rental cars through natural language
              conversations with real-time API integrations for live pricing and availability.
            </p>

            <p className="mt-2 text-sm text-zinc-800">
              Features include intelligent trip itinerary generation, step-by-step booking flows,
              and a beautiful chat interface with rich media cards. Integrates with Amadeus,
              Booking.com, and Priceline APIs for comprehensive travel options.
            </p>

            <div className="mt-4">
              <a
                href="https://trip-sage--sanataj0409.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Open Live App
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
