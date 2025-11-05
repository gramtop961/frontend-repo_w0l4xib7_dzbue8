import React from 'react';

const products = [
  {
    name: 'Porcelain Tiles',
    details:
      'Full-body and glazed porcelain in matte, polished, and structured finishes. Popular sizes: 600×600, 600×1200, 800×1600 mm.'
  },
  {
    name: 'Ceramic Wall & Floor',
    details:
      'Durable, cost-effective ceramic for walls and light-traffic floors. Subway, large format, and decorative options available.'
  },
  {
    name: 'Natural Stones',
    details:
      'Granite, Marble, and Sandstone from leading Indian quarries. Slabs, cut-to-size, cobbles, and exterior pavers.'
  },
  {
    name: 'Outdoor & Mosaics',
    details:
      'Anti-skid pavers, terrace tiles, stacked stone, and mosaics for feature walls and facades.'
  }
];

export default function Products() {
  return (
    <section id="products" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-manrope text-3xl font-semibold text-zinc-900 sm:text-4xl">What We Offer</h2>
          <p className="mt-3 text-zinc-600">
            A concise view of our core range. For the complete selection—including textures, sizes,
            and packaging specs—download the catalogue below.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                {/* minimalist bullet */}
                <div className="h-2 w-2 rounded-full bg-rose-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.details}</p>
            </article>
          ))}
        </div>

        <ul className="mt-8 list-inside list-disc text-sm text-zinc-600">
          <li>Finish options: matte, satin, polished, high-gloss, sugar, structured.</li>
          <li>Edge profiles: rectified and non-rectified; tight-caliber options for minimal grout lines.</li>
          <li>Packing: export-grade cartons with moisture barrier and reinforced wooden pallets.</li>
        </ul>
      </div>
    </section>
  );
}
