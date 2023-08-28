import styles from "./Info.module.css";
import birdImage from "../../images/main_page_info.png";
import inkImage from "../../images/main_page_ink.png";

import { useTranslation } from 'react-i18next';

function Info() {
    const { t } = useTranslation('home');

    return (
        <>
            <div className={styles.info_container}>
                <img className={styles.info_bird} src={birdImage} alt="Тут должна была сидеть птичка, но она улетела" />
                <p className={styles.info_text}>
                    {t('info_text')}
                </p>
                <img className={styles.info_ink}  src={inkImage} alt="" />
            </div>
        </>
    )
}

export default Info;