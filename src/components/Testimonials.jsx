export default function Testimonials() {
  const quotes = [
    {
      body: 'Got my gear in 30 minutes with escrow. Super smooth experience.',
      author: 'Kai, Donut SMP player'
    },
    {
      body: 'Mods verified my seller and helped schedule the meetup. 10/10.',
      author: 'Mina, grinder'
    },
    {
      body: 'The bundles saved me hours. Would recommend to any new player.',
      author: 'Zed, builder'
    },
  ]

  return (
    <section id="testimonials" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What players say</h2>
          <p className="mt-3 text-slate-300">Real trades. Real protection. Real fast.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-slate-200">“{q.body}”</blockquote>
              <figcaption className="mt-4 text-slate-400">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
