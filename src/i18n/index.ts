import { initReactI18next } from 'react-i18next';
import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { getLocales } from 'react-native-localize';

import * as resources from '@I18n/locales';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb: Function) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    debug: true,
    resources: resources.default,
    ns: ['common'],
    defaultNS: 'common',
  });

const I18n = i18next;

export { I18n };
