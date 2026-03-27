import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border bg-card">
    <div className="max-w-6xl mx-auto">
      <p className="mx-auto text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
        Made with <Heart className="w-3 h-3 text-destructive fill-destructive" /> by ANAND • © 2026
      </p>
    </div>
  </footer>
);

export default Footer;
