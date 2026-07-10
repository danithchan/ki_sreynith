import Reveal from '../component/Reveal';

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          Experience & Education
        </h2>
      </Reveal>
      <div className="flex flex-col">
        {experience.map((item, i) => (
          <Reveal key={i} delayMs={i * 100}>
            <div className="flex gap-5 py-5 border-b last:border-b-0 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 transition-colors px-2 -mx-2 rounded-lg">
              <div className="font-mono text-[12.5px] text-neutral-400 dark:text-neutral-500 shrink-0 w-17.5 pt-0.5">
                {item.date}
              </div>
              <div>
                <strong className="font-display font-bold text-[16px] block mb-1.5">{item.title}</strong>
                <p className="text-neutral-500 dark:text-neutral-400 text-[14.5px]">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
