import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import HeroVisualization from './components/common/HeroVisualization';

// Page Imports
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Solutions from './pages/Solutions/Solutions';
import Industries from './pages/Industries/Industries';
import Portfolio from './pages/Portfolio/Portfolio';
import Collaboration from './pages/Collaboration/Collaboration';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';

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
                  <HeroVisualization />
                </div>
              </div>
            </main>

            {/* Stats Cards Section placed completely BELOW the hero */}
            <section className="stats-section">
              <div className="stats-grid-container">
                {/* Card 1 */}
                <div className="stat-card">
                  <svg className="stat-icon red" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Technology Specialists</span>
                </div>

                {/* Card 2 */}
                <div className="stat-card">
                  <svg className="stat-icon blue" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>

                {/* Card 3 */}
                <div className="stat-card">
                  <svg className="stat-icon purple" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Industry Domains Served</span>
                </div>

                {/* Card 4 */}
                <div className="stat-card">
                  <svg className="stat-icon red" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>

                {/* Card 5 */}
                <div className="stat-card">
                  <svg className="stat-icon blue" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technology Partnerships</span>
                </div>

                {/* Card 6 */}
                <div className="stat-card">
                  <svg className="stat-icon purple" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Service Availability</span>
                </div>

                {/* Card 7 */}
                <div className="stat-card">
                  <svg className="stat-icon red" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <span className="stat-number">Global</span>
                  <span className="stat-label">Delivery Capability</span>
                </div>

                {/* Card 8 */}
                <div className="stat-card">
                  <svg className="stat-icon blue" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8z"/>
                    <path d="M12 2v20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <span className="stat-number">Agile & DevOps</span>
                  <span className="stat-label">Driven Approach</span>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Premium Navigation Header */}
      <Header />

      {/* Dynamic Content Routing */}
      {renderContent()}
    </div>
  );
}

export default App;
