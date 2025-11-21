import { useState } from 'react'
import { Menu, X, ShieldCheck, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#shop', label: 'Shop' },
    { href: '#features', label: 'Why us' },
    { href: '#pricing', label: 'Bundles' },
    { href: '#testimonials', label: 'Reviews' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-white">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-amber-500 text-white shadow-lg">
              <ShoppingBag className="w-5 h-5" />
            </span>
            <span className="font-semibold tracking-tight">Donut SMP IRL</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#shop" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-md hover:shadow-lg">
              <ShoppingBag className="w-4 h-4" />
              Buy now
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 py-2">
                {item.label}
              </a>
            ))}
            <a href="#shop" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-amber-500 text-white">
              <ShoppingBag className="w-4 h-4" />
              Buy now
            </a>
            <div className="flex items-center gap-2 text-emerald-400 pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm">Verified sellers only</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
