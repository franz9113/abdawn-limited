import { Link } from 'react-router-dom';
import type { Spirit } from '@/types/index';

interface Props {
  spirit: Spirit; 
}

const SpiritCard = ({ spirit }: Props) => {
  return (
    <div className="group relative bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-white/20">
      <div className="h-80 w-full flex items-center justify-center mb-8 relative z-10">
        <img 
          src={spirit.image} 
          alt={spirit.name} 
          className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      
      {/* Glow Effect using spirit.accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[100px] opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none z-0"
        style={{ backgroundColor: spirit.accent }}
      />

      <h3 className="text-2xl font-bold text-white mb-1">{spirit.name}</h3>
      <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: spirit.accent }}>
        {spirit.type}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {spirit.description}
      </p>

      {/* Replaced button with Link for navigation */}
      <Link 
        to={`/collection/${spirit.slug}`}
        className="inline-block text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition"
      >
        Discover More
      </Link>
    </div>
  );
};

export default SpiritCard;