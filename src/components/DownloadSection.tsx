import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { usePerformanceProfile } from "../hooks/usePerformanceProfile";

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.523 15.3414C17.523 15.6414 17.2805 15.8839 16.9805 15.8839H16.4617V19.6952C16.4617 20.1789 16.068 20.5727 15.5842 20.5727H14.4492V17.5727H14.4373C14.4373 17.1002 14.0542 16.7171 13.5817 16.7171H12.4317C11.9592 16.7171 11.5761 17.1002 11.5761 17.5727V20.5727H10.4411V17.5727C10.4411 17.1002 10.058 16.7171 9.58548 16.7171H8.43548C7.96298 16.7171 7.57985 17.1002 7.57985 17.5727V20.5727H6.44485C5.9611 20.5727 5.56735 20.1789 5.56735 19.6952V15.8839H5.0486C4.7486 15.8839 4.5061 15.6414 4.5061 15.3414V8.96641H17.523V15.3414ZM3.0061 8.96641C2.52235 8.96641 2.1286 9.36016 2.1286 9.84391V14.7889C2.1286 15.2727 2.52235 15.6664 3.0061 15.6664C3.48985 15.6664 3.8836 15.2727 3.8836 14.7889V9.84391C3.8836 9.36016 3.48985 8.96641 3.0061 8.96641ZM19.023 8.96641C18.5392 8.96641 18.1455 9.36016 18.1455 9.84391V14.7889C18.1455 15.2727 18.5392 15.6664 19.023 15.6664C19.5067 15.6664 19.9005 15.2727 19.9005 14.7889V9.84391C19.9005 9.36016 19.5067 8.96641 19.023 8.96641ZM14.8705 4.82391L15.7505 3.25516C15.8255 3.12766 15.7805 2.96891 15.653 2.89391C15.5255 2.81891 15.3667 2.86391 15.2917 2.99141L14.3973 4.58516C13.6723 4.24766 12.8623 4.05891 12.0061 4.05891C11.1498 4.05891 10.3398 4.24766 9.61485 4.58516L8.72048 2.99141C8.64548 2.86391 8.48673 2.81891 8.35923 2.89391C8.23173 2.96891 8.18673 3.12766 8.26173 3.25516L9.14173 4.82391C7.7536 5.61766 6.8011 7.04891 6.6136 8.71641H17.3986C17.2111 7.04891 16.2586 5.61766 14.8705 4.82391ZM9.4236 6.92891C9.1161 6.92891 8.86548 6.67828 8.86548 6.37078C8.86548 6.06328 9.1161 5.81266 9.4236 5.81266C9.7311 5.81266 9.98173 6.06328 9.98173 6.37078C9.98173 6.67828 9.7311 6.92891 9.4236 6.92891ZM14.5886 6.92891C14.2811 6.92891 14.0305 6.67828 14.0305 6.37078C14.0305 6.06328 14.2811 5.81266 14.5886 5.81266C14.8961 5.81266 15.1467 6.06328 15.1467 6.37078C15.1467 6.67828 14.8961 6.92891 14.5886 6.92891Z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.22 7.13-.57 1.5-1.31 2.99-2.27 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export default function DownloadSection() {
  const { t } = useI18n();
  const { enableAnimations } = usePerformanceProfile();

  const fadeUp = enableAnimations
    ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="download" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          {...fadeUp}
          transition={{ duration: enableAnimations ? 0.7 : 0.01, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            {t.download.badge}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            {t.download.title}
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg">
            {t.download.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Android Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.6 : 0.01, delay: enableAnimations ? 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 rounded-3xl glass border border-modrinth-green/20 hover:border-modrinth-green/40 transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-modrinth-green/10 flex items-center justify-center">
                <AndroidIcon className="w-8 h-8 text-modrinth-green" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1">{t.download.android.title}</h3>
                <p className="text-sm text-modrinth-muted">{t.download.android.desc}</p>
              </div>
              <a
                href="https://github.com/imsawiq/Rinthy/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-modrinth-green text-modrinth-dark font-semibold hover:brightness-110 transition-all duration-300 w-full justify-center"
              >
                <Download size={18} />
                {t.download.android.button}
              </a>
            </div>
          </motion.div>

          {/* iOS Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.6 : 0.01, delay: enableAnimations ? 0.2 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 rounded-3xl glass border border-white/5 opacity-70"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                <AppleIcon className="w-8 h-8 text-white/60" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-white/60">{t.download.ios.title}</h3>
                <p className="text-sm text-modrinth-muted">{t.download.ios.desc}</p>
              </div>
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-modrinth-muted font-medium cursor-not-allowed border border-white/5 w-full justify-center"
              >
                {t.download.ios.button}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

