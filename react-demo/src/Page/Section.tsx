type Project = {
  title: string;
  badge: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};
const projects: Project[] = [
  {
    title: 'SSRMS',
    badge: 'FEATURED',
    description:
      'A full-stack room rental management system — rooms, tenants, contracts, invoices, and maintenance requests, with dashboard analytics and a separate tenant portal.',
    tags: ['React', 'TypeScript', 'Prisma', 'PostgreSQL'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Academy',
    badge: 'WEB',
    description:
      'A polished e-learning landing page focused on clean layout, typography, and course presentation.',
    tags: ['HTML', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Mini Browser Game',
    badge: 'REACT',
    description:
      'A small interactive React game built to practice state management and conditional rendering.',
    tags: ['React', 'TypeScript'],
    demoUrl: '#',
    codeUrl: '#',
  },
];

const experience = [
  {
    date: '2026',
    title: 'Built SSRMS',
    description:
      'Designed and shipped a full-stack room rental system solo, from database schema to deployment planning.',
  },
  {
    date: '2025',
    title: 'Deepened React Fundamentals',
    description:
      'Studied useReducer, useMemo, useContext, and useCallback in depth, applied directly to real project code.',
  },
  {
    date: '2025',
    title: 'Student, Web Development & Statistics',
    description: 'Coursework spanning full-stack web development and applied statistics.',
  },
];

const skillGroups = [
  { label: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Chart.js'] },
  { label: 'Backend', skills: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT Auth'] },
  { label: 'Tools', skills: ['Git', 'VS Code', 'Postman', 'Figma'] },
];

const aboutPoints = [
  <>
    Full-stack developer focused on{' '}
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      React, TypeScript, and Node.js
    </strong>
    , with a habit of building complete systems rather than isolated pieces.
  </>,
  <>
    Built <strong className="font-semibold text-neutral-900 dark:text-neutral-100">SSRMS</strong> solo —
    covering auth, file uploads, dashboards, and automated email flows on a Node/Express/PostgreSQL backend.
  </>,
  <>
    Values clean architecture and interfaces that don't make people think twice. Currently looking for a
    team to grow with.
  </>,
];

export default function Section() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          About Me
        </h2>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {aboutPoints.map((text, i) => (
            <div
              key={i}
              className="flex gap-3.5 px-5.5 py-4 border-b last:border-b-0 border-neutral-200 dark:border-neutral-800 text-[15px]"
            >
              <span className="font-mono font-bold text-neutral-900 dark:text-neutral-100 shrink-0">+</span>
              <span className="text-neutral-500 dark:text-neutral-400">{text}</span>
            </div>
          ))}
        </div>
      </section>
      {/* SKILLS */}
      <section id="skills" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">Skills</h2>
        <div className="flex flex-col gap-5.5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="font-mono text-[12.5px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mb-2.5">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[13px] bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 px-3 py-1.5 rounded-md hover:-translate-y-0.5 transition-transform"
                  >
                    + {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          Projects Shipped
        </h2>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6.5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between gap-2.5 mb-3 flex-wrap">
                <span className="font-display font-bold text-[19px]">{project.title}</span>
                <span className="font-mono text-[11.5px] font-bold bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded-md">
                  {project.badge}
                </span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 text-[14.5px] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11.5px] text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4.5 text-[13.5px] font-semibold">
                <a href={project.demoUrl} className="border-b border-transparent hover:border-current transition-colors">
                  Live Demo →
                </a>
                <a
                  href={project.codeUrl}
                  className="text-neutral-500 dark:text-neutral-400 border-b border-transparent hover:border-current transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          Experience & Education
        </h2>
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 py-5 border-b last:border-b-0 border-neutral-200 dark:border-neutral-800"
            >
              <div className="font-mono text-[12.5px] text-neutral-400 dark:text-neutral-500 shrink-0 w-17.5 pt-0.5">
                {item.date}
              </div>
              <div>
                <strong className="font-display font-bold text-[16px] block mb-1.5">{item.title}</strong>
                <p className="text-neutral-500 dark:text-neutral-400 text-[14.5px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}