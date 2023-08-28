import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  // const [showLanguages, setShowLanguages] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);


  // const toggleLanguages = () => {
  //   setShowLanguages(!showLanguages);
  // };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  // const getCurrentLanguageLabel = () => {
  //   const currentLanguage = i18n.language;
  //   switch (currentLanguage) {
  //     case 'ru':
  //       return 'RU';
  //     case 'en':
  //       return 'EN';
  //     case 'uz':
  //       return "UZ";
  //     default:
  //       return 'Ru';
  //   }
  // };

  return (
    <div>
      {/* {showLanguages ? (
        <div>
          <button className={styles.button} onClick={() => changeLanguage('ru')}>RU</button>
          <button className={styles.button} onClick={() => changeLanguage('en')}>EN</button>
          <button className={styles.button} onClick={() => changeLanguage('uz')}>UZ</button>
        </div>
      ) : (
          <button className={styles.button} onClick={toggleLanguages}>{getCurrentLanguageLabel()}</button>
      )} */}
      <div>
        <button className={`${styles.button} ${activeLanguage === 'uz' ? styles.active : ''}`} onClick={() => changeLanguage('uz')}>UZ</button>
        <button className={`${styles.button} ${activeLanguage === 'ru' ? styles.active : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
        <button className={`${styles.button} ${activeLanguage === 'en' ? styles.active : ''}`} onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
