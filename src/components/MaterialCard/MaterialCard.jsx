import PropTypes from 'prop-types';
import styles from './MaterialCard.module.css';

function MaterialCard({ imageSrc, title, subtitle, text, customStyles }) {
    const combinedStyles = {
        ...styles, // Ваши модульные стили
        ...customStyles, // Пользовательские стили переданные через пропсы
    };
    return (
        <div className={combinedStyles.material_card}>
            <img src={imageSrc} alt={title} className={combinedStyles.material_image} />
            <div className={combinedStyles.card_overlay}>
                {/* <h2 className={combinedStyles.card_title}>{title}</h2> */}
                <h3 className={combinedStyles.card_subtitle}>{subtitle}</h3>
                <p className={combinedStyles.card_text}>{text}</p>
            </div>
        </div>
    );
}

MaterialCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default MaterialCard;
