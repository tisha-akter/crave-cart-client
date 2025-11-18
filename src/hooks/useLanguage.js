import { useState, useEffect } from 'react';

// Custom hook for language management
export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  // Handle language change and persist to localStorage
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Listen for language changes in localStorage (for cross-component sync)
  useEffect(() => {
    const handleStorageChange = () => {
      const newLanguage = localStorage.getItem('language') || 'en';
      setLanguage(newLanguage);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes periodically (for same-tab changes)
    const interval = setInterval(() => {
      const currentLang = localStorage.getItem('language') || 'en';
      if (currentLang !== language) {
        setLanguage(currentLang);
      }
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [language]);

  return { language, changeLanguage };
};