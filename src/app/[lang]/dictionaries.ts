import "server-only";
const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  de: () => import("@/messages/de.json").then((module) => module.default),
  es: () => import("@/messages/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  dictionaries[locale as keyof typeof dictionaries]();
