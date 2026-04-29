import { useI18n } from "../i18n/I18nContext";
import type { Language } from "../i18n/types";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "it", label: "IT" },
  { code: "fr", label: "FR" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-modrinth-border p-1">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
            lang === code
              ? "bg-modrinth-green text-modrinth-dark"
              : "text-modrinth-muted hover:text-white hover:bg-white/5"
          }`}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
