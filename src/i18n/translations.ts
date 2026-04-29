// ============================================================
//  Legacy re-export file — kept for backward compatibility.
//  New code should import from:
//    - `../types` for Language / Translations types
//    - `./languages` for the translation objects
// ============================================================

export type { Language, Translations } from "./types";
export { allTranslations as translations } from "./languages";
