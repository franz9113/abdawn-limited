import CraftingBrands from '@/components/about/CraftingBrands';
import ExpertHands from '@/components/about/ExpertHands';
import Future from '@/components/about/Future';
import TrustedPartner from '@/components/about/TrustedPartner';
import Visionary from '@/components/about/Visionary';
// We will import more sections here as we build them

const About = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Header for About Page */}
      <div className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] mb-4 block">
            Our Legacy
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Our Heritage
          </h1>
          <div className="w-20 h-[1px] bg-[#c5a059] mx-auto opacity-50" />
        </div>
      </div>

      {/* Story Sections */}
      <Visionary />
      <ExpertHands />
      <CraftingBrands />
      <TrustedPartner />
      <Future />
    </div>
  );
};

export default About;