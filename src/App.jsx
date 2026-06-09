import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Home from './pages/Home/Home';
import Footer from './components/common/Footer';
import Cursor from './components/common/Cursor';

// Page Imports
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Solutions from './pages/Solutions/Solutions';
import Industries from './pages/Industries/Industries';
import Portfolio from './pages/Portfolio/Portfolio';
import Collaboration from './pages/Collaboration/Collaboration';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';

// Helper Icons for Certifications & Compliance
const CertIcon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const CardIcon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
    <path d="m9 14 2 2 4-4"/>
  </svg>
);

const GdprIcon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      // Clean up fallback hash routing
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      // Scroll to top on page navigate
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#about':
        return <About />;
      case '#services':
        return <Services />;
      case '#solutions':
        return <Solutions />;
      case '#industries':
        return <Industries />;
      case '#portfolio':
        return <Portfolio />;
      case '#collaboration':
        return <Collaboration />;
      case '#menu':
        return <Menu />;
      case '#contact':
        return <Contact />;
      case '#home':
      default:
        return (
          <>
            {/* Futuristic Technology Theme Hero Section */}
            <main className="verification-hero">
              <div className="hero-network-overlay"></div>
              
              {/* Cybernetic nodes/dots */}
              <div className="hero-glow-dot-1"></div>
              <div className="hero-glow-dot-2"></div>

              {/* Two-Column Layout Container */}
              <div className="hero-container">
                {/* Left Column: Copywriting and CTA Actions */}
                <div className="hero-left-col">
                  <div className="hero-badge-ref">
                    <span className="hero-badge-line"></span>
                    EMPOWERING BUSINESSES
                  </div>
                  
                  <h1 className="hero-title">
                    Empowering Businesses<br />
                    Through <span className="text-red">Digital Innovation,</span><br />
                    <span className="text-blue">AI & Enterprise Technology</span>
                  </h1>
                  
                  <p className="hero-desc">
                    We help organizations accelerate growth, optimize operations, and create competitive advantage 
                    through AI, Cloud, DevOps, Cybersecurity, and Emerging Technologies.
                  </p>
                  
                  <div className="hero-actions">
                    {/* Schedule Consultation Button */}
                    <a href="#consultation" className="cta-button" style={{ gap: '0.75rem' }}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      Schedule a Consultation
                    </a>
                    
                    {/* Request Proposal Button */}
                    <a href="#proposal" className="hero-btn-outline" style={{ gap: '0.75rem' }}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                      Request a Proposal
                    </a>

                    {/* Get Started Button */}
                    <a href="#get-started" className="hero-btn-outline" style={{ gap: '0.75rem' }}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Get Started
                    </a>
                  </div>
                </div>

                {/* Right Column: Advanced morphing particle simulation */}
                <div className="hero-right-col">
                  <Home />
                </div>
              </div>
            </main>

            {/* Unified Trust, Certifications & Partners Section */}
            <section className="unified-trust-section">
              <div className="section-container">
                <div className="unified-trust-card">
                  {/* Header */}
                  <div className="trust-header">
                    <span className="trust-badge">Trust & Compliance</span>
                    <h2 className="trust-title">Certified Excellence. <span>Trusted Worldwide.</span></h2>
                    <p className="trust-desc">
                      Our certifications, global clients, and technology partnerships reflect our commitment to security, 
                      quality, and delivering enterprise-grade solutions.
                    </p>
                  </div>

                  {/* Certifications Subsection */}
                  <div className="trust-subsection-title">
                    <svg className="compliance-header-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    <span>Certifications & Compliance</span>
                  </div>

                  <div className="certifications-grid-modern">
                    <div className="cert-card-modern card-c-1">
                      <CertIcon />
                      <div className="cert-card-info">
                        <h3>ISO 9001:2015</h3>
                        <p>Quality Management</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-2">
                      <ShieldIcon />
                      <div className="cert-card-info">
                        <h3>ISO 27001</h3>
                        <p>Information Security</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-3">
                      <ShieldIcon />
                      <div className="cert-card-info">
                        <h3>SOC 2 Type II</h3>
                        <p>Security & Availability</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-4">
                      <CertIcon />
                      <div className="cert-card-info">
                        <h3>ISO 20000-1</h3>
                        <p>Service Management</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-5">
                      <CertIcon />
                      <div className="cert-card-info">
                        <h3>ISO 22301</h3>
                        <p>Business Continuity</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-6">
                      <CardIcon />
                      <div className="cert-card-info">
                        <h3>PCI DSS</h3>
                        <p>Data Security</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-7">
                      <GdprIcon />
                      <div className="cert-card-info">
                        <h3>GDPR Compliance</h3>
                        <p>Data Protection</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-8">
                      <ShieldIcon />
                      <div className="cert-card-info">
                        <h3>ISO 27701</h3>
                        <p>Privacy Information</p>
                      </div>
                    </div>
                    <div className="cert-card-modern card-c-9">
                      <CertIcon />
                      <div className="cert-card-info">
                        <h3>ISO 42001</h3>
                        <p>AI Management</p>
                      </div>
                    </div>
                  </div>

                  {/* Split Row: Trusted Clients and Technology Partners */}
                  <div className="trust-split-row">
                    {/* Left block: Trusted Clients */}
                    <div className="trust-clients-block">
                      <div className="trust-subsection-title">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>Trusted by Global Clients</span>
                      </div>

                      <div className="clients-carousel-row">
                        {/* 100 Transcripts */}
                        <div className="client-logo-card card-l-1" title="100 Transcripts">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#60A5FA' }}>
                            <path d="M4 19V6.2h3L12.5 13V6.2H15v12.8h-2.8L6.5 12v7H4z"/>
                            <circle cx="19" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                          </svg>
                          <span className="text-100transcripts">100 Transcripts</span>
                        </div>

                        {/* Chataway */}
                        <div className="client-logo-card card-l-2" title="Chataway">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#F472B6' }}>
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          </svg>
                          <span className="text-chataway">Chataway</span>
                        </div>

                        {/* InnovaNext */}
                        <div className="client-logo-card card-l-3" title="InnovaNext">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#34D399' }}>
                            <polygon points="12 2 2 22 22 22"/>
                          </svg>
                          <span className="text-innovanext">InnovaNext</span>
                        </div>

                        {/* DataHive */}
                        <div className="client-logo-card card-l-4" title="DataHive">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#FBBF24' }}>
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                          <span className="text-datahive">DataHive</span>
                        </div>

                        {/* Softgrid Solutions */}
                        <div className="client-logo-card card-l-5" title="Softgrid Solutions">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#818CF8' }}>
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="9" y1="3" x2="9" y2="21"/>
                            <line x1="15" y1="3" x2="15" y2="21"/>
                          </svg>
                          <span className="text-softgrid">Softgrid Solutions</span>
                        </div>
                      </div>
                    </div>

                    {/* Right block: Technology Partners */}
                    <div className="trust-partners-block">
                      <div className="trust-subsection-title">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                        <span>Technology Partners</span>
                      </div>

                      <div className="partners-carousel-row">
                        {/* NextGen Technologies */}
                        <div className="client-logo-card card-l-6" title="NextGen Technologies">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#F87171' }}>
                            <polyline points="13 17 18 12 13 7"/>
                            <polyline points="6 17 11 12 6 7"/>
                          </svg>
                          <span className="text-nextgen">NextGen Technologies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Key Services Section */}
            <section className="services-section">
              <div className="section-container">
                <div className="section-header">
                  <span className="section-subtitle">What We Do</span>
                  <h2 className="section-title">Our Key Services</h2>
                  <p className="section-desc">We deliver end-to-end digital transformation through specialized technology capabilities tailored to your business goals.</p>
                </div>
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-icon-box blue-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    </div>
                    <h3>Software Development Services</h3>
                    <p>Custom software engineering, legacy modernization, enterprise web apps, and API integrations.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon-box purple-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                    </div>
                    <h3>Cloud Services</h3>
                    <p>Public, private, and hybrid cloud migration, serverless computing, architectures, and operations.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon-box red-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"/></svg>
                    </div>
                    <h3>DevOps & Automation</h3>
                    <p>CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, and continuous monitoring.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon-box blue-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"/></svg>
                    </div>
                    <h3>AI & Intelligent Automation</h3>
                    <p>Machine learning workflows, natural language processing, predictive modeling, and intelligent agents.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon-box purple-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3>Cybersecurity Services</h3>
                    <p>Threat detection, vulnerability assessments, compliance alignment, and zero-trust framework execution.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon-box red-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                    </div>
                    <h3>IT Infrastructure Services</h3>
                    <p>Network engineering, modern datacenter design, virtualization, and hybrid work setups.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon-box blue-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <h3>Managed IT Services</h3>
                    <p>24/7 helpdesk monitoring, asset governance, backup systems, and routine infrastructure health updates.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon-box purple-glow">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    </div>
                    <h3>Support & Maintenance</h3>
                    <p>SLA-backed systems troubleshooting, emergency hotfixes, package updates, and routine checks.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Products & Platforms Section */}
            <section className="products-platforms-section">
              <div className="section-container">
                <div className="unified-products-card">
                  {/* Dynamic background animation glows */}
                  <div className="unified-card-glow-bg"></div>
                  
                  {/* Left Column: Heading and description */}
                  <div className="unified-card-left">
                    <span className="products-subtitle">Accelerate Time-To-Market</span>
                    <h2 className="products-title-gradient">Our Products & Platforms</h2>
                    <p className="products-desc-modern">
                      Ready-to-deploy enterprise platforms configured to accelerate development timelines, 
                      optimize workflows, and slash architectural overhead.
                    </p>
                    <a href="#products" className="view-all-products-link">
                      View All Products & Platforms &rarr;
                    </a>
                  </div>

                  {/* Right Column: Two products list */}
                  <div className="unified-card-right-grid">
                    
                    {/* Product 1: Rennto */}
                    <div className="product-item-inner item-blue">
                      <div className="product-item-icon-wrapper">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <line x1="9" y1="3" x2="9" y2="21"/>
                          <line x1="9" y1="9" x2="21" y2="9"/>
                          <line x1="9" y1="15" x2="21" y2="15"/>
                        </svg>
                      </div>
                      <div className="product-item-info">
                        <h3>Rennto</h3>
                        <p>Business operations & service management platform designed to streamline logistics, governance, and resource tracking.</p>
                        <a href="#products" className="view-demo-link text-blue">Request Demo &rarr;</a>
                      </div>
                    </div>

                    {/* Product 2: TX-Hub */}
                    <div className="product-item-inner item-red">
                      <div className="product-item-icon-wrapper">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 22V12m0 0l-8-4m8 4l8-4M4 6v6l8 4 8-4V6L12 2 4 6z"/>
                        </svg>
                      </div>
                      <div className="product-item-info">
                        <h3>TX-Hub</h3>
                        <p>Workflow automation, collaboration & analytics platform to unify engineering pipelines and optimize deployment loops.</p>
                        <a href="#products" className="view-demo-link text-red">Request Demo &rarr;</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* Directory Showcase (3 Columns Layout) */}
            {/* Directory Showcase (3 Columns Layout wrapped in stylish cards) */}
            <section className="directory-showcase-section">
              <div className="directory-container-three-col">
                
                {/* Column 1: Solutions We Provide */}
                <div className="directory-card-modern-grad grad-blue">
                  <div className="directory-card-header">
                    <div className="directory-icon-circle bg-blue-grad">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="9" y1="3" x2="9" y2="21"/>
                      </svg>
                    </div>
                    <h3>Solutions We Provide</h3>
                  </div>
                  <ul className="directory-list-modern">
                    <li><span className="bullet-arrow-grad text-blue">&#9656;</span> Digital Transformation Solutions</li>
                    <li><span className="bullet-arrow-grad text-blue">&#9656;</span> Enterprise Business Solutions</li>
                    <li><span className="bullet-arrow-grad text-blue">&#9656;</span> Cloud & Infrastructure Solutions</li>
                    <li><span className="bullet-arrow-grad text-blue">&#9656;</span> DevOps & Platform Solutions</li>
                    <li><span className="bullet-arrow-grad text-blue">&#9656;</span> AI & Data Solutions</li>
                    <li><span className="bullet-arrow-grad text-blue">&#9656;</span> Cybersecurity Solutions</li>
                    <li><span className="bullet-arrow-grad text-blue">&#9656;</span> Startup & SME Solutions</li>
                  </ul>
                  <a href="#solutions" className="view-all-link-modern border-bottom-blue">View All Solutions &rarr;</a>
                </div>

                {/* Column 2: Industries Served */}
                <div className="directory-card-modern-grad grad-red">
                  <div className="directory-card-header">
                    <div className="directory-icon-circle bg-red-grad">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <h3>Industries Served</h3>
                  </div>
                  <ul className="directory-list-modern">
                    <li><span className="bullet-arrow-grad text-red">&#9656;</span> Banking, Financial Services & Insurance</li>
                    <li><span className="bullet-arrow-grad text-red">&#9656;</span> Healthcare & Life Sciences</li>
                    <li><span className="bullet-arrow-grad text-red">&#9656;</span> Retail & E-Commerce</li>
                    <li><span className="bullet-arrow-grad text-red">&#9656;</span> Manufacturing & Industry 4.0</li>
                    <li><span className="bullet-arrow-grad text-red">&#9656;</span> Logistics & Supply Chain</li>
                    <li><span className="bullet-arrow-grad text-red">&#9656;</span> Education & EdTech</li>
                    <li><span className="bullet-arrow-grad text-red">&#9656;</span> Startups & Small Business</li>
                  </ul>
                  <a href="#industries" className="view-all-link-modern border-bottom-red">View All Industries &rarr;</a>
                </div>

                {/* Column 3: Technology Expertise */}
                <div className="directory-card-modern-grad grad-purple">
                  <div className="directory-card-header">
                    <div className="directory-icon-circle bg-purple-grad">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                      </svg>
                    </div>
                    <h3>Technology Expertise</h3>
                  </div>
                  <ul className="directory-list-modern">
                    <li><span className="bullet-arrow-grad text-purple">&#9656;</span> Cloud Platforms</li>
                    <li><span className="bullet-arrow-grad text-purple">&#9656;</span> Mobile Development</li>
                    <li><span className="bullet-arrow-grad text-purple">&#9656;</span> Web Application</li>
                    <li><span className="bullet-arrow-grad text-purple">&#9656;</span> Databases</li>
                    <li><span className="bullet-arrow-grad text-purple">&#9656;</span> DevOps & Automation</li>
                    <li><span className="bullet-arrow-grad text-purple">&#9656;</span> Security</li>
                    <li><span className="bullet-arrow-grad text-purple">&#9656;</span> Data Engineering & Analytics</li>
                  </ul>
                  <a href="#technology" className="view-all-link-modern border-bottom-purple">View All Technologies &rarr;</a>
                </div>

              </div>
            </section>

            {/* Ready to Accelerate Banner & Why Partner With Us Section */}
            <section className="accelerate-banner-section">
              <div className="accelerate-container">
                
                {/* Left Side: Copy and Actions */}
                <div className="accelerate-left">
                  <h2>Ready to Accelerate Your<br />Digital Transformation?</h2>
                  <h3 className="accelerate-sub">Let's Build the Future of Your Business Together</h3>
                  
                  <p className="accelerate-p">
                    Whether you're launching a new product, modernizing legacy systems, adopting AI, 
                    migrating to the cloud, or scaling enterprise operations, our experts are ready to 
                    help you achieve your goals with confidence.
                  </p>
                  
                  <p className="accelerate-p">
                    Partner with Tanvox Technologies to unlock innovation, improve efficiency, 
                    strengthen security, and create sustainable business growth through technology.
                  </p>

                  <div className="accelerate-actions">
                    <a href="#consultation" className="acc-btn acc-btn-solid">Schedule a Consultation</a>
                    <a href="#proposal" className="acc-btn acc-btn-outline">Request a Proposal</a>
                    <a href="#experts" className="acc-btn acc-btn-outline">Speak With Our Experts</a>
                    <a href="#journey" className="acc-btn acc-btn-outline">Start Your Digital Journey</a>
                  </div>
                </div>

                {/* Right Side: Partnership details (White Card) */}
                <div className="accelerate-right">
                  <h3>Why Partner With Us?</h3>
                  
                  <ul className="partner-list-modern">
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Strategic Technology Consulting</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Enterprise Software Development</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>AI & Automation Solutions</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Cloud & DevOps Excellence</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Cybersecurity & Compliance</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Dedicated Support & Managed Services</span>
                    </li>
                  </ul>

                  <div className="partner-detail-card">
                    <div className="partner-card-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div className="partner-card-info">
                      <h4>Trusted by Businesses Seeking Innovation and Growth</h4>
                      <p>From startups to large enterprises, organizations rely on Tanvox Technologies to deliver scalable, secure, and future-ready digital solutions.</p>
                    </div>
                  </div>

                  <div className="partner-detail-card">
                    <div className="partner-card-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div className="partner-card-info">
                      <h4>Free Initial Consultation</h4>
                      <p>Discuss your business challenges, technology goals, and transformation roadmap with our specialists. No obligation. Just expert guidance.</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Stay Ahead of Technology Trends Newsletter Section */}
            <section className="stay-ahead-newsletter-section">
              <div className="stay-ahead-container">
                
                {/* Left Side: Copy & Info */}
                <div className="stay-ahead-left">
                  <h2>Stay Ahead of Technology Trends</h2>
                  <h3>Subscribe to Our Insights & Innovation Newsletter</h3>
                  <p>
                    Receive exclusive updates, industry insights, technology trends, AI innovations, 
                    cybersecurity advisories, cloud best practices, and digital transformation strategies 
                    directly in your inbox.
                  </p>

                  <div className="newsletter-features">
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                      </svg>
                      <span>Technology Insights</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                      </svg>
                      <span>AI & Emerging Updates</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      <span>Reports & Whitepapers</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
                      </svg>
                      <span>Product Announcements</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <span>Expert Webinars & Events</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      <span>Cybersecurity Alerts</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form Block */}
                <div className="stay-ahead-right">
                  <div className="form-card-modern">
                    <form className="modern-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                      <div className="input-group-plane">
                        <input type="email" placeholder="Enter your email address" required className="modern-newsletter-input" />
                        
                        {/* Paper plane icon */}
                        <svg className="plane-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#2563EB" strokeWidth="1.5">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </div>
                      
                      <button type="submit" className="acc-btn acc-btn-solid subscribe-btn-modern">Subscribe Now</button>
                    </form>
                    <p className="form-caption">
                      Join thousands of business leaders, innovators, and technology professionals 
                      staying informed about the future of digital transformation.
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <Cursor />

      {/* Premium Navigation Header */}
      <Header />

      {/* Dynamic Content Routing */}
      {renderContent()}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
