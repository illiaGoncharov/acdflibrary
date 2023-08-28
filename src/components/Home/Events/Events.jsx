import styles from "./Events.module.css";
import { Link } from 'react-router-dom';

import eventMainImage from "../../../images/main_page_eventMain.png";
import submainOne from "../../../images/main_page_eventsOne.png";
import submainTwo from "../../../images/main_page_eventsTwo.png";
import arrowImage from "../../../images/arrow-right.svg";
import { useTranslation } from 'react-i18next';

function Events({ customStyles }) {
    const { t } = useTranslation('home');
    const combinedStyles = { ...styles, ...customStyles };
    return (
        <>
            <div className={`${combinedStyles.events}`}>
                <p className={combinedStyles.events_header}>{t('events_header')}</p>
                <div className={combinedStyles.events_container}>
                    <Link className={combinedStyles.link} to="/event/ceremony">
                        <div className={combinedStyles.events_main}>
                            <div className={combinedStyles.events_column}>
                                <div>
                                    <p className={combinedStyles.events_theme}>{t('events_theme_1')}</p>
                                    <p className={combinedStyles.events_inner_header}>{t('events_inner_header_1')}</p>
                                    <p className={combinedStyles.events_text}>
                                        {t('events_text_1')}
                                    </p>
                                </div>
                                <div>
                                    <p className={combinedStyles.events_date} dangerouslySetInnerHTML={{ __html: t('events_date_1') }}></p>
                                    <p className={combinedStyles.events_date} dangerouslySetInnerHTML={{ __html: t('events_date_1+') }}></p>
                                </div>
                            </div> 
                            <div className={combinedStyles.events_column}>
                                <img className={combinedStyles.events_img} src={eventMainImage} alt="" />
                                <p className={combinedStyles.events_more}>{t('events_inner_more_1')} <img src={arrowImage} alt="" /></p>
                            </div>
                        </div>
                    </Link>
                    <div className={combinedStyles.events_submain_container}>
                        <div className={combinedStyles.events_submain}>
                            <div>
                                <p className={combinedStyles.events_submain_theme}>
                                    {t('events_theme_2')}  
                                    <span> 6+</span></p>
                                <p className={combinedStyles.events_submain_inner_header}>
                                    {t('events_inner_header_2')}
                                </p>
                                <p className={combinedStyles.events_submain_text}>
                                    {t('events_text_2')}
                                </p>
                            </div>
                            <div className={combinedStyles.events_submain_bottom}>
                                <p dangerouslySetInnerHTML={{ __html: t('events_date_2') }}>
                                </p>
                            </div>
                            <img className={combinedStyles.events_submain_img} src={submainOne} alt="" />
                        </div>
                        <div className={combinedStyles.events_submain}>
                            {/* <img className={combinedStyles.events_club} src={submainClub} alt="" /> */}
                            <div>
                                <p className={combinedStyles.events_submain_inner_header}> {t('events_inner_header_3')}</p>
                                <p className={combinedStyles.events_submain_text}>
                                    {t('events_text_3')}
                                </p>
                            </div>
                            {/* <div className={combinedStyles.events_submain_bottom}>
                                <p>9 <br /> сентября</p>
                                <p>14:00 — <br /> 18:00</p>
                            </div> */}
                        </div>
                        <div className={combinedStyles.events_submain}>
                            <Link className={combinedStyles.link} to="/event/childhood">
                                <div>
                                    <p className={combinedStyles.events_submain_theme}>{t('events_theme_4')} <span>6+</span></p>
                                    <p className={combinedStyles.events_submain_inner_header}>
                                        {t('events_inner_header_4')}
                                    </p>
                                    <p className={combinedStyles.events_submain_text}>
                                        {t('events_text_4')}
                                    </p>
                                </div>
                                <div className={combinedStyles.events_submain_bottom}>
                                    <p>{t('events_date_4')}</p>
                                </div>
                                <img className={combinedStyles.events_submain_img} src={submainTwo} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events;