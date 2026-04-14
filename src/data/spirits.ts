import banditImg from '@/assets/loyalbandit.webp';
import vodkaImg from '@/assets/limvodka.webp';
import cockyImg from '@/assets/bencocky.webp';

import bencockyBanner from '@/assets/ben-cocky-banner.webp';
import limvodkaBanner from '@/assets/lim-vodka-banner.webp';
import loyalbanditBanner from '@/assets/loyal-bandit-banner.webp';

import loyalbanditTasting1 from '@/assets/loyal-bandit-tasting-1.webp';
import loyalbanditTasting2 from '@/assets/loyal-bandit-tasting-2.webp';
import loyalbanditTasting3 from '@/assets/loyal-bandit-tasting-3.webp';

import limvodkaTasting1 from '@/assets/lim-vodka-tasting-1.png';
import limvodkaTasting2 from '@/assets/lim-vodka-tasting-2.png';
import limvodkaTasting3 from '@/assets/lim-vodka-tasting-3.png';

import bencockyTasting1 from '@/assets/ben-cocky-tasting-1.webp';
import bencockyTasting2 from '@/assets/ben-cocky-tasting-2.webp';
import bencockyTasting3 from '@/assets/ben-cocky-tasting-3.webp';

import limvodkaHeritage from '@/assets/lim-vodka-heritage.webp';
import loyalbanditHeritage from '@/assets/loyal-bandit-heritage.webp';
import bencockyHeritage from '@/assets/ben-cocky-heritage.webp';

export const spirits = [
  {
    id: 'loyal-bandit',
    name: 'Loyal Bandit',
    slug: "loyal-bandit",
    tagline: "The whiskey of the thug gentlemen!",
    heroImage: loyalbanditBanner,
    image: banditImg,
    origin: 'France (Charente)',
    type: 'Single Malt Whisky',
    description: 'A rebellious take on French tradition, offering a rich profile aged in the heart of Charente.',
    accent: '#00AEEF', // Loyal Bandit Blue
    tastingNotes: [
    {
      title: "The Aroma",
      description: "Fine and structured with cereal notes, sweet vanilla, and woody spices.",
      image: loyalbanditTasting1
    },
    {
      title: "The Palate",
      description: "Clean and frank with fruity, woody, and blond tobacco notes.",
      image: loyalbanditTasting2
    },
    {
      title: "The Finish",
      description: "A velvety finish that gives it a beautiful, lasting harmony.",
      image: loyalbanditTasting3
    }
  ],heritage: {
    title: "The French Impertinence",
    description: "Loyal Bandit is a hymn to rebellion. Crafted in the heart of Charente, this Single Malt defies the classic codes of whisky by blending French 'flair' with an audacious, bold character.",
    image: loyalbanditHeritage,
    specs: [
      { label: "Distilled", value: "Copper Pot Stills" },
      { label: "Cask Type", value: "French Oak" },
      { label: "Spirit", value: "Single Malt" }
    ]
  }
  },
  {
    id: 'lim-vodka',
    name: 'Lim Vodka',
    slug: "lim-vodka",
    tagline: "Less Is More.",
    heroImage: limvodkaBanner,
    image: vodkaImg,
    origin: 'France',
    type: 'Premium Vodka',
    description: 'The pinnacle of purity. A minimalist, ultra-modern vodka designed for the sophisticated palate.',
    accent: '#A5F3FC', // Icy Cyan
    tastingNotes: [
    {
      title: "Fine & Delicate",
      description: "A refined and subtle nose that emphasizes the absolute purity of the spirit.",
      image: limvodkaTasting1
    },
    {
      title: "Mellow Warmth",
      description: "An exceptionally smooth character that offers a gentle, sophisticated warmth.",
      image: limvodkaTasting2
    },
    {
      title: "Rounded Finesse",
      description: "A brilliant and shimmering finish that leaves a clean, lasting impression.",
      image: limvodkaTasting3
    }
  ],heritage: {
    title: "The Art of Purity",
    description: "Distilled in Cognac from 100% French winter wheat, our vodka is the result of a meticulous five-step column distillation process.",
    image: limvodkaHeritage, 
    specs: [
      { label: "Base", value: "French Winter Wheat" },
      { label: "Process", value: "5x Distilled" },
      { label: "Water", value: "Gensac Springs" }
    ]
  }
  },
  {
    id: 'ben-cocky',
    name: 'Ben Cocky',
    slug: "ben-cocky",
    tagline: "The Whiskey that brings people together!",
    heroImage: bencockyBanner,
    image: cockyImg,
    origin: 'Scotland / Bottled in France',
    type: 'Blended Scotch',
    description: 'High energy meets classic heritage. A bold Scotch that stands out with its industrial aesthetic.',
    accent: '#FFD700' ,// Ben Cocky Yellow
    tastingNotes: [
    {
      title: "Tropical Punch",
      description: "Vibrant fruity aromas of ripe banana complemented by refreshing citrus notes.",
      image: bencockyTasting1
    },
    {
      title: "The Kick",
      description: "A bold and slightly spicy palate that brings a lively energy to every sip.",
      image: bencockyTasting2
    },
    {
      title: "Velvety Smooth",
      description: "A signature velvety finish that lingers perfectly, letting the good times flow.",
      image: bencockyTasting3
    }
  ],heritage: {
    title: "The Spirit of Celebration",
    description: "Inspired by the high-energy festivities of the 90s, Ben Cocky is designed for the crowd. It is a robust Blended Scotch that balances heritage with an industrial, modern edge.",
    image: bencockyHeritage,
    specs: [
      { label: "Style", value: "Blended Scotch" },
      { label: "Vibe", value: "90s Industrial" },
      { label: "Best Served", value: "With a Crew" }
    ]
  }
  }
];