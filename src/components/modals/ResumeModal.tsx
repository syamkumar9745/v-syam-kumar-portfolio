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
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl border border-white/20 overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-sm text-slate-900 font-mono">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm leading-normal bg-white">
          
          {/* Header Section */}
          <div className="border-b border-slate-300 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-700 mt-0.5 font-mono">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phoneFormatted}</a>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5 font-mono">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Education</span>
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-slate-900">{PERSONAL_INFO.education.institution}</div>
                <div className="text-slate-700">{PERSONAL_INFO.education.degree}</div>
                <div className="text-indigo-700 font-medium">{PERSONAL_INFO.education.specialization}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-emerald-700 font-mono">CGPA: {PERSONAL_INFO.education.cgpa}</div>
                <div className="text-slate-500 text-xs">Expected June 2027</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5 font-mono">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>Internships & Experience</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{exp.company} — <span className="text-indigo-700 font-normal">{exp.role}</span></span>
                    <span className="text-xs text-slate-500 font-normal">{exp.period}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-600">
                    {exp.description.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5 font-mono">
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>Selected AI & Data Science Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 4).map((p, i) => (
                <div key={i}>
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>{p.title} <span className="font-normal text-slate-500 text-xs">({p.technologies.slice(0, 3).join(', ')})</span></span>
                    <span className="text-xs text-indigo-700 font-mono">{p.badge}</span>
                  </div>
                  <p className="text-slate-600 text-xs mt-0.5">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5 font-mono">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">{c.title}</div>
                  <div className="text-slate-500 text-[11px]">{c.issuer} • {c.category}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
