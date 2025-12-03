import React from 'react';
import { SectionId, Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  id: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "YSC tripled our signups in 30 days with a rewritten sales page.",
    author: "SaaS Founder"
  },
  {
    quote: "Caller agents saved us 40 hours a month and boosted reservations.",
    author: "Restaurant Owner"
  },
  {
    quote: "A strategic partner who delivers results that actually matter.",
    author: "E-commerce Manager"
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-[#08121c] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">Social Proof</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">What clients say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
              <div className="mb-6">
                 {/* Star rating simulation */}
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(star => (
                     <div key={star} className="w-4 h-4 text-yellow-500 fill-current">★</div>
                   ))}
                 </div>
                 <p className="text-lg text-gray-200 font-medium leading-relaxed">
                   {t.quote}
                 </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-secondary to-purple-500" />
                <div>
                  <p className="font-bold text-white text-sm">{t.author}</p>
                  <p className="text-xs text-gray-500">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;