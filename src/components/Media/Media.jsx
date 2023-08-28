import styles from "./Media.module.css";

// import MaterialCard from "./../MaterialCard/MaterialCard";

function Media() {
    return (
        <>
            <div className={styles.media_container}>
                <p className={styles.media_header}>Материалы</p>
                <div className={styles.media_thumbs}>
                    <div className={styles.media_thumb}>
                        {/* <MaterialCard
                            imageSrc={test1}
                            title="смотреть"
                            subtitle="Самые необычные техники анимаций"
                            text="Обзор эволюции кинематографических адаптаций великих произведений французской литературы."
                        />
                        <MaterialCard
                            imageSrc={test2}
                            title="смотреть"
                            subtitle="Самые необычные техники анимаций"
                            text="Обзор эволюции кинематографических адаптаций великих произведений французской литературы."
                        />
                        <MaterialCard
                            imageSrc={test3}
                            title="смотреть"
                            subtitle="Самые необычные техники анимаций"
                            text="Обзор эволюции кинематографических адаптаций великих произведений французской литературы."
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media;