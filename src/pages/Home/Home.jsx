import Hero from './../../components/Hero/Hero';

import styles from './Home.module.css';
import bg from './../../images/home_bg.png';
import bgM from './../../images/home_bg[mobile].png';

const Home = () => {
    return (
        <>
            <Hero />
            <div className={styles.bg_container}>
                <img className={styles.bg} src={bg} alt="" />
                <img className={styles.bgM} src={bgM} alt="" />
            </div>
        </>
    );
};

export default Home;