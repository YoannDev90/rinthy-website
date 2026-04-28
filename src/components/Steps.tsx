import { motion } from "framer-motion";
import { Download, LogIn, Rocket } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { usePerformanceProfile } from "../hooks/usePerformanceProfile";

const stepIcons = [Download, LogIn, Rocket];

export default function Steps() {
  const { t } = useI18n();
  const { enableAnimations } = usePerformanceProfile();

  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: enableAnimations ? 0.7 : 0.01, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            {t.steps.badge}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            {t.steps.title}
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg">
            {t.steps.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-modrinth-green/50 via-modrinth-green/20 to-transparent hidden sm:block" />

          <div className="space-y-16 md:space-y-24">
            {t.steps.items.map((s, i) => {
              const isEven = i % 2 === 0;
              const Icon = stepIcons[i];

              return (
                <motion.div
                  key={s.step}
                  initial={enableAnimations ? { opacity: 0, x: isEven ? -40 : 40 } : { opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: enableAnimations ? 0.7 : 0.01, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-6xl font-display font-bold text-white/5 absolute -top-6 select-none">
                      {s.step}
                    </span>
                    <h3 className="font-display font-semibold text-2xl mb-3 relative">{s.title}</h3>
                    <p className="text-modrinth-muted leading-relaxed max-w-md mx-0 md:mx-auto">
                      {s.desc}
                    </p>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-modrinth-green flex items-center justify-center shadow-lg shadow-modrinth-green/20">
                      <Icon size={24} className="text-modrinth-dark" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

