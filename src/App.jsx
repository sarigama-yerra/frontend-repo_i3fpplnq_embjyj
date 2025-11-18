import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuShowcase from './components/MenuShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800">
      <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_10%,rgba(255,255,255,0.2),transparent),radial-gradient(30%_30%_at_80%_0%,rgba(255,255,255,0.12),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <MenuShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
