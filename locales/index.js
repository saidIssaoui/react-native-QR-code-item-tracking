import I18n from 'react-native-i18n';
import en from './en.json';
import fr from './fr.json';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
};

export default this;
