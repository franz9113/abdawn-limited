import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { spirits } from '@/data/spirits';
import logoImg from '@/assets/logo.svg';

// --- Sub-Component: Dropdown Menu ---
const CollectionDropdown = () => (
  <div className="absolute top-full left-0 hidden group-hover:block w-64 pt-4 z-50">
    <div className="bg-black border border-white/10 p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="flex flex-col space-y-4">
        <span className="text-[#c5a059] text-[9px] tracking-[0.3em] font-bold uppercase pb-2 border-b border-white/5">
          The Spirits
        </span>
        {spirits.map((spirit) => (
          <Link key={spirit.id} to={`/collection/${spirit.slug}`} className="group/item flex flex-col">
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
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes menu and scrolls to top
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 group">
          <img src={logoImg} alt="Abdawn" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <div className="group relative py-2">
            <Link to="/collection" className="nav-link">Collection</Link>
            <CollectionDropdown />
          </div>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white uppercase text-[10px] tracking-[0.2em] font-bold z-[60]"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

    
      {/* Mobile Menu Overlay */}
{isMobileMenuOpen && (
  <div className="fixed inset-0 h-[100dvh] bg-black z-[55] flex flex-col animate-in fade-in duration-300">
    {/* Inner scroll container */}
    <div className="flex-1 overflow-y-auto px-8 flex flex-col items-center">
      
      {/* Spacer to push content below your Logo/Toggle */}
      <div className="h-32 w-full flex-shrink-0" />

      {/* Mobile Links Group */}
      <div className="flex flex-col items-center gap-8 text-center w-full">
        <Link to="/" onClick={handleLinkClick} className="text-2xl font-serif italic text-white">Home</Link>
        <Link to="/about" onClick={handleLinkClick} className="text-[11px] uppercase tracking-[0.3em] text-white/70">About</Link>
        <Link to="/contact" onClick={handleLinkClick} className="text-[11px] uppercase tracking-[0.3em] text-white/70">Contact</Link>
        
        <div className="h-[1px] w-12 bg-[#c5a059]/30 my-4" />
        
        <span className="text-[#c5a059] text-[9px] tracking-[0.3em] font-bold uppercase mb-2">
          The Collection
        </span>

        {spirits.map(s => (
          <Link 
            key={s.id} 
            to={`/collection/${s.slug}`} 
            onClick={handleLinkClick} 
            className="text-xl font-serif italic text-white/60 hover:text-[#c5a059] transition-colors py-2"
          >
            {s.name}
          </Link>
        ))}
      </div>

      {/* Extra bottom padding to clear the iPhone Home bar */}
      <div className="h-32 w-full flex-shrink-0" />
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;