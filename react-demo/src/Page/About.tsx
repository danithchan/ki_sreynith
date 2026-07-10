import Reveal from '../component/Reveal';
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

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
          About Me
        </h2>
      </Reveal>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        {aboutPoints.map((text, i) => (
          <Reveal key={i} delayMs={i * 100} as="div">
            <div className="flex gap-3.5 px-5.5 py-4 border-b last:border-b-0 border-neutral-200 dark:border-neutral-800 text-[15px] hover:bg-neutral-50 dark:hover:bg-neutral-900/60 transition-colors">
              <span className="font-mono font-bold text-neutral-900 dark:text-neutral-100 shrink-0">+</span>
              <span className="text-neutral-500 dark:text-neutral-400">{text}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
