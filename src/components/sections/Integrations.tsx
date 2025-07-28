import React from 'react';
import { motion } from 'framer-motion';

export const Integrations = () => {
  const erpSystems = [
    { 
      name: "Tally Prime",
      description: "Integrate with India's most popular accounting software"
    },
    { 
      name: "ERPNext",
      description: "Connect with this open-source ERP platform"
    },
    { 
      name: "Zoho Books",
      description: "Streamline accounting with Zoho Books integration"
    }
  ];

  const banks = [
    { name: "HDFC Bank", status: "coming-soon" },
    { name: "State Bank of India", status: "coming-soon" },
    { name: "Canara Bank", status: "live" },
    { name: "Axis Bank", status: "coming-soon" },
    { name: "Federal Bank", status: "coming-soon" },
    { name: "IDFC First Bank", status: "coming-soon" }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section id="integrations" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          {...fadeIn}
        >
          <h2 className="section-title">
            <span className="gradient-text">Seamless</span> Integrations
          </h2>
          <p className="section-subtitle">
            Connect your ERP systems with major Indian banks through our unified API platform, enabling automated financial workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ERP Integrations */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">ERP Systems</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {erpSystems.map((erp, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden group-hover:scale-110 transition-transform">
                      <span className="text-primary-600 font-bold text-lg">{erp.name.charAt(0)}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{erp.name}</h4>
                  </div>
                  <p className="text-slate-600">{erp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bank Integrations */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Banking Partners</h3>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {banks.map((bank, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-2">
                      <span className="text-primary-700 font-bold">{bank.name.split(' ').map(word => word[0]).join('')}</span>
                    </div>
                    <p className="text-center text-sm font-medium text-slate-800">{bank.name}</p>
                    {bank.status === 'live' ? (
                      <span className="mt-1 text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Live</span>
                    ) : (
                      <span className="mt-1 text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full">Coming Soon</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-primary-50 border border-primary-100 rounded-lg p-6 mt-16 text-center max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-slate-900">Don't see your system or bank?</h3>
          <p className="text-slate-600 mb-5">
            We're constantly expanding our integration capabilities. Contact us to discuss your specific requirements.
          </p>
          <a href="#contact" className="btn btn-primary">
            Request Custom Integration
          </a>
        </motion.div>
      </div>
    </section>
  );
};
