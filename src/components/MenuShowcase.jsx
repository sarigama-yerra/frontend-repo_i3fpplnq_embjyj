const items = [
  {
    name: "Classic Milk Tea",
    price: "$5.50",
    desc: "Black tea, milk, chewy tapioca pearls. Sweetness adjustable.",
    tag: "Best Seller",
  },
  {
    name: "Strawberry Matcha",
    price: "$6.50",
    desc: "Layered matcha with strawberry purée and milk.",
    tag: "Seasonal",
  },
  {
    name: "Brown Sugar Boba",
    price: "$6.00",
    desc: "House brown sugar syrup swirled with fresh milk and pearls.",
  },
];

export default function MenuShowcase() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A Peek at the Menu</h2>
            <p className="text-white/70 mt-3 max-w-xl">We rotate specials often and keep classics always on. Ask the barista for off‑menu favorites!</p>
            <div className="mt-6 space-y-4">
              {items.map((i) => (
                <div key={i.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-baseline justify-between">
                    <div className="text-white font-semibold">{i.name}</div>
                    <div className="text-rose-300 font-medium">{i.price}</div>
                  </div>
                  <div className="text-white/70 text-sm mt-1">{i.desc}</div>
                  {i.tag && (
                    <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-300/20">{i.tag}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-rose-100/20 to-pink-100/10">
            <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop" alt="Boba" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-pink-500/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
