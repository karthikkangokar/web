import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  AlertCircle 
} from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful } 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    // In a real implementation, this would send the data to a server
  };

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="20"
                y1="0"
                x2="20"
                y2="40"
                stroke="#0284c7"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>
      
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to transform your banking operations? Contact us to schedule a demo or discuss your specific requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              {isSubmitSuccessful ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-slate-900">Thanks for reaching out!</h3>
                  <p className="text-slate-600 mb-4">We've received your message and will get back to you soon.</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="btn btn-outline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
                      placeholder="john@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Your Company"
                        {...register('company')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="+91 98765 43210"
                        {...register('phone')}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
                      placeholder="I'm interested in learning more about your API banking platform..."
                      {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-900">Connect With Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Visit Our Office</h4>
                  <p className="text-slate-600">
                    BankFusion Technologies Pvt. Ltd.<br />
                    Financial District, Mumbai, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">
                    <a href="mailto:contact@bankfusion.tech" className="text-primary-600 hover:text-primary-700">
                      contact@bankfusion.tech
                    </a><br />
                    <a href="mailto:support@bankfusion.tech" className="text-primary-600 hover:text-primary-700">
                      support@bankfusion.tech
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">
                    <a href="tel:+919876543210" className="text-primary-600 hover:text-primary-700">
                      +91 987 654 3210
                    </a><br />
                    <span className="text-sm">Monday to Friday, 9am - 6pm IST</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <h4 className="font-semibold text-slate-900 mb-2">Looking for technical support?</h4>
              <p className="text-slate-600 mb-4">
                Our developer support team is available to help with your API integration questions.
              </p>
              <a 
                href="mailto:developers@bankfusion.tech" 
                className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
              >
                Contact Developer Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);
