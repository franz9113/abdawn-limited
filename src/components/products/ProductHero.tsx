interface ProductHeroProps {
  name: string;
  tagline?: string;
  image: string;
  heroImage: string;
  accentColor: string;
}

const ProductHero = ({ name, tagline, heroImage, accentColor }: ProductHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom" 
          alt="" 
        />
        <div className="absolute inset-0 bg-black/50 bg-[radial-gradient(circle,_transparent_20%,_black_90%)]" />
      </div>

      {/* Centered Content Layer */}
      <div className="max-w-4xl mx-auto px-8 w-full text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 leading-tight tracking-tight">
            {name}
          </h1>
          
          {/* Subtle line using the accentColor */}
          <div 
            className="w-24 h-1 mx-auto mb-6 rounded-full" 
            style={{ backgroundColor: accentColor }}
          />

          <p className="text-xl md:text-3xl font-light tracking-[0.2em] text-white/80 italic uppercase">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;