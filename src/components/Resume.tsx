import React from 'react';
import { Code2, Download, Eye, Mail, ShieldCheck } from 'lucide-react';

const Resume = () => {
  const handleView = (file: string) => {
    window.open(file, '_blank');
  };

  const handleDownload = (file: string, downloadName: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumes = [
    {
      title: 'Cybersecurity Resume',
      label: 'SOC / Security Analysis / VA',
      file: '/Rohit_Zore_Cybersecurity_Resume.pdf',
      downloadName: 'Rohit_Zore_Cybersecurity_Resume.pdf',
      desc: 'Best for SOC, vulnerability assessment, network security, security operations, and analyst internships.',
      icon: ShieldCheck,
      color: 'var(--c-accent)',
      tags: ['SOC', 'Vulnerability Assessment', 'Wireshark', 'Python'],
    },
    {
      title: 'Full-Stack Resume',
      label: 'Web / Mobile Development',
      file: '/Rohit_Zore_FullStack_Resume.pdf',
      downloadName: 'Rohit_Zore_FullStack_Resume.pdf',
      desc: 'Best for React Native, full-stack web, REST API, Supabase, MySQL, and product development roles.',
      icon: Code2,
      color: 'var(--c-accent-2)',
      tags: ['React Native', 'Supabase', 'MySQL', 'REST APIs'],
    },
  ];

  return (
    <section id="resume" className="section-wrap resume-section">
      <div className="section-inner">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Resume</p>
            <h2 className="section-heading">
              Pick the <span className="warm-text">Right Version</span>
            </h2>
          </div>
          <p className="section-desc lg:justify-self-end">
            The details are split above for scanning. This section stays simple: view or download the role-specific resume.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {resumes.map((resume) => (
            <article key={resume.title} className="glass-panel reveal reveal-up p-5 md:p-6">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${resume.color}22`, color: resume.color }}
                >
                  <resume.icon size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--c-text-muted)]">{resume.label}</span>
                  <h3 className="mt-1 font-['Outfit'] text-2xl font-black uppercase leading-none text-[var(--c-text)]">
                    {resume.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--c-text-muted)]">{resume.desc}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {resume.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button className="btn-outline" onClick={() => handleView(resume.file)}>
                  <Eye size={16} /> View
                </button>
                <button className="btn-primary" onClick={() => handleDownload(resume.file, resume.downloadName)}>
                  <Download size={16} /> Download
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-stretch gap-3 rounded-lg border border-[var(--c-border)] bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold leading-6 text-[var(--c-text-muted)]">
            Want the quickest path? Use the contact form with the role type and I will reply with the matching resume.
          </p>
          <button className="btn-outline sm:w-auto" onClick={scrollToContact}>
            <Mail size={16} /> Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
