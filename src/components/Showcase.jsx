export default function Showcase() {
  const shots = [
    { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: 'Bundles' },
    { src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop', label: 'Kits' },
    { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop', label: 'Services' },
  ]

  return (
    <section id="shop" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Shop listings</h2>
            <p className="mt-2 text-slate-300">Popular categories from verified sellers. Click a card to start checkout.</p>
          </div>
          <a href="#pricing" className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15">See bundles</a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {shots.map((it, i) => (
            <a key={i} href="#pricing" className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 group">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${it.src})` }} />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-lg bg-black/50 px-3 py-2 text-white/90 text-sm backdrop-blur border border-white/10">{it.label}</span>
                <span className="rounded-lg bg-pink-500/80 px-3 py-2 text-white text-sm">From $5</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
