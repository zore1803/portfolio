import React from 'react';
import { Braces, Code2, Database, GitBranch, KeyRound, Network, Radar, Shield, Smartphone, Terminal, Wrench } from 'lucide-react';

const Skills = () => {
  const skillPanels = [
    {
      title: 'Security Logic',
      className: 'skills-panel-left',
      icon: Shield,
      color: 'var(--c-accent)',
      items: [
        { icon: Network, name: 'Assessment', detail: 'vulnerability scanning, reports' },
        { icon: Radar, name: 'Network Security', detail: 'Wireshark, TCP/IP, firewalls' },
        { icon: KeyRound, name: 'Threat & Risk', detail: 'CIA Triad, malware, OWASP Top 10' },
      ],
    },
    {
      title: 'Full Stack Build',
      className: 'skills-panel-right',
      icon: Code2,
      color: 'var(--c-accent-2)',
      items: [
        { icon: Braces, name: 'JavaScript / UI', detail: 'ES6+, HTML5, CSS3, responsive UI' },
        { icon: Smartphone, name: 'React Native', detail: 'Expo web and Android APK' },
        { icon: Database, name: 'Databases', detail: 'MySQL, Supabase PostgreSQL, CRUD' },
      ],
    },
    {
      title: 'Tools Pipeline',
      className: 'skills-panel-bottom',
      icon: Wrench,
      color: 'var(--c-violet)',
      items: [
        { icon: Terminal, name: 'Python / Linux', detail: 'scripting, automation, Ubuntu' },
        { icon: GitBranch, name: 'Tools', detail: 'Git, GitHub, Expo, Razorpay' },
      ],
    },
  ];

  const floatingSkills = [
    { text: 'BLE', cls: 'left-[7%] top-[45%]' },
    { text: 'JWT', cls: 'left-[33%] top-[27%]' },
    { text: 'RBAC', cls: 'right-[35%] top-[24%]' },
    { text: 'MySQL', cls: 'right-[10%] top-[46%]' },
    { text: 'OWASP', cls: 'left-[29%] bottom-[19%]' },
    { text: 'REST APIs', cls: 'right-[30%] bottom-[16%]' },
  ];

  return (
    <section id="skills" className="section-wrap skills-section">
      <div className="section-inner">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Skills</p>
            <h2 className="section-heading">
              Featured Skills
            </h2>
          </div>
          <p className="section-desc">
            The stack from my resumes: secure full-stack development, analyst-style assessment work, database ownership, authentication, and practical tooling.
          </p>
        </div>

        <div className="skills-map">
          <div className="skills-map-title">Skills</div>

          <div className="skills-backdrop-window skills-window-a">
            <span />
            <span />
            <span />
          </div>
          <div className="skills-backdrop-window skills-window-b">
            <span />
            <span />
          </div>

          <svg className="skills-wires" viewBox="0 0 1000 620" aria-hidden="true">
            <path d="M500 304 C408 232 346 188 246 184" />
            <path d="M500 304 C614 220 694 164 828 174" />
            <path d="M500 304 C474 405 438 487 334 512" />
            <path d="M500 304 C584 407 666 494 798 490" />
            <path d="M500 304 C370 330 246 350 120 316" />
            <path d="M500 304 C625 320 758 344 910 310" />
          </svg>

          <div className="skills-hub">
            <div className="skills-hub-ring" />
            <Shield size={34} />
            <span>Core</span>
          </div>

          {skillPanels.map((panel) => (
            <article key={panel.title} className={`skill-map-panel ${panel.className}`} style={{ '--panel-color': panel.color } as React.CSSProperties}>
              <div className="mb-4 flex items-center gap-3">
                <span className="skill-panel-icon">
                  <panel.icon size={19} />
                </span>
                <h3>{panel.title}</h3>
              </div>
              <div className="space-y-3">
                {panel.items.map((item) => (
                  <div key={item.name} className="skill-map-row">
                    <item.icon size={18} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}

          {floatingSkills.map((skill) => (
            <span key={skill.text} className={`tag skill-map-chip ${skill.cls}`}>
              {skill.text}
            </span>
          ))}

          <div className="avatar-ring skills-avatar">
            <img src="/lovable-uploads/dca1d829-b131-45a7-8d52-3cf6cd1550d2.png" alt="Rohit Zore" />
          </div>
          <div className="skills-avatar-tags">
            <span className="tag">Top 5% THM</span>
            <span className="tag">100+ Rooms</span>
            <span className="tag">77+ Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
