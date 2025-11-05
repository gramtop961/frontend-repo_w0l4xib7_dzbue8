import React from 'react';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Products from './components/Products';
import CatalogueCTA from './components/CatalogueCTA';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-rose-600" />
          <span className="font-manrope text-sm font-semibold tracking-wide text-zinc-900">
            INSTONE EXPORTS
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-zinc-700 sm:flex">
          <a href="#products" className="hover:text-rose-600">Products</a>
          <a href="#catalogue" className="hover:text-rose-600">Catalogue</a>
          <a href="mailto:sales@yourbrand.example" className="hover:text-rose-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <Offerings />
        <Products />
        <div id="catalogue">
          <CatalogueCTA />
        </div>
      </main>
      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Instone Exports. All rights reserved.</p>
          <div className="text-sm text-zinc-600">
            Made in India • HS Codes: 6907, 6802
          </div>
        </div>
      </footer>
    </div>
  );
}
