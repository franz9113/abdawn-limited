import exceptional1 from '@/assets/exceptional_1.webp';
import exceptional2 from '@/assets/exceptional_2.webp';
import exceptional3 from '@/assets/exceptional_3.webp';

const CraftingBrands = () => {
  return (
    <section className="bg-black py-32 px-8 relative overflow-hidden">
      {/* Dramatic Fire Background */}
      <div className="absolute inset-0 opacity-40 bg-cover bg-center" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* 4-Image Bento Grid - Constrained width prevents massive stretching */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 max-w-2xl">
            
            {/* Large Main Image - Force 4:5 Aspect Ratio (Tall) */}
            <div className="row-span-2 border-[3px] border-[#0a0a0a] shadow-2xl overflow-hidden rounded-sm aspect-[4/5]">
              <img 
                src={exceptional1} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                alt="Core Brand" 
              />
            </div>

            {/* Top Right - Force 1:1 Aspect Ratio (Square) */}
            <div className="border-[3px] border-[#0a0a0a] shadow-2xl overflow-hidden rounded-sm aspect-square">
              <img 
                src={exceptional2} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                alt="Details" 
              />
            </div>

            {/* Bottom Right - Force 1:1 Aspect Ratio (Square) */}
            <div className="border-[3px] border-[#0a0a0a] shadow-2xl overflow-hidden rounded-sm aspect-square">
              <img 
                src={exceptional3} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                alt="Atmosphere" 
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-white text-5xl md:text-7xl font-serif tracking-tighter">
              Crafting <br /> <span className="text-[#c5a059] italic">Exceptional</span> Brands
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
              At the heart of Abdawn Limited lies a relentless pursuit of excellence. 
              We meticulously source the finest ingredients and employ time-honored 
              techniques to craft spirits that are both timeless and ahead of their time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingBrands;