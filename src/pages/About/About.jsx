import styles from "./About.module.css";

import bird from "../../images/about_page_bird_2.png";

import bg from "../../images/about_page_bg.png";
// import bgM from "../../images/about_page_bg.png";

import libraryImage from "../../images/about_page_lib.png";
import lineImage from "../../images/about_page_line.png";
import circleImage from "../../images/about_page_circle.png";
import lepninaImage from "../../images/about_page_lepnina.png";
import flowerImage from "../../images/about_page_flower.png";

import { useTranslation } from 'react-i18next';
import logoPaths from '../../locales/logoPaths/logoPaths';

const About = () => {
    
    const { t, i18n } = useTranslation('about');   
    const currentLanguage = i18n.language; 

    return (
        <>
            <div>
                <h1 className={styles.hero_header}>{t('about_header')}</h1>
                <div className={styles.bg_container}>
                    <img className={styles.bg} src={bg} alt="" />
                    {/* <img className={styles.bgM} src={bgM} alt="" /> */}
                </div>
            </div>
            <div className={styles.aboutOne}>
                <img className={styles.bird} src={bird} alt="" />
                <div className={styles.text_container}>
                    <p className={styles.text_header}>
                        {t('about_big-text')}
                    </p>
                    <img className={styles.lib} src={libraryImage} alt="" />
                    <p className={styles.text_basic}>
                        {t('about_text_1')}
                        <br /> <br />
                        {t('about_text_2')}
                    </p>
                </div>
            </div>

            <div className={styles.about_type_two}>
                <div className={styles.bg_biege}>
                    <img className={styles.bg_biege_line} src={lineImage} alt="" />
                    <img className={styles.bg_biege_circle} src={circleImage} alt="" />
                </div>
                <div className={styles.about_column}>
                    <p className={`${styles.text_header} ${styles.text_header_type_two}`}>
                        {t('about_subheader_1')}
                    </p>
                </div>

                <div className={styles.about_column}>
                    <p className={styles.text_basic}>
                        {t('about_text_3')}
                    </p>
                </div>
            </div>

            <img className={styles.bg_biege_lepnina} src={lepninaImage} alt="" />

            <div className={`${styles.about_type_two} ${styles.about_type_three}`}>
                <div className={styles.bg_white}>
                    <img className={styles.bg_biege_flower} src={flowerImage} alt="" />               
                </div>
                <div className={styles.about_column}>
                    <p className={`${styles.text_header} ${styles.text_header_type_two}`}>
                        {t('about_subheader_2')}
                    </p>
                </div>

                <div className={styles.about_column}>
                    <p className={styles.text_basic}>
                        {t('about_text_4')}
                    </p>
                    <img 
                        className={styles.fund_logo} 
                        src={logoPaths[`fund`][currentLanguage]}
                        alt="Лого Фонда Культуры" />
                </div>
            </div>            
        </>
    )
};

export default About;