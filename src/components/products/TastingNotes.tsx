interface Note {
  title: string;
  description: string;
  image: string;
}

interface TastingNotesProps {
  notes: Note[];
  accentColor: string;
}

const TastingNotes = ({ notes, accentColor }: TastingNotesProps) => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-20 uppercase tracking-[0.4em]">
          Tasting Notes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {notes.map((note, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Circular Image Frame */}
              <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border border-white/10 group-hover:border-opacity-50 transition-all duration-700">
                <img 
                  src={note.image} 
                  alt={note.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: accentColor }}
                />
              </div>

              <h3 className="text-lg font-serif uppercase tracking-widest mb-4" style={{ color: accentColor }}>
                {note.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60 max-w-[250px]">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TastingNotes;