import profile from '../assets/profile.png';
export default function Home() {
    return (
        <section
            id="hero"
            className="pt-10 pb-20 border-b border-neutral-200 dark:border-neutral-800">
            <div className="grid lg:grid-cols-2 gap-5 items-center">
                <div>
                    <h1 className="font-display font-bold text-5xl leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
                        Hi, I'm Nyth
                         <div className="text-black-500 text-2xl font-bold">Fullstack Developer</div>
                    </h1>
                    <p className="text-lg text-neutral-500 max-w-lg mb-8 animate-fade-up" style={{ animationDelay: '120ms' }}>
                        I build complete systems end to end, from database schema
                        to the interface people actually use.
                    </p>
                    <div className="flex gap-4 animate-fade-up" style={{ animationDelay: '240ms' }}>
                        <a
                            href="#projects"
                            className="font-semibold text-[14.5px] px-5.5 py-3.25 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none transition-all inline-flex items-center gap-2"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 border rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <div className="flex justify-center animate-fade-up" style={{ animationDelay: '150ms' }}>
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-320px lg:w-00px object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
