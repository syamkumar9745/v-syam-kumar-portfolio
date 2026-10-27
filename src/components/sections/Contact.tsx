import React, { useState } from 'react';

import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { PERSONAL_INFO } from '../../data/portfolioData';

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  MessageSquare,
  Github,
  Linkedin,
  Code2,
  Terminal,
  ArrowUpRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoSubject = encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    );

    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#111318] border-t border-[#242730] relative luxury-grid-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          badgeIcon={<MessageSquare className="w-3.5 h-3.5" />}
          title="Let's Connect"
          subtitle="Open to conversations about full-time AI/ML engineering roles, internships, and collaborative projects."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">

          {/* Contact Information & Links */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 bg-[#242730] rounded-2xl border border-[#C6A86B]/20 shadow-obsidian-card relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0C58E]/25 to-transparent pointer-events-none" />

              <h3 className="text-xl font-bold text-[#F5F0E6] tracking-tight mb-4">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#181B22] border border-[#C6A86B]/20 hover:border-[#C6A86B]/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#242730] border border-[#C6A86B]/30 text-[#C6A86B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#9699A3]">
                      Email
                    </p>

                    <p className="text-xs sm:text-sm font-semibold text-[#F5F0E6] group-hover:text-[#E0C58E] transition-colors truncate">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#181B22] border border-[#C6A86B]/20 hover:border-[#C6A86B]/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#242730] border border-[#C6A86B]/30 text-[#C6A86B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#9699A3]">
                      Phone
                    </p>

                    <p className="text-xs sm:text-sm font-semibold text-[#F5F0E6] group-hover:text-[#E0C58E] transition-colors font-mono">
                      {PERSONAL_INFO.phoneFormatted}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#181B22] border border-[#C6A86B]/20">
                  <div className="w-9 h-9 rounded-lg bg-[#242730] border border-[#C6A86B]/30 text-[#176B55] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#9699A3]">
                      Location
                    </p>

                    <p className="text-xs sm:text-sm font-semibold text-[#F5F0E6]">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social profiles */}
              <div className="mt-6 pt-5 border-t border-[#C6A86B]/20">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#9699A3] mb-3">
                  Profiles
                </p>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/syamkumar9745"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#181B22] border border-[#C6A86B]/30 text-[#F5F0E6] hover:text-[#E0C58E] hover:border-[#C6A86B] transition-all font-mono"
                  >
                    <Github className="w-3.5 h-3.5 text-[#C6A86B]" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9699A3]" />
                  </a>

                  <a
                    href="https://linkedin.com/in/syam-kumar-63b848303"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#181B22] border border-[#C6A86B]/30 text-[#F5F0E6] hover:text-[#E0C58E] hover:border-[#C6A86B] transition-all font-mono"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#C6A86B]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9699A3]" />
                  </a>

                  <a
                    href="https://leetcode.com/u/syamkumar9745/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#181B22] border border-[#C6A86B]/30 text-[#F5F0E6] hover:text-[#E0C58E] hover:border-[#C6A86B] transition-all font-mono"
                  >
                    <Code2 className="w-3.5 h-3.5 text-[#176B55]" />
                    <span>LeetCode</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9699A3]" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#242730] rounded-2xl border border-[#C6A86B]/20 shadow-obsidian-card relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0C58E]/25 to-transparent pointer-events-none" />

              <h3 className="text-xl font-bold text-[#F5F0E6] tracking-tight mb-2">
                Send a Message
              </h3>

              <p className="text-xs text-[#9699A3] mb-6">
                Fill in the details below to dispatch an email directly to my inbox.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-[#D9D1C3] mb-1.5"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B22] border border-[#C6A86B]/30 text-sm text-[#F5F0E6] placeholder-[#9699A3]/60 focus:outline-none focus:border-[#C6A86B] focus:ring-1 focus:ring-[#C6A86B] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-[#D9D1C3] mb-1.5"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B22] border border-[#C6A86B]/30 text-sm text-[#F5F0E6] placeholder-[#9699A3]/60 focus:outline-none focus:border-[#C6A86B] focus:ring-1 focus:ring-[#C6A86B] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-[#D9D1C3] mb-1.5"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="AI Engineering Role / Internship / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B22] border border-[#C6A86B]/30 text-sm text-[#F5F0E6] placeholder-[#9699A3]/60 focus:outline-none focus:border-[#C6A86B] focus:ring-1 focus:ring-[#C6A86B] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-[#D9D1C3] mb-1.5"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about your team, timeline, goals, or the problem you're looking to solve..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B22] border border-[#C6A86B]/30 text-sm text-[#F5F0E6] placeholder-[#9699A3]/60 focus:outline-none focus:border-[#C6A86B] focus:ring-1 focus:ring-[#C6A86B] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="emerald"
                    size="lg"
                    className="w-full"
                    icon={
                      formSubmitted ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {formSubmitted
                      ? 'Email Client Opening...'
                      : 'Dispatch Message via Email'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
