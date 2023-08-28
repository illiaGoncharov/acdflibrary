import styles from "./Events.module.css";
import eventMainImage from "../../../images/main_page_eventMain.png";
import submainOne from "../../../images/main_page_eventsOne.png";
import submainTwo from "../../../images/main_page_eventsTwo.png";
// import submainClub from "../../../images/main_page_club.png";
import arrowImage from "../../../images/arrow-right.svg";
import { useTranslation } from 'react-i18next';

function Events() {
    const { t } = useTranslation('home');
    return (
        <>
            <div className={styles.events}>
                <p className={styles.events_header}>{t('events_header')}</p>
                <div className={styles.events_container}>
                    <div className={styles.events_main}>
                        <div className={styles.events_column}>
                            <div>
                                <p className={styles.events_theme}>{t('events_theme_1')}</p>
                                <p className={styles.events_inner_header}>{t('events_inner_header_1')}</p>
                                <p className={styles.events_text}>
                                    {t('events_text_1')}
                                </p>
                            </div>
                            <div>
                                <p className={styles.events_date} dangerouslySetInnerHTML={{ __html: t('events_date_1') }}></p>
                                <p className={styles.events_date} dangerouslySetInnerHTML={{ __html: t('events_date_1+') }}></p>
                            </div>
                        </div> 
                        <div className={styles.events_column}>
                            <img className={styles.events_img} src={eventMainImage} alt="" />
                            <p className={styles.events_more}>{t('events_inner_more_1')} <img src={arrowImage} alt="" /></p>
                        </div>
                    </div>
                    <div className={styles.events_submain_container}>
                        <div className={styles.events_submain}>
                            <div>
                                <p className={styles.events_submain_theme}>
                                    {t('events_theme_2')}  
                                    <span> 6+</span></p>
                                <p className={styles.events_submain_inner_header}>
                                    {t('events_inner_header_2')}
                                </p>
                                <p className={styles.events_submain_text}>
                                    {t('events_text_2')}
                                </p>
                            </div>
                            <div className={styles.events_submain_bottom}>
                                <p dangerouslySetInnerHTML={{ __html: t('events_date_2') }}>
                                </p>
                            </div>
                            <img className={styles.events_submain_img} src={submainOne} alt="" />
                        </div>
                        <div className={styles.events_submain}>
                            {/* <img className={styles.events_club} src={submainClub} alt="" /> */}
                            <div>
                                <p className={styles.events_submain_inner_header}> {t('events_inner_header_3')}</p>
                                <p className={styles.events_submain_text}>
                                    {t('events_text_3')}
                                </p>
                            </div>
                            {/* <div className={styles.events_submain_bottom}>
                                <p>9 <br /> сентября</p>
                                <p>14:00 — <br /> 18:00</p>
                            </div> */}
                        </div>
                        <div className={styles.events_submain}>
                            <div>
                                <p className={styles.events_submain_theme}>{t('events_theme_4')} <span>6+</span></p>
                                <p className={styles.events_submain_inner_header}>
                                    {t('events_inner_header_4')}
                                </p>
                                <p className={styles.events_submain_text}>
                                    {t('events_text_4')}
                                </p>
                            </div>
                            <div className={styles.events_submain_bottom}>
                                <p>{t('events_date_4')}</p>
                            </div>
                            <img className={styles.events_submain_img} src={submainTwo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events;