export default function ResumePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Resume</h1>

      <div className="rounded-xl border shadow-sm overflow-hidden bg-white">
        <object
          data="/Sana_cv.pdf#toolbar=1&navpanes=0&scrollbar=1"
          type="application/pdf"
          className="w-full h-[80vh]"
        >
          <div className="p-6 text-sm">
            Your browser can’t display PDFs inline.{" "}
            <a
              className="underline"
              href="/Sana_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the resume
            </a>{" "}
            or{" "}
            <a className="underline" href="/Sana_cv.pdf" download>
              download it
            </a>.
          </div>
        </object>
      </div>

      <a
        href="/Sana_cv.pdf"
        download
        className="inline-block rounded-lg border px-4 py-2 text-sm font-medium hover:bg-zinc-50"
      >
        Download PDF
      </a>
    </section>
  );
}
