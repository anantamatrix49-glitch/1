import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LatestUpdates from "@/components/LatestUpdates";
import SubjectsGrid from "@/components/SubjectsGrid";
import SubjectDetail from "@/components/SubjectDetail";
import NoticesSection from "@/components/NoticesSection";
import Footer from "@/components/Footer";
import { type Subject } from "@/data/studyData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigate = (section: string) => {
    setSelectedSubject(null);
    setActiveSection(section);
    if (section !== "home") {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {selectedSubject ? (
        <SubjectDetail subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
      ) : (
        <>
          <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} onNavigate={handleNavigate} />
          <LatestUpdates />
          <SubjectsGrid searchQuery={searchQuery} onSubjectClick={handleSubjectClick} />
          <NoticesSection />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Index;
