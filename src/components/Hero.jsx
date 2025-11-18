import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/20 via-rose-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-black/20 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs mb-4">
              Since 2015 • Locally Roasted • Bubble Tea Loved
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Sarvatta Café
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
              A playful neighborhood cafe serving specialty coffee, artisanal teas, and our famous bubble tea. Come for the drinks, stay for the vibes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-rose-600 font-semibold shadow-md hover:shadow-lg">
                View Menu
              </a>
              <a href="#visit" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15">
                Visit Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
