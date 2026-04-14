import visionaryImg from '@/assets/vision.webp';

const Visionary = () => {
  return (
    <section className="bg-[#0a0a0a] min-h-screen flex items-center py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The Image */}
        <div className="relative group overflow-hidden">
          <img 
            src={visionaryImg} 
            alt="Who We Are" 
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle gold border detail */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#c5a059]/30 -z-10" />
        </div>

        {/* Right Side: The Content */}
        <div className="space-y-8">
          <div>
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              A Visionary <span className="italic text-[#c5a059]">Approach</span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Abdawn Limited was founded on the belief that every sip should be a celebration 
            of the art of distillation. We are a company built on a bold vision – to curate 
            a portfolio of extraordinary spirits that captivate the senses and elevate the 
            moments that matter most.
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Our team comprises industry veterans and visionary minds, united by a shared 
            passion for pushing boundaries and redefining what it means to create truly 
            remarkable spirits.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Visionary;