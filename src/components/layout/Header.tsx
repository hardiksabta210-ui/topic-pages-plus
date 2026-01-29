import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">EcoBuddy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/topic/forests"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Forests
          </Link>
          <Link
            to="/topic/oceans"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Oceans
          </Link>
          <Link
            to="/topic/renewable-energy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Energy
          </Link>
          <Link
            to="/topic/wildlife"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Wildlife
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Learn More
          </Button>
          <Button size="sm">Get Involved</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-up">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              to="/topic/forests"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Forests
            </Link>
            <Link
              to="/topic/oceans"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Oceans
            </Link>
            <Link
              to="/topic/renewable-energy"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Energy
            </Link>
            <Link
              to="/topic/wildlife"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Wildlife
            </Link>
            <div className="flex gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="flex-1">
                Learn More
              </Button>
              <Button size="sm" className="flex-1">
                Get Involved
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
