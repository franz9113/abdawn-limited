const Contact = () => {
  return (
    <div className="min-h-screen pt-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-serif mb-8">Get In Touch</h1>
        <p className="text-gray-400 mb-12">For inquiries and private collections.</p>
        <form className="max-w-md mx-auto space-y-6">
          <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition" />
          <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition" />
          <button className="w-full py-4 border border-white/20 uppercase tracking-widest hover:bg-white hover:text-black transition">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;