import { SiGithub, SiFacebook } from "@icons-pack/react-simple-icons";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <footer
      className="
        mt-20
        bg-neutral-100 dark:bg-neutral-950
        text-neutral-900 dark:text-white
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold">
              Portfolio<span className="text-pink-400">.</span>
            </h2>

            <p className="mt-4 text-neutral-500 dark:text-neutral-400">
              Feel free to contact me!
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href={import.meta.env.VITE_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-full
                  bg-neutral-200 dark:bg-neutral-800
                  hover:bg-pink-400 hover:text-white
                  transition duration-300
                  hover:-translate-y-1
                "
              >
                <SiGithub size={22} />
              </a>

              <a
                href={import.meta.env.VITE_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-full
                  bg-neutral-200 dark:bg-neutral-800
                  hover:bg-pink-400 hover:text-white
                  transition duration-300
                  hover:-translate-y-1
                "
              >
                <SiFacebook size={22} />
              </a>

              <a
                href={import.meta.env.VITE_GMAIL}
                className="
                  p-3 rounded-full
                  bg-neutral-200 dark:bg-neutral-800
                  hover:bg-pink-400 hover:text-white
                  transition duration-300
                  hover:-translate-y-1
                "
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Navigation
            </h3>

            <ul className="space-y-4 text-neutral-500 dark:text-neutral-400">
              {[
                ["Home", "#hero"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    className="
                      hover:text-pink-400
                      transition
                      inline-block
                      hover:translate-x-2
                    "
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Contacts
            </h3>

            <ul className="space-y-4 text-neutral-500 dark:text-neutral-400">
              <li>
                <a
                  href={import.meta.env.VITE_TELEGRAM}
                  className="flex items-center gap-3 hover:text-pink-400 transition"
                >
                  <Send size={18} />
                  Telegram
                </a>
              </li>

              <li>
                <a
                  href={import.meta.env.VITE_GMAIL}
                  className="flex items-center gap-3 hover:text-pink-400 transition"
                >
                  <Mail size={18} />
                  Email
                </a>
              </li>

              <li>
                <a
                  href={import.meta.env.VITE_FACEBOOK}
                  className="flex items-center gap-3 hover:text-pink-400 transition"
                >
                  <SiFacebook size={18} />
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href={import.meta.env.VITE_GITHUB}
                  className="flex items-center gap-3 hover:text-pink-400 transition"
                >
                  <SiGithub size={18} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            border-t
            border-neutral-300 dark:border-neutral-800
            mt-12 pt-6
            text-center
            text-neutral-500
            text-sm
          "
        >
          © {new Date().getFullYear()}
          <span className="text-pink-400 font-semibold">
            {" "}Ki Sreynith
          </span>
          . All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}