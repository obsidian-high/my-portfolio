import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects'; // <--- Import the new component
import Skills from '@/components/Skills';
import Contact from '@/components/Contact'; // <--- Import

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Projects /> {/* <--- The new interactive section */}
      <Skills />
      <Contact />

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
        <p className="text-gray-400 mt-4 mb-8">Ready to turn data into decisions?</p>
        <a href="mailto:hassan@example.com" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
          Say Hello
        </a>
      </section>
    </main>
  );
}