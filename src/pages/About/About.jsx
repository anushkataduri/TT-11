// // import { motion } from 'framer-motion';
// // import aboutImage from '/src/assets/about.png';
// // import '../../index.css';

// // const About = () => {
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.15,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 60, scale: 0.9 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       scale: 1,
// //       transition: {
// //         duration: 0.8,
// //         ease: [0.175, 0.885, 0.32, 1.275],
// //       },
// //     },
// //   };

// //   const titleVariants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.7,
// //         ease: 'easeOut',
// //       },
// //     },
// //   };

// //   const cardVariants = (delay = 0) => ({
// //     hidden: { opacity: 0, y: 60, rotate: -2 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       rotate: 0,
// //       transition: {
// //         duration: 0.8,
// //         delay,
// //         ease: [0.175, 0.885, 0.32, 1.275],
// //       },
// //     },
// //   });

// //   const coreValues = [
// //     {
// //       name: 'Innovation',
// //       icon: '💡',
// //       desc: 'We embrace creativity, encourage experimentation, and continuously explore emerging technologies to deliver innovative solutions.'
// //     },
// //     {
// //       name: 'Integrity',
// //       icon: '🤝',
// //       desc: 'We conduct business with honesty, transparency, accountability, and professionalism in every interaction.'
// //     },
// //     {
// //       name: 'Excellence',
// //       icon: '🏆',
// //       desc: 'We strive for excellence in every project, ensuring the highest standards of quality, performance, and customer satisfaction.'
// //     },
// //     {
// //       name: 'Collaboration',
// //       icon: '👥',
// //       desc: 'We believe great solutions are built through teamwork, partnership, and shared success.'
// //     },
// //     {
// //       name: 'Customer Success',
// //       icon: '🎯',
// //       desc: 'Our clients\' success is our success. We focus on understanding their goals and delivering solutions that create measurable impact.'
// //     },
// //     {
// //       name: 'Continuous Learning',
// //       icon: '📚',
// //       desc: 'Technology evolves rapidly, and so do we. We continuously invest in learning, skill development, and innovation.'
// //     },
// //   ];

// //   const services = [
// //     {
// //       name: 'Software Development',
// //       icon: '💻',
// //       desc: 'We design and develop custom software applications, enterprise systems, SaaS platforms, web applications, and mobile solutions tailored to business needs.'
// //     },
// //     {
// //       name: 'Cloud Solutions',
// //       icon: '☁️',
// //       desc: 'Our cloud experts help organizations modernize infrastructure, migrate workloads, optimize cloud environments, and build cloud-native applications.'
// //     },
// //     {
// //       name: 'DevOps & Automation',
// //       icon: '⚙️',
// //       desc: 'We accelerate software delivery through CI/CD implementation, infrastructure automation, containerization, orchestration, and platform engineering.'
// //     },
// //     {
// //       name: 'Artificial Intelligence',
// //       icon: '🤖',
// //       desc: 'We develop AI-powered solutions, machine learning models, intelligent automation systems, predictive analytics, and generative AI applications.'
// //     },
// //     {
// //       name: 'Cybersecurity',
// //       icon: '🛡️',
// //       desc: 'We help organizations strengthen security posture through assessments, compliance services, security monitoring, governance, and risk management.'
// //     },
// //     {
// //       name: 'Quality Assurance',
// //       icon: '✅',
// //       desc: 'Our QA specialists ensure reliability and performance through manual testing, automation testing, performance testing, and quality engineering.'
// //     },
// //     {
// //       name: 'Digital Transformation',
// //       icon: '🚀',
// //       desc: 'We guide organizations through modernization initiatives, process optimization, technology adoption, and innovation strategies.'
// //     },
// //   ];

// //   const industries = [
// //     { name: 'Banking, Financial Services & Insurance (BFSI)', icon: '🏦' },
// //     { name: 'Healthcare & Life Sciences', icon: '🏥' },
// //     { name: 'Retail & E-commerce', icon: '🛒' },
// //     { name: 'Manufacturing & Industry 4.0', icon: '🏭' },
// //     { name: 'Logistics & Supply Chain', icon: '🚚' },
// //     { name: 'Education & EdTech', icon: '🎓' },
// //     { name: 'Real Estate & Construction', icon: '🏗️' },
// //     { name: 'Telecommunications', icon: '📱' },
// //     { name: 'Energy & Utilities', icon: '⚡' },
// //     { name: 'Government & Public Sector', icon: '🏛️' },
// //     { name: 'Startups & Emerging Businesses', icon: '🚀' },
// //   ];

// //   const leadership = [
// //     { name: 'Founder & Chief Executive Officer (CEO)', role: 'Visionary leadership focused on innovation, customer success, operational excellence, and sustainable business growth.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
// //     { name: 'Chief Technology Officer (CTO)', role: 'Driving technology strategy, architecture design, research, innovation, and digital transformation initiatives.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
// //     { name: 'Director of Operations', role: 'Ensuring operational excellence, project governance, resource management, and delivery success.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
// //     { name: 'Director of Business Development', role: 'Building strategic partnerships, expanding market opportunities, and driving business growth.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
// //   ];

// //   const techStack = [
// //     { category: 'Frontend Technologies', techs: ['React', 'Angular', 'Vue.js', 'Next.js'] },
// //     { category: 'Backend Technologies', techs: ['Java', '.NET', 'Python', 'Node.js', 'PHP', 'Laravel'] },
// //     { category: 'Cloud Platforms', techs: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'] },
// //     { category: 'DevOps & Automation', techs: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'ArgoCD'] },
// //     { category: 'Databases', techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server', 'Redis'] },
// //     { category: 'AI & Data Technologies', techs: ['Python', 'TensorFlow', 'OpenAI', 'Machine Learning Frameworks', 'Data Analytics Platforms'] },
// //   ];

// //   return (
// //     <div className="about-page">
// //       {/* Hero Section */}
// //       <section className="about-hero">
// //         <div className="hero-background">
// //           <div className="glow-effect glow-1"></div>
// //           <div className="glow-effect glow-2"></div>
// //           <div className="glow-effect glow-3"></div>
// //         </div>
// //         <div className="hero-particles">
// //           <div className="hero-particle"></div>
// //           <div className="hero-particle"></div>
// //           <div className="hero-particle"></div>
// //           <div className="hero-particle"></div>
// //           <div className="hero-particle"></div>
// //         </div>
// //         <div className="about-hero-container">
// //           <motion.div
// //             className="hero-left"
// //             initial={{ opacity: 0, x: -80 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
// //           >
// //             <h1 className="hero-title">
// //               Empowering Businesses Through
// //               <span className="highlight"> Innovation,</span>
// //               <br />
// //               <span className="highlight-blue"> Technology,</span> and
// //               <span className="highlight-purple"> Digital Excellence</span>
// //             </h1>
// //             <p className="hero-desc">
// //               At Tanvox Technologies, we are passionate about helping organizations transform ideas into innovative digital solutions. We deliver cutting-edge software development, cloud transformation, AI, DevOps automation, and cybersecurity services.
// //             </p>
// //             <motion.div
// //               className="hero-buttons"
// //               initial={{ opacity: 0, y: 40 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
// //             >
// //               <a href="#contact" className="btn-primary">
// //                 <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
// //                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
// //                   <line x1="16" y1="2" x2="16" y2="6" />
// //                   <line x1="8" y1="2" x2="8" y2="6" />
// //                   <line x1="3" y1="10" x2="21" y2="10" />
// //                 </svg>
// //                 Schedule a Consultation
// //               </a>
// //               <a href="#contact" className="btn-secondary">
// //                 <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
// //                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
// //                 </svg>
// //                 Contact Us
// //               </a>
// //             </motion.div>
// //           </motion.div>

// //         </div>
// //       </section>

// //       {/* Who We Are */}
// //       <section className="section">
// //         <div className="container">
// //           <motion.div
// //             className="premium-card"
// //             variants={cardVariants()}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: '-100px' }}
// //           >
// //             <div className="who-we-are-content">
// //               <motion.div className="who-we-are-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
// //                 <h2 className="section-title">Who We Are</h2>
// //                 <p className="section-desc">
// //                   Tanvox Technologies is a trusted technology partner delivering end-to-end digital solutions for startups, small and medium-sized businesses, enterprises, and public sector organizations. Our multidisciplinary team of technology consultants, architects, engineers, developers, DevOps specialists, cloud experts, cybersecurity professionals, and quality assurance specialists work together to solve complex business challenges through technology.
// //                 </p>
// //                 <p className="section-desc">
// //                   We believe that technology should be an enabler of growth, innovation, and competitive advantage. Our solutions are designed not only to meet today's business needs but also to prepare organizations for future opportunities and challenges.
// //                 </p>
// //                 <div className="who-we-are-highlights">
// //                   {[
// //                     { icon: '🌟', title: 'Innovation First', desc: 'Always exploring new technologies' },
// //                     { icon: '🎯', title: 'Results Driven', desc: 'Focused on measurable outcomes' },
// //                     { icon: '🌍', title: 'Global Reach', desc: 'Serving clients worldwide' }
// //                   ].map((item, idx) => (
// //                     <motion.div
// //                       key={idx}
// //                       className="highlight-item"
// //                       initial={{ opacity: 0, x: -30 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       viewport={{ once: true }}
// //                       transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
// //                     >
// //                       <div className="highlight-icon">{item.icon}</div>
// //                       <div>
// //                         <h4>{item.title}</h4>
// //                         <p>{item.desc}</p>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //               <motion.div className="who-we-are-right" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
// //                 <motion.div
// //                   className="who-we-are-image-wrapper"
// //                   initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
// //                   whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.7, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
// //                   whileHover={{ scale: 1.05, y: -10 }}
// //                 >
// //                   <img src={aboutImage} alt="About Tanvox Technologies" className="who-we-are-image" />
// //                 </motion.div>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Our Journey */}
// //       <section className="section">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             Our Journey
// //           </motion.h2>
// //           <motion.div
// //             className="journey-container"
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <div className="journey-orbit"></div>
// //             <div className="journey-orbit-inner"></div>
// //             <div className="journey-center">
// //               <h3>Tanvox</h3>
// //             </div>
// //             <div className="journey-particles">
// //               {[...Array(10)].map((_, i) => (
// //                 <div key={i} className={`journey-particle jp-${i + 1}`}></div>
// //               ))}
// //             </div>
// //             <div className="journey-orbit-rotator">
// //               <motion.div
// //                 className="journey-item journey-item-1"
// //                 whileHover={{ scale: 1.2, rotate: 5 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <h4>Foundation</h4>
// //                 <p>Bold vision & core team</p>
// //               </motion.div>
// //               <motion.div
// //                 className="journey-item journey-item-2"
// //                 whileHover={{ scale: 1.2, rotate: -5 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <h4>Growth</h4>
// //                 <p>500+ projects delivered</p>
// //               </motion.div>
// //               <motion.div
// //                 className="journey-item journey-item-3"
// //                 whileHover={{ scale: 1.2, rotate: 5 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <h4>Excellence</h4>
// //                 <p>Trusted partner</p>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Premium Enterprise Mission - Animation - Vision */}
// //       <section className="section enterprise-section">
// //         <div className="container">
// //           <div className="mission-vision-three-col">
// //             {/* LEFT: Mission Card */}
// //             <motion.div
// //               className="enterprise-card mission-card"
// //               initial={{ opacity: 0, x: -100 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true, margin: '-100px' }}
// //               transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
// //               whileHover={{ y: -15, scale: 1.02 }}
// //             >
// //               <div className="card-illustration">
// //                 🚀
// //               </div>
// //               <div className="card-icon-container mission-icon">
// //                 🎯
// //               </div>
// //               <h3 className="card-heading">Our Mission</h3>
// //               <p className="card-description">
// //                 Empowering organizations through innovative technology solutions that enable growth, efficiency, and digital excellence.
// //               </p>
// //               <div className="key-points">
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Innovation
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Digital Transformation
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Operational Excellence
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Customer Success
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Business Growth
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* RIGHT: Vision Card */}
// //             <motion.div
// //               className="enterprise-card vision-card"
// //               initial={{ opacity: 0, x: 100 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true, margin: '-100px' }}
// //               transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.15 }}
// //               whileHover={{ y: -15, scale: 1.02 }}
// //             >
// //               <div className="card-illustration">
// //                 🌍
// //               </div>
// //               <div className="card-icon-container vision-icon">
// //                 🔮
// //               </div>
// //               <h3 className="card-heading">Our Vision</h3>
// //               <p className="card-description">
// //                 To become a globally recognized technology partner that drives innovation, accelerates digital transformation, and creates sustainable value through advanced technology solutions.
// //               </p>
// //               <div className="key-points">
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Global Innovation
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Future-Ready Solutions
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Digital Leadership
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Sustainable Growth
// //                 </div>
// //                 <div className="key-point">
// //                   <span className="key-point-icon">•</span>
// //                   Technology Excellence
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Core Values */}
// //       <section className="section">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             Core Values
// //           </motion.h2>
// //           <div className="values-grid">
// //             {coreValues.map((value, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="value-card"
// //                 initial={{ opacity: 0, y: 70, scale: 0.85, rotate: index % 2 === 0 ? -3 : 3 }}
// //                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: index * 0.12,
// //                   duration: 0.85,
// //                   ease: [0.175, 0.885, 0.32, 1.275]
// //                 }}
// //                 whileHover={{ y: -15, scale: 1.06, rotate: index % 2 === 0 ? 2 : -2 }}
// //               >
// //                 <div className="value-icon">{value.icon}</div>
// //                 <h3>{value.name}</h3>
// //                 <p>{value.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* What We Do */}
// //       <section className="section section-dark">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             What We Do
// //           </motion.h2>
// //           <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //             Our Expertise
// //           </motion.p>
// //           <div className="services-grid">
// //             {services.map((service, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="service-card"
// //                 initial={{ opacity: 0, y: 80, scale: 0.8, rotate: index % 3 === 0 ? -4 : index % 3 === 1 ? 0 : 4 }}
// //                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: index * 0.1,
// //                   duration: 0.9,
// //                   ease: [0.175, 0.885, 0.32, 1.275]
// //                 }}
// //                 whileHover={{ y: -15, scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
// //               >
// //                 <div className="service-icon">{service.icon}</div>
// //                 <h3>{service.name}</h3>
// //                 <p>{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Industries We Serve */}
// //       <section className="section">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             Industries We Serve
// //           </motion.h2>
// //           <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //             We deliver industry-specific solutions that address unique business challenges and regulatory requirements.
// //           </motion.p>
// //           <div className="industries-grid">
// //             {industries.map((industry, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="industry-card"
// //                 initial={{ opacity: 0, y: 60, scale: 0.75, rotate: index % 2 === 0 ? 5 : -5 }}
// //                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: index * 0.08,
// //                   duration: 0.8,
// //                   ease: [0.175, 0.885, 0.32, 1.275]
// //                 }}
// //                 whileHover={{ scale: 1.08, y: -8, rotate: index % 2 === 0 ? -3 : 3, zIndex: 10 }}
// //               >
// //                 <div className="industry-icon">{industry.icon}</div>
// //                 <h3>{industry.name}</h3>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="section section-dark">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             Why Choose Tanvox Technologies
// //           </motion.h2>
// //           <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //             Your Trusted Technology Partner
// //           </motion.p>
// //           <div className="why-choose-grid">
// //             {[
// //               { icon: '👥', title: 'Experienced Professionals', desc: 'A highly skilled team of consultants, engineers, developers, architects, and technology specialists.' },
// //               { icon: '🎯', title: 'Customer-Centric Approach', desc: 'Every solution is designed around your business objectives, challenges, and growth strategy.' },
// //               { icon: '⚡', title: 'Agile Delivery', desc: 'Agile methodologies enable faster delivery, continuous improvement, and greater flexibility.' },
// //               { icon: '🛡️', title: 'Quality & Security', desc: 'We follow industry best practices, secure development standards, and rigorous quality controls.' },
// //               { icon: '🚀', title: 'Innovation-Driven Culture', desc: 'We leverage emerging technologies to create competitive advantages and business value.' },
// //               { icon: '🤝', title: 'Long-Term Partnership', desc: 'Our commitment extends beyond project delivery through ongoing support, optimization, and strategic guidance.' },
// //             ].map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="why-choose-card"
// //                 initial={{ opacity: 0, y: 70, scale: 0.8, rotate: index % 2 === 0 ? -4 : 4 }}
// //                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: index * 0.1,
// //                   duration: 0.85,
// //                   ease: [0.175, 0.885, 0.32, 1.275]
// //                 }}
// //                 whileHover={{ y: -15, scale: 1.06, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
// //               >
// //                 <div className="why-icon">{item.icon}</div>
// //                 <h3>{item.title}</h3>
// //                 <p>{item.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Leadership Team */}
// //       <section className="section">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             Leadership Team
// //           </motion.h2>
// //           <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //             Meet Our Leadership
// //           </motion.p>
// //           <div className="leadership-grid">
// //             {leadership.map((member, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="leader-card"
// //                 initial={{ opacity: 0, y: 80, scale: 0.85, rotate: index % 2 === 0 ? -5 : 5 }}
// //                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: index * 0.12,
// //                   duration: 0.9,
// //                   ease: [0.175, 0.885, 0.32, 1.275]
// //                 }}
// //                 whileHover={{ y: -15, scale: 1.06, rotate: index % 2 === 0 ? 3 : -3, zIndex: 10 }}
// //               >
// //                 <div className="leader-image">
// //                   <img src={member.image} alt={member.name} />
// //                 </div>
// //                 <h3>{member.name}</h3>
// //                 <p className="leader-role">{member.role}</p>
// //                 <div className="leader-social">
// //                   <a href="#">
// //                     <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
// //                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
// //                     </svg>
// //                   </a>
// //                   <a href="#">
// //                     <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
// //                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //                     </svg>
// //                   </a>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Technology Excellence */}
// //       <section className="section">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             Technology Excellence
// //           </motion.h2>
// //           <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //             Technologies We Work With
// //           </motion.p>
// //           <div className="tech-grid">
// //             {techStack.map((stack, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="tech-card"
// //                 initial={{ opacity: 0, y: 80, scale: 0.8, rotate: index % 3 === 0 ? -5 : index % 3 === 1 ? 0 : 5 }}
// //                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: index * 0.1,
// //                   duration: 0.9,
// //                   ease: [0.175, 0.885, 0.32, 1.275]
// //                 }}
// //                 whileHover={{ y: -15, scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
// //               >
// //                 <h3 className="tech-category">{stack.category}</h3>
// //                 <div className="tech-list">
// //                   {stack.techs.map((tech, i) => (
// //                     <span key={i} className="tech-badge">{tech}</span>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Corporate Social Responsibility */}
// //       <section className="section section-dark">
// //         <div className="container">
// //           <motion.div
// //             className="csr-card"
// //             initial={{ opacity: 0, y: 80, scale: 0.9 }}
// //             whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
// //           >
// //             <div className="csr-content">
// //               <h2>Corporate Social Responsibility</h2>
// //               <p>At Tanvox Technologies, we believe technology should create positive social impact. Our commitment extends beyond business success to community development, education, sustainability, and ethical innovation.</p>
// //               <div className="csr-initiatives">
// //                 {[
// //                   { icon: '💻', title: 'Digital Literacy & Tech Education', desc: 'Digital literacy and technology education programs' },
// //                   { icon: '📚', title: 'Educational Support', desc: 'Educational support initiatives' },
// //                   { icon: '🌱', title: 'Sustainable Practices', desc: 'Sustainable technology practices' },
// //                   { icon: '🌍', title: 'Environmental Responsibility', desc: 'Environmental responsibility programs' },
// //                   { icon: '🤲', title: 'Community Outreach', desc: 'Community development and outreach initiatives' },
// //                 ].map((item, index) => (
// //                   <motion.div key={index} className="csr-item"
// //                     initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
// //                   >
// //                     <div className="csr-icon">{item.icon}</div>
// //                     <h4>{item.title}</h4>
// //                     <p>{item.desc}</p>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Global Reach */}
// //       <section className="section">
// //         <div className="container">
// //           <motion.h2
// //             className="section-title centered"
// //             variants={titleVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >
// //             Global Reach
// //           </motion.h2>
// //           <motion.p className="section-desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //             Serving Clients Worldwide
// //           </motion.p>
// //           <motion.div
// //             className="global-map-placeholder"
// //             initial={{ opacity: 0, y: 80, scale: 0.85, rotate: -2 }}
// //             whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
// //           >
// //             <div className="map-content">
// //               <svg viewBox="0 0 800 400" className="world-map">
// //                 <defs>
// //                   <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// //                     <stop offset="0%" style={{ stopColor: '#ff0066', stopOpacity: 0.15 }} />
// //                     <stop offset="100%" style={{ stopColor: '#001a72', stopOpacity: 0.15 }} />
// //                   </linearGradient>
// //                 </defs>
// //                 <rect width="800" height="400" fill="url(#mapGrad)" rx="20" />
// //                 <circle cx="150" cy="150" r="8" fill="#ff0066" opacity="0.8">
// //                   <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
// //                   <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
// //                 </circle>
// //                 <circle cx="400" cy="120" r="8" fill="#ff0066" opacity="0.8">
// //                   <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
// //                   <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
// //                 </circle>
// //                 <circle cx="600" cy="180" r="8" fill="#ff0066" opacity="0.8">
// //                   <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1s" />
// //                   <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
// //                 </circle>
// //                 <circle cx="700" cy="250" r="8" fill="#ff0066" opacity="0.8">
// //                   <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1.5s" />
// //                   <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" begin="1.5s" />
// //                 </circle>
// //                 <line x1="150" y1="150" x2="400" y2="120" stroke="#ff0066" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
// //                   <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" />
// //                 </line>
// //                 <line x1="400" y1="120" x2="600" y2="180" stroke="#ff0066" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
// //                   <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" begin="0.3s" />
// //                 </line>
// //                 <line x1="600" y1="180" x2="700" y2="250" stroke="#ff0066" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
// //                   <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" begin="0.6s" />
// //                 </line>
// //               </svg>
// //               <div className="global-text">
// //                 <p>Our solutions support organizations across multiple regions, helping businesses leverage technology to scale operations, improve efficiency, and compete globally. With a flexible delivery model and distributed expertise, we successfully collaborate with clients across different industries and geographical markets.</p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Careers */}
// //       <section className="section section-gradient">
// //         <div className="container">
// //           <motion.div
// //             className="careers-card"
// //             initial={{ opacity: 0, y: 80, scale: 0.9 }}
// //             whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
// //           >
// //             <div className="careers-content">
// //               <h2>Join Our Team</h2>
// //               <p>We are always looking for talented, passionate, and innovative professionals who want to make an impact through technology.</p>
// //               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
// //                 {[
// //                   'Software Development', 'Cloud Engineering', 'DevOps Engineering',
// //                   'Quality Assurance & Testing', 'Cybersecurity', 'Business Analysis',
// //                   'Project Management', 'Sales & Marketing', 'Customer Success'
// //                 ].map((role, i) => (
// //                   <motion.span
// //                     key={i}
// //                     className="tech-badge"
// //                     initial={{ opacity: 0, y: 30, scale: 0.8 }}
// //                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
// //                     whileHover={{ scale: 1.15, rotate: 3 }}
// //                   >
// //                     {role}
// //                   </motion.span>
// //                 ))}
// //               </div>
// //               <a href="#" className="btn-primary">
// //                 View Open Positions
// //                 <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
// //                   <line x1="5" y1="12" x2="19" y2="12" />
// //                   <polyline points="12 5 19 12 12 19" />
// //                 </svg>
// //               </a>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Final CTA */}
// //       <section className="section final-cta">
// //         <div className="container">
// //           <motion.div
// //             className="final-cta-card"
// //             initial={{ opacity: 0, y: 100, scale: 0.85 }}
// //             whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
// //           >
// //             <motion.h2
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.1, duration: 0.7 }}
// //             >
// //               Let's Build the Future Together
// //             </motion.h2>
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.2, duration: 0.7 }}
// //             >
// //               Whether you're launching a new digital product, modernizing legacy systems, adopting cloud technologies, implementing AI solutions, or accelerating enterprise transformation, Tanvox Technologies is ready to help.
// //             </motion.p>
// //             <motion.p
// //               style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.3, duration: 0.7 }}
// //             >
// //               Our team combines innovation, technical expertise, and industry knowledge to deliver solutions that drive meaningful business outcomes.
// //             </motion.p>
// //             <motion.div
// //               style={{ marginBottom: '2rem' }}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.4, duration: 0.7 }}
// //             >
// //               <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Contact Information</h3>
// //               <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}><strong>Email:</strong> info@tanvox.com</p>
// //               <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}><strong>Phone:</strong> +91 XXXXX XXXXX</p>
// //               <p style={{ color: 'var(--color-text-muted)' }}><strong>Address:</strong> Hyderabad, Telangana, India</p>
// //             </motion.div>
// //             <div className="final-cta-buttons">
// //               {[
// //                 {
// //                   label: "Schedule a Meeting",
// //                   icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
// //                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
// //                     <line x1="16" y1="2" x2="16" y2="6" />
// //                     <line x1="8" y1="2" x2="8" y2="6" />
// //                     <line x1="3" y1="10" x2="21" y2="10" />
// //                   </svg>,
// //                   className: "btn-primary large"
// //                 },
// //                 {
// //                   label: "Request a Proposal",
// //                   icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
// //                     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
// //                     <polyline points="14 2 14 8 20 8" />
// //                   </svg>,
// //                   className: "btn-secondary large"
// //                 },
// //                 {
// //                   label: "Speak With Our Experts",
// //                   icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
// //                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
// //                   </svg>,
// //                   className: "btn-tertiary large"
// //                 }
// //               ].map((btn, idx) => (
// //                 <motion.a
// //                   key={idx}
// //                   href="#contact"
// //                   className={btn.className}
// //                   initial={{ opacity: 0, y: 40, scale: 0.85 }}
// //                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: 0.5 + idx * 0.1, duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
// //                   whileHover={{ y: -8, scale: 1.05 }}
// //                 >
// //                   {btn.icon}
// //                   {btn.label}
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default About;

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import aboutImage from "../../assets/about.png";
// import heroAbout from "../../assets/heroAbout.png";
// import "./About.css";

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 60, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.175, 0.885, 0.32, 1.275],
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   const cardVariants = (delay = 0) => ({
//     hidden: { opacity: 0, y: 60, rotate: -2 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotate: 0,
//       transition: {
//         duration: 0.8,
//         delay,
//         ease: [0.175, 0.885, 0.32, 1.275],
//       },
//     },
//   });

//   const [activeValue, setActiveValue] = useState(0);
//   const [activeJourney, setActiveJourney] = useState(1);
//   const coreValues = [
//     {
//       name: "Innovation",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
//       desc: "We embrace creativity, encourage experimentation, and continuously explore emerging technologies to deliver innovative solutions.",
//     },
//     {
//       name: "Integrity",
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
//       desc: "We conduct business with honesty, transparency, accountability, and professionalism in every interaction.",
//     },
//     {
//       name: "Excellence",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
//       desc: "We strive for excellence in every project, ensuring the highest standards of quality, performance, and customer satisfaction.",
//     },
//     {
//       name: "Collaboration",
//       image:
//         "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
//       desc: "We believe great solutions are built through teamwork, partnership, and shared success.",
//     },
//     {
//       name: "Customer Success",
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
//       desc: "Our clients' success is our success. We focus on understanding their goals and delivering solutions that create measurable impact.",
//     },
//     {
//       name: "Continuous Learning",
//       image:
//         "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800&auto=format&fit=crop",
//       desc: "Technology evolves rapidly, and so do we. We continuously invest in learning, skill development, and innovation.",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveValue((prev) => (prev + 1) % coreValues.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [coreValues.length]);

//   const services = [
//     {
//       name: "Software Development",
//       icon: "💻",
//       desc: "We design and develop custom software applications, enterprise systems, SaaS platforms, web applications, and mobile solutions tailored to business needs.",
//     },
//     {
//       name: "Cloud Solutions",
//       icon: "☁️",
//       desc: "Our cloud experts help organizations modernize infrastructure, migrate workloads, optimize cloud environments, and build cloud-native applications.",
//     },
//     {
//       name: "DevOps & Automation",
//       icon: "⚙️",
//       desc: "We accelerate software delivery through CI/CD implementation, infrastructure automation, containerization, orchestration, and platform engineering.",
//     },
//     {
//       name: "Artificial Intelligence",
//       icon: "🤖",
//       desc: "We develop AI-powered solutions, machine learning models, intelligent automation systems, predictive analytics, and generative AI applications.",
//     },
//     {
//       name: "Cybersecurity",
//       icon: "🛡️",
//       desc: "We help organizations strengthen security posture through assessments, compliance services, security monitoring, governance, and risk management.",
//     },
//     {
//       name: "Quality Assurance",
//       icon: "✅",
//       desc: "Our QA specialists ensure reliability and performance through manual testing, automation testing, performance testing, and quality engineering.",
//     },
//     {
//       name: "Digital Transformation",
//       icon: "🚀",
//       desc: "We guide organizations through modernization initiatives, process optimization, technology adoption, and innovation strategies.",
//     },
//   ];

//   const industries = [
//     {
//       name: "Banking & Finance",
//       desc: "Secure, scalable platforms for digital banking, payments, and financial analytics.",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
//     },
//     {
//       name: "Healthcare",
//       desc: "HIPAA-compliant telehealth platforms and electronic health record systems.",
//       image:
//         "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
//     },
//     {
//       name: "E-commerce",
//       desc: "High-performance digital storefronts and supply chain management solutions.",
//       image:
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
//     },
//     {
//       name: "Manufacturing",
//       desc: "Industry 4.0 solutions, IoT integration, and predictive maintenance.",
//       image:
//         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
//     },
//     {
//       name: "Logistics",
//       desc: "Real-time fleet tracking, routing optimization, and inventory systems.",
//       image:
//         "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
//     },
//     {
//       name: "Education",
//       desc: "Interactive virtual classrooms and scalable learning management systems.",
//       image:
//         "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
//     },
//   ];

//   const leadership = [
//     {
//       name: "Founder & Chief Executive Officer (CEO)",
//       role: "Visionary leadership focused on innovation, customer success, operational excellence, and sustainable business growth.",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     },
//     {
//       name: "Chief Technology Officer (CTO)",
//       role: "Driving technology strategy, architecture design, research, innovation, and digital transformation initiatives.",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
//     },
//     {
//       name: "Director of Operations",
//       role: "Ensuring operational excellence, project governance, resource management, and delivery success.",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
//     },
//     {
//       name: "Director of Business Development",
//       role: "Building strategic partnerships, expanding market opportunities, and driving business growth.",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//     },
//   ];

//   const techStack = [
//     {
//       category: "Frontend Technologies",
//       techs: ["React", "Angular", "Vue.js", "Next.js"],
//     },
//     {
//       category: "Backend Technologies",
//       techs: ["Java", ".NET", "Python", "Node.js", "PHP", "Laravel"],
//     },
//     {
//       category: "Cloud Platforms",
//       techs: [
//         "Amazon Web Services (AWS)",
//         "Microsoft Azure",
//         "Google Cloud Platform (GCP)",
//       ],
//     },
//     {
//       category: "DevOps & Automation",
//       techs: [
//         "Jenkins",
//         "GitHub Actions",
//         "GitLab CI/CD",
//         "Docker",
//         "Kubernetes",
//         "Terraform",
//         "Ansible",
//         "ArgoCD",
//       ],
//     },
//     {
//       category: "Databases",
//       techs: [
//         "MySQL",
//         "PostgreSQL",
//         "MongoDB",
//         "Microsoft SQL Server",
//         "Redis",
//       ],
//     },
//     {
//       category: "AI & Data Technologies",
//       techs: [
//         "Python",
//         "TensorFlow",
//         "OpenAI",
//         "Machine Learning Frameworks",
//         "Data Analytics Platforms",
//       ],
//     },
//   ];

//   return (
//     <div className="about-page">
//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="hero-background">
//           <div className="glow-effect glow-1"></div>
//           <div className="glow-effect glow-2"></div>
//           <div className="glow-effect glow-3"></div>
//         </div>
//         <div className="hero-particles">
//           <div className="hero-particle"></div>
//           <div className="hero-particle"></div>
//           <div className="hero-particle"></div>
//           <div className="hero-particle"></div>
//           <div className="hero-particle"></div>
//         </div>
//         <div className="about-hero-container">
//           <motion.div
//             className="hero-left"
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
//           >
//             <h1 className="hero-title">
//               Empowering Businesses Through
//               <span className="highlight"> Innovation,</span>
//               <br />
//               <span className="highlight-blue"> Technology,</span> and
//               <span className="highlight-purple"> Digital Excellence</span>
//             </h1>
//             <p className="hero-desc">
//               At Tanvox Technologies, we are passionate about helping
//               organizations transform ideas into innovative digital solutions.
//               We deliver cutting-edge software development, cloud
//               transformation, AI, DevOps automation, and cybersecurity services.
//             </p>
//             <motion.div
//               className="hero-buttons"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
//             >
//               <a href="#contact" className="btn-primary">
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 Schedule a Consultation
//               </a>
//               <a href="#contact" className="btn-secondary">
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                 </svg>
//                 Contact Us
//               </a>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             className="hero-right"
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
//           >
//             <div className="about-hero-image-wrapper">
//               <img src={heroAbout} alt="About Tanvox Hero" className="about-hero-img" />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section className="section">
//         <div className="container">
//           <motion.div
//             className="premium-card"
//             variants={cardVariants()}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="who-we-are-content">
//               <motion.div
//                 className="who-we-are-left"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >
//                 <h2 className="section-title">Who We Are</h2>
//                 <p className="section-desc">
//                   Tanvox Technologies is a trusted technology partner delivering
//                   end-to-end digital solutions for startups, small and
//                   medium-sized businesses, enterprises, and public sector
//                   organizations. Our multidisciplinary team of technology
//                   consultants, architects, engineers, developers, DevOps
//                   specialists, cloud experts, cybersecurity professionals, and
//                   quality assurance specialists work together to solve complex
//                   business challenges through technology.
//                 </p>
//                 <p className="section-desc">
//                   We believe that technology should be an enabler of growth,
//                   innovation, and competitive advantage. Our solutions are
//                   designed not only to meet today's business needs but also to
//                   prepare organizations for future opportunities and challenges.
//                 </p>
//                 <div className="who-we-are-highlights">
//                   {[
//                     {
//                       icon: "🌟",
//                       title: "Innovation First",
//                       desc: "Always exploring new technologies",
//                     },
//                     {
//                       icon: "🎯",
//                       title: "Results Driven",
//                       desc: "Focused on measurable outcomes",
//                     },
//                     {
//                       icon: "🌍",
//                       title: "Global Reach",
//                       desc: "Serving clients worldwide",
//                     },
//                   ].map((item, idx) => (
//                     <motion.div
//                       key={idx}
//                       className="highlight-item"
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
//                     >
//                       <div className="highlight-icon">{item.icon}</div>
//                       <div>
//                         <h4>{item.title}</h4>
//                         <p>{item.desc}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//               <motion.div
//                 className="who-we-are-right"
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//               >
//                 <motion.div
//                   className="who-we-are-image-wrapper"
//                   initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
//                   whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.7,
//                     delay: 0.3,
//                     ease: [0.175, 0.885, 0.32, 1.275],
//                   }}
//                   whileHover={{ scale: 1.05, y: -10 }}
//                 >
//                   <img
//                     src={aboutImage}
//                     alt="About Tanvox Technologies"
//                     className="who-we-are-image"
//                   />
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Journey */}
//       <section className="section" style={{ background: "#FFFFFF" }}>
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             style={{ marginBottom: "4rem" }}
//           >
//             Our Journey
//           </motion.h2>

//           <div
//             className="journey-pill-container"
//             style={{
//               position: "relative",
//               width: "100%",
//               maxWidth: "1100px",
//               margin: "0 auto",
//               border: "2px solid #14B8A6",
//               borderRadius: "200px",
//               display: "flex",
//               padding: "4rem 0",
//               background: "#FFFFFF",
//             }}
//           >
//             {/* Glowing highlight circle */}
//             <motion.div
//               className="journey-glow-highlight"
//               animate={{ x: `${activeJourney * 100}%` }}
//               transition={{ type: "spring", stiffness: 120, damping: 20 }}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: 0,
//                 marginTop: "-180px",
//                 width: "33.333%",
//                 height: "360px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
//                 boxShadow:
//                   "inset 20px 0 30px -10px rgba(234, 179, 8, 0.4), inset -20px 0 30px -10px rgba(59, 130, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.2)",
//                 border: "1px solid rgba(16, 185, 129, 0.3)",
//                 zIndex: 1,
//                 pointerEvents: "none",
//               }}
//             />

//             {/* Content Columns */}
//             {[
//               {
//                 subtitle: "VISION & INCEPTION",
//                 title: "Bridging the gap",
//                 desc: "Founded with a vision to bridge the gap between business challenges and technological innovation, Tanvox Technologies has grown into a reliable technology consulting and solutions provider.",
//                 link: "Explore our roots",
//               },
//               {
//                 subtitle: "TRACK RECORD",
//                 title: "Delivering excellence",
//                 desc: "Over the years, we have successfully delivered custom software applications, enterprise platforms, cloud-native solutions, automation frameworks, AI-driven systems, and digital transformation initiatives across multiple industries.",
//                 link: "View our impact",
//               },
//               {
//                 subtitle: "FUTURE READY",
//                 title: "Continuous learning",
//                 desc: "Our journey is defined by continuous learning, technological excellence, and a commitment to delivering value-driven solutions that help organizations remain agile, competitive, and future-ready.",
//                 link: "Join our journey",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="journey-pill-col"
//                 onMouseEnter={() => setActiveJourney(idx)}
//                 style={{
//                   flex: 1,
//                   textAlign: "center",
//                   padding: "0 3rem",
//                   position: "relative",
//                   zIndex: 2,
//                   cursor: "pointer",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "0.8rem",
//                     fontWeight: 600,
//                     letterSpacing: "1px",
//                     color: "#374151",
//                     marginBottom: "1rem",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {item.subtitle}
//                 </div>
//                 <h3
//                   style={{
//                     fontSize: "1.4rem",
//                     fontWeight: 700,
//                     color: "#111827",
//                     marginBottom: "1.5rem",
//                     lineHeight: 1.3,
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: "0.95rem",
//                     color: "#6B7280",
//                     lineHeight: 1.6,
//                     marginBottom: "2rem",
//                   }}
//                 >
//                   {item.desc}
//                 </p>
//                 <a
//                   href="#"
//                   style={{
//                     color: "#111827",
//                     fontWeight: 700,
//                     fontSize: "1.1rem",
//                     display: "inline-flex",
//                     alignItems: "center",
//                     textDecoration: "none",
//                     gap: "0.5rem",
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: "#0EA5E9",
//                       fontSize: "1.2rem",
//                       fontWeight: 900,
//                     }}
//                   >
//                     →
//                   </span>{" "}
//                   {item.link}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Premium Enterprise Mission & Vision */}
//       <section className="section" style={{ background: "#F8FAFC" }}>
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             style={{ marginBottom: "4rem" }}
//           >
//             Mission & Vision
//           </motion.h2>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//               gap: "3rem",
//               maxWidth: "1000px",
//               margin: "0 auto",
//             }}
//           >
//             {/* Mission Card */}
//             <motion.div
//               style={{
//                 background: "#FFFFFF",
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//             >
//               <div style={{ height: "240px", overflow: "hidden" }}>
//                 <img
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
//                   alt="Our Mission"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div style={{ padding: "3rem 2.5rem" }}>
//                 <h3
//                   style={{
//                     fontSize: "1.8rem",
//                     color: "#111827",
//                     marginBottom: "1rem",
//                     fontWeight: 700,
//                   }}
//                 >
//                   Our Mission
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: "1.05rem",
//                     color: "#4B5563",
//                     lineHeight: 1.6,
//                     marginBottom: "2rem",
//                   }}
//                 >
//                   Empowering organizations through innovative technology
//                   solutions that enable growth, efficiency, and digital
//                   excellence.
//                 </p>
//                 <div style={{ display: "grid", gap: "1rem" }}>
//                   {[
//                     "Innovation",
//                     "Digital Transformation",
//                     "Operational Excellence",
//                     "Customer Success",
//                     "Business Growth",
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.75rem",
//                         color: "#374151",
//                         fontWeight: 500,
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: "#10B981",
//                           fontSize: "1.2rem",
//                           fontWeight: 800,
//                         }}
//                       >
//                         ✓
//                       </span>{" "}
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Vision Card */}
//             <motion.div
//               style={{
//                 background: "#FFFFFF",
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
//               whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//             >
//               <div style={{ height: "240px", overflow: "hidden" }}>
//                 <img
//                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
//                   alt="Our Vision"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div style={{ padding: "3rem 2.5rem" }}>
//                 <h3
//                   style={{
//                     fontSize: "1.8rem",
//                     color: "#111827",
//                     marginBottom: "1rem",
//                     fontWeight: 700,
//                   }}
//                 >
//                   Our Vision
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: "1.05rem",
//                     color: "#4B5563",
//                     lineHeight: 1.6,
//                     marginBottom: "2rem",
//                   }}
//                 >
//                   To become a globally recognized technology partner that drives
//                   innovation, accelerates digital transformation, and creates
//                   sustainable value.
//                 </p>
//                 <div style={{ display: "grid", gap: "1rem" }}>
//                   {[
//                     "Global Innovation",
//                     "Future-Ready Solutions",
//                     "Digital Leadership",
//                     "Sustainable Growth",
//                     "Technology Excellence",
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.75rem",
//                         color: "#374151",
//                         fontWeight: 500,
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: "#3B82F6",
//                           fontSize: "1.2rem",
//                           fontWeight: 800,
//                         }}
//                       >
//                         ✓
//                       </span>{" "}
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="section">
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             variants={titleVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Core Values
//           </motion.h2>
//           <div className="values-showcase-container">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeValue}
//                 className="showcase-slider"
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.98 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               >
//                 {/* Left Side: Image */}
//                 <div className="showcase-image-container">
//                   <div className="showcase-image-overlay"></div>
//                   <img
//                     src={coreValues[activeValue].image}
//                     alt={coreValues[activeValue].name}
//                     className="showcase-image"
//                   />
//                 </div>

//                 {/* Right Side: Content */}
//                 <div className="showcase-content-container">
//                   <div className="showcase-content-wrapper">
//                     <h3 className="showcase-title">
//                       {coreValues[activeValue].name}
//                     </h3>
//                     <p className="showcase-desc">
//                       {coreValues[activeValue].desc}
//                     </p>
//                   </div>

//                   {/* Controls */}
//                   <div className="showcase-controls">
//                     <div className="showcase-nav">
//                       <button
//                         className="showcase-btn"
//                         onClick={() =>
//                           setActiveValue((prev) =>
//                             prev === 0 ? coreValues.length - 1 : prev - 1,
//                           )
//                         }
//                       >
//                         ←
//                       </button>
//                       <button
//                         className="showcase-btn"
//                         onClick={() =>
//                           setActiveValue(
//                             (prev) => (prev + 1) % coreValues.length,
//                           )
//                         }
//                       >
//                         →
//                       </button>
//                     </div>

//                     {/* Progress Indicator */}
//                     <div className="showcase-progress">
//                       {coreValues.map((_, idx) => (
//                         <div
//                           key={idx}
//                           className={`progress-dot ${idx === activeValue ? "active" : ""}`}
//                           onClick={() => setActiveValue(idx)}
//                         ></div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="section section-dark">
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             variants={titleVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             What We Do
//           </motion.h2>
//           <motion.p
//             className="section-desc"
//             style={{
//               textAlign: "center",
//               maxWidth: "800px",
//               margin: "0 auto 3rem auto",
//             }}
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Expertise
//           </motion.p>
//           <div className="services-grid">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="service-card"
//                 initial={{
//                   opacity: 0,
//                   y: 80,
//                   scale: 0.8,
//                   rotate: index % 3 === 0 ? -4 : index % 3 === 1 ? 0 : 4,
//                 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.1,
//                   duration: 0.9,
//                   ease: [0.175, 0.885, 0.32, 1.275],
//                 }}
//                 whileHover={{
//                   y: -15,
//                   scale: 1.05,
//                   rotate: index % 2 === 0 ? 2 : -2,
//                   zIndex: 10,
//                 }}
//               >
//                 <div className="service-icon">{service.icon}</div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries We Serve */}
//       <section className="section">
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             variants={titleVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Industries We Serve
//           </motion.h2>
//           <motion.p
//             className="section-desc"
//             style={{
//               textAlign: "center",
//               maxWidth: "800px",
//               margin: "0 auto 1.5rem auto",
//             }}
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             We deliver industry-specific solutions that address unique business
//             challenges and regulatory requirements.
//           </motion.p>
//           <div className="industries-grid">
//             {industries.map((industry, index) => (
//               <motion.div
//                 key={index}
//                 className="industry-card"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.1,
//                   duration: 0.6,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   y: -5,
//                   boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
//                 }}
//               >
//                 <div className="industry-content">
//                   <h3>{industry.name}</h3>
//                   <p>{industry.desc}</p>
//                 </div>
//                 <div className="industry-image-wrapper">
//                   <img
//                     src={industry.image}
//                     alt={industry.name}
//                     className="industry-image"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - Premium AI Ecosystem */}
//       <section className="section ecosystem-section">
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             variants={titleVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             style={{ color: "#111827", marginBottom: "10px" }}
//           >
//             Why Choose Tanvox Technologies
//           </motion.h2>
//           <motion.p
//             className="section-desc"
//             style={{
//               textAlign: "center",
//               maxWidth: "800px",
//               margin: "0 auto 1.5rem auto",
//               color: "#4B5563",
//             }}
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Enter Our Technology Ecosystem
//           </motion.p>

//           <div className="ai-ecosystem-wrapper">
//             <div className="ai-core-container">
//               <div className="ai-core-glow"></div>
//               <div className="ai-core-sphere">
//                 <div className="core-inner-ring"></div>
//                 <div className="core-pulse"></div>
//                 <div className="core-icon">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="ai-brain-icon"
//                   >
//                     <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
//                     <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
//                     <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4 4.5 4.5 0 0 1 3 4 4.5 4.5 0 0 1 3-4Z" />
//                     <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
//                     <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
//                     <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
//                     <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
//                     <path d="M6 18a4 4 0 0 1-1.967-.516" />
//                     <path d="M19.967 17.484A4 4 0 0 1 18 18" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* SVG Connecting Lines */}
//             <svg className="energy-lines" viewBox="0 0 800 800">
//               <defs>
//                 <linearGradient
//                   id="energyGrad"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="100%"
//                 >
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
//                   <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
//                 </linearGradient>
//                 <filter id="glowLine">
//                   <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                   <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>
//               <g className="lines-group" filter="url(#glowLine)">
//                 {/* Lines radiating from center 400,400 */}
//                 <line
//                   x1="400"
//                   y1="400"
//                   x2="400"
//                   y2="100"
//                   className="animated-line"
//                 />
//                 <line
//                   x1="400"
//                   y1="400"
//                   x2="660"
//                   y2="250"
//                   className="animated-line"
//                 />
//                 <line
//                   x1="400"
//                   y1="400"
//                   x2="660"
//                   y2="550"
//                   className="animated-line"
//                 />
//                 <line
//                   x1="400"
//                   y1="400"
//                   x2="400"
//                   y2="700"
//                   className="animated-line"
//                 />
//                 <line
//                   x1="400"
//                   y1="400"
//                   x2="140"
//                   y2="550"
//                   className="animated-line"
//                 />
//                 <line
//                   x1="400"
//                   y1="400"
//                   x2="140"
//                   y2="250"
//                   className="animated-line"
//                 />
//               </g>
//             </svg>

//             {/* AI Nodes */}
//             {[
//               {
//                 id: 1,
//                 title: "Experienced Professionals",
//                 desc: "Advanced neural processing network & architecture blueprints",
//               },
//               {
//                 id: 2,
//                 title: "Customer-Centric Approach",
//                 desc: "Connected data streams & intelligent customer networks",
//               },
//               {
//                 id: 3,
//                 title: "Agile Delivery",
//                 desc: "High-speed processing engine & fast workflow pipelines",
//               },
//               {
//                 id: 4,
//                 title: "Quality & Security",
//                 desc: "Cyber security shield & encrypted digital infrastructure",
//               },
//               {
//                 id: 5,
//                 title: "Innovation-Driven Culture",
//                 desc: "AI innovation engine & quantum computing elements",
//               },
//               {
//                 id: 6,
//                 title: "Long-Term Partnership",
//                 desc: "Infinite connection loops & sustainable ecosystems",
//               },
//             ].map((node, index) => (
//               <div key={index} className={`ai-node ai-node-${node.id}`}>
//                 <div className="node-connector-point"></div>
//                 <div className="node-content-box">
//                   <div className="node-hologram"></div>
//                   <h4>{node.title}</h4>
//                   <p>{node.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team */}
//       <section className="section">
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             variants={titleVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Leadership Team
//           </motion.h2>
//           <motion.p
//             className="section-desc"
//             style={{
//               textAlign: "center",
//               maxWidth: "800px",
//               margin: "0 auto 3rem auto",
//             }}
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Meet Our Leadership
//           </motion.p>
//           <div className="leadership-grid">
//             {leadership.map((member, index) => (
//               <motion.div
//                 key={index}
//                 className="leader-card"
//                 initial={{
//                   opacity: 0,
//                   y: 80,
//                   scale: 0.85,
//                   rotate: index % 2 === 0 ? -5 : 5,
//                 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.12,
//                   duration: 0.9,
//                   ease: [0.175, 0.885, 0.32, 1.275],
//                 }}
//                 whileHover={{
//                   y: -15,
//                   scale: 1.06,
//                   rotate: index % 2 === 0 ? 3 : -3,
//                   zIndex: 10,
//                 }}
//               >
//                 <div className="leader-image">
//                   <img src={member.image} alt={member.name} />
//                 </div>
//                 <h3>{member.name}</h3>
//                 <p className="leader-role">{member.role}</p>
//                 <div className="leader-social">
//                   <a href="#">
//                     <svg
//                       viewBox="0 0 24 24"
//                       width="20"
//                       height="20"
//                       fill="currentColor"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a href="#">
//                     <svg
//                       viewBox="0 0 24 24"
//                       width="20"
//                       height="20"
//                       fill="currentColor"
//                     >
//                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                     </svg>
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Excellence */}
//       <section className="section">
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             variants={titleVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Technology Excellence
//           </motion.h2>
//           <motion.p
//             className="section-desc"
//             style={{
//               textAlign: "center",
//               maxWidth: "800px",
//               margin: "0 auto 1.5rem auto",
//             }}
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Technologies We Work With
//           </motion.p>
//           <div className="tech-grid">
//             {techStack.map((stack, index) => (
//               <motion.div
//                 key={index}
//                 className="tech-card"
//                 initial={{
//                   opacity: 0,
//                   y: 80,
//                   scale: 0.8,
//                   rotate: index % 3 === 0 ? -5 : index % 3 === 1 ? 0 : 5,
//                 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.1,
//                   duration: 0.9,
//                   ease: [0.175, 0.885, 0.32, 1.275],
//                 }}
//                 whileHover={{
//                   y: -15,
//                   scale: 1.05,
//                   rotate: index % 2 === 0 ? 2 : -2,
//                   zIndex: 10,
//                 }}
//               >
//                 <h3 className="tech-category">{stack.category}</h3>
//                 <div className="tech-list">
//                   {stack.techs.map((tech, i) => (
//                     <span key={i} className="tech-badge">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Corporate Social Responsibility */}
//       <section className="section section-dark">
//         <div className="container">
//           <motion.div
//             className="csr-card"
//             initial={{ opacity: 0, y: 80, scale: 0.9 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
//           >
//             <div className="csr-content">
//               <h2 style={{ textTransform: "uppercase" }}>
//                 CORPORATE SOCIAL RESPONSIBILITY
//               </h2>
//               <h3
//                 style={{
//                   fontSize: "1.8rem",
//                   fontWeight: "600",
//                   marginBottom: "15px",
//                   color: "#3B82F6",
//                 }}
//               >
//                 Making a Positive Impact
//               </h3>
//               <p style={{ marginBottom: "30px" }}>
//                 At Tanvox Technologies, we believe technology should create
//                 positive social impact. Our commitment extends beyond business
//                 success to community development, education, sustainability, and
//                 ethical innovation.
//               </p>

//               <h4
//                 style={{
//                   fontSize: "1.5rem",
//                   fontWeight: "700",
//                   marginBottom: "25px",
//                   color: "#111827",
//                 }}
//               >
//                 CSR Focus Areas
//               </h4>
//               <div className="csr-initiatives">
//                 {[
//                   {
//                     icon: "💻",
//                     title: "Digital Literacy & Tech Education",
//                     desc: "Digital literacy and technology education programs",
//                   },
//                   {
//                     icon: "📚",
//                     title: "Educational Support",
//                     desc: "Educational support initiatives",
//                   },
//                   {
//                     icon: "🌱",
//                     title: "Sustainable Practices",
//                     desc: "Sustainable technology practices",
//                   },
//                   {
//                     icon: "🌍",
//                     title: "Environmental Responsibility",
//                     desc: "Environmental responsibility programs",
//                   },
//                   {
//                     icon: "🤲",
//                     title: "Community Outreach",
//                     desc: "Community development and outreach initiatives",
//                   },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className="csr-item"
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
//                   >
//                     <div className="csr-icon">{item.icon}</div>
//                     <h4>{item.title}</h4>
//                     <p>{item.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Global Reach */}
//       <section
//         className="section global-reach-section"
//         style={{ background: "#F8FAFC" }}
//       >
//         <div className="container">
//           <motion.h2
//             className="section-title centered"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             style={{ marginBottom: "3rem" }}
//           >
//             Global Reach
//           </motion.h2>

//           <div
//             className="global-reach-container"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "4rem",
//               background: "#FFFFFF",
//               border: "1px solid #E5E7EB",
//               borderRadius: "16px",
//               padding: "3rem",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
//             }}
//           >
//             <motion.div
//               className="global-reach-content"
//               style={{ flex: 1 }}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <h3
//                 style={{
//                   fontSize: "1.8rem",
//                   color: "#111827",
//                   marginBottom: "1.5rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 Serving Clients Worldwide
//               </h3>
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   color: "#4B5563",
//                   lineHeight: 1.7,
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 Our solutions support organizations across multiple regions,
//                 helping businesses leverage technology to scale operations,
//                 improve efficiency, and compete globally.
//               </p>
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   color: "#4B5563",
//                   lineHeight: 1.7,
//                 }}
//               >
//                 With a flexible delivery model and distributed expertise, we
//                 successfully collaborate with clients across different
//                 industries and geographical markets, ensuring seamless project
//                 execution no matter where you are located.
//               </p>
//             </motion.div>

//             <motion.div
//               className="global-reach-image-container"
//               style={{
//                 flex: 1,
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 height: "350px",
//               }}
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
//                 alt="Global Reach Technology Map"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Careers */}
//       <section className="section section-gradient">
//         <div className="container">
//           <motion.div
//             className="careers-card"
//             initial={{ opacity: 0, y: 80, scale: 0.9 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
//           >
//             <div className="careers-content">
//               <h2>Join Our Team</h2>
//               <p>
//                 We are always looking for talented, passionate, and innovative
//                 professionals who want to make an impact through technology.
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "1rem",
//                   justifyContent: "center",
//                   marginBottom: "2rem",
//                 }}
//               >
//                 {[
//                   "Software Development",
//                   "Cloud Engineering",
//                   "DevOps Engineering",
//                   "Quality Assurance & Testing",
//                   "Cybersecurity",
//                   "Business Analysis",
//                   "Project Management",
//                   "Sales & Marketing",
//                   "Customer Success",
//                 ].map((role, i) => (
//                   <motion.span
//                     key={i}
//                     className="tech-badge"
//                     initial={{ opacity: 0, y: 30, scale: 0.8 }}
//                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       delay: 0.2 + i * 0.08,
//                       duration: 0.6,
//                       ease: [0.175, 0.885, 0.32, 1.275],
//                     }}
//                     whileHover={{ scale: 1.15, rotate: 3 }}
//                   >
//                     {role}
//                   </motion.span>
//                 ))}
//               </div>
//               <a href="#" className="btn-primary">
//                 View Open Positions
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <line x1="5" y1="12" x2="19" y2="12" />
//                   <polyline points="12 5 19 12 12 19" />
//                 </svg>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="section final-cta">
//         <div className="container">
//           <motion.div
//             className="final-cta-card"
//             initial={{ opacity: 0, y: 100, scale: 0.85 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
//           >
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1, duration: 0.7 }}
//             >
//               Let's Build the Future Together
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.7 }}
//             >
//               Whether you're launching a new digital product, modernizing legacy
//               systems, adopting cloud technologies, implementing AI solutions,
//               or accelerating enterprise transformation, Tanvox Technologies is
//               ready to help.
//             </motion.p>
//             <motion.p
//               style={{
//                 fontSize: "1rem",
//                 color: "var(--color-text-muted)",
//                 marginBottom: "2rem",
//               }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.7 }}
//             >
//               Our team combines innovation, technical expertise, and industry
//               knowledge to deliver solutions that drive meaningful business
//               outcomes.
//             </motion.p>
//             <motion.div
//               style={{ marginBottom: "2rem" }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.7 }}
//             >
//               <h3
//                 style={{
//                   color: "var(--color-text-primary)",
//                   marginBottom: "1rem",
//                   fontFamily: "var(--font-display)",
//                 }}
//               >
//                 Contact Information
//               </h3>
//               <p
//                 style={{
//                   color: "var(--color-text-muted)",
//                   marginBottom: "0.5rem",
//                 }}
//               >
//                 <strong>Email:</strong> info@tanvox.com
//               </p>
//               <p
//                 style={{
//                   color: "var(--color-text-muted)",
//                   marginBottom: "0.5rem",
//                 }}
//               >
//                 <strong>Phone:</strong> +91 XXXXX XXXXX
//               </p>
//               <p style={{ color: "var(--color-text-muted)" }}>
//                 <strong>Address:</strong> Hyderabad, Telangana, India
//               </p>
//             </motion.div>
//             <div className="final-cta-buttons">
//               {[
//                 {
//                   label: "Schedule a Meeting",
//                   icon: (
//                     <svg
//                       viewBox="0 0 24 24"
//                       width="22"
//                       height="22"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                     >
//                       <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                       <line x1="16" y1="2" x2="16" y2="6" />
//                       <line x1="8" y1="2" x2="8" y2="6" />
//                       <line x1="3" y1="10" x2="21" y2="10" />
//                     </svg>
//                   ),
//                   className: "btn-primary large",
//                 },
//                 {
//                   label: "Request a Proposal",
//                   icon: (
//                     <svg
//                       viewBox="0 0 24 24"
//                       width="22"
//                       height="22"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                     >
//                       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                       <polyline points="14 2 14 8 20 8" />
//                     </svg>
//                   ),
//                   className: "btn-secondary large",
//                 },
//                 {
//                   label: "Speak With Our Experts",
//                   icon: (
//                     <svg
//                       viewBox="0 0 24 24"
//                       width="22"
//                       height="22"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                     >
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                     </svg>
//                   ),
//                   className: "btn-tertiary large",
//                 },
//               ].map((btn, idx) => (
//                 <motion.a
//                   key={idx}
//                   href="#contact"
//                   className={btn.className}
//                   initial={{ opacity: 0, y: 40, scale: 0.85 }}
//                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: 0.5 + idx * 0.1,
//                     duration: 0.7,
//                     ease: [0.175, 0.885, 0.32, 1.275],
//                   }}
//                   whileHover={{ y: -8, scale: 1.05 }}
//                 >
//                   {btn.icon}
//                   {btn.label}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;






import { useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutHeroBg from '../../assets/heroAbout.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

const aboutTeamImage = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    // 1. Who We Are Animations
    gsap.fromTo(".who-we-are-left-gsap",
      { opacity: 0, x: -70 },
      {
        opacity: 1,
        x: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".who-we-are-content-gsap",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
    gsap.fromTo(".who-we-are-image-wrapper-gsap",
      { opacity: 0, scale: 0.88, y: 60 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".who-we-are-content-gsap",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
    // Silky scroll-based zoom in/out for the team image
    gsap.fromTo(".who-we-are-image",
      { scale: 1.22 },
      {
        scale: 1.0,
        ease: "none",
        scrollTrigger: {
          trigger: ".who-we-are-content-gsap",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        }
      }
    );
    gsap.fromTo(".highlight-item-gsap",
      { opacity: 0, x: -35 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.16,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".who-we-are-highlights-gsap",
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );

    // 2. Our Journey Animations
    gsap.fromTo(".journey-desc-card-gsap",
      { opacity: 0, x: -50, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.18,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".journey-section-gsap",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
    gsap.fromTo(".journey-graphic-gsap",
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "back.out(1.1)",
        scrollTrigger: {
          trigger: ".journey-section-gsap",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
    gsap.fromTo(".journey-item-gsap",
      { opacity: 0, scale: 0.65, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: ".journey-section-gsap",
          start: "top 82%",
          toggleActions: "play none none none"
        }
      }
    );

    // 3. Mission & Vision GSAP Animation
    gsap.fromTo(".mission-card-gsap",
      { opacity: 0, x: -80, rotateY: -15, transformPerspective: 1000 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-vision-three-col",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
    gsap.fromTo(".vision-card-gsap",
      { opacity: 0, x: 80, rotateY: 15, transformPerspective: 1000 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-vision-three-col",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // 4. Core Values GSAP Animation
    gsap.fromTo(".value-card-gsap",
      { opacity: 0, y: 55, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.14,
        duration: 0.9,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 86%",
          toggleActions: "play none none none"
        }
      }
    );

    // 5. What We Do (Services)
    gsap.fromTo(".service-card-gsap",
      { opacity: 0, rotateY: 65, scale: 0.83, transformPerspective: 1000 },
      {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        stagger: 0.16,
        duration: 1.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // 6. Industries We Serve GSAP Animation
    gsap.fromTo(".industry-card-gsap",
      { opacity: 0, y: 48, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.11,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".industries-grid",
          start: "top 86%",
          toggleActions: "play none none none"
        }
      }
    );

    // 7. Why Choose Tanvox
    gsap.fromTo(".why-choose-card-gsap",
      { opacity: 0, y: 55 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.16,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-choose-grid",
          start: "top 86%",
          toggleActions: "play none none none"
        }
      }
    );

    // 8. Leadership Team Animations
    gsap.fromTo(".leader-card-gsap",
      { opacity: 0, y: 70, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 1.0,
        ease: "back.out(1.1)",
        scrollTrigger: {
          trigger: ".leadership-grid",
          start: "top 86%",
          toggleActions: "play none none none"
        }
      }
    );

    // 9. Technology Excellence Animations
    gsap.fromTo(".tech-card-gsap",
      { opacity: 0, y: 48, scale: 0.88 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.13,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 86%",
          toggleActions: "play none none none"
        }
      }
    );

    // 10. Corporate Social Responsibility (CSR)
    gsap.fromTo(".csr-card-gsap",
      { opacity: 0, y: 50, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".csr-card-gsap",
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );
    gsap.fromTo(".csr-item-gsap",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".csr-initiatives-grid",
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );

    // 12. Careers Animations
    gsap.fromTo(".careers-card-gsap",
      { opacity: 0, y: 60, scale: 0.93 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".careers-card-gsap",
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );
    gsap.fromTo(".careers-tag-gsap",
      { opacity: 0, scale: 0.78, y: 14 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.6,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: ".careers-card-gsap",
          start: "top 86%",
          toggleActions: "play none none none"
        }
      }
    );

    // 13. Final CTA Animations
    gsap.fromTo(".final-cta-card-gsap",
      { opacity: 0, y: 70, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".final-cta-card-gsap",
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );

    // 14. Section Titles — elegant, slightly slow reveal
    gsap.utils.toArray(".section-title.gsap-reveal:not(.journey-desc-card-gsap)").forEach((title) => {
      gsap.fromTo(title,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Section Descriptions — slightly delayed after title
    gsap.utils.toArray(".section-desc.gsap-reveal").forEach((desc) => {
      gsap.fromTo(desc,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          delay: 0.22,
          ease: "power2.out",
          scrollTrigger: {
            trigger: desc,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Force ScrollTrigger to recalculate positions after DOM is ready
    ScrollTrigger.refresh();

    // Safety fallback: if any .gsap-reveal is still invisible after 3s, force it visible
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.gsap-reveal').forEach(el => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.1) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
    }, 3000);

    // Cleanup triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(fallbackTimer);
    };
  }, []);

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
    { name: 'Banking, Financial Services & Insurance (BFSI)', icon: '🏦', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=400&h=250&fit=crop' },
    { name: 'Healthcare & Life Sciences', icon: '🏥', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop' },
    { name: 'Retail & E-commerce', icon: '🛒', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop' },
    { name: 'Manufacturing & Industry 4.0', icon: '🏭', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop' },
    { name: 'Logistics & Supply Chain', icon: '🚚', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop' },
    { name: 'Education & EdTech', icon: '🎓', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop' },
    { name: 'Real Estate & Construction', icon: '🏗️', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop' },
    { name: 'Telecommunications', icon: '📱', image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&h=250&fit=crop' },
    { name: 'Energy & Utilities', icon: '⚡', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop' },
    { name: 'Government & Public Sector', icon: '🏛️', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=250&fit=crop' },
    { name: 'Startups & Emerging Businesses', icon: '🚀', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop' },
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
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHeroBg})` }}>
        {/* Lighter, modern overlay for high asset visibility */}
        <div className="about-hero-light-overlay"></div>
        <div className="about-hero-mesh-overlay"></div>
        
        {/* Soft radial ambient glows behind text */}
        <div className="about-hero-ambient-glows">
          <div className="about-glow about-glow-blue"></div>
          <div className="about-glow about-glow-purple"></div>
          <div className="about-glow about-glow-pink"></div>
        </div>

        {/* Diagonal light streaks */}
        <div className="about-hero-light-streaks">
          <div className="about-light-streak about-streak-1"></div>
          <div className="about-light-streak about-streak-2"></div>
        </div>

        {/* Floating particle overlays */}
        <div className="about-hero-particles-overlay">
          <div className="about-particle about-particle-1"></div>
          <div className="about-particle about-particle-2"></div>
          <div className="about-particle about-particle-3"></div>
          <div className="about-particle about-particle-4"></div>
        </div>

        <div className="about-hero-container">
          {/* Left Column: Content */}
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
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <a href="#contact" className="btn-primary hero-btn-gradient">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule a Consultation
              </a>
              <a href="#contact" className="btn-secondary hero-btn-outline">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Orbiting Interactive Digital Mockup for Core Values */}
          <div className="about-hero-graphic-side">
            {/* Floating core value tags */}
            <div className="about-floating-tags">
              <div className="about-floating-tag tag-innovation">
                <span className="about-tag-icon">💡</span>
                <span className="about-tag-label">Innovation</span>
              </div>
              <div className="about-floating-tag tag-integrity">
                <span className="about-tag-icon">🤝</span>
                <span className="about-tag-label">Integrity</span>
              </div>
              <div className="about-floating-tag tag-excellence">
                <span className="about-tag-icon">🏆</span>
                <span className="about-tag-label">Excellence</span>
              </div>
              <div className="about-floating-tag tag-collaboration">
                <span className="about-tag-icon">👥</span>
                <span className="about-tag-label">Collaboration</span>
              </div>
              <div className="about-floating-tag tag-success">
                <span className="about-tag-icon">🎯</span>
                <span className="about-tag-label">Success</span>
              </div>
            </div>

            {/* Central glowing About Us network sphere */}
            <div className="about-digital-globe-mockup">
              <div className="about-globe-mesh"></div>
              <div className="about-globe-ring ring-first"></div>
              <div className="about-globe-ring ring-second"></div>
              <div className="about-globe-ring ring-third"></div>
              <div className="about-globe-core">
                <span className="about-core-text">TANVOX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div className="premium-card" onMouseMove={handleMouseMove}>
            <div className="who-we-are-content who-we-are-content-gsap">
              <div className="who-we-are-left who-we-are-left-gsap gsap-reveal">
                <h2 className="section-title">Who We Are</h2>
                <p className="section-desc">
                  Tanvox Technologies is a trusted technology partner delivering end-to-end digital solutions for startups, small and medium-sized businesses, enterprises, and public sector organizations. Our multidisciplinary team of technology consultants, architects, engineers, developers, DevOps specialists, cloud experts, cybersecurity professionals, and quality assurance specialists work together to solve complex business challenges through technology.
                </p>
                <p className="section-desc">
                  We believe that technology should be an enabler of growth, innovation, and competitive advantage. Our solutions are designed not only to meet today's business needs but also to prepare organizations for future opportunities and challenges.
                </p>
                <div className="who-we-are-highlights who-we-are-highlights-gsap">
                  {[
                    { icon: '🌟', title: 'Innovation First', desc: 'Always exploring new technologies' },
                    { icon: '🎯', title: 'Results Driven', desc: 'Focused on measurable outcomes' },
                    { icon: '🌍', title: 'Global Reach', desc: 'Serving clients worldwide' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="highlight-item highlight-item-gsap gsap-reveal"
                    >
                      <div className="highlight-icon">{item.icon}</div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="who-we-are-right who-we-are-right-gsap">
                <div className="who-we-are-image-wrapper who-we-are-image-wrapper-gsap gsap-reveal">
                  <img src={aboutTeamImage} alt="Tanvox Team - Group of Professionals" className="who-we-are-image" />
                  <div className="image-overlay-badge">
                    <span>🚀</span>
                    <p>Innovative Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section journey-section journey-section-gsap">
        <div className="container">
          <h2 className="section-title centered gsap-reveal journey-desc-card-gsap">
            Our Journey
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
            {/* Left Column: Description paragraphs with advanced animation cards */}
            <div 
              className="journey-description-side"
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div 
                className="journey-desc-card journey-desc-card-gsap gsap-reveal" 
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-gray-200)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)',
                  position: 'relative',
                  borderLeft: '4px solid #3b82f6',
                  overflow: 'hidden'
                }}
              >
                <div className="journey-desc-badge badge-blue" style={{ fontFamily: 'var(--font-display, inherit)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px', color: '#3b82f6' }}>OUR VISION</div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
                  Founded with a vision to bridge the gap between business challenges and technological innovation, Tanvox Technologies has grown into a reliable technology consulting and solutions provider.
                </p>
              </div>
              <div 
                className="journey-desc-card journey-desc-card-gsap gsap-reveal" 
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-gray-200)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)',
                  position: 'relative',
                  borderLeft: '4px solid #ff0066',
                  overflow: 'hidden'
                }}
              >
                <div className="journey-desc-badge badge-pink" style={{ fontFamily: 'var(--font-display, inherit)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px', color: '#ff0066' }}>OUR FOOTPRINT</div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
                  Over the years, we have successfully delivered custom software applications, enterprise platforms, cloud-native solutions, automation frameworks, AI-driven systems, and digital transformation initiatives across multiple industries.
                </p>
              </div>
              <div 
                className="journey-desc-card journey-desc-card-gsap gsap-reveal" 
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-gray-200)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)',
                  position: 'relative',
                  borderLeft: '4px solid #7c3aed',
                  overflow: 'hidden'
                }}
              >
                <div className="journey-desc-badge badge-purple" style={{ fontFamily: 'var(--font-display, inherit)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px', color: '#7c3aed' }}>OUR PURPOSE</div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
                  Our journey is defined by continuous learning, technological excellence, and a commitment to delivering value-driven solutions that help organizations remain agile, competitive, and future-ready.
                </p>
              </div>
            </div>

            {/* Right Column: Orbit timeline graphic */}
            <div className="journey-container journey-graphic-gsap gsap-reveal">
              <div className="journey-orbit"></div>
              <div className="journey-orbit-inner"></div>
              <div className="journey-center">
                <h3>Tanvox</h3>
              </div>
              <div className="journey-particles">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`journey-particle jp-${i + 1}`}></div>
                ))}
              </div>
              <div className="journey-orbit-rotator">
                <div className="journey-item journey-item-1 journey-item-gsap gsap-reveal">
                  <h4>Foundation</h4>
                  <p>Bold vision & core team</p>
                </div>
                <div className="journey-item journey-item-2 journey-item-gsap gsap-reveal">
                  <h4>Growth</h4>
                  <p>500+ projects delivered</p>
                </div>
                <div className="journey-item journey-item-3 journey-item-gsap gsap-reveal">
                  <h4>Excellence</h4>
                  <p>Trusted partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Enterprise Mission - Animation - Vision */}
      <section className="section enterprise-section">
        <div className="container">
          <h2 className="section-title centered gsap-reveal" style={{ marginBottom: '3.5rem' }}>
            Mission & Vision
          </h2>
          <div className="mission-vision-three-col">
            {/* LEFT: Mission Card */}
            <div className="enterprise-card mission-card mission-card-gsap gsap-reveal">
              <div className="card-illustration">🚀</div>
              <div className="card-icon-container mission-icon">🎯</div>
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
            </div>

            {/* RIGHT: Vision Card */}
            <div className="enterprise-card vision-card vision-card-gsap gsap-reveal">
              <div className="card-illustration">🌍</div>
              <div className="card-icon-container vision-icon">🔮</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title centered gsap-reveal">
            Core Values
          </h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="value-card value-card-gsap gsap-reveal"
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.name}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title centered gsap-reveal">
            What We Do
          </h2>
          <p className="section-desc gsap-reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Our Expertise
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card service-card-gsap gsap-reveal"
              >
                <div className="service-hover-bar"></div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <div className="container">
          <h2 className="section-title centered gsap-reveal">
            Industries We Serve
          </h2>
          <p className="section-desc gsap-reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            We deliver industry-specific solutions that address unique business challenges and regulatory requirements.
          </p>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card industry-card-gsap gsap-reveal"
              >
                <div className="industry-content">
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{industry.icon}</div>
                  <h3>{industry.name}</h3>
                  <p>Custom technology solutions tailored to optimize operations and drive growth in this sector.</p>
                </div>
                {industry.image && (
                  <div className="industry-image-wrapper">
                    <img src={industry.image} alt={industry.name} className="industry-image" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title centered gsap-reveal">
            Why Choose Tanvox Technologies
          </h2>
          <p className="section-desc gsap-reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Your Trusted Technology Partner
          </p>
          <div className="why-choose-grid">
            {[
              { icon: '👥', title: 'Experienced Professionals', desc: 'A highly skilled team of consultants, engineers, developers, architects, and technology specialists.' },
              { icon: '🎯', title: 'Customer-Centric Approach', desc: 'Every solution is designed around your business objectives, challenges, and growth strategy.' },
              { icon: '⚡', title: 'Agile Delivery', desc: 'Agile methodologies enable faster delivery, continuous improvement, and greater flexibility.' },
              { icon: '🛡️', title: 'Quality & Security', desc: 'We follow industry best practices, secure development standards, and rigorous quality controls.' },
              { icon: '🚀', title: 'Innovation-Driven Culture', desc: 'We leverage emerging technologies to create competitive advantages and business value.' },
              { icon: '🤝', title: 'Long-Term Partnership', desc: 'Our commitment extends beyond project delivery through ongoing support, optimization, and strategic guidance.' },
            ].map((item, index) => (
              <div
                key={index}
                className="why-choose-card why-choose-card-gsap gsap-reveal"
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <h2 className="section-title centered gsap-reveal">
            Leadership Team
          </h2>
          <p className="section-desc gsap-reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Meet Our Leadership
          </p>
          <div className="leadership-grid">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="leader-card leader-card-gsap gsap-reveal"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Excellence */}
      <section className="section">
        <div className="container">
          <h2 className="section-title centered gsap-reveal">
            Technology Excellence
          </h2>
          <p className="section-desc gsap-reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Technologies We Work With
          </p>
          <div className="tech-grid">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className="tech-card tech-card-gsap gsap-reveal"
              >
                <h3 className="tech-category">{stack.category}</h3>
                <div className="tech-list">
                  {stack.techs.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title centered gsap-reveal" style={{ marginBottom: '3.5rem' }}>
            Corporate Social Responsibility
          </h2>
          <div className="csr-split-container">
            {/* Left side: Commitment Card */}
            <div className="csr-commitment-card csr-card-gsap gsap-reveal">
              <div className="csr-badge">CSR</div>
              <h3>Our Commitment</h3>
              <p>
                At Tanvox Technologies, we believe technology should create positive social impact. Our commitment extends beyond business success to community development, education, sustainability, and ethical innovation.
              </p>
              <div className="csr-commitment-icon">🌱</div>
            </div>

            {/* Right side: Grid of Initiatives */}
            <div className="csr-initiatives-grid">
              {[
                { icon: '💻', title: 'Digital Literacy & Tech Education', desc: 'Digital literacy and technology education programs' },
                { icon: '📚', title: 'Educational Support', desc: 'Educational support initiatives and school infrastructure' },
                { icon: '🌱', title: 'Sustainable Practices', desc: 'Sustainable technology practices and green computing' },
                { icon: '🌍', title: 'Environmental Responsibility', desc: 'Environmental responsibility and carbon offset programs' },
                { icon: '🤲', title: 'Community Outreach', desc: 'Community development and outreach volunteer programs' },
              ].map((item, index) => (
                <div key={index} className="csr-grid-item csr-item-gsap gsap-reveal">
                  <div className="csr-grid-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Careers */}
      <section className="section section-gradient">
        <div className="container">
          <h2 className="section-title centered gsap-reveal" style={{ marginBottom: '3.5rem' }}>
            Careers
          </h2>
          <div className="careers-split-card careers-card-gsap gsap-reveal">
            {/* Left side: Message & Call to Action */}
            <div className="careers-left">
              <h3 className="careers-subheading">Join Our Team</h3>
              <p className="careers-desc">
                We are always looking for talented, passionate, and innovative professionals who want to make an impact through technology.
              </p>
              <a href="#" className="btn-primary careers-cta">
                View Open Positions
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Right side: List of opportunities */}
            <div className="careers-right">
              <h4 className="opportunities-title">Career Opportunities</h4>
              <div className="opportunities-grid">
                {[
                  'Software Development', 'Cloud Engineering', 'DevOps Engineering',
                  'Quality Assurance & Testing', 'Cybersecurity', 'Business Analysis',
                  'Project Management', 'Sales & Marketing', 'Customer Success'
                ].map((role, i) => (
                  <div
                    key={i}
                    className="opportunity-item careers-tag-gsap gsap-reveal"
                  >
                    <span className="opportunity-icon">⚡</span>
                    <span className="opportunity-label">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container">
          <div className="final-cta-card final-cta-card-gsap gsap-reveal">
            <h2>Let's Build the Future Together</h2>
            <p>
              Whether you're launching a new digital product, modernizing legacy systems, adopting cloud technologies, implementing AI solutions, or accelerating enterprise transformation, Tanvox Technologies is ready to help.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
              Our team combines innovation, technical expertise, and industry knowledge to deliver solutions that drive meaningful business outcomes.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Contact Information</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}><strong>Email:</strong> info@tanvox.com</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}><strong>Phone:</strong> +91 XXXXX XXXXX</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}><strong>Address:</strong> Hyderabad, Telangana, India</p>
            </div>
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
                <a
                  key={idx}
                  href="#contact"
                  className={btn.className}
                >
                  {btn.icon}
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
