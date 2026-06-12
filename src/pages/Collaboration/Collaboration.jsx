import { useState } from 'react';

export default function Collaboration() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: 'Technology Partners',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        partnershipType: 'Technology Partners',
        message: ''
      });
      setFormSubmitted(false);
    }, 5000);
  };

  // Benefits List
  const benefits = [
    {
      title: 'Revenue Growth',
      desc: 'Unlock joint sales pipelines, referral incentives, and structured revenue-sharing models.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Expanded Reach',
      desc: 'Extend your market presence globally in enterprise sectors through co-marketing and sales initiatives.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: 'Joint Innovation',
      desc: 'Co-develop next-generation products, SaaS platforms, and integrations built on shared expertise.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
          <line x1="12" y1="2" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'Technical Expertise',
      desc: 'Access specialized engineering resources and frameworks across Cloud, DevOps, AI, and Cybersecurity.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: 'Faster Go-To-Market',
      desc: 'Accelerate project cycles using our pre-built platforms and priority implementation support.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Long-Term Collaboration',
      desc: 'Build trust-based, sustainable alliances focused on long-term mutual customer satisfaction.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  // Categories List
  const categories = [
    {
      title: 'Cloud Partners',
      desc: 'Collaborate to deliver scalable, secure cloud migrations, native architecture, and managed multi-cloud systems.',
      color: 'blue'
    },
    {
      title: 'AI & Data Partners',
      desc: 'Integrate advanced predictive analytics, ML model deployment tools, and intelligent data lakehouses.',
      color: 'purple'
    },
    {
      title: 'Cybersecurity Partners',
      desc: 'Deploy Zero-Trust compliance architectures, identity governance, and threat detection solutions.',
      color: 'red'
    },
    {
      title: 'Infrastructure Partners',
      desc: 'Provide robust hardware integrations, virtualization clusters, and high-availability compute layers.',
      color: 'blue'
    },
    {
      title: 'DevOps Partners',
      desc: 'Optimize CI/CD toolchains, GitOps deployment automations, and container orchestration runtimes.',
      color: 'purple'
    },
    {
      title: 'System Integration Partners',
      desc: 'Ensure seamless system connections, legacy enterprise middleware upgrades, and API gateway routing.',
      color: 'red'
    }
  ];

  // Process Steps
  const steps = [
    { num: '1', title: 'Discover', desc: 'Identify shared goals, alliance synergies, and mutual market fits.' },
    { num: '2', title: 'Evaluate', desc: 'Deep-dive assessment of integration scopes and target business models.' },
    { num: '3', title: 'Align', desc: 'Determine partnership tiering, service levels, and success criteria.' },
    { num: '4', title: 'Onboard', desc: 'Access training sandboxes, documentation toolkits, and shared code.' },
    { num: '5', title: 'Launch', desc: 'Deploy joint offerings and initiate cooperative pipelines.' },
    { num: '6', title: 'Grow', desc: 'Scale customer success models and review strategic business values.' }
  ];

  // Resources List
  const resources = [
    {
      title: 'Technical Support',
      desc: 'Dedicated developer desks, sandbox channels, and 24/7 priority integration assistance.',
      icon: '🔧'
    },
    {
      title: 'Documentation',
      desc: 'Fully mapped RESTful APIs, integration blueprints, wikis, and software repositories.',
      icon: '📖'
    },
    {
      title: 'Training',
      desc: 'Bootcamps, product onboarding guides, and technology certification workflows.',
      icon: '🎓'
    },
    {
      title: 'Co-Marketing',
      desc: 'Co-branded case studies, marketing collateral, webinars, and promotional resources.',
      icon: '📢'
    },
    {
      title: 'BizDev Support',
      desc: 'Strategic pipeline sharing, customer routing, and regular sales mapping reviews.',
      icon: '💼'
    }
  ];

  // Why Us List
  const whyUs = [
    {
      title: 'Enterprise Expertise',
      desc: 'Proven engineering methodologies crafted for Fortune 500 companies and government departments.'
    },
    {
      title: 'Global Delivery Model',
      desc: 'Continuous project execution using regional support desks and secure remote delivery networks.'
    },
    {
      title: 'Innovation Focus',
      desc: 'Relentless proof-of-concept testing, tech stack prototyping, and agile research cycles.'
    },
    {
      title: 'Customer-Centric Approach',
      desc: 'High customer satisfaction and client retention ratings built on transparent Service Level Agreements.'
    }
  ];

  return (
    <div className="tech-partners-page-container">
      {/* 1. Hero Section */}
      <section className="tech-partners-hero">
        <div className="hero-network-overlay"></div>
        <div className="hero-glow-dot-1"></div>
        <div className="hero-glow-dot-2"></div>
        <div className="section-container">
          <div className="tech-hero-content">
            <span className="partners-subtitle">COLLABORATION PORTAL</span>
            <h1 className="partners-title">
              Build Stronger Solutions <br />
              Through <span className="text-red">Strategic</span> Partnerships
            </h1>
            <p className="partners-desc">
              Join the Tanvox Technologies partner ecosystem to co-innovate, expand market capabilities, and deliver next-generation digital transformation tools to global enterprise clients.
            </p>
            <div className="partners-hero-actions">
              <a href="#partner-form" className="cta-button">Become a Partner</a>
              <a href="#contact" className="hero-btn-outline">Talk to Alliance Team</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits of Partnering */}
      <section className="partners-benefits-section">
        <div className="section-container">
          <div className="partners-section-header">
            <span className="section-subtitle">MUTUAL VALUES</span>
            <h2 className="section-title">Benefits of Partnering with Tanvox</h2>
            <p className="section-desc">Unlock strategic business growth, shared development opportunities, and continuous technical innovation.</p>
          </div>
          <div className="partners-benefits-grid">
            {benefits.map((b, idx) => (
              <div className="partner-benefit-card" key={idx}>
                <div className="benefit-icon-wrapper">
                  {b.icon}
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. Partner Resources & Support */}
      <section className="partners-resources-section">
        <div className="section-container">
          <div className="partners-section-header">
            <span className="section-subtitle">PARTNER TOOLKIT</span>
            <h2 className="section-title">Partner Resources & Support</h2>
            <p className="section-desc">Accelerate your team's development curves with our dedicated technology libraries and developer packages.</p>
          </div>
          <div className="partners-resources-grid">
            {resources.map((r, idx) => (
              <div className="partner-resource-card" key={idx}>
                <div className="resource-emoji">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Partner with Tanvox */}
      <section className="partners-why-section">
        <div className="section-container">
          <div className="partners-section-header">
            <span className="section-subtitle">WHY CHOOSE US</span>
            <h2 className="section-title">Why Partner with Tanvox?</h2>
            <p className="section-desc">Align with a world-class technology firm offering premium product support and engineering capacities.</p>
          </div>
          <div className="partners-why-grid">
            {whyUs.map((w, idx) => (
              <div className="partner-why-card" key={idx}>
                <div className="why-decor-line"></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Become a Partner Form */}
      <section className="partners-form-section" id="partner-form">
        <div className="section-container">
          <div className="partners-section-header">
            <span className="section-subtitle">GET IN TOUCH</span>
            <h2 className="section-title">Become a Technology Partner</h2>
            <p className="section-desc">Submit your inquiry, and our partnership management team will contact you within 2 business days.</p>
          </div>

          <div className="partner-form-wrapper">
            <div className="form-glass-container">
              {formSubmitted ? (
                <div className="form-success-alert">
                  <div className="success-icon-box">✓</div>
                  <h3>Submission Successful!</h3>
                  <p>Thank you for your interest in partnering with Tanvox Technologies. Our alliance managers will review your submission and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="partner-inquiry-form">
                  <div className="form-grid-row">
                    <div className="form-input-group">
                      <label htmlFor="companyName">Company Name *</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={errors.companyName ? 'error-border' : ''}
                        placeholder="e.g. Acme Tech Solutions"
                      />
                      {errors.companyName && <span className="field-error-msg">{errors.companyName}</span>}
                    </div>

                    <div className="form-input-group">
                      <label htmlFor="contactPerson">Contact Person *</label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className={errors.contactPerson ? 'error-border' : ''}
                        placeholder="e.g. John Doe"
                      />
                      {errors.contactPerson && <span className="field-error-msg">{errors.contactPerson}</span>}
                    </div>
                  </div>

                  <div className="form-grid-row">
                    <div className="form-input-group">
                      <label htmlFor="email">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'error-border' : ''}
                        placeholder="e.g. john@company.com"
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-input-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? 'error-border' : ''}
                        placeholder="e.g. +1 555-0199"
                      />
                      {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="partnershipType">Partnership Type *</label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                    >
                      <option value="Technology Partners">Technology Partners</option>
                      <option value="Cloud Partners">Cloud Partners</option>
                      <option value="AI & Data Partners">AI & Data Partners</option>
                      <option value="Cybersecurity Partners">Cybersecurity Partners</option>
                      <option value="DevOps Partners">DevOps Partners</option>
                      <option value="System Integration Partners">System Integration Partners</option>
                    </select>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={errors.message ? 'error-border' : ''}
                      placeholder="Briefly describe your technological capabilities and partnership objectives..."
                    ></textarea>
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  <button type="submit" className="cta-button submit-btn">Submit Inquiry</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
