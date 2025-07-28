import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, Server, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 -z-10"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-900/40 border border-primary-700 rounded-full text-primary-300 text-sm font-medium mb-4">
              Connected API Banking Platform
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Seamless Banking APIs for 
            <span className="gradient-text"> Enterprise Systems</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect your ERP systems like Tally and ERPNext with major Indian banks.
            Automate financial workflows with our powerful API integration platform.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/register" className="btn btn-primary text-base">
              Get Started
            </Link>
            <Link to="/documentation" className="btn btn-outline text-white border-slate-600 hover:bg-slate-800">
              Explore API Docs <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Trusted by section */}
        <motion.div 
          className="text-center text-slate-400 text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Trusted by businesses across India</p>
        </motion.div>
        
        {/* Feature badges */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex items-center">
            <div className="bg-primary-900/60 p-2 rounded-lg mr-3">
              <Zap className="h-5 w-5 text-primary-400" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-medium">Real-Time Processing</h3>
              <p className="text-sm text-slate-400">Instant financial operations</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex items-center">
            <div className="bg-primary-900/60 p-2 rounded-lg mr-3">
              <Server className="h-5 w-5 text-primary-400" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-medium">API Reliability</h3>
              <p className="text-sm text-slate-400">99.9% uptime guarantee</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex items-center">
            <div className="bg-primary-900/60 p-2 rounded-lg mr-3">
              <Shield className="h-5 w-5 text-primary-400" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-medium">Bank-Grade Security</h3>
              <p className="text-sm text-slate-400">End-to-end encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
