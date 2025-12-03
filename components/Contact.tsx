import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id={id} className="py-24 relative bg-primary overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">Contact Us</h2>
              <h3 className="text-4xl font-display font-bold text-white mb-4">Ready to grow?</h3>
              <p className="text-muted text-lg">
                Book a free strategy call. We'll analyze your current setup and propose a system that scales.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold mb-1">Call Us</p>
                  <a href="tel:+923472080100" className="text-white text-lg hover:text-secondary transition-colors font-medium">
                    0347 2080100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold mb-1">Email Us</p>
                  <a href="mailto:yousaidcopy@gmail.com" className="text-white text-lg hover:text-secondary transition-colors font-medium">
                    yousaidcopy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold mb-1">Visit Us</p>
                  <p className="text-white text-lg font-medium">
                    6th Street North Karachi,<br/>Karachi, Sindh, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Received!</h4>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#08121c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#08121c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#08121c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    placeholder="+92 3..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#08121c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
                    placeholder="Tell us about your project goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-secondary/25 flex items-center justify-center gap-2"
                >
                  Request Proposal <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;