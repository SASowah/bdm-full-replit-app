import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Globe, HeartPulse, ShieldCheck, Ship, Target, Users, MapPin, Truck, ChevronRight, CheckCircle2, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { BdmLogo } from "@/components/BdmLogo";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:info@bdmghana.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

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

      {/* CONTACT / MISSION */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-port.png')] opacity-5 bg-cover bg-center bg-fixed"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14 reveal">
              <BdmLogo size={56} className="mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Reach out with any questions, enquiries, or partnership opportunities — our team responds promptly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* Mission statement */}
              <div className="reveal">
                <div className="bg-muted p-8 rounded-3xl border border-border relative mb-8">
                  <div className="absolute top-0 left-8 -translate-y-1/2 bg-background px-3 text-xs font-bold tracking-widest text-secondary uppercase">
                    Our Mission
                  </div>
                  <p className="text-lg text-foreground font-serif italic leading-relaxed">
                    "To make life easy for the general public by offering customised services that meet their criteria and budget, while serving as the most reliable middlemen for every aspect of business in Africa."
                  </p>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "General merchandise & import/export",
                    "Global sourcing from Korea, China, USA & Canada",
                    "Consulting, logistics & business travel support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact form */}
              <div className="reveal">
                {submitted ? (
                  <div className="bg-muted rounded-3xl border border-border p-10 text-center flex flex-col items-center gap-4">
                    <CheckCircle2 className="w-14 h-14 text-secondary" />
                    <h3 className="text-2xl font-serif font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Your email client has opened with your message pre-filled. We look forward to connecting with you.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setForm({ name: "", email: "", message: "" });
                        setSubmitted(false);
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-muted rounded-3xl border border-border p-8 space-y-5"
                    data-testid="contact-form"
                  >
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Kwame Mensah"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                        data-testid="input-name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                        data-testid="input-email"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-1.5">
                        Your Message / Enquiry
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Tell us about your needs, products you're looking to source, or any questions…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition resize-none"
                        data-testid="input-message"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2" data-testid="button-cta-contact">
                      <Send className="w-4 h-4" />
                      Contact BDM Today
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Your message will open in your email client, pre-addressed to{" "}
                      <span className="text-secondary">info@bdmghana.com</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <BdmLogo size={36} />
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
