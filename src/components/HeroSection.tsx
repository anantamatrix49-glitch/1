import { Search } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigate: (section: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange, onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero opacity-[0.03]" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase mb-6">
          Semester 2 • 2026
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Semester 2<br />
          <span className="text-gradient">Study Hub</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your one-stop destination for notes, video lectures, and study materials. 
          Everything you need to ace your exams.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search subjects, units, or PDFs..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-card text-foreground shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onNavigate("subjects")}
            className="px-6 py-2.5 rounded-lg bg-hero text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Browse Subjects
          </button>
          <button
            onClick={() => onNavigate("notices")}
            className="px-6 py-2.5 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted transition-colors"
          >
            View Notices
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
