import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const benefits = [
    "Streamline financial processes with automated workflows",
    "Reduce manual data entry and eliminate human errors",
    "Gain real-time visibility into banking operations",
    "Enhance security with bank-grade encryption",
    "Save time and resources with efficient integrations",
    "Improve cash flow management and forecasting"
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-primary-500/10 rounded-2xl p-6 lg:p-8 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary-500 rounded-tl-lg -translate-x-4 -translate-y-4"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary-500 rounded-br-lg translate-x-4 translate-y-4"></div>
              
              <img
                src="https://images.pexels.com/photos/7821583/pexels-photo-7821583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="BankFusion Platform Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Connecting Your Business with <span className="gradient-text">Banking APIs</span>
            </h2>
            
            <p className="text-slate-700 mb-8">
              At BankFusion, we're revolutionizing how businesses interact with banking systems. Our platform provides seamless integration between your enterprise resource planning (ERP) systems and major Indian banks, automating financial workflows and eliminating manual processes.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Why choose BankFusion?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#features" className="btn btn-primary inline-flex items-center">
              Explore Our Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
