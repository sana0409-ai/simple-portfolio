import Image from "next/image";

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-2 text-sm text-zinc-600">Some of my recent images/projects:</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <figure className="overflow-hidden rounded-xl shadow-lg bg-white/40 backdrop-blur hover:shadow-xl transition">
          <Image
            src="/gallery/pic1.png"  // <-- match your file
            alt="Hospital Profitability Analysis"
            width={1200}
            height={800}
            className="h-64 w-full object-cover duration-300 hover:scale-105"
            priority
          />
          <figcaption className="p-3 text-sm text-zinc-700">
            Hospital Profitability Dashboard — revenue, profit trends, claim costs.
          </figcaption>
        </figure>

        <figure className="overflow-hidden rounded-xl shadow-lg bg-white/40 backdrop-blur hover:shadow-xl transition">
          <Image
            src="/gallery/pic2.png"  // <-- match your file
            alt="Rural vs Urban Hospital Insights"
            width={1200}
            height={800}
            className="h-64 w-full object-cover duration-300 hover:scale-105"
          />
          <figcaption className="p-3 text-sm text-zinc-700">
            Rural vs Urban insights — income, discharge rates, Medicaid coverage.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
