export default function Showcase() {
  const shots = [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section id="showcase" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Showcase</h2>
            <p className="mt-2 text-slate-300">Sample screens that echo the vibe of modern SaaS dashboards.</p>
          </div>
          <a href="#get-started" className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15">Explore</a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {shots.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
