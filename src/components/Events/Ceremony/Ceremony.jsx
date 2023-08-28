import styles from "./Ceremony.module.css";
import { useTranslation } from 'react-i18next';

import bg from "./../../../images/events/ceremony/ceremony.png";

function Ceremony() {
  const { t } = useTranslation('events');
  return (
    <>
        <div className={styles.event_container}>
            <div className={styles.event_hero}>
              <img src={bg} alt="" />
              <div>
                <p className={styles.event_header}>
                  {t('Ceremony_header')}
                </p>
                <p className={styles.event_subheader}>
                  {t('Ceremony_subheader')}
                </p>  
              </div>
            </div>
            <div className={styles.program}>
              <div className={`${styles.schedule_container}`}>
                <p className={`${styles.schedule_header}`}>Зал встреч</p>
                 <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>12:00 - 13:00</p>
                    <p className={`${styles.schedule_description}`}>Открывающая лекция на тему “Библиотека как новая форма общественного пространства” от руководителя архитектурного бюро, главного архитектора Детской Республиканской библиотеки</p>
                  </div>
                  <hr className={`${styles.schedule_line}`}/>
                </div>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>13:30 - 15:00</p>
                    <p className={`${styles.schedule_description}`}>Лекция по специфике инклюзии на тему “Мы разные, но равные” от Абдуллы Абдухалилова.</p>
                    <p className={`${styles.schedule_speaker}`}>Абдухалилов Абдулла Абдухамидович - доктор социологических наук, доцент кафедры социальной работы в Национальном университете Узбекистана имени Мирзо Улугбека</p>
                  </div>
                  <hr className={`${styles.schedule_line}`} />  
                </div>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>15:00 - 16:30, 14+</p>
                    <p className={`${styles.schedule_description}`}>Лекция сотрудника Планетария No1 (Санкт-Петербург) Ирины Церуш на тему «Геймификация пространства библиотеки»</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>16:30 - 18:00, 12-16+</p>
                    <p className={`${styles.schedule_description}`}>Открытая дискуссия о становлении молодого дирижера от Асадбека Аюбджанова. Сессия Вопрос ответ от детей на тему: как</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.schedule_container}`}>
                <p className={`${styles.schedule_header}`}>Зона чтения</p>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>12:30 - 13:00</p>
                    <p className={`${styles.schedule_description}`}>Мамина радость: Читальный клуб. Обсуждение книги от психолога Натальи Ремиш « Просто о важном»</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>14:30 - 15:00, 6+</p>
                    <p className={`${styles.schedule_description}`}>Презентация детской книги «История Допки» автора Саиды Рашидовой. ASIAN BOOK HOUSE</p>
                    <p className={`${styles.schedule_speaker}`}>«История Допки» - серия сказок о культуре, традициях и обычаях узбекского народа.</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>15:30 – 16:00, 12+</p>
                    <p className={`${styles.schedule_description}`}>Творческая беседа с автором книг «Коинот жавоҳири” и “Галактикага сайёҳат”» Садуллой Куроновым.</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>16:30 - 18:00, 12-16+</p>
                    <p className={`${styles.schedule_description}`}>Открытая дискуссия о становлении молодого дирижера от Асадбека Аюбджанова. Сессия Вопрос ответ от детей на тему: как</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.schedule_container}`}>
              <p className={`${styles.schedule_header}`}>Зал-трансформер</p>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>12:30 - 14:00, 10+</p>
                    <p className={`${styles.schedule_description}`}>Мастер-класс по созданию коллажа от иллюстратора Ксении Горбачевой</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>17:00 - 19:00, 6+</p>
                    <p className={`${styles.schedule_description}`}> Мастер-класс “Это моя книга: делаем зин-прогулку” от иллюстратора Каси Денисевич
                    </p>
                    <p className={`${styles.schedule_speaker}`}> Как рождается книга? О чем она может быть? Из чего состоит? Мы посмотрим на книги и картинки из фонда библиотеки, обсудим чем они отличаются друг от друга, а потом представим себя в роли художника и издателя одновременно и сделаем свою первую рукотворную книгу-зин.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.schedule_container}`}>
                <p className={`${styles.schedule_header}`}>Игровой класс</p>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>13:30 - 16:30, 6-10 </p> 
                    <p className={`${styles.schedule_description}`}> Архитектурный мастер-класс от представителей архитектурной студии Ludi Architect</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>16:30 - 17:30, 14 – 18+</p>
                    <p className={`${styles.schedule_description}`}> Мастер-класс по созданию роликов по моушен дизайну от Аваза Абдураимова
                    </p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} /> 
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>14:00 - 16:00, 14 – 18+</p>
                    <p className={`${styles.schedule_description}`}> Мастер класс по каллиграфии от представителей Института Конфуция
                    </p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>16:00 – 17:00, 6 +</p>
                    <p className={`${styles.schedule_description}`}> Чайная церемония от представителей Института Конфуция
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.schedule_container}`}>
                <p className={`${styles.schedule_header}`}>Зал-трансформер</p>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>14:30 - 19:30, 6+</p>
                    <p className={`${styles.schedule_description}`}>Мастер-классы по игре на фортепиано для начинающих</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.schedule_container}`}>
              <p className={`${styles.schedule_header}`}>Компьютерный класс</p>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>14:40 - 16:10, 8 + </p>
                    <p className={`${styles.schedule_description}`}>Лекция «Птицы Ташкента» и презентация «Не забирайте птенцов домой»</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.schedule_container}`}>
                <p className={`${styles.schedule_header}`}>Амфитеатр</p>
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>17:00 - 20:00, 12 +</p>
                    <p className={`${styles.schedule_description}`}>Мастер-класс по робототехнике от специалиста IT Park Акбрашоха Алиева</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>16:30 - 18:30, 12 +</p>
                    <p className={`${styles.schedule_description}`}>Флористический мастер-класс от цветочного дома Goodveen</p>
                      <ul className={`${styles.schedule_link}`}>
                        <li className={`${styles.schedule_link_item}`}>
                          флористический мастер-класс по сбору букетов</li>
                        <li className={`${styles.schedule_link_item}`}>
                          флористический мастер-класс по посадке растений и уходу</li>
                      </ul>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>18:00 - 19:00</p>
                    <p className={`${styles.schedule_description}`}>Просмотр спектакля «Бей Дубинка» от Узбекского Национального театра кукол на сцене амфитеатра (на узбекском языке)</p>
                  </div>
                </div>
                <hr className={`${styles.schedule_line}`} />  
                <div className={`${styles.schedule}`}>
                  <div className={`${styles.schedule_details}`}>
                    <p className={`${styles.schedule_time}`}>19:00 - 20:00</p>
                    <p className={`${styles.schedule_description}`}>Просмотр спектакля «Бей Дубинка» от Узбекского Национального театра кукол на сцене амфитеатра (на русском языке)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sidebar}>
            </div>
        </div>
    </>
  );
};

export default Ceremony;

