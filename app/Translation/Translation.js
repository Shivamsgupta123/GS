import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';
import hi from './hi.json';
import en from './en.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en, hi };
// i18n.locale = 'en'
export default i18n;
export const translate = (t, params = {}) => i18n.t(t, params);