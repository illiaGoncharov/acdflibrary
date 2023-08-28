import Hero from './../../components/Hero/Hero';
import About from './../../components/About/About';
import Info from './../../components/Info/Info';
import Events from './../../components/Events/Events';
import Form from './../../components/Form/Form';

import styles from './Home.module.css';
import bg from './../../images/home_bg.png';
import bgM from './../../images/home_bg[mobile].png';

// import { useTranslation } from 'react-i18next';

const Home = () => {
    // const { t } = useTranslation('header');

    return (
        <>
            <div className={styles.bg_container}>
                <img className={styles.bg} src={bg} alt="" />
                <img className={styles.bgM} src={bgM} alt="" />
            </div>
            <Hero />
            <About />
            <Info />
            <Events />
            <Form />
        </>
    );
};

export default Home;