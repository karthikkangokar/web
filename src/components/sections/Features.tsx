import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  ArrowDownUp, 
  CheckCircle, 
  CreditCard, 
  FileText, 
  Clock, 
  Database
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <LineChart className="h-10 w-10 text-primary-600" />,
      title: "Real-Time Balance Inquiry",
      description: "Get instant access to account balances across multiple banks from within your ERP system."
    },
    {
      icon: <ArrowDownUp className="h-10 w-10 text-primary-600" />,
      title: "Fund Transfers",
      description: "Initiate NEFT, RTGS, and IMPS transfers directly from your business applications."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary-600" />,
      title: "Auto Reconciliation",
      description: "Automatically match bank transactions with your accounting records for error-free reconciliation."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary-600" />,
      title: "Payment Collection",
      description: "Generate payment links and collect funds through multiple payment methods."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary-600" />,
      title: "Statement Retrieval",
      description: "Fetch bank statements and transaction history programmatically on demand or scheduled basis."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: "Scheduled Payments",
      description: "Set up recurring payments and batch transfers with approval workflows."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="features" className="section bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#0284c7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary-100 p-2 rounded-full">
                <Database className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h2 className="section-title">
              Powerful Platform <span className="gradient-text">Features</span>
            </h2>
            <p className="section-subtitle">
              Our comprehensive suite of banking API features empowers your business with seamless financial operations integration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="bg-primary-50 p-3 inline-flex rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#contact" className="btn btn-primary">
            Get Started with These Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};
