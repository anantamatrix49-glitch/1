import { useState } from "react";
import { Menu, X, LogOut, Home, BookOpen, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "subjects", label: "Subjects", icon: BookOpen },
  { id: "notices", label: "Notices", icon: Bell },
];

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const displayName = user?.user_metadata?.full_name ?? user?.email ?? "User";

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully.");
    setMobileOpen(false);
    navigate("/auth");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav("home")} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center">
              <img src="/ak-logo.svg" alt="AK logo" className="w-7 h-7 block" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">StudyHub</span>
          </button>

          {/* Desktop nav links + user info on the right */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
            <div className="w-px h-5 bg-border mx-1" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-muted transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="flex items-center gap-2 w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
            <div className="pt-2 border-t border-border">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-muted transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
