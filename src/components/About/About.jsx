import styles from './About.module.css';

import formOne from './../../images/about_1.png';
import formTwo from './../../images/about_3.png';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function About () {
    const { t } = useTranslation('home');
    return (
        <div className={styles.about_container}>
            <div className={styles.about_column}>
                <Link to="/about">
                    <img className={styles.library} alt="" src={formOne} />
                </Link>
            </div>
            <div className={styles.about_column}>
                <div className={styles.about_main}>
                    <div className={styles.about_header}>{t('about_header')}</div>
                    <p className={styles.about_text}>
                        {t('about_text')}
                    </p>
                    <Link to="/about">
                        <button className={styles.button}>{t('about_button')}</button>
                    </Link>
                </div>
            </div>
            <img className={styles.spiral} alt="" src={formTwo} />
        </div>
    );
};

export default About;