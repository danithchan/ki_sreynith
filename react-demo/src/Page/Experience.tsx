import Reveal from "../component/Reveal";

const experience = [
  {
    date: "2023 - Present",
    title: "Bachelor of Computer Science",
    description:
      "Currently studying Computer Science at the Royal University of Phnom Penh (RUPP), focusing on software development, web technologies, databases, and problem-solving.",
  },
  {
    date: "2026",
    title: "Student Room Rental Management System (SSRMS)",
    description:
      "Developed a full-stack web application using React, TypeScript, Express.js, PostgreSQL, and Prisma ORM. Implemented authentication, room management, dashboards, and responsive user interfaces.",
  },
  {
    date: "2026",
    title: "Personal Portfolio Website",
    description:
      "Designed and built a modern, responsive portfolio using React, Tailwind CSS, and TypeScript with smooth animations, reusable components, and dark mode support.",
  },
  {
    date: "2025 - Present",
    title: "Frontend Development Learning",
    description:
      "Continuously improving my skills in React, TypeScript, Tailwind CSS, React Router, Context API, React Hook Form, Zod, and modern frontend best practices by building real-world projects.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-10">
          Education & Experience
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((item, i) => (
          <Reveal key={i} delayMs={i * 100}>
            <div
              className="
                h-full flex flex-col
                p-6 rounded-2xl
                border border-neutral-200 dark:border-neutral-800
                bg-white dark:bg-neutral-900/40
                hover:-translate-y-1
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <span className="font-mono text-sm text-pink-500 mb-3">
                {item.date}
              </span>

              <h3 className="font-display text-lg font-bold mb-3 text-neutral-900 dark:text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}