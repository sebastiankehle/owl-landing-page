import "server-only";

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  dictionaries[locale as keyof typeof dictionaries]();
