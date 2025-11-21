import { motion } from 'framer-motion'
import { ChevronRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.1),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.1),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Build beautiful apps
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">by chatting</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
            >
              Describe your idea. Watch it come to life with clean UI, working APIs, and live previews—no code required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 hover:shadow-indigo-500/30">
                Get started
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="/test" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15">
                <PlayCircle className="w-5 h-5" />
                View system test
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                'Tailwind',
                'FastAPI',
                'MongoDB',
                'Vite',
              ].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-slate-300">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
