import React, { createContext, useContext, useState } from 'react';

const I18nContext = createContext({ locale: 'en', t: (k: string) => k, setLocale: (_: string) => {} });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState('en');
  const t = (key: string) => key;
  return <I18nContext.Provider value={{ locale, t, setLocale }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
