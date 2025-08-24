export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Aftab Hussain</h1>
      <p className="text-zinc-700">Data Scientist • Dallas, TX</p>
      <p className="max-w-prose">
        I design, train, and ship ML systems end-to-end — from data ingestion to production inference.
        Interests: options flow, time-series, and scalable MLOps.
      </p>

      <h2 className="text-xl font-semibold">Links</h2>
      <ul className="list-disc pl-5">
        <li><a className="underline" href="mailto:you@email.com">you@email.com</a></li>
        <li><a className="underline" href="https://www.linkedin.com/in/yourhandle">LinkedIn</a></li>
        <li><a className="underline" href="https://github.com/yourhandle">GitHub</a></li>
      </ul>
    </section>
  );
}
