import { Link } from 'react-router-dom';
import { spirits } from '@/data/spirits';

interface DiscoverMoreProps {
  currentSlug: string;
  accentColor: string;
}

const DiscoverMore = ({ currentSlug, accentColor }: DiscoverMoreProps) => {
  const otherSpirits = spirits.filter(s => s.slug !== currentSlug);

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden px-8">
      <div 
        className="absolute inset-0 opacity-10 blur-[120px] pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)` 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16 uppercase tracking-[0.3em] text-white">
          Discover More
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {otherSpirits.map((spirit) => (
            <Link key={spirit.id} to={`/product/${spirit.slug}`} className="group flex flex-col items-center">
              <div className="relative mb-6 aspect-square w-full max-w-sm flex items-center justify-center">
                <img 
                  src={spirit.image} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl" 
                />
              </div>
              <h3 className="text-xl font-serif uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                {spirit.name}
              </h3>
              <div className="w-8 h-[1px] mt-4 transition-all duration-500 group-hover:w-24" style={{ backgroundColor: accentColor }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default DiscoverMore;