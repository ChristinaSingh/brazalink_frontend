import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

const resources = {
  en: {
    translation: {
      change_language: "Welcome to React and react-i18next",
    },
  },
  pt: {
    translation: {
      change_language: "Bienvenue à React et react-i18next",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "pt",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
