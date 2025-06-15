'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { FaRocket, FaLightbulb, FaHandshake, FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function About() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' }
  ];

  const features = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of the curve by embracing cutting-edge technologies and methodologies.'
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Creative Solutions',
      description: 'Our team thinks outside the box to deliver unique solutions to complex problems.'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Client Partnership',
      description: 'We build long-term relationships with our clients, becoming their trusted technology partner.'
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'Growth Focus',
      description: 'Every solution we deliver is designed to drive measurable business growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-white text-[rgb(66,93,109)] pt-28 md:pt-32 pb-4 md:pb-20 font-['Poppins',sans-serif] overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(66,93,109)] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <span className="bg-[rgb(66,93,109)]/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium tracking-wider text-[rgb(66,93,109)]">
                  GET TO KNOW US
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-8 font-heading leading-tight text-[rgb(66,93,109)] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Us
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-12 font-body text-[rgb(66,93,109)]/90 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We are a team of passionate technologists dedicated to helping businesses succeed in the digital world.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-[rgb(66,93,109)] mb-2">{stat.number}</h3>
                <p className="text-lg font-body text-[rgb(66,93,109)]/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6">Our Mission</h2>
              <p className="text-lg font-body text-[rgb(66,93,109)]/80 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-heading font-semibold text-[rgb(66,93,109)] mb-4">Our Vision</h3>
                <p className="font-body text-[rgb(66,93,109)]/80 leading-relaxed">
                  To be the leading technology partner for businesses seeking digital transformation and sustainable growth.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-heading font-semibold text-[rgb(66,93,109)] mb-4">Our Values</h3>
                <ul className="font-body text-[rgb(66,93,109)]/80 leading-relaxed space-y-2">
                  <li>• Innovation and Excellence</li>
                  <li>• Client-Centric Approach</li>
                  <li>• Integrity and Transparency</li>
                  <li>• Continuous Learning</li>
                </ul>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6">Why Choose Us</h2>
            <p className="text-lg font-body text-[rgb(66,93,109)]/80 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#ED5E5E] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-[rgb(66,93,109)] mb-2">{feature.title}</h3>
                <p className="font-body text-[rgb(66,93,109)]/80">{feature.description}</p>
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
              <FaGlobe className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Global Presence</h2>
              <p className="text-lg font-body text-white/90 mb-8">
                Serving clients worldwide with our innovative technology solutions and dedicated support.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[rgb(66,93,109)] mb-6">Ready to Get Started?</h2>
            <p className="text-lg font-body text-[rgb(66,93,109)]/80 mb-8 max-w-3xl mx-auto">
              Let's work together to transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+917989875228"
                className="bg-[rgb(66,93,109)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-heading font-semibold hover:bg-[rgb(76,103,119)] transition-all hover:scale-105 shadow-lg hover:shadow-xl tracking-wide flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a 
                href="https://wa.me/+917989875228"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(66,93,109)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-heading font-semibold hover:bg-[rgb(76,103,119)] transition-all hover:scale-105 shadow-lg hover:shadow-xl tracking-wide flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 