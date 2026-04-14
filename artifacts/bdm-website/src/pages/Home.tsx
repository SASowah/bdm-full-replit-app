import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, ArrowRight, Building2, Globe, HeartPulse, ShieldCheck, Ship, Target, Users, MapPin, Truck, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8", "opacity-100");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("opacity-0", "duration-700", "fill-mode-forwards");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />
          <img 
            src="/hero-port.png" 
            alt="Global shipping port at sunrise" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container relative z-30 mx-auto px-4 md:px-8">
          <div className="max-w-4xl reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-foreground backdrop-blur-sm mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">EST. 2019 • AFRICA & GLOBALLY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Reliable Procurement & Logistics for Africa's Future.
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
              We serve as the most trusted middlemen for every aspect of business in Africa. From direct importation to specialized medical procurement and business facilitation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild data-testid="button-hero-contact">
                <a href="#contact">
                  Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 text-white border-white/20 hover:bg-white/20" asChild data-testid="button-hero-services">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Company Overview</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                End-to-End General Merchandising & Consulting.
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Established in 2019, Buabeng Degeneral Merchant (BDM) has rapidly grown into a dynamic force across Africa. We specialize in import, export, and comprehensive consulting services designed to bridge global markets with local needs.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our expertise spans across end-to-end procurement, business facilitation, and tailored logistics solutions. We don't just move goods—we architect supply chains that power governments, hospitals, and private enterprises.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">Global</div>
                  <div className="text-sm text-muted-foreground font-medium">Sourcing Network</div>
                </div>
              </div>
            </div>
            <div className="relative reveal delay-200">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden rounded-tr-[100px] border border-border shadow-2xl relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                <img 
                  src="/global-network.png" 
                  alt="Global logistics network" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
                <ShieldCheck className="w-10 h-10 text-secondary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Trusted Middlemen</h4>
                <p className="text-sm text-muted-foreground">Operating with complete integrity for seamless delivery across all sectors of life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Core Services</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Customized Solutions for Complex Needs
            </h3>
            <p className="text-lg text-muted-foreground">
              We make life easy by offering services that meet your specific criteria and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow reveal group overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src="/medical-supplies.png" alt="Medical supplies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <CardContent className="p-8">
                <HeartPulse className="w-10 h-10 text-secondary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-3">Procurement for Health</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Reliable sourcing and supply of medical equipment, supplies, and essentials for government hospitals, clinics, and private healthcare providers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow reveal delay-100">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <Ship className="w-10 h-10 text-secondary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-3">Import & Export</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Direct importation of goods from South Korea, China, the United States, Canada, and beyond, tailored exactly to client specifications and timelines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow reveal">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <Building2 className="w-10 h-10 text-secondary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-3">Consulting & Facilitation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Expert advisory services in procurement, logistics, and business facilitation. We guide enterprises through the complexities of doing business in Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow reveal delay-100 bg-primary text-primary-foreground">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <Target className="w-10 h-10 text-secondary mb-4" />
                <h4 className="text-xl font-bold text-primary-foreground mb-3">Customized Solutions</h4>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Every project is unique. Our services are dynamically designed to meet each client's specific criteria and budget constraints without compromising on quality.
                </p>
                <Button variant="secondary" className="w-fit" asChild data-testid="button-service-custom">
                  <a href="#contact">Discuss Your Needs</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section id="global-reach" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 reveal">
              <div className="space-y-4">
                <div className="bg-muted p-6 rounded-2xl border border-border">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">South Korea</h4>
                  <p className="text-sm text-muted-foreground">Direct Import Channels</p>
                </div>
                <div className="bg-muted p-6 rounded-2xl border border-border">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">China</h4>
                  <p className="text-sm text-muted-foreground">Manufacturing & Supply</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-muted p-6 rounded-2xl border border-border">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">United States</h4>
                  <p className="text-sm text-muted-foreground">Technology & Equipment</p>
                </div>
                <div className="bg-muted p-6 rounded-2xl border border-border">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Canada</h4>
                  <p className="text-sm text-muted-foreground">Specialized Procurement</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal delay-200">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Global Network</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Global Reach, Local Connections.
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                We bridge the gap between international markets and the African continent. By importing directly from key global hubs, we bypass unnecessary intermediaries to deliver value directly to our clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Within Africa, our deep-rooted connections and local expertise allow us to operate seamlessly. Whether navigating customs, managing inland logistics, or facilitating government contracts, BDM ensures smooth delivery everywhere.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Truck className="w-4 h-4" />
                  </div>
                  Seamless Inland Logistics
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Globe className="w-4 h-4" />
                  </div>
                  Direct Factory Relationships
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  Regulatory & Customs Expertise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS & CLIENTS */}
      <section id="partners" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Who We Work With</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">Trusted Partners &amp; Clients</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Key Clients */}
            <div className="reveal">
              <h4 className="text-xs font-bold tracking-widest text-secondary/80 uppercase mb-5 flex items-center gap-2">
                <Users className="w-4 h-4" /> Key Clients
              </h4>
              <div className="space-y-3">
                {[
                  "Ga Central Municipal Directorate",
                  "Tabora Health Center",
                  "Anyaa Polyclinic",
                  "Ablekuma Health Centre",
                  "Presbyterian Excellence School"
                ].map((client, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 px-5 py-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm font-bold">
                      {i + 1}
                    </div>
                    <span className="font-medium leading-snug">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Partnerships */}
            <div className="reveal delay-200">
              <h4 className="text-xs font-bold tracking-widest text-secondary/80 uppercase mb-5 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Strategic Partnerships
              </h4>
              <div className="space-y-4">
                <div className="bg-white/5 px-5 py-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-base mb-1">Dope Auto Dealership</h5>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">
                        Automotive solutions, fleet procurement, and specialized vehicle sourcing across the continent.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 px-5 py-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-base mb-1">Think Places Travel Services</h5>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">
                        Travel and logistics support ensuring seamless movement of personnel and expedited business travel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / MISSION */}
      <section id="contact" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-port.png')] opacity-5 bg-cover bg-center bg-fixed"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <Anchor className="w-12 h-12 text-secondary mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
              Ready to streamline your procurement and logistics?
            </h2>
            <div className="bg-muted p-8 md:p-12 rounded-3xl border border-border mb-10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm font-bold tracking-widest text-secondary uppercase">Our Mission</div>
              <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed">
                "To make life easy for the general public by offering customized services that meet their criteria and budget, while serving as the most reliable middlemen for every aspect of business in Africa."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-10 text-base" asChild data-testid="button-cta-contact">
                <a href="mailto:info@bdmghana.com">Contact BDM Today</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 text-base" asChild data-testid="button-cta-services">
                <a href="#services">Learn More About Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Anchor className="w-6 h-6 text-secondary" />
              <div>
                <span className="font-serif font-bold text-xl leading-none tracking-tight text-white block">BDM</span>
                <span className="text-[10px] uppercase tracking-wider font-medium text-white/60">Buabeng Degeneral Merchant</span>
              </div>
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Buabeng Degeneral Merchant. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
