import { useState } from 'react';
import { itServicesData, businessServicesData, whyChooseUsData } from './ServicesData';
import Home from '../Home/Home';

export default function Services() {
  const [activeItId, setActiveItId] = useState(itServicesData[0].id);
  const [activeBusId, setActiveBusId] = useState(businessServicesData[0].id);

  const activeItService = itServicesData.find(item => item.id === activeItId) || itServicesData[0];
  const activeBusService = businessServicesData.find(item => item.id === activeBusId) || businessServicesData[0];

  // Helper stats generator to keep the UI rich and dynamic
  const getMockMetrics = (id) => {
    switch (id) {
      case 'consulting':
        return [
          { value: '+35%', label: 'Avg Efficiency Gain' },
          { value: '4-6 Wks', label: 'Typical Roadmap' },
          { value: '98%', label: 'Executive Approval' }
        ];
      case 'project':
        return [
          { value: '94%', label: 'On-Time Delivery' },
          { value: '-18%', label: 'Budget Overhead' },
          { value: '100%', label: 'SLA Compliance' }
        ];
      case 'bpo':
        return [
          { value: '24/7', label: 'Operational Coverage' },
          { value: '75%', label: 'Cost Reduction' },
          { value: '< 90s', label: 'Response SLA' }
        ];
      case 'admin':
        return [
          { value: '80hr+', label: 'Monthly Time Saved' },
          { value: '99.9%', label: 'Accuracy Index' },
          { value: '1-Day', label: 'Onboarding Speed' }
        ];
      case 'support':
        return [
          { value: '99.2%', label: 'CSAT Rating' },
          { value: '< 45s', label: 'Live Chat Response' },
          { value: '95%', label: 'First-Contact Fix' }
        ];
      case 'hr':
        return [
          { value: '18 Days', label: 'Avg Time-To-Hire' },
          { value: '92%', label: 'Retention Rate' },
          { value: '1500+', label: 'Vetted Talent Pool' }
        ];
      case 'marketing':
        return [
          { value: '4.2x', label: 'Avg ROI Increase' },
          { value: '+140%', label: 'Lead Volume growth' },
          { value: '88%', label: 'Brand Lift Index' }
        ];
      case 'sales':
        return [
          { value: '+45%', label: 'Pipeline Velocity' },
          { value: '3.5x', label: 'SQL Conversion Lift' },
          { value: '96%', label: 'CRM Accuracy Rate' }
        ];
      default:
        return [
          { value: '99.9%', label: 'System Reliability' },
          { value: '100%', label: 'Zero-Trust Secure' },
          { value: '24/7', label: 'Expert Support' }
        ];
    }
  };

  return (
    <div className="services-page">
      {/* SECTION 1 – HERO SECTION */}
      <section className="services-hero" id="hero">
        <div className="services-container">
          <div className="services-hero-grid">
            <div className="services-hero-left">
              <span className="services-badge">Enterprise Capabilities</span>
              <h1 className="services-hero-title">
                Next-Gen <span>Enterprise Services</span> & Technology Engineering
              </h1>
              <p className="services-hero-desc">
                We engineer scalable, secure, and modern digital architectures. From custom software development and 
                cognitive AI integrations to comprehensive business process optimization, Tanvox drives your growth.
              </p>
              <div className="services-hero-actions">
                <a href="#contact" className="services-btn-primary">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Get Started Today
                </a>
                <a href="#it-services" className="services-btn-outline">
                  Explore Tech Stack &darr;
                </a>
              </div>
            </div>
            
            <div className="services-hero-right">
              <Home />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – STATS SECTION */}
      <section className="services-stats-section" id="stats">
        <div className="services-container">
          <div className="services-stats-grid">
            <div className="services-stat-card">
              <div className="services-stat-icon-wrapper blue">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <span className="services-stat-number">99.9%</span>
              <span className="services-stat-label">Uptime SLA</span>
            </div>
            
            <div className="services-stat-card">
              <div className="services-stat-icon-wrapper pink">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="services-stat-number">100%</span>
              <span className="services-stat-label">Zero-Trust Secured</span>
            </div>

            <div className="services-stat-card">
              <div className="services-stat-icon-wrapper navy">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <span className="services-stat-number">250+</span>
              <span className="services-stat-label">Engineers & Consultants</span>
            </div>

            <div className="services-stat-card">
              <div className="services-stat-icon-wrapper blue">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                </svg>
              </div>
              <span className="services-stat-number">12+</span>
              <span className="services-stat-label">Industries Served</span>
            </div>

            <div className="services-stat-card">
              <div className="services-stat-icon-wrapper pink">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="services-stat-number">&lt; 15m</span>
              <span className="services-stat-label">Emergency Response</span>
            </div>

            <div className="services-stat-card">
              <div className="services-stat-icon-wrapper navy">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8l-4 4h8z" />
                </svg>
              </div>
              <span className="services-stat-number">98%</span>
              <span className="services-stat-label">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – IT SERVICES INTERACTIVE SHOWCASE */}
      <section className="services-section" id="it-services">
        <div className="services-container">
          <div className="services-section-header">
            <span className="services-section-subtitle">Technology Stack Showcase</span>
            <h2 className="services-section-title">Comprehensive IT & Software Services</h2>
            <p className="services-section-description">
              Select any capability below to explore its structure, key details, and technical delivery highlights.
            </p>
          </div>

          <div className="services-showcase-container">
            {/* Left Sidebar Navigation */}
            <div className="services-showcase-nav">
              {itServicesData.map(item => (
                <button
                  key={item.id}
                  className={`services-nav-item ${activeItId === item.id ? 'active' : ''}`}
                  onClick={() => setActiveItId(item.id)}
                >
                  <span className="services-nav-item-icon">{item.icon}</span>
                  {item.title}
                </button>
              ))}
            </div>

            {/* Right Large Preview Panel */}
            <div className="services-preview-panel">
              <div className="services-preview-bg-graphics">
                <div className="services-preview-glow"></div>
              </div>

              <div className="services-preview-content">
                <div className="services-preview-header">
                  <div className="services-preview-icon-box">
                    {activeItService.icon}
                  </div>
                  <div className="services-preview-title-block">
                    <h3 className="services-preview-title">{activeItService.title}</h3>
                    <span className="services-preview-subtitle">{activeItService.subtitle || 'Enterprise Architecture Solution'}</span>
                  </div>
                </div>

                <div className="services-preview-body">
                  <div>
                    <p className="services-preview-desc">{activeItService.description || 'We deliver secure, scalable, and tailored software solutions that accelerate digital operations.'}</p>
                    <div className="services-preview-action-block">
                      <a href="#contact" className="services-btn-preview-cta">
                        Discuss This Service
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="services-preview-features-title">Core Capabilities</h4>
                    <ul className="services-preview-list">
                      {(activeItService.bullets || []).map((bullet, idx) => (
                        <li key={idx} className="services-preview-list-item">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento featured capabilities grid */}
          <h3 className="services-bento-title">Featured Capabilities Matrix</h3>
          <div className="services-bento-grid">
            {itServicesData.filter(item => item.bentoSize !== 'none').slice(0, 6).map((item, index) => {
              const isLarge = item.bentoSize === 'large';
              const isWide = item.bentoSize === 'wide';
              const isMedium = item.bentoSize === 'medium';
              const isSmall = item.bentoSize === 'small';

              let sizeClass = 'small';
              if (isLarge) sizeClass = 'large';
              else if (isWide) sizeClass = 'wide';
              else if (isMedium) sizeClass = 'medium';

              const colorClass = (index % 2 === 0) ? 'it-blue' : 'it-pink';

              return (
                <div key={item.id} className={`services-bento-card ${sizeClass}`}>
                  <div className={`services-bento-icon-box ${colorClass}`}>
                    {item.icon}
                  </div>
                  
                  <div className="services-bento-info">
                    <h4 className="services-bento-card-title">{item.title}</h4>
                    <p className="services-bento-card-desc">
                      {isLarge || isWide ? item.description : item.subtitle || item.description.slice(0, 60) + '...'}
                    </p>
                  </div>

                  <a 
                    href="#it-services" 
                    className="services-bento-link" 
                    onClick={() => setActiveItId(item.id)}
                  >
                    Explore Details &rarr;
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 – HONEYCOMB OPERATIONS (Business Services) */}
      <section className="services-honeycomb-section" id="business-services">
        <div className="services-container">
          <div className="services-section-header">
            <span className="services-section-subtitle">Operational Excellence</span>
            <h2 className="services-section-title">Business Support & Managed Services</h2>
            <p className="services-section-description">
              Tap into our custom corporate support, administrative automation, and operational outsourcing frameworks. Click any node in the honeycomb matrix to explore capabilities.
            </p>
          </div>

          {/* Mobile swipe list (shows on smaller viewports) */}
          <div className="services-mobile-honeycomb-swipe">
            {businessServicesData.map(node => (
              <div 
                key={node.id} 
                className={`services-mobile-hex-card ${activeBusId === node.id ? 'active' : ''}`}
                onClick={() => setActiveBusId(node.id)}
              >
                <div className="services-hexagon-bg">
                  <svg viewBox="0 0 100 115" width="100%" height="100%">
                    <polygon points="50,2 98,30 98,85 50,113 2,85 2,30" />
                  </svg>
                </div>
                <div className="services-hexagon-content">
                  <span className="services-hexagon-icon">{node.icon}</span>
                  <span className="services-hexagon-title" style={{ fontSize: '0.65rem' }}>{node.title.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="services-honeycomb-split-grid">
            {/* Left Honeycomb Viewport */}
            <div className="services-honeycomb-viewport">
              <div className="services-honeycomb-ambient-glow"></div>
              
              {/* SVG connection lines backdrop linking center hub to outer nodes */}
              <svg className="services-honeycomb-connections">
                {businessServicesData.map(node => (
                  <line
                    key={node.id}
                    className={`services-connection-line ${activeBusId === node.id ? 'active' : ''}`}
                    x1="50%"
                    y1="54%"
                    x2={`${node.posX}%`}
                    y2={`${node.posY}%`}
                    stroke="rgba(15, 23, 42, 0.08)"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>

              {/* Center Hub */}
              <div className="services-honeycomb-node-wrap center-hub" style={{ left: '50%', top: '54%' }}>
                <div className="services-core-halo-pulse"></div>
                <div className="services-core-orbit-ring">
                  <div className="services-orbit-dot"></div>
                </div>
                <div className="services-hexagon-bg">
                  <svg viewBox="0 0 100 115" width="100%" height="100%">
                    <polygon points="50,2 98,30 98,85 50,113 2,85 2,30" />
                  </svg>
                </div>
                <div className="services-hexagon-content">
                  <span className="services-hexagon-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </span>
                  <span className="services-hexagon-title">TANVOX CORE</span>
                </div>
              </div>

              {/* Outer nodes */}
              {businessServicesData.map(node => (
                <div
                  key={node.id}
                  className={`services-honeycomb-node-wrap ${activeBusId === node.id ? 'active' : ''}`}
                  style={{ left: `${node.posX}%`, top: `${node.posY}%` }}
                  onClick={() => setActiveBusId(node.id)}
                >
                  <div className="services-hex-radial-glow"></div>
                  <div className="services-hexagon-bg">
                    <svg viewBox="0 0 100 115" width="100%" height="100%">
                      <polygon points="50,2 98,30 98,85 50,113 2,85 2,30" />
                    </svg>
                  </div>
                  <div className="services-hexagon-content">
                    <span className="services-hexagon-icon">{node.icon}</span>
                    <span className="services-hexagon-title">{node.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Details Panel */}
            <div className="services-honeycomb-details-panel">
              <div className="services-details-pattern"></div>
              <div className="services-details-content">
                <div className="services-details-header">
                  <div className="services-details-icon-box">
                    {activeBusService.icon}
                  </div>
                  <h3 className="services-details-title">{activeBusService.title}</h3>
                </div>

                <p className="services-details-desc">{activeBusService.description}</p>

                {/* Metrics */}
                <div className="services-details-stats">
                  {getMockMetrics(activeBusService.id).map((metric, idx) => (
                    <div key={idx} className="services-detail-stat-card">
                      <span className="services-detail-stat-value">{metric.value}</span>
                      <span className="services-detail-stat-label">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="services-details-list-title">Capabilities</h4>
                  <ul className="services-details-list">
                    {(activeBusService.capabilities || []).map((cap, idx) => (
                      <li key={idx} className="services-details-list-item">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-details-tags">
                  <span className="services-detail-tag-chip">ISO Audited Processes</span>
                  <span className="services-detail-tag-chip">SLA-Backed Delivery</span>
                  <span className="services-detail-tag-chip">Enterprise Ready</span>
                </div>

                <div className="services-details-action">
                  <a href="#contact" className="cta-button">
                    Request Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE TANVOX */}
      <section className="services-why-section services-section" id="why-tanvox">
        <div className="services-container">
          <div className="services-section-header">
            <span className="services-section-subtitle">Why Partner With Us</span>
            <h2 className="services-section-title">The Tanvox Advantage</h2>
            <p className="services-section-description">
              We stand apart through our technological expertise, deep commitment to cybersecurity compliance, and enterprise delivery standards.
            </p>
          </div>

          <div className="services-why-grid">
            {whyChooseUsData.map((item, idx) => (
              <div key={idx} className="services-why-card">
                <div className="services-why-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="services-why-card-title">{item.title}</h3>
                <p className="services-why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – CTA SECTION */}
      <section className="services-cta-section" id="cta">
        <div className="services-container">
          <div className="services-cta-banner">
            <div className="services-cta-glow-1"></div>
            <div className="services-cta-glow-2"></div>
            <div className="services-cta-content">
              <h2 className="services-cta-title">Ready to Elevate Your Digital Operations?</h2>
              <p className="services-cta-desc">
                Partner with Tanvox Technologies. Contact our software engineering and business specialists today to construct a customized blueprint.
              </p>
              <div className="services-cta-actions">
                <a href="#contact" className="services-btn-cta-white">
                  Schedule Consultation
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#portfolio" className="services-btn-cta-outline">
                  View Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
