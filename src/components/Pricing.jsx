export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple pricing</h2>
          <p className="mt-3 text-slate-300">Start free, upgrade when you need more power.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$0', tagline: 'For trying ideas', features: ['UI builder', 'Hosted preview', 'Community support'], cta: 'Get started'
          }, {
            name: 'Pro', price: '$19', tagline: 'For indie makers', features: ['APIs + DB', 'Unlimited previews', 'Priority support'], cta: 'Upgrade'
          }, {
            name: 'Studio', price: '$49', tagline: 'For teams', features: ['Collaboration', 'Environments', 'SLA support'], cta: 'Contact sales'
          }].map((tier, i) => (
            <div key={tier.name} className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 ${i===1 ? 'ring-2 ring-sky-400' : ''}`}>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="text-slate-300">{tier.tagline}</p>
                </div>
                <div className="text-3xl font-bold text-white">{tier.price}<span className="text-base text-slate-400">/mo</span></div>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-200"><span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400" /> {f}</li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-6 block w-full text-center rounded-xl px-4 py-2 font-semibold ${i===1 ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white' : 'bg-white/10 text-white hover:bg-white/15'}`}>{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
