import React from 'react';
import { Twitter, Linkedin, Facebook, Globe, Mail, PhoneCall } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="md" variant="light" />
              <span className="text-xl font-bold">Finapify</span>
            </div>
            <p className="text-slate-300 mb-4">
              Connected API banking platform integrating with ERPs to automate financial workflows with major Indian banks.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-white transition-colors">Platform Features</a></li>
              <li><a href="#integrations" className="text-slate-300 hover:text-white transition-colors">ERP & Bank Integrations</a></li>
              <li><a href="#documentation" className="text-slate-300 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cookies Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-slate-300">
                  Finapify Technologies Pvt. Ltd.<br />
                  Financial District, Mumbai, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary-500" />
                <a href="mailto:contact@finapify.tech" className="text-slate-300 hover:text-white transition-colors">
                  contact@finapify.tech
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-primary-500" />
                <a href="tel:+919876543210" className="text-slate-300 hover:text-white transition-colors">
                  +91 987 654 3210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800 pt-6 mt-8 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Finapify Technologies. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with care for Indian financial institutions.</p>
        </div>
      </div>
    </footer>
  );
};
