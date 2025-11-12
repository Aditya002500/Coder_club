import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotchNav } from "./notch-nav";

const NotchNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = [
        "home", "about", "levels", "workshops", "gallery", 
        "projects", "resources", "team", "join", "contact"
      ];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { value: "home", label: "Home", href: "#home" },
    { value: "about", label: "About", href: "#about" },
    { value: "levels", label: "Levels", href: "#levels" },
    { value: "workshops", label: "Workshops", href: "#workshops" },
    { value: "gallery", label: "Gallery", href: "#gallery" },
    { value: "projects", label: "Projects", href: "#projects" },
    { value: "resources", label: "Resources", href: "#resources" },
    { value: "team", label: "Team", href: "#team" },
    { value: "join", label: "Join Us", href: "#join" },
    { value: "contact", label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavChange = (value: string) => {
    const item = navItems.find(item => item.value === value);
    if (item?.href) {
      scrollToSection(item.href);
    }
    setActiveSection(value);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Unified container with single rounded background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div
          className={`
            w-full h-16 sm:h-18 lg:h-20 rounded-2xl
            ${isScrolled
              ? "backdrop-blur-xl bg-black/40 border border-white/15"
              : "backdrop-blur-md bg-black/20"
            }
            transition-all duration-500 ease-out
            shadow-lg shadow-black/25
          `}
          style={{
            background: isScrolled
              ? "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))"
              : "linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))",
            boxShadow: isScrolled
              ? "0 4px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              : "0 2px 16px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div className="flex items-center justify-between h-full px-6">
            
            {/* Left side - Clean Logo */}
            <div className="flex items-center space-x-2 min-w-0 flex-shrink-0">
              <Code2 className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary drop-shadow-lg" />
              <span className="font-heading font-bold text-base sm:text-lg lg:text-xl text-white">
                Coder's Club
              </span>
            </div>

            {/* Center - Clean Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
              <div className="flex items-center space-x-1">
                {navItems.filter(item => item.value !== 'join').map((link) => (
                  <button
                    key={link.value}
                    onClick={() => scrollToSection(link.href)}
                    className={`
                      text-sm font-medium transition-all duration-200
                      px-4 py-2 rounded-xl
                      ${activeSection === link.value
                        ? "text-white bg-white/20 shadow-lg"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Single Join Us Button and Mobile Menu */}
            <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
              {/* Single Join Us Button */}
              <Button
                variant="default"
                size="sm"
                onClick={() => scrollToSection("#join")}
                className="
                  bg-gradient-to-r from-primary to-primary/80
                  hover:from-primary/90 hover:to-primary/70
                  text-white font-medium px-4 py-2
                  text-sm rounded-xl
                  shadow-lg shadow-primary/25 border border-primary/30
                  transition-all duration-300 hover:scale-105
                  hidden sm:flex
                "
              >
                Join Us
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="
                  lg:hidden p-3 rounded-xl
                  bg-white/10 border border-white/20
                  hover:bg-white/20 transition-all duration-300
                  shadow-lg
                "
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 z-40 mt-2">
          <div
            className="
              backdrop-blur-xl bg-black/40 border border-white/15
              rounded-2xl shadow-2xl
            "
            style={{
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
            }}
          >
            <div className="px-6 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((link) => (
                  <button
                    key={link.value}
                    onClick={() => scrollToSection(link.href)}
                    className={`
                      font-medium text-left px-4 py-3 rounded-xl
                      transition-all duration-200
                      text-sm
                      ${activeSection === link.value
                        ? "text-white bg-white/20 shadow-lg"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NotchNavbar;