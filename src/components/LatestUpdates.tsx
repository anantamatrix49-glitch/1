import { latestUpdates } from "@/data/studyData";

const LatestUpdates = () => {
  const doubled = [...latestUpdates, ...latestUpdates];

  return (
    <section className="py-4 bg-accent/50 border-y border-border overflow-hidden">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {doubled.map((update, i) => (
          <span key={i} className="inline-block px-8 text-sm text-accent-foreground font-medium">
            {update}
          </span>
        ))}
      </div>
    </section>
  );
};

export default LatestUpdates;
