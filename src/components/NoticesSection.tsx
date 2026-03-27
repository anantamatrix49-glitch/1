import { Bell, ImageOff, X } from "lucide-react";
import React, { useState } from "react";
import { notices } from "@/data/studyData";

const NoticesSection = () => {
  const [showLogo, setShowLogo] = useState(false);

  const handleImageClick = (e: React.MouseEvent, image: string) => {
    e.preventDefault();
    setShowLogo(true);
    window.open(image, "_blank");
  };

  return (
    <section id="notices" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="font-display text-3xl font-bold text-foreground">Notices</h2>
        </div>
        <p className="text-center text-muted-foreground mb-10">Important announcements and updates</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <a
                href={notice.image}
                onClick={(e) => handleImageClick(e, notice.image)}
                className="block w-full"
                aria-label={`Open ${notice.title} image`}
              >
                <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={notice.image}
                    alt={notice.title}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className = "flex flex-col items-center justify-center h-full text-muted-foreground";
                        fallback.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/></svg><span class=\"text-xs mt-2\">Notice Image</span>`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </a>

                {/* AK logo shown on left when image clicked */}
                {showLogo && (
                  <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 pointer-events-auto">
                    <div className="relative">
                      <img src="/ak-logo.svg" alt="AK logo" className="w-16 h-16 rounded-lg shadow-lg" />
                      <button
                        aria-label="Close AK logo"
                        onClick={() => setShowLogo(false)}
                        className="absolute -top-2 -right-2 bg-card rounded-full p-1 shadow-md"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{notice.date}</p>
                <h3 className="font-semibold text-foreground text-sm leading-snug">{notice.title}</h3>
                {notice.link && (
                  <a
                    href={notice.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-medium text-primary hover:underline"
                  >
                    Register here →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
