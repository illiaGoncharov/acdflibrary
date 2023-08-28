
import styles from "./Childhood.module.css";
import SimpleSwiper from "../../SimpleSwiper/SimpleSwiper";

import bg from "./../../../images/events/childhood/childhood.png";
import bgCarousel from "./../../../images/events/childhood/bg_carousel.png";

import image1 from "./../../../images/events/childhood/1.png";
import image2 from "./../../../images/events/childhood/2.png";

import { useTranslation } from 'react-i18next';

function Childhood() {
  const { t } = useTranslation('events');

  const imageUrls = [
    image1,
    image2
  ];

  return (
    <>
        <div className={styles.event_container}>
            <div className={styles.program}>
              <div className={styles.event_hero}>
                <img src={bg} alt="" />
                <div>
                  <p className={styles.event_header}>
                    {t('Childhood_header')}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.childhood_text}>
              Выставка "Я живу в Узбекистане" началась с нескольких детских книг, выпущенных в 1920-1930-х годах в Узбекистане. Её запуск стал первым публичным показом архивов библиотеки, посвященных истории детской литературы и издательской деятельности в Центральной Азии. Экспозиция включает несколько книг, созданных талантливыми художниками, такими как Александр Николаев (Усто Мумин), Лидия Жолткевич и Искандар Икрамов, повествующих о жизни в республике для маленьких детей.
            </div>
            <div className={styles.swiper}>
                <SimpleSwiper imageUrls={imageUrls} />
                <img className={styles.bg} src={bgCarousel} alt="" />
            </div>
        </div>
    </>
  );
};

export default Childhood;

