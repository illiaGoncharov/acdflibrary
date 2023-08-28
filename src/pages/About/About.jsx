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
                <h1 className={styles.hero_header}>О библиотеке</h1>
                <div className={styles.bg_container}>
                    <img className={styles.bg} src={bg} alt="" />
                    {/* <img className={styles.bgM} src={bgM} alt="" /> */}
                </div>
            </div>
            <div className={styles.aboutOne}>
                <img className={styles.bird} src={bird} alt="" />
                <div className={styles.text_container}>
                    <p className={styles.text_header}>
                        Республиканская детская библиотека — это современная книжная институция, культурный центр и общественное пространство для детей и взрослых в историческом здании.
                    </p>
                    <img className={styles.lib} src={libraryImage} alt="" />
                    <p className={styles.text_basic}>
                        В сердце проекта — детская библиотека, которую знают и помнят Ташкентцы: она работает на этом месте с 1965 года. Библиотека сегодня — это открытый книжный фонд, публичная программа с мастер-классами, клубы по интересам и бесплатный доступ к информации всем желающим.
                        <br /> <br />
                        Основное внимание программы уделено детям от 3-х до 16 лет. Для них в библиотеке создана благоприятная среда для учебы, творчества и развития потенциала. Мы также верим, что это важно не только детям, но и взрослым, для которых в программе библиотеки отведено место и время.
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
                        История здания
                    </p>
                </div>

                <div className={styles.about_column}>
                    <p className={styles.text_basic}>
                        В 1965 году Республиканская детская библиотека въехала в построенный в 1880-х особняк братьев Вадьяевых, который они в 1909 году продали городу. Тогда же к особняку было пристроено здание по проекту архитектора Ивана Маркевича, будущего городского архитектора Ташкента. Здание изначально выделялось среди остальных благодаря своей архитектуре. А в процессе реконструкции и частичной реставрации удалось не только сохранить историческое и культурное наследие, но и интегрировать в современный городской контекст памятник 19 века. Место становится живым и саморазвивающимся, демонстрируя своим примером современный уровень работы с архитектурным наследием и переосмысления общественных пространств.
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
                        Фонд развития культуры и искусства
                    </p>
                </div>

                <div className={styles.about_column}>
                    <p className={styles.text_basic}>
                        Реконструкцию, перезапуск и перепрограммирование Республиканской детской библиотеки инициировал Фонд развития культуры и искусства. Это первый подобный проект, запустившийся в Узбекистане. В рамках своей миссии Фонд берет на себя задачу поддержания и развития библиотеки как современной институции международного уровня, актуализируя ее работу и предоставляя необходимые возможности и ресурсы для развития. Проект стал прецедентом сохранения, актуализации и переосмысления архитектурного наследия в контексте создания современного городского общественного пространства.
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