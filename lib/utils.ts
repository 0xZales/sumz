import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locale } from "@/config/i18n-config";
import translate from "translate";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getRapidAPiKey() {
  return process.env.NEXT_RAPIDAPI_KEY;
}

// translate
export const translateArticle = async (article: string, langFrom:Locale,LangTo:Locale) => {
  try {
    const translatedArticle = await translate(article, {
     from:langFrom,
     to:LangTo
    });
    return translatedArticle;
  } catch (error) {
    throw new Error("Translation failed");
  }
};
