import Reveal from "../component/Reveal";

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
    title: "Student Room Rental Management System (SSRMS)",
    badge: "FEATURED",
    description:
      "A full-stack room rental management system built with React, Express.js, PostgreSQL, and Prisma ORM. Features include authentication, room management, dashboards, responsive UI, and secure backend APIs.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/danithchan/Room-Rental-Project",
  },
  {
    title: "Personal Portfolio",
    badge: "REACT",
    description:
      "A modern portfolio website showcasing my projects, skills, and experience with smooth animations, responsive layouts, dark mode, and reusable React components.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Coffee Shop Website",
    badge: "WEB",
    description:
      "A responsive coffee shop website with menu browsing, shopping cart, local storage, and payment method selection, built to practice responsive UI design.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Academy Landing Page",
    badge: "UI",
    description:
      "A clean and responsive educational landing page designed with modern typography, reusable components, and mobile-first design principles.",
    tags: ["HTML", "Tailwind CSS", "Responsive Design"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          Featured Projects
        </h2>

        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mb-10">
          Here are some of the projects I've built while learning frontend and
          full-stack development. Each project helped me strengthen my skills in
          React, TypeScript, responsive design, and backend development.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delayMs={i * 120}>
            <div
              className="
                h-full
                rounded-2xl
                border border-neutral-200 dark:border-neutral-800
                bg-white dark:bg-neutral-900/40
                p-6
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-pink-400
                transition-all duration-300
              "
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold">
                  {project.title}
                </h3>

                <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold">
                  {project.badge}
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 font-medium">
                <a
                  href={project.demoUrl}
                  className="text-pink-500 hover:underline"
                >
                  Live Demo →
                </a>

                <a
                  href={project.codeUrl}
                  className="text-neutral-500 hover:text-pink-500 transition"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}