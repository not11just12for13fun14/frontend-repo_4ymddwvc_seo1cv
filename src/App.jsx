import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(1000px_500px_at_110%_10%,rgba(99,102,241,0.15),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Testimonials />
        <section id="get-started" className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to ship faster?</h3>
            <p className="mt-2 text-slate-300">Tell me what you want to see next and I’ll adapt the layout to match.</p>
            <a href="/test" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg">Open system test</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
