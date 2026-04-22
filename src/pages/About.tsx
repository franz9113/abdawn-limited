import CraftingBrands from '@/components/about/CraftingBrands';
import ExpertHands from '@/components/about/ExpertHands';
import Future from '@/components/about/Future';
import TrustedPartner from '@/components/about/TrustedPartner';
import Visionary from '@/components/about/Visionary';

const About = () => {
  return (
    /* Change 1: Added overflow-x-hidden to the main wrapper as a master safety net */
    <div className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      
      {/* Hero Header */}
      {/* Change 2: Increased padding to accommodate the negative margin of ExpertHands/Visionary */}
      <header className="pt-40 pb-24 px-6 md:px-8 relative z-0">
        <div className="max-w-4xl mx-auto text-center">
          <span className="subheading-caps mb-4 block">
            Our Legacy
          </span>
          <h1 className="heading-luxury !text-white !font-normal">
            Our Heritage
          </h1>
          <div className="w-20 h-[1px] bg-[#c5a059] mx-auto opacity-50 mt-8" />
        </div>
      </header>

      {/* Story Sections */}
      {/* Change 3: Ensure sections that use negative margins have proper relative positioning */}
      <main>
        <Visionary />
        
        {/* If ExpertHands is the one causing the specific zoom issue, 
            ensure it's not being 'squeezed' by the Visionary section */}
        <div className="relative z-10">
          <ExpertHands />
        </div>

        <CraftingBrands />
        <TrustedPartner />
        <Future />
      </main>
    </div>
  );
};

export default About;