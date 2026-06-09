import { motion } from 'framer-motion';
import aboutImage from '/src/assets/about.png';
import '../../index.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 60, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  });

  const coreValues = [
    {
      name: 'Innovation',
      icon: '💡',
      desc: 'We embrace creativity, encourage experimentation, and continuously explore emerging technologies to deliver innovative solutions.'
    },
    {
      name: 'Integrity',
      icon: '🤝',
      desc: 'We conduct business with honesty, transparency, accountability, and professionalism in every interaction.'
    },
    {
      name: 'Excellence',
      icon: '🏆',
      desc: 'We strive for excellence in every project, ensuring the highest standards of quality, performance, and customer satisfaction.'
    },
    {
      name: 'Collaboration',
      icon: '👥',
      desc: 'We believe great solutions are built through teamwork, partnership, and shared success.'
    },
    {
      name: 'Customer Success',
      icon: '🎯',
      desc: 'Our clients\' success is our success. We focus on understanding their goals and delivering solutions that create measurable impact.'
    },
    {
      name: 'Continuous Learning',
      icon: '📚',
      desc: 'Technology evolves rapidly, and so do we. We continuously invest in learning, skill development, and innovation.'
    },
  ];

  const services = [
    {
      name: 'Software Development',
      icon: '💻',
      desc: 'We design and develop custom software applications, enterprise systems, SaaS platforms, web applications, and mobile solutions tailored to business needs.'
    },
    {
      name: 'Cloud Solutions',
      icon: '☁️',
      desc: 'Our cloud experts help organizations modernize infrastructure, migrate workloads, optimize cloud environments, and build cloud-native applications.'
    },
    {
      name: 'DevOps & Automation',
      icon: '⚙️',
      desc: 'We accelerate software delivery through CI/CD implementation, infrastructure automation, containerization, orchestration, and platform engineering.'
    },
    {
      name: 'Artificial Intelligence',
      icon: '🤖',
      desc: 'We develop AI-powered solutions, machine learning models, intelligent automation systems, predictive analytics, and generative AI applications.'
    },
    {
      name: 'Cybersecurity',
      icon: '🛡️',
      desc: 'We help organizations strengthen security posture through assessments, compliance services, security monitoring, governance, and risk management.'
    },
    {
      name: 'Quality Assurance',
      icon: '✅',
      desc: 'Our QA specialists ensure reliability and performance through manual testing, automation testing, performance testing, and quality engineering.'
    },
    {
      name: 'Digital Transformation',
      icon: '🚀',
      desc: 'We guide organizations through modernization initiatives, process optimization, technology adoption, and innovation strategies.'
    },
  ];

  const industries = [
    { name: 'Banking, Financial Services & Insurance (BFSI)', icon: '🏦' },
    { name: 'Healthcare & Life Sciences', icon: '🏥' },
    { name: 'Retail & E-commerce', icon: '🛒' },
    { name: 'Manufacturing & Industry 4.0', icon: '🏭' },
    { name: 'Logistics & Supply Chain', icon: '🚚' },
    { name: 'Education & EdTech', icon: '🎓' },
    { name: 'Real Estate & Construction', icon: '🏗️' },
    { name: 'Telecommunications', icon: '📱' },
    { name: 'Energy & Utilities', icon: '⚡' },
    { name: 'Government & Public Sector', icon: '🏛️' },
    { name: 'Startups & Emerging Businesses', icon: '🚀' },
  ];

  const leadership = [
    { name: 'Founder & Chief Executive Officer (CEO)', role: 'Visionary leadership focused on innovation, customer success, operational excellence, and sustainable business growth.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Chief Technology Officer (CTO)', role: 'Driving technology strategy, architecture design, research, innovation, and digital transformation initiatives.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'Director of Operations', role: 'Ensuring operational excellence, project governance, resource management, and delivery success.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
    { name: 'Director of Business Development', role: 'Building strategic partnerships, expanding market opportunities, and driving business growth.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
  ];

  const techStack = [
    { category: 'Frontend Technologies', techs: ['React', 'Angular', 'Vue.js', 'Next.js'] },
    { category: 'Backend Technologies', techs: ['Java', '.NET', 'Python', 'Node.js', 'PHP', 'Laravel'] },
    { category: 'Cloud Platforms', techs: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'] },
    { category: 'DevOps & Automation', techs: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'ArgoCD'] },
    { category: 'Databases', techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server', 'Redis'] },
    { category: 'AI & Data Technologies', techs: ['Python', 'TensorFlow', 'OpenAI', 'Machine Learning Frameworks', 'Data Analytics Platforms'] },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="glow-effect glow-1"></div>
          <div className="glow-effect glow-2"></div>
          <div className="glow-effect glow-3"></div>
        </div>
        <div className="hero-particles">
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
        </div>
        <div className="about-hero-container">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <h1 className="hero-title">
              Empowering Businesses Through
              <span className="highlight"> Innovation,</span>
              <br />
              <span className="highlight-blue"> Technology,</span> and
              <span className="highlight-purple"> Digital Excellence</span>
            </h1>
            <p className="hero-desc">
              At Tanvox Technologies, we are passionate about helping organizations transform ideas into innovative digital solutions. We deliver cutting-edge software development, cloud transformation, AI, DevOps automation, and cybersecurity services.
            </p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <a href="#contact" className="btn-primary">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule a Consultation
              </a>
              <a href="#contact" className="btn-secondary">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Us
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <motion.div
            className="premium-card"
            variants={cardVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="who-we-are-content">
              <motion.div className="who-we-are-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                <h2 className="section-title">Who We Are</h2>
                <p className="section-desc">
                  Tanvox Technologies is a trusted technology partner delivering end-to-end digital solutions for startups, small and medium-sized businesses, enterprises, and public sector organizations. Our multidisciplinary team of technology consultants, architects, engineers, developers, DevOps specialists, cloud experts, cybersecurity professionals, and quality assurance specialists work together to solve complex business challenges through technology.
                </p>
                <p className="section-desc">
                  We believe that technology should be an enabler of growth, innovation, and competitive advantage. Our solutions are designed not only to meet today's business needs but also to prepare organizations for future opportunities and challenges.
                </p>
                <div className="who-we-are-highlights">
                  {[
                    { icon: '🌟', title: 'Innovation First', desc: 'Always exploring new technologies' },
                    { icon: '🎯', title: 'Results Driven', desc: 'Focused on measurable outcomes' },
                    { icon: '🌍', title: 'Global Reach', desc: 'Serving clients worldwide' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="highlight-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                    >
                      <div className="highlight-icon">{item.icon}</div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="who-we-are-right" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
                <motion.div
                  className="who-we-are-image-wrapper"
                  initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <img src={aboutImage} alt="About Tanvox Technologies" className="who-we-are-image" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <motion.div
            className="journey-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="journey-orbit"></div>
            <div className="journey-orbit-inner"></div>
            <div className="journey-center">
              <h3>Tanvox</h3>
            </div>
            <div className="journey-particles">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`journey-particle jp-${i + 1}`}></div>
              ))}
            </div>
            <div className="journey-orbit-rotator">
              <motion.div
                className="journey-item journey-item-1"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Foundation</h4>
                <p>Bold vision & core team</p>
              </motion.div>
              <motion.div
                className="journey-item journey-item-2"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Growth</h4>
                <p>500+ projects delivered</p>
              </motion.div>
              <motion.div
                className="journey-item journey-item-3"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Excellence</h4>
                <p>Trusted partner</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Enterprise Mission - Animation - Vision */}
      <section className="section enterprise-section">
        <div className="container">
          <div className="mission-vision-three-col">
            {/* LEFT: Mission Card */}
            <motion.div
              className="enterprise-card mission-card"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="card-illustration">
                🚀
              </div>
              <div className="card-icon-container mission-icon">
                🎯
              </div>
              <h3 className="card-heading">Our Mission</h3>
              <p className="card-description">
                Empowering organizations through innovative technology solutions that enable growth, efficiency, and digital excellence.
              </p>
              <div className="key-points">
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Innovation
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Digital Transformation
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Operational Excellence
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Customer Success
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Business Growth
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Vision Card */}
            <motion.div
              className="enterprise-card vision-card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.15 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="card-illustration">
                🌍
              </div>
              <div className="card-icon-container vision-icon">
                🔮
              </div>
              <h3 className="card-heading">Our Vision</h3>
              <p className="card-description">
                To become a globally recognized technology partner that drives innovation, accelerates digital transformation, and creates sustainable value through advanced technology solutions.
              </p>
              <div className="key-points">
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Global Innovation
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Future-Ready Solutions
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Digital Leadership
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Sustainable Growth
                </div>
                <div className="key-point">
                  <span className="key-point-icon">•</span>
                  Technology Excellence
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Core Values
          </motion.h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 70, scale: 0.85, rotate: index % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.85,
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ y: -15, scale: 1.06, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.name}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-dark">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
          <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Our Expertise
          </motion.p>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 80, scale: 0.8, rotate: index % 3 === 0 ? -4 : index % 3 === 1 ? 0 : 4 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.9,
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ y: -15, scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            We deliver industry-specific solutions that address unique business challenges and regulatory requirements.
          </motion.p>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="industry-card"
                initial={{ opacity: 0, y: 60, scale: 0.75, rotate: index % 2 === 0 ? 5 : -5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ scale: 1.08, y: -8, rotate: index % 2 === 0 ? -3 : 3, zIndex: 10 }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Tanvox Technologies
          </motion.h2>
          <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Your Trusted Technology Partner
          </motion.p>
          <div className="why-choose-grid">
            {[
              { icon: '👥', title: 'Experienced Professionals', desc: 'A highly skilled team of consultants, engineers, developers, architects, and technology specialists.' },
              { icon: '🎯', title: 'Customer-Centric Approach', desc: 'Every solution is designed around your business objectives, challenges, and growth strategy.' },
              { icon: '⚡', title: 'Agile Delivery', desc: 'Agile methodologies enable faster delivery, continuous improvement, and greater flexibility.' },
              { icon: '🛡️', title: 'Quality & Security', desc: 'We follow industry best practices, secure development standards, and rigorous quality controls.' },
              { icon: '🚀', title: 'Innovation-Driven Culture', desc: 'We leverage emerging technologies to create competitive advantages and business value.' },
              { icon: '🤝', title: 'Long-Term Partnership', desc: 'Our commitment extends beyond project delivery through ongoing support, optimization, and strategic guidance.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="why-choose-card"
                initial={{ opacity: 0, y: 70, scale: 0.8, rotate: index % 2 === 0 ? -4 : 4 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.85,
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ y: -15, scale: 1.06, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Leadership Team
          </motion.h2>
          <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Meet Our Leadership
          </motion.p>
          <div className="leadership-grid">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                className="leader-card"
                initial={{ opacity: 0, y: 80, scale: 0.85, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.9,
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ y: -15, scale: 1.06, rotate: index % 2 === 0 ? 3 : -3, zIndex: 10 }}
              >
                <div className="leader-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="leader-role">{member.role}</p>
                <div className="leader-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Technology Excellence */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Technology Excellence
          </motion.h2>
          <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Technologies We Work With
          </motion.p>
          <div className="tech-grid">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, y: 80, scale: 0.8, rotate: index % 3 === 0 ? -5 : index % 3 === 1 ? 0 : 5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.9,
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ y: -15, scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
              >
                <h3 className="tech-category">{stack.category}</h3>
                <div className="tech-list">
                  {stack.techs.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section className="section section-dark">
        <div className="container">
          <motion.div
            className="csr-card"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <div className="csr-content">
              <h2>Corporate Social Responsibility</h2>
              <p>At Tanvox Technologies, we believe technology should create positive social impact. Our commitment extends beyond business success to community development, education, sustainability, and ethical innovation.</p>
              <div className="csr-initiatives">
                {[
                  { icon: '💻', title: 'Digital Literacy & Tech Education', desc: 'Digital literacy and technology education programs' },
                  { icon: '📚', title: 'Educational Support', desc: 'Educational support initiatives' },
                  { icon: '🌱', title: 'Sustainable Practices', desc: 'Sustainable technology practices' },
                  { icon: '🌍', title: 'Environmental Responsibility', desc: 'Environmental responsibility programs' },
                  { icon: '🤲', title: 'Community Outreach', desc: 'Community development and outreach initiatives' },
                ].map((item, index) => (
                  <motion.div key={index} className="csr-item"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="csr-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title centered"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Global Reach
          </motion.h2>
          <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Serving Clients Worldwide
          </motion.p>
          <motion.div
            className="global-map-placeholder"
            initial={{ opacity: 0, y: 80, scale: 0.85, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <div className="map-content">
              <svg viewBox="0 0 800 400" className="world-map">
                <defs>
                  <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff0066', stopOpacity: 0.15 }} />
                    <stop offset="100%" style={{ stopColor: '#001a72', stopOpacity: 0.15 }} />
                  </linearGradient>
                </defs>
                <rect width="800" height="400" fill="url(#mapGrad)" rx="20" />
                <circle cx="150" cy="150" r="8" fill="#ff0066" opacity="0.8">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="120" r="8" fill="#ff0066" opacity="0.8">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="600" cy="180" r="8" fill="#ff0066" opacity="0.8">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="700" cy="250" r="8" fill="#ff0066" opacity="0.8">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1.5s" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" begin="1.5s" />
                </circle>
                <line x1="150" y1="150" x2="400" y2="120" stroke="#ff0066" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="400" y1="120" x2="600" y2="180" stroke="#ff0066" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" begin="0.3s" />
                </line>
                <line x1="600" y1="180" x2="700" y2="250" stroke="#ff0066" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" begin="0.6s" />
                </line>
              </svg>
              <div className="global-text">
                <p>Our solutions support organizations across multiple regions, helping businesses leverage technology to scale operations, improve efficiency, and compete globally. With a flexible delivery model and distributed expertise, we successfully collaborate with clients across different industries and geographical markets.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Careers */}
      <section className="section section-gradient">
        <div className="container">
          <motion.div
            className="careers-card"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <div className="careers-content">
              <h2>Join Our Team</h2>
              <p>We are always looking for talented, passionate, and innovative professionals who want to make an impact through technology.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
                {[
                  'Software Development', 'Cloud Engineering', 'DevOps Engineering',
                  'Quality Assurance & Testing', 'Cybersecurity', 'Business Analysis',
                  'Project Management', 'Sales & Marketing', 'Customer Success'
                ].map((role, i) => (
                  <motion.span
                    key={i}
                    className="tech-badge"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
              <a href="#" className="btn-primary">
                View Open Positions
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container">
          <motion.div
            className="final-cta-card"
            initial={{ opacity: 0, y: 100, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Let's Build the Future Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Whether you're launching a new digital product, modernizing legacy systems, adopting cloud technologies, implementing AI solutions, or accelerating enterprise transformation, Tanvox Technologies is ready to help.
            </motion.p>
            <motion.p
              style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Our team combines innovation, technical expertise, and industry knowledge to deliver solutions that drive meaningful business outcomes.
            </motion.p>
            <motion.div
              style={{ marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Contact Information</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}><strong>Email:</strong> info@tanvox.com</p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}><strong>Phone:</strong> +91 XXXXX XXXXX</p>
              <p style={{ color: 'var(--color-text-muted)' }}><strong>Address:</strong> Hyderabad, Telangana, India</p>
            </motion.div>
            <div className="final-cta-buttons">
              {[
                {
                  label: "Schedule a Meeting",
                  icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>,
                  className: "btn-primary large"
                },
                {
                  label: "Request a Proposal",
                  icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>,
                  className: "btn-secondary large"
                },
                {
                  label: "Speak With Our Experts",
                  icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>,
                  className: "btn-tertiary large"
                }
              ].map((btn, idx) => (
                <motion.a
                  key={idx}
                  href="#contact"
                  className={btn.className}
                  initial={{ opacity: 0, y: 40, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  {btn.icon}
                  {btn.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
