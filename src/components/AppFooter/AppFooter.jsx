import React from "react";
import { Link } from 'react-router-dom';

import styles from "./AppFooter.module.css"; 
import logo from '../../images/Logo Uz [white].svg';

import SubscribeForm from '../Subscribe/Subscribe';

export const AppFooter = () => {
  return (
    <>
      <div className={styles.app_footer}>
        <div className={styles.container}>
          <div className={styles.column}>
            <Link to="/"><img className={styles.logo} alt="Логотип" src={logo} /></Link>
            <div className={styles.subscribe}>
              <p className={styles.label}>Подписывайтесь на новости библиотеки</p>
              <SubscribeForm />
              <p className={styles.licence}>Лицензионное соглашение
                Политика в отношении обработки и защиты персональных данных
                Согласие на осуществление рекламно-информационных рассылок</p>
            </div>
          </div>
          <div className={styles.column}>
            <nav className={styles.footer_nav}>
              <ul className={styles.footer_list}>
                <Link to="/about" className={styles.footer_list_item}>О библиотеке</Link>
                <Link to="/events" className={styles.footer_list_item}>События</Link>
                <Link to="/media" className={styles.footer_list_item}>Материалы</Link>
              </ul>
            </nav>
            <div className={styles.info_container}>
              <div className={styles.info_column}>
                <p className={styles.info_header}>Контакты</p>
                <p className={styles.info_text}>
                  Tashkent 47 Yahyo Gulyamov ko'chasi
                  <br />
                  <a className={styles.info_text} target="_blank" rel="noreferrer" href="https://yandex.ru/maps/10335/tashkent/?ll=69.289788%2C41.312242&mode=routes&rtext=~41.312241%2C69.289789&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTAwNjA5EjVPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZYWh5byBHyrt1bG9tb3Yga2_Ku2NoYXNpLCA0NyIKDWCUikIVvD8lQg%2C%2C&z=16">На карте </a>
                </p>
                <p className={styles.info_text}>
                  +998 71 236 22 01
                  <br />  welcome@acdf.org
                </p>
              </div>
              <div className={styles.info_column}>
                <p className={styles.info_header}>Часы работы</p>
                <p className={styles.info_text}>
                  Ежедневно, 11:00–22:00
                  Касса закрывается за 30 минут до окончания работы Библиотекиz                    
                </p>
              </div>
              <div className={styles.info_column}>
                <p className={styles.info_header}>Адрес</p>
                <p className={styles.info_text}>
                  Ташкент, улица Яхъё Гулямова, дом 47 
                  <br />
                  <a className={styles.info_text} target="_blank" rel="noreferrer" href="https://yandex.ru/maps/10335/tashkent/?ll=69.289788%2C41.312242&mode=routes&rtext=~41.312241%2C69.289789&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTAwNjA5EjVPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZYWh5byBHyrt1bG9tb3Yga2_Ku2NoYXNpLCA0NyIKDWCUikIVvD8lQg%2C%2C&z=16">На карте </a>
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