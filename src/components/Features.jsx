import { CupSoda, Leaf, Sparkles, Clock } from "lucide-react";

const features = [
  { icon: CupSoda, title: "Signature Boba", desc: "Hand-shaken with house syrups and chewy pearls, customizable sweetness." },
  { icon: Leaf, title: "Fine Teas", desc: "Single-origin leaves, cold brew and pour-over extractions for clarity." },
  { icon: Sparkles, title: "Seasonal Specials", desc: "Limited runs inspired by local farms and festive flavors." },
  { icon: Clock, title: "All‑day Hangout", desc: "Fast Wi‑Fi, plenty of plugs, and cozy corners for hours of flow." },
];

export default function Features() {
  return (
    <section id="menu" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What We Pour</h2>
          <p className="mt-3 text-white/70">Crafted drinks made fresh in-house. Always playful, always quality.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-md mb-4">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
