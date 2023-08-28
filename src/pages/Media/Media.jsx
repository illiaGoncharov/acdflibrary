// import { useState } from "react";
import styles from "./Media.module.css";

import bg from "../../images/media_page_bg.png";
// import bgM from "../../images/media_paga_bg.png";

// import curveImage from "../../images/media_page_curve.svg";
import test1 from "../../images/media_img_test_1.png";
import test2 from "../../images/media_img_test_2.png";
import test3 from "../../images/media_img_test_3.png";

import MaterialCard from '../../components/MaterialCard/MaterialCard'

import { useTranslation } from 'react-i18next';

const Media = () => {
    const { t } = useTranslation('media')

    // const [isChildFilterClicked, setIsChildFilterClicked] = useState(true);
    // const [isAllFilterClicked, setIsAllFilterClicked] = useState(false);

    // const handleChildFilterClick = () => {
    //     if (!isChildFilterClicked) {
    //         setIsChildFilterClicked(!isChildFilterClicked);
    //         setIsAllFilterClicked(false); 
    //     }
    // };

    // const handleAllFilterClick = () => {
    //     if (!isAllFilterClicked) {
    //         setIsAllFilterClicked(!isAllFilterClicked);
    //         setIsChildFilterClicked(false); 
    //     }
    // };

    return (
        <div>
            <div>
                <h1 className={styles.hero_header}>{t('media_headline')}</h1>
                <div className={styles.bg_container}>
                    <img className={styles.bg} src={bg} alt="" />
                    {/* <img className={styles.bgM} src={bgM} alt="" /> */}
                </div>
            </div>
            {/* <div className={styles.ui}>
                <div className={`${styles.ui_headers}`}>
                    <p className={`${styles.ui_header} ${isChildFilterClicked ? styles.selected : ''}`}
                        onClick={handleChildFilterClick} >
                        Для детей { isChildFilterClicked && (
                            <img src={curveImage} alt="0" className={styles.curve} />
                        )}
                    </p>
                    <p className={`${styles.ui_header} ${isAllFilterClicked ? styles.selected : ''}`}
                        onClick={handleAllFilterClick} > 
                        Для всех { isAllFilterClicked && (
                            <img src={curveImage} alt="1" className={styles.curve} />
                        )}
                    </p>
                </div>
                
                <p className={styles.ui_text}>
                    Как провести время с детьми, чтобы всем было полезно и интересно: книги, музыка, мультфильмы и игры, отобранные экспертами
                </p>
                <div className={styles.ui_filters}>
                    <button className={styles.ui_filter}>Cмотреть</button>
                    <button className={styles.ui_filter}>Читать</button>
                    <button className={styles.ui_filter}>Слушать</button>
                    <button className={styles.ui_filter}>Узнавать</button>
                    <button className={styles.ui_filter}>Играть</button>
                </div>
            </div> */}
            <div className={styles.disclaimer}>
                <p>
                    {t('media_text')}
                </p>
            </div>
            <div className={styles.materials}>
                <MaterialCard
                    imageSrc={test1}
                    title="смотреть"
                    subtitle="Сбор фотографий из личных архивов жителей Ташкента"
                    text="Ваш личный вклад в восстановление истории Республиканской детской библиотеки"
                />
                <MaterialCard
                    imageSrc={test2}
                    title="смотреть"
                    subtitle="Находка в ходе реставрации: исторические живописные панно "
                    text="Настенная живопись 1960-х годов в главном читальном зале Республиканской детской библиотеки "
                />
                <MaterialCard
                    imageSrc={test3}
                    title="смотреть"
                    subtitle="Книжное место: Британская библиотека"
                    text="Постоянная рубрика об уникальных и интереснейших библиотеках мира "
                />
            </div>
        </div>
    );
};

export default Media;