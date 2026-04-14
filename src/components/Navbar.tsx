import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { spirits } from '@/data/spirits';
import logoImg from '@/assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="Abdawn Limited" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          </Link>
        {/* <Link to="/" className="text-xl font-bold tracking-[0.4em] text-white cursor-pointer">
          ABDAWN<span className="text-white/50">LIMITED</span>
        </Link> */}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          
         <div className="group relative py-2">
  <Link 
    to="/collection" 
    className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
  >
    Collection
  </Link>

  <div className="absolute top-full left-0 hidden group-hover:block w-64 pt-4 z-50">
    <div className="bg-black border border-white/10 p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="flex flex-col space-y-4">
        <span className="text-[#c5a059] text-[9px] tracking-[0.3em] font-bold uppercase pb-2 border-b border-white/5">
          The Spirits
        </span>
        
        {spirits.map((spirit) => (
          <Link 
            key={spirit.id}
            to={`/collection/${spirit.slug}`}
            className="group/item flex flex-col"
          >
            <span className="text-white/60 group-hover/item:text-white group-hover/item:translate-x-2 transition-all duration-300 font-serif text-lg italic">
              {spirit.name}
            </span>
            <span className="text-[8px] text-[#c5a059] uppercase tracking-widest mt-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
              View Story
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

          {/* Standard Links */}
          <Link to="/about" className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white uppercase text-[10px] tracking-widest font-bold">
          Menu
        </div>
      </div>
    </nav>
  );
};

export default Navbar;