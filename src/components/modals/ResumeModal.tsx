import React from 'react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, CERTIFICATIONS } from '../../data/portfolioData';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#F5F0E6] text-[#111318] rounded-3xl shadow-2xl border border-[#D9D1C3] overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#EFE8DB] border-b border-[#D9D1C3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C6A86B]" />
            <span className="font-bold text-sm text-[#111318] font-mono">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#C6A86B] text-[#111318] hover:bg-[#E0C58E] transition-colors cursor-pointer shadow-sm border border-[#C6A86B]/60 font-mono"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#111318] hover:bg-[#D9D1C3]/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-[#111318] text-xs sm:text-sm leading-normal bg-[#F5F0E6]">
          
          {/* Header Section */}
          <div className="border-b border-[#D9D1C3] pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111318] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-[#8A6E35] mt-0.5 font-mono">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#242730]/80">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#176B55]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#176B55]" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phoneFormatted}</a>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#176B55]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#104638] border-b-2 border-[#D9D1C3] pb-1 mb-2.5 flex items-center gap-1.5 font-mono">
              <GraduationCap className="w-4 h-4 text-[#176B55]" />
              <span>Education</span>
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-sm text-[#111318]">
                  Jeppiaar University, Chennai
                </h3>
                <p className="text-xs text-[#242730]/80">
                  Bachelor of Technology in Computer Science & Engineering (AI & Data Science)
                </p>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="font-bold text-[#176B55]">8.00 CGPA</span>
                <span className="block text-[#9699A3]">2023 — 2027</span>
              </div>
            </div>
          </div>

          {/* Practical Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#104638] border-b-2 border-[#D9D1C3] pb-1 mb-2.5 flex items-center gap-1.5 font-mono">
              <Briefcase className="w-4 h-4 text-[#176B55]" />
              <span>Experience & Internships</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-[#111318]">{exp.company} — <span className="font-semibold text-[#8A6E35]">{exp.role}</span></h3>
                    <span className="text-xs font-mono text-[#9699A3]">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-1">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 text-xs text-[#242730]/90">
                        <span className="text-[#176B55] mt-1 font-bold">▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Technical Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#104638] border-b-2 border-[#D9D1C3] pb-1 mb-2.5 flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#176B55]" />
              <span>Key Projects & Systems</span>
            </h2>
            <div className="space-y-3.5">
              {PROJECTS.map((p, i) => (
                <div key={i} className="p-3 bg-white rounded-xl border border-[#D9D1C3]/80 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-xs sm:text-sm text-[#111318]">{p.title}</h3>
                    <span className="text-[10px] font-mono text-[#8A6E35] font-semibold">{p.category}</span>
                  </div>
                  <p className="text-xs text-[#242730]/90">{p.description}</p>
                  <p className="text-[10px] font-mono text-[#9699A3]">
                    <strong className="text-[#111318]">Tech:</strong> {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#104638] border-b-2 border-[#D9D1C3] pb-1 mb-2.5 flex items-center gap-1.5 font-mono">
              <Award className="w-4 h-4 text-[#176B55]" />
              <span>Verified Industry Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="p-2.5 bg-white rounded-lg border border-[#D9D1C3]/80">
                  <p className="font-bold text-xs text-[#111318]">{cert.title}</p>
                  <p className="text-[10px] font-mono text-[#8A6E35]">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#EFE8DB] border-t border-[#D9D1C3] flex items-center justify-between text-xs text-[#9699A3] font-mono">
          <span>{PERSONAL_INFO.name} — Portfolio CV</span>
          <button
            onClick={onClose}
            className="text-xs text-[#111318] hover:underline cursor-pointer font-sans"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
