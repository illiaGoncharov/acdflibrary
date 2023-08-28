import styles from "./Events.module.css";
import eventMainImage from "../../images/main_page_eventMain.png";
import submainOne from "../../images/main_page_eventsOne.png";
import submainTwo from "../../images/main_page_eventsTwo.png";
import submainClub from "../../images/main_page_club.png";
import arrowImage from "../../images/arrow-right.svg";
import { useTranslation } from 'react-i18next';

function Events() {
    const { t } = useTranslation('home');
    return (
        <>
            <div className={styles.events}>
                <p className={styles.events_header}>События</p>
                <div className={styles.events_container}>
                    <div className={styles.events_main}>
                        <div className={styles.events_column}>
                            <div>
                                <p className={styles.events_theme}>Для детей</p>
                                <p className={styles.events_inner_header}>Церемония открытия 31 августа</p>
                                <p className={styles.events_text}>
                                    Лекции, мастер-классы, спектакль под открытым небом
                                    в обновленной библиотеке.
                                </p>
                            </div>
                            <p className={styles.events_date}><span>31</span> августа 2023</p>
                        </div> 
                        <div className={styles.events_column}>
                            <img className={styles.events_img} src={eventMainImage} alt="" />
                            <p className={styles.events_more}>Подробнее <img src={arrowImage} alt="" /></p>
                        </div>
                    </div>
                    <div className={styles.events_submain_container}>
                        <div className={styles.events_submain}>
                            <div>
                                <p className={styles.events_submain_theme}>Для детей <span>6+</span></p>
                                <p className={styles.events_submain_inner_header}>Мастер-классы 2-3 сентября</p>
                                <p className={styles.events_submain_text}>
                                    Занятие с педагогами рисования с изображением цветов и растений Центральной Азии
                                </p>
                            </div>
                            <div className={styles.events_submain_bottom}>
                                <p>2-3 <br /> Сентбяря</p>
                                <p>14:00 — <br /> 18:00</p>
                            </div>
                            <img className={styles.events_submain_img} src={submainOne} alt="" />
                        </div>
                        <div className={styles.events_submain}>
                            <img className={styles.events_club} src={submainClub} alt="" />
                            <div>
                                <p className={styles.events_submain_inner_header}>«История Бабура. Принц, Император, Мудрец»</p>
                                <p className={styles.events_submain_text}>
                                    Еженедельные встречи сообщества для обсуждения книги месяца
                                </p>
                            </div>
                            <div className={styles.events_submain_bottom}>
                                <p>9 <br /> сентября</p>
                                <p>14:00 — <br /> 18:00</p>
                            </div>
                        </div>
                        <div className={styles.events_submain}>
                            <div>
                                <p className={styles.events_submain_theme}>Для детей <span>6+</span></p>
                                <p className={styles.events_submain_inner_header}>Выставка "Я живу в Узбекистане"</p>
                                <p className={styles.events_submain_text}>
                                    Занятие с педагогами рисования с изображением цветов и растений Центральной Азии
                                </p>
                            </div>
                            <div className={styles.events_submain_bottom}>
                                <p>С 31 августа</p>
                                <p>14:00 — <br /> 18:00</p>
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