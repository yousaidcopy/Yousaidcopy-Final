import React from 'react';
import { PortfolioItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  id: string;
}

const portfolioData: PortfolioItem[] = [
  {
    type: "Website Build",
    desc: "Conversion-focused SaaS landing page with modern UI for a FinTech startup.",
    // Image: Sleek, dark dashboard interface
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    type: "AI Content Flow",
    desc: "End-to-end pipeline that auto-generates, schedules and publishes LinkedIn content.",
    // Image: Abstract neural network / AI visualization
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    type: "Automated Caller Agent",
    desc: "AI-powered reservation system for a restaurant chain that increased bookings by 40%.",
    // Image: High-end microphone / voice tech vibe
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&w=800&q=80"
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-primary relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Recent & Example Work</h3>
          </div>
          <button className="group text-gray-400 hover:text-white flex items-center gap-2 border-b border-transparent hover:border-white transition-all pb-1">
            View Full Portfolio <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#0f1f30] border border-white/5 hover:border-secondary/50 transition-all shadow-2xl hover:shadow-[0_0_30px_rgba(59,162,255,0.1)]">
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={item.image} 
                  alt={item.type} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary via-primary/80 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      {item.type}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-white text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;