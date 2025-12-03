export interface Service {
  title: string;
  desc: string;
  icon?: string;
}

export interface PortfolioItem {
  type: string;
  desc: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export enum SectionId {
  Hero = 'hero',
  Services = 'services',
  Demo = 'demo',
  Portfolio = 'portfolio',
  Testimonials = 'testimonials',
  Contact = 'contact',
}