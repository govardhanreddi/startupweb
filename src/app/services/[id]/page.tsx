'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaCode, FaMobileAlt, FaPalette, FaCloud, FaChartLine, FaLightbulb, FaRobot, FaShieldAlt, FaTools, FaNetworkWired, FaDatabase, FaUserTie } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import AnimatedIllustration from '../../../components/AnimatedIllustration';

// Import animations
import webDevAnimation from '../../../../public/animations/web-development.json';
import mobileDevAnimation from '../../../../public/animations/mobile-development.json';
import cloudAnimation from '../../../../public/animations/cloud-computing.json';
import marketingAnimation from '../../../../public/animations/digital-marketing.json';
import consultingAnimation from '../../../../public/animations/consulting.json';

const services = {
  'web-development': {
    title: 'Web Development',
    description: 'We create stunning, responsive, and high-performance websites and web applications that help businesses establish a strong online presence.',
    icon: <FaCode className="w-12 h-12" />,
    animation: webDevAnimation,
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
      {
        title: 'Enhanced User Experience',
        description: 'Intuitive interfaces and smooth interactions that keep users engaged.'
      },
      {
        title: 'Improved Performance',
        description: 'Fast loading times and efficient resource utilization.'
      },
      {
        title: 'Better SEO Rankings',
        description: 'Optimized for search engines to improve visibility.'
      }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'We develop innovative mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    icon: <FaMobileAlt className="w-12 h-12" />,
    animation: mobileDevAnimation,
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
      {
        title: 'Faster Time to Market',
        description: 'Quick development and deployment of mobile applications.'
      },
      {
        title: 'Cost-effective Development',
        description: 'Efficient use of resources and reusable components.'
      },
      {
        title: 'Consistent User Experience',
        description: 'Seamless experience across different devices and platforms.'
      }
    ]
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'We help businesses leverage the power of cloud computing to achieve greater scalability, flexibility, and cost-efficiency.',
    icon: <FaCloud className="w-12 h-12" />,
    animation: cloudAnimation,
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
      {
        title: 'Reduced Infrastructure Costs',
        description: 'Lower costs through efficient resource utilization.'
      },
      {
        title: 'Improved Scalability',
        description: 'Easy scaling of resources based on demand.'
      },
      {
        title: 'Enhanced Security',
        description: 'Robust security measures to protect your data.'
      }
    ]
  },
  'ai-machine-learning': {
    title: 'AI & Machine Learning',
    description: 'We develop AI and machine learning solutions that help businesses automate processes, gain insights from data, and make better decisions.',
    icon: <FaRobot className="w-12 h-12" />,
    animation: webDevAnimation,
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
      {
        title: 'Automated Decision Making',
        description: 'Make better decisions with AI-powered insights.'
      },
      {
        title: 'Improved Efficiency',
        description: 'Automate repetitive tasks and processes.'
      },
      {
        title: 'Better Customer Insights',
        description: 'Gain deeper understanding of customer behavior.'
      }
    ]
  },
  'cyber-security': {
    title: 'Cybersecurity',
    description: 'We provide end-to-end cybersecurity solutions to protect your business from evolving threats.',
    icon: <FaShieldAlt className="w-12 h-12" />,
    animation: webDevAnimation,
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
      {
        title: 'Enhanced Security Posture',
        description: 'Comprehensive protection against cyber threats.'
      },
      {
        title: 'Reduced Security Risks',
        description: 'Minimize vulnerabilities and potential breaches.'
      },
      {
        title: 'Compliance Assurance',
        description: 'Meet industry standards and regulatory requirements.'
      }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'We help businesses reach their target audience and achieve their marketing goals through comprehensive digital marketing strategies.',
    icon: <FaChartLine className="w-12 h-12" />,
    animation: marketingAnimation,
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
      {
        title: 'Increased Online Visibility',
        description: 'Improve your presence in search results and social media.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Convert more visitors into customers.'
      },
      {
        title: 'Better Brand Awareness',
        description: 'Build a strong and recognizable brand presence.'
      }
    ]
  },
  'devops': {
    title: 'DevOps',
    description: 'We implement DevOps practices to accelerate software delivery while maintaining quality and reliability.',
    icon: <FaTools className="w-12 h-12" />,
    animation: webDevAnimation,
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
      {
        title: 'Faster Deployment',
        description: 'Accelerate your software delivery pipeline.'
      },
      {
        title: 'Improved Collaboration',
        description: 'Better teamwork between development and operations.'
      },
      {
        title: 'Reduced Downtime',
        description: 'Minimize system outages and improve reliability.'
      }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'We create intuitive and engaging user interfaces that enhance user experience and drive business growth.',
    icon: <FaPalette className="w-12 h-12" />,
    animation: marketingAnimation,
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
      {
        title: 'Improved User Experience',
        description: 'Create intuitive and engaging user interfaces.'
      },
      {
        title: 'Higher User Engagement',
        description: 'Keep users interested and coming back.'
      },
      {
        title: 'Reduced Development Time',
        description: 'Clear design specifications speed up development.'
      }
    ]
  },
  'data-analytics': {
    title: 'Data Analytics',
    description: 'We transform raw data into actionable insights that drive business growth.',
    icon: <FaDatabase className="w-12 h-12" />,
    animation: webDevAnimation,
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
      {
        title: 'Informed Decision Making',
        description: 'Make data-driven decisions for better outcomes.'
      },
      {
        title: 'Improved Efficiency',
        description: 'Optimize processes based on data insights.'
      },
      {
        title: 'Better Customer Insights',
        description: 'Understand customer behavior and preferences.'
      }
    ]
  },
  'it-consulting': {
    title: 'IT Consulting',
    description: 'We provide expert IT consulting services to help businesses make informed technology decisions.',
    icon: <FaUserTie className="w-12 h-12" />,
    animation: consultingAnimation,
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
      {
        title: 'Strategic Planning',
        description: 'Develop effective technology strategies.'
      },
      {
        title: 'Risk Mitigation',
        description: 'Identify and address potential technology risks.'
      },
      {
        title: 'Cost Optimization',
        description: 'Optimize technology investments and resources.'
      }
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const id = params.id as string;
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-[rgb(66,93,109)] mb-4">Service Not Found</h1>
          <p className="text-lg text-[rgb(66,93,109)]/80 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            href="/services"
            className="inline-flex items-center text-[rgb(255,78,78)] hover:text-[rgb(255,78,78)]/80 font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className={`relative py-20 bg-gradient-to-br ${service.color} text-white`}>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-8">
                  {service.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                <p className="text-xl text-white/90">{service.description}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[rgb(66,93,109)] mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <FaCheckCircle className="w-6 h-6 text-[#ED5E5E] flex-shrink-0 mt-1" />
                      <span className="text-[rgb(66,93,109)]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[rgb(66,93,109)] mb-8">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-white rounded-full text-[rgb(66,93,109)] shadow-sm hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[rgb(66,93,109)] mb-8">Benefits</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-xl font-semibold text-[rgb(66,93,109)] mb-3">{benefit.title}</h3>
                      <p className="text-[rgb(66,93,109)]/80">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[rgb(66,93,109)] mb-6">Ready to Get Started?</h2>
                <p className="text-lg text-[rgb(66,93,109)]/80 mb-8">
                  Let's work together to transform your business with our {service.title.toLowerCase()} solutions.
                </p>
                <div className="flex flex-row justify-center gap-4">
                  <a 
                    href="tel:+917989875228"
                    className="bg-[rgb(66,93,109)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(76,103,119)] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Call Us
                  </a>
                  <a 
                    href="https://wa.me/+917989875228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(66,93,109)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(76,103,119)] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                  >
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