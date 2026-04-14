import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light tracking-wide">
          Welcome to <span className="text-white font-medium">Abdawn Limited</span>. 
          We are a new force in the world of premium spirits, driven by a passion 
          for craftsmanship and a commitment to delivering exceptional experiences. 
          Although we are a startup, our ambition is to establish ourselves as a 
          trusted and respected brand, renowned for our unwavering dedication to 
          quality and innovation.
        </p>
        
        <div className="pt-4">
          <Link 
            to="/about" 
            className="text-[#c5a059] text-[11px] font-bold tracking-[0.3em] uppercase border-b border-[#c5a059]/30 pb-2 hover:border-[#c5a059] transition-all"
          >
            More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission;