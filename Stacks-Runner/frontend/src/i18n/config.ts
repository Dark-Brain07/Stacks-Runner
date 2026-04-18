export const SUPPORTED_LOCALES = ["en","es","fr","de","ja","ko","zh","pt","ru","ar","it","nl","sv","pl","tr","th","vi","id","hi","uk"];
export const DEFAULT_LOCALE = 'en';

export function detectLocale(): string {
  const nav = navigator.language.split('-')[0];
  return SUPPORTED_LOCALES.includes(nav) ? nav : DEFAULT_LOCALE;
}
