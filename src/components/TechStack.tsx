import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "../i18n/I18nContext";
import { usePerformanceProfile } from "../hooks/usePerformanceProfile";

const techs = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Capacitor", color: "#119EFF" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Vite", color: "#646CFF" },
  { name: "Node.js", color: "#339933" },
];

export default function TechStack() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { enableAnimations } = usePerformanceProfile();

  return (
    <section id="tech" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: enableAnimations ? 0.7 : 0.01, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            {t.techStack.badge}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            {t.techStack.title}
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg mb-12">
            {t.techStack.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={enableAnimations ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: enableAnimations ? 0.5 : 0.01,
                delay: enableAnimations ? 0.2 + i * 0.1 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group px-6 py-3 rounded-xl glass hover:bg-white/[0.04] transition-all duration-300 cursor-default"
            >
              <span className="font-medium text-sm" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

