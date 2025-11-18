export default function Footer(){
  return (
    <footer id="visit" className="relative mt-10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-white font-semibold text-lg">Sarvatta Café</h3>
              <p className="text-white/70 text-sm mt-2">123 Market Street, Your City, 10001</p>
              <p className="text-white/70 text-sm">Open Daily • 8am — 8pm</p>
            </div>
            <div>
              <h4 className="text-white/90 font-medium">Contact</h4>
              <p className="text-white/70 text-sm mt-2">hello@sarvattacafe.com</p>
              <p className="text-white/70 text-sm">(000) 000-0000</p>
            </div>
            <div>
              <h4 className="text-white/90 font-medium">Follow</h4>
              <div className="mt-2 flex gap-3">
                <a className="text-white/80 hover:text-white text-sm" href="#">Instagram</a>
                <a className="text-white/80 hover:text-white text-sm" href="#">TikTok</a>
                <a className="text-white/80 hover:text-white text-sm" href="#">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-white/50 text-xs">
            © {new Date().getFullYear()} Sarvatta Café. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
