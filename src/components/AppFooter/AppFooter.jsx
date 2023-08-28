import React from "react";
import { Link } from 'react-router-dom';

import styles from "./AppFooter.module.css"; 

import SubscribeForm from '../Subscribe/Subscribe';

import { useTranslation } from 'react-i18next';
import logoPaths from "./../../locales/logoPaths/logoPaths";

export const AppFooter = () => {
  const { t, i18n } = useTranslation('footer');
  const currentLanguage = i18n.language; 

  return (
    <>
      <div className={styles.app_footer}>
        <div className={styles.container}>
          <div className={styles.column}>
            <Link to="/acdflibrary/">
              <img 
                className={styles.logo} 
                alt="Логотип" 
                src={logoPaths[`footer`][currentLanguage]} />
            </Link>
            <div className={styles.subscribe}>
              <p className={styles.label}>{t('footer_subscribe')} </p>
              <SubscribeForm />
              <p className={styles.licence}>{t('footer_licence')} </p>
            </div>
          </div>
          <div className={styles.column}>
            <nav className={styles.footer_nav}>
              <ul className={styles.footer_list}>
                <Link to="/about" className={styles.footer_list_item}>{t('footer_menu-item_1')}</Link>
                <Link to="/events" className={styles.footer_list_item}>{t('footer_menu-item_2')}</Link>
                <Link to="/media" className={styles.footer_list_item}>{t('footer_menu-item_3')}</Link>
              </ul>
            </nav>
            <div className={styles.info_container}>
              <div className={styles.info_column}>
                <p className={styles.info_header}>
                  {t('footer_contact')}
                  </p>
                <p className={styles.info_text}>
                  {t('footer_contact-info"')}
                </p>
              </div>
              <div className={styles.info_column}>
                <p className={styles.info_header}>{t('footer_time')}</p>
                <p className={styles.info_text}>     
                  {t('footer_time-info')}    
                </p>
              </div>
              <div className={styles.info_column}>
                <p className={styles.info_header}>{t('footer_adress')}</p>
                <p className={styles.info_text}>
                  {t('footer_adress-info')}
                  <br />
                  <br />  
                  <a className={styles.info_text} target="_blank" rel="noreferrer" href="https://yandex.ru/maps/10335/tashkent/?ll=69.289788%2C41.312242&mode=routes&rtext=~41.312241%2C69.289789&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTAwNjA5EjVPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZYWh5byBHyrt1bG9tb3Yga2_Ku2NoYXNpLCA0NyIKDWCUikIVvD8lQg%2C%2C&z=16">{t('footer_map-info')}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;