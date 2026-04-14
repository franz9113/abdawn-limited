export interface TastingNote {
  title: string;
  description: string;
  image: string;
}

export interface Heritage {
  title: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface Spirit {
  id: string;
  name: string;
  slug: string;           
  tagline: string;        
  type: string;
  description: string;
  image: string;          
  heroImage: string;      
  accent: string;
  origin: string;
  tastingNotes: TastingNote[]; 
  heritage: Heritage;          
}