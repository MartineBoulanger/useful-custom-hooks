import { useTranslation } from 'hooks/useTranslation';

const TranslationComponent = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  return (
    <>
      <p>{language}</p>
      <p>{t('hi')}</p>
      <p>{t('bye')}</p>
      <p>{t('nested.value')}</p>
      <button onClick={() => setLanguage('nl')}>Change to Dutch</button>
      <button onClick={() => setLanguage('en')}>Change to English</button>
      <button onClick={() => setFallbackLanguage('nl')}>
        Change FB Language to Dutch
      </button>
      <button onClick={() => setFallbackLanguage('en')}>
        Change FB Language to English
      </button>
    </>
  );
};

export default TranslationComponent;
