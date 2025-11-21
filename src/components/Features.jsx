import { Code, Database, Globe, Bot, Rocket, Settings } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Pixel-perfect UI',
    desc: 'Modern, responsive interfaces powered by Tailwind and motion.'
  },
  {
    icon: Database,
    title: 'Real data, not demos',
    desc: 'FastAPI + MongoDB out of the box for true persistence.'
  },
  {
    icon: Globe,
    title: 'Live preview',
    desc: 'See changes instantly with hot reload and hosted preview.'
  },
  {
    icon: Bot,
    title: 'AI building blocks',
    desc: 'Describe features in plain language—get working code.'
  },
  {
    icon: Rocket,
    title: 'Production-ready',
    desc: 'Clean structure, good defaults, and scalable patterns.'
  },
  {
    icon: Settings,
    title: 'Extend with ease',
    desc: 'Add components, routes, and APIs as your idea grows.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need</h2>
          <p className="mt-3 text-slate-300">A streamlined toolkit to go from idea to running app fast.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-md">
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
