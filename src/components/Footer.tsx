import logoImg from '@/assets/logo.svg';
const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-[#c5a059]/20 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Logo & Intro */}
          <div className="space-y-6">
             <img 
            src={logoImg} 
            alt="Abdawn Limited" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
            {/* <h3 className="text-2xl font-black tracking-[0.3em] text-white">
              ABDAWN<span className="text-[#c5a059]">LIMITED</span>
            </h3> */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Welcome to Abdawn Limited. We are a new force in the world of premium spirits, driven by a passion for craftsmanship and a commitment to delivering exceptional experiences.
            </p>
          </div>

          {/* Newsletter - Use Gold as an accent line */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Stay Connected</h4>
            <div className="relative group max-w-sm">
              <input 
                type="email" 
                placeholder="Your mail" 
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#c5a059] transition-colors"
              />
              <button className="absolute right-0 bottom-3 text-[10px] font-bold tracking-widest hover:text-[#c5a059] transition-colors">
                SUBMIT →
              </button>
            </div>
          </div>

          {/* Socials */}
          <div className="md:text-right space-y-6">
            <h4 className="font-serif italic text-2xl text-white">Follow us</h4>
            <div className="flex md:justify-end gap-8 text-[11px] font-bold tracking-[0.2em] text-gray-400">
              <a href="#" className="hover:text-[#c5a059] transition-colors">FACEBOOK</a>
              <a href="#" className="hover:text-[#c5a059] transition-colors">INSTAGRAM</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] text-gray-600 tracking-[0.4em] uppercase">
            © ABDAWNLIMITED 2024 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;