import partnerImg from '@/assets/trusted_partner.webp';

const TrustedPartner = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto bg-[#c5a059] rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-3/5 p-12 md:p-20 flex flex-col justify-center order-2 md:order-1">
          {/* Note: We use the utility class but override the color to black for the gold background */}
          <h2 className="heading-luxury !text-black !font-black !font-sans">
            A Trusted Partner
          </h2>
          
          <div className="space-y-6 text-black/80 text-lg font-medium leading-relaxed">
            <p>
              While we may be a new player in the industry, we are built on a foundation 
              of integrity and transparency. We understand that trust is earned, and we 
              are dedicated to forging lasting partnerships with our customers.
            </p>
            <p>
              Through open communication, ethical business practices, and a steadfast 
              commitment to our values, we aim to establish Abdawn Limited as a trusted 
              and respected brand.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-2/5 p-8 order-1 md:order-2">
          <div className="aspect-square md:h-full border-[3px] border-[#0a0a0a] overflow-hidden shadow-xl">
            <img src={partnerImg} className="w-full h-full object-cover" alt="Partnership" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;