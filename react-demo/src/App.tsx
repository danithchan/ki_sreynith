import Navbar from './component/Navbar';
import Header from './Page/Header';
import Section from './Page/Section';
import Contact from './Page/Contact';
import Footer from './Page/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-200 min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6">
        <Header />
        <Section />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;