import { useParams } from 'react-router-dom';
import { spirits } from '@/data/spirits';
import ProductHero from '@/components/products/ProductHero';
import TastingNotes from '@/components/products/TastingNotes';
import DiscoverMore from '@/components/products/DiscoverMore';
import ProductHeritage from '@/components/products/ProductHeritage';

const ProductDetail = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const spirit = spirits.find((s) => s.slug === productSlug);

  if (!spirit) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <h1 className="font-serif text-2xl tracking-widest">Spirit Not Found</h1>
      </div>
    );
  }

  const getAccentColor = (slug: string) => {
    switch (slug) {
      case 'lim-vodka': return '#a5f3fc';   // Icy Blue
      case 'loyal-bandit': return '#f59e0b'; // Amber/Fire
      case 'ben-cocky': return '#c5a059';   
      default: return '#c5a059';
    }
  };

  const accentColor = getAccentColor(spirit.slug);

  return (
    <div className="bg-black min-h-screen">      
      <ProductHero 
        name={spirit.name}
        tagline={spirit.tagline}
        heroImage={spirit.heroImage}
        image={spirit.image}
        accentColor={accentColor}
      />
      <ProductHeritage data={spirit.heritage} accentColor={spirit.accent} />

      <TastingNotes 
        notes={spirit.tastingNotes} 
        accentColor={accentColor} 
      />
      
      <DiscoverMore 
        currentSlug={spirit.slug}
        accentColor={accentColor} 
      />
    </div>
  );
};

export default ProductDetail;