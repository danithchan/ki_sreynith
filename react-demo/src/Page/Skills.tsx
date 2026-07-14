import Reveal from "../component/Reveal";
import { useReveal } from "../hooks/useReveal";

type Skill = {
  name: string;
  level: number;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};

const featured = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
];

const skillGroups: SkillGroup[] = [
  {
    label: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    label: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Prisma ORM", level: 75 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    label: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Vite", level: 90 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delayMs,
}: Skill & { delayMs: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-5 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
          {name}
        </span>

        <span className="font-mono text-xs font-semibold text-pink-400">
          {level}%
        </span>
      </div>

      <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-pink-300 via-pink-400 to-rose-400 transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delayMs}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          Skills
        </h2>
      </Reveal>

      <Reveal delayMs={80}>
        <div className="relative overflow-hidden mb-10">
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-white dark:from-black to-transparent" />

          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-white dark:from-black to-transparent" />

          <div className="marquee">
            <div className="marquee-content">
              {[...featured, ...featured, ...featured].map((skill, index) => (
                <span
                  key={index}
                  className="
                    whitespace-nowrap
                    font-mono
                    text-[13px]
                    font-semibold
                    px-5
                    py-2.5
                    rounded-xl
                    border
                    border-pink-200
                    dark:border-pink-500/20
                    bg-pink-50
                    dark:bg-pink-500/10
                    text-pink-500
                    dark:text-pink-300
                    hover:-translate-y-1
                    hover:bg-pink-100
                    dark:hover:bg-pink-500/20
                    hover:shadow-lg
                    hover:shadow-pink-300/20
                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delayMs={gi * 120}>
            <div
              className="
                rounded-2xl
                border
                border-neutral-200
                dark:border-neutral-800
                p-6
                h-full
                bg-white
                dark:bg-neutral-900/40
                hover:border-pink-300
                dark:hover:border-pink-500
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-pink-300/20
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-6 rounded-full bg-pink-500" />

                <h3 className="font-display font-bold text-lg">
                  {group.label}
                </h3>
              </div>

              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delayMs={si * 80}
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}