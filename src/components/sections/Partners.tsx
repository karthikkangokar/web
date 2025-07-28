import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const Partners = () => {
  const partnerLogos = [
    { name: "FinTech Hub", abbr: "FH" },
    { name: "CloudERP", abbr: "CE" },
    { name: "TechFinance", abbr: "TF" },
    { name: "Digital Banking Pro", abbr: "DB" },
    { name: "Accounting Plus", abbr: "A+" },
    { name: "Smart Accounts", abbr: "SA" }
  ];

  const benefits = [
    "Streamlined banking operations",
    "Reduced manual data entry",
    "Error-free reconciliations",
    "Enhanced security measures",
    "Real-time financial insights",
    "Improved cash flow management"
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-lg text-slate-600">
            Industry leaders rely on BankFusion to connect their financial systems with banking APIs.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <div className="py-8 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white w-36 h-20 rounded-lg shadow-sm flex items-center justify-center border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <span className="font-bold text-2xl bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
                    {partner.abbr}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-slate-900">
            Partner Success Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
