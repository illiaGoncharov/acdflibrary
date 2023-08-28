import { useState } from "react";

import { Link } from 'react-router-dom';

import styles from './AppHeader.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import hamburgerImage from '../../images/header_ham.svg'; 
import crossImage from '../../images/header_cross.svg';
import flowerImage from '../../images/menu_flower.png';

import { useTranslation } from 'react-i18next';
import logoPaths from "./../../locales/logoPaths/logoPaths";

function AppHeader() {
  const { t, i18n } = useTranslation('header');
  const currentLanguage = i18n.language; 

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <>
      <div className={styles.app_header}>
        <Link to="/acdflibrary/">
          <img 
            className={styles.logo} 
            alt="Логотип" 
            src={logoPaths[`header`][currentLanguage]} />
          </Link>
        <div className={styles.navbar}>
          <Link to="/about" className={styles.links}><div>{t('menu-about')}</div></Link>
          <Link to="/events" className={styles.links}><div>{t('menu-events')}</div></Link>
          <Link to="/media" className={styles.links}><div>{t('menu-media')}</div></Link>
        </div>
        <div className={styles.help}> 
          <p>{t('menu-help')}</p>
          <LanguageSwitcher />
        </div>
        
        <div className={`${styles.burger} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}>
          <img
            className={styles.burgerImage}
            src={menuOpen ? crossImage : hamburgerImage}
            alt={menuOpen ? 'Close' : 'Open'}
          />
        </div>
        
        <div className={`${styles.mobile_menu} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}>
          <div className={styles.mobile_navbar}>
            <Link to="/about" className={styles.mobile_links}><div>{t('menu-about')}</div></Link>
            <Link to="/events" className={styles.mobile_links}><div>{t('menu-events')}</div></Link>
            <Link to="/media" className={styles.mobile_links}><div>{t('menu-media')}</div></Link>
          </div>
          <div className={styles.mobile_help}>
            <p>{t('menu-help')}</p>
            <LanguageSwitcher />
          </div>
          <div className={styles.flower_container}>
            <img className={styles.flower} alt="" src={flowerImage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AppHeader;
