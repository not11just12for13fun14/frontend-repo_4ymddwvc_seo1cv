export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Bundles & boosts</h2>
          <p className="mt-3 text-slate-300">Save with curated kits from top-rated sellers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter Kit', price: '$9', tagline: 'Early-game essentials', features: ['Prot IV Armor', 'Tools + Food', '2x Teleport Service'], cta: 'Buy starter'
          }, {
            name: 'Grinder Pack', price: '$19', tagline: 'Mid-game power boost', features: ['Netherite Tools', 'Beacon Access', '1x Raid Carry'], cta: 'Buy grinder'
          }, {
            name: 'Elite Bundle', price: '$39', tagline: 'Endgame ready', features: ['Maxed Gear Set', 'Elytra + Rockets', 'VIP Support'], cta: 'Buy elite'
          }].map((tier, i) => (
            <div key={tier.name} className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 ${i===1 ? 'ring-2 ring-pink-400' : ''}`}>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="text-slate-300">{tier.tagline}</p>
                </div>
                <div className="text-3xl font-bold text-white">{tier.price}<span className="text-base text-slate-400">/one-time</span></div>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-200"><span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400" /> {f}</li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-6 block w-full text-center rounded-xl px-4 py-2 font-semibold ${i===1 ? 'bg-gradient-to-r from-pink-500 to-amber-500 text-white' : 'bg-white/10 text-white hover:bg-white/15'}`}>{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
