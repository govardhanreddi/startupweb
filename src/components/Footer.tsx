'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[rgb(66,93,109)] text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">KodingKompany</h3>
            <p className="text-gray-300 font-body">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors font-body">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-body">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-body">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors font-body">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-gray-300 hover:text-white transition-colors font-body">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-colors font-body">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 font-body">
              <li><a href="mailto:info@kodingkompany.com" className="hover:text-white transition-colors">Email: info@kodingkompany.com</a></li>
              <li><a href="tel:+917989875228" className="hover:text-white transition-colors">Phone: +91 7989875228</a></li>
              <li>Address: Unit 10, MCR Magnific, Raidurgam X Roads, Raidurgam, Hyderabad</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTelegram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 font-body">
          <p>&copy; {new Date().getFullYear()} KodingKompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 