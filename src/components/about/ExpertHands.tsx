import brandsImg1 from '@/assets/extraordinary_1.webp';
import brandsImg2 from '@/assets/extraordinary_2.webp';

const ExpertHands = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-4 md:px-12">
      {/* The Gold "Card" Container */}
      <div className="max-w-7xl mx-auto bg-[#c5a059] pt-16 pb-24 px-8 md:px-16 rounded-sm shadow-2xl">
        
        {/* Dual Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-32 mb-16">
          <div className="aspect-video overflow-hidden border-[3px] border-[#0a0a0a] shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={brandsImg1}
              className="w-full h-full object-cover" 
              alt="Expert Pouring" 
            />
          </div>
          <div className="aspect-video overflow-hidden border-[3px] border-[#0a0a0a] shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={brandsImg2} 
              className="w-full h-full object-cover" 
              alt="Luxury Glassware" 
            />
          </div>
        </div>

        {/* Text Content Below Images */}
        <div className="max-w-4xl">
          <h2 className="text-black text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Extraordinary Brands <br /> In Expert Hands
          </h2>
          <p className="text-black/80 text-xl font-medium leading-relaxed max-w-2xl">
            Abdawn Limited expertly curates extraordinary spirit brands, providing 
            partners and patrons access to superior, locally-loved and 
            internationally-recognized drinks.
          </p>
        </div>

      </div>
    </section>
  );
};
export default ExpertHands;