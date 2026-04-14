import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BdmLogo } from "@/components/BdmLogo";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Services", href: "#services" },
    { name: "Global Reach", href: "#global-reach" },
    { name: "Partners & Clients", href: "#partners" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home-logo">
            <BdmLogo size={36} />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-none tracking-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                BDM Business
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-medium opacity-80 ${isScrolled ? 'text-muted-foreground' : 'text-white'}`}>
                Buabeng Degeneral Merchant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-secondary ${
                      isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
                    }`}
                    data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              asChild 
              variant={isScrolled ? "default" : "secondary"}
              className={!isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}
              data-testid="button-nav-contact"
            >
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                Get in Touch
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-foreground block w-full"
                  data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            asChild 
            className="w-full mt-4"
            data-testid="button-mobile-nav-contact"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              Get in Touch
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
