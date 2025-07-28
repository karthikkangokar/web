import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "BankFusion has transformed how we manage our finances. The API integration with our Tally ERP system has eliminated manual data entry and reduced errors significantly.",
      author: "Rajesh Kumar",
      position: "CFO, TechSolutions India",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
    },
    {
      quote: "The seamless connection between our ERPNext system and multiple bank accounts has streamlined our reconciliation process. It used to take days, now it's done in minutes.",
      author: "Priya Sharma",
      position: "Finance Director, GrowthRetail",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
    },
    {
      quote: "As a growing business with operations across India, managing multiple bank accounts was challenging. BankFusion's API platform simplified everything with real-time visibility.",
      author: "Vikram Singh",
      position: "CEO, Marketplace Ventures",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
    }
  ];

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Are <span className="text-primary-400">Saying</span>
          </h2>
          <p className="text-lg text-slate-300">
            Hear from businesses that have transformed their financial operations with BankFusion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 relative"
            >
              <div className="absolute top-6 left-6 opacity-20">
                <Quote className="h-10 w-10 text-primary-300" />
              </div>
              <div className="relative z-10">
                <p className="text-slate-200 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-slate-600">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-slate-300">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl text-slate-300 mb-6">Ready to transform your financial operations?</p>
          <a href="#contact" className="btn btn-primary">
            Request a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};
