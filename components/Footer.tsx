import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050c14] border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <img 
              src="ysc-logo.png" 
              alt="YSC Monogram" 
              className="w-8 h-8 object-contain opacity-80" 
            />
            <span className="font-display font-bold text-xl text-white">YouSaidCopy</span>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YouSaidCopy. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;