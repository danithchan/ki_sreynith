import Reveal from '../component/Reveal';
import { useReveal } from '../hooks/useReveal';

type Skill = { name: string; level: number };
type SkillGroup = { label: string; skills: Skill[] };

const featured = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'];

const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend Development',
    skills: [
      { name: 'React / Vite', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Chart.js', level: 75 },
      { name: 'HTML / CSS', level: 100 },
    ],
  },
  {
    label: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'Prisma', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'JWT Auth', level: 80 },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 70 },
    ],
  },
];

function SkillBar({ name, level, delayMs }: Skill & { delayMs: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="mb-5 last:mb-0">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="font-mono text-[12px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {name}
        </span>
        <span className="font-mono text-[12px] font-semibold text-neutral-900 dark:text-neutral-100">
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : '0%', transitionDelay: `${delayMs}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">Skills</h2>
      </Reveal>

      {/* Featured badges */}
      <Reveal delayMs={80}>
        <div className="flex flex-wrap gap-2.5 mb-10">
          {featured.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[13px] font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Category cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delayMs={gi * 120}>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 h-full hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1 h-5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                <h3 className="font-display font-bold text-[16px]">{group.label}</h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delayMs={si * 80} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
