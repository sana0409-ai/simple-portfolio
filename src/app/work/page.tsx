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

        {/* --- Multimodal Depression Analysis (UPDATED DESCRIPTION) --- */}
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
                href="https://multimodal-depression-analysis.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Open Live App
              </a>
            </div>
          </div>
        </div>

        {/* --- TripSage AI Travel Assistant (FIXED IMAGE FIT) --- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl bg-white/40 backdrop-blur p-6 shadow">
          <div className="md:col-span-1">
            <div className="relative w-full h-48 md:h-[300px] overflow-hidden rounded-lg bg-white flex items-center justify-center">
              <Image
                src="/projects/trip sage.jpg"
                alt="TripSage AI Travel Assistant preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
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
              <span className="whitespace-nowrap">
                {" "}
                Conversational AI &amp; Full-Stack Development.
              </span>
            </p>

            <div className="mt-4">
              <a
                href="https://trip-sage-black.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Open Live App
              </a>
            </div>
          </div>
        </div>

        {/* --- ERCOT Real-Time Load Forecasting (NEW) --- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl bg-white/40 backdrop-blur p-6 shadow">
          <div className="md:col-span-1">
            <div className="relative w-full h-48 md:h-[300px] overflow-hidden rounded-lg bg-white flex items-center justify-center">
              <Image
                src="/ercot_image.png"
                alt="ERCOT load forecasting preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold">ERCOT Real-Time Energy Load Forecasting System</h3>

            <p className="mt-2 text-sm text-zinc-800">
              Built an end-to-end real-time electricity load forecasting system for the Texas power
              grid (ERCOT). Evaluated multiple RNN architectures (RNN, LSTM, BiLSTM, GRU) to predict
              next-2-hour demand and deployed the best-performing model via a FastAPI backend.
              Integrated live ERCOT grid data through APIs and visualized real-time forecasts,
              accuracy (MAPE), and load trends using an auto-refreshing Tableau dashboard.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/sana0409-ai/Ercot-load-forecast"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                GitHub Code
              </a>

              <a
                href="https://public.tableau.com/app/profile/sana.ambreen/viz/Ercotenergydashboard/Dashboard1?publish=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Tableau Dashboard
              </a>

              <a
                href="/ercot_load_forecasting_research.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Research Proposal (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* --- COVID-19 Policy Impact on U.S. Housing Markets (NEW) --- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl bg-white/40 backdrop-blur p-6 shadow">
          <div className="md:col-span-1">
            <div className="relative w-full h-48 md:h-[300px] overflow-hidden rounded-lg bg-white flex items-center justify-center">
              <Image
                src="/covid19_image.png.jpg"
                alt="COVID-19 Housing Markets dashboard preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold">COVID-19 Policy Impact on U.S. Housing Markets</h3>

            <p className="mt-2 text-sm text-zinc-800">
              Built an end-to-end data analytics project analyzing how COVID-19 government
              stringency measures influenced U.S. housing price growth from 2020–2023. Integrated
              state-level housing prices with unemployment, GDP growth, mortgage interest rates, and
              COVID severity to uncover how policy restrictions, economic conditions, and migration
              patterns reshaped housing markets. Delivered insights through an interactive Tableau
              dashboard and Python-based regression analysis.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/sana0409-ai/Covid-19-housing-analysis/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                GitHub Code
              </a>

              <a
                href="https://public.tableau.com/app/profile/sana.ambreen/viz/Coviddashboard_17673930866780/Dashboard1?publish=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Tableau Dashboard
              </a>

              <a
                href="/Covid 19 Research Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700"
              >
                Research Paper (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
