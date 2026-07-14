import profile from '../assets/profile.png';
import TypingText from '../component/TypingText';
export default function Home() {
    return (
        <section
            id="hero"
            className="pt-10 pb-20 border-b border-neutral-200 dark:border-neutral-800">
            <div className="grid lg:grid-cols-2 gap-5 items-center">
                <div>
                    <h1 className="font-display font-bold text-6xl leading-tight mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
                        Hi, I'm Ki
                        <br />
                        <span className="text-pink-500">
                            <TypingText text="Sreynith" speed={150} deleteSpeed={70} startDelay={400} />
                        </span>
                        <div className="text-black-500 text-xl max-w-lg mb-8  font-bold">Fullstack Developer | Computer Science Student</div>
                    </h1>
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
                        className="relative w-96 h-full object-cover rounded-[58%_42%_32%_68%/58%_32%_68%_42%] shadow-2xl animate-shake hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
