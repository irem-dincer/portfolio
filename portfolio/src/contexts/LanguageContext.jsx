import { createContext, useState, useEffect } from 'react';
import enData from '../data/en.json';
import trData from '../data/tr.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'tr';
  });
  
  const [texts, setTexts] = useState(language === 'tr' ? trData : enData);

  useEffect(() => {
    localStorage.setItem('language', language);
    setTexts(language === 'tr' ? trData : enData);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};