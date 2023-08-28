import styles  from "./EventsPage.module.css";
import Events from "../../components/Home/Events/Events";
import bg from "../../images/events_page_bg.png";

import { useTranslation } from 'react-i18next';

const EventsPage = () => {
    const { t } = useTranslation('events');
    return (
        <>
            <div className={styles.events_page}>
                <div className={styles.bg_container}>
                    <h1 className={styles.hero_header}>{t('events_headline')}</h1>
                    <img className={styles.bg} src={bg} alt="" />
                </div>
                <Events customStyles={styles}/>
            </div>
        </>
    );
};

export default EventsPage;