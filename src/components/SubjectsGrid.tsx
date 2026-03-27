import { Cpu, Atom, Code, Leaf, Calculator } from "lucide-react";
import { subjects, type Subject } from "@/data/studyData";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Atom, Code, Leaf, Calculator,
};

interface SubjectsGridProps {
  searchQuery: string;
  onSubjectClick: (subject: Subject) => void;
}

const SubjectsGrid = ({ searchQuery, onSubjectClick }: SubjectsGridProps) => {
  const filtered = subjects.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="subjects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Subjects</h2>
        <p className="text-center text-muted-foreground mb-10">Choose a subject to explore units, PDFs, and video lectures</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((subject, i) => {
            const Icon = iconMap[subject.icon] || Cpu;
            return (
              <button
                key={subject.id}
                onClick={() => onSubjectClick(subject)}
                className="group text-left p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `hsl(${subject.color} / 0.12)` }}
                >
                  <Icon className="w-6 h-6" style={{ color: `hsl(${subject.color})` }} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{subject.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{subject.units} Units • PDFs & Videos</p>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No subjects match your search.</p>
        )}
      </div>
    </section>
  );
};

export default SubjectsGrid;
