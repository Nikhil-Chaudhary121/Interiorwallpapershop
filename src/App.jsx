import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="bg-white text-ink font-sans">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
