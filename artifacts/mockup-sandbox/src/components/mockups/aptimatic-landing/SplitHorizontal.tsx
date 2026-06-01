import React from 'react';
import { ArrowRight, CheckCircle2, Cpu, LineChart, Code2, Users, ChevronRight } from 'lucide-react';
import './_split.css';

export function SplitHorizontal() {
  return (
    <div className="split-theme min-h-screen selection:bg-[#a855f7] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#8888aa]/10 bg-[#060610]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <svg viewBox="0 0 204 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: "34px", display: "block" }}>
              <defs><linearGradient id="nlg2" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#60A5FA"/><stop offset="55%" stopColor="#2563EB"/><stop offset="100%" stopColor="#1E3A8A"/></linearGradient></defs>
              <line x1="5" y1="37" x2="16" y2="4" stroke="url(#nlg2)" strokeWidth="3" strokeLinecap="round"/>
              <line x1="23" y1="8" x2="37" y2="37" stroke="url(#nlg2)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="5" cy="37" r="3.2" fill="url(#nlg2)"/>
              <circle cx="16" cy="4" r="3.2" fill="url(#nlg2)"/>
              <circle cx="23" cy="8" r="3.2" fill="url(#nlg2)"/>
              <circle cx="37" cy="37" r="3.2" fill="url(#nlg2)"/>
              <text x="52" y="30" fontFamily="Inter,-apple-system,sans-serif" fontSize="27" fontWeight="800" letterSpacing="-0.7" fill="white">Aptimat<tspan fill="#38BDF8" fontStyle="italic">i</tspan>c</text>
            </svg>
          </a>
          
          <div className="hidden md:flex items-center gap-8 font-mono-accent text-sm tracking-wide text-[#8888aa]">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">How It Works</a>
            <a href="mailto:support@aptimatic.io" className="hover:text-[#00d4ff] transition-colors">Contact</a>
          </div>

          <a 
            href="mailto:support@aptimatic.io" 
            className="hidden md:inline-flex items-center gap-2 bg-white text-[#060610] px-6 py-2.5 rounded-full font-bold hover:bg-[#00d4ff] transition-all duration-300 hover:scale-105"
          >
            Book Free Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-0 lg:pb-0 lg:min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text */}
          <div className="lg:w-1/2 z-10 flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[#a855f7] font-mono-accent uppercase tracking-widest text-[19px]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></span>
              AI Solutions for SMBs
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Scale Your <br />
              Business With <br />
              <span className="text-gradient">Applied AI.</span>
            </h1>
            
            <p className="text-xl text-[#8888aa] max-w-lg leading-relaxed font-light">
              We turn complex AI technology into practical, revenue-driving solutions for small and medium businesses. No jargon, just results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="mailto:support@aptimatic.io" 
                className="w-full sm:w-auto text-center bg-gradient-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(0,212,255,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                Book a Free Call
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-bold text-lg text-white border border-[#8888aa]/30 hover:border-[#6c63ff] hover:bg-[#6c63ff]/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6c63ff]/20 to-[#00d4ff]/20 blur-3xl -z-10 rounded-full"></div>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-[#8888aa]/20 glow-shadow">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" 
                alt="AI Neural Network Visualization" 
                className="w-full h-full object-cover mix-blend-screen opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060610] via-transparent to-transparent"></div>
              
              {/* Floating tech element */}
              <div className="absolute bottom-8 left-8 right-8 border-gradient bg-[#060610]/80 backdrop-blur-xl p-6 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#8888aa] font-mono-accent mb-1">System Status</div>
                  <div className="text-white font-bold flex items-center gap-2">
                    <CheckCircle2 className="text-[#00d4ff] w-5 h-5" /> Optimized for Growth
                  </div>
                </div>
                <Cpu className="text-[#a855f7] w-8 h-8 opacity-50" />
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-32 relative border-t border-[#8888aa]/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-24 md:w-1/2">
            <h2 className="font-mono-accent text-[#6c63ff] mb-4 tracking-widest">OUR EXPERTISE</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Four ways we put <span className="text-gradient">AI to work for you.</span></h3>
          </div>

          <div className="flex flex-col gap-0">
            {/* Service 1 */}
            <div className="group grid md:grid-cols-2 gap-12 items-center py-20 border-b border-[#8888aa]/10">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden aspect-video border border-[#8888aa]/20 group-hover:border-[#6c63ff]/50 transition-colors duration-500">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" alt="Consulting" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="order-1 md:order-2 flex flex-col gap-6 md:pl-12">
                <div className="w-16 h-16 rounded-2xl bg-[#6c63ff]/10 flex items-center justify-center border border-[#6c63ff]/30 text-[#6c63ff]">
                  <LineChart className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-bold">AI Consulting</h4>
                <p className="text-[#8888aa] text-lg leading-relaxed">
                  Not sure where AI fits? We map your operations, find the highest-impact opportunities, and hand you a clear roadmap — no guesswork, no jargon.
                </p>
                <ul className="space-y-3 mt-2">
                  {['Readiness assessment', 'Strategy & roadmap', 'Tool evaluation', 'Team training'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#f0f0ff]"><CheckCircle2 className="w-5 h-5 text-[#00d4ff]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group grid md:grid-cols-2 gap-12 items-center py-20 border-b border-[#8888aa]/10">
              <div className="flex flex-col gap-6 md:pr-12">
                <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center border border-[#00d4ff]/30 text-[#00d4ff]">
                  <Code2 className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-bold">AI App Development</h4>
                <p className="text-[#8888aa] text-lg leading-relaxed">
                  We build custom AI tools that plug into how you already work — from intelligent customer chatbots to fully automated back-office pipelines.
                </p>
                <ul className="space-y-3 mt-2">
                  {['Custom AI applications', 'Intelligent chatbots', 'Workflow automation', 'Data pipelines'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#f0f0ff]"><CheckCircle2 className="w-5 h-5 text-[#6c63ff]" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-[#8888aa]/20 group-hover:border-[#00d4ff]/50 transition-colors duration-500">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" alt="Development" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="group grid md:grid-cols-2 gap-12 items-center py-20 border-b border-[#8888aa]/10">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden aspect-video border border-[#8888aa]/20 group-hover:border-[#a855f7]/50 transition-colors duration-500">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80" alt="Training" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="order-1 md:order-2 flex flex-col gap-6 md:pl-12">
                <div className="w-16 h-16 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]/30 text-[#a855f7]">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-bold">On-Demand Classes</h4>
                <p className="text-[#8888aa] text-lg leading-relaxed">
                  Practical AI training built for small business owners and their teams. Learn what's actually useful — not just what's trending.
                </p>
                <ul className="space-y-3 mt-2">
                  {['Self-paced training', 'SMB specific use cases', 'Live Q&A sessions', 'Resource libraries'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#f0f0ff]"><CheckCircle2 className="w-5 h-5 text-[#a855f7]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group grid md:grid-cols-2 gap-12 items-center py-20 border-b border-[#8888aa]/10">
              <div className="flex flex-col gap-6 md:pr-12">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white">
                  <Cpu className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-bold">Project Management</h4>
                <p className="text-[#8888aa] text-lg leading-relaxed">
                  We own the delivery from kickoff to launch. You stay focused on running your business while we handle the timelines, vendors, and complexity.
                </p>
                <ul className="space-y-3 mt-2">
                  {['End-to-end delivery', 'Agile methodologies', 'Post-launch support', 'Performance tracking'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#f0f0ff]"><CheckCircle2 className="w-5 h-5 text-white" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-[#8888aa]/20 group-hover:border-white/50 transition-colors duration-500">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Management" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section id="process" className="py-32 bg-[#060610]/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-mono-accent text-[#00d4ff] mb-4 tracking-widest">HOW IT WORKS</h2>
            <h3 className="text-4xl md:text-5xl font-bold">A clear path to <span className="text-gradient">AI adoption.</span></h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
            {/* Connectors for desktop */}
            <div className="hidden md:block absolute top-[50%] left-[25%] right-[25%] h-px bg-gradient-to-r from-[#6c63ff] via-[#00d4ff] to-[#a855f7] opacity-30 z-0"></div>
            <div className="hidden md:block absolute top-[25%] bottom-[25%] left-[50%] w-px bg-gradient-to-b from-[#6c63ff] via-[#00d4ff] to-[#a855f7] opacity-30 z-0"></div>

            {/* Step 1 */}
            <div className="border-gradient bg-[#060610] p-10 rounded-2xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-mono-accent font-bold text-white/5 absolute top-6 right-8">01</div>
              <div className="w-14 h-14 rounded-full bg-[#6c63ff] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-[0_0_20px_-5px_#6c63ff]">1</div>
              <h4 className="text-2xl font-bold mb-4">Discovery Call</h4>
              <p className="text-[#8888aa] leading-relaxed">We learn about your business bottlenecks, data sources, and operational goals to identify high-ROI AI opportunities.</p>
            </div>

            {/* Step 2 */}
            <div className="border-gradient bg-[#060610] p-10 rounded-2xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-mono-accent font-bold text-white/5 absolute top-6 right-8">02</div>
              <div className="w-14 h-14 rounded-full bg-[#00d4ff] text-[#060610] flex items-center justify-center font-bold text-xl mb-6 shadow-[0_0_20px_-5px_#00d4ff]">2</div>
              <h4 className="text-2xl font-bold mb-4">Proposal & Plan</h4>
              <p className="text-[#8888aa] leading-relaxed">You receive a clear, jargon-free roadmap detailing timelines, costs, and expected outcomes before any commitment.</p>
            </div>

            {/* Step 3 */}
            <div className="border-gradient bg-[#060610] p-10 rounded-2xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-mono-accent font-bold text-white/5 absolute top-6 right-8">03</div>
              <div className="w-14 h-14 rounded-full bg-[#a855f7] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-[0_0_20px_-5px_#a855f7]">3</div>
              <h4 className="text-2xl font-bold mb-4">Build & Deliver</h4>
              <p className="text-[#8888aa] leading-relaxed">Our experts develop, train, and integrate your custom AI solution seamlessly into your existing workflows.</p>
            </div>

            {/* Step 4 */}
            <div className="border-gradient bg-[#060610] p-10 rounded-2xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-mono-accent font-bold text-white/5 absolute top-6 right-8">04</div>
              <div className="w-14 h-14 rounded-full bg-white text-[#060610] flex items-center justify-center font-bold text-xl mb-6 shadow-[0_0_20px_-5px_white]">4</div>
              <h4 className="text-2xl font-bold mb-4">Support & Grow</h4>
              <p className="text-[#8888aa] leading-relaxed">Post-launch, we monitor performance, provide team training, and ensure your AI tools scale with your business.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6c63ff]/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to work <span className="text-gradient">smarter?</span></h2>
          <p className="text-xl text-[#8888aa] mb-12 max-w-2xl mx-auto">
            Stop letting complex operations slow your growth. Let's discuss how AI can transform your small business today.
          </p>
          <a 
            href="mailto:support@aptimatic.io" 
            className="inline-flex items-center gap-3 bg-white text-[#060610] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#00d4ff] transition-all duration-300 hover:scale-105"
          >
            Book Your Free Call <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-[#8888aa]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <svg viewBox="0 0 204 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: "24px", display: "block" }}>
              <defs><linearGradient id="nlg3" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#60A5FA"/><stop offset="55%" stopColor="#2563EB"/><stop offset="100%" stopColor="#1E3A8A"/></linearGradient></defs>
              <line x1="5" y1="37" x2="16" y2="4" stroke="url(#nlg3)" strokeWidth="3" strokeLinecap="round"/>
              <line x1="23" y1="8" x2="37" y2="37" stroke="url(#nlg3)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="5" cy="37" r="3.2" fill="url(#nlg3)"/>
              <circle cx="16" cy="4" r="3.2" fill="url(#nlg3)"/>
              <circle cx="23" cy="8" r="3.2" fill="url(#nlg3)"/>
              <circle cx="37" cy="37" r="3.2" fill="url(#nlg3)"/>
              <text x="52" y="30" fontFamily="Inter,-apple-system,sans-serif" fontSize="27" fontWeight="800" letterSpacing="-0.7" fill="white">Aptimat<tspan fill="#38BDF8" fontStyle="italic">i</tspan>c</text>
            </svg>
          </div>
          <div className="text-[#8888aa] text-sm">
            © {new Date().getFullYear()} Aptimatic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
