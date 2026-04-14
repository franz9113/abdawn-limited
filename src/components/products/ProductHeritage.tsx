interface HeritageProps {
  data: {
    title: string;
    description: string;
    image: string;
    specs: { label: string; value: string }[];
  };
  accentColor: string;
}

const ProductHeritage = ({ data, accentColor }: HeritageProps) => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Column */}
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            {data.title}
          </h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl">
            {data.description}
          </p>
          
          {/* Technical Grid */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            {data.specs.map((spec, index) => (
              <div key={index}>
                <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: accentColor }}>
                  {spec.label}
                </p>
                <p className="text-xl font-light">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 lg:order-2 h-[500px] overflow-hidden rounded-sm">
          <img 
            src={data.image} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            alt="Heritage" 
          />
        </div>

      </div>
    </section>
  );
};

export default ProductHeritage;