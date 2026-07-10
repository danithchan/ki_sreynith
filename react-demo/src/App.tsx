import Navbar from './component/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import Experience from './Page/Experience';
import Contact from './Page/Contact';
import Comment from './Page/Comment';
import Footer from './Page/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-200 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Comment />
      </main>
      <Footer />
    </div>
  );
}

export default App;