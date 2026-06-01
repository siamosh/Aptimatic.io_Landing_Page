import React from 'react';
import './_centered.css';

const Logo = () => (
  <svg viewBox="0 0 204 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '34px', display: 'block' }}>
    <defs>
      <linearGradient id="nlg-centered" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="55%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>
    <line x1="20" y1="2" x2="3" y2="38" stroke="url(#nlg-centered)" strokeWidth="3" strokeLinecap="round" />
    <line x1="20" y1="2" x2="37" y2="38" stroke="url(#nlg-centered)" strokeWidth="3" strokeLinecap="round" />
    <line x1="10.5" y1="22" x2="29.5" y2="22" stroke="url(#nlg-centered)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="20" cy="2" r="3.2" fill="url(#nlg-centered)" />
    <circle cx="3" cy="38" r="3.2" fill="url(#nlg-centered)" />
    <circle cx="37" cy="38" r="3.2" fill="url(#nlg-centered)" />
    <circle cx="10.5" cy="22" r="3.2" fill="url(#nlg-centered)" />
    <circle cx="29.5" cy="22" r="3.2" fill="url(#nlg-centered)" />
    <text x="52" y="30" fontFamily="Inter, -apple-system, sans-serif" fontSize="27" fontWeight="800" letterSpacing="-0.7" fill="white">
      Aptimat<tspan fill="#38BDF8" fontStyle="italic">i</tspan>c
    </text>
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference font-sans-body">
    <div className="flex items-center">
      <Logo />
    </div>
    <div className="hidden md:flex items-center gap-12 text-sm tracking-widest uppercase text-apt-light">
      <a href="#services" className="hover:text-[#00d4ff] transition-colors">Services</a>
      <a href="#how-it-works" className="hover:text-[#00d4ff] transition-colors">How It Works</a>
      <a href="mailto:support@aptimatic.io" className="hover:text-[#00d4ff] transition-colors">Contact</a>
    </div>
    <a 
      href="mailto:support@aptimatic.io" 
      className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm tracking-wider uppercase bg-white text-black hover:bg-[#00d4ff] transition-colors"
    >
      Book a Free Call
    </a>
  </nav>
);

const services = [
  {
    id: '01',
    title: 'AI Consulting',
    description: 'Readiness assessment, strategy & roadmap, tool evaluation, and team training tailored for your business.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'AI Application Development',
    description: 'Custom AI apps, intelligent chatbots, process automation, and robust data pipelines built to scale.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    id: '03',
    title: 'AI On-Demand Classes for Small Business',
    description: 'Self-paced training, practical SMB use cases, and live Q&A sessions to upskill your workforce.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    id: '04',
    title: 'Project Management & Services',
    description: 'End-to-end delivery, agile methodologies, and dedicated post-launch support to ensure success.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  }
];

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'Understanding your unique challenges and identifying AI opportunities within your workflow.' },
  { num: '02', title: 'Proposal & Plan', desc: 'Crafting a detailed strategy, timeline, and architectural approach tailored to your goals.' },
  { num: '03', title: 'Build & Deliver', desc: 'Executing the plan with agile development, transparent communication, and rigorous testing.' },
  { num: '04', title: 'Support & Grow', desc: 'Providing ongoing optimization, training, and strategic guidance post-launch.' }
];

export function CenteredEditorial() {
  return (
    <div className="min-h-screen bg-apt-dark text-apt-light selection:bg-[#6c63ff] selection:text-white font-sans-body antialiased">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-8 z-10 relative">
            <span className="inline-block text-[#00d4ff] uppercase tracking-[0.2em] text-sm font-medium">Elevating Small & Medium Businesses</span>
            <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light text-white tracking-tight">
              Intelligence,<br /> <span className="italic text-[#8888aa]">Applied.</span>
            </h1>
            <p className="text-xl md:text-2xl text-apt-muted max-w-2xl mx-auto font-light leading-relaxed">
              We bridge the gap between complex AI capabilities and practical business solutions.
            </p>
          </div>
          
          <div className="w-full mt-20 relative aspect-[21/9] overflow-hidden bg-[#11111a] border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=2400&q=80" 
              alt="Abstract digital intelligence representation" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-apt-dark to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-xs uppercase tracking-widest text-apt-muted">
              <span>Model 01 — Framework</span>
              <span>Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 md:px-12 border-t border-white/10 max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-editorial text-4xl md:text-5xl font-light">Capabilities</h2>
            <div className="w-px h-16 bg-white/20 mx-auto mt-12" />
          </div>

          <div className="space-y-0 border-y border-white/10">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className={`group flex flex-col md:flex-row md:items-center gap-8 py-12 ${idx !== services.length - 1 ? 'border-b border-white/10' : ''} hover:bg-white/[0.02] transition-colors px-6`}
              >
                <div className="flex-shrink-0 text-apt-muted font-editorial text-2xl w-16">
                  {service.id}
                </div>
                <div className="flex-shrink-0 text-[#6c63ff] opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <div className="flex-grow grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <h3 className="font-editorial text-2xl md:text-3xl text-white group-hover:text-[#00d4ff] transition-colors">{service.title}</h3>
                  <p className="text-apt-muted leading-relaxed font-light text-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32 px-6 md:px-12 max-w-4xl mx-auto relative">
          <div className="text-center mb-24">
            <h2 className="font-editorial text-4xl md:text-5xl font-light">Methodology</h2>
            <p className="mt-6 text-apt-muted text-lg font-light tracking-wide">A disciplined approach to integration.</p>
          </div>

          <div className="relative pt-12 pb-12">
            <div className="timeline-line hidden md:block" />
            
            <div className="space-y-24">
              {steps.map((step, idx) => (
                <div key={step.num} className="relative flex flex-col md:flex-row items-center justify-center group">
                  <div className={`md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:pr-16 md:text-right' : 'md:order-last md:justify-start md:pl-16 md:text-left'} text-center mb-8 md:mb-0 z-10`}>
                    <div className="max-w-sm">
                      <h3 className="font-editorial text-3xl text-white mb-4">{step.title}</h3>
                      <p className="text-apt-muted leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-apt-dark border border-white/20 flex items-center justify-center text-xl font-editorial text-white z-20 group-hover:border-[#a855f7] transition-colors shadow-[0_0_30px_rgba(168,85,247,0)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    {step.num}
                  </div>
                  
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:order-last' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-12 text-center border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6c63ff]/30 via-apt-dark to-apt-dark" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-editorial text-5xl md:text-7xl font-light text-white mb-8">Ready to evolve?</h2>
            <p className="text-xl text-apt-muted mb-12 font-light">Discuss your operational challenges and explore AI-driven solutions.</p>
            <a 
              href="mailto:support@aptimatic.io"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-apt-dark text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#a855f7] hover:text-white transition-all duration-300"
            >
              Initiate Contact
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 px-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-apt-muted uppercase tracking-widest">
        <div>&copy; {new Date().getFullYear()} Aptimatic</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
