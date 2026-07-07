export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-5">
        Let's Work Together
      </h2>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-10 text-center">
        <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-7">
          Open to full-stack developer roles and open to relocation or remote work. Reach out — I reply
          fast.
        </p>
        <div className="flex justify-center flex-wrap gap-3">
          <a
            href={import.meta.env.VITE_GMAIL}
            className="flex items-center gap-2 px-4.5 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-lg text-[14px] font-semibold hover:border-neutral-500 hover:-translate-y-0.5 transition-all"
          >
            ✉ Email
          </a>
          <a
            href={import.meta.env.VITE_GITHUB}
            className="flex items-center gap-2 px-4.5 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-lg text-[14px] font-semibold hover:border-neutral-500 hover:-translate-y-0.5 transition-all"
          >
            ⌥ GitHub
          </a>
          <a
           href={import.meta.env.VITE_TELEGRAM}
            className="flex items-center gap-2 px-4.5 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-lg text-[14px] font-semibold hover:border-neutral-500 hover:-translate-y-0.5 transition-all"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}