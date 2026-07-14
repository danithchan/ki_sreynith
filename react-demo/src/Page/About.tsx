import Reveal from "../component/Reveal";

const aboutPoints = [
  <>
    I'm a{" "}
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      Computer Science student
    </strong>{" "}
    at the Royal University of Phnom Penh with a strong passion for Frontend
    Development and creating modern web experiences.
  </>,

  <>
    I build responsive and interactive applications using{" "}
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      React, TypeScript, Tailwind CSS, JavaScript, and Node.js
    </strong>
    , while continuously learning modern web technologies and best practices.
  </>,

  <>
    My featured project is{" "}
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      Student Room Rental Management System (SSRMS)
    </strong>
    , where I developed authentication, dashboards, room management, and a
    PostgreSQL backend using Express.js and Prisma ORM.
  </>,

  <>
    I'm currently looking for an{" "}
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      Internship or Junior Frontend Developer
    </strong>{" "}
    opportunity where I can contribute, learn from experienced developers, and
    continue growing my skills.
  </>,
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          About Me
        </h2>
      </Reveal>

      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        {aboutPoints.map((text, i) => (
          <Reveal key={i} delayMs={i * 100} as="div">
            <div className="flex gap-4 px-6 py-5 border-b last:border-b-0 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 transition-colors">
              <span className="font-mono font-bold text-pink-500 shrink-0">
                +
              </span>

              <span className="leading-7 text-neutral-600 dark:text-neutral-300">
                {text}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}