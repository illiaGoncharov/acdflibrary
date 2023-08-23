import styles from './Hero.module.css';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        {/* <img className={styles.arrowsimple-left" alt="Arrowsimple left" src="arrowsimple-left.svg" />
          <img className={styles.img" alt="Arrowsimple left" src="image.svg" /> */}
        <div className={styles.app_hero}>
          <div className={styles.header}>
            Добро пожаловать
          </div>
          <p className={styles.text}>
            {t('hero-zadumana')}
          </p>
          <button className={styles.button}>УЗНАТЬ БОЛЬШЕ</button>
        </div>
      </div>
    </>
  )
}

export default Hero;
