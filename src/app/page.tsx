'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaInstagram, 
  FaFacebook, 
  FaTelegram, 
  FaTwitter,
  FaCode, 
  FaMobileAlt, 
  FaCloud, 
  FaRobot, 
  FaShieldAlt, 
  FaChartLine, 
  FaServer, 
  FaDatabase, 
  FaNetworkWired, 
  FaTools,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaAward,
  FaUsers,
  FaClock,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaPalette,
  FaUserTie
} from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedIllustration from '../components/AnimatedIllustration';
import Navigation from '../components/Navigation';

// Import animation data
import webDevAnimation from '../../public/animations/web-development.json';
import mobileDevAnimation from '../../public/animations/mobile-development.json';
import cloudAnimation from '../../public/animations/cloud-computing.json';
import securityAnimation from '../../public/animations/cybersecurity.json';
import marketingAnimation from '../../public/animations/digital-marketing.json';
import devopsAnimation from '../../public/animations/devops.json';
import dataAnimation from '../../public/animations/data-analytics.json';
import networkAnimation from '../../public/animations/network.json';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'We create stunning, responsive, and high-performance websites and web applications that help businesses establish a strong online presence.',
      shortDescription: 'Custom websites and web applications built with modern technologies.',
      icon: <FaCode className="w-8 h-8" />,
      animation: webDevAnimation,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'We develop innovative mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
      shortDescription: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <FaMobileAlt className="w-8 h-8" />,
      animation: mobileDevAnimation,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'We help businesses leverage the power of cloud computing to achieve greater scalability, flexibility, and cost-efficiency.',
      shortDescription: 'Scalable cloud infrastructure and migration services.',
      icon: <FaCloud className="w-8 h-8" />,
      animation: cloudAnimation,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 'ai-machine-learning',
      title: 'AI & Machine Learning',
      description: 'We develop AI and machine learning solutions that help businesses automate processes, gain insights from data, and make better decisions.',
      shortDescription: 'Intelligent solutions powered by cutting-edge AI technology.',
      icon: <FaRobot className="w-8 h-8" />,
      animation: securityAnimation,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'cyber-security',
      title: 'Cybersecurity',
      description: 'We provide end-to-end cybersecurity solutions to protect your business from evolving threats.',
      shortDescription: 'Comprehensive security solutions to protect your digital assets.',
      icon: <FaShieldAlt className="w-8 h-8" />,
      animation: securityAnimation,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'We help businesses reach their target audience and achieve their marketing goals through comprehensive digital marketing strategies.',
      shortDescription: 'Strategic digital marketing solutions to grow your business.',
      icon: <FaChartLine className="w-8 h-8" />,
      animation: marketingAnimation,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'devops',
      title: 'DevOps',
      description: 'We implement DevOps practices to accelerate software delivery while maintaining quality and reliability.',
      shortDescription: 'Streamlined development and operations processes.',
      icon: <FaServer className="w-8 h-8" />,
      animation: devopsAnimation,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'We create intuitive and engaging user interfaces that enhance user experience and drive business growth.',
      shortDescription: 'User-centered design solutions for better digital experiences.',
      icon: <FaPalette className="w-8 h-8" />,
      animation: marketingAnimation,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'We transform raw data into actionable insights that drive business growth.',
      shortDescription: 'Data-driven insights to inform business decisions.',
      icon: <FaDatabase className="w-8 h-8" />,
      animation: dataAnimation,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'We provide expert IT consulting services to help businesses make informed technology decisions.',
      shortDescription: 'Expert IT consulting services to help businesses make informed technology decisions.',
      icon: <FaUserTie className="w-8 h-8" />,
      animation: securityAnimation,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: <FaClock className="w-8 h-8" /> },
    { number: '500+', label: 'Projects Completed', icon: <FaCheckCircle className="w-8 h-8" /> },
    { number: '100+', label: 'Happy Clients', icon: <FaUsers className="w-8 h-8" /> },
    { number: '50+', label: 'Team Members', icon: <FaAward className="w-8 h-8" /> }
  ];

  const features = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of the curve by embracing cutting-edge technologies and methodologies.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Creative Solutions',
      description: 'Our team thinks outside the box to deliver unique solutions to complex problems.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Client Partnership',
      description: 'We build long-term relationships with our clients, becoming their trusted technology partner.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'Growth Focus',
      description: 'Every solution we deliver is designed to drive measurable business growth.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const process = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Discovery',
      description: 'We begin by understanding your business needs and objectives.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: 'Planning',
      description: 'Our team creates a detailed roadmap for your project.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Development',
      description: 'We build your solution using industry best practices.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: 'Delivery',
      description: 'We ensure quality and deploy your solution successfully.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Working with this team has been transformative for our business. Their innovative solutions have helped us scale beyond our expectations.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO, InnovateX',
      content: 'The level of expertise and professionalism is outstanding. They delivered our project on time and exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'Director, Digital Solutions',
      content: "Their team's technical knowledge and problem-solving abilities are impressive. They've become our trusted technology partner.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="flex-grow">
        // Hero Section - Enhanced gradient and animation
        <section className="relative min-h-[60vh] md:min-h-screen bg-gradient-to-br from-[rgb(66,93,109)]/5 via-white to-[rgb(66,93,109)]/10 text-[rgb(66,93,109)] pt-28 md:pt-32 pb-4 md:pb-20 font-['Poppins',sans-serif] overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-[rgb(66,93,109)] opacity-5"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center bg-repeat motion-safe:animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
          
          {/* Hero content with enhanced animations */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="mb-8"
                >
                  <span className="bg-gradient-to-r from-[rgb(66,93,109)]/20 to-[rgb(66,93,109)]/10 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-medium tracking-wider text-[rgb(66,93,109)] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    INNOVATIVE TECHNOLOGY SOLUTIONS
                  </span>
                </motion.div>
                
                {/* Enhanced heading with gradient text */}
                <motion.h1 
                  className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 md:mb-10 font-heading leading-[1.1] tracking-tighter bg-gradient-to-r from-[rgb(66,93,109)] to-[rgb(96,123,139)] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Transforming Ideas into Digital Reality
                </motion.h1>
                
                {/* Enhanced description with better typography */}
                <motion.p 
                  className="text-xl sm:text-2xl md:text-3xl mb-8 md:mb-12 font-body text-[rgb(66,93,109)]/80 font-light leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  We help businesses thrive in the digital age with innovative technology solutions.
                </motion.p>
                
                {/* Enhanced CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                >
                  <a 
                    href="tel:+917989875228"
                    className="bg-gradient-to-r from-[rgb(66,93,109)] to-[rgb(86,113,129)] text-white px-8 py-4 rounded-full font-heading font-semibold hover:from-[rgb(76,103,119)] hover:to-[rgb(96,123,139)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl tracking-wide flex items-center justify-center gap-3 text-base group"
                  >
                    <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                  <a 
                    href="https://wa.me/+917989875228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[rgb(66,93,109)] to-[rgb(86,113,129)] text-white px-8 py-4 rounded-full font-heading font-semibold hover:from-[rgb(76,103,119)] hover:to-[rgb(96,123,139)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl tracking-wide flex items-center justify-center gap-3 text-base group"
                  >
                    <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Enhanced bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
        </section>
        
        {/* Stats Section - Enhanced cards and animations */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2">
                    <div className="text-[#ED5E5E] mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                      {stat.icon}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-[rgb(66,93,109)] to-[rgb(96,123,139)] bg-clip-text text-transparent mb-3">{stat.number}</h3>
                    <p className="text-lg font-body text-[rgb(66,93,109)]/70">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="pt-0 md:pt-20 pb-8 md:pb-20 bg-gray-50 font-['Poppins',sans-serif]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-6 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ED5E5E] font-semibold tracking-wider">OUR SERVICES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(66,93,109)] mb-3 md:mb-4 font-['Poppins',sans-serif] tracking-tight mt-2">What We Offer</h2>
              <p className="text-lg md:text-xl text-[rgb(66,93,109)] max-w-3xl mx-auto font-['Poppins',sans-serif] font-light leading-relaxed">
                Comprehensive technology solutions to help your business grow and succeed in the digital world.
              </p>
            </motion.div>
            <div className="relative px-4">
              <div className="overflow-hidden">
                <motion.div 
                  className="flex transition-transform duration-500 ease-in-out"
                  animate={{ x: `${-currentService * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {services.map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="w-full flex-shrink-0 px-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div 
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <div className={`relative h-40 md:h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          {/* Remove this div with AnimatedIllustration */}
                          {/* <div className="absolute inset-0 opacity-20">
                            <AnimatedIllustration animationData={service.animation} />
                          </div> */}
                          <motion.div 
                            className="relative z-10 text-white text-4xl"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          >
                            {service.icon}
                          </motion.div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[rgb(66,93,109)] mb-2">{service.title}</h3>
                          <p className="text-[rgb(66,93,109)]/80 font-body mb-4">{service.description}</p>
                          <div className="flex items-center text-[#ED5E5E] font-semibold group-hover:text-[#ff7a7a] transition-colors">
                            <Link
                              href={`/services/${service.id}`}
                              className="flex items-center text-[rgb(255,78,78)] hover:text-[rgb(255,78,78)]/80 font-medium group"
                            >
                              Learn More
                              <motion.div
                                className="ml-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className="flex justify-center mt-8 gap-4">
                <motion.button 
                  onClick={prevService}
                  className="bg-white text-[rgb(66,93,109)] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, rotate: -180 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowRight className="w-6 h-6 rotate-180" />
                </motion.button>
                <motion.button 
                  onClick={nextService}
                  className="bg-white text-[rgb(66,93,109)] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ED5E5E] font-semibold tracking-wider">WHY CHOOSE US</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6 mt-2">Our Core Strengths</h2>
              <p className="text-lg font-body text-[rgb(66,93,109)]/80 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className={`text-[#ED5E5E] mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-[rgb(66,93,109)] mb-2">{feature.title}</h3>
                    <p className="font-body text-[rgb(66,93,109)]/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ED5E5E] font-semibold tracking-wider">OUR PROCESS</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6 mt-2">How We Work</h2>
              <p className="text-lg font-body text-[rgb(66,93,109)]/80 max-w-3xl mx-auto">
                A systematic approach to delivering excellence in every project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#ED5E5E] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="text-[#ED5E5E] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-[rgb(66,93,109)] mb-2">{step.title}</h3>
                    <p className="font-body text-[rgb(66,93,109)]/80">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ED5E5E] font-semibold tracking-wider">TESTIMONIALS</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6 mt-2">What Our Clients Say</h2>
              <p className="text-lg font-body text-[rgb(66,93,109)]/80 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex gap-1 text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-[rgb(66,93,109)]/80 font-body italic mb-4">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-heading font-semibold text-[rgb(66,93,109)]">{testimonial.name}</h4>
                      <p className="text-[rgb(66,93,109)]/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-16 bg-gradient-to-br from-[#ED5E5E] to-[#ff7a7a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaGlobe className="w-16 h-16 mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Global Presence</h2>
                <p className="text-lg font-body text-white/90 mb-8">
                  Serving clients worldwide with our innovative technology solutions and dedicated support.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="font-body font-medium">{region}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ED5E5E] font-semibold tracking-wider">GET STARTED</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6 mt-2">Ready to Transform Your Business?</h2>
              <p className="text-lg font-body text-[rgb(66,93,109)]/80 mb-8 max-w-3xl mx-auto">
                Let's work together to transform your business with innovative technology solutions.
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
        </section>
      </main>
    </div>
  );
}