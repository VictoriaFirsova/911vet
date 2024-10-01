import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './LanguageContext';
import './i18n'; // Импортируйте файл инициализации i18next

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root')
);
