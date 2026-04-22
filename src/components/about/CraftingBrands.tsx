import exceptional1 from '@/assets/exceptional_1.webp';
import exceptional2 from '@/assets/exceptional_2.webp';
import exceptional3 from '@/assets/exceptional_3.webp';

const CraftingBrands = () => {
  return (
    <section className="bg-black py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-cover bg-center" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* 4-Image Bento Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 max-w-2xl">
            <div className="row-span-2 border-[3px] border-[#0a0a0a] shadow-2xl overflow-hidden rounded-sm aspect-[4/5]">
              <img 
                src={exceptional1} 
                className="w-full h-full object-cover" 
                alt="Core Brand" 
              />
            </div>

            <div className="border-[3px] border-[#0a0a0a] shadow-2xl overflow-hidden rounded-sm aspect-square">
              <img 
                src={exceptional2} 
                className="w-full h-full object-cover" 
                alt="Details" 
              />
            </div>

            <div className="border-[3px] border-[#0a0a0a] shadow-2xl overflow-hidden rounded-sm aspect-square">
              <img 
                src={exceptional3} 
                className="w-full h-full object-cover" 
                alt="Atmosphere" 
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              {/* Optional: Use your subheading-caps here for consistency */}
              <span className="subheading-caps">Our Artistry</span>
              
              <h2 className="heading-luxury">
                Crafting <span className="text-gold-accent block">Exceptional Brands</span>
              </h2>
            </div>

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