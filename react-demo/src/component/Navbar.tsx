import { useEffect, useState } from 'react';

const navItems = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILL' },
  { href: '#projects', label: 'PROJECT' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/85 dark:bg-neutral-950/85 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="font-display font-bold text-[17px] flex items-center gap-2">
          Nyth
        </div>

        <nav className="hidden sm:flex gap-1 font-mono text-[12.5px]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 font-bold rounded-md text-neutral-800 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark((d) => !d)}
            className={`w-14 h-8 rounded-full border border-neutral-700 bg-neutral-900 p-1 flex items-center transition-all duration-300 ${isDark ? "justify-end" : "justify-start"
              }`}
          >
            <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center shadow-sm transition-transform">
              {isDark ? (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </div>
          </button>
          <a
            href="/ki-srey-nith-cv.pdf"
            download="KI_SREY_NITH_CV.pdf"
            className="font-mono text-[12.5px] font-semibold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2 rounded-lg hover:opacity-85 transition-opacity"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </div>
  );
}