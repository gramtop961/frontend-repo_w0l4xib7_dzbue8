import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft top-to-bottom gradient to improve text contrast. Don't block interactions. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-manrope text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
          Premium Tiles & Natural Stones
          <span className="block text-rose-600">Exported from India</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
          Reliable sourcing, consistent quality, and on‑time global delivery for residential,
          commercial, and large infrastructure projects.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Download Catalogue
          </a>
          <a
            href="#products"
            className="rounded-full border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-medium text-zinc-800 backdrop-blur transition hover:bg-white"
          >
            Explore Offerings
          </a>
        </div>
        <div className="mt-6 text-xs uppercase tracking-wide text-zinc-500">
          ISO‑aligned processes • SGS inspection support • Private labeling
        </div>
      </div>
    </section>
  );
}
