import { ArrowLeft, FileText, Download, Eye, Play } from "lucide-react";
import { type Subject, youtubeVideos } from "@/data/studyData";

interface SubjectDetailProps {
  subject: Subject;
  onBack: () => void;
}

const SubjectDetail = ({ subject, onBack }: SubjectDetailProps) => {
  const videos = youtubeVideos[subject.id] || [];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Subjects
        </button>

        <h2 className="font-display text-3xl font-bold text-foreground mb-2">{subject.name}</h2>
        <p className="text-muted-foreground mb-10">Browse all 5 units with PDFs and video lectures</p>

        <div className="space-y-8">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((unit) => (
            <div key={unit} className="rounded-xl border border-border bg-card p-6 animate-fade-in-up" style={{ animationDelay: `${unit * 60}ms` }}>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5">Unit {unit}</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* PDF Card */}
                <div className="rounded-lg border border-border bg-muted/30 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground text-sm">Study Material (PDF)</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    {subject.name} — Unit {unit} notes and reference material
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`/pdfs/${subject.id}/unit${unit}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-hero text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Eye className="w-3.5 h-3.5" /> View PDF
                    </a>
                    <a
                      href={`/pdfs/${subject.id}/unit${unit}.pdf`}
                      download
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-card text-foreground text-xs font-semibold hover:bg-muted transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
                  </div>
                </div>

                {/* Video Card */}
                <div className="rounded-lg border border-border bg-muted/30 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Play className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-foreground text-sm">Video Lecture</span>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-foreground/5">
                    <iframe
                      src={videos[unit - 1] || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                      title={`${subject.name} Unit ${unit}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectDetail;
