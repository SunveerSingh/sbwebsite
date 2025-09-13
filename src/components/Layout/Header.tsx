import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = 'https://wa.me/16479323409';
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: "Let's Work", path: '/lets-work.html' },
    { name: 'University', path: '/university.html' },
    { name: 'Cowriter', path: '/cowriter.html' },
    { name: 'Sound Kits', path: '/sound-kits.html' }
  ];

  // Get current page from URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path.includes('lets-work')) return '/lets-work.html';
    if (path.includes('university')) return '/university.html';
    if (path.includes('cowriter')) return '/cowriter.html';
    if (path.includes('sound-kits')) return '/sound-kits.html';
    return '/';
  };

  const currentPage = getCurrentPage();

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-sm border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="/" 
            className="text-white font-light text-lg tracking-wider hover:text-white/80 transition-colors"
          >
            SIGNATURE BY SB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-sm font-light transition-colors ${
                  currentPage === item.path 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 text-sm font-light hover:bg-white/90 transition-colors border border-white"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-white/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`block text-sm font-light transition-colors ${
                    currentPage === item.path 
                      ? 'text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-6 py-3 text-sm font-light hover:bg-white/90 transition-colors border border-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}