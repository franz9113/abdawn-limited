import { Link } from 'react-router-dom'; // Add this
import heroImg from '@/assets/hero.webp';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          className="w-full h-full object-cover" 
          alt="ABDAWN Craftsmanship" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 text-center px-8">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tighter">
          The Art of <span className="text-[#c5a059]">Distillation</span>
        </h1>
        <p className="text-gray-200 max-w-xl mx-auto text-lg font-light leading-relaxed mb-10">
          Crafting exceptional French spirits for those who appreciate 
          the finer details of life.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-[#c5a059] text-black uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-white transition-all duration-300"
          >
            Explore Collection
          </button>
          
          <Link 
            to="/about"
            className="px-10 py-4 border border-white/20 text-white uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-white/10 transition-all duration-300 text-center"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;