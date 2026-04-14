import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Or any icon library you use

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorched down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-[#c5a059] text-black rounded-full shadow-2xl transition-all duration-300 z-50 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;