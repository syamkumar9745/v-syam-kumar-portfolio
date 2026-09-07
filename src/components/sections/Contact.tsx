import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Terminal, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject || 'AI Engineering Opportunity')}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#040816] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct Contact & Collaboration"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Have an AI Project or Opportunity?"
          subtitle="Let's engineer intelligent, high-precision, and impactful machine learning systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between border-indigo-500/30" elevation="high">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Get in Touch
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    Available for AI Engineering, Generative AI development, and Machine Learning engineering roles.
                  </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="space-y-3">
                  {/* Email */}
                  <div className="p-3.5 rounded-xl bg-[#0b1120] border border-white/10 flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold text-slate-500 font-mono">Email</span>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-3.5 rounded-xl bg-[#0b1120] border border-white/10 flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold text-slate-500 font-mono">Phone</span>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                        >
                          {PERSONAL_INFO.phoneFormatted}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={copyPhone}
                      className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy phone to clipboard"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-3.5 rounded-xl bg-[#0b1120] border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-400 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold text-slate-500 font-mono">Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Profiles Grid */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                  Verified Coding & Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1120] hover:bg-slate-900 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-indigo-400" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1120] hover:bg-slate-900 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1120] hover:bg-slate-900 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-amber-400" />
                      <span>LeetCode</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.hackerrank}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1120] hover:bg-slate-900 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>HackerRank</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between border-white/10" elevation="high">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Send a Direct Message
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    RESPONSE &lt; 12 HRS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Initiate a conversation regarding full-time roles, engineering collaborations, or research discussions.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#030712] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#030712] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">Subject / Objective</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. AI Engineering Role / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#030712] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project specifications or opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#030712] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      className="w-full"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {formSubmitted ? 'Preparing Mail Client...' : 'Dispatch Message'}
                    </Button>
                  </div>
                </form>
              </div>

              {formSubmitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Your default mail client has been opened to dispatch this message.</span>
                </div>
              )}
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
