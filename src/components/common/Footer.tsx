import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#C6A86B]/20 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          <div>
            <div className="text-xl font-bold text-[#F5F0E6] tracking-tight mb-3">V. SYAM KUMAR</div>
            <p className="text-sm text-[#9699A3] leading-relaxed max-w-sm">
              AI Engineer focused on Machine Learning, Generative AI, RAG systems,
              and data-driven applications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F0E6] mb-3">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#D9D1C3]/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#C6A86B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F0E6] mb-3">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/syamkumar9745"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[#D9D1C3] hover:text-[#C6A86B] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/syam-kumar-63b848303"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[#D9D1C3] hover:text-[#C6A86B] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:syamkumar7586@gmail.com"
                aria-label="Email"
                className="text-[#D9D1C3] hover:text-[#C6A86B] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#242730] pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[#9699A3] font-mono">
          <span>© {new Date().getFullYear()} V. Syam Kumar</span>
          <span>AI Engineering · Machine Learning · Generative AI · RAG</span>
        </div>
      </div>
    </footer>
  );
};
