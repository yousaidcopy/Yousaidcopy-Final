import React from 'react';
import { PenTool, Cpu, Monitor, Bot, LayoutTemplate, Zap } from 'lucide-react';
import { SectionId, Service } from '../types';

interface ServicesProps {
  id: string;
}

const servicesData: (Service & { iconComponent: React.ElementType })[] = [
  {
    title: "Conversion Copywriting",
    desc: "Landing pages, sales pages, email funnels and product messaging engineered to convert.",
    iconComponent: PenTool,
  },
  {
    title: "AI-Powered Content Systems",
    desc: "Automated pipelines for blog, social and ads with consistent quality and speed.",
    iconComponent: Cpu,
  },
  {
    title: "Websites & UX Design",
    desc: "Fast, responsive, SEO-ready websites built to convert and showcase your brand.",
    iconComponent: Monitor,
  },
  {
    title: "Automation & Bots",
    desc: "AI caller agents for reservations, chatbots, and workflow automations.",
    iconComponent: Bot,
  },
  {
    title: "Done-for-You Campaigns",
    desc: "Strategy, copy, and automation handled end-to-end so you launch confidently.",
    iconComponent: LayoutTemplate,
  },
  {
    title: "Anything Your Business Needs",
    desc: "Custom tools, content, and systems based on exactly what you need.",
    iconComponent: Zap,
  },
];

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 relative bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">What we do</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Trusted solutions for growing brands</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-glass border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,162,255,0.15)]"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <service.iconComponent className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{service.title}</h4>
              <p className="text-muted leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;