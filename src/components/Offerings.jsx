import React from 'react';
import { Globe, Shield, Truck, Layers } from 'lucide-react';

const perks = [
  {
    icon: Globe,
    title: 'Global Export Footprint',
    desc: 'Seamless shipping to major ports across North America, Europe, Middle East, and APAC.'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    desc: 'Batch-wise QC, standardized calibers, moisture-safe packing, and optional SGS inspection.'
  },
  {
    icon: Truck,
    title: 'Efficient Logistics',
    desc: 'Container-optimized packing, transparent lead times, and end-to-end documentation.'
  },
  {
    icon: Layers,
    title: 'Versatile Portfolio',
    desc: 'From budget ceramic to premium porcelain and natural stones for diverse applications.'
  }
];

export default function Offerings() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-manrope text-3xl font-semibold text-zinc-900 sm:text-4xl">
          Built for Projects of Every Scale
        </h2>
        <p className="mt-3 text-zinc-600">
          We partner with builders, distributors, and brands to deliver consistent quality at scale. 
          Our focus is reliability—specs you can trust, packaging that travels safely, and timelines that hold.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
