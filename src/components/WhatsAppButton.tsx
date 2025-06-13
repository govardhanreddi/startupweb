'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917989875228"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all duration-300 group transform hover:scale-105 hover:shadow-green-500/50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
    </motion.a>
  );
};

export default WhatsAppButton; 