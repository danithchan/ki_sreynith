
import profile from '../assets/profile.png';
export default function Header() {
    return (
        <section
            id="hero"
            className="pt-20 pb-20 border-b border-neutral-200 dark:border-neutral-800"
        >
            <div className="grid lg:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div>
                    <h1 className="font-display font-bold text-5xl leading-tight mb-6">
                        Hi, I'm Nyth
                         <div className="text-black-500 text-2xl font-bold">Fullstack Developer</div>
                    </h1>
                   
                    <p className="text-lg text-neutral-500 max-w-lg mb-8">
                        I build complete systems end to end, from database schema
                        to the interface people actually use.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="font-semibold text-[14.5px] px-5.5 py-3.25 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:-translate-y-0.5 hover:shadow-lg transition-all inline-flex items-center gap-2"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 border rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex justify-center">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-420px lg:w-500px object-contain  drop-shadow-2xl hover:scale-105 transition duration-500"
                    />
                </div>

            </div>
        </section>
    );
}