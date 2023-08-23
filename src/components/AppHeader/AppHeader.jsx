import { useState } from "react";

import { Link } from 'react-router-dom';

import styles from './AppHeader.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import logo from '../../images/Logo Uz.svg';



function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.app_header}>
        <Link to="/"><img className={styles.logo} alt="Логотип" src={logo} /></Link>
        <div className={styles.navbar}>
          <Link to="/about" className={styles.links}><div >О Библиотека</div></Link>
          <Link to="/events" className={styles.links}><div >События</div></Link>
          <Link to="/media" className={styles.links}><div>Материалы</div></Link>
        </div>
        <div className={styles.help}> 
          <p>ОТКРЫТЫ СЕГОДНЯ 10:00 - 21:00</p>
          <LanguageSwitcher />
        </div>
        
        <div className={`${styles.burger} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}>
          <div className={styles.burger}>
            <span className={styles.burger_line}></span>
            <span className={styles.burger_line}></span>
            <span className={styles.burger_line}></span>
          </div>
        </div>
        
        <div className={`${styles.mobile_menu} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}>
          <Link to="/about" className={styles.mobile_links}><div >О Библиотека</div></Link>
          <Link to="/events" className={styles.mobile_links}><div >События</div></Link>
          <Link to="/media" className={styles.mobile_links}><div>Материалы</div></Link>
        </div>
      </div>
    </>
  )
}

export default AppHeader;
