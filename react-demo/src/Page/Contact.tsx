import { useState } from 'react';
import Reveal from '../component/Reveal';

type ContactCard = {
  label: string;
  value: string;
  sub: string;
  href?: string;
  color: 'blue';
  icon: 'mail' | 'phone' | 'location' | 'telegram';
};

const contactCards: ContactCard[] = [
  {
    label: 'EMAIL',
    value: 'danithchan99@gmail.com',
    sub: 'Drop me a line anytime',
    href: import.meta.env.VITE_GMAIL,
    color: 'blue',
    icon: 'mail',
  },
  {
    label: 'PHONE',
    value: '+855 92 91 6500',
    sub: 'Available for calls/WhatsApp',
    href: 'tel:+85592916500',
    color: 'blue',
    icon: 'phone',
  },
  {
    label: 'LOCATION',
    value: 'Cambodia, Phnom Penh',
    sub: "Let's meet for coffee",
    color: 'blue',
    icon: 'location',
  },
  {
    label: 'TELEGRAM',
    value: '@Ki_Sreynith',
    sub: 'Message me directly',
    href: import.meta.env.VITE_TELEGRAM,
    color: 'blue',
    icon: 'telegram',
  },
];

const colorMap: Record<ContactCard['color'], string> = {
  blue: "bg-pink-100 text-pink-500 border-pink-200 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20",
};

function CardIcon({ name }: { name: ContactCard['icon'] }) {
  const common = 'w-5.5 h-5.5';
  if (name === 'mail')
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
      </svg>
    );
  if (name === 'phone')
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5c0-1 1-2 2-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2c0 1-1 2-2 2A16 16 0 013 5z" />
      </svg>
    );
  if (name === 'location')
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-6.4 7-11.5a7 7 0 10-14 0C5 14.6 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.4" strokeWidth={1.8} />
      </svg>
    );
  return (
    <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 4L3 11l6 2m12-9l-4 16-8-6m12-10L9 13" />
    </svg>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[14px] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-pink-400 dark:focus:border-pink-400 transition-colors";
export default function Contact() {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const base = (import.meta.env.VITE_GMAIL as string) || 'mailto:mny207708@gmail.com';
    const subject = encodeURIComponent(`Portfolio contact from ${form.firstName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    const separator = base.includes('?') ? '&' : '?';
    window.location.href = `${base}${separator}subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20">
      <Reveal>
        <h2 className="font-display font-bold text-[clamp(24px,3.6vw,34px)] tracking-tight mb-8">
          Let's Get In Touch
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[320px_1fr] gap-6 items-start">
        {/* Contact info cards */}
        <div className="flex flex-col gap-4">
          {contactCards.map((card, i) => {
            const Wrapper = card.href ? 'a' : 'div';
            return (
              <Reveal key={card.label} delayMs={i * 90}>
                <Wrapper
                  {...(card.href ? { href: card.href } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-5 hover:border-pink-300 dark:hover:border-pink-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-200/20 transition-all duration-300"
                >
                  <div className={`w-13 h-13 shrink-0 rounded-xl border flex items-center justify-center ${colorMap[card.color]}`}>
                    <CardIcon name={card.icon} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-neutral-400 dark:text-neutral-500 mb-1">
                      {card.label}
                    </div>
                    <div className="font-display font-bold text-[16px] leading-tight">{card.value}</div>
                    <div className="text-[12.5px] text-neutral-500 dark:text-neutral-400 mt-0.5">{card.sub}</div>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>

        {/* Form */}
        <Reveal delayMs={160}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-[13px] font-semibold mb-1.5" htmlFor="firstName">
                First Name<span className="text-pink-400">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                placeholder="Nyth"
                className={inputClass}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-semibold mb-1.5" htmlFor="email">
                  Your Email<span className="text-pink-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Nyth1234@gmail.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold mb-1.5" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(855+) 456-7890"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold mb-1.5 text-neutral-700 dark:text-neutral-200" htmlFor="message">
                Your Message<span className="text-pink-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={`${inputClass} resize-none`}
              />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-linear-to-r from-pink-400 via-pink-500 to-rose-400 text-white font-mono text-[13px] font-bold tracking-wide hover:from-pink-500 hover:via-pink-600 hover:to-rose-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300/40 active:translate-y-0 transition-all duration-300"
              >
                SUBMIT
              </button>
              <span className="text-[12px] text-neutral-400 dark:text-neutral-500">*Required fields</span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
