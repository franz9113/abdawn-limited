import futureImg from '@/assets/promising_future.webp';

const Future = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-8 overflow-hidden">
      {/* Container - Reusing the max-w-7xl rule */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
        
        {/* The Image - Original Color with Shadow & Border */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/3] overflow-hidden rounded-sm border-[3px] border-[#0a0a0a] shadow-[0_20px_50px_rgba(197,160,89,0.3)]">
            <img 
              src={futureImg} 
              alt="The Future of Abdawn" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-[2000ms]"
            />
          </div>
          {/* Subtle gold year accent */}
          <div className="absolute -top-10 -right-10 text-[#c5a059] opacity-[0.05] pointer-events-none">
             <span className="text-[200px] font-serif font-black">2026</span>
          </div>
        </div>

        {/* The Content - Dark & Minimal */}
        <div className="w-full lg:w-1/2 space-y-10 z-10">
          <div className="space-y-4">
            <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold">
              The Horizon
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-tight">
              A Promising <br /> 
              <span className="text-[#c5a059] italic">Future</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
            <p>
              As we look ahead, our commitment to excellence remains steadfast. 
              We are constantly exploring new flavors, techniques, and 
              partnerships that will continue to set Abdawn Limited apart.
            </p>
            <p>
              Our journey is just beginning, and we invite you to be a part 
              of it. Together, let’s toast to a future filled with 
              extraordinary spirits and unforgettable memories.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Future;