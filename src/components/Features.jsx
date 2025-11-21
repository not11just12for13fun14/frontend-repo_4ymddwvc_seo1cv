import { ShieldCheck, Clock, BadgeCheck, MessageSquare, Lock, Zap } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Escrow protected',
    desc: 'Funds are held until both sides confirm delivery. No more risky DMs.'
  },
  {
    icon: BadgeCheck,
    title: 'Verified sellers',
    desc: 'Every seller is vetted by moderators to keep the marketplace clean.'
  },
  {
    icon: Lock,
    title: 'Secure checkout',
    desc: 'Encrypted payments and privacy-first flow with minimal data.'
  },
  {
    icon: Clock,
    title: 'Fast delivery',
    desc: 'Average delivery under 2 hours for in-game items and services.'
  },
  {
    icon: MessageSquare,
    title: 'Instant chat',
    desc: 'Built-in messaging to coordinate in-game meetups without sharing personal info.'
  },
  {
    icon: Zap,
    title: 'Dispute support',
    desc: 'On-call mods help resolve issues fairly and fast.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Trade IRL, play in-game</h2>
          <p className="mt-3 text-slate-300">A purpose-built marketplace for Donut SMP players.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-amber-500 text-white shadow-md">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
