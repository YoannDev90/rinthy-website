// ============================================================
//  Language barrel export — import all translation files here
//  When adding a new language:
//    1. Import it below
//    2. Add it to the `allTranslations` object
// ============================================================

import { en } from "./en";
import { ru } from "./ru";
import { it } from "./it";

export const allTranslations = {
  en,
  ru,
  it,
} as const;

export type TranslationMap = typeof allTranslations;

