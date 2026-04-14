import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Products from '@/pages/Products';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import ProductDetail from '@/pages/ProductDetail';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Mission from '@/components/Mission';
import BackToTopButton from '@/components/BackToTop';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Mission />
                <div id="collection">
                  <Products />
                </div>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Updated to match your SpiritCard links */}
            <Route path="/collection/:productSlug" element={<ProductDetail />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <BackToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-6xl font-serif mb-4">404</h1>
    <p className="text-gray-500 tracking-[0.3em] uppercase mb-8">The spirit you seek has vanished.</p>
    <a href="/" className="text-[#c5a059] border-b border-[#c5a059] pb-1 hover:text-white hover:border-white transition-all">
      Return Home
    </a>
  </div>
);

export default App;