import styles from './Form.module.css';
import formImage from "../../images/form.png";
import Subscribe from "../../components/Subscribe/Subscribe";
import { useTranslation } from 'react-i18next';

function Form() {
  const { t } = useTranslation('home');
  return (
    <>
      <div className={styles.form_container}>
        <div className={styles.form_column}>
          <div className={styles.form_image_container}>
            <img className={styles.form_image}  src={formImage} alt="" />
          </div>
        </div>
        <div className={styles.form_column}>
          <div className={styles.form_main}>
            <p className={styles.form_header}>{t('form_header')}</p>
            <p className={styles.form_text}>{t('form_text')}</p>
            <Subscribe customStyles={styles.form_subcribe} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Form;
