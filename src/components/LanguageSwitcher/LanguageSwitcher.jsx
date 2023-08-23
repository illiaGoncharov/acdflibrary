// import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  // const [showLanguages, setShowLanguages] = useState(false);

  // const toggleLanguages = () => {
  //   setShowLanguages(!showLanguages);
  // };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    // setShowLanguages(false);
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
        <button className={styles.button} onClick={() => changeLanguage('uz')}>UZ</button>
        <button className={styles.button} onClick={() => changeLanguage('ru')}>RU</button>
        <button className={styles.button} onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
