export default function Testimonials() {
  const quotes = [
    {
      body: 'Built a dashboard in an afternoon. The live preview sealed the deal for my client.',
      author: 'Avery, freelancer'
    },
    {
      body: 'Going from idea to working app without context switching is magic.',
      author: 'Jordan, indie hacker'
    },
    {
      body: 'The database + API layer means the demo isn’t just fake data.',
      author: 'Riley, product lead'
    },
  ]

  return (
    <section id="testimonials" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by builders</h2>
          <p className="mt-3 text-slate-300">Real feedback from people shipping fast.</p>
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
