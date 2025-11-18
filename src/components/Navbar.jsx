import { Menu, Coffee, Instagram, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-md">
              <Coffee className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">Sarvatta Café</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#story" className="hover:text-white transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-white transition-colors">Visit</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+10000000000" className="hidden sm:inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call</span>
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
