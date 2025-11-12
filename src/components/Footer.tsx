import { Code2, Mail, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Levels", href: "#levels" },
    { name: "Workshops", href: "#workshops" },
    { name: "Team", href: "#team" },
    { name: "Join Us", href: "#join" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary drop-shadow-lg" />
              <span className="font-heading font-bold text-xl dot-background-heading">
                Coder's Club
              </span>
            </div>
            <p className="dot-background-text text-sm leading-relaxed">
              Promoting coding culture at the Department of Information Science
              & Engineering. Building a community of passionate learners and
              innovators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 dot-background-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="dot-background-text hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 dot-background-heading">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:codersclub@university.edu"
                className="p-3 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-lg transition-all hover:backdrop-blur-md"
              >
                <Mail className="h-5 w-5 text-white drop-shadow-lg" />
              </a>
              <a
                href="#"
                className="p-3 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-lg transition-all hover:backdrop-blur-md"
              >
                <Linkedin className="h-5 w-5 text-white drop-shadow-lg" />
              </a>
              <a
                href="#"
                className="p-3 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-lg transition-all hover:backdrop-blur-md"
              >
                <Instagram className="h-5 w-5 text-white drop-shadow-lg" />
              </a>
            </div>
            <p className="dot-background-text text-sm">
              Email:{" "}
              <a
                href="mailto:codersclub@university.edu"
                className="hover:text-primary transition-colors"
              >
                codersclub@university.edu
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="dot-background-text text-sm">
            © 2025 Coder's Club. All rights reserved.
          </p>
          <p className="dot-background-text text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-primary drop-shadow-lg" /> by the
            Coder's Club Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
