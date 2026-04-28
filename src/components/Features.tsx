import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FolderOpen,
  BarChart3,
  Package,
  Users,
  Bell,
  UserCircle,
  Palette,
  Wallet,
  Globe,
} from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { usePerformanceProfile } from "../hooks/usePerformanceProfile";

const featureIcons = [
  FolderOpen,
  BarChart3,
  Package,
  Users,
  Bell,
  UserCircle,
  Palette,
  Wallet,
  Globe,
];

function FeatureCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: (typeof featureIcons)[0];
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { enableAnimations } = usePerformanceProfile();

  return (
    <motion.div
      ref={ref}
      initial={enableAnimations ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: enableAnimations ? 0.6 : 0.01,
        delay: enableAnimations ? index * 0.08 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative p-6 rounded-2xl glass hover:bg-white/[0.03] transition-all duration-500"
    >
      <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-modrinth-green/10 text-modrinth-green group-hover:bg-modrinth-green group-hover:text-modrinth-dark transition-all duration-300">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-modrinth-muted leading-relaxed">{desc}</p>
      {enableAnimations && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-modrinth-green/20" />
      )}
    </motion.div>
  );
}

export default function Features() {
  const { t } = useI18n();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const { enableAnimations } = usePerformanceProfile();

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: enableAnimations ? 0.7 : 0.01, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            {t.features.badge}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            {t.features.title}
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((f, i) => (
            <FeatureCard key={f.title} icon={featureIcons[i]} title={f.title} desc={f.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

