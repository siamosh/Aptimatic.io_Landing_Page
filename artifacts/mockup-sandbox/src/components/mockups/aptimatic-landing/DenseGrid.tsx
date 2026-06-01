import React from 'react';
import { Brain, Code, BookOpen, Layers, CheckCircle2, ArrowRight, Activity, Users, Zap, Database, Terminal, Shield, MessageSquare, ChevronRight } from 'lucide-react';
import './_dense.css';

const Logo = () => (
  <svg viewBox="0 0 204 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '34px', display: 'block' }}>
    <defs>
      <linearGradient id="nlg3" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="55%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>
    <line x1="20" y1="2" x2="3" y2="38" stroke="url(#nlg3)" strokeWidth="3" strokeLinecap="round" />
    <line x1="20" y1="2" x2="37" y2="38" stroke="url(#nlg3)" strokeWidth="3" strokeLinecap="round" />
    <line x1="10.5" y1="22" x2="29.5" y2="22" stroke="url(#nlg3)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="20" cy="2" r="3.2" fill="url(#nlg3)" />
    <circle cx="3" cy="38" r="3.2" fill="url(#nlg3)" />
    <circle cx="37" cy="38" r="3.2" fill="url(#nlg3)" />
    <circle cx="10.5" cy="22" r="3.2" fill="url(#nlg3)" />
    <circle cx="29.5" cy="22" r="3.2" fill="url(#nlg3)" />
    <text x="52" y="30" fontFamily="Inter,-apple-system,sans-serif" fontSize="27" fontWeight="800" letterSpacing="-0.7" fill="white">
      Aptimat<tspan fill="#38BDF8" fontStyle="italic">i</tspan>c
    </text>
  </svg>
);

export function DenseGrid() {
  return (
    <div className="dense-theme min-h-screen overflow-x-hidden selection:bg-[#6c63ff] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-color)]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex-shrink-0"><Logo /></a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-[var(--text-muted)] hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="text-[var(--text-muted)] hover:text-white transition-colors">How It Works</a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-white transition-colors">Contact</a>
          </div>
          <a href="mailto:support@aptimatic.io" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-[var(--text-main)] text-[var(--bg-color)] rounded hover:bg-opacity-90 transition-all">
            Book a Free Call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6 border-b border-[var(--border-color)] flex flex-col justify-center min-h-[70vh]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs font-medium mono text-[var(--accent-cyan)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse"></span>
                SYSTEM STATUS: ONLINE
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                AI Infrastructure for <span className="gradient-text">Small & Medium Business</span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
                Deploy production-ready AI solutions without the enterprise overhead. We build, manage, and scale the models that automate your workflows.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:support@aptimatic.io" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-[var(--accent-purple)] text-white rounded hover:bg-opacity-90 transition-all">
                  Initialize Project <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-[var(--border-color)] hover:bg-[var(--card-hover)] rounded transition-colors">
                  View Documentation
                </a>
              </div>
            </div>
            
            {/* Terminal Mockup */}
            <div className="rounded-lg border border-[var(--border-color)] bg-[#0a0a16] overflow-hidden shadow-2xl shadow-[var(--accent-purple)]/10 hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-color)] bg-[#111122]">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs text-[var(--text-muted)] mono">root@aptimatic:~</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4 text-[var(--text-muted)]">
                <div><span className="text-green-400">$</span> aptimatic init --project "smb-automation"</div>
                <div className="text-blue-400">Loading modules...</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>[OK] Data Pipeline</div>
                  <div>[OK] LLM Integration</div>
                  <div>[OK] Vector DB</div>
                  <div>[OK] Auth Service</div>
                </div>
                <div><span className="text-green-400">$</span> aptimatic deploy --env production</div>
                <div className="text-[var(--accent-cyan)] animate-pulse">Deploying to edge nodes... 99%</div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 border-t border-l border-[var(--border-color)]">
            {[
              { label: 'Uptime', value: '99.99%', icon: Activity },
              { label: 'Avg Latency', value: '45ms', icon: Zap },
              { label: 'Models', value: '14+', icon: Brain },
              { label: 'Deployments', value: '1.2k', icon: Terminal },
              { label: 'Security', value: 'SOC2', icon: Shield },
            ].map((stat, i) => (
              <div key={i} className="p-4 border-r border-b border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--card-hover)] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[var(--text-muted)] mono">{stat.label}</span>
                  <stat.icon className="w-4 h-4 text-[var(--accent-purple)]" />
                </div>
                <div className="text-xl font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">Core Services</h2>
              <p className="text-[var(--text-muted)] text-sm">Modular solutions for your AI transformation.</p>
            </div>
            <div className="hidden sm:block text-xs mono text-[var(--text-muted)]">
              SELECT * FROM services;
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Brain,
                title: "AI Consulting",
                desc: "Readiness assessment, strategy & roadmap, tool evaluation.",
                color: "text-blue-400"
              },
              {
                icon: Code,
                title: "App Development",
                desc: "Custom AI apps, chatbots, automation, data pipelines.",
                color: "text-purple-400"
              },
              {
                icon: BookOpen,
                title: "On-Demand Classes",
                desc: "Self-paced training, SMB use cases, live Q&A sessions.",
                color: "text-green-400"
              },
              {
                icon: Layers,
                title: "Project Management",
                desc: "End-to-end delivery, agile methods, post-launch support.",
                color: "text-orange-400"
              }
            ].map((service, i) => (
              <div key={i} className="group p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded hover:border-[var(--accent-purple)]/50 transition-all cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                  <service.icon className={`w-24 h-24 ${service.color}`} />
                </div>
                <service.icon className={`w-8 h-8 mb-4 ${service.color}`} />
                <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-6 h-10">{service.desc}</p>
                <div className="flex items-center text-xs font-medium text-[var(--accent-cyan)] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Learn more <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve - Bento Grid */}
      <section className="py-20 px-6 border-b border-[var(--border-color)] bg-[#030308]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Target Architecture</h2>
          
          <div className="bento-grid">
            <div className="bento-wide p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded flex flex-col justify-between">
              <div>
                <Database className="w-6 h-6 text-[var(--accent-cyan)] mb-4" />
                <h3 className="text-lg font-semibold mb-2">E-Commerce & Retail</h3>
                <p className="text-sm text-[var(--text-muted)]">Inventory prediction, personalized recommendations, and automated customer support resolving 70% of level-1 tickets.</p>
              </div>
              <div className="mt-6 flex gap-2">
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs mono">Recommendation API</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs mono">NLP Support</span>
              </div>
            </div>
            
            <div className="p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded">
              <Activity className="w-6 h-6 text-[var(--accent-violet)] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-[var(--text-muted)]">Patient triaging and document parsing workflows.</p>
            </div>
            
            <div className="p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded bg-gradient-to-br from-[var(--accent-purple)]/20 to-transparent">
              <h3 className="text-3xl font-bold mb-1">40%</h3>
              <p className="text-sm text-[var(--text-muted)]">Average operational cost reduction for our clients.</p>
            </div>

            <div className="p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded">
              <Shield className="w-6 h-6 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Finance & Legal</h3>
              <p className="text-sm text-[var(--text-muted)]">Secure document analysis and anomaly detection.</p>
            </div>

            <div className="bento-wide p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <Users className="w-6 h-6 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Agencies & SaaS</h3>
                <p className="text-sm text-[var(--text-muted)]">White-labeled AI features embedded directly into your existing product suite, instantly upgrading your offering.</p>
              </div>
              <div className="w-full md:w-1/3 bg-black/40 rounded border border-white/10 p-3 text-xs mono text-[var(--text-muted)] space-y-2">
                <div>{'>'} API Status: OK</div>
                <div>{'>'} Endpoints: Active</div>
                <div className="text-green-400">{'>'} Integration Complete</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold">Execution Pipeline</h2>
            <div className="h-px bg-[var(--border-color)] flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--border-color)] hidden md:block -translate-y-1/2 z-0"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[var(--border-color)] hidden md:block -translate-x-1/2 z-0"></div>
            
            {[
              { num: "01", title: "Discovery Call", desc: "Identify high-impact automation opportunities." },
              { num: "02", title: "Proposal & Plan", desc: "Architecture design and resource allocation." },
              { num: "03", title: "Build & Deliver", desc: "Iterative development with CI/CD." },
              { num: "04", title: "Support & Grow", desc: "SLA-backed monitoring and optimization." }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-[var(--bg-color)] border border-[var(--border-color)] rounded z-10 relative group hover:border-[var(--accent-purple)] transition-colors">
                <div className="text-4xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[var(--accent-purple)]/10 transition-colors">{step.num}</div>
                <div className="w-10 h-10 rounded border border-[var(--border-color)] flex items-center justify-center text-sm font-bold mono text-[var(--accent-cyan)] mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 bg-[#030308]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[var(--border-color)] pb-12 mb-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-[var(--text-muted)] max-w-sm">
              Engineering the future of small business through intelligent automation and robust infrastructure.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="mailto:support@aptimatic.io" className="px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors">
                Initialize Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-xs font-semibold text-white tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Pipeline</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs font-semibold text-white tracking-widest uppercase mb-4">Legal & Ops</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                All systems nominal
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs mono text-[var(--text-muted)]">
          <div>&copy; {new Date().getFullYear()} Aptimatic.io. All rights reserved.</div>
          <div className="mt-2 md:mt-0">v1.4.0-stable // CA-SF</div>
        </div>
      </footer>
    </div>
  );
}
