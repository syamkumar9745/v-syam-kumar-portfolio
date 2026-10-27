import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'projects',
        'skills',
        'experience',
        'certifications',
        'philosophy',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111318]/92 backdrop-blur-xl border-b border-[#C6A86B]/20 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#242730] text-[#E0C58E] flex items-center justify-center font-bold text-sm tracking-wider shadow-gold-sm group-hover:border-[#C6A86B] transition-colors border border-[#C6A86B]/40">
              VSK
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#F5F0E6] leading-none group-hover:text-[#E0C58E] transition-colors">
                {PERSONAL_INFO.name}
              </span>

              <span className="text-[11px] text-[#9699A3] font-medium tracking-tight mt-0.5 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#176B55] animate-pulse" />
                AI Engineer · GenAI · ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#181B22]/90 p-1.5 rounded-full border border-[#C6A86B]/20 backdrop-blur-md shadow-glass-warm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#C6A86B] text-[#111318] shadow-gold border border-[#E0C58E]/40 font-bold'
                      : 'text-[#9699A3] hover:text-[#F5F0E6] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#F5F0E6] hover:text-[#E0C58E] bg-[#242730]/90 hover:bg-[#2E323E] border border-[#C6A86B]/30 hover:border-[#C6A86B]/70 transition-all cursor-pointer font-mono shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-[#C6A86B]" />
                <span>Resume</span>
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#176B55] hover:bg-[#104638] shadow-emerald transition-all hover:-translate-y-0.5 cursor-pointer border border-[#176B55]/50 font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E0C58E]" />
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#242730] border border-[#C6A86B]/30 text-[#F5F0E6] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#C6A86B]" />
              ) : (
                <Menu className="w-5 h-5 text-[#C6A86B]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] p-4 bg-[#111318]/98 backdrop-blur-2xl border-b border-[#C6A86B]/25 shadow-2xl transition-all">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#C6A86B]/20 text-[#E0C58E] font-semibold border border-[#C6A86B]/40'
                    : 'text-[#9699A3] hover:text-[#F5F0E6] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#C6A86B]/20 mt-2 flex flex-col gap-2">
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[#F5F0E6] bg-[#242730] hover:bg-[#2E323E] border border-[#C6A86B]/30"
                >
                  <FileText className="w-4 h-4 text-[#C6A86B]" />
                  <span>View Resume</span>
                </button>
              )}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-[#176B55] hover:bg-[#104638] shadow-emerald border border-[#176B55]/50"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
