'use client';

import React, { useState, FC, useEffect } from 'react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaCogs,
  FaCodeBranch,
  FaServer,
  FaInfinity,
  FaDatabase,
  FaNetworkWired,
  FaTools,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaLightbulb,
  FaBrain,
  FaShieldVirus,
  FaLock,
  FaChartLine,
  FaChartPie,
  FaTabletAlt,
  FaGlobe,
  FaUserTie,
  FaChartBar,
  FaPalette,
  FaPencilRuler,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Navigation from '../../components/Navigation';
import AnimatedIllustration from '../../components/AnimatedIllustration';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: JSX.Element;
  color: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  iconSet: JSX.Element[];
}

interface ServicesProps {
  children?: ReactNode;
}

// Import animation data
import webDevAnimation from '../../../public/animations/web-development.json';
import mobileDevAnimation from '../../../public/animations/mobile-development.json';
import cloudAnimation from '../../../public/animations/cloud-computing.json';
import aiAnimation from '../../../public/animations/artificial-intelligence.json';
import securityAnimation from '../../../public/animations/cybersecurity.json';
import marketingAnimation from '../../../public/animations/digital-marketing.json';
import devopsAnimation from '../../../public/animations/devops.json';
import dataAnimation from '../../../public/animations/data-analytics.json';
import networkAnimation from '../../../public/animations/network.json';
import consultingAnimation from '../../../public/animations/consulting.json';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom websites and web applications built with modern technologies.',
    longDescription: 'We create stunning, responsive, and high-performance websites and web applications that help businesses establish a strong online presence. Our web development services combine cutting-edge technologies with user-centric design to deliver exceptional digital experiences.',
    icon: <FaCode />,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'Custom Web Applications',
      'API Development'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    benefits: [
      'Enhanced User Experience',
      'Improved Performance',
      'Better SEO Rankings',
      'Cross-platform Compatibility',
      'Scalable Architecture',
      'Secure Development'
    ],
    iconSet: [<FaChartPie key="chart-pie" />, <FaChartBar key="chart-bar" />, <FaDatabase key="database" />, <FaBrain key="brain" />] as JSX.Element[]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile applications for iOS and Android.',
    longDescription: 'We develop innovative mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our mobile development expertise ensures your app stands out in the competitive app marketplace.',
    icon: <FaMobileAlt />,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
    benefits: [
      'Faster Time to Market',
      'Cost-effective Development',
      'Consistent User Experience',
      'Easy Maintenance',
      'Regular Updates',
      'Performance Optimization'
    ],
    iconSet: [<FaUserTie key="user-tie" />, <FaLightbulb key="lightbulb" />, <FaHandshake key="handshake" />, <FaChartLine key="chart-line" />] as JSX.Element[]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'Scalable cloud infrastructure and migration services.',
    longDescription: 'We help businesses leverage the power of cloud computing to achieve greater scalability, flexibility, and cost-efficiency. Our cloud solutions are designed to meet your specific business needs while ensuring security and reliability.',
    icon: <FaCloud />,
    color: 'from-cyan-500 to-cyan-600',
    features: [
      'Cloud Migration',
      'Cloud Architecture Design',
      'Serverless Computing',
      'Container Orchestration',
      'Cloud Security',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    benefits: [
      'Reduced Infrastructure Costs',
      'Improved Scalability',
      'Enhanced Security',
      'Better Disaster Recovery',
      'Increased Flexibility',
      'Automated Operations'
    ],
    iconSet: [
      <FaCloud key="cloud" aria-label="Cloud icon" />,
      <FaServer key="server" aria-label="Server icon" />,
      <FaInfinity key="infinity" aria-label="Infinity icon" />,
      <FaChartBar key="chart-bar" aria-label="Chart bar icon" />
    ] as JSX.Element[]
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    shortDescription: 'Intelligent solutions powered by cutting-edge AI technology.',
    longDescription: 'We develop AI and machine learning solutions that help businesses automate processes, gain insights from data, and make better decisions. Our AI expertise enables you to stay ahead in the digital transformation journey.',
    icon: <FaRobot />,
    color: 'from-green-500 to-green-600',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Chatbots',
      'Recommendation Systems'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'Pandas'],
    benefits: [
      'Automated Decision Making',
      'Improved Efficiency',
      'Better Customer Insights',
      'Enhanced Personalization',
      'Reduced Operational Costs',
      'Competitive Advantage'
    ],
    iconSet: [
      <FaBrain key="brain" aria-label="Brain icon" />,
      <FaChartPie key="chart-pie" aria-label="Chart pie icon" />,
      <FaRobot key="robot" aria-label="Robot icon" />,
      <FaLightbulb key="lightbulb" aria-label="Lightbulb icon" />
    ] as JSX.Element[]
  },
  {
    id: 'cyber-security',
    title: 'Cybersecurity',
    shortDescription: 'Comprehensive security solutions to protect your digital assets.',
    longDescription: 'We provide end-to-end cybersecurity solutions to protect your business from evolving threats. Our security experts ensure your digital assets are protected while maintaining compliance with industry standards.',
    icon: <FaShieldAlt />,
    color: 'from-red-500 to-red-600',
    features: [
      'Security Assessment',
      'Penetration Testing',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management',
      'Security Training'
    ],
    technologies: ['SIEM', 'WAF', 'IDS/IPS', 'EDR', 'Zero Trust', 'MFA'],
    benefits: [
      'Enhanced Security Posture',
      'Reduced Security Risks',
      'Compliance Assurance',
      '24/7 Security Monitoring',
      'Proactive Threat Detection',
      'Business Continuity'
    ],
    iconSet: [
      <FaShieldVirus key="shield-virus" aria-label="Shield virus icon" />,
      <FaLock key="lock" aria-label="Lock icon" />,
      <FaShieldAlt key="shield-alt" aria-label="Shield alt icon" />,
      <FaNetworkWired key="network" aria-label="Network icon" />
    ] as JSX.Element[]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Strategic digital marketing solutions to grow your business.',
    longDescription: 'We help businesses reach their target audience and achieve their marketing goals through comprehensive digital marketing strategies. Our data-driven approach ensures maximum ROI for your marketing investments.',
    icon: <FaChartLine />,
    color: 'from-yellow-500 to-yellow-600',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Canva'],
    benefits: [
      'Increased Online Visibility',
      'Higher Conversion Rates',
      'Better Brand Awareness',
      'Targeted Audience Reach',
      'Measurable Results',
      'Cost-effective Marketing'
    ],
    iconSet: [
      <FaChartLine key="chart-line" aria-label="Chart line icon" />,
      <FaChartBar key="chart-bar" aria-label="Chart bar icon" />,
      <FaGlobe key="globe" aria-label="Globe icon" />,
      <FaUsers key="users" aria-label="Users icon" />
    ] as JSX.Element[]
  },
  {
    id: 'devops',
    title: 'DevOps',
    shortDescription: 'Streamlined development and operations processes.',
    longDescription: 'We implement DevOps practices to accelerate software delivery while maintaining quality and reliability. Our DevOps solutions help organizations achieve faster time-to-market and improved operational efficiency.',
    icon: <FaServer />,
    color: 'from-indigo-500 to-indigo-600',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Automated Testing',
      'Monitoring & Logging',
      'Container Management',
      'Cloud Automation'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack'],
    benefits: [
      'Faster Deployment',
      'Improved Collaboration',
      'Reduced Downtime',
      'Better Quality Control',
      'Automated Operations',
      'Cost Optimization'
    ],
    iconSet: [FaCogs, FaCodeBranch, FaServer, FaInfinity].map(Icon => <Icon key={Icon.name} />)
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered design solutions for better digital experiences.',
    longDescription: 'We create intuitive and engaging user interfaces that enhance user experience and drive business growth. Our design process focuses on understanding user needs and creating solutions that are both beautiful and functional.',
    icon: <FaPalette />,
    color: 'from-pink-500 to-pink-600',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Zeplin'],
    benefits: [
      'Improved User Experience',
      'Higher User Engagement',
      'Reduced Development Time',
      'Better Conversion Rates',
      'Consistent Brand Identity',
      'Competitive Advantage'
    ],
    iconSet: [<FaPalette key="palette" />, <FaPencilRuler key="pencil" />, <FaUsers key="users" />, <FaLightbulb key="lightbulb" />] as JSX.Element[]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    shortDescription: 'Data-driven insights to inform business decisions.',
    longDescription: 'We transform raw data into actionable insights that drive business growth. Our data analytics solutions help organizations make informed decisions and gain a competitive edge in their industry.',
    icon: <FaDatabase />,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Data Visualization',
      'Predictive Analytics',
      'Business Intelligence',
      'Data Mining',
      'Real-time Analytics',
      'Custom Dashboards'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'R', 'SQL', 'Big Data Tools'],
    benefits: [
      'Informed Decision Making',
      'Improved Efficiency',
      'Better Customer Insights',
      'Competitive Advantage',
      'Cost Reduction',
      'Enhanced Performance'
    ],
    iconSet: [<FaChartPie key="chart-pie" />, <FaChartBar key="chart-bar" />, <FaDatabase key="database" />, <FaBrain key="brain" />] as JSX.Element[]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'Expert IT consulting services to help businesses make informed technology decisions.',
    longDescription: 'We provide expert IT consulting services to help businesses make informed technology decisions. Our consulting expertise ensures that your technology investments align with your business goals.',
    icon: <FaUserTie />,
    color: 'from-yellow-500 to-yellow-600',
    features: [
      'Technology Assessment',
      'Digital Transformation',
      'IT Strategy Planning',
      'Security Consulting',
      'Process Optimization',
      'Vendor Management'
    ],
    technologies: ['Enterprise Architecture', 'ITIL', 'COBIT', 'ISO 27001', 'NIST', 'Agile'],
    benefits: [
      'Strategic Planning',
      'Risk Mitigation',
      'Cost Optimization',
      'Improved Efficiency',
      'Enhanced Security',
      'Better Decision Making'
    ],
    iconSet: [<FaUserTie key="user-tie" />, <FaLightbulb key="lightbulb" />, <FaHandshake key="handshake" />, <FaChartLine key="chart-line" />] as JSX.Element[]
  }
];

const ServiceFallbackIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <FaCode className={`w-6 h-6 ${className}`} aria-label="Service icon" />
);

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] bg-white text-[rgb(66,93,109)] pt-28 md:pt-32 pb-4 md:pb-20 font-['Poppins',sans-serif] overflow-hidden">
          <div className="absolute inset-0 bg-[rgb(66,93,109)] opacity-10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <span className="bg-[rgb(66,93,109)]/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium tracking-wider text-[rgb(66,93,109)]">
                  COMPREHENSIVE TECHNOLOGY SOLUTIONS
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-8 font-heading leading-tight text-[rgb(66,93,109)] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our Services
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-12 font-body text-[rgb(66,93,109)]/90 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover our comprehensive range of technology solutions designed to help your business thrive in the digital age.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <div className={`relative h-48 bg-gradient-to-br ${service.color} rounded-t-2xl flex items-center justify-center`}>
                      {/* Remove this div with AnimatedIllustration */}
                      {/* <div className="absolute inset-0 opacity-20">
                        <AnimatedIllustration animationData={webDevAnimation} />
                      </div> */}
                      <div className="relative z-10 text-white text-4xl transform transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-[rgb(66,93,109)] mb-2">{service.title}</h3>
                      <p className="text-[rgb(66,93,109)]/80 font-body mb-4">{service.shortDescription}</p>
                      <div className="flex items-center text-[#ED5E5E] font-semibold group-hover:text-[#ff7a7a] transition-colors">
                        <Link
                          href={`/services/${service.id}`}
                          className="flex items-center text-[rgb(255,78,78)] hover:text-[rgb(255,78,78)]/80 font-medium"
                        >
                          Learn More
                          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Service Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className={`relative h-96 bg-gradient-to-br ${selectedService.color} rounded-2xl flex items-center justify-center overflow-hidden`}>
                    <div className="relative z-10 text-white text-6xl">
                      <div className="text-[#ED5E5E] mb-4">
                        <div className="text-4xl">
                          {selectedService.iconSet[0] || <ServiceFallbackIcon className="w-12 h-12" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6">{selectedService.title}</h2>
                  <p className="text-lg text-[rgb(66,93,109)]/80 font-body mb-8 leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-[rgb(66,93,109)] mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-[rgb(66,93,109)]/80">
                            <FaCheckCircle className="text-[#ED5E5E] mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-[rgb(66,93,109)] mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-[rgb(66,93,109)] rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="text-2xl font-heading font-semibold text-[rgb(66,93,109)] mb-8 text-center">Key Benefits</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {selectedService.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-[#ED5E5E] mb-4">
                        {selectedService.iconSet[index] || <ServiceFallbackIcon className="w-6 h-6" />}
                      </div>
                      <p className="text-[rgb(66,93,109)]/80 font-body">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6">Ready to Get Started?</h2>
                <p className="text-lg text-[rgb(66,93,109)]/80 mb-8">
                  Let's discuss how our services can help transform your business.
                </p>
                <div className="flex flex-row justify-center gap-4">
                  <a 
                    href="tel:+917989875228"
                    className="bg-[rgb(66,93,109)] text-white px-6 py-3 rounded-full font-heading font-semibold hover:bg-[rgb(76,103,119)] transition-all hover:scale-105 shadow-lg hover:shadow-xl tracking-wide flex items-center justify-center gap-2 text-sm sm:text-base group"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                  <a 
                    href="https://wa.me/+917989875228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(66,93,109)] text-white px-6 py-3 rounded-full font-heading font-semibold hover:bg-[rgb(76,103,119)] transition-all hover:scale-105 shadow-lg hover:shadow-xl tracking-wide flex items-center justify-center gap-2 text-sm sm:text-base group"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}