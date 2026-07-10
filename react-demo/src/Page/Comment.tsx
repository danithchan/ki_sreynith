import { useEffect, useState } from 'react';
import Reveal from '../component/Reveal';

type GuestEntry = {
  id: string;
  name: string;
  message: string;
  date: string;
};

const STORAGE_KEY = 'portfolio-guestbook';

function SendIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

export default function Comment() {
  const [entries, setEntries] = useState<GuestEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setEntries(JSON.parse(saved));
    } catch {
      // ignore corrupted storage
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const entry: GuestEntry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    const next = [entry, ...entries];
    setEntries(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setName('');
    setMessage('');
  };

  return (
    <section id="comment" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <Reveal>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 mb-5">
            💬 Sign the Guestbook
          </span>
          <h2 className="font-display font-black text-[clamp(28px,5vw,44px)] tracking-tight mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Comment
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-6">
            Drop a comment, feedback, or just say hello! Your message will appear below instantly.
          </p>
          <span className="inline-flex items-center gap-2 font-semibold text-[13.5px] px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {entries.length} Comment{entries.length === 1 ? '' : 's'} so far
          </span>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Reveal delayMs={80}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-7 flex flex-col gap-5"
          >
            <div>
              <label className="block text-[13px] font-semibold mb-1.5" htmlFor="guest-name">
                Name
              </label>
              <input
                id="guest-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[14px] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold mb-1.5" htmlFor="guest-message">
                Message
              </label>
              <textarea
                id="guest-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[14px] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-[14.5px] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30 active:translate-y-0 transition-all"
            >
              <SendIcon /> Sign Guestbook
            </button>
          </form>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="flex flex-col gap-3 max-h-420px overflow-y-auto pr-1">
            {entries.length === 0 ? (
              <p className="text-neutral-400 dark:text-neutral-500 text-center py-10">
                No comments yet. Be the first to sign!
              </p>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-4.5 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
                >
                  <div className="flex items-baseline justify-between mb-1.5 gap-2">
                    <span className="font-display font-bold text-[14.5px]">{entry.name}</span>
                    <span className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500 shrink-0">
                      {entry.date}
                    </span>
                  </div>
                  <p className="text-[14px] text-neutral-600 dark:text-neutral-300">{entry.message}</p>
                </div>
              ))
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
