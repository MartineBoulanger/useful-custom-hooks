import { useLocalStorage } from './useStorage';
import * as translations from 'i18n';

const getNestedTranslation = (language, keys) => {
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translations[language]);
};

export const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    'fallbackLanguage',
    'en'
  );

  const translate = (key) => {
    const keys = key.split('.');
    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};
