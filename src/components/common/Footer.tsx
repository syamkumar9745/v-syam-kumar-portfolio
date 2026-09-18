import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          <div>
            <div className="text-xl font-bold text-white mb-3">V. SYAM KUMAR</div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AI Engineer focused on machine learning, Generative AI, RAG systems,
              and data-driven applications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/syamkumar9745"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/syam-kumar-63b848303"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:syamkumar7586@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} V. Syam Kumar</span>
          <span>AI Engineering • Machine Learning • Generative AI • RAG</span>
        </div>
      </div>
    </footer>
  );
};


