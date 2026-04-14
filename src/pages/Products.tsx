import { spirits } from '@/data/spirits';
import SpiritCard from '@/components/SpiritCard';

const Products = () => {
  return (
    <div id='collection' className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
            Our Collection
          </h1>
          <div className="w-20 h-[1px] bg-white/20 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed text-center">
            From the heart of France to your glass, ABDAWNLIMITED brings you 
            an exclusive selection of premium spirits crafted for the sophisticated palate.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spirits.map((spirit) => (
            <SpiritCard key={spirit.id} spirit={spirit} />
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Products;