import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './components/localization/en.json';
import nlTranslation from './components/localization/nl.json';
import mrTranslation from './components/localization/mr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    nl: { translation: nlTranslation },
    mr: { translation: mrTranslation },
  },
  lng: 'mr',
  fallbackLng: 'mr',
  interpolation: { escapeValue: false },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
