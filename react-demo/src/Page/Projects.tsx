import Reveal from '../component/Reveal';

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

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          Projects Shipped
        </h2>
      </Reveal>
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <Reveal key={project.title} delayMs={i * 120}>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6.5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
