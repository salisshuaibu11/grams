import { Header } from "../components/Header";
import { Financial } from "../components/Financial";
import { Features } from "../components/Features";
import { Mission } from "../components/Mission";
import { Support } from "../components/Support";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Financial />
        <Features />
        <Mission />
        <Support />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}