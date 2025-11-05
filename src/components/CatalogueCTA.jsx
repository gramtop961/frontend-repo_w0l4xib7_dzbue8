import React from 'react';

export default function CatalogueCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-rose-50 p-8 sm:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-manrope text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Explore the Full Range
          </h3>
          <p className="mt-2 text-zinc-600">
            Get our detailed catalogue with finishes, sizes, technical specs, packing, and container load charts.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Download Catalogue (PDF)
            </a>
            <a
              href="mailto:sales@yourbrand.example?subject=Catalogue%20and%20Pricing%20Request"
              className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              Request Pricing
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Prefer a curated set? Email us your project specs and we will recommend the best options.
          </p>
        </div>
      </div>
    </section>
  );
}
